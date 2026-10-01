import React, { useState } from 'react';
import { 
  Headphones, 
  Database, 
  ShoppingBag, 
  PhoneCall, 
  Check, 
  ArrowRight,
  Clock,
  Layers,
  FileText,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Server,
  Code,
  ShieldCheck,
  Zap,
  DollarSign
} from 'lucide-react';
import { BPO_SERVICES } from '../data/companyData';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  highlights: string[];
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      category: 'ITSM & Tooling',
      question: 'Can your team work directly inside our existing Jira Service Management (JSM) setup?',
      answer:
        'Yes. Our team leads and support specialists are experienced with Jira Service Management (JSM). We can plug directly into your Atlassian Cloud or Data Center workspace. We adhere to your configured ITIL queues, incident resolution workflows, custom request types, and SLA countdown timers. If your customer support tickets link to engineering bug boards in Jira Software, our agents update cross-references seamlessly without disrupting your internal development cadence.',
      highlights: [
        'Direct login via role-restricted Atlassian agent accounts',
        'Strict adherence to your JSM SLA countdown clocks & priorities',
        'Seamless linking between customer tickets and engineering bug boards',
      ],
    },
    {
      id: 'faq-2',
      category: 'Custom Software',
      question: 'Do you offer custom developed, client-specific service management options?',
      answer:
        'Yes. Through our technology arm under tech.njuregroup.in, we architect and deploy bespoke service management dashboards and internal triage portals for clients whose workflows cannot be satisfied by generic SaaS helpdesks. Whether you need a proprietary customer order lookup dashboard, a custom logistics resolution portal, or direct webhook integrations into your MySQL/PostgreSQL databases, we engineer, host, and maintain custom service desks tailored exclusively to your business logic.',
      highlights: [
        'Bespoke web portals tailored to your proprietary data schemas',
        'Automated webhooks and API synchronization with internal ERPs',
        'Unified customer lookup screens reducing agent resolution time',
      ],
    },
    {
      id: 'faq-3',
      category: 'Cost & Licensing',
      question: 'Can you configure free or open-source ITSM solutions so we avoid per-seat SaaS license costs?',
      answer:
        'Absolutely. Commercial enterprise helpdesks like Zendesk, Freshdesk, or Salesforce often charge between $50 and $120 per agent each month, which escalates costs rapidly as your team scales. For cost-conscious clients, we deploy, configure, and maintain production-ready free and open-source ITSM platforms (such as FreeScout, Zammad, or osTicket) on your cloud or ours. You pay zero recurring software license fees per agent, saving significant capital while retaining full data ownership and complete ticketing functionality.',
      highlights: [
        'Zero per-seat software license fees (save $500–$1,200/mo on a 10-agent team)',
        'Full data sovereignty with self-hosted or dedicated cloud database',
        'Complete omnichannel email, chat, and ticket dispatch workflows included',
      ],
    },
    {
      id: 'faq-4',
      category: 'Security & Access',
      question: 'Are you certified by ISO or SOC, and how do you protect our data?',
      answer:
        'We speak with radical honesty: we may not carry formal ISO or SOC certification badges, but we follow and enforce operational data protection and process hygiene better than corporate call centers. Legacy corporate BPOs spend tens of thousands buying ISO or SOC badges for sales decks while suffering 70% floor attrition and lax daily enforcement. At Njure Tech, our remote specialists are profit-sharing business partners with signed bilateral NDAs, port-locked workstations (disabled USB drives), domain whitelisting, and client-controlled SSO/MFA. You get institutional-grade discipline, genuine co-owner accountability, and zero data leakage without inflated corporate compliance overhead.',
      highlights: [
        'Real operational discipline over expensive corporate paper badge theater',
        'Port-restricted machines, disabled USBs, and clean-screen enforcement',
        'Legally binding bilateral NDAs signed prior to onboarding',
        'Business partner profit-sharing ensures genuine frontline care and vigilance',
      ],
    },
    {
      id: 'faq-5',
      category: 'Operations & SLAs',
      question: 'How are shift handovers and round-the-clock SLA continuity managed?',
      answer:
        'To ensure seamless 24/7 service delivery, every shift handover includes a mandatory 15-minute overlap period. The outgoing team lead and incoming supervisor review open high-priority tickets, ongoing customer escalations, and system release notices. A standardized shift handover log is recorded directly inside your ticketing portal (or shared operations tracker) to ensure zero context is dropped between day and night rosters.',
      highlights: [
        'Mandatory 15-minute supervisor overlap during every shift change',
        'Documented handover logs tracking open escalations and critical tickets',
        'Real-time supervisor monitoring to prevent ticket aging during shift transitions',
      ],
    },
    {
      id: 'faq-6',
      category: 'Onboarding & Scaling',
      question: 'How quickly can we launch, and can we scale dedicated seats up or down?',
      answer:
        'We can deploy a calibrated 1–3 agent pilot team within 7 business days following SOP approval. The pilot period (typically 7 to 14 days) allows you to audit call recordings, review ticket responses, and fine-tune scripts with zero long-term commitment. Once calibrated, we can scale your dedicated seat count up during seasonal surges (e.g., festival sales or marketing launches) and ramp down during quieter periods with flexible monthly agreements.',
      highlights: [
        'Rapid 7-day turnaround from kickoff to pilot queue go-live',
        'Flexible surge capacity for promotional campaigns and seasonal peaks',
        'Transparent seat-based pricing without rigid enterprise multi-year lock-ins',
      ],
    },
  ];

  const categories = ['All', 'ITSM & Tooling', 'Custom Software', 'Cost & Licensing', 'Security & Access', 'Operations & SLAs', 'Onboarding & Scaling'];

  const filteredFaqs = selectedCategory === 'All'
    ? faqs
    : faqs.filter(f => f.category === selectedCategory);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Service Capabilities
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Business Process Outsourcing Services
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Dedicated customer care, back-office data operations, e-commerce order management, and lead generation teams trained to execute against strict SLA metrics.
          </p>
        </div>

        {/* Client-Budget-Oriented Guarantee Banner */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-2xs mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Client-Budget-Oriented Model · Zero Agency Cut</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-2">
              Every Service is Tailored to Your Exact Operating Budget
            </h3>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              We do not impose artificial minimum seat requirements or take bloated agency cuts. We scope the required hours, shift rosters, and specialist pods around your budget, paying project profits directly to our remote specialists as business partners.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer shrink-0"
          >
            <span>Request Budget Scoping</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-10 mb-16">
          {BPO_SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-2xs space-y-8"
            >
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                    {idx === 0 && <Headphones className="w-6 h-6" />}
                    {idx === 1 && <Database className="w-6 h-6" />}
                    {idx === 2 && <ShoppingBag className="w-6 h-6" />}
                    {idx === 3 && <PhoneCall className="w-6 h-6" />}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                      Active Operational Service
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 mt-0.5">{srv.title}</h2>
                    <p className="text-sm font-semibold text-blue-700 mt-1">{srv.tagline}</p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2 max-w-2xl">{srv.shortDesc}</p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors cursor-pointer shrink-0 self-start lg:self-center"
                >
                  <span>Request Scoping</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Scope & Deliverables Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Operational Scope */}
                <div className="lg:col-span-7 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Included Execution Scope
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {srv.scope.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded border border-slate-100">
                        <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Deliverables & Tooling */}
                <div className="lg:col-span-5 space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      SLA Benchmarks & Expected Outcomes
                    </h3>
                    <ul className="space-y-2">
                      {srv.keyOutcomes.map((outcome, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Supported Software & Tool Stacks
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {srv.toolsSupported.map((tool) => (
                        <span key={tool} className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[11px] text-slate-700 font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Onboarding Workflow */}
        <div className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-2xs mb-16">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
              Onboarding Methodology
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Structured 4-Step Deployment
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We make client onboarding seamless, low-risk, and structured around your existing communication tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border-t-2 border-blue-700 pt-4">
              <span className="text-xs font-mono font-bold text-blue-700 block mb-1">Phase 01</span>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Channel & Volume Scoping</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We analyze your average daily ticket volume, peak call hours, language requirements, and preferred helpdesk software.
              </p>
            </div>

            <div className="border-t-2 border-blue-700 pt-4">
              <span className="text-xs font-mono font-bold text-blue-700 block mb-1">Phase 02</span>
              <h3 className="text-sm font-bold text-slate-900 mb-1">SOP & Script Induction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We document your troubleshooting flows, refund rules, and escalation trees into formalized knowledge-base modules.
              </p>
            </div>

            <div className="border-t-2 border-blue-700 pt-4">
              <span className="text-xs font-mono font-bold text-blue-700 block mb-1">Phase 03</span>
              <h3 className="text-sm font-bold text-slate-900 mb-1">7-Day Pilot Execution</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our team runs a controlled test queue with daily client QA syncs to calibrate tone, speed, and accuracy.
              </p>
            </div>

            <div className="border-t-2 border-blue-700 pt-4">
              <span className="text-xs font-mono font-bold text-blue-700 block mb-1">Phase 04</span>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Live Scaled Operations</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full production with daily attendance scorecards, supervisor spot-checks, and regular stakeholder SLA reviews.
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise FAQs Section */}
        <section className="bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-2xs mb-16">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span>Enterprise & Operational Clarity</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              Enterprise FAQs: Workflows, Tooling & Governance
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Clear answers regarding our integration capabilities with Jira Service Management (JSM), bespoke client portals, free ITSM deployments, security, and shift management.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-lg border transition-all ${
                    isOpen ? 'border-blue-300 bg-slate-50/50 shadow-xs' : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-700 block font-mono">
                        {faq.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-1 text-slate-600">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs text-slate-600 leading-relaxed space-y-4 border-t border-slate-100">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {faq.answer}
                      </p>

                      <div className="bg-white p-4 rounded border border-slate-200 space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Key Operational Takeaway:
                        </div>
                        <ul className="space-y-1.5">
                          {faq.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-800">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Technical Consultation Callout */}
          <div className="mt-8 p-6 rounded-lg bg-blue-50 border border-blue-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-blue-950">Have a proprietary workflow or custom ITSM stack?</h4>
              <p className="text-xs text-blue-800">
                Our operations architects can join a 20-minute discovery call to evaluate your ticketing queues and data APIs.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors cursor-pointer shrink-0"
            >
              <span>Schedule Technical Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* CTA Banner */}
        <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Need a custom team structure?</h3>
            <p className="text-xs text-slate-400 max-w-xl">
              From a 2-agent dedicated chat pod to an omnichannel voice and back-office desk, we tailor our rosters to your operational schedule.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 rounded-md transition-colors cursor-pointer shrink-0"
          >
            <span>Request Team Scoping</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
