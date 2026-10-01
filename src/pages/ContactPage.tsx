import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, ShieldCheck, CheckCircle2, ArrowRight, Globe, Laptop } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Customer Support (Voice & Chat)');
  const [teamSize, setTeamSize] = useState('1 – 3 Agents (Starter Team)');
  const [budget, setBudget] = useState('Tailor to My Specific Budget');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRef(`NJURE-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');
  };

  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Contact Njure Tech
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Connect directly with our remote operations leadership to discuss your support volume, schedule a discovery call, or request a customized service proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Office & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-2xs space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                  Operational Headquarters
                </h2>
                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <Laptop className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block text-sm mb-0.5">
                        Operating Structure
                      </span>
                      <span className="text-emerald-700 font-semibold block">100% Remote & Distributed Operations</span>
                      <span className="text-slate-500">No physical workspace — cloud-orchestrated teams.</span>
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
                      <span className="block text-slate-400 mt-1">Response within 2–4 hours on business days</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block text-sm mb-0.5">
                        Official Domain
                      </span>
                      <span className="font-mono text-blue-700 font-semibold">{COMPANY_INFO.domain}</span>
                      <span className="block text-slate-400 mt-0.5">Parent Group: {COMPANY_INFO.parentDomain}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 block text-sm mb-0.5">
                        Working Hours
                      </span>
                      <span>24/7 Distributed Shift Operations</span>
                      <span className="block text-slate-400 mt-0.5">Flexible coverage across IST, Gulf & Western time zones</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bilateral Non-Disclosure Agreements (NDAs) signed prior to onboarding.</span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg text-xs text-blue-900">
              <h3 className="font-bold text-sm text-blue-950 mb-1">Fast 7-Day Pilot Program</h3>
              <p className="text-blue-800 leading-relaxed">
                Test our dedicated remote customer support agents or data team with a one-week trial before signing a longer-term engagement.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-2xs">
              {submittedRef ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Inquiry Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <strong className="text-slate-900">{name}</strong>. Your inquiry for <strong className="text-slate-900">{company || 'your business'}</strong> has been received by our operations team. We will review your requirements and respond within 2–4 business hours.
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded p-4 max-w-sm mx-auto mb-8 text-xs text-left font-mono">
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Reference Number:</span>
                      <span className="font-bold text-blue-700">{submittedRef}</span>
                    </div>
                    <div className="flex justify-between py-1 border-t border-slate-200">
                      <span className="text-slate-500">Service Track:</span>
                      <span className="text-slate-800 font-medium">{service}</span>
                    </div>
                    <div className="flex justify-between py-1 border-t border-slate-200">
                      <span className="text-slate-500">Budget Scoping:</span>
                      <span className="text-slate-800 font-medium">{budget}</span>
                    </div>
                    <div className="flex justify-between py-1 border-t border-slate-200">
                      <span className="text-slate-500">Operating Structure:</span>
                      <span className="text-slate-800">100% Remote Operations</span>
                    </div>
                    <div className="flex justify-between py-1 border-t border-slate-200">
                      <span className="text-slate-500">Business Model:</span>
                      <span className="text-emerald-700 font-semibold">Zero Agency Cut · Partner Profit</span>
                    </div>
                    <div className="flex justify-between py-1 border-t border-slate-200">
                      <span className="text-slate-500">Expected Response:</span>
                      <span className="text-emerald-700 font-semibold">Same Business Day</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-6 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">
                    Request an Operations Consultation
                  </h2>
                  <p className="text-xs text-slate-500 mb-6">
                    Fill out this form and our operations lead will reply with team scoping and pricing options.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Arun Kumar"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="arun@company.com"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Company / Brand Name
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Acme Online Store"
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Primary Service Requirement
                        </label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        >
                          <option value="Customer Support (Voice & Chat)">Customer Support (Voice & Chat)</option>
                          <option value="Back-Office & Data Processing">Back-Office & Data Processing</option>
                          <option value="E-Commerce & COD Operations">E-Commerce & COD Order Support</option>
                          <option value="Telecalling & Lead Qualification">Telecalling & Lead Qualification</option>
                          <option value="Future Tech Collaboration">Inquire about Future Tech Roadmap</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">
                          Estimated Team Size Needed
                        </label>
                        <select
                          value={teamSize}
                          onChange={(e) => setTeamSize(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                        >
                          <option value="1 – 3 Agents (Starter Team)">1 – 3 Agents (Starter Team)</option>
                          <option value="4 – 10 Agents (Growing Desk)">4 – 10 Agents (Growing Desk)</option>
                          <option value="10+ Agents (Scaled Operations)">10+ Agents (Scaled Operations)</option>
                          <option value="Flexible / Part-Time Desk">Flexible / Hourly Shared Desk</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="block text-xs font-medium text-slate-700">
                          Target Monthly Budget (Client-Budget Oriented)
                        </label>
                        <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          Zero Agency Cut
                        </span>
                      </div>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600 mb-1"
                      >
                        <option value="Tailor to My Specific Budget">Tailor specifically to my operational budget</option>
                        <option value="Under ₹35,000 / $500 monthly">Under ₹35,000 / $500 monthly (Starter / Pilot)</option>
                        <option value="₹35,000 – ₹75,000 / $500 – $1,000 monthly">₹35,000 – ₹75,000 / $500 – $1,000 monthly</option>
                        <option value="₹75,000 – ₹1,50,000 / $1,000 – $2,000 monthly">₹75,000 – ₹1,50,000 / $1,000 – $2,000 monthly</option>
                        <option value="₹1,50,000+ / $2,000+ monthly">₹1,50,000+ / $2,000+ monthly (Full Dedicated Pod)</option>
                      </select>
                      <p className="text-[11px] text-slate-500">
                        We don't take a company cut. 100% of project profit flows directly to our remote specialists as business partners.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Tell us about your operational requirements
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Mention daily call/ticket volume, languages needed (English, Malayalam, Hindi), tools used (Zendesk, Freshdesk, Shopify), and target start date..."
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded transition-colors shadow-xs cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        <span>{isSubmitting ? 'Sending Request...' : 'Send Inquiry'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
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
