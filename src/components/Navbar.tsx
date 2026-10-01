import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Globe, Headphones, Search } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';
import { GlobalSearchModal } from './GlobalSearchModal';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname.endsWith('/') && location.pathname !== '/'
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'BPO Services' },
    { path: '/technology', label: 'Tech Roadmap' },
    { path: '/operations', label: 'Remote Operations' },
    { path: '/careers', label: 'Careers (Remote)' },
    { path: '/contact', label: 'Contact Us' },
  ];

  // Global keyboard shortcut: Ctrl+K, Cmd+K, or pressing "/" opens search
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
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

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
  };

  const handleSearchNavigate = (path: string) => {
    setSearchOpen(false);
    navigate(path);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        {/* Top corporate capability bar */}
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
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center focus:outline-none py-1 group"
              aria-label="Njure Tech Home"
            >
              <Logo size="md" />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors py-1 relative ${
                      isActive
                        ? 'text-blue-700 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-700'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Quick Search & Request Proposal CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2.5 px-3 py-2 text-xs text-slate-500 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-lg transition-colors cursor-pointer"
                title="Search services, careers, FAQs (Ctrl+K)"
                aria-label="Open search dialog"
              >
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden md:inline font-medium">Search...</span>
                <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-500 bg-white border border-slate-200 rounded">
                  ⌘K
                </kbd>
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors shadow-xs cursor-pointer shrink-0"
              >
                <span>Request a Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100"
                aria-label="Search site"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 rounded-md hover:bg-slate-100"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150 shadow-lg">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleMobileLinkClick}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Link
                to="/contact"
                onClick={handleMobileLinkClick}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md block transition-colors"
              >
                Request a Proposal
              </Link>

              <div className="text-center text-xs text-slate-500 pt-2 font-mono">
                {COMPANY_INFO.inquiriesEmail}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Interactive Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={handleSearchNavigate}
      />
    </>
  );
};
