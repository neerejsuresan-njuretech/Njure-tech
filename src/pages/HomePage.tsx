import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Headphones, 
  Database, 
  ShoppingBag, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  HeartHandshake, 
  Lock, 
  Key, 
  FileCheck, 
  UserCheck,
  ChevronDown,
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO, DETAILED_SERVICES, GENERAL_FAQS } from '../data/companyData';
import { InteractiveBackground3D } from '../components/3d/InteractiveBackground3D';
import { TiltCard } from '../components/motion/TiltCard';
import { CountUpNumber } from '../components/motion/CountUpNumber';

export const HomePage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const serviceList = [
    { ...DETAILED_SERVICES['customer-support'], path: '/services/customer-support', icon: <Headphones className="w-5 h-5" /> },
    { ...DETAILED_SERVICES['back-office'], path: '/services/back-office', icon: <Database className="w-5 h-5" /> },
    { ...DETAILED_SERVICES['ecommerce-operations'], path: '/services/ecommerce-support', icon: <ShoppingBag className="w-5 h-5" /> },
    { ...DETAILED_SERVICES['telecalling'], path: '/services/telecalling', icon: <PhoneCall className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-slate-50">
      {/* High-Conversion Hero Section */}
      <section className="bg-white border-b border-slate-200 py-16 lg:py-24 relative overflow-hidden">
        {/* Interactive 3D Mesh Background */}
        <InteractiveBackground3D variant="light" density="normal" className="opacity-75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Core Value Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Build your operations team around the budget you already have.
            </h1>

            {/* Value Proposition */}
            <div className="mb-8 max-w-2xl text-base text-slate-600 leading-relaxed space-y-3">
              <p>
                Njure Tech delivers client-budget-oriented customer care, back-office data processing, e-commerce support, and outbound telecalling. We operate 100% remotely with zero agency cut, passing project profits directly to our frontline specialists as business partners.
              </p>
              <p className="text-sm text-slate-500">
                Engineered for growing digital brands, e-commerce retailers, and tech startups needing reliable operational execution without rigid agency minimums or corporate overhead.
              </p>
            </div>

            {/* Direct Conversion Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors shadow-xs"
              >
                <span>Request an Operations Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors"
              >
                <span>Explore BPO Services Directory</span>
              </Link>
            </div>

            {/* Service Outcomes Ribbon */}
            <div className="pt-10 mt-10 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-slate-600">
              <div>
                <span className="font-bold text-slate-900 text-base block font-mono">
                  &lt; 2 Minutes
                </span>
                <span className="text-slate-500">Live chat & voice response SLA</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 text-base block font-mono">
                  <CountUpNumber value={99.5} decimals={1} suffix="%+" />
                </span>
                <span className="text-slate-500">Data & ticket processing accuracy</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 text-base block font-mono">
                  <CountUpNumber value={7} suffix="-Day" />
                </span>
                <span className="text-slate-500">Pilot onboarding program</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 text-base block font-mono">
                  Zero Agency Cut
                </span>
                <span className="text-slate-500">Profit-sharing remote partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-slate-50" aria-labelledby="core-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                Operational Capabilities
              </div>
              <h2 id="core-services-heading" className="text-3xl font-bold text-slate-900 tracking-tight">
                Our Core BPO Services
              </h2>
            </div>
            <Link
              to="/services"
              className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 self-start"
            >
              <span>View full service scope & deliverables</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceList.map((srv) => (
              <TiltCard key={srv.id} className="h-full">
                <article className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                      {srv.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      <Link to={srv.path} className="hover:text-blue-700 transition-colors">
                        {srv.title}
                      </Link>
                    </h3>
                    <p className="text-xs font-medium text-blue-600 mb-2">{srv.tagline}</p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{srv.shortDesc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="text-[11px] uppercase font-semibold text-slate-400">Key Deliverables:</div>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {srv.keyOutcomes.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={srv.path}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800 pt-2"
                    >
                      <span>Learn more about {srv.navTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Client-Budget-Oriented & Zero-Cut Partner Model */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="partner-model-heading">
        {/* Subtle 3D Geometric Lattice Background */}
        <InteractiveBackground3D variant="dark" density="low" className="opacity-35" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.partnershipModel.headline}</span>
            </div>
            <h2 id="partner-model-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              We Are Business Partners, Not Just an Employee and a Company
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Traditional outsourcing agencies siphon off high markups while underpaying frontline workers. At Njure Tech, we operate differently: we tailor operations strictly to your budget, take no agency cut, and pass project profits directly to our remote specialists as business partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.partnershipModel.pillars.map((pillar, i) => (
              <div key={i} className="p-6 rounded-lg bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center font-bold text-sm mb-4 border border-cyan-800">
                    0{i + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{pillar.description}</p>
                </div>
                <div className="pt-3 border-t border-slate-700 text-[11px] font-mono text-cyan-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Fair Profit Sharing</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-lg bg-slate-800/50 border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-slate-300">
              <strong className="text-white block text-sm mb-1">Have an exact monthly operational budget?</strong>
              We build dedicated, scalable customer support and data pods aligned precisely to what your business can invest.
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors cursor-pointer shrink-0"
            >
              <span>Scope Your Budget</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Security & Controls Section */}
      <section className="py-20 bg-white border-y border-slate-200" aria-labelledby="security-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
              <span>Security by Design</span>
            </div>

            <h2 id="security-heading" className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Security by Design & Operating Controls
            </h2>

            {/* Transparent Certification Disclosure */}
            <div className="p-4 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-700 mb-4 font-mono">
              <strong>Transparency Disclosure:</strong> Njure Tech is currently not ISO 27001 or SOC 2 certified.
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Our operating controls include appropriate access restrictions, endpoint policies, clean-desk practices, NDAs, client-controlled identity access, and supervisor-level quality controls. Client-specific security and compliance requirements are reviewed during onboarding before production access is granted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded bg-blue-100 text-blue-700 flex items-center justify-center">
                <Lock className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Endpoint Policies & Port Lockdown</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Workstations operate under endpoint policies that restrict external mass storage devices, enforce application whitelisting, and maintain clean-screen standards.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded bg-blue-100 text-blue-700 flex items-center justify-center">
                <Key className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Client-Controlled Identity (SSO / MFA)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialists access client systems directly via role-based credentials managed by your organization, supporting multi-factor authentication (MFA) and instant revocation.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded bg-blue-100 text-blue-700 flex items-center justify-center">
                <FileCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Bilateral Enforceable NDAs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every remote specialist executes comprehensive, legally binding non-disclosure agreements prior to onboarding and accessing client workflows.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-9 h-9 rounded bg-blue-100 text-blue-700 flex items-center justify-center">
                <UserCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Supervisor-Level Quality Controls</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operational supervisors perform queue monitoring, call listening audits, and shift synchronization to ensure standard operating procedure (SOP) adherence.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200/80 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-blue-900">
              <strong className="block text-sm font-bold text-blue-950 mb-0.5">Explore Our Full Security & Trust Governance</strong>
              Learn how we enforce data protection, VPN isolation, and clean-screen standards across our 100% remote workforce.
            </div>
            <Link
              to="/security"
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded transition-colors cursor-pointer shrink-0"
            >
              <span>View Security Framework</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Answer-First Frequently Asked Questions Section */}
      <section className="py-20 bg-slate-50" aria-labelledby="home-faq-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
              <span>Direct Answers</span>
            </div>
            <h2 id="home-faq-heading" className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Frequently Asked Questions About Njure Tech Operations
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clear, transparent answers about our client-budget model, remote security controls, and operational workflows:
            </p>
          </div>

          <div className="max-w-4xl space-y-4">
            {GENERAL_FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-semibold text-sm text-slate-900 hover:bg-slate-50 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-blue-700 font-bold">0{idx + 1}</span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    <p className="text-slate-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Operations Model Spotlight Teaser */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-xl p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs">
            <div className="max-w-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                Operational Architecture
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                100% Remote & Distributed Operations
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                We operate with a modern, fully distributed workforce—eliminating the costly overhead of physical call center real estate. Our specialists connect via zero-trust cloud workspaces with daily supervisor standups and rigorous QA monitoring.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  Zero Real Estate Overhead
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  Secure Cloud Helpdesks & VPNs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  Strict Clean-Desk NDAs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  24/7 Follow-The-Sun Roster
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/operations"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors cursor-pointer shrink-0"
              >
                <span>Explore Remote Operations</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
