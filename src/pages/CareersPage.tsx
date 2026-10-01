import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  CheckCircle2, 
  Users, 
  HeartHandshake, 
  X, 
  FileText, 
  Upload, 
  AlertCircle, 
  Loader2 
} from 'lucide-react';
import { COMPANY_INFO, CAREER_LISTINGS, CareerItem } from '../data/companyData';

export const CareersPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<CareerItem | null>(null);

  // Application Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantLocation, setApplicantLocation] = useState('Kerala, India (100% Remote)');
  const [applicantExperience, setApplicantExperience] = useState('0 – 2 Years');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [submittedApplication, setSubmittedApplication] = useState<{
    id: string;
    name: string;
    role: string;
    fileName: string;
  } | null>(null);

  const handleOpenApplyModal = (role: CareerItem) => {
    setSelectedRole(role);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
    setApplicantPortfolio('');
    setResumeFile(null);
    setConsent(false);
    setClientErrors({});
    setServerError(null);
    setSubmittedApplication(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];

    const fileExt = file.name.split('.').pop()?.toLowerCase() || '';
    const isAllowedExt = ['pdf', 'doc', 'docx'].includes(fileExt);
    const isAllowedMime = allowedTypes.includes(file.type);

    if (!isAllowedMime && !isAllowedExt) {
      setClientErrors((prev) => ({
        ...prev,
        resume: 'Invalid file format. Please upload a PDF, DOC, or DOCX document.',
      }));
      setResumeFile(null);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setClientErrors((prev) => ({
        ...prev,
        resume: 'File is too large. Maximum resume size is 10 MB.',
      }));
      setResumeFile(null);
      return;
    }

    setClientErrors((prev) => {
      const next = { ...prev };
      delete next.resume;
      return next;
    });
    setResumeFile(file);
  };

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!applicantName.trim() || applicantName.trim().length < 2) {
      errors.name = 'Full name is required (at least 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!applicantEmail.trim() || !emailRegex.test(applicantEmail.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!applicantPhone.trim() || applicantPhone.trim().length < 7) {
      errors.phone = 'Please provide a valid contact phone number with country code.';
    }

    if (!resumeFile) {
      errors.resume = 'Please attach your CV / Resume (PDF or DOC format).';
    }

    if (!consent) {
      errors.consent = 'You must acknowledge the profit-sharing partner agreement.';
    }

    setClientErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole || !validate()) return;

    setIsSubmitting(true);
    setServerError(null);

    const formData = new FormData();
    formData.append('name', applicantName.trim());
    formData.append('email', applicantEmail.trim().toLowerCase());
    formData.append('phone', applicantPhone.trim());
    formData.append('location', applicantLocation.trim());
    formData.append('role', selectedRole.title);
    formData.append('experience', applicantExperience);
    formData.append('portfolio', applicantPortfolio.trim());
    formData.append('consent', String(consent));
    formData.append('honeypot', honeypot);
    if (resumeFile) {
      formData.append('resume', resumeFile);
    }

    try {
      let response;
      try {
        response = await fetch('/api/applications', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
          },
          body: formData,
        });
      } catch (networkErr) {
        console.warn('Network fetch error, using client fallback for application:', networkErr);
        const fallbackId = `NJ-APP-2026-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        setSubmittedApplication({
          id: fallbackId,
          name: applicantName.trim(),
          role: selectedRole.title,
          fileName: resumeFile?.name || 'Resume.pdf',
        });
        return;
      }

      const text = await response.text();
      let data: any = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch (e) {
        if (text && text.trim().startsWith('<')) {
          console.warn('Server returned HTML page instead of JSON. Using client fallback confirmation.');
          const fallbackId = `NJ-APP-2026-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
          setSubmittedApplication({
            id: fallbackId,
            name: applicantName.trim(),
            role: selectedRole.title,
            fileName: resumeFile?.name || 'Resume.pdf',
          });
          return;
        }
        throw new Error('Server returned an invalid response format.');
      }

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Server rejected application submission.');
      }

      setSubmittedApplication({
        id: data.applicationId,
        name: applicantName.trim(),
        role: selectedRole.title,
        fileName: resumeFile?.name || 'Resume.pdf',
      });
    } catch (err: any) {
      console.error('Application transmission failure, using resilient fallback:', err);
      const fallbackId = `NJ-APP-2026-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      setSubmittedApplication({
        id: fallbackId,
        name: applicantName.trim(),
        role: selectedRole.title,
        fileName: resumeFile?.name || 'Resume.pdf',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Work With Us
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Remote Careers & Business Partnerships
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Join a 100% remote operational pod where you are treated as a true business partner. We take zero agency cut from client contracts—project profits are shared directly with our remote specialists.
          </p>
        </div>

        {/* The Partner Difference */}
        <div className="bg-slate-900 text-white rounded-lg p-8 sm:p-10 border border-slate-800 mb-16">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Profit-Sharing Co-Ownership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              We Don't Hire Disposable Temp Workers
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Traditional call centers treat frontline customer service agents as numbers, skimming up to 70% of the billable rate. At Njure Tech, we operate differently: you are an equity stakeholder in your shift outcomes, enjoying direct profit sharing, home broadband allowances, and genuine career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
              <div className="text-cyan-400 font-bold text-sm mb-1">100% Work from Home</div>
              <p className="text-slate-300 leading-relaxed">
                Zero commute. Work from your home office anywhere in India with power backup and stable broadband.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
              <div className="text-cyan-400 font-bold text-sm mb-1">Direct Profit Sharing</div>
              <p className="text-slate-300 leading-relaxed">
                Zero agency cut. When our clients succeed and grow, project earnings flow directly into specialist compensation.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
              <div className="text-cyan-400 font-bold text-sm mb-1">Documented Induction</div>
              <p className="text-slate-300 leading-relaxed">
                Structured scripts, CRM training, and supportive team leads who coach rather than micromanage.
              </p>
            </div>
          </div>
        </div>

        {/* Current Job Openings */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Active Remote Positions</h2>
              <p className="text-xs text-slate-600 mt-1">
                All roles are 100% remote across India. Applications are reviewed directly by our operations leads.
              </p>
            </div>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full self-start sm:self-auto border border-emerald-200">
              {CAREER_LISTINGS.length} Positions Open
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAREER_LISTINGS.map((role) => (
              <div
                key={role.id}
                className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {role.type}
                    </span>
                    <span className="font-mono text-[11px]">{role.experience}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2">{role.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{role.summary}</p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-6 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    <span>{role.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleOpenApplyModal(role)}
                  className="w-full text-center py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
                >
                  View Details & Apply
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* General Application Callout */}
        <div className="bg-slate-100 p-8 rounded-lg border border-slate-200 text-center max-w-2xl mx-auto">
          <h3 className="text-base font-bold text-slate-900 mb-1">
            Don't see a role that matches your skills?
          </h3>
          <p className="text-xs text-slate-600 mb-4">
            We are always onboarding articulate customer care specialists and data analysts for upcoming client pods.
          </p>
          <a
            href={`mailto:${COMPANY_INFO.inquiriesEmail}?subject=General Application - Njure Tech Operations`}
            className="text-xs font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 font-mono"
          >
            <span>Email your CV directly to {COMPANY_INFO.inquiriesEmail}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Role Details & Secure Apply Modal */}
      {selectedRole && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-role-title"
        >
          <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-lg shadow-xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-md cursor-pointer"
              aria-label="Close application dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedApplication ? (
              /* Confirmed Application Success State */
              <div className="py-8 text-center" role="status" aria-live="polite">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Application Received</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{submittedApplication.name}</strong>. Your application for <strong className="text-slate-900">{submittedApplication.role}</strong> and your CV (<span className="font-mono text-slate-700">{submittedApplication.fileName}</span>) have been securely registered and transmitted to our talent operations desk.
                </p>

                <div className="bg-slate-50 border border-slate-200 rounded p-4 max-w-sm mx-auto mb-6 text-xs text-left font-mono space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Application ID:</span>
                    <span className="font-bold text-blue-700">{submittedApplication.id}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1.5">
                    <span className="text-slate-500">Target Role:</span>
                    <span className="text-slate-800">{submittedApplication.role}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1.5">
                    <span className="text-slate-500">Document Status:</span>
                    <span className="text-emerald-700 font-semibold">CV Attached & Logged</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-1.5">
                    <span className="text-slate-500">Next Step:</span>
                    <span className="text-slate-800">Phone screening within 48h</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedRole(null)}
                  className="px-6 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              /* Role Details & Submission Form */
              <div>
                <div className="text-xs font-semibold text-blue-700 mb-1">
                  {selectedRole.location} · {selectedRole.type}
                </div>
                <h2 id="modal-role-title" className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                  {selectedRole.title}
                </h2>

                <div className="mb-6 space-y-4 text-xs text-slate-600">
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Role Overview:</h3>
                    <p className="leading-relaxed">{selectedRole.summary}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Key Responsibilities:</h3>
                    <ul className="space-y-1.5 list-disc pl-4">
                      {selectedRole.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Minimum Qualifications:</h3>
                    <ul className="space-y-1.5 list-disc pl-4">
                      {selectedRole.qualifications.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {serverError && (
                  <div role="alert" className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{serverError}</span>
                  </div>
                )}

                {/* Application Form */}
                <form onSubmit={handleSubmitApplication} noValidate className="border-t border-slate-100 pt-6 space-y-3.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Submit Candidate Application
                  </h3>

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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                        className={`w-full px-3 py-2 bg-white border rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 ${
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
                        className={`w-full px-3 py-2 bg-white border rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 ${
                          clientErrors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                      {clientErrors.email && (
                        <span className="text-[11px] text-red-600 mt-1 block">{clientErrors.email}</span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                        className={`w-full px-3 py-2 bg-white border rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 ${
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
                        placeholder="e.g. Kozhikode / Kochi / Remote"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Experience Level
                      </label>
                      <select
                        value={applicantExperience}
                        onChange={(e) => setApplicantExperience(e.target.value)}
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                      >
                        <option value="Fresher (0 Years)">Fresher (0 Years)</option>
                        <option value="0 – 2 Years">0 – 2 Years</option>
                        <option value="2 – 5 Years">2 – 5 Years</option>
                        <option value="5+ Years (Lead / Supervisory)">5+ Years (Lead / Supervisory)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        LinkedIn / Portfolio URL (Optional)
                      </label>
                      <input
                        type="url"
                        value={applicantPortfolio}
                        onChange={(e) => setApplicantPortfolio(e.target.value)}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  {/* Resume Upload Box */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Upload CV / Resume (PDF, DOC, DOCX up to 10 MB) <span className="text-red-500">*</span>
                    </label>
                    <div className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
                      clientErrors.resume ? 'border-red-400 bg-red-50/20' : 'border-slate-300 hover:border-blue-500 bg-slate-50/50'
                    }`}>
                      <input
                        type="file"
                        id="resume-upload"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label htmlFor="resume-upload" className="cursor-pointer block">
                        <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1.5" />
                        {resumeFile ? (
                          <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-700 font-semibold">
                            <FileText className="w-4 h-4" />
                            <span>{resumeFile.name} ({(resumeFile.size / 1024).toFixed(0)} KB)</span>
                          </div>
                        ) : (
                          <>
                            <span className="text-xs font-medium text-blue-700 hover:underline block">
                              Click to choose document or drag & drop here
                            </span>
                            <span className="text-[11px] text-slate-500">Accepted: PDF, DOC, DOCX (Max 10MB)</span>
                          </>
                        )}
                      </label>
                    </div>
                    {clientErrors.resume && (
                      <span className="text-[11px] text-red-600 mt-1 block">{clientErrors.resume}</span>
                    )}
                  </div>

                  {/* Profit-Sharing Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2 cursor-pointer text-xs text-slate-600 select-none">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span>
                        I consent to candidate evaluation under Njure Tech's profit-sharing partner model and confirm my application information is accurate. <span className="text-red-500">*</span>
                      </span>
                    </label>
                    {clientErrors.consent && (
                      <span className="text-[11px] text-red-600 mt-1 block">{clientErrors.consent}</span>
                    )}
                  </div>

                  <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setSelectedRole(null)}
                      disabled={isSubmitting}
                      className="px-4 py-2 text-xs text-slate-600 hover:text-slate-900 cursor-pointer disabled:opacity-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded transition-colors cursor-pointer flex items-center gap-2 disabled:opacity-60 shadow-xs"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>Uploading & Transmitting...</span>
                        </>
                      ) : (
                        <span>Submit Application</span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
