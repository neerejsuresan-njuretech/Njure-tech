import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowRight, Globe, Headphones, Search, ChevronDown, ShieldCheck, Database, ShoppingBag, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { Logo } from './Logo';
import { GlobalSearchModal } from './GlobalSearchModal';

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname.endsWith('/') && location.pathname !== '/'
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { 
      path: '/services', 
      label: 'BPO Services',
      isDropdown: true,
      subItems: [
        { path: '/services', label: 'All BPO Capabilities' },
        { path: '/services/customer-support', label: 'Omnichannel Customer Support' },
        { path: '/services/back-office', label: 'Back-Office & Data Processing' },
        { path: '/services/ecommerce-support', label: 'E-Commerce & RTO Reduction' },
        { path: '/services/telecalling', label: 'Telecalling & Lead Qualification' },
      ]
    },
    { path: '/operations', label: 'Remote Operations' },
    { path: '/security', label: 'Security & Trust' },
    { path: '/technology', label: 'Tech Roadmap' },
    { path: '/careers', label: 'Careers (Remote)' },
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
    setServicesDropdownOpen(false);
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
            <div className="flex-shrink-0 flex items-center py-2">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = item.path === '/' 
                  ? currentPath === '/'
                  : currentPath.startsWith(item.path);

                if (item.isDropdown) {
                  return (
                    <div 
                      key={item.path} 
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        to={item.path}
                        className={`inline-flex items-center gap-1 px-3 py-2 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                          isActive
                            ? 'text-blue-700 bg-blue-50/80 font-bold'
                            : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className="w-3 h-3 text-slate-400" />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50 animate-in fade-in duration-100">
                          {item.subItems?.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              onClick={() => setServicesDropdownOpen(false)}
                              className={`block px-4 py-2 text-xs transition-colors ${
                                currentPath === sub.path
                                  ? 'text-blue-700 bg-blue-50 font-bold'
                                  : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-xs font-semibold tracking-wide transition-colors ${
                      isActive
                        ? 'text-blue-700 bg-blue-50/80 font-bold'
                        : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions & Search Trigger */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-500 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-md transition-colors cursor-pointer"
                title="Search services, roles, and pages (Press / or Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-slate-500" />
                <span className="hidden xl:inline text-slate-600">Quick Search...</span>
                <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-semibold bg-white border border-slate-300 rounded text-slate-500 shadow-2xs">
                  /
                </kbd>
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md transition-colors shadow-xs"
              >
                <span>Request Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Actions: Search Icon + Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="p-2 text-slate-600 hover:text-blue-700 rounded-md cursor-pointer"
                aria-label="Open global search"
              >
                <Search className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2">
            <nav aria-label="Mobile Navigation" className="space-y-1">
              <Link
                to="/"
                onClick={handleMobileLinkClick}
                className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                  currentPath === '/' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={handleMobileLinkClick}
                className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                  currentPath === '/about' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-700'
                }`}
              >
                About Us
              </Link>

              {/* Mobile Services Section */}
              <div className="py-1">
                <Link
                  to="/services"
                  onClick={handleMobileLinkClick}
                  className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                    currentPath === '/services' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-700'
                  }`}
                >
                  BPO Services Directory
                </Link>
                <div className="pl-4 space-y-1 mt-1 border-l-2 border-slate-100 ml-3">
                  <Link
                    to="/services/customer-support"
                    onClick={handleMobileLinkClick}
                    className="block px-3 py-1.5 text-xs text-slate-600 hover:text-blue-700"
                  >
                    · Customer Support Helpdesk
                  </Link>
                  <Link
                    to="/services/back-office"
                    onClick={handleMobileLinkClick}
                    className="block px-3 py-1.5 text-xs text-slate-600 hover:text-blue-700"
                  >
                    · Back-Office & Data Processing
                  </Link>
                  <Link
                    to="/services/ecommerce-support"
                    onClick={handleMobileLinkClick}
                    className="block px-3 py-1.5 text-xs text-slate-600 hover:text-blue-700"
                  >
                    · E-Commerce & COD Verification
                  </Link>
                  <Link
                    to="/services/telecalling"
                    onClick={handleMobileLinkClick}
                    className="block px-3 py-1.5 text-xs text-slate-600 hover:text-blue-700"
                  >
                    · Telecalling & Inbound Leads
                  </Link>
                </div>
              </div>

              <Link
                to="/operations"
                onClick={handleMobileLinkClick}
                className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                  currentPath === '/operations' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-700'
                }`}
              >
                Remote Operations
              </Link>
              <Link
                to="/security"
                onClick={handleMobileLinkClick}
                className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                  currentPath === '/security' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-700'
                }`}
              >
                Security & Trust Governance
              </Link>
              <Link
                to="/technology"
                onClick={handleMobileLinkClick}
                className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                  currentPath === '/technology' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-700'
                }`}
              >
                Technology Roadmap
              </Link>
              <Link
                to="/careers"
                onClick={handleMobileLinkClick}
                className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                  currentPath === '/careers' ? 'text-blue-700 bg-blue-50 font-bold' : 'text-slate-700'
                }`}
              >
                Careers (100% Remote)
              </Link>
            </nav>

            <div className="pt-4 border-t border-slate-100">
              <Link
                to="/contact"
                onClick={handleMobileLinkClick}
                className="w-full text-center py-3 text-xs font-bold uppercase tracking-wider text-white bg-blue-700 hover:bg-blue-800 rounded-md shadow-xs block"
              >
                Request an Operations Proposal
              </Link>
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
