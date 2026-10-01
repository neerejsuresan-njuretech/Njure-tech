import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import multer from 'multer';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';

// Ensure data and uploads directories exist
const DATA_DIR = path.resolve('.data');
const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });

const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');
const APPLICATIONS_FILE = path.join(DATA_DIR, 'applications.json');

if (!fs.existsSync(INQUIRIES_FILE)) fs.writeFileSync(INQUIRIES_FILE, JSON.stringify([], null, 2));
if (!fs.existsSync(APPLICATIONS_FILE)) fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify([], null, 2));

// Parse incoming payloads
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true, limit: '5mb' }));

// Disable fingerprinting header
app.disable('x-powered-by');

// Global HTTP Security Headers Middleware
app.use((_req: Request, res: Response, next: NextFunction) => {
  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Referrer Policy: sends full URL for same-origin, origin only on cross-origin HTTPS
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Enforce HTTPS
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');

  // Permissions Policy: restrict unused hardware and sensors
  res.setHeader(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), accelerometer=(), gyroscope=()'
  );

  // Content Security Policy
  // Note on exceptions:
  // - 'unsafe-inline' and 'unsafe-eval' for scripts support Vite HMR dev server and client SPA chunk initialization.
  // - 'unsafe-inline' for styles supports Tailwind CSS dynamic injections and Three.js canvas containers.
  // - frame-ancestors permits framing inside Google AI Studio and Cloud Run runtimes while blocking unauthorized clickjacking.
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https: wss: ws:",
      "frame-ancestors 'self' https://*.google.com https://*.run.app https://aistudio.google.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
  );

  next();
});

// Input Sanitization Helpers
function sanitizeText(value: unknown, maxLength = 2000): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[<>]/g, '') // Strip angle brackets to eliminate HTML/script injection
    .trim()
    .slice(0, maxLength);
}

function sanitizeEmail(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().toLowerCase().slice(0, 254);
}

function sanitizePhone(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[^0-9+\s()-]/g, '').trim().slice(0, 30);
}

// In-Memory Rate Limiting
interface RateLimitEntry {
  count: number;
  resetTime: number;
}
const ipRateLimits = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 10;

function rateLimiter(req: Request, res: Response, next: NextFunction) {
  const clientIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown';
  const now = Date.now();

  const entry = ipRateLimits.get(clientIp);
  if (!entry || now > entry.resetTime) {
    ipRateLimits.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return next();
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfterSeconds = Math.ceil((entry.resetTime - now) / 1000);
    res.setHeader('Retry-After', retryAfterSeconds.toString());
    return res.status(429).json({
      success: false,
      error: `Too many requests. Please wait ${retryAfterSeconds} seconds before submitting again.`,
    });
  }

  entry.count++;
  next();
}

// In-Memory Duplicate Submission Detection
const recentSubmissionHashes = new Set<string>();

function getSubmissionHash(data: string): string {
  return crypto.createHash('sha256').update(data).digest('hex');
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (_req, file, cb) => {
    const timestamp = Date.now();
    const safeBasename = path.basename(file.originalname).replace(/[^a-zA-Z0-9.-]/g, '_');
    cb(null, `resume_${timestamp}_${safeBasename}`);
  },
});

const fileFilter = (_req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const allowedMimeTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  ];
  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file format. Only PDF, DOC, and DOCX resumes are accepted.'));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter,
});

// Configure Mailer
const notificationEmail = process.env.NOTIFICATION_EMAIL || 'info@njuregroup.in';
const fallbackEmail = process.env.NOTIFICATION_FALLBACK_EMAIL || 'neerej.suresan.s@gmail.com';

function createMailer() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user, pass },
    });
  }
  return null;
}

const mailer = createMailer();

async function dispatchNotification(subject: string, textContent: string, attachments?: { filename: string; path: string }[]) {
  console.log(`[NJURE NOTIFICATION] ${subject}`);
  console.log(textContent);

  if (mailer) {
    try {
      await mailer.sendMail({
        from: process.env.SMTP_FROM || `Njure Tech <no-reply@${process.env.APP_URL || 'tech.njuregroup.in'}>`,
        to: `${notificationEmail}, ${fallbackEmail}`,
        subject: `[Njure Tech Portal] ${subject}`,
        text: textContent,
        attachments: attachments || [],
      });
      console.log(`[NJURE NOTIFICATION] Email successfully dispatched to ${notificationEmail} & ${fallbackEmail}`);
    } catch (err) {
      console.error('[NJURE NOTIFICATION] SMTP dispatch error:', err);
    }
  } else {
    console.log(`[NJURE NOTIFICATION] Stored in local ledger. (SMTP not configured in env, live logged for operator receipt)`);
  }
}

