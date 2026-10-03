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
  ChevronDown, 
  HelpCircle, 
  Layers, 
  FileText, 
  Clock, 
  Users, 
  Activity, 
  Briefcase,
  Zap,
  Target
} from 'lucide-react';
import { COMPANY_INFO, DETAILED_SERVICES, SELECTED_CAPABILITIES, GENERAL_FAQS } from '../data/companyData';
import { InteractiveBackground3D } from '../components/3d/InteractiveBackground3D';
import { TiltCard } from '../components/motion/TiltCard';
import { CountUpNumber } from '../components/motion/CountUpNumber';

export const HomePage: React.FC = () => {
  const [selectedCapabilityId, setSelectedCapabilityId] = useState<string>(SELECTED_CAPABILITIES[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeCapability = SELECTED_CAPABILITIES.find((c) => c.id === selectedCapabilityId) || SELECTED_CAPABILITIES[0];

  const serviceList = [
    { ...DETAILED_SERVICES['customer-support'], path: '/services/customer-support', icon: <Headphones className="w-5 h-5" /> },
    { ...DETAILED_SERVICES['back-office'], path: '/services/back-office', icon: <Database className="w-5 h-5" /> },
    { ...DETAILED_SERVICES['ecommerce-operations'], path: '/services/ecommerce-support', icon: <ShoppingBag className="w-5 h-5" /> },
    { ...DETAILED_SERVICES['telecalling'], path: '/services/telecalling', icon: <PhoneCall className="w-5 h-5" /> },
  ];

  return (
    <div className="bg-slate-50">
      {/* 1. HERO SECTION */}
      <section className="bg-white border-b border-slate-200 py-16 lg:py-24 relative overflow-hidden" aria-labelledby="hero-heading">
        <InteractiveBackground3D variant="light" density="normal" className="opacity-75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Client-Budget BPO Operations · Zero Agency Cut</span>
            </div>

            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Build your operations team around the budget you already have.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              Njure Tech replaces rigid agency markups with dedicated remote operations pods. We take zero middleman cut, distributing project earnings directly to our frontline specialists as business partners for superior dedication and near-zero turnover.
            </p>

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
                <span>Explore Services Directory</span>
              </Link>
            </div>

            {/* Core Metrics Ribbon */}
            <div className="pt-10 mt-10 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-slate-600">
              <div>
                <span className="font-bold text-slate-900 text-base block font-mono">&lt; 2 Minutes</span>
                <span className="text-slate-500">Live chat & voice response SLA</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 text-base block font-mono">
                  <CountUpNumber value={99.5} decimals={1} suffix="%+" />
                </span>
                <span className="text-slate-500">Dual-pass data entry accuracy</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 text-base block font-mono">
                  <CountUpNumber value={7} suffix="-Day" />
                </span>
                <span className="text-slate-500">Rapid pilot onboarding</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 text-base block font-mono">Zero Agency Cut</span>
                <span className="text-slate-500">Direct profit-sharing workforce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                Operational Capabilities
              </div>
              <h2 id="services-heading" className="text-3xl font-bold text-slate-900 tracking-tight">
                Core BPO Operational Services
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
                    <div className="text-[11px] uppercase font-semibold text-slate-400">Target Outcomes:</div>
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
                      <span>Explore {srv.navTitle} &rarr;</span>
                    </Link>
                  </div>
                </article>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY NJURE SECTION */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="why-njure-heading">
        <InteractiveBackground3D variant="dark" density="low" className="opacity-35" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Why Njure Tech</span>
            </div>
            <h2 id="why-njure-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              A Business Partner Model, Not Just an Outsourcing Agency
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Traditional BPOs siphon 50%–70% of client fees into corporate overhead and physical leases while underpaying frontline staff. Njure Tech is structured around four distinct operational advantages:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.partnershipModel.pillars.map((pillar, i) => (
              <div key={i} className="p-6 rounded-xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 transition-colors flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded bg-cyan-950 text-cyan-400 flex items-center justify-center font-bold text-sm mb-4 border border-cyan-800 font-mono">
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
        </div>
      </section>

      {/* 4. HOW IT WORKS SECTION */}
      <section className="py-20 bg-white border-b border-slate-200" aria-labelledby="how-it-works-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
              Structured Methodology
            </div>
            <h2 id="how-it-works-heading" className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              How It Works: 4-Step Onboarding to Scale
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We make client onboarding low-risk, rapid, and structured directly around your existing communication tools:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-700 block mb-2">01 · Scoping</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Volume & Budget Scoping</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We review average daily volume, peak hours, language needs, and target SLAs to build a staffing plan strictly inside your monthly budget.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-700 block mb-2">02 · Induction</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">SOP & Script Induction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We ingest brand guidelines, refund rules, and ticket workflows into a formalized internal knowledge base for agent calibration.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-700 block mb-2">03 · Pilot</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">7-Day Supervised Pilot</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our team runs a controlled test queue with daily client QA syncs to audit response accuracy, tone, and resolution speed.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-mono font-bold text-blue-700 block mb-2">04 · Scale</span>
              <h3 className="text-base font-bold text-slate-900 mb-2">Live Scaled Operations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full production with daily attendance scorecards, 15-minute shift overlap handovers, and regular stakeholder SLA reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROOF / SELECTED CAPABILITIES FRAMEWORK */}
      <section className="py-20 bg-slate-50 border-b border-slate-200" aria-labelledby="capabilities-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-blue-700" />
              <span>Proof / Selected Capabilities</span>
            </div>
            <h2 id="capabilities-heading" className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Selected Capabilities & Operational Blueprints
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              As a matter of policy, we do not fabricate client logos or publish unverified reviews. Instead, inspect our factual operational blueprints detailing the exact team structure, workflow, implementation, and measured outcomes we execute.
            </p>
          </div>

          {/* Interactive Capability Selector Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {SELECTED_CAPABILITIES.map((cap) => (
              <button
                key={cap.id}
                type="button"
                onClick={() => setSelectedCapabilityId(cap.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCapabilityId === cap.id
                    ? 'bg-blue-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cap.title.split('&')[0].trim()}
              </button>
            ))}
          </div>

          {/* Active Capability Deep Dive Card (Exact 8 Required Fields) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-8">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-blue-700 block mb-1">
                  {activeCapability.badge}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {activeCapability.title}
                </h3>
              </div>
              <div className="px-3 py-1.5 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 self-start lg:self-center">
                Industry: <span className="text-blue-700">{activeCapability.clientIndustry}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Problem, Scope, Implementation */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Problem & Operational Bottleneck
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                    {activeCapability.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Operational Scope & Deliverables
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {activeCapability.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Workflow & Execution Cadence
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {activeCapability.workflow}
                  </p>
                </div>
              </div>

              {/* Right Column: Team, Implementation, Outcome, Time Period */}
              <div className="lg:col-span-5 space-y-6 lg:border-l lg:border-slate-100 lg:pl-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Team Composition & Roster
                  </h4>
                  <p className="text-xs font-semibold text-slate-900">
                    {activeCapability.team}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Implementation & Governance Gate
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {activeCapability.implementation}
                  </p>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-1">
                    Measured Outcome Target
                  </h4>
                  <p className="text-xs font-semibold text-emerald-950 leading-relaxed">
                    {activeCapability.measuredOutcome}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Time Period & Engagement Cadence
                  </h4>
                  <p className="text-xs font-mono text-slate-700">
                    {activeCapability.timePeriod}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION (Structured for AI Crawlers & Google Snippets) */}
      <section className="py-20 bg-white border-b border-slate-200" aria-labelledby="faq-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
              <span>Direct Answers</span>
            </div>
            <h2 id="faq-heading" className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
              Frequently Asked Questions About Njure Tech Operations
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clear, transparent answers regarding our client-budget model, remote security controls, and operational workflows:
            </p>
          </div>

          <div className="max-w-4xl space-y-4">
            {GENERAL_FAQS.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-semibold text-sm text-slate-900 hover:bg-slate-100 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-blue-700 font-bold">0{idx + 1}</span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-200 bg-white">
                    <p className="text-slate-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Direct Consultation
              </span>
              <h2 id="cta-heading" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Ready to scope an operations pod around your exact budget?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect directly with our operations team. We evaluate your ticket volumes, recommend staffing structures, and deploy within 7 business days with zero agency cut.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors shadow-xs"
              >
                <span>Request Budget Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-md transition-colors"
              >
                <span>Explore All Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
