import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Zap, 
  Lock, 
  Laptop, 
  Clock, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Headphones, 
  Server, 
  Cloud, 
  Globe2, 
  Users, 
  Mail, 
  CheckCircle,
  Database,
  ShoppingBag,
  PhoneCall
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Interactive3DSecurityPod } from '../components/3d/Interactive3DSecurityPod';
import { Breadcrumb } from '../components/Breadcrumb';

export const DeliveryCenterPage: React.FC = () => {
  return (
    <div className="bg-slate-50 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Remote Operations Architecture' }]} />

        {/* Page Header */}
        <header className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Operations Model & Infrastructure
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            100% Remote Operations Model & Distributed Delivery Architecture
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            {COMPANY_INFO.name} operates with a modern, fully distributed workforce. With zero physical office overhead, we deliver enterprise-grade customer support and back-office operations through secure cloud orchestration.
          </p>
        </header>

        {/* Remote Architecture Overview Card */}
        <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-2xs mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Cloud-First Architecture · Fully Distributed Remote Team</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Agile Remote Operations Without Real Estate Bloat
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Traditional outsourcing conglomerates bind clients to rigid multi-year contracts to finance massive physical call center buildings and commercial real estate. Njure Tech eliminates physical office overhead entirely.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our specialists work remotely across distributed locations, connected via zero-trust cloud workspaces, real-time supervisor QA channels, and strict confidentiality protocols.
              </p>
            </div>

            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3 text-xs">
              <div className="text-slate-400 uppercase font-semibold text-[11px]">
                Operational Specifications
              </div>
              <div className="font-bold text-sm text-slate-800">
                100% Virtual Distributed Workforce
              </div>
              <div className="text-slate-600">
                Physical Workspace: None (100% Cloud-First & Remote)
              </div>
              <div className="pt-2 border-t border-slate-200 space-y-1">
                <div className="text-slate-500">Contact:</div>
                <a 
                  href={`mailto:${COMPANY_INFO.inquiriesEmail}`}
                  className="font-mono text-blue-700 font-semibold hover:underline block"
                >
                  {COMPANY_INFO.inquiriesEmail}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Remote Governance */}
        <section className="mb-16" aria-labelledby="governance-pillars-heading">
          <h2 id="governance-pillars-heading" className="text-xl font-bold text-slate-900 mb-6">
            How We Govern Distributed Remote Operations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Cloud-Native Tooling</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Agents operate within cloud helpdesks (Zendesk, Freshdesk, Jira JSM, FreeScout) with centralized ticket dispatching and real-time activity dashboards.
              </p>
              <div className="text-[11px] font-semibold text-blue-700">Zero-Trust Cloud Access</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Endpoint Security & NDAs</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Mandatory bilateral NDAs, port-restricted remote workstations, two-factor authentication (2FA), and secure VPN tunnels protecting your sensitive customer data.
              </p>
              <Link to="/security" className="text-[11px] font-semibold text-emerald-700 hover:underline">
                Explore Security Controls &rarr;
              </Link>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Daily Standups & Live QA</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Remote team leads conduct daily video syncs, randomly audit closed tickets and recorded calls, and run live escalation channels.
              </p>
              <div className="text-[11px] font-semibold text-indigo-700">Continuous Supervision</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Power & Net Continuity</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                All remote specialists are vetted for high-speed fiber broadband (30+ Mbps), secondary mobile failover, and inverter/UPS home power backup.
              </p>
              <div className="text-[11px] font-semibold text-amber-700">Uninterrupted Shifts</div>
            </div>
          </div>
        </section>

        {/* Security by Design & Implemented Operating Controls */}
        <section className="bg-slate-900 text-white p-8 sm:p-10 rounded-xl border border-slate-800 mb-16" aria-labelledby="security-design-heading">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>Security by Design</span>
            </div>
            <h2 id="security-design-heading" className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              Security by Design & Operational Safeguards
            </h2>
            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 mb-4 font-mono">
              <strong>Transparency Disclosure:</strong> Njure Tech is currently not ISO 27001 or SOC 2 certified.
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our operating controls include appropriate access restrictions, endpoint policies, clean-desk practices, NDAs, client-controlled identity access, and supervisor-level quality controls. Client-specific security and compliance requirements are reviewed during onboarding before production access is granted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-slate-800/80 border border-slate-700">
              <div className="text-cyan-400 text-xs font-mono uppercase font-bold tracking-wider mb-3">
                Implemented Operating Controls
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Endpoint Policies & Port Lockdown:</strong> Workstations configured with restricted external mass storage and clean-screen standards.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Client-Controlled Identity (SSO / MFA):</strong> Role-based credentials managed directly by you with instant revocation custody.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Bilateral Enforceable NDAs:</strong> Comprehensive non-disclosure agreements executed with every specialist prior to account induction.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-slate-800/80 border border-slate-700">
              <div className="text-cyan-400 text-xs font-mono uppercase font-bold tracking-wider mb-3">
                Quality & Compliance Governance
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Supervisor Quality Oversight:</strong> Operations leads conduct daily queue monitoring, call listening audits, and shift synchronization.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Onboarding Security Review:</strong> Client-specific security, data-handling, and compliance needs are reviewed and validated before production access.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Partner Co-Ownership:</strong> Our specialists share directly in project profits, fostering authentic personal accountability.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs text-slate-400">Want to inspect our complete compliance and security framework?</span>
            <Link
              to="/security"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
            >
              <span>View Dedicated Security & Trust Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Interactive 3D Spatial Security Pod Visualizer */}
          <Interactive3DSecurityPod className="mt-8" />
        </section>

        {/* 24/7 Follow-the-Sun Shift Coverage */}
        <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-2xs mb-16" aria-labelledby="shift-models-heading">
          <div className="max-w-2xl mb-6">
            <h2 id="shift-models-heading" className="text-xl font-bold text-slate-900 mb-1">Global Remote Shift Models</h2>
            <p className="text-xs text-slate-600">
              Because our team is completely remote and distributed, we seamlessly coordinate round-the-clock shift schedules across time zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50">
              <div className="font-bold text-slate-800 text-sm mb-1">Domestic & Regional Daytime</div>
              <div className="text-blue-700 font-mono text-[11px] mb-2">09:00 AM – 06:00 PM IST</div>
              <p className="text-slate-600 leading-relaxed">
                Dedicated daytime remote customer support and order operations for Indian e-commerce brands and Middle East commercial accounts.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50">
              <div className="font-bold text-slate-800 text-sm mb-1">Western Overnight Shifts</div>
              <div className="text-blue-700 font-mono text-[11px] mb-2">08:00 PM – 05:00 AM IST</div>
              <p className="text-slate-600 leading-relaxed">
                Night shift remote teams serving US, UK, and European daytime customer bases with real-time phone, live chat, and email responses.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-slate-200 bg-slate-50">
              <div className="font-bold text-slate-800 text-sm mb-1">24/7 Follow-the-Sun Roster</div>
              <div className="text-blue-700 font-mono text-[11px] mb-2">Continuous 3-Shift Rotation</div>
              <p className="text-slate-600 leading-relaxed">
                Structured rotational shifts with mandatory 15-minute overlap handovers between remote leads to guarantee zero ticket aging.
              </p>
            </div>
          </div>
        </section>

        {/* Central Inquiries Banner */}
        <div className="bg-slate-900 text-white p-8 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-cyan-400 font-semibold text-xs uppercase tracking-wider">
              Direct Central Inquiries
            </div>
            <h3 className="text-lg font-bold">Have an operations requirement or RFQ?</h3>
            <p className="text-xs text-slate-400">
              Send your project specifications, ticket volumes, or questions directly to <strong className="text-white font-mono">{COMPANY_INFO.inquiriesEmail}</strong>.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors cursor-pointer shrink-0"
          >
            <span>Request Operations Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