// -------------------------------------------------------------
// API Endpoints
// -------------------------------------------------------------

// 1. Health & Status
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 2. Client Inquiries (POST /api/inquiries)
app.post('/api/inquiries', rateLimiter, async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      message,
      honeypot, // Spam honeypot field
    } = req.body;

    // Spam Protection: Honeypot check
    if (honeypot && String(honeypot).trim() !== '') {
      console.warn('[SPAM TRAP] Honeypot field was filled. Dropping inquiry silently.');
      return res.status(200).json({
        success: true,
        inquiryId: `NJ-INQ-${Date.now().toString(36).toUpperCase()}`,
        message: 'Inquiry received.',
      });
    }

    // Required Field Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Full name is required (minimum 2 characters).' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      return res.status(400).json({ success: false, error: 'A valid business or work email address is required.' });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return res.status(400).json({
        success: false,
        error: 'Please provide project details or workflow description (minimum 10 characters).',
      });
    }

    // Phone Validation (Optional, but if supplied must be reasonable)
    if (phone && typeof phone === 'string' && phone.trim().length > 0) {
      const cleanPhone = phone.replace(/[\s()-]/g, '');
      if (cleanPhone.length < 7 || cleanPhone.length > 18) {
        return res.status(400).json({ success: false, error: 'Please enter a valid phone number with country code.' });
      }
    }

    // Duplicate Submission Protection
    const hash = getSubmissionHash(`${email.trim().toLowerCase()}_${message.trim()}`);
    if (recentSubmissionHashes.has(hash)) {
      return res.status(409).json({
        success: false,
        error: 'A duplicate inquiry was recently received from this address. Our operations lead is already reviewing it.',
      });
    }
    recentSubmissionHashes.add(hash);
    setTimeout(() => recentSubmissionHashes.delete(hash), 5 * 60 * 1000);

    // Generate Unique Tracking ID
    const randomHex = crypto.randomBytes(3).toString('hex').toUpperCase();
    const inquiryId = `NJ-INQ-2026-${randomHex}`;

    // Sanitize and normalize inputs
    const sanitizedName = sanitizeText(name, 100);
    const sanitizedEmail = sanitizeEmail(email);
    const sanitizedPhone = phone ? sanitizePhone(phone) : null;
    const sanitizedCompany = sanitizeText(company, 150) || 'Independent / Direct';
    const sanitizedService = sanitizeText(service, 100) || 'General Client-Budget BPO Operations';
    const sanitizedBudget = sanitizeText(budget, 100) || 'To be assessed based on workflow scope';
    const sanitizedTimeline = sanitizeText(timeline, 100) || 'Standard onboarding';
    const sanitizedMessage = sanitizeText(message, 3000);

    const record = {
      id: inquiryId,
      createdAt: new Date().toISOString(),
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      company: sanitizedCompany,
      service: sanitizedService,
      budget: sanitizedBudget,
      timeline: sanitizedTimeline,
      message: sanitizedMessage,
      status: 'pending_review',
    };

    // Append to local ledger
    try {
      const existing: any[] = JSON.parse(fs.readFileSync(INQUIRIES_FILE, 'utf-8'));
      existing.unshift(record);
      fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(existing, null, 2));
    } catch (e) {
      console.error('Failed to append inquiry to ledger:', e);
    }

    // Notify Operations Team
    const emailBody = `
New Client BPO Inquiry Received
================================
Inquiry ID: ${inquiryId}
Timestamp:  ${record.createdAt}

Contact Details:
- Name:    ${record.name}
- Email:   ${record.email}
- Phone:   ${record.phone || 'Not provided'}
- Company: ${record.company}

Requirements:
- Target Service: ${record.service}
- Client Budget:  ${record.budget}
- Timeline:       ${record.timeline}

Project / Scope Description:
${record.message}
================================
    `.trim();

    await dispatchNotification(`New Client Inquiry: ${record.name} (${record.company}) [${inquiryId}]`, emailBody);

    return res.status(200).json({
      success: true,
      inquiryId,
      message: 'Inquiry received. Our operations team will respond with a tailored proposal within 24 hours.',
    });
  } catch (error: any) {
    console.error('Error handling inquiry:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your inquiry. Please email info@njuregroup.in directly.',
    });
  }
});

