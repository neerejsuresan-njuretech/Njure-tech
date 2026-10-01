import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Laptop } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Official Logo & Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="text-left focus:outline-none block"
              aria-label="Njure Tech Home"
            >
              <Logo variant="white" size="md" />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              Dedicated omnichannel customer support, back-office data processing, e-commerce order management, and lead qualification under {COMPANY_INFO.parentGroup}.
            </p>
            <div className="text-xs text-cyan-400 font-mono">
              Portal: {COMPANY_INFO.domain}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Company Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us & Story
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  BPO Services
                </Link>
              </li>
              <li>
                <Link to="/technology" className="hover:text-white transition-colors">
                  Future Tech Roadmap
                </Link>
              </li>
              <li>
                <Link to="/operations" className="hover:text-white transition-colors">
                  Remote Operations Model
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Remote Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Scope */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Active Offerings
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services" className="hover:text-slate-200 transition-colors">
                  Customer Support (Voice & Chat)
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-slate-200 transition-colors">
                  Back-Office & Data Processing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-slate-200 transition-colors">
                  E-Commerce Order Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-slate-200 transition-colors">
                  Telecalling & Lead Qualification
                </Link>
              </li>
              <li className="pt-2 text-slate-400">
                <Link to="/technology" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Roadmap: Custom Web Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Remote Desk & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Central Inquiries
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-slate-300">
              <Laptop className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>100% Remote Operations (No physical office)</span>
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
            <div className="pt-3">
              <Link
                to="/contact"
                className="w-full text-center px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors block"
              >
                Send Enterprise Inquiry
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
          </div>
        </div>
      </div>
    </footer>
  );
};
