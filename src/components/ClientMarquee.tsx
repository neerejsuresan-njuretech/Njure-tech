import React from 'react';

interface ClientItem {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

const CLIENT_LOGOS: ClientItem[] = [
  {
    id: 'aethelgard',
    name: 'Aethelgard Dynamics',
    renderLogo: () => (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="2.5" fill="currentColor" />
        <path d="M16 2V8M28 9L22 12M28 23L22 20M16 30V24M4 23L10 20M4 9L10 12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'varnion',
    name: 'Varnion Biosystems',
    renderLogo: () => (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
        <circle cx="16" cy="10" r="4.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <circle cx="10" cy="21" r="4.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <circle cx="22" cy="21" r="4.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <path d="M16 14.5V17.5M12.5 19L14.5 17.5M19.5 19L17.5 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'kalyptra',
    name: 'Kalyptra Retail',
    renderLogo: () => (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3L29 11L16 29L3 11L16 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M16 3V29M3 11H29" stroke="currentColor" strokeWidth="1.5" />
        <polygon points="16,3 29,11 16,16 3,11" fill="currentColor" fillOpacity="0.25" />
      </svg>
    ),
  },
  {
    id: 'zenthor',
    name: 'Zenthor Automation',
    renderLogo: () => (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="5" stroke="currentColor" strokeWidth="2" />
        <path d="M10 11L16 16L10 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 11L22 16L16 21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'orenza',
    name: 'Orenza Mobility',
    renderLogo: () => (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="16" r="9" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="20" cy="16" r="9" stroke="currentColor" strokeWidth="2.2" strokeDasharray="4 2" />
        <circle cx="16" cy="16" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'thalassa',
    name: 'Thalassa FinCorp',
    renderLogo: () => (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3L22 13H10L16 3Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 17L14 27H2L8 17Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 17L30 27H18L24 17Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'borealis',
    name: 'Borealis Cloudworks',
    renderLogo: () => (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 22L10 14L16 20L22 10L28 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="14" r="2.5" fill="currentColor" />
        <circle cx="16" cy="20" r="2.5" fill="currentColor" />
        <circle cx="22" cy="10" r="2.5" fill="currentColor" />
        <path d="M4 28H28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: 'novaryx',
    name: 'Novaryx Synthetics',
    renderLogo: () => (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4L27 10.5V21.5L16 28L5 21.5V10.5L16 4Z" stroke="currentColor" strokeWidth="2" />
        <path d="M16 4V16L27 21.5M16 16L5 21.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'zephyrix',
    name: 'Zephyrix Logistics',
    renderLogo: () => (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10H23C26.3137 10 29 12.6863 29 16C29 19.3137 26.3137 22 23 22H3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M3 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
        <path d="M12 6L8 10L12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'kyronix',
    name: 'Kyronix Digital',
    renderLogo: () => (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L6 6V15C6 22 10.5 27.5 16 30C21.5 27.5 26 22 26 15V6L16 2Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M12 16L15 19L20 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const ClientMarquee: React.FC = () => {
  // Seamless loop by doubling the items
  const items = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <div className="w-full bg-slate-900 border-t border-b border-slate-800 py-6 overflow-hidden relative">
      {/* Dual Edge Fade Gradients */}
      <div 
        className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10" 
        aria-hidden="true" 
      />

      {/* Sideways Scrolling Track */}
      <div className="animate-marquee-left flex items-center gap-10 sm:gap-14">
        {items.map((client, idx) => (
          <div
            key={`${client.id}-${idx}`}
            className="flex items-center gap-3 shrink-0 text-slate-400 hover:text-slate-200 transition-colors select-none group py-1"
          >
            <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">
              {client.renderLogo()}
            </div>
            <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
