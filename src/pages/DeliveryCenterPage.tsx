import React from 'react';
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
  CheckCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Interactive3DSecurityPod } from '../components/3d/Interactive3DSecurityPod';

interface DeliveryCenterPageProps {
  onNavigate: (page: string) => void;
}

export const DeliveryCenterPage: React.FC<DeliveryCenterPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Operations Model
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            100% Remote Operations & Cloud Infrastructure
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            {COMPANY_INFO.name} operates with a modern, fully distributed workforce. With zero physical office overhead, we deliver enterprise-grade customer support and back-office operations through secure cloud orchestration.
          </p>
        </div>

        {/* Remote Architecture Overview Card */}
        <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-2xs mb-12">
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

            <div className="lg:col-span-4 bg-slate-50 p-6 rounded-lg border border-slate-200 space-y-3 text-xs">
              <div className="text-slate-400 uppercase font-semibold text-[11px]">
                Operational Specifications
              </div>
              <div className="font-bold text-sm text-slate-800">
                100% Virtual Distributed Workforce
              </div>
              <div className="text-slate-600">
                Physical Workspace: None (Fully Remote as of now)
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

        {/* 4 Pillars of Remote Governance & Security */}
        <div className="mb-16">
          <h2 className="text-xl font-bold text-slate-900 mb-6">How We Govern Distributed Remote Operations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Cloud-Native Tooling</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Agents operate within cloud helpdesks (Zendesk, Freshdesk, Jira JSM, FreeScout) with centralized ticket dispatching and real-time activity dashboards.
              </p>
              <div className="text-[11px] font-semibold text-blue-700">Zero-Trust Cloud Access</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Endpoint Security & NDAs</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Mandatory bilateral NDAs, port-restricted remote workstations, two-factor authentication (2FA), and secure VPN tunnels protecting your sensitive customer data.
              </p>
              <div className="text-[11px] font-semibold text-emerald-700">Strict Data Privacy</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Daily Standups & Live QA</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Remote team leads conduct daily video syncs, randomly audit 10% of closed tickets and recorded calls, and run live escalation channels.
              </p>
              <div className="text-[11px] font-semibold text-indigo-700">Continuous Supervision</div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Home Power & Net Continuity</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                All remote specialists are vetted for high-speed fiber broadband (30+ Mbps), secondary 4G/5G mobile failover, and inverter/UPS home power backup.
              </p>
              <div className="text-[11px] font-semibold text-amber-700">Uninterrupted Shifts</div>
            </div>
          </div>
        </div>

        {/* Real Governance Over Corporate Paper Badges */}
        <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-lg border border-slate-800 mb-16">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Operational Integrity & Data Security</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              We May Not Be Certified by ISO or SOC — But We Follow Everything Better Than Corporates
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We are radically transparent: we don’t buy expensive corporate certification badges to tick boxes on paper. Instead, we enforce practical operational security, endpoint lockdowns, and process discipline far better than bureaucratic call centers—without passing badge markups to your invoice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-slate-800/80 border border-slate-700">
              <div className="text-rose-400 text-xs font-mono uppercase font-bold tracking-wider mb-2">
                Typical Corporate BPO Reality
              </div>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0 mt-0.5">✕</span>
                  <span>Tens of thousands spent annually on paper ISO/SOC badges purely for sales decks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0 mt-0.5">✕</span>
                  <span>Massive 60%–80% frontline staff attrition where unmotivated workers treat client data carelessly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold shrink-0 mt-0.5">✕</span>
                  <span>Compliance overhead, audit fees, and bureaucratic administration passed directly onto client rates.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-emerald-950/40 border border-emerald-800/60">
              <div className="text-emerald-400 text-xs font-mono uppercase font-bold tracking-wider mb-2">
                Njure Tech Operational Standard
              </div>
              <ul className="space-y-2.5 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Port & USB Lockdown:</strong> Blocked external storage, zero data extraction, and clean-screen enforcement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Business Partner Co-Ownership:</strong> Our specialists share in the profit, taking personal responsibility for client reputation and zero leaks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Client-Controlled Access:</strong> Role-based SSO and MFA with instant one-click credential revocation directly in your custody.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive 3D Spatial Security Pod Visualizer */}
          <Interactive3DSecurityPod className="mt-8" />
        </div>

        {/* 24/7 Follow-the-Sun Shift Coverage */}
        <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-2xs mb-16">
          <div className="max-w-2xl mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-1">Global Remote Shift Models</h2>
            <p className="text-xs text-slate-600">
              Because our team is completely remote and distributed, we seamlessly coordinate round-the-clock shift schedules across time zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded border border-slate-200 bg-slate-50">
              <div className="font-bold text-slate-800 text-sm mb-1">Domestic & Regional Daytime</div>
              <div className="text-blue-700 font-mono text-[11px] mb-2">09:00 AM – 06:00 PM IST</div>
              <p className="text-slate-600 leading-relaxed">
                Dedicated daytime remote customer support and order operations for Indian e-commerce brands and Middle East commercial accounts.
              </p>
            </div>

            <div className="p-5 rounded border border-slate-200 bg-slate-50">
              <div className="font-bold text-slate-800 text-sm mb-1">Western Overnight Shifts</div>
              <div className="text-blue-700 font-mono text-[11px] mb-2">08:00 PM – 05:00 AM IST</div>
              <p className="text-slate-600 leading-relaxed">
                Night shift remote teams serving US, UK, and European daytime customer bases with real-time phone, live chat, and email responses.
              </p>
            </div>

            <div className="p-5 rounded border border-slate-200 bg-slate-50">
              <div className="font-bold text-slate-800 text-sm mb-1">24/7 Follow-the-Sun Roster</div>
              <div className="text-blue-700 font-mono text-[11px] mb-2">Continuous 3-Shift Rotation</div>
              <p className="text-slate-600 leading-relaxed">
                Structured rotational shifts with mandatory 15-minute overlap handovers between remote leads to guarantee zero ticket aging.
              </p>
            </div>
          </div>
        </div>

        {/* Central Inquiries Banner */}
        <div className="bg-slate-900 text-white p-8 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-cyan-400 font-semibold text-xs uppercase tracking-wider">
              Direct Central Inquiries
            </div>
            <h3 className="text-lg font-bold">Have an operations requirement or RFQ?</h3>
            <p className="text-xs text-slate-400">
              Send your project specifications, ticket volumes, or questions directly to <strong className="text-white font-mono">{COMPANY_INFO.inquiriesEmail}</strong>.
            </p>
          </div>
          <a
            href={`mailto:${COMPANY_INFO.inquiriesEmail}?subject=Enterprise Operations Inquiry - Njure Tech`}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors cursor-pointer shrink-0"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email {COMPANY_INFO.inquiriesEmail}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
