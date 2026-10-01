import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Laptop, ShieldCheck, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Official Logo & Brand (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to="/"
              className="text-left focus:outline-none block"
              aria-label="Njure Tech Home"
            >
              <Logo variant="white" size="md" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed pt-1 max-w-sm">
              Client-budget-oriented BPO delivering dedicated customer care, back-office processing, e-commerce order support, and outbound telecalling with zero agency cut.
            </p>
            <div className="space-y-1 text-xs">
              <div className="text-cyan-400 font-mono">
                Official Domain: <span className="text-white">{COMPANY_INFO.domain}</span>
              </div>
              <div className="text-slate-400">
                A venture of{' '}
                <a
                  href="https://njuregroup.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>{COMPANY_INFO.parentGroup}</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Core BPO Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              BPO Operations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services/customer-support" className="hover:text-white transition-colors">
                  Customer Support Helpdesk
                </Link>
              </li>
              <li>
                <Link to="/services/back-office" className="hover:text-white transition-colors">
                  Back-Office Data Operations
                </Link>
              </li>
              <li>
                <Link to="/services/ecommerce-support" className="hover:text-white transition-colors">
                  E-Commerce & COD Verification
                </Link>
              </li>
              <li>
                <Link to="/services/telecalling" className="hover:text-white transition-colors">
                  Telecalling & Inbound Leads
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                  View Full Services Directory &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Governance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Governance & Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us & Zero-Cut Model
                </Link>
              </li>
              <li>
                <Link to="/operations" className="hover:text-white transition-colors">
                  Remote Delivery Architecture
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-white transition-colors">
                  Security & Trust Controls
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-white transition-colors">
                  Technology Roadmap
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Remote Careers & Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Central Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Direct Central Inquiries
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Laptop className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>100% Remote Operations (Zero physical office bloat)</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a 
                href={`mailto:${COMPANY_INFO.inquiriesEmail}`}
                className="hover:text-cyan-300 font-mono text-cyan-400 font-bold"
              >
                {COMPANY_INFO.inquiriesEmail}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-300">
              <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="font-mono text-slate-300">
                {COMPANY_INFO.domain}
              </span>
            </div>
            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full text-center px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors block"
              >
                Request Proposal
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. A {COMPANY_INFO.parentGroup} Company.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-400">{COMPANY_INFO.domain}</span>
            <span>·</span>
            <span>100% Remote & Distributed</span>
            <span>·</span>
            <Link to="/security" className="hover:text-white transition-colors">
              Security by Design
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
