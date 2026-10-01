import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Calendar, 
  UserCheck, 
  Headphones, 
  ChevronDown, 
  Database,
  ShoppingBag
} from 'lucide-react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { DETAILED_SERVICES } from '../../data/companyData';

export const TelecallingPage: React.FC = () => {
  const service = DETAILED_SERVICES['telecalling'];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-slate-50 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb
          items={[
            { label: 'BPO Services', path: '/services' },
            { label: 'Telecalling & Lead Qualification' },
          ]}
        />

        {/* Hero Section with Answer-First Box */}
        <header className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 mb-12 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
              <PhoneCall className="w-3.5 h-3.5 text-blue-700" />
              <span>{service.heroKicker}</span>
            </div>

            {/* Exactly One Meaningful H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Telecalling Services, Inbound Lead Qualification & Outbound Calling
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
              {service.tagline}
            </p>

            {/* Answer-First Content Block for AI Search & Featured Snippets */}
            <div className="p-5 rounded-lg bg-slate-900 text-slate-200 text-sm leading-relaxed mb-8 border border-slate-800">
              <strong className="text-cyan-400 block mb-1 text-xs font-mono uppercase tracking-wider">
                Summary / Service Overview
              </strong>
              <p>{service.answerSummary}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors shadow-xs"
              >
                <span>Request a Telecalling Campaign Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services/customer-support"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors"
              >
                <span>Explore Inbound Support</span>
              </Link>
            </div>
          </div>
        </header>

        {/* SLA & Outcomes Grid */}
        <section className="mb-14" aria-labelledby="sla-benchmarks-heading">
          <h2 id="sla-benchmarks-heading" className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
            Voice Performance Benchmarks & Lead Response SLAs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.slaBenchmarks.map((sla, i) => (
              <div key={i} className="p-6 bg-white border border-slate-200 rounded-lg shadow-2xs">
                <span className="text-xs font-semibold text-slate-500 block mb-1">{sla.metric}</span>
                <span className="text-2xl font-extrabold text-blue-700 block mb-2 font-mono">{sla.target}</span>
                <span className="text-xs text-slate-600">{sla.note}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Scope of Operations */}
        <section className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-8" aria-labelledby="scope-heading">
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h2 id="scope-heading" className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
              Scope of Telecalling & Sales Development Workflows
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Our remote voice representatives represent your brand professionally, turning cold form submissions into booked sales pipeline:
            </p>
            <ul className="space-y-3 text-xs text-slate-700">
              {service.scope.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                Telephony PBX & CRM Integrations Supported
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Direct integration with your cloud telephony providers and sales CRM platforms for automatic call recording and instant disposition syncing:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {service.toolsSupported.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded text-xs font-mono font-medium text-slate-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-900">
              <strong className="block font-bold mb-1">Under 10-Minute Speed-to-Lead:</strong>
              Research proves that contacting web prospects within the first 10 minutes increases qualification rates by over 300%. Our dedicated callers ensure immediate contact while lead intent is at its peak.
            </div>
          </div>
        </section>

        {/* 4-Step Onboarding Workflow */}
        <section className="mb-14 bg-white border border-slate-200 rounded-xl p-8 sm:p-10" aria-labelledby="workflow-heading">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">Standard Operating Procedure</div>
            <h2 id="workflow-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              How We Launch Your Outbound Calling Campaign
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflowSteps.map((step) => (
              <div key={step.step} className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="w-8 h-8 rounded bg-blue-700 text-white font-bold text-xs flex items-center justify-center mb-3">
                  0{step.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-14 bg-white border border-slate-200 rounded-xl p-8 sm:p-10" aria-labelledby="faq-heading">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">Frequently Asked Questions</div>
            <h2 id="faq-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              Common Questions About Telecalling & Lead Qualification
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left font-semibold text-sm text-slate-900 bg-slate-50/50 hover:bg-slate-100 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contextual Internal Links Topic Cluster */}
        <section className="bg-slate-900 text-white rounded-xl p-8 sm:p-10" aria-labelledby="related-services-heading">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">Related Operational Capabilities</div>
            <h2 id="related-services-heading" className="text-2xl font-bold tracking-tight">
              Connect Telecalling with Customer Support & Verification
            </h2>
            <p className="text-xs text-slate-300 mt-2">
              Explore interconnected remote operations designed to streamline your business end-to-end:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/services/customer-support"
              className="p-5 bg-slate-800/80 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-colors group block"
            >
              <div className="w-8 h-8 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center mb-3">
                <Headphones className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                Customer Support
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Omnichannel live chat, helpdesk ticketing, and phone assistance with sub-2 minute SLAs.
              </p>
            </Link>

            <Link
              to="/services/ecommerce-support"
              className="p-5 bg-slate-800/80 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-colors group block"
            >
              <div className="w-8 h-8 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center mb-3">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                E-Commerce Support
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cash-on-Delivery confirmation, NDR calling, and 3PL courier exception management.
              </p>
            </Link>

            <Link
              to="/services/back-office"
              className="p-5 bg-slate-800/80 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-colors group block"
            >
              <div className="w-8 h-8 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center mb-3">
                <Database className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                Back-Office Operations
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                KYC verification, spreadsheet deduplication, and invoice audit with 99.5%+ accuracy.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
