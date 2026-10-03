import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

import { injectPrerenderedRoute } from './src/server/routeRenderer.ts';

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);
const isProd = process.env.NODE_ENV === 'production';

// Parse incoming payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Explicit SEO, AI Crawlers & Sitemap Endpoints
const PUBLIC_DIR = path.resolve('public');
app.use(express.static(PUBLIC_DIR, { maxAge: '1h' }));

app.all(['/robots.txt', '/robots.txt/'], (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.setHeader('X-Robots-Tag', 'all');

  const filePath = path.join(PUBLIC_DIR, 'robots.txt');
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  res.send("User-agent: *\nAllow: /\nSitemap: https://tech.njuregroup.in/sitemap.xml\n");
});

app.all(['/sitemap.xml', '/sitemap.xml/'], (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.setHeader('X-Robots-Tag', 'all');

  const filePath = path.join(PUBLIC_DIR, 'sitemap.xml');
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  res.status(404).send('Sitemap not found');
});

app.all(['/llms.txt', '/llms.txt/'], (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.setHeader('X-Robots-Tag', 'all');

  const filePath = path.join(PUBLIC_DIR, 'llms.txt');
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  res.status(404).send('LLMs specification not found');
});

app.all(['/site.webmanifest', '/site.webmanifest/'], (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Cache-Control', 'public, max-age=3600');

  const filePath = path.join(PUBLIC_DIR, 'site.webmanifest');
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  res.status(404).send('Manifest not found');
});

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Global Error Handling Middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('[GLOBAL EXPRESS ERROR]:', err);
  const status = typeof err.status === 'number' ? err.status : 500;
  return res.status(status).json({
    success: false,
    message: err.message || 'An internal server error occurred.',
  });
});

// Vite Dev vs. Production Static Server with Server-Side Route Pre-rendering for SEO
async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, host: '0.0.0.0', port: PORT },
      appType: 'custom',
    });
    app.use(vite.middlewares);

    // Route-specific SEO and crawler content injection in development mode
    app.get('*', async (req: Request, res: Response, next: NextFunction) => {
      // Pass through API routes and static asset requests
      if (req.path.startsWith('/api') || (req.path.includes('.') && !req.path.endsWith('.html'))) {
        return next();
      }

      try {
        const templatePath = path.resolve('index.html');
        let template = fs.readFileSync(templatePath, 'utf-8');
        template = await vite.transformIndexHtml(req.originalUrl, template);
        const html = injectPrerenderedRoute(template, req.path);

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('X-Robots-Tag', 'index, follow');
        return res.status(200).send(html);
      } catch (e: any) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    const distPath = path.resolve('dist');
    // Static assets without automatic directory index serving
    app.use(express.static(distPath, { index: false }));

    // Route-specific SEO and crawler content injection in production mode
    app.get('*', (req: Request, res: Response, next: NextFunction) => {
      if (req.path.startsWith('/api') || (req.path.includes('.') && !req.path.endsWith('.html'))) {
        return next();
      }

      try {
        const templatePath = path.join(distPath, 'index.html');
        if (fs.existsSync(templatePath)) {
          const template = fs.readFileSync(templatePath, 'utf-8');
          const html = injectPrerenderedRoute(template, req.path);
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('X-Robots-Tag', 'index, follow');
          return res.status(200).send(html);
        }
        res.status(404).send('Page not found');
      } catch (e) {
        next(e);
      }
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
