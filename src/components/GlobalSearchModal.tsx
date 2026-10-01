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
  DollarSign,
  Lock,
  Compass
} from 'lucide-react';
import { COMPANY_INFO, BPO_SERVICES, CAREER_LISTINGS, FUTURE_ROADMAP, GENERAL_FAQS } from '../data/companyData';

interface SearchResultItem {
  id: string;
  title: string;
  category: 'Service' | 'Security & Trust' | 'Enterprise FAQ' | 'Career' | 'Operations' | 'About & Tech' | 'Contact';
  description: string;
  keywords: string[];
  targetPath: string;
  icon: React.ReactNode;
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
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

  // Comprehensive index of all indexable pages and topic entities
  const searchIndex: SearchResultItem[] = useMemo(() => [
    // 1. Core Dedicated BPO Services
    {
      id: 'srv-support',
      title: 'Omnichannel Customer Support (Voice, Chat & Email)',
      category: 'Service',
      description: 'Dedicated 24/7 helpdesk specialists managing live chat, telephone, and email support with sub-2 minute SLAs.',
      keywords: ['customer support', 'voice', 'chat', 'call center', 'whatsapp', 'zendesk', 'freshdesk', 'helpdesk', 'inbound', 'ticketing', 'outsourcing', 'sla'],
      targetPath: '/services/customer-support',
      icon: <Headphones className="w-4 h-4 text-blue-600" />,
    },
    {
      id: 'srv-backoffice',
      title: 'Back-Office Operations & Data Processing',
      category: 'Service',
      description: 'KYC document verification, spreadsheet cleanup, invoice audits, catalog indexing, and dual-pass 99.5%+ accurate data operations.',
      keywords: ['back office', 'data entry', 'kyc', 'verification', 'invoice audit', 'spreadsheet', 'excel', 'reconciliation', 'catalog', 'data processing'],
      targetPath: '/services/back-office',
      icon: <Database className="w-4 h-4 text-blue-600" />,
    },
    {
      id: 'srv-ecommerce',
      title: 'E-Commerce Order Support & RTO Reduction',
      category: 'Service',
      description: 'Cash-on-Delivery (COD) phone confirmations, Non-Delivery Report (NDR) triage, RTO reduction by 25%–35%, and Shopify logistics.',
      keywords: ['ecommerce', 'cod', 'cash on delivery', 'rto', 'ndr', 'shopify', 'returns', 'tracking', 'courier', 'fulfillment', 'shiprocket', 'clickpost'],
      targetPath: '/services/ecommerce-support',
      icon: <ShoppingBag className="w-4 h-4 text-blue-600" />,
    },
    {
      id: 'srv-telecalling',
      title: 'Telecalling Services & Inbound Lead Qualification',
      category: 'Service',
      description: 'Rapid inbound lead follow-up within 10 minutes, discovery meeting scheduling on AE calendars, and customer survey calling.',
      keywords: ['telecalling', 'lead qualification', 'outbound', 'appointment booking', 'sales call', 'survey', 'cold calling', 'hubspot', 'speed to lead'],
      targetPath: '/services/telecalling',
      icon: <PhoneCall className="w-4 h-4 text-blue-600" />,
    },
    {
      id: 'srv-hub',
      title: 'BPO Services Overview & Directory',
      category: 'Service',
      description: 'Comprehensive directory of all 4 active BPO operational capabilities and onboarding SLAs.',
      keywords: ['services', 'bpo', 'catalog', 'offerings', 'overview', 'all services'],
      targetPath: '/services',
      icon: <Compass className="w-4 h-4 text-blue-600" />,
    },

    // 2. Security, Compliance & Governance
    {
      id: 'sec-governance',
      title: 'Security by Design, Endpoint Policies & NDAs',
      category: 'Security & Trust',
      description: 'Transparent disclosure: port lockdown policies, client-controlled SSO/MFA, bilateral NDAs, and clean-desk governance.',
      keywords: ['security', 'iso', 'soc', 'soc 2', 'iso 27001', 'nda', 'endpoint', 'lockdown', 'mfa', 'sso', 'compliance', 'clean desk', 'privacy', 'confidentiality'],
      targetPath: '/security',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
    },

    // 3. Remote Operations & Delivery Architecture
    {
      id: 'infra-remote',
      title: '100% Remote Operations Model & Shift Coverage',
      category: 'Operations',
      description: 'Distributed cloud helpdesks, 24/7 follow-the-sun shift handovers, zero real estate overhead, and home power backup standards.',
      keywords: ['operations', 'remote', 'distributed', 'infrastructure', 'shifts', '24/7', 'broadband', 'ups', 'follow the sun', 'cloud'],
      targetPath: '/operations',
      icon: <Server className="w-4 h-4 text-indigo-600" />,
    },

    // 4. About & Partner Model
    {
      id: 'about-model',
      title: 'About Njure Tech & Zero-Cut Partner Model',
      category: 'About & Tech',
      description: 'Company heritage, Njure Group parent entity, client-budget orientation, and profit-sharing remote specialist structure.',
      keywords: ['about', 'njure group', 'story', 'heritage', 'zero cut', 'profit sharing', 'budget', 'partner', 'company', 'origins'],
      targetPath: '/about',
      icon: <Compass className="w-4 h-4 text-slate-700" />,
    },
    {
      id: 'tech-roadmap',
      title: 'Digital Engineering & Automation Roadmap',
      category: 'About & Tech',
      description: 'Custom React client portals, CRM webhook sync pipelines, and AI copilot tools grounded in front-line operational data.',
      keywords: ['technology', 'roadmap', 'react', 'software', 'automation', 'api', 'copilot', 'engineering', 'future tech'],
      targetPath: '/technology',
      icon: <Sparkles className="w-4 h-4 text-purple-600" />,
    },

    // 5. Careers
    ...CAREER_LISTINGS.map((role) => ({
      id: `career-${role.id}`,
      title: `Career: ${role.title}`,
      category: 'Career' as const,
      description: `${role.type} · ${role.experience} · 100% Remote across India with profit-sharing partnership.`,
      keywords: ['career', 'job', 'hiring', 'remote job', 'work from home', 'apply', 'fresher', role.title.toLowerCase()],
      targetPath: '/careers',
      icon: <Briefcase className="w-4 h-4 text-amber-600" />,
    })),

    // 6. Contact & Proposals
    {
      id: 'contact-rfq',
      title: 'Contact Us & Request Budget Proposal',
      category: 'Contact',
      description: 'Direct consultation with our operations desk. Scoped strictly around your monthly operational budget with zero agency cut.',
      keywords: ['contact', 'email', 'proposal', 'rfq', 'quote', 'pricing', 'hire', 'get in touch', 'info@njuregroup.in'],
      targetPath: '/contact',
      icon: <Mail className="w-4 h-4 text-blue-700" />,
    },
  ], []);

