import React, { useState } from 'react';
import logoTransparent from '../assets/logo-transparent.png';
import logoFull from '../assets/logo.png';

// Bundled high-resolution assets: resolved by Vite relative to base URL (works on GitHub Pages subpaths and root domains)
export const DEFAULT_LOGO_IMAGE_URL = logoTransparent;
export const LOGO_FULL_URL = logoFull;

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  src?: string;
  forceSvg?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'full',
  size = 'md',
  src,
  forceSvg = false,
}) => {
  const [imgError, setImgError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>(src || DEFAULT_LOGO_IMAGE_URL);

  const isWhite = variant === 'white';
  const textColor = isWhite ? '#FFFFFF' : '#0B2240';
  const subtextColor = isWhite ? '#38BDF8' : '#0284C7';
  const navyColor = isWhite ? '#60A5FA' : '#0B2240';

  // Substantial, readable heights tailored for tightly cropped 456x174 ratio (approx 2.6:1)
  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-11 sm:h-13 lg:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-24 sm:h-28 lg:h-32',
  };

  const handleImageError = () => {
    if (currentSrc === logoTransparent) {
      setCurrentSrc(logoFull);
    } else {
      setImgError(true);
    }
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Primary: Tightly-Cropped Authentic Asset with Zero Margin Bleed */}
      {!forceSvg && !imgError && !isWhite ? (
        <img
          src={currentSrc}
          alt="Njure Tech — A Njure Group Company"
          className={`${heights[size]} w-auto object-contain block`}
          onError={handleImageError}
          loading="eager"
          decoding="async"
        />
      ) : !forceSvg && !imgError && isWhite ? (
        /* Dark Theme variant with clean protective contrast pill */
        <div className="bg-white/95 px-3 py-1.5 rounded-md shadow-xs inline-flex items-center">
          <img
            src={logoFull}
            alt="Njure Tech — A Njure Group Company"
            className={`${heights[size]} w-auto object-contain block`}
            onError={handleImageError}
            loading="eager"
            decoding="async"
          />
        </div>
      ) : (
        /* Pure Vector SVG Implementation matching the exact corporate prompt */
        <div className="flex items-center gap-3.5">
          {/* Abstract Network 'N' with Upward Ascending Arrow */}
          <svg
            viewBox="0 0 140 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${heights[size]} w-auto shrink-0`}
          >
            <defs>
              <linearGradient id="networkGrad" x1="20" y1="80" x2="110" y2="15" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={isWhite ? '#38BDF8' : '#0B2240'} />
                <stop offset="35%" stopColor={isWhite ? '#0284C7' : '#0E3A68'} />
                <stop offset="65%" stopColor="#0096C7" />
                <stop offset="85%" stopColor="#00B4D8" />
                <stop offset="100%" stopColor="#00C2FF" />
              </linearGradient>

              <linearGradient id="arrowGradFinal" x1="55" y1="85" x2="115" y2="15" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0284C7" />
                <stop offset="50%" stopColor="#00B4D8" />
                <stop offset="100%" stopColor="#00C2FF" />
              </linearGradient>
            </defs>

            {/* Interconnected Network Struts */}
            <line x1="22" y1="85" x2="28" y2="58" stroke="url(#networkGrad)" strokeWidth="6" strokeLinecap="round" />
            <line x1="28" y1="58" x2="42" y2="28" stroke="url(#networkGrad)" strokeWidth="6" strokeLinecap="round" />
            <line x1="22" y1="85" x2="56" y2="88" stroke="url(#networkGrad)" strokeWidth="5.5" strokeLinecap="round" />
            <line x1="28" y1="58" x2="42" y2="54" stroke="url(#networkGrad)" strokeWidth="4" strokeLinecap="round" />
            <line x1="28" y1="58" x2="56" y2="88" stroke="url(#networkGrad)" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="42" y1="28" x2="56" y2="88" stroke="url(#networkGrad)" strokeWidth="5" strokeLinecap="round" />
            <line x1="42" y1="28" x2="62" y2="50" stroke="url(#networkGrad)" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="42" y1="54" x2="56" y2="88" stroke="url(#networkGrad)" strokeWidth="4" strokeLinecap="round" />
            <line x1="42" y1="54" x2="72" y2="36" stroke="url(#networkGrad)" strokeWidth="4.5" strokeLinecap="round" />
            <line x1="62" y1="50" x2="56" y2="88" stroke="url(#networkGrad)" strokeWidth="4" strokeLinecap="round" />

            {/* Dynamic Ascending Arrow Shaft */}
            <line x1="56" y1="88" x2="96" y2="26" stroke="url(#arrowGradFinal)" strokeWidth="7.5" strokeLinecap="round" />
            <line x1="72" y1="90" x2="102" y2="38" stroke="url(#arrowGradFinal)" strokeWidth="6" strokeLinecap="round" />
            <line x1="56" y1="88" x2="72" y2="90" stroke="url(#arrowGradFinal)" strokeWidth="5" strokeLinecap="round" />
            <line x1="72" y1="36" x2="94" y2="28" stroke="url(#arrowGradFinal)" strokeWidth="4.5" strokeLinecap="round" />

            {/* Prominent Arrow Head */}
            <polygon
              points="86,8 116,24 98,44 97,30 82,24"
              fill="url(#arrowGradFinal)"
            />
            <polygon
              points="98,12 116,24 94,30"
              fill="#38BDF8"
            />

            {/* Network Spheres / Nodes */}
            <circle cx="22" cy="85" r="8" fill={navyColor} />
            <circle cx="22" cy="85" r="3.2" fill="#FFFFFF" opacity="0.9" />

            <circle cx="28" cy="58" r="6.5" fill={navyColor} />
            <circle cx="28" cy="58" r="2.5" fill="#FFFFFF" opacity="0.9" />

            <circle cx="42" cy="28" r="7.5" fill={navyColor} />
            <circle cx="42" cy="28" r="3" fill="#FFFFFF" opacity="0.9" />

            <circle cx="42" cy="54" r="5.5" fill={navyColor} />
            <circle cx="42" cy="54" r="2" fill="#FFFFFF" opacity="0.9" />

            <circle cx="56" cy="88" r="8" fill={navyColor} />
            <circle cx="56" cy="88" r="3" fill="#FFFFFF" opacity="0.9" />

            <circle cx="72" cy="36" r="6.5" fill="#00B4D8" />
            <circle cx="72" cy="36" r="2.5" fill="#FFFFFF" />

            <circle cx="72" cy="90" r="5.5" fill="#00B4D8" />
            <circle cx="72" cy="90" r="2" fill="#FFFFFF" />

            <circle cx="86" cy="46" r="5" fill="#00C2FF" />
            <circle cx="86" cy="46" r="2" fill="#FFFFFF" />
          </svg>

          {/* Typography Lockup */}
          {variant !== 'icon' && (
            <div className="flex flex-col justify-center text-left leading-none">
              <span 
                className="text-3xl sm:text-[34px] font-bold tracking-tight"
                style={{ color: textColor, fontFamily: 'var(--font-sans)', lineHeight: '1.05' }}
              >
                Njure
              </span>
              <span 
                className="text-lg sm:text-[20px] font-extrabold tracking-[0.24em] uppercase mt-0.5"
                style={{ color: textColor, fontFamily: 'var(--font-sans)', lineHeight: '1' }}
              >
                TECH
              </span>
              <span 
                className="text-[10px] sm:text-[11px] font-semibold tracking-wide mt-1"
                style={{ color: subtextColor }}
              >
                A Njure Group Company
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
