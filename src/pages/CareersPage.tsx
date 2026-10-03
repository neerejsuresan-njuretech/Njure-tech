import React, { useState, useRef } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Users, 
  HeartHandshake, 
  X, 
  FileText, 
  Upload, 
  Mail,
  Loader2,
  AlertCircle,
  Copy,
  Check
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
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [submittedApplication, setSubmittedApplication] = useState<{
    id: string;
    name: string;
    role: string;
    experience: string;
    fileName: string;
  } | null>(null);

  const handleSelectRoleToApply = (role: CareerItem) => {
    setSelectedRole(role);
    setApplicantRole(role.title);
    // Smooth scroll to application form
    const appSection = document.getElementById('application-section');
    if (appSection) {
      appSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setClientErrors((prev) => ({ ...prev, resume: 'File size must be under 10MB.' }));
      setResumeFile(null);
      return;
    }

    // Validate type
    const validTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    if (!validTypes.includes(file.type) && !file.name.match(/\.(pdf|doc|docx)$/i)) {
      setClientErrors((prev) => ({ ...prev, resume: 'Only PDF, DOC, or DOCX resume documents are accepted.' }));
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
    setClientErrors((prev) => {
      const next = { ...prev };
      delete next.resume;
      return next;
    });
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

    if (!resumeFile) {
      errors.resume = 'Please attach your resume / CV document (PDF, DOC, DOCX).';
    }

    if (!consent) {
      errors.consent = 'You must acknowledge the profit-sharing business partner model.';
    }

    setClientErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = new FormData();
      payload.append('name', applicantName.trim());
      payload.append('email', applicantEmail.trim());
      payload.append('phone', applicantPhone.trim());
      payload.append('location', applicantLocation.trim());
      payload.append('role', applicantRole);
      payload.append('experience', applicantExperience);
      payload.append('portfolio', applicantPortfolio.trim());
      payload.append('consent', String(consent));
      payload.append('honeypot', honeypot);
      if (resumeFile) {
        payload.append('resume', resumeFile);
      }

      const res = await fetch('/api/applications', {
        method: 'POST',
        body: payload,
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || data.message || 'Failed to submit candidate application.');
      }

      setSubmittedApplication({
        id: data.applicationId,
        name: applicantName.trim(),
        role: applicantRole,
        experience: applicantExperience,
        fileName: resumeFile?.name || 'Resume Document',
      });
    } catch (err: any) {
      console.error('Job application submission error:', err);
      setSubmitError(
        err.message || 'Unable to upload application. You can email your CV directly to info@njuregroup.in.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  const handleResetForm = () => {
    setSubmittedApplication(null);
    setSubmitError(null);
    setClientErrors({});
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
    setApplicantPortfolio('');
    setResumeFile(null);
    setConsent(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
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

        {/* 3. APPLICATION PORTAL */}
        <section id="application-section" className="scroll-mt-24" aria-labelledby="application-heading">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-2xs">
            <div className="max-w-3xl mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                Candidate Application
              </div>
              <h2 id="application-heading" className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                3. Online Candidate Application
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit your CV directly to our operations team. We evaluate each application against our partner model standards and reply within 48 business hours.
              </p>
            </div>

            {submittedApplication ? (
              /* Success Receipt State */
              <div className="py-6 text-center" role="status" aria-live="polite">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Successfully Submitted</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{submittedApplication.name}</strong>. Your candidate application for <strong className="text-slate-900">{submittedApplication.role}</strong> has been saved directly to our recruitment registry.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 max-w-md mx-auto mb-6 text-xs text-left font-mono space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Application ID:</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-blue-700">{submittedApplication.id}</span>
                      <button
                        type="button"
                        onClick={() => handleCopyId(submittedApplication.id)}
                        className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
                        title="Copy Application ID"
                      >
                        {copiedId ? <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1.5">
                    <span className="text-slate-500">Applied Role:</span>
                    <span className="text-slate-800 font-semibold">{submittedApplication.role}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1.5">
                    <span className="text-slate-500">Resume Attached:</span>
                    <span className="text-slate-800">{submittedApplication.fileName}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1.5">
                    <span className="text-slate-500">Status:</span>
                    <span className="text-emerald-700 font-semibold">Under Operational Review</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1.5">
                    <span className="text-slate-500">Review SLA:</span>
                    <span className="text-slate-800">48 Business Hours</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleResetForm}
                  className="px-6 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded transition-colors cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              /* Live Real Application Form */
              <form onSubmit={handleSubmitApplication} noValidate className="space-y-4 max-w-3xl">
                {submitError && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold mb-0.5">Upload Error</strong>
                      <span>{submitError}</span>
                    </div>
                  </div>
                )}

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

                {/* File Upload for Resume */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Upload Resume / CV (PDF, DOC, DOCX up to 10MB) <span className="text-red-500">*</span>
                  </label>
                  <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg transition-colors ${
                    clientErrors.resume ? 'border-red-400 bg-red-50/20' : 'border-slate-300 hover:border-blue-400 bg-slate-50'
                  }`}>
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-8 w-8 text-slate-400" />
                      <div className="flex text-xs text-slate-600 justify-center">
                        <label
                          htmlFor="resume-upload"
                          className="relative cursor-pointer bg-transparent rounded-md font-semibold text-blue-700 hover:text-blue-800 focus-within:outline-none"
                        >
                          <span>{resumeFile ? 'Change selected resume' : 'Upload resume document'}</span>
                          <input
                            id="resume-upload"
                            name="resume-upload"
                            type="file"
                            ref={fileInputRef}
                            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            onChange={handleFileChange}
                            className="sr-only"
                          />
                        </label>
                      </div>
                      <p className="text-[11px] text-slate-500">
                        {resumeFile ? (
                          <span className="font-semibold text-emerald-700 font-mono">
                            Selected: {resumeFile.name} ({(resumeFile.size / 1024).toFixed(1)} KB)
                          </span>
                        ) : (
                          'PDF, DOC, or DOCX up to 10MB'
                        )}
                      </p>
                    </div>
                  </div>
                  {clientErrors.resume && (
                    <span className="text-[11px] text-red-600 mt-1 block">{clientErrors.resume}</span>
                  )}
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
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Uploading Resume & Registering Application...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Candidate Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 mt-3">
                    Resumes are safely archived in our secure operations storage and reviewed by our talent leads.
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