// 3. Careers Application (POST /api/applications)
app.post('/api/applications', rateLimiter, upload.single('resume'), async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      phone,
      location,
      role,
      experience,
      portfolio,
      consent,
      honeypot,
    } = req.body;

    const resumeFile = req.file;

    // Spam Protection
    if (honeypot && String(honeypot).trim() !== '') {
      console.warn('[SPAM TRAP] Honeypot field in job application. Dropping silently.');
      if (resumeFile && fs.existsSync(resumeFile.path)) fs.unlinkSync(resumeFile.path);
      return res.status(200).json({
        success: true,
        applicationId: `NJ-APP-${Date.now().toString(36).toUpperCase()}`,
        message: 'Application received.',
      });
    }

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      if (resumeFile) fs.unlinkSync(resumeFile.path);
      return res.status(400).json({ success: false, error: 'Full name is required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      if (resumeFile) fs.unlinkSync(resumeFile.path);
      return res.status(400).json({ success: false, error: 'A valid email address is required.' });
    }

    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      if (resumeFile) fs.unlinkSync(resumeFile.path);
      return res.status(400).json({ success: false, error: 'A valid contact phone number is required.' });
    }

    if (!role || typeof role !== 'string' || role.trim().length === 0) {
      if (resumeFile) fs.unlinkSync(resumeFile.path);
      return res.status(400).json({ success: false, error: 'Please specify the role you are applying for.' });
    }

    if (!consent || consent === 'false') {
      if (resumeFile) fs.unlinkSync(resumeFile.path);
      return res.status(400).json({
        success: false,
        error: 'You must consent to candidate evaluation under our profit-sharing partner model.',
      });
    }

    // Resume file validation
    if (!resumeFile) {
      return res.status(400).json({
        success: false,
        error: 'A resume / CV document (PDF, DOC, DOCX) is required to evaluate your application.',
      });
    }

    // Generate Unique Application ID
    const randomHex = crypto.randomBytes(3).toString('hex').toUpperCase();
    const applicationId = `NJ-APP-2026-${randomHex}`;

    // Sanitize and normalize inputs
    const sanitizedName = sanitizeText(name, 100);
    const sanitizedEmail = sanitizeEmail(email);
    const sanitizedPhone = sanitizePhone(phone);
    const sanitizedLocation = sanitizeText(location, 100) || 'Kerala / Remote';
    const sanitizedRole = sanitizeText(role, 150);
    const sanitizedExperience = sanitizeText(experience, 50) || '0-2 Years';
    const sanitizedPortfolio = portfolio ? sanitizeText(portfolio, 250) : null;
    const safeResumeOriginalName = path.basename(resumeFile.originalname).replace(/[^a-zA-Z0-9._-]/g, '_');

    const record = {
      id: applicationId,
      createdAt: new Date().toISOString(),
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
      location: sanitizedLocation,
      role: sanitizedRole,
      experience: sanitizedExperience,
      portfolio: sanitizedPortfolio,
      resumeFileName: safeResumeOriginalName,
      resumeStoredPath: resumeFile.path,
      resumeSize: resumeFile.size,
      status: 'under_review',
    };

    // Store in local ledger
    try {
      const existing: any[] = JSON.parse(fs.readFileSync(APPLICATIONS_FILE, 'utf-8'));
      existing.unshift(record);
      fs.writeFileSync(APPLICATIONS_FILE, JSON.stringify(existing, null, 2));
    } catch (e) {
      console.error('Failed to append application to ledger:', e);
    }

    // Dispatch notification with attachment
    const emailBody = `
New Candidate Application Received
===================================
Application ID: ${applicationId}
Timestamp:      ${record.createdAt}

Candidate Profile:
- Name:        ${record.name}
- Email:       ${record.email}
- Phone:       ${record.phone}
- Location:    ${record.location}
- Target Role: ${record.role}
- Experience:  ${record.experience}
- Portfolio:   ${record.portfolio || 'Not provided'}

Resume Document Attached:
- Original Name: ${record.resumeFileName}
- File Size:     ${(record.resumeSize / 1024).toFixed(1)} KB
===================================
    `.trim();

    await dispatchNotification(
      `Job Application: ${record.name} - ${record.role} [${applicationId}]`,
      emailBody,
      [
        {
          filename: record.resumeFileName,
          path: record.resumeStoredPath,
        },
      ]
    );

    return res.status(200).json({
      success: true,
      applicationId,
      message: 'Application received and registered. Our talent partners will review your resume and reach out via phone or email.',
    });
  } catch (error: any) {
    console.error('Error handling career application:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your application. Please email info@njuregroup.in directly with your CV.',
    });
  }
});

// -------------------------------------------------------------
// Vite Dev vs. Production Static Server
// -------------------------------------------------------------
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve('dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Njure Tech server running on http://0.0.0.0:${PORT} [mode: ${isProd ? 'production' : 'development'}]`);
  });
}

startServer().catch((err) => {
  console.error('Fatal server startup error:', err);
  process.exit(1);
});
