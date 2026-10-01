import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Globe, Headphones, Search } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';
import { GlobalSearchModal } from './GlobalSearchModal';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'BPO Services' },
    { id: 'future-tech', label: 'Tech Roadmap' },
    { id: 'delivery-center', label: 'Remote Operations' },
    { id: 'careers', label: 'Careers (Remote)' },
    { id: 'contact', label: 'Contact Us' },
  ];

  // Global keyboard shortcut: Ctrl+K, Cmd+K, or pressing "/" opens search
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is currently typing in an input or textarea
      const target = e.target as HTMLElement;
      const isInput = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA');

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === '/' && !isInput) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        {/* Top minimal corporate capability bar */}
        <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 hidden md:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="text-cyan-400 font-semibold">{COMPANY_INFO.parentGroup}</span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Headphones className="w-3.5 h-3.5 text-cyan-400" />
                <span>100% Remote & Distributed BPO Operations</span>
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <a 
                href={`mailto:${COMPANY_INFO.inquiriesEmail}`}
                className="hover:text-cyan-300 transition-colors flex items-center gap-1 text-[11px]"
              >
                Inquiries: <span className="text-cyan-400 font-mono">{COMPANY_INFO.inquiriesEmail}</span>
              </a>
              <span>·</span>
              <span className="flex items-center gap-1 font-mono text-[11px] text-slate-300">
                <Globe className="w-3 h-3 text-cyan-400" /> {COMPANY_INFO.domain}
              </span>
              <span>·</span>
              <span>24/7 Shift Coverage</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Prominent, High-Resolution Enlarged Brand Logo */}
            <button
              onClick={() => handleNav('home')}
              className="flex items-center focus:outline-none cursor-pointer py-1 group"
              aria-label="Njure Tech Home"
            >
              <Logo size="md" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`text-sm font-medium transition-colors cursor-pointer py-1 relative ${
                    currentPage === item.id
                      ? 'text-blue-700 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-700'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Global Search & Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Quick Search Trigger Button */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2.5 px-3 py-2 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                title="Search services, careers, FAQs (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden md:inline font-medium">Search...</span>
                <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-500 bg-white border border-slate-200 rounded">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors shadow-xs cursor-pointer shrink-0"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100"
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-lg">
            <div className="py-2 px-3 text-xs text-slate-500 border-b border-slate-100 mb-2 flex items-center justify-between">
              <span>{COMPANY_INFO.parentGroup} Operations</span>
              <span className="font-mono text-blue-600 text-[11px]">{COMPANY_INFO.domain}</span>
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3">
              <button
                onClick={() => handleNav('contact')}
                className="w-full text-center py-2.5 text-xs font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-md shadow-xs"
              >
                Request a Proposal
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleNav}
      />
    </>
  );
};
