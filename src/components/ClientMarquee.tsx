import React from 'react';

interface ClientItem {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

const CLIENT_ITEMS: ClientItem[] = [
  {
    id: 'aethelgard',
    name: 'Aethelgard Dynamics',
    renderLogo: () => (
      <svg className="w-6 h-6 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
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
        <circle cx="16" cy="10" r="4.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.25" />
        <circle cx="10" cy="21" r="4.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.25" />
        <circle cx="22" cy="21" r="4.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.25" />
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
        <polygon points="16,3 29,11 16,16 3,11" fill="currentColor" fillOpacity="0.3" />
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
        <path d="M16 3L22 13H10L16 3Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 17L14 27H2L8 17Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 17L30 27H18L24 17Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
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

// Double each track to ensure each track exceeds even ultra-wide 4K viewports
const TRACK_ITEMS = [...CLIENT_ITEMS, ...CLIENT_ITEMS];

export const ClientMarquee: React.FC = () => {
  return (
    <div className="marquee-wrapper w-full bg-slate-900 border-t border-b border-slate-800 py-6 overflow-hidden relative select-none">
      {/* Explicit Inline CSS for Rock-Solid Cross-Browser Auto Scrolling on Desktop and Mobile */}
      <style>{`
        @keyframes njureAutoMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }

        .marquee-track-motion {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          white-space: nowrap;
          animation: njureAutoMarquee 32s linear infinite;
          will-change: transform;
        }

        /* Desktop mouse hover only: pause when hovering. Touch devices are ignored so mobile doesn't freeze on scroll */
        @media (hover: hover) and (pointer: fine) {
          .marquee-wrapper:hover .marquee-track-motion {
            animation-play-state: paused;
          }
        }
      `}</style>

      {/* Dual Edge Fade Gradients */}
      <div 
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" 
        aria-hidden="true" 
      />
      <div 
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-900 via-slate-900/90 to-transparent z-10" 
        aria-hidden="true" 
      />

      {/* Dual Synchronized Tracks for Seamless Loop */}
      <div className="flex w-max">
        {/* Track 1 */}
        <div className="marquee-track-motion flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14">
          {TRACK_ITEMS.map((client, idx) => (
            <div
              key={`track1-${client.id}-${idx}`}
              className="flex items-center gap-3 shrink-0 text-slate-400 hover:text-slate-100 transition-colors group cursor-default"
            >
              <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                {client.renderLogo()}
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 (Cloned for seamless infinite continuity) */}
        <div className="marquee-track-motion flex items-center gap-10 sm:gap-14 pr-10 sm:pr-14" aria-hidden="true">
          {TRACK_ITEMS.map((client, idx) => (
            <div
              key={`track2-${client.id}-${idx}`}
              className="flex items-center gap-3 shrink-0 text-slate-400 hover:text-slate-100 transition-colors group cursor-default"
            >
              <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                {client.renderLogo()}
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
