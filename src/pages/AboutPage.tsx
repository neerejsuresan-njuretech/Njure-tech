import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  MapPin, 
  Target, 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  Globe, 
  Compass, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink,
  Laptop,
  Lock,
  Key,
  FileCheck,
  UserCheck,
  AlertTriangle,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from '../components/Logo';
import { Breadcrumb } from '../components/Breadcrumb';

export const AboutPage: React.FC = () => {
  const { backgroundStory } = COMPANY_INFO;

  return (
    <div className="bg-slate-50 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'About Us' }]} />

        {/* Page Header */}
        <header className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Company & Heritage
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            About Njure Tech
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            The remote-first business process operations and technology arm of <strong className="text-slate-900">{COMPANY_INFO.parentGroup}</strong>.
          </p>
        </header>

        {/* 1. COMPANY SECTION */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-12" aria-labelledby="company-heading">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-8">
            <Logo size="lg" />
            <div className="text-xs text-slate-500 font-mono space-y-0.5">
              <span className="text-blue-700 font-bold block">{COMPANY_INFO.domain}</span>
              <span className="text-slate-400 text-[11px] block">A venture of {COMPANY_INFO.parentGroup}</span>
            </div>
          </div>

          <div className="max-w-3xl space-y-6 text-sm text-slate-600 leading-relaxed">
            <div>
              <h2 id="company-heading" className="text-xl font-bold text-slate-900 mb-3">
                {backgroundStory.headline}
              </h2>
              <p>{backgroundStory.origins}</p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900 mb-2">The Problem We Observed</h3>
              <p>{backgroundStory.theProblem}</p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <h3 className="text-base font-bold text-slate-900 mb-2">Parent Organization & Corporate Registry</h3>
              <p>
                Njure Tech is legally organized under <strong>{COMPANY_INFO.parentGroup}</strong> (<a href="https://njuregroup.in" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline inline-flex items-center gap-1">njuregroup.in <ExternalLink className="w-3 h-3" /></a>). While our parent entity oversees broader business ventures, Njure Tech specializes exclusively in cloud-based customer support operations, back-office data processing, e-commerce logistics support, and digital technology roadmaps.
              </p>
            </div>
          </div>
        </section>

        {/* 2. OPERATING MODEL SECTION */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-12" aria-labelledby="operating-model-heading">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
              Operational Delivery
            </span>
            <h2 id="operating-model-heading" className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
              100% Remote & Distributed Cloud Operations
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We operate without physical commercial real estate overhead. Our specialists are distributed across India, vetted for dedicated quiet workspaces, high-speed fiber broadband (30+ Mbps), and power backup systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
                <Laptop className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Zero Real Estate Overhead</h3>
              <p className="leading-relaxed">
                Client capital is invested directly into frontline specialists and supervisors rather than funding commercial leases and administrative bloat.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
                <Globe className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Follow-the-Sun Coverage</h3>
              <p className="leading-relaxed">
                24/7 rotational shift schedules with mandatory 15-minute overlap handovers between supervisors ensure zero ticket aging across time zones.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Multilingual Talent</h3>
              <p className="leading-relaxed">
                Frontline fluency across professional English and Indian regional languages (Malayalam, Hindi, and Tamil) for domestic and international markets.
              </p>
            </div>
          </div>
        </section>

        {/* 3. PARTNER MODEL SECTION */}
        <section className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl border border-slate-800 mb-12" aria-labelledby="partner-model-heading">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
              Economics & Ethics
            </span>
            <h2 id="partner-model-heading" className="text-2xl font-bold tracking-tight text-white mb-3">
              The Zero-Cut Business Partner Model
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We do not treat our specialists as disposable temp workers. We take zero agency cut from client billables, distributing project earnings directly to our remote specialists as profit-sharing partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {COMPANY_INFO.partnershipModel.pillars.map((pillar, i) => (
              <div key={i} className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
                <span className="text-xs font-mono font-bold text-cyan-400 block mb-2">Pillar 0{i + 1}</span>
                <h3 className="text-sm font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. GOVERNANCE SECTION */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-12" aria-labelledby="governance-heading">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
              Trust & Compliance
            </span>
            <h2 id="governance-heading" className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
              Security by Design & Operating Governance
            </h2>

            {/* Transparent Certification Notice */}
            <div className="p-4 rounded-lg bg-amber-50/80 border border-amber-200 text-xs text-amber-900 mb-4 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-0.5">Transparent Certification Disclosure:</strong>
                <span>{COMPANY_INFO.governanceManifesto.certificationNotice}</span> We communicate our posture transparently so clients can review safeguards against internal compliance matrices.
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {COMPANY_INFO.governanceManifesto.subheadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <Lock className="w-5 h-5 text-blue-700" />
              <h3 className="text-sm font-bold text-slate-900">Endpoint Port Lockdown</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Workstations operate under endpoint policies that restrict external mass storage devices and enforce clean-screen standards.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <Key className="w-5 h-5 text-blue-700" />
              <h3 className="text-sm font-bold text-slate-900">Client-Controlled Identity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialists access client systems directly via role-based credentials managed by your organization, supporting MFA and instant revocation.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <FileCheck className="w-5 h-5 text-blue-700" />
              <h3 className="text-sm font-bold text-slate-900">Bilateral Enforceable NDAs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every remote specialist executes comprehensive, legally binding non-disclosure agreements prior to onboarding.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <UserCheck className="w-5 h-5 text-blue-700" />
              <h3 className="text-sm font-bold text-slate-900">Supervisor Queue Monitoring</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operational leads conduct daily queue monitoring, call listening audits, and shift synchronization for strict SOP adherence.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <ShieldCheck className="w-5 h-5 text-blue-700" />
              <h3 className="text-sm font-bold text-slate-900">Pre-Production Security Gate</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Client-specific security and data-handling requirements are reviewed and confirmed during onboarding before production access.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-blue-50 border border-blue-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block mb-1">Dedicated Security Page</span>
                <p className="text-xs text-blue-900 leading-relaxed mb-3">
                  Inspect our full endpoint safeguards, VPN architecture, and data privacy framework.
                </p>
              </div>
              <Link to="/security" className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1">
                <span>View Security Governance &rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Inquiries CTA */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Have an operations requirement or inquiry?</h3>
            <p className="text-xs text-slate-400">
              Direct consultation with our operations leadership. Same-business-day response.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors shrink-0"
          >
            <span>Contact Operations Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
