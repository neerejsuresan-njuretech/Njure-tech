import React, { useState } from 'react';
import { 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  Laptop, 
  CheckCircle, 
  AlertCircle,
  Loader2,
  Copy,
  ExternalLink
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Breadcrumb } from '../components/Breadcrumb';

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  honeypot: string; // Spam protection honeypot
}

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Customer Support (Voice & Chat)',
    budget: 'Tailor specifically to my operational budget',
    timeline: 'Standard onboarding (1–2 weeks)',
    message: '',
    honeypot: '',
  });

  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState(false);

  const [submittedInquiry, setSubmittedInquiry] = useState<{
    id: string;
    name: string;
    company: string;
    service: string;
    budget: string;
    message: string;
  } | null>(null);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please enter your full name (minimum 2 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid business or work email address.';
    }

    if (formData.phone.trim()) {
      const cleanPhone = formData.phone.replace(/[\s()-]/g, '');
      if (cleanPhone.length < 7 || cleanPhone.length > 18) {
        errors.phone = 'Please provide a valid contact phone number with country code.';
      }
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please describe your operational requirements (minimum 10 characters).';
    }

    setClientErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (clientErrors[name]) {
      setClientErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const createMailtoUrl = (refId: string) => {
    const recipient = 'info@njuregroup.in';
    const subject = encodeURIComponent(`[Ref: ${refId}] BPO Operations Inquiry - ${formData.name || 'Client'} (${formData.company || 'Direct'})`);
    const body = encodeURIComponent(`Hello Njure Tech Team,

I would like to request an operations consultation with the following details:

========================================
REFERENCE ID: ${refId}
TIMESTAMP:    ${new Date().toLocaleString()}
========================================

CLIENT CONTACT:
- Full Name:      ${formData.name || 'Not provided'}
- Business Email: ${formData.email || 'Not provided'}
- Phone Number:   ${formData.phone || 'Not provided'}
- Company:        ${formData.company || 'Direct Client'}

PROJECT PARAMETERS:
- Target Service:   ${formData.service}
- Budget Parameter: ${formData.budget}
- Expected Timeline:${formData.timeline}

PROJECT / SCOPE DESCRIPTION:
${formData.message || 'Not provided'}

========================================
`);
    return `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || result.message || 'Server failed to process your inquiry.');
      }

      setSubmittedInquiry({
        id: result.inquiryId,
        name: formData.name.trim(),
        company: formData.company.trim() || 'Direct Client Account',
        service: formData.service,
        budget: formData.budget,
        message: result.message || 'Inquiry registered in operational ledger.',
      });
    } catch (err: any) {
      console.error('Inquiry submission error:', err);
      setSubmitError(
        err.message || 'Unable to connect to inquiry server. Please check your network or email info@njuregroup.in directly.'
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

  const handleReset = () => {
    setSubmittedInquiry(null);
    setSubmitError(null);
    setClientErrors({});
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: 'Customer Support (Voice & Chat)',
      budget: 'Tailor specifically to my operational budget',
      timeline: 'Standard onboarding (1–2 weeks)',
      message: '',
      honeypot: '',
    });
  };

  return (
    <div className="bg-slate-50 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Contact Us & Proposal Request' }]} />

        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Client Inquiries & Budget Scoping
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Contact Njure Tech & Request an Operations Proposal
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Connect directly with our remote operations leadership to discuss your support volume, schedule an operational scoping call, or request a budget-tailored proposal with zero agency cut.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Office & Ground Truth Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-2xs space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                  Operational Structure
                </h2>
                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <Laptop className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block text-sm mb-0.5">
                        Operating Model
                      </span>
                      <span className="text-emerald-700 font-semibold block">100% Remote & Distributed Operations</span>
                      <span className="text-slate-500">Zero physical commercial real estate overhead.</span>
                      <span className="block text-slate-400 mt-0.5">A {COMPANY_INFO.parentGroup} Company</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block text-sm mb-0.5">
                        Inquiries Desk
                      </span>
                      <a 
                        href={`mailto:${COMPANY_INFO.inquiriesEmail}`}
                        className="font-mono text-blue-700 font-bold hover:underline block text-sm"
                      >
                        {COMPANY_INFO.inquiriesEmail}
                      </a>
                      <span className="block text-slate-400 mt-1">Direct response within 2–4 hours on business days</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block text-sm mb-0.5">
                        Official Domain
                      </span>
                      <span className="font-mono text-blue-700 font-semibold">{COMPANY_INFO.domain}</span>
                      <span className="block text-slate-400 mt-0.5">Parent Entity: {COMPANY_INFO.parentDomain}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block text-sm mb-0.5">
                        Working Hours
                      </span>
                      <span>24/7 Follow-the-Sun Shift Coverage</span>
                      <span className="block text-slate-400 mt-0.5">Coordinated shifts across IST, Gulf & Western time zones</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bilateral Non-Disclosure Agreements (NDAs) signed prior to onboarding.</span>
              </div>
            </div>

            {/* SLA Transparency Notice */}
            <div className="bg-slate-900 text-white p-6 rounded-lg border border-slate-800 text-xs space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                Direct Operations Review
              </span>
              <h3 className="font-bold text-sm">No Middleman Markups</h3>
              <p className="text-slate-300 leading-relaxed">
                Your proposal request goes directly to operations directors who scope your roster, calculate agent hours, and pass client fees directly to specialists under our zero-cut partner model.
              </p>
            </div>
          </div>

          {/* Right Column: Real Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-lg border border-slate-200 shadow-2xs">
              {submittedInquiry ? (
                /* Confirmed Inquiry State (Cloud SQL Record Confirmed) */
                <div className="py-6 text-center" role="status" aria-live="polite">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Proposal Request Registered</h2>
                  <p className="text-xs text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{submittedInquiry.name}</strong>. Your inquiry for <strong className="text-slate-900">{submittedInquiry.company}</strong> has been saved directly to our operations database and dispatched to our leadership team.
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 max-w-md mx-auto mb-6 text-xs text-left font-mono space-y-2.5">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Inquiry Tracking ID:</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-blue-700">{submittedInquiry.id}</span>
                        <button
                          type="button"
                          onClick={() => handleCopyId(submittedInquiry.id)}
                          className="p-1 text-slate-400 hover:text-slate-700 rounded cursor-pointer"
                          title="Copy Tracking ID"
                        >
                          {copiedId ? <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2">
                      <span className="text-slate-500">Target Service:</span>
                      <span className="text-slate-800 font-semibold">{submittedInquiry.service}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2">
                      <span className="text-slate-500">Budget Scope:</span>
                      <span className="text-slate-800">{submittedInquiry.budget}</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2">
                      <span className="text-slate-500">Status:</span>
                      <span className="text-emerald-700 font-semibold">Under Operational Review</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-2">
                      <span className="text-slate-500">Response SLA:</span>
                      <span className="text-slate-800">Within 2–4 hours (business day)</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={createMailtoUrl(submittedInquiry.id)}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded transition-colors inline-flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Backup via Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Live Asynchronous Inquiry Submission Form */
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">
                    Request an Operations Consultation
                  </h2>
                  <p className="text-xs text-slate-500 mb-6">
                    Fill out your requirements below to receive a customized BPO pod staffing plan inside your target budget.
                  </p>

                  {submitError && (
                    <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-xs text-red-800 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div className="flex-grow">
                        <strong className="block font-bold mb-0.5">Submission Error</strong>
                        <span>{submitError}</span>
                        <div className="mt-2">
                          <a
                            href={createMailtoUrl('NJ-INQ-FALLBACK')}
                            className="font-bold underline text-red-900 hover:text-red-950 inline-flex items-center gap-1"
                          >
                            <span>Open in your email client instead &rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {/* Honeypot field for bot/spam trap (hidden from users) */}
                    <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
                      <label htmlFor="honeypot">Do not fill this field</label>
                      <input
                        type="text"
                        id="honeypot"
                        name="honeypot"
                        tabIndex={-1}
                        value={formData.honeypot}
                        onChange={handleChange}
                        autoComplete="off"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                          Your Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          aria-required="true"
                          aria-invalid={!!clientErrors.name}
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Arun Kumar"
                          className={`w-full px-3.5 py-2.5 bg-white border rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 ${
                            clientErrors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                          }`}
                        />
                        {clientErrors.name && (
                          <span className="text-[11px] text-red-600 mt-1 block">{clientErrors.name}</span>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                          Business Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          aria-required="true"
                          aria-invalid={!!clientErrors.email}
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="arun@company.com"
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
                        <label htmlFor="phone" className="block text-xs font-medium text-slate-700 mb-1">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          aria-invalid={!!clientErrors.phone}
                          value={formData.phone}
                          onChange={handleChange}
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
                        <label htmlFor="company" className="block text-xs font-medium text-slate-700 mb-1">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Acme Online Store"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-xs font-medium text-slate-700 mb-1">
                          Primary Service Requirement
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        >
                          <option value="Customer Support (Voice & Chat)">Customer Support (Voice & Chat)</option>
                          <option value="Back-Office & Data Processing">Back-Office & Data Processing</option>
                          <option value="E-Commerce & COD Operations">E-Commerce & COD Order Support</option>
                          <option value="Telecalling & Lead Qualification">Telecalling & Lead Qualification</option>
                          <option value="Future Tech Collaboration">Inquire about Technology Roadmap</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-xs font-medium text-slate-700 mb-1">
                          Target Onboarding Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        >
                          <option value="Fast 7-Day Pilot Onboarding">Fast 7-Day Pilot Onboarding</option>
                          <option value="Standard onboarding (1–2 weeks)">Standard onboarding (1–2 weeks)</option>
                          <option value="Within 1 month">Within 1 month</option>
                          <option value="Exploratory / Budget Planning">Exploratory / Budget Planning</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label htmlFor="budget" className="block text-xs font-medium text-slate-700">
                          Target Monthly Budget
                        </label>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          Zero Agency Cut
                        </span>
                      </div>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 mb-1"
                      >
                        <option value="Tailor specifically to my operational budget">Tailor specifically to my operational budget</option>
                        <option value="Under ₹35,000 / $500 monthly">Under ₹35,000 / $500 monthly (Starter / Pilot)</option>
                        <option value="₹35,000 – ₹75,000 / $500 – $1,000 monthly">₹35,000 – ₹75,000 / $500 – $1,000 monthly</option>
                        <option value="₹75,000 – ₹1,50,000 / $1,000 – $2,000 monthly">₹75,000 – ₹1,50,000 / $1,000 – $2,000 monthly</option>
                        <option value="₹1,50,000+ / $2,000+ monthly">₹1,50,000+ / $2,000+ monthly (Full Dedicated Pod)</option>
                      </select>
                      <p className="text-[11px] text-slate-500">
                        We engineer the pod headcount directly around your budget with transparent unit economics.
                      </p>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1">
                        Tell us about your operational workflows <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        required
                        aria-required="true"
                        aria-invalid={!!clientErrors.message}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mention daily call/ticket volume, languages needed (English, Malayalam, Hindi), tools used (Zendesk, Freshdesk, Shopify), and target start date..."
                        className={`w-full px-3.5 py-2.5 bg-white border rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 ${
                          clientErrors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-300'
                        }`}
                      />
                      {clientErrors.message && (
                        <span className="text-[11px] text-red-600 mt-1 block">{clientErrors.message}</span>
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
                            <span>Submitting Proposal Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Operations Request</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                      <p className="text-[11px] text-slate-500 mt-3">
                        Submissions are stored securely in our PostgreSQL operational ledger and immediately routed to our leadership desk at <strong className="text-slate-700">info@njuregroup.in</strong>.
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
