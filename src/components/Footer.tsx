import React from 'react';
import { MapPin, Mail, Globe, Laptop } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Official Logo & Brand */}
          <div className="space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left cursor-pointer focus:outline-none block"
              aria-label="Njure Tech Home"
            >
              <Logo variant="white" size="md" />
            </button>
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
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us & Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  BPO Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('future-tech')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Future Tech Roadmap
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('delivery-center')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Remote Operations Model
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('careers')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Remote Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Active Offerings
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Customer Support (Voice & Chat)</li>
              <li>Back-Office & Data Processing</li>
              <li>E-Commerce Order Management</li>
              <li>Telecalling & Lead Qualification</li>
              <li className="pt-2 text-slate-400">
                <span className="text-cyan-400">Roadmap:</span> Custom Web Engineering
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
              <button
                onClick={() => handleNav('contact')}
                className="w-full text-center px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors cursor-pointer"
              >
                Send Enterprise Inquiry
              </button>
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
            <span>Kozhikode, Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
