import React, { useState } from 'react';
import { MapPin, Clock, ArrowRight, CheckCircle2, X, Briefcase } from 'lucide-react';
import { CAREER_LISTINGS, CareerItem, COMPANY_INFO } from '../data/companyData';

export const CareersPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<CareerItem | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantNotes, setApplicantNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedRole(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantPhone('');
      setApplicantNotes('');
    }, 2600);
  };

  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 mb-2">
              <span>100% Remote Hiring</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-normal">Work From Home (Anywhere in India)</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
              Remote Careers & Business Partnerships
            </h1>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              We are an exclusively remote organization hiring customer care executives, operations team leads, and back-office associates. We believe in partnering with our talent—<strong className="text-slate-800">we don’t take a company cut; we pay our team the profit as genuine business partners.</strong>
            </p>
          </div>

          {/* Business Partner Model & Benefits */}
          <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-2xs mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Partner Profit-Sharing Model</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">We Are Business Partners, Not Just Employee and Company</h2>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed mb-6">
              Traditional call centers commoditize workers and pocket the majority of client fees. At Njure Tech, we operate on open-book transparency: we don’t take an agency cut. Project profits flow directly to the remote specialists delivering the work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs text-slate-600">
              <div className="p-5 bg-slate-50 rounded border border-slate-100">
                <span className="font-bold text-slate-900 text-sm block mb-1">Direct Profit Sharing</span>
                We don’t take an agency cut. Team members receive project profits and co-own client satisfaction.
              </div>
              <div className="p-5 bg-slate-50 rounded border border-slate-100">
                <span className="font-bold text-slate-900 text-sm block mb-1">100% Work from Home</span>
                Eliminate commutes entirely. Work comfortably from your home office anywhere in India.
              </div>
              <div className="p-5 bg-slate-50 rounded border border-slate-100">
                <span className="font-bold text-slate-900 text-sm block mb-1">Broadband & Power Support</span>
                Dedicated monthly allowances for high-speed fiber internet and home power continuity.
              </div>
              <div className="p-5 bg-slate-50 rounded border border-slate-100">
                <span className="font-bold text-slate-900 text-sm block mb-1">Virtual Induction & Growth</span>
                Full digital onboarding, CRM tool training (Zendesk, Jira JSM), and fast-track pod leadership tracks.
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6 mb-16">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">Current Remote Openings</h2>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
                {CAREER_LISTINGS.length} Remote Roles Open
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CAREER_LISTINGS.map((role) => (
                <div
                  key={role.id}
                  className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 text-xs text-slate-500 font-medium">
                      <span className="text-blue-700 font-semibold">{role.type}</span>
                      <span className="font-mono">{role.experience}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">{role.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{role.summary}</p>

                    <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-6 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                      <span>{role.location}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedRole(role)}
                    className="w-full text-center py-2 px-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-md transition-colors cursor-pointer"
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
            We are always looking for articulate customer service executives and data specialists.
          </p>
          <a
            href={`mailto:${COMPANY_INFO.email}?subject=General Application - Njure Tech Operations`}
            className="text-xs font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 font-mono"
          >
            <span>Email your CV to {COMPANY_INFO.email}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Role Details & Apply Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-xl bg-white border border-slate-200 rounded-lg shadow-xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-md cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-10 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Application Submitted</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong className="text-slate-800">{applicantName}</strong>. Our operations team will review your application for <strong className="text-slate-800">{selectedRole.title}</strong> and contact you regarding interview scheduling.
                </p>
              </div>
            ) : (
              <div>
                <div className="text-xs font-semibold text-blue-700 mb-1">
                  {selectedRole.location} · {selectedRole.type}
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">{selectedRole.title}</h2>

                <div className="space-y-4 mb-6 text-xs text-slate-600">
                  <div>
                    <h4 className="font-bold text-slate-800 uppercase text-[11px] mb-1">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-1 list-disc list-inside">
                      {selectedRole.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 uppercase text-[11px] mb-1">
                      Candidate Requirements
                    </h4>
                    <ul className="space-y-1 list-disc list-inside">
                      {selectedRole.qualifications.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Application Form */}
                <form onSubmit={handleSubmit} className="pt-4 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Apply for this Position</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="you@email.com"
                        className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Contact Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Brief Note / Qualification / Languages
                    </label>
                    <textarea
                      rows={2}
                      value={applicantNotes}
                      onChange={(e) => setApplicantNotes(e.target.value)}
                      placeholder="Mention your language proficiencies (English, Malayalam, Hindi, etc.) and prior BPO or customer service experience..."
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedRole(null)}
                      className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded transition-colors cursor-pointer"
                    >
                      Submit Application
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
