import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  BarChart3, 
  ArrowRight, 
  Wifi, 
  Zap, 
  Lock, 
  Key, 
  FileCheck, 
  Check, 
  Globe2, 
  AlertTriangle 
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
            Operational Delivery Model
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Remote Operations: Workforce, QA, Shifts, Security & Reporting
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            How Njure Tech governs a 100% distributed, remote workforce to deliver consistent SLA adherence without the commercial real estate overhead of legacy call centers.
          </p>
        </header>

        {/* 1. WORKFORCE SECTION */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-10" aria-labelledby="workforce-heading">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
              Operations Pillar 01
            </span>
            <h2 id="workforce-heading" className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Workforce: Distributed Talent & Home Setup Standards
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We tap into high-caliber talent across India who prefer remote work. Every specialist is screened and vetted for strict home workspace parameters before joining a client pod:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <Wifi className="w-5 h-5 text-blue-700 mb-2" />
              <h3 className="font-bold text-sm text-slate-900 mb-1">Fiber Broadband & 4G/5G Failover</h3>
              <p className="text-slate-600 leading-relaxed">Mandatory primary fiber connection (minimum 30 Mbps) plus pre-configured secondary mobile hotspot failover to prevent disconnects.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <Zap className="w-5 h-5 text-blue-700 mb-2" />
              <h3 className="font-bold text-sm text-slate-900 mb-1">Inverter / UPS Power Continuity</h3>
              <p className="text-slate-600 leading-relaxed">Dedicated power backup setup guaranteeing 4+ hours of uninterrupted workstation power during localized power grid fluctuations.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <Users className="w-5 h-5 text-blue-700 mb-2" />
              <h3 className="font-bold text-sm text-slate-900 mb-1">Dedicated Quiet Workspace</h3>
              <p className="text-slate-600 leading-relaxed">Isolated home office room free from household background noise, unauthorized visual observers, and physical distractions.</p>
            </div>
          </div>
        </section>

        {/* 2. QA SECTION */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-10" aria-labelledby="qa-heading">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
              Operations Pillar 02
            </span>
            <h2 id="qa-heading" className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Quality Assurance: Dual-Pass Validation & Supervisor Audits
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Quality is engineered directly into our daily routines through multi-layer verification and supervisor oversight:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
              <h3 className="font-bold text-sm text-slate-900 mb-1">Dual-Pass Data Validation</h3>
              <p className="text-slate-600 leading-relaxed">For KYC, invoicing, and catalog tasks, critical records undergo secondary human verification to guarantee 99.5%+ field accuracy.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
              <h3 className="font-bold text-sm text-slate-900 mb-1">Ticket & Call Listening Audits</h3>
              <p className="text-slate-600 leading-relaxed">Supervisors sample and grade 100% of newly onboarded agent responses and 20% of baseline volume across tone, accuracy, and resolution.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
              <h3 className="font-bold text-sm text-slate-900 mb-1">Daily 1-on-1 Calibration</h3>
              <p className="text-slate-600 leading-relaxed">Brief morning syncs to review edge-case tickets from the previous day, update knowledge macros, and correct script deviations.</p>
            </div>
          </div>
        </section>

        {/* 3. SHIFTS SECTION */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-10" aria-labelledby="shifts-heading">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
              Operations Pillar 03
            </span>
            <h2 id="shifts-heading" className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Shifts: 24/7 Follow-the-Sun Rosters & Mandatory Overlaps
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Because our team is completely distributed, we seamlessly coordinate round-the-clock shift schedules across time zones without dropped tickets:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-mono text-blue-700 font-bold text-[11px] block mb-1">Shift Model A</span>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Domestic Daytime (09:00 – 18:00 IST)</h3>
              <p className="text-slate-600 leading-relaxed">Dedicated daytime remote customer support and order operations for Indian e-commerce brands and Middle East commercial accounts.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-mono text-blue-700 font-bold text-[11px] block mb-1">Shift Model B</span>
              <h3 className="font-bold text-sm text-slate-900 mb-1">Western Overnight (20:00 – 05:00 IST)</h3>
              <p className="text-slate-600 leading-relaxed">Night shift remote teams serving US, UK, and European daytime customer bases with real-time phone, live chat, and email responses.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-mono text-blue-700 font-bold text-[11px] block mb-1">Shift Model C</span>
              <h3 className="font-bold text-sm text-slate-900 mb-1">15-Minute Overlap Handover</h3>
              <p className="text-slate-600 leading-relaxed">Mandatory 15-minute supervisor overlap during every shift change to review open disputes and record a standardized handover log.</p>
            </div>
          </div>
        </section>

        {/* 4. SECURITY SECTION */}
        <section className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl border border-slate-800 mb-10" aria-labelledby="ops-security-heading">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
              Operations Pillar 04
            </span>
            <h2 id="ops-security-heading" className="text-2xl font-bold tracking-tight text-white mb-2">
              Security: Endpoint Governance & Bilateral NDAs
            </h2>
            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 mb-3 font-mono">
              <strong>Transparency Disclosure:</strong> Njure Tech is currently not ISO 27001 or SOC 2 certified.
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              We enforce practical, verifiable operational safeguards protecting client identity and customer data:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <Lock className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="font-bold text-sm text-white mb-1">Endpoint Port Restrictions</h3>
              <p className="leading-relaxed">Workstations block external mass storage drives and unapproved browser extensions to prevent local data copying.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <Key className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="font-bold text-sm text-white mb-1">Client-Controlled SSO / MFA</h3>
              <p className="leading-relaxed">Specialists access client systems directly via role-based credentials managed by you, with instant revocation authority.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <FileCheck className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="font-bold text-sm text-white mb-1">Enforceable Bilateral NDAs</h3>
              <p className="leading-relaxed">Every remote specialist executes comprehensive, legally binding non-disclosure agreements prior to account induction.</p>
            </div>
          </div>

          <Interactive3DSecurityPod className="mt-8" />
        </section>

        {/* 5. REPORTING SECTION */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-12" aria-labelledby="ops-reporting-heading">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
              Operations Pillar 05
            </span>
            <h2 id="ops-reporting-heading" className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Reporting: Scorecards, Daily Attendance & Metric Transparency
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every client engagement includes structured operational reporting cadences:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <BarChart3 className="w-5 h-5 text-blue-700 mb-2" />
              <h3 className="font-bold text-sm text-slate-900 mb-1">Daily Attendance & Seat Logs</h3>
              <p className="text-slate-600 leading-relaxed">Confirmation of scheduled versus active remote specialist hours, login timestamps, and shift queue distribution.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <Clock className="w-5 h-5 text-blue-700 mb-2" />
              <h3 className="font-bold text-sm text-slate-900 mb-1">Weekly SLA Performance Scorecards</h3>
              <p className="text-slate-600 leading-relaxed">Detailed breakdowns of First Contact Resolution (FCR), Average Handling Time (AHT), and CSAT scores by channel.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-blue-700 mb-2" />
              <h3 className="font-bold text-sm text-slate-900 mb-1">Monthly Stakeholder Reviews</h3>
              <p className="text-slate-600 leading-relaxed">Executive sync with operations leads to review seasonal volume forecasts, adjust pod capacity, and optimize workflows.</p>
            </div>
          </div>
        </section>

        {/* Direct Inquiries CTA */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Ready to deploy a remote operations pod?</h3>
            <p className="text-xs text-slate-400">
              We configure your shift rosters and onboard within 7 business days.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors shrink-0"
          >
            <span>Request Operations Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
