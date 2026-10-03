import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Code, 
  Cloud, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Check, 
  Layers, 
  Workflow, 
  Share2, 
  ShieldCheck, 
  BarChart3,
  Lock,
  Zap
} from 'lucide-react';
import { FUTURE_ROADMAP, COMPANY_INFO } from '../data/companyData';
import { InteractivePipeline3D } from '../components/3d/InteractivePipeline3D';
import { Breadcrumb } from '../components/Breadcrumb';

export const FutureTechPage: React.FC = () => {
  return (
    <div className="bg-slate-50 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Technology Architecture' }]} />

        {/* Page Header */}
        <header className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Technology & Systems Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Technology, Integrations & Systems Architecture
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            While our active operations deliver high-touch human BPO execution, our digital engineering arm bridges customer touchpoints, automated webhook pipelines, and operational telemetry via <strong className="font-mono text-blue-700">{COMPANY_INFO.domain}</strong>.
          </p>
        </header>

        {/* 1. WORKFLOW SECTION */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-12" aria-labelledby="workflow-heading">
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
              Architecture Pillar 01
            </span>
            <h2 id="workflow-heading" className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Workflow: Operations First, Automation Second
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Software engineered in an echo chamber fails when encountering real-world edge cases. We run frontline BPO specialists today to map every manual bottleneck, call escalation, and spreadsheet discrepancy before automating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">1</div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Process Observation</h3>
              <p className="leading-relaxed">
                Specialists log ticket handling times, repetitive customer questions, and manual copy-paste friction across systems.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">2</div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Macro & Template Optimization</h3>
              <p className="leading-relaxed">
                Standardizing response macros, address formatters, and dual-pass validation checklists to eliminate human error.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-8 h-8 rounded bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">3</div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Targeted API Automation</h3>
              <p className="leading-relaxed">
                Connecting event triggers and webhooks to eliminate repetitive administrative tasks without sacrificing human empathy.
              </p>
            </div>
          </div>
        </section>

        {/* 2. INTEGRATIONS SECTION */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-12" aria-labelledby="integrations-heading">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
              Architecture Pillar 02
            </span>
            <h2 id="integrations-heading" className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Integrations: Direct Connectivity into Client Ecosystems
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We never require clients to rip and replace their existing tools. Our remote specialists operate natively across your tools, supported by webhook pipelines:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-700">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-2">ITSM & Ticketing</h3>
              <p className="text-slate-600 mb-3">Direct integration into configured ITIL queues and SLA countdowns.</p>
              <div className="font-mono text-[11px] text-blue-700">Zendesk · Freshdesk · Jira JSM · Zoho Desk</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-2">E-Commerce & 3PL</h3>
              <p className="text-slate-600 mb-3">Real-time order lookup, NDR exception updates, and refund checks.</p>
              <div className="font-mono text-[11px] text-blue-700">Shopify · Shiprocket · ClickPost · WooCommerce</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-2">CRM & Sales</h3>
              <p className="text-slate-600 mb-3">Speed-to-lead disposition syncing and calendar discovery booking.</p>
              <div className="font-mono text-[11px] text-blue-700">HubSpot · Zoho CRM · LeadSquared · Google Cal</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-2">Cloud PBX Telephony</h3>
              <p className="text-slate-600 mb-3">Automatic call recording, IVR queue routing, and supervisor whisper.</p>
              <div className="font-mono text-[11px] text-blue-700">Vicidial · Exotel · Knowlarity · Ozonetel</div>
            </div>
          </div>
        </section>

        {/* Interactive 3D Automation Pipeline Simulation */}
        <section className="mb-12" aria-labelledby="pipeline-heading">
          <div className="mb-4">
            <h2 id="pipeline-heading" className="text-xl font-bold text-slate-900 mb-1">
              Real-Time Event Integration Pipeline
            </h2>
            <p className="text-xs text-slate-600">
              Interactive 3D simulation of our event-driven integration layer connecting customer touchpoints, data validation, and remote pods.
            </p>
          </div>
          <InteractivePipeline3D />
        </section>

        {/* 3. SECURITY SECTION */}
        <section className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl border border-slate-800 mb-12" aria-labelledby="tech-security-heading">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
              Architecture Pillar 03
            </span>
            <h2 id="tech-security-heading" className="text-2xl font-bold tracking-tight text-white mb-2">
              Security: Zero-Trust Remote Workspaces
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              Transparent posture: Njure Tech is currently not ISO 27001 or SOC 2 certified. We enforce technical endpoint policies to guarantee data confidentiality:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <Lock className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="font-bold text-sm text-white mb-1">Port Lockdown & USB Restriction</h3>
              <p className="leading-relaxed">Workstations block external mass storage drives and unapproved browser extensions to prevent data exfiltration.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <ShieldCheck className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="font-bold text-sm text-white mb-1">Client-Controlled SSO & MFA</h3>
              <p className="leading-relaxed">Specialists access your systems strictly via accounts managed by your Google Workspace/Okta with one-click revocation.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700">
              <Cloud className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="font-bold text-sm text-white mb-1">TLS 1.3 & Encrypted Traffic</h3>
              <p className="leading-relaxed">All data in transit is encrypted using modern TLS protocols. Production data remains strictly within client cloud storage.</p>
            </div>
          </div>
        </section>

        {/* 4. REPORTING SECTION */}
        <section className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-2xs mb-12" aria-labelledby="reporting-heading">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold block mb-1">
              Architecture Pillar 04
            </span>
            <h2 id="reporting-heading" className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Reporting: Real-Time Operational Telemetry & Scorecards
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Complete visibility into queue health, attendance, and SLA performance without hidden metrics:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <BarChart3 className="w-5 h-5 text-blue-700 mb-2" />
              <h3 className="font-bold text-sm text-slate-900 mb-1">Weekly CSAT & SLA Scorecards</h3>
              <p className="text-slate-600 leading-relaxed">Formal weekly reports detailing first response times, resolution rates, ticket volume distributions, and customer satisfaction scores.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <Workflow className="w-5 h-5 text-blue-700 mb-2" />
              <h3 className="font-bold text-sm text-slate-900 mb-1">Shift Overlap Logs</h3>
              <p className="text-slate-600 leading-relaxed">Documented 15-minute supervisor handover logs tracking high-priority disputes, unresolved courier exceptions, and system release updates.</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <Code className="w-5 h-5 text-blue-700 mb-2" />
              <h3 className="font-bold text-sm text-slate-900 mb-1">Planned Client Portals</h3>
              <p className="text-slate-600 leading-relaxed">Our upcoming digital roadmap includes bespoke client web dashboards for real-time ticket analytics and automated invoice reconciliation.</p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">Have a custom software or API workflow?</h3>
            <p className="text-xs text-slate-400">
              Our operations architects can join a 20-minute discovery call to review your integration endpoints.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors shrink-0"
          >
            <span>Schedule Discovery Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
