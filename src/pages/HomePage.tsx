import React from 'react';
import { 
  Headphones, 
  Database, 
  ShoppingBag, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  Users, 
  Sparkles,
  Zap,
  Target,
  BarChart2,
  HeartHandshake
} from 'lucide-react';
import { COMPANY_INFO, BPO_SERVICES, FUTURE_ROADMAP } from '../data/companyData';
import { InteractiveBackground3D } from '../components/3d/InteractiveBackground3D';
import { TiltCard } from '../components/motion/TiltCard';
import { CountUpNumber } from '../components/motion/CountUpNumber';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50">
      {/* Hero Section with 3D Ambient Wave & Geometry Background */}
      <section className="bg-white border-b border-slate-200 py-18 lg:py-24 relative overflow-hidden">
        {/* Interactive 3D Mesh Background */}
        <InteractiveBackground3D variant="light" density="normal" className="opacity-75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">

            {/* Service-Specific Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              {COMPANY_INFO.tagline}
            </h1>

            {/* Value Proposition */}
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {COMPANY_INFO.subTagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleNav('services')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors shadow-xs cursor-pointer"
              >
                <span>Explore BPO Offerings</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors cursor-pointer"
              >
                <span>Request a Proposal</span>
              </button>
            </div>

            {/* Service Outcomes Ribbon with Smooth Animated Metrics */}
            <div className="pt-10 mt-10 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs text-slate-600">
              <div>
                <span className="font-bold text-slate-900 text-base block font-mono">
                  <CountUpNumber value={99.8} decimals={1} suffix="%" />
                </span>
                <span className="text-slate-500">First-contact SLA benchmark</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 text-base block font-mono">
                  <CountUpNumber value={99.5} decimals={1} suffix="%+" />
                </span>
                <span className="text-slate-500">Data accuracy SLA</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 text-base block font-mono">
                  <CountUpNumber value={7} suffix="-Day" />
                </span>
                <span className="text-slate-500">Fast pilot onboarding</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 text-base block font-mono">
                  <CountUpNumber value={100} suffix="% Remote" />
                </span>
                <span className="text-slate-500">Zero real estate bloat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                Operational Capabilities
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Our Core BPO Services
              </h2>
            </div>
            <button
              onClick={() => handleNav('services')}
              className="text-sm font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 cursor-pointer self-start"
            >
              <span>View full service scope & deliverables</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BPO_SERVICES.map((srv, idx) => (
              <TiltCard key={srv.id} className="h-full">
                <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between h-full">
                  <div>
                    <div className="w-10 h-10 rounded bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                      {idx === 0 && <Headphones className="w-5 h-5" />}
                      {idx === 1 && <Database className="w-5 h-5" />}
                      {idx === 2 && <ShoppingBag className="w-5 h-5" />}
                      {idx === 3 && <PhoneCall className="w-5 h-5" />}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">{srv.title}</h3>
                    <p className="text-xs font-medium text-blue-600 mb-2">{srv.tagline}</p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{srv.shortDesc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] uppercase font-semibold text-slate-400">Key Deliverables:</div>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {srv.keyOutcomes.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Client-Budget-Oriented & Zero-Cut Partner Model */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle 3D Geometric Lattice Background */}
        <InteractiveBackground3D variant="dark" density="low" className="opacity-35" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.partnershipModel.headline}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
              We Are Business Partners, Not Just an Employee and a Company
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Traditional outsourcing agencies siphon off 50% to 70% of client invoices while underpaying frontline workers. At Njure Tech, we operate differently: we tailor operations strictly to your budget, take no agency cut, and pass project profits directly to our remote specialists as business partners.
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
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors cursor-pointer shrink-0"
            >
              <span>Scope Your Budget</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Operational Disciplines / Why Us */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
              Operational Standards
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
              How We Deliver Consistency & Quality
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We operate as a direct extension of your business with documented processes, daily reporting, and proactive communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded bg-slate-100 text-blue-700 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Documented SOPs & Inductions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Before answering a single customer call or processing an order, your dedicated team undergoes rigorous training on your scripts, brand voice, and escalation protocols.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded bg-slate-100 text-blue-700 flex items-center justify-center">
                <BarChart2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Continuous QA Audits & Scorecards</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our operations supervisors audit call recordings, ticket responses, and data logs daily to ensure accuracy benchmarks and CSAT metrics are consistently exceeded.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-10 h-10 rounded bg-slate-100 text-blue-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Confidentiality & Data Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All personnel sign formal non-disclosure agreements (NDAs). Operations are conducted on port-restricted workstations following strict clean-desk security policies.
              </p>
            </div>
          </div>

          {/* Radical Honesty & Real Operational Governance Callout */}
          <div className="mt-12 bg-slate-900 text-white rounded-lg p-6 sm:p-8 border border-slate-800">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Real Governance Over Paper Badges</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  We May Not Be Certified by ISO or SOC — But We Follow Everything Better Than Corporates
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Legacy corporate BPOs spend fortunes buying ISO/SOC badges for sales decks, then pass the bill to clients while suffering from high agent turnover and lax floor enforcement. At Njure Tech, we enforce real security: disabled workstation USB ports, strict clean-desk policies, client-controlled SSO/MFA, bilateral NDAs, and daily supervisor audits—delivering airtight operational safety without corporate theater or markup.
                </p>
              </div>
              <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
                <div className="bg-slate-800/90 border border-slate-700 rounded px-4 py-2 text-xs text-slate-200 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Port & USB Lockdown</span>
                </div>
                <div className="bg-slate-800/90 border border-slate-700 rounded px-4 py-2 text-xs text-slate-200 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Client-Revocable SSO</span>
                </div>
                <div className="bg-slate-800/90 border border-slate-700 rounded px-4 py-2 text-xs text-slate-200 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Bilateral Legal NDAs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remote Operations Model Spotlight Teaser */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg border border-slate-200 p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-xs">
            <div className="max-w-xl">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                Operational Architecture
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                100% Remote & Distributed Operations
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                We operate with a modern, fully distributed workforce—eliminating the costly overhead of physical call center real estate. Our specialists connect via zero-trust cloud workspaces with daily supervisor standups and rigorous QA monitoring.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  Zero Real Estate Overhead
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  Secure Cloud Helpdesks & VPNs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  Strict Clean-Desk NDAs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                  24/7 Follow-The-Sun Roster
                </span>
              </div>
            </div>

            <button
              onClick={() => handleNav('delivery-center')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer shrink-0"
            >
              <span>Explore Remote Operations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Technology Roadmap Teaser */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Technology Roadmap</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Expanding into Digital Engineering & Automation
              </h3>
            </div>
            <button
              onClick={() => handleNav('future-tech')}
              className="text-xs font-semibold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Explore our tech roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {FUTURE_ROADMAP.map((item) => (
              <div key={item.id} className="p-5 rounded-md bg-slate-50 border border-slate-200">
                <span className="text-[11px] font-semibold text-blue-700 block mb-1">
                  {item.status}
                </span>
                <h4 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-3">Scale Your Operations With Confidence</h2>
          <p className="text-sm text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">
            Schedule an operational discovery call to review ticket volumes, discuss software tool integrations, or launch a fast 7-day pilot queue.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-blue-900 bg-white hover:bg-slate-100 rounded-md transition-colors cursor-pointer shadow-sm"
          >
            <span>Request an Operations Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