  // Filter and rank search results
  const results = useMemo(() => {
    if (!query.trim()) {
      return searchIndex.slice(0, 8); // Default popular suggestions
    }

    const cleanQuery = query.toLowerCase().trim();
    const queryTokens = cleanQuery.split(/\s+/);

    return searchIndex
      .map((item) => {
        let score = 0;
        const titleLower = item.title.toLowerCase();
        const descLower = item.description.toLowerCase();

        // Exact title match
        if (titleLower === cleanQuery) score += 100;
        else if (titleLower.includes(cleanQuery)) score += 50;

        // Keyword matches
        item.keywords.forEach((kw) => {
          if (kw === cleanQuery) score += 40;
          else if (kw.includes(cleanQuery)) score += 20;
        });

        // Token match
        queryTokens.forEach((token) => {
          if (titleLower.includes(token)) score += 15;
          if (descLower.includes(token)) score += 5;
          item.keywords.forEach((kw) => {
            if (kw.includes(token)) score += 10;
          });
        });

        return { item, score };
      })
      .filter((res) => res.score > 0)
      .sort((a, b) => b.score - a.score)
      .map((res) => res.item);
  }, [query, searchIndex]);

  // Reset selection index on new query
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Keyboard navigation (Up / Down / Enter / Esc)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  const handleSelect = (item: SearchResultItem) => {
    onNavigate(item.targetPath);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-label="Global site search"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search BPO services, security controls, SLAs, tech roadmap, or careers..."
            className="flex-grow bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
            aria-autocomplete="list"
            aria-controls="search-results-list"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-2 py-1 text-xs text-slate-500 bg-white hover:bg-slate-100 border border-slate-200 rounded cursor-pointer"
          >
            Esc
          </button>
        </div>

        {/* Search Results List */}
        <div 
          ref={resultsContainerRef}
          id="search-results-list"
          role="listbox"
          className="overflow-y-auto p-2 divide-y divide-slate-100 flex-grow"
        >
          {results.length > 0 ? (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => handleSelect(item)}
                  className={`p-3 rounded-lg flex items-start gap-3 cursor-pointer transition-colors ${
                    isSelected ? 'bg-blue-50/80 text-blue-900' : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className={`p-2 rounded-md shrink-0 mt-0.5 ${
                    isSelected ? 'bg-white shadow-2xs' : 'bg-slate-100'
                  }`}>
                    {item.icon}
                  </div>

                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-semibold text-xs text-slate-900 truncate">
                        {item.title}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded font-mono font-medium bg-slate-100 text-slate-600 border border-slate-200">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 mt-2 transition-transform ${
                    isSelected ? 'text-blue-600 translate-x-0.5' : 'text-slate-300'
                  }`} />
                </div>
              );
            })
          ) : (
            <div className="py-12 text-center text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 text-slate-300 stroke-[1.5]" />
              <p className="text-xs font-semibold text-slate-600">No results found for "{query}"</p>
              <p className="text-[11px] text-slate-400 mt-1">Try searching for "support", "kyc", "cod", "security", "jsm", or "careers".</p>
            </div>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span><kbd className="font-mono bg-white border border-slate-200 px-1 py-0.5 rounded text-[10px]">↑</kbd> <kbd className="font-mono bg-white border border-slate-200 px-1 py-0.5 rounded text-[10px]">↓</kbd> Navigate</span>
            <span><kbd className="font-mono bg-white border border-slate-200 px-1 py-0.5 rounded text-[10px]">↵</kbd> Select</span>
          </div>
          <span>Direct indexed pages & services</span>
        </div>
      </div>
    </div>
  );
};
