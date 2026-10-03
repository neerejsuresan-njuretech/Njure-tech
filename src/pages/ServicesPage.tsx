import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, 
  Database, 
  ShoppingBag, 
  PhoneCall, 
  Check, 
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ShieldCheck,
  Zap,
  Globe,
  Wrench,
  Code2,
  Server
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { DETAILED_SERVICES } from '../data/companyData';

export const ServicesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');

  const faqs = [
    {
      id: 'faq-1',
      category: 'ITSM & Tooling',
      question: 'Can your team work directly inside our existing Jira Service Management (JSM) setup?',
      answer:
        'Yes. Our team leads and support specialists are experienced with Jira Service Management (JSM). We plug directly into your Atlassian Cloud or Data Center workspace, adhering to your configured ITIL queues, incident resolution workflows, and SLA countdown clocks. If your support tickets cross-link to development bug boards in Jira Software, our agents update cross-references seamlessly.',
    },
    {
      id: 'faq-2',
      category: 'Cost & Licensing',
      question: 'Can you configure free or open-source ITSM solutions so we avoid per-seat SaaS fees?',
      answer:
        'Yes. For cost-conscious clients wanting to avoid commercial SaaS licensing ($50–$120/agent/mo), we deploy and maintain production-ready open-source ITSM platforms (such as FreeScout or Zammad) on your cloud or ours. You pay zero recurring software license fees per agent, saving significant capital while retaining full data ownership.',
    },
    {
      id: 'faq-3',
      category: 'Shift Handovers',
      question: 'How are shift handovers and round-the-clock SLA continuity managed?',
      answer:
        'Every shift handover includes a mandatory 15-minute overlap period. Outgoing team leads and incoming supervisors review open high-priority tickets, escalations, and system release notices. A standardized handover log is recorded directly inside your ticketing portal to ensure zero context drop.',
    },
    {
      id: 'faq-4',
      category: 'Pilot & Scaling',
      question: 'How quickly can we launch, and can we scale dedicated seats up or down?',
      answer:
        'We can deploy a calibrated 1–3 agent pilot team within 7 business days following SOP approval. The 7- to 14-day pilot allows you to audit responses and calibrate tone with zero long-term commitment. Once validated, we scale seat count up during seasonal surges and ramp down during quieter cycles with flexible monthly agreements.',
    },
  ];

  return (
    <div className="bg-slate-50 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'BPO Operational Services' }]} />

        {/* Page Header */}
        <header className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Service Capabilities Directory
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            BPO Operational Services
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Dedicated customer care, back-office data processing, e-commerce fulfillment, and outbound telecalling teams engineered around your exact budget with zero agency cut.
          </p>
        </header>

        {/* 1. CUSTOMER SUPPORT */}
        <section id="customer-support" className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-10" aria-labelledby="cs-heading">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 font-mono">Service Domain 01</span>
                <h2 id="cs-heading" className="text-2xl font-bold text-slate-900">
                  {DETAILED_SERVICES['customer-support'].title}
                </h2>
                <p className="text-xs text-blue-700 font-semibold mt-0.5">{DETAILED_SERVICES['customer-support'].tagline}</p>
              </div>
            </div>
            <Link
              to="/services/customer-support"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors self-start lg:self-center shrink-0"
            >
              <span>Explore Customer Support &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs text-slate-700">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-bold uppercase tracking-wider text-slate-400 text-[11px]">Execution Scope:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DETAILED_SERVICES['customer-support'].scope.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-100">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h3 className="font-bold uppercase tracking-wider text-slate-400 text-[11px] mb-2">Target SLAs & Outcomes:</h3>
                <ul className="space-y-1.5 font-semibold text-slate-800">
                  {DETAILED_SERVICES['customer-support'].keyOutcomes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. BACK-OFFICE OPERATIONS */}
        <section id="back-office" className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-10" aria-labelledby="bo-heading">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 font-mono">Service Domain 02</span>
                <h2 id="bo-heading" className="text-2xl font-bold text-slate-900">
                  {DETAILED_SERVICES['back-office'].title}
                </h2>
                <p className="text-xs text-blue-700 font-semibold mt-0.5">{DETAILED_SERVICES['back-office'].tagline}</p>
              </div>
            </div>
            <Link
              to="/services/back-office"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors self-start lg:self-center shrink-0"
            >
              <span>Explore Back-Office &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs text-slate-700">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-bold uppercase tracking-wider text-slate-400 text-[11px]">Execution Scope:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DETAILED_SERVICES['back-office'].scope.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-100">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h3 className="font-bold uppercase tracking-wider text-slate-400 text-[11px] mb-2">Target SLAs & Outcomes:</h3>
                <ul className="space-y-1.5 font-semibold text-slate-800">
                  {DETAILED_SERVICES['back-office'].keyOutcomes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. E-COMMERCE OPERATIONS */}
        <section id="ecommerce" className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-10" aria-labelledby="ecom-heading">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 font-mono">Service Domain 03</span>
                <h2 id="ecom-heading" className="text-2xl font-bold text-slate-900">
                  {DETAILED_SERVICES['ecommerce-operations'].title}
                </h2>
                <p className="text-xs text-blue-700 font-semibold mt-0.5">{DETAILED_SERVICES['ecommerce-operations'].tagline}</p>
              </div>
            </div>
            <Link
              to="/services/ecommerce-support"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors self-start lg:self-center shrink-0"
            >
              <span>Explore E-Commerce &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs text-slate-700">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-bold uppercase tracking-wider text-slate-400 text-[11px]">Execution Scope:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DETAILED_SERVICES['ecommerce-operations'].scope.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-100">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h3 className="font-bold uppercase tracking-wider text-slate-400 text-[11px] mb-2">Target SLAs & Outcomes:</h3>
                <ul className="space-y-1.5 font-semibold text-slate-800">
                  {DETAILED_SERVICES['ecommerce-operations'].keyOutcomes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TELECALLING */}
        <section id="telecalling" className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-12" aria-labelledby="tc-heading">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 font-mono">Service Domain 04</span>
                <h2 id="tc-heading" className="text-2xl font-bold text-slate-900">
                  {DETAILED_SERVICES['telecalling'].title}
                </h2>
                <p className="text-xs text-blue-700 font-semibold mt-0.5">{DETAILED_SERVICES['telecalling'].tagline}</p>
              </div>
            </div>
            <Link
              to="/services/telecalling"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors self-start lg:self-center shrink-0"
            >
              <span>Explore Telecalling &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs text-slate-700">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="font-bold uppercase tracking-wider text-slate-400 text-[11px]">Execution Scope:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {DETAILED_SERVICES['telecalling'].scope.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-100">
                    <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h3 className="font-bold uppercase tracking-wider text-slate-400 text-[11px] mb-2">Target SLAs & Outcomes:</h3>
                <ul className="space-y-1.5 font-semibold text-slate-800">
                  {DETAILED_SERVICES['telecalling'].keyOutcomes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TECHNOLOGY & TOOLS SUPPORTED */}
        <section id="technology-tools" className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl border border-slate-800 mb-12" aria-labelledby="tools-heading">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
              Stack Agnostic
            </span>
            <h2 id="tools-heading" className="text-2xl font-bold tracking-tight text-white mb-2">
              Technology & Supported Tools Architecture
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              We connect directly into your existing software stack using client-controlled credentials, or deploy free and open-source ITSMs to eliminate SaaS licensing overhead entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-white mb-2">
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>Enterprise Helpdesks</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Native agent execution in Zendesk, Freshdesk, Jira Service Management (JSM), and Zoho Desk under your identity credentials.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Zendesk', 'Freshdesk', 'Jira JSM', 'Zoho Desk'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-slate-700 text-slate-300 font-mono text-[10px]">{t}</span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-white mb-2">
                <Server className="w-4 h-4 text-cyan-400" />
                <span>Free & Open-Source ITSM</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                We deploy and configure FreeScout or Zammad on dedicated cloud instances, saving $50–$120/mo per agent seat with full ticketing power.
              </p>
              <div className="flex flex-wrap gap-1">
                {['FreeScout', 'Zammad', 'Zero Seat Fees', 'Full Sovereignty'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-slate-700 text-cyan-300 font-mono text-[10px]">{t}</span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-white mb-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>E-Com & CRM Stacks</span>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Seamless operation in Shopify, Shiprocket, ClickPost, HubSpot, LeadSquared, Exotel cloud PBX, and Google Workspace.
              </p>
              <div className="flex flex-wrap gap-1">
                {['Shopify', 'Shiprocket', 'HubSpot', 'ClickPost'].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-slate-700 text-slate-300 font-mono text-[10px]">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-12" aria-labelledby="service-faq-heading">
          <div className="max-w-2xl mb-6">
            <h2 id="service-faq-heading" className="text-xl font-bold text-slate-900">Frequently Asked Operational Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="border border-slate-200 rounded-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                    className="w-full text-left p-4 bg-slate-50/50 hover:bg-slate-100 flex items-center justify-between gap-4 cursor-pointer text-xs font-semibold text-slate-900"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Closing CTA */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold">Have an exact monthly operational budget?</h3>
            <p className="text-xs text-slate-400">
              We tailor required hours, shift rosters, and specialist pods around what you can invest.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors shrink-0"
          >
            <span>Request Budget Scoping</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
