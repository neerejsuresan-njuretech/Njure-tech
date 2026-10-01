import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  FileCheck, 
  UserCheck, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  Laptop, 
  EyeOff
} from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { COMPANY_INFO } from '../data/companyData';

export const SecurityTrustPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const securityFaqs = [
    {
      question: 'Is Njure Tech ISO 27001 or SOC 2 certified?',
      answer: 'Njure Tech is currently not ISO 27001 or SOC 2 certified. We communicate this transparently so prospective clients can assess our operational safeguards against their internal compliance matrices. We enforce rigorous baseline controls including port lockdown endpoint policies, client-controlled SSO/MFA credentials, clean-desk NDAs, and continuous supervisor audits.',
    },
    {
      question: 'How do you prevent data leakage on remote worker endpoints?',
      answer: 'All remote workstations operate under strict endpoint governance: USB mass storage ports are locked, external storage device insertion is blocked, application whitelisting is enforced, screen capture restrictions are applied where technically supported, and specialists operate exclusively through client-managed cloud helpdesks.',
    },
    {
      question: 'Who owns and controls user credentials and system access?',
      answer: 'The client maintains 100% custody of identity and access management. Our specialists are assigned individual role-based user accounts directly within your organization’s identity provider (Google Workspace, Okta, Azure AD) or ticketing tool, requiring multi-factor authentication (MFA) and allowing immediate one-click revocation at any time.',
    },
    {
      question: 'What non-disclosure agreements (NDAs) are in place?',
      answer: 'Every remote specialist and operational supervisor executes a bilateral, legally enforceable non-disclosure and data protection agreement prior to onboarding and accessing any client workflows or documentation.',
    },
    {
      question: 'What is the onboarding security and compliance review process?',
      answer: 'Prior to launching live operations, our team conducts a formal security and compliance scoping session with the client. We review specific data handling rules, PII masking requirements, escalation paths, and system access constraints to ensure seamless adherence.',
    },
  ];

  return (
    <div className="bg-slate-50 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb items={[{ label: 'Security & Trust Governance' }]} />

        {/* Hero Section with Answer-First Box */}
        <header className="bg-white border border-slate-200 rounded-xl p-8 sm:p-12 mb-12 shadow-xs">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
              <span>{COMPANY_INFO.governanceManifesto.badge}</span>
            </div>

            {/* Exactly One Meaningful H1 */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Security by Design, Endpoint Governance & Compliance Controls
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
              Transparent, accountable remote operational governance protecting client identity, workflows, and customer data integrity.
            </p>

            {/* Transparent Disclosure Notice */}
            <div className="p-4 rounded-lg bg-amber-50/80 border border-amber-200 text-xs text-amber-900 mb-6 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold mb-0.5">Transparent Certification Disclosure:</strong>
                <span>{COMPANY_INFO.governanceManifesto.certificationNotice}</span> We believe in open, verifiable operational security rather than making unverified marketing claims.
              </div>
            </div>

            {/* Answer-First Block for Search & AI Systems */}
            <div className="p-5 rounded-lg bg-slate-900 text-slate-200 text-sm leading-relaxed mb-8 border border-slate-800">
              <strong className="text-cyan-400 block mb-1 text-xs font-mono uppercase tracking-wider">
                Summary / Security Framework Overview
              </strong>
              <p>{COMPANY_INFO.governanceManifesto.subheadline}</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors shadow-xs"
              >
                <span>Discuss Compliance Requirements</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/operations"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-md transition-colors"
              >
                <span>View Remote Delivery Architecture</span>
              </Link>
            </div>
          </div>
        </header>

        {/* 6 Core Security Pillars Grid */}
        <section className="mb-14" aria-labelledby="controls-heading">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">Defense in Depth</div>
            <h2 id="controls-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              Operational Safeguards & Endpoint Controls
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded bg-blue-50 text-blue-700 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Endpoint Policies & Port Lockdown</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Workstations operate under endpoint policies that restrict external mass storage devices, enforce application whitelisting, block unverified browser extensions, and maintain clean-screen standards.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded bg-blue-50 text-blue-700 flex items-center justify-center">
                <Key className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Client-Controlled Identity (SSO / MFA)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Specialists access client systems directly via role-based credentials managed by your organization, supporting multi-factor authentication (MFA) and instant one-click revocation.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded bg-blue-50 text-blue-700 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Bilateral Enforceable NDAs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every remote specialist executes comprehensive, legally binding non-disclosure agreements prior to onboarding and accessing client workflows or sensitive business data.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded bg-blue-50 text-blue-700 flex items-center justify-center">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Supervisor Quality Controls</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operational supervisors perform queue monitoring, call listening audits, and shift synchronization to ensure standard operating procedure (SOP) adherence and data confidentiality.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded bg-blue-50 text-blue-700 flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Zero-Trust Network Isolation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All network communication flows through encrypted channels (HTTPS/TLS 1.3) and client-approved VPN connections. Specialists never store client files locally on personal hard drives.
              </p>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-xl space-y-3">
              <div className="w-10 h-10 rounded bg-blue-50 text-blue-700 flex items-center justify-center">
                <EyeOff className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Clean-Desk & Privacy Protocols</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Frontline remote partners maintain private, dedicated physical home workstations free from unauthorized viewers, with mandatory screen-lock timers and no physical paper records.
              </p>
            </div>
          </div>
        </section>

        {/* Security Onboarding Framework */}
        <section className="mb-14 bg-white border border-slate-200 rounded-xl p-8 sm:p-10" aria-labelledby="security-onboarding-heading">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">Pre-Production Governance</div>
            <h2 id="security-onboarding-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              Client Security Review & Onboarding Gate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="w-7 h-7 rounded bg-blue-700 text-white font-bold text-xs flex items-center justify-center mb-3">1</div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Scoping & Policy Review</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review of your organization’s data classification, PII masking rules, geographic constraints, and helpdesk access roles.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="w-7 h-7 rounded bg-blue-700 text-white font-bold text-xs flex items-center justify-center mb-3">2</div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Identity Provisioning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Issuance of unique client email handles, MFA enrollment, VPN configuration, and role-based permissions matrix testing.
              </p>
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="w-7 h-7 rounded bg-blue-700 text-white font-bold text-xs flex items-center justify-center mb-3">3</div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Supervisor QA Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Supervisor audit of agent endpoints, clean-desk confirmation, and signed NDA filing prior to handling first live customer interaction.
              </p>
            </div>
          </div>
        </section>

        {/* Security FAQs */}
        <section className="mb-14 bg-white border border-slate-200 rounded-xl p-8 sm:p-10" aria-labelledby="faq-heading">
          <div className="max-w-2xl mb-8">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">Frequently Asked Questions</div>
            <h2 id="faq-heading" className="text-2xl font-bold text-slate-900 tracking-tight">
              Security, Compliance & Data Governance FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {securityFaqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left font-semibold text-sm text-slate-900 bg-slate-50/50 hover:bg-slate-100 flex items-center justify-between gap-4 cursor-pointer transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Action Banner */}
        <div className="p-8 rounded-xl bg-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold mb-1">Have Specific Compliance or Data-Handling Requirements?</h3>
            <p className="text-xs text-slate-300">
              Our operations team is available to review your custom security questionnaires and onboarding SOPs.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors cursor-pointer shrink-0"
          >
            <span>Contact Operations Desk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
