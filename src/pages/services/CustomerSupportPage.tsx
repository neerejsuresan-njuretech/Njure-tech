import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, 
  CheckCircle, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  Mail, 
  ChevronDown, 
  Sparkles,
  Layers,
  Database,
  ShoppingBag,
  PhoneCall
} from 'lucide-react';
import { Breadcrumb } from '../../components/Breadcrumb';
import { DETAILED_SERVICES, COMPANY_INFO } from '../../data/companyData';
import { TiltCard } from '../../components/motion/TiltCard';

export const CustomerSupportPage: React.FC = () => {
  const service = DETAILED_SERVICES['customer-support'];
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
            { label: 'Omnichannel Customer Support' },
          ]}
        />

        {/* Hero Section with Answer-First Box */}
        <header className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 mb-12 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Headphones className="w-3.5 h-3.5 text-blue-700" />
              <span>{service.heroKicker}</span>
            </div>

            {/* Exactly One Meaningful H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Omnichannel Customer Support Outsourcing & Helpdesk Operations
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
                <span>Request a Customer Support Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/operations"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors"
              >
                <span>Explore Remote Security Controls</span>
              </Link>
            </div>
          </div>
        </header>

        {/* SLA & Outcomes Grid */}
        <section className="mb-14" aria-labelledby="sla-benchmarks-heading">
          <h2 id="sla-benchmarks-heading" className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
            Customer Experience SLAs & Performance Benchmarks
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

        {/* Scope of Operations & Channels */}
        <section className="mb-14 grid grid-cols-1 lg:grid-cols-2 gap-8" aria-labelledby="scope-heading">
          <div className="bg-white border border-slate-200 rounded-xl p-8">
            <h2 id="scope-heading" className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
              Scope of Customer Support Deliverables
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Our remote customer care specialists integrate into your existing helpdesk tools to handle high-touch Tier-1 and Tier-2 inquiries with strict SOP compliance:
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
                Helpdesk & Ticketing Software Supported
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Zero software friction: our team connects directly into your existing helpdesk ecosystem using client-controlled credentials, SSO, and MFA policies.
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
              <strong className="block font-bold mb-1">Zero Real Estate Cut · Direct Worker Partner Model:</strong>
              Because we operate 100% remotely without physical call center leases, your monthly budget pays experienced, profit-sharing customer support professionals who stay committed to your brand.
            </div>
          </div>
        </section>

        {/* 4-Step Onboarding Workflow */}
        <section className="mb-14 bg-white border border-slate-200 rounded-xl p-8 sm:p-10" aria-labelledby="workflow-heading">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">Onboarding Process</div>
            <h2 id="workflow-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              How We Launch Your Dedicated Remote Support Pod
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

        {/* Frequently Asked Questions (Structured for AI Search) */}
        <section className="mb-14 bg-white border border-slate-200 rounded-xl p-8 sm:p-10" aria-labelledby="faq-heading">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">Frequently Asked Questions</div>
            <h2 id="faq-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              Common Questions About Customer Support Outsourcing
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

        {/* Contextual Internal Cross-Links Topic Cluster */}
        <section className="bg-slate-900 text-white rounded-xl p-8 sm:p-10" aria-labelledby="related-services-heading">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">Related Operational Capabilities</div>
            <h2 id="related-services-heading" className="text-2xl font-bold tracking-tight">
              Connect Customer Care with Back-Office & E-Commerce Workflows
            </h2>
            <p className="text-xs text-slate-300 mt-2">
              Explore interconnected remote operations designed to streamline your business end-to-end:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              to="/services/telecalling"
              className="p-5 bg-slate-800/80 border border-slate-700 rounded-lg hover:border-cyan-500/50 transition-colors group block"
            >
              <div className="w-8 h-8 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center mb-3">
                <PhoneCall className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                Telecalling & Leads
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rapid inbound lead qualification within 10 minutes and discovery meeting scheduling.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
