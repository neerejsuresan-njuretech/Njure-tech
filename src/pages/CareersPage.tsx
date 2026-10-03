import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  HeartHandshake, 
  Mail, 
  Copy, 
  Check, 
  Paperclip,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO, CAREER_LISTINGS, CareerItem } from '../data/companyData';
import { Breadcrumb } from '../components/Breadcrumb';

export const CareersPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<CareerItem | null>(null);

  // Application Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantLocation, setApplicantLocation] = useState('Kerala, India (100% Remote)');
  const [applicantRole, setApplicantRole] = useState(CAREER_LISTINGS[0].title);
  const [applicantExperience, setApplicantExperience] = useState('0 – 2 Years (Freshers Welcome)');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [applicantNotes, setApplicantNotes] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [copiedId, setCopiedId] = useState(false);
  const [copiedBody, setCopiedBody] = useState(false);

  const [submittedApplication, setSubmittedApplication] = useState<{
    id: string;
    name: string;
    role: string;
    experience: string;
  } | null>(null);

  const handleSelectRoleToApply = (role: CareerItem) => {
    setSelectedRole(role);
    setApplicantRole(role.title);
    const appSection = document.getElementById('application-section');
    if (appSection) {
      appSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!applicantName.trim() || applicantName.trim().length < 2) {
      errors.name = 'Full name is required (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!applicantEmail.trim() || !emailRegex.test(applicantEmail.trim())) {
      errors.email = 'Please provide a valid personal or professional email address.';
    }

    if (!applicantPhone.trim() || applicantPhone.trim().length < 7) {
      errors.phone = 'Please provide a valid contact phone number with country code.';
    }

    if (!consent) {
      errors.consent = 'You must acknowledge the profit-sharing business partner model.';
    }

    setClientErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const generateUniqueRefId = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `NJ-APP-2026-${code}`;
  };

  const getApplicationEmailText = (refId: string) => {
    return `Hello Njure Tech Talent Team,

I would like to apply for the position of "${applicantRole}". Here are my candidate details:

========================================
APPLICATION REFERENCE ID: ${refId}
TIMESTAMP:                ${new Date().toLocaleString()}
========================================

CANDIDATE DETAILS:
- Full Name:        ${applicantName || 'Not provided'}
- Email Address:    ${applicantEmail || 'Not provided'}
- Contact Phone:    ${applicantPhone || 'Not provided'}
- Current Location: ${applicantLocation || 'Not provided'}
- Target Role:      ${applicantRole}
- Experience Level: ${applicantExperience}
- Portfolio / Link: ${applicantPortfolio || 'Not provided'}

CANDIDATE NOTES:
${applicantNotes.trim() || 'Please review my resume document attached to this email.'}

========================================
NOTE: My resume / CV is attached to this email.
========================================
Thank you,
${applicantName || 'Candidate'}
`;
  };

  const createMailtoUrl = (refId: string) => {
    const recipient = 'info@njuregroup.in';
    const cc = 'neerej.suresan.s@gmail.com';
    const subject = encodeURIComponent(`[Ref: ${refId}] Job Application: ${applicantName || 'Candidate'} - ${applicantRole}`);
    const body = encodeURIComponent(getApplicationEmailText(refId));
    return `mailto:${recipient}?cc=${cc}&subject=${subject}&body=${body}`;
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const refId = generateUniqueRefId();
    const mailtoUrl = createMailtoUrl(refId);

    // Launch email client
    window.location.href = mailtoUrl;

    setSubmittedApplication({
      id: refId,
      name: applicantName.trim(),
      role: applicantRole,
      experience: applicantExperience,
    });
  };

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleCopyEmailText = (refId: string) => {
    const text = getApplicationEmailText(refId);
    navigator.clipboard.writeText(text);
    setCopiedBody(true);
    setTimeout(() => setCopiedBody(false), 2000);
  };

  const handleResetForm = () => {
    setSubmittedApplication(null);
    setClientErrors({});
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
    setApplicantPortfolio('');
    setApplicantNotes('');
    setConsent(false);
  };

  return (
    <div className="bg-slate-50 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Remote Careers & Partnerships' }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Work With Us · 100% Remote Partnerships
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Remote Careers & Business Partnerships
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Join a 100% remote operational pod where you are treated as a true business partner. We take zero agency cut from client contracts—project profits are shared directly with our remote specialists.
          </p>
        </div>

        {/* 1. OPEN ROLES */}
        <section className="mb-16" aria-labelledby="open-roles-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                Active Openings
              </div>
              <h2 id="open-roles-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
                1. Open Remote Roles
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                All positions are 100% work from home across India. Applications are evaluated directly by our operations leads.
              </p>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full self-start sm:self-auto border border-emerald-200 font-mono">
              {CAREER_LISTINGS.length} Positions Active
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAREER_LISTINGS.map((role) => (
              <div
                key={role.id}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                      {role.type}
                    </span>
                    <span className="font-mono text-[11px] text-slate-500">{role.experience}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{role.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{role.summary}</p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-4 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    <span>{role.location}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] uppercase font-bold text-slate-400 block">Core Duties:</span>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {role.responsibilities.slice(0, 3).map((resp, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectRoleToApply(role)}
                  className="w-full text-center py-2.5 px-4 bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Apply for this Role</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 2. WORKING MODEL */}
        <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 mb-16" aria-labelledby="working-model-heading">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Co-Ownership & Equity Stake</span>
            </div>
            <h2 id="working-model-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              2. Working Model: Business Partners, Not Disposable Temp Workers
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Traditional call centers treat frontline customer service agents as disposable headcount, skimming up to 70% of the client billable rate. At Njure Tech, we operate differently: you are an equitable stakeholder in shift outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="text-cyan-400 font-bold text-sm mb-1">100% Remote From Home</div>
              <p className="text-slate-300 leading-relaxed">
                Zero commute. Work comfortably from your home office anywhere in India with power backup and fiber internet.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="text-cyan-400 font-bold text-sm mb-1">Direct Profit Sharing</div>
              <p className="text-slate-300 leading-relaxed">
                Zero agency cut. When our clients succeed and grow, project earnings flow directly into specialist compensation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="text-cyan-400 font-bold text-sm mb-1">Documented Induction & Coaching</div>
              <p className="text-slate-300 leading-relaxed">
                Structured scripts, CRM training, and supportive team leads who coach rather than micromanage.
              </p>
            </div>
          </div>
        </section>

        {/* 3. APPLICATION PORTAL (MAIL-BASED DIRECT SUBMISSION) */}
        <section id="application-section" className="scroll-mt-24" aria-labelledby="application-heading">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-2xs">
            <div className="max-w-3xl mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                Candidate Application
              </div>
              <h2 id="application-heading" className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                3. Candidate Application via Email
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Complete your details below and click Send via Email. Your email application will open prefilled with an automatic candidate Reference ID. Simply attach your CV and hit send.
              </p>
            </div>

            {submittedApplication ? (
              /* Success Receipt State */
              <div className="py-6 text-center" role="status" aria-live="polite">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Email Generated</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{submittedApplication.name}</strong>. Your candidate application for <strong className="text-slate-900">{submittedApplication.role}</strong> has been structured with an automatic tracking Reference ID.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 max-w-md mx-auto mb-6 text-xs text-left font-mono space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Application Reference ID:</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-blue-700">{submittedApplication.id}</span>
                      <button
                        type="button"
                        onClick={() => handleCopyId(submittedApplication.id)}
                        className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
                        title="Copy Application ID"
                      >
                        {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1.5">
                    <span className="text-slate-500">Applied Role:</span>
                    <span className="text-slate-800 font-semibold">{submittedApplication.role}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1.5">
                    <span className="text-slate-500">Recipient Email:</span>
                    <span className="text-blue-700 font-bold">info@njuregroup.in</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1.5">
                    <span className="text-slate-500">Talent Lead CC:</span>
                    <span className="text-slate-800">neerej.suresan.s@gmail.com</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1.5">
                    <span className="text-slate-500">Next Step:</span>
                    <span className="text-amber-800 font-sans font-semibold">Attach your CV/Resume file in your email app</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={createMailtoUrl(submittedApplication.id)}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded transition-colors inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Re-open in Mail App</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyEmailText(submittedApplication.id)}
                    className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded transition-colors cursor-pointer inline-flex items-center gap-1.5"
                  >
                    {copiedBody ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedBody ? 'Copied Email Body' : 'Copy Email Body'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              /* Live Candidate Form */
              <form onSubmit={handleSubmitApplication} noValidate className="space-y-4 max-w-3xl">
                {/* Honeypot spam trap */}
                <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                  <input
                    type="text"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Sandra Pillai"
                      className={`w-full px-3.5 py-2.5 bg-white border rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 ${
                        clientErrors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {clientErrors.name && (
                      <span className="text-[11px] text-red-600 mt-1 block">{clientErrors.name}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="sandra@email.com"
                      className={`w-full px-3.5 py-2.5 bg-white border rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 ${
                        clientErrors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {clientErrors.email && (
                      <span className="text-[11px] text-red-600 mt-1 block">{clientErrors.email}</span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3.5 py-2.5 bg-white border rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 ${
                        clientErrors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                      }`}
                    />
                    {clientErrors.phone && (
                      <span className="text-[11px] text-red-600 mt-1 block">{clientErrors.phone}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Current Location
                    </label>
                    <input
                      type="text"
                      value={applicantLocation}
                      onChange={(e) => setApplicantLocation(e.target.value)}
                      placeholder="e.g. Kochi, Kerala (100% Remote)"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Target Role <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={applicantRole}
                      onChange={(e) => setApplicantRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    >
                      {CAREER_LISTINGS.map((role) => (
                        <option key={role.id} value={role.title}>
                          {role.title}
                        </option>
                      ))}
                      <option value="General Operations Specialist (Talent Pool)">
                        General Operations Specialist (Talent Pool)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Total Experience
                    </label>
                    <select
                      value={applicantExperience}
                      onChange={(e) => setApplicantExperience(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    >
                      <option value="0 – 2 Years (Freshers Welcome)">0 – 2 Years (Freshers Welcome)</option>
                      <option value="2 – 5 Years">2 – 5 Years</option>
                      <option value="5+ Years">5+ Years (Lead / Supervisor)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    LinkedIn Profile or Portfolio Link (Optional)
                  </label>
                  <input
                    type="url"
                    value={applicantPortfolio}
                    onChange={(e) => setApplicantPortfolio(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Candidate Introduction or Notes (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={applicantNotes}
                    onChange={(e) => setApplicantNotes(e.target.value)}
                    placeholder="Briefly introduce your skills, languages known (English, Malayalam, Hindi, Tamil), and operational experience..."
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                {/* Reminder banner regarding resume attachment */}
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 flex items-start gap-3">
                  <Paperclip className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold mb-0.5">Resume / CV Attachment:</strong>
                    <span>Clicking the button below opens your default email client with your candidate details. Please attach your resume document (PDF, DOC, DOCX) directly to that email.</span>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-xs text-slate-600 leading-relaxed">
                      I acknowledge that Njure Tech operates on a zero-agency-cut profit-sharing business partner model, and I consent to having my credentials evaluated for remote positions.
                    </span>
                  </label>
                  {clientErrors.consent && (
                    <span className="text-[11px] text-red-600 mt-1 block">{clientErrors.consent}</span>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send Application via Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-500 mt-3">
                    Submissions are addressed directly to our talent leads at <strong className="text-slate-700">info@njuregroup.in</strong> with an automatic tracking Reference ID.
                  </p>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
