import React from 'react';
import { Building, MapPin, Target, ShieldCheck, HeartHandshake, Award, Globe, Compass, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from '../components/Logo';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { backgroundStory } = COMPANY_INFO;

  return (
    <div className="bg-slate-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
            Our Story & Heritage
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            About Njure Tech
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            The remote-first business process operations and technology arm of <strong className="text-slate-800">{COMPANY_INFO.parentGroup}</strong>.
          </p>
        </div>

        {/* Narrative & Story Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-lg border border-slate-200 shadow-2xs space-y-8">
            {/* Logo showcase with badge */}
            <div className="p-6 rounded-lg bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Logo size="lg" />
              <div className="text-xs text-slate-500 font-mono">
                <span className="text-blue-700 font-bold block">{COMPANY_INFO.domain}</span>
                <span className="text-emerald-700 font-semibold">100% Remote Operations</span>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                {backgroundStory.headline}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {backgroundStory.origins}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2">The Problem We Observed</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {backgroundStory.theProblem}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Our Practical Solution</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {backgroundStory.theApproach}
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2">The Tech Roadmap</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {backgroundStory.theRoadmap}
              </p>
            </div>
          </div>

          {/* Quick Facts & Parent Group Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 pb-2 border-b border-slate-100">
                Corporate Identification
              </h3>
              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">Brand & Company</span>
                  <span className="font-semibold text-slate-800">{COMPANY_INFO.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Parent Entity</span>
                  <span className="font-semibold text-slate-800">{COMPANY_INFO.parentGroup}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Official Web Domain</span>
                  <span className="font-semibold text-blue-700 font-mono">{COMPANY_INFO.domain}</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Operating Model</span>
                  <span className="font-semibold text-emerald-700">100% Remote & Distributed</span>
                  <span className="text-[11px] text-slate-500 block">No physical workspace</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Central Inquiries</span>
                  <a href={`mailto:${COMPANY_INFO.inquiriesEmail}`} className="font-semibold text-blue-700 font-mono hover:underline">
                    {COMPANY_INFO.inquiriesEmail}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">Team Language Strengths</span>
                  <span className="font-semibold text-slate-800">English, Malayalam, Hindi, Tamil</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-lg text-xs text-blue-900">
              <div className="flex items-center gap-2 font-bold text-sm mb-2 text-blue-950">
                <Compass className="w-4 h-4 text-blue-700" />
                <span>Need Customer Support Staffing?</span>
              </div>
              <p className="leading-relaxed mb-4 text-blue-800">
                We onboard dedicated customer service and back-office agents in as fast as 7 business days.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full text-center py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md transition-colors cursor-pointer"
              >
                Inquire With Our Team
              </button>
            </div>
          </div>
        </div>

        {/* Operating Values */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Our Operating Philosophy</h2>
          <p className="text-sm text-slate-600 mb-6">
            We operate as business partners alongside our clients and remote specialists—eliminating agency cuts and aligning directly to client budgets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs">
              <HeartHandshake className="w-6 h-6 text-blue-700 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1">Business Partners</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We are business partners, not an employee and a company. Team members co-own account success with direct profit sharing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs">
              <Award className="w-6 h-6 text-blue-700 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1">Zero Agency Cut</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We do not take large middleman corporate cuts. Client funds flow straight to frontline remote specialists.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs">
              <Target className="w-6 h-6 text-blue-700 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1">Client-Budget Oriented</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operations scoped precisely to your budget limits without multi-year contracts or artificial minimum seat bloat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-2xs">
              <ShieldCheck className="w-6 h-6 text-blue-700 mb-3" />
              <h3 className="text-base font-bold text-slate-900 mb-1">True Operational Security</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We may not buy paper ISO/SOC badges, but we enforce port-locks, clean-desk rules, and bilateral NDAs better than corporates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
