import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Search, 
  X, 
  ArrowRight, 
  Headphones, 
  Database, 
  ShoppingBag, 
  PhoneCall, 
  Briefcase, 
  HelpCircle, 
  ShieldCheck, 
  Server, 
  Sparkles, 
  Mail, 
  ExternalLink,
  Code,
  DollarSign
} from 'lucide-react';
import { COMPANY_INFO, BPO_SERVICES, CAREER_LISTINGS, FUTURE_ROADMAP } from '../data/companyData';

interface SearchResultItem {
  id: string;
  title: string;
  category: 'Service' | 'Enterprise FAQ' | 'Career' | 'Infrastructure' | 'About & Tech' | 'Contact';
  description: string;
  keywords: string[];
  targetPage: string;
  targetAnchor?: string;
  icon: React.ReactNode;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: string) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Comprehensive index of the entire website
  const searchIndex: SearchResultItem[] = useMemo(() => [
    // 1. Core BPO Services
    {
      id: 'srv-support',
      title: 'Omnichannel Customer Support (Voice & Chat)',
      category: 'Service',
      description: 'Inbound calls, live website chat, email tickets, and WhatsApp Business API customer resolution with sub-2 min SLA.',
      keywords: ['customer support', 'voice', 'chat', 'call center', 'whatsapp', 'zendesk', 'freshdesk', 'helpdesk', 'inbound', 'ticketing'],
      targetPage: 'services',
      icon: <Headphones className="w-4 h-4 text-blue-600" />,
    },
    {
      id: 'srv-backoffice',
      title: 'Back-Office & Business Process Operations',
      category: 'Service',
      description: 'KYC document verification, spreadsheet cleanup, invoice audits, catalog indexing, and 99.5%+ accurate data processing.',
      keywords: ['back office', 'data entry', 'kyc', 'verification', 'invoice audit', 'spreadsheet', 'excel', 'reconciliation', 'catalog'],
      targetPage: 'services',
      icon: <Database className="w-4 h-4 text-blue-600" />,
    },
    {
      id: 'srv-ecommerce',
      title: 'E-Commerce Order & Fulfillment Support',
      category: 'Service',
      description: 'Cash-on-Delivery (COD) phone confirmations, Non-Delivery Report (NDR) triage, RTO reduction, and Shopify customer management.',
      keywords: ['ecommerce', 'cod', 'cash on delivery', 'rto', 'ndr', 'shopify', 'returns', 'tracking', 'courier', 'fulfillment'],
      targetPage: 'services',
      icon: <ShoppingBag className="w-4 h-4 text-blue-600" />,
    },
    {
      id: 'srv-telecalling',
      title: 'Telecalling & Outbound Lead Qualification',
      category: 'Service',
      description: 'Rapid inbound lead follow-up within 10 minutes, discovery meeting scheduling on AE calendars, and customer survey calling.',
      keywords: ['telecalling', 'lead qualification', 'outbound', 'appointment booking', 'sales call', 'survey', 'cold calling', 'hubspot'],
      targetPage: 'services',
      icon: <PhoneCall className="w-4 h-4 text-blue-600" />,
    },

    // 2. Enterprise FAQs & Technical Workflows
    {
      id: 'faq-jsm',
      title: 'Jira Service Management (JSM) Integration',
      category: 'Enterprise FAQ',
      description: 'Direct support inside Atlassian Cloud / Data Center, adhering to ITIL priority queues, SLA countdowns, and Jira Software links.',
      keywords: ['jira', 'jsm', 'jira service management', 'atlassian', 'itil', 'sla timer', 'it service desk', 'engineering tickets'],
      targetPage: 'services',
      icon: <Code className="w-4 h-4 text-purple-600" />,
    },
    {
      id: 'faq-custom-portal',
      title: 'Custom Developed Client-Specific Service Portals',
      category: 'Enterprise FAQ',
      description: 'Bespoke service management dashboards, custom triage forms, and automated database sync engineered under tech.njuregroup.in.',
      keywords: ['custom portal', 'custom developed', 'client specific', 'proprietary tool', 'software', 'dashboard', 'api', 'database'],
      targetPage: 'services',
      icon: <Sparkles className="w-4 h-4 text-indigo-600" />,
    },
    {
      id: 'faq-free-itsm',
      title: 'Free & Open-Source ITSM Solutions (Zero Per-Seat SaaS)',
      category: 'Enterprise FAQ',
      description: 'Deployment of FreeScout, Zammad, or osTicket, saving $500–$1,200/mo by eliminating expensive per-agent SaaS licenses.',
      keywords: ['free itsm', 'open source', 'freescout', 'zammad', 'osticket', 'license fees', 'cost effective', 'zero subscription', 'save money'],
      targetPage: 'services',
      icon: <DollarSign className="w-4 h-4 text-emerald-600" />,
    },
    {
      id: 'faq-security',
      title: 'Security by Design & Operational Controls (ISO/SOC Disclosure)',
      category: 'Enterprise FAQ',
      description: 'Njure Tech is currently not ISO 27001 or SOC 2 certified. Our operating controls include endpoint policies, clean-desk practices, NDAs, and client SSO custody.',
      keywords: ['security', 'iso', 'soc', 'certification', 'controls', 'nda', 'confidentiality', 'clean desk', 'data protection', 'usb block', 'sso', 'compliance'],
      targetPage: 'operations',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
    },
    {
      id: 'faq-pilot',
      title: '7-Day Fast Pilot Program & Surge Scalability',
      category: 'Enterprise FAQ',
      description: 'Rapid 1–3 agent pilot queue in 7 days to test quality before scaling dedicated seats up or down.',
      keywords: ['pilot', '7 days', 'trial', 'onboarding', 'scaling', 'surge capacity', 'starter team'],
      targetPage: 'services',
      icon: <HelpCircle className="w-4 h-4 text-blue-600" />,
    },

    // 3. Careers
    {
      id: 'car-support-agent',
      title: 'Job: Customer Support Executive (Voice / Non-Voice)',
      category: 'Career',
      description: 'Full-time position handling calls, chats, and emails with friendly empathy. Freshers and experienced welcome.',
      keywords: ['job', 'career', 'hiring', 'customer support executive', 'agent', 'fresher', 'voice', 'chat', 'apply'],
      targetPage: 'careers',
      icon: <Briefcase className="w-4 h-4 text-amber-600" />,
    },
    {
      id: 'car-team-lead',
      title: 'Job: Operations Team Lead / Quality Supervisor',
      category: 'Career',
      description: 'Leadership position managing agent rosters, daily CSAT monitoring, and weekly client performance audits.',
      keywords: ['team lead', 'supervisor', 'manager', 'operations lead', 'qa', 'quality analyst', 'hiring'],
      targetPage: 'careers',
      icon: <Briefcase className="w-4 h-4 text-amber-600" />,
    },
    {
      id: 'car-data-associate',
      title: 'Job: Back-Office & Data Processing Associate',
      category: 'Career',
      description: 'Accurate data validation, invoice audits, and spreadsheet operations. Requires good typing and MS Excel skills.',
      keywords: ['data associate', 'back office job', 'excel', 'data entry', 'accounting', 'hiring'],
      targetPage: 'careers',
      icon: <Briefcase className="w-4 h-4 text-amber-600" />,
    },

    // 4. Remote Operations & Infrastructure
    {
      id: 'inf-facility',
      title: '100% Remote Operations & Cloud Infrastructure',
      category: 'Infrastructure',
      description: 'Cloud-first distributed operations model with zero physical office overhead, secure VPNs, and 24/7 supervisor governance.',
      keywords: ['remote', 'work from home', 'distributed', 'no physical office', 'cloud infrastructure', 'zero trust', 'vpn'],
      targetPage: 'delivery-center',
      icon: <Server className="w-4 h-4 text-cyan-600" />,
    },
    {
      id: 'inf-shifts',
      title: 'Global Remote Shift Coverage (Domestic, Gulf & Western Shifts)',
      category: 'Infrastructure',
      description: 'Daytime IST, Middle East business hours, and Western overnight shifts for continuous 24/7/365 follow-the-sun operational coverage.',
      keywords: ['shifts', '24/7', 'night shift', 'gulf time', 'us shift', 'hours', 'roster', 'follow the sun'],
      targetPage: 'delivery-center',
      icon: <Server className="w-4 h-4 text-cyan-600" />,
    },

    // 5. About & Roadmap
    {
      id: 'abt-model',
      title: 'Client-Budget-Oriented & Zero-Cut Partner Model',
      category: 'About & Tech',
      description: 'We don’t take an agency cut. Project profits flow directly to remote specialists as business partners, not disposable employees.',
      keywords: ['budget', 'client budget', 'zero cut', 'no cut', 'profit sharing', 'business partners', 'pricing', 'fair pay'],
      targetPage: 'about',
      icon: <Sparkles className="w-4 h-4 text-emerald-600" />,
    },
    {
      id: 'abt-story',
      title: 'About Njure Tech & Parent Njure Group',
      category: 'About & Tech',
      description: 'The story and operating principles of Njure Tech, founded to bridge enterprise-grade operations with agile remote execution.',
      keywords: ['about us', 'njure group', 'story', 'heritage', 'company background', 'mission', 'principles'],
      targetPage: 'about',
      icon: <Sparkles className="w-4 h-4 text-blue-600" />,
    },
    {
      id: 'abt-roadmap',
      title: 'Future Tech Roadmap (tech.njuregroup.in)',
      category: 'About & Tech',
      description: 'Phased expansion into custom web development, managed cloud infrastructure, and workflow automation copilots.',
      keywords: ['future tech', 'roadmap', 'software development', 'cloud', 'automation', 'tech.njuregroup.in', 'apis'],
      targetPage: 'future-tech',
      icon: <Code className="w-4 h-4 text-blue-600" />,
    },

    // 6. Contact & Inquiries
    {
      id: 'cnt-inquiry',
      title: 'Request an Operations Proposal / Consultation',
      category: 'Contact',
      description: 'Submit ticket volumes, team requirements, and tool stack preferences for a same-day custom operations proposal.',
      keywords: ['contact', 'proposal', 'quote', 'pricing', 'hire', 'phone', 'address', 'get in touch', 'email'],
      targetPage: 'contact',
      icon: <Mail className="w-4 h-4 text-emerald-600" />,
    },
    {
      id: 'cnt-email',
      title: 'Inquiries Desk: info@njuregroup.in',
      category: 'Contact',
      description: 'Email channel for corporate inquiries, operational proposals, and client partner discussions.',
      keywords: ['email', 'info@njuregroup.in', 'inquiries', 'desk', 'support email', 'contact'],
      targetPage: 'contact',
      icon: <Mail className="w-4 h-4 text-emerald-600" />,
    },
  ], []);

  // Filtered Results
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Default top recommendations
      return searchIndex.slice(0, 6);
    }
    return searchIndex.filter(item => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.keywords.some(k => k.toLowerCase().includes(q))
      );
    });
  }, [query, searchIndex]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Keyboard navigation inside modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          handleSelect(filteredResults[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex]);

  // Reset selected index on query change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (item: SearchResultItem) => {
    const PAGE_PATH_MAP: Record<string, string> = {
      'home': '/',
      'about': '/about',
      'services': '/services',
      'future-tech': '/technology',
      'technology': '/technology',
      'delivery-center': '/operations',
      'operations': '/operations',
      'careers': '/careers',
      'contact': '/contact',
    };
    const targetPath = PAGE_PATH_MAP[item.targetPage] || `/${item.targetPage}`;
    onNavigate(targetPath);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[82vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 sm:px-6 py-4 border-b border-slate-200 bg-slate-50/50">
          <Search className="w-5 h-5 text-blue-700 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, Jira JSM, free ITSM, careers, contact..."
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-sm sm:text-base focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md cursor-pointer ml-2"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white border border-slate-200 rounded shadow-2xs">
              ESC
            </kbd>
          )}
          <button
            onClick={onClose}
            className="sm:hidden p-1 text-slate-400 hover:text-slate-600 rounded-md cursor-pointer ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Chips (when empty) */}
        {!query && (
          <div className="px-4 sm:px-6 py-2.5 bg-slate-100/70 border-b border-slate-200 flex items-center gap-2 overflow-x-auto text-xs text-slate-600">
            <span className="font-semibold text-slate-500 text-[11px] uppercase tracking-wider shrink-0">Popular:</span>
            {['Jira JSM', 'Free ITSM', 'E-Commerce COD', 'Customer Support', 'Careers', 'Proposal'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 bg-white hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 rounded border border-slate-200 text-xs transition-colors shrink-0 cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {/* Results List */}
        <div 
          ref={resultsContainerRef}
          className="overflow-y-auto p-3 sm:p-4 space-y-1.5 flex-1 divide-y divide-slate-100"
        >
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <Search className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-medium text-slate-700">No results found for "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for "JSM", "customer support", "open source", or "careers".
              </p>
            </div>
          ) : (
            filteredResults.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 sm:p-3.5 rounded-lg cursor-pointer transition-all flex items-start justify-between gap-3 ${
                    isSelected ? 'bg-blue-50/80 border border-blue-200' : 'hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      {item.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-sm font-bold text-slate-900">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-700 uppercase tracking-wider font-mono">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${
                    isSelected ? 'text-blue-700 translate-x-0.5' : 'text-slate-300'
                  }`} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 sm:px-6 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono">↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono">↵</kbd>
              <span>to open</span>
            </span>
          </div>
          <span className="font-mono text-blue-700">{COMPANY_INFO.domain}</span>
        </div>
      </div>
    </div>
  );
};
