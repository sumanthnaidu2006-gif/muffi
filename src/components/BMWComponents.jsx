import React from 'react';

// 1. Ultra-Realistic 3D Die-Cut BMW Roundel Emblem Sticker
export const DieCutBMWLogo = ({ className = "w-20 h-20" }) => (
  <div className={`relative group inline-block cursor-pointer select-none transition-transform duration-300 hover:scale-115 hover:-rotate-3 hover:-translate-y-1 active:scale-95 ${className}`}>
    <svg viewBox="0 0 160 160" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]" xmlns="http://www.w3.org/2000/svg">
      {/* Thick White Die-Cut Vinyl Sticker Border */}
      <circle cx="80" cy="80" r="76" fill="#FFFFFF" />
      <circle cx="80" cy="80" r="72" fill="#09090B" stroke="#D4D4D8" strokeWidth="2" />
      
      {/* Outer Chrome Bezel */}
      <circle cx="80" cy="80" r="67" fill="#18181B" stroke="#71717A" strokeWidth="3" />
      <circle cx="80" cy="80" r="48" fill="none" stroke="#E4E4E7" strokeWidth="3.5" />
      
      {/* Bavarian Quadrants */}
      <g transform="translate(80, 80)">
        <path d="M 0 0 L -46 0 A 46 46 0 0 1 0 -46 Z" fill="#FFFFFF" />
        <path d="M 0 0 L 0 -46 A 46 46 0 0 1 46 0 Z" fill="#0066B1" />
        <path d="M 0 0 L 46 0 A 46 46 0 0 1 0 46 Z" fill="#FFFFFF" />
        <path d="M 0 0 L 0 46 A 46 46 0 0 1 -46 0 Z" fill="#0066B1" />
        <line x1="-46" y1="0" x2="46" y2="0" stroke="#71717A" strokeWidth="2" />
        <line x1="0" y1="-46" x2="0" y2="46" stroke="#71717A" strokeWidth="2" />
      </g>

      {/* 3D Glass Light Gloss Glare */}
      <path d="M 38 42 Q 80 18 122 42 Q 80 62 38 42 Z" fill="#FFFFFF" opacity="0.35" />

      {/* Bold BMW Letters */}
      <text x="50" y="32" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="1">B</text>
      <text x="73" y="24" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="1">M</text>
      <text x="99" y="32" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="1">W</text>
    </svg>
  </div>
);

// 2. Realistic Die-Cut BMW M4 GT3 Racecar Sticker
export const DieCutBMWM4Car = ({ className = "w-32 h-20" }) => (
  <div className={`relative group inline-block cursor-pointer select-none transition-transform duration-300 hover:scale-115 hover:rotate-3 hover:-translate-y-1 active:scale-95 ${className}`}>
    <svg viewBox="0 0 240 140" className="w-full h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="m4Paint" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>
      </defs>

      {/* Thick White Vinyl Die-Cut Backing Contour */}
      <path
        d="M 22 88 Q 18 60 52 50 L 72 26 Q 100 16 160 16 Q 192 16 208 48 L 226 68 Q 235 90 220 110 L 32 110 Q 18 105 22 88 Z"
        fill="#FFFFFF"
        stroke="#E4E4E7"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Aerodynamic GT Carbon Wing Spoiler */}
      <path d="M 24 40 L 48 38 L 46 48 L 22 48 Z" fill="#0F172A" />
      <line x1="32" y1="48" x2="36" y2="60" stroke="#0F172A" strokeWidth="3" />
      <line x1="42" y1="48" x2="44" y2="60" stroke="#0F172A" strokeWidth="3" />

      {/* Cabin & Windshield */}
      <path d="M 76 56 Q 100 28 150 28 Q 185 28 198 56 Z" fill="#09090B" stroke="#1E293B" strokeWidth="2.5" />
      <path d="M 88 52 Q 108 34 150 34 Q 178 34 190 52 Z" fill="#BAE6FD" opacity="0.85" />

      {/* Main Aggressive Chassis */}
      <path d="M 26 84 Q 30 58 64 58 L 198 58 Q 224 64 226 88 Q 226 102 210 104 L 40 104 Q 22 104 26 84 Z" fill="url(#m4Paint)" stroke="#0284C7" strokeWidth="2" />

      {/* Carbon Splitter & Side Skirts */}
      <rect x="24" y="98" width="198" height="6" rx="2" fill="#09090B" />

      {/* Aggressive Angel Eyes Headlights (Laserlight Blue) */}
      <ellipse cx="212" cy="74" rx="8" ry="5.5" fill="#F0F9FF" stroke="#38BDF8" strokeWidth="2" />
      <path d="M 206 74 Q 212 68 218 74" stroke="#0284C7" strokeWidth="3" fill="none" />

      {/* Iconic M Kidney Grille */}
      <rect x="195" y="66" width="6" height="24" rx="2" fill="#09090B" stroke="#38BDF8" strokeWidth="1" />
      <rect x="186" y="66" width="6" height="24" rx="2" fill="#09090B" stroke="#38BDF8" strokeWidth="1" />

      {/* M Motorsport Tri-Color Livery Stripe */}
      <g transform="translate(100, 68) skewX(-20)">
        <rect x="0" y="0" width="8" height="26" fill="#009FE3" />
        <rect x="9" y="0" width="8" height="26" fill="#0019A8" />
        <rect x="18" y="0" width="8" height="26" fill="#E2001A" />
      </g>

      {/* BBS Forged Alloy Wheels */}
      <g transform="translate(62, 102)">
        <circle cx="0" cy="0" r="20" fill="#09090B" stroke="#3F3F46" strokeWidth="3" />
        <circle cx="0" cy="0" r="13" fill="#52525B" stroke="#E4E4E7" strokeWidth="2" />
        <circle cx="0" cy="0" r="4.5" fill="#0066B1" />
      </g>

      <g transform="translate(182, 102)">
        <circle cx="0" cy="0" r="20" fill="#09090B" stroke="#3F3F46" strokeWidth="3" />
        <circle cx="0" cy="0" r="13" fill="#52525B" stroke="#E4E4E7" strokeWidth="2" />
        <circle cx="0" cy="0" r="4.5" fill="#0066B1" />
      </g>
    </svg>
  </div>
);

// 3. Realistic Die-Cut M Power Motorsport Badge Sticker
export const DieCutMBadge = ({ className = "w-28 h-14" }) => (
  <div className={`relative group inline-block cursor-pointer select-none transition-transform duration-300 hover:scale-115 hover:-rotate-4 hover:-translate-y-1 active:scale-95 ${className}`}>
    <svg viewBox="0 0 180 80" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]" xmlns="http://www.w3.org/2000/svg">
      {/* Die-Cut White Border Outline */}
      <rect x="6" y="6" width="168" height="68" rx="16" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="4" />
      
      {/* Carbon Fiber Background Plate */}
      <rect x="10" y="10" width="160" height="60" rx="12" fill="#18181B" stroke="#3F3F46" strokeWidth="1.5" />

      {/* M Motorsport Stripes */}
      <g transform="translate(24, 18) skewX(-16)">
        <rect x="0" y="0" width="14" height="44" rx="2" fill="#009FE3" />
        <rect x="16" y="0" width="14" height="44" rx="2" fill="#0019A8" />
        <rect x="32" y="0" width="14" height="44" rx="2" fill="#E2001A" />
        
        {/* Metallic Chrome M Letter */}
        <text x="52" y="40" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="46" letterSpacing="-2">
          M
        </text>
      </g>

      {/* Gloss Light Reflection */}
      <path d="M 12 12 L 168 12 L 130 35 L 12 35 Z" fill="#FFFFFF" opacity="0.12" />
    </svg>
  </div>
);

// 4. Realistic Die-Cut Twin-Scroll Turbocharger Sticker
export const DieCutTurboSticker = ({ className = "w-20 h-20" }) => (
  <div className={`relative group inline-block cursor-pointer select-none transition-transform duration-300 hover:scale-115 hover:rotate-6 hover:-translate-y-1 active:scale-95 ${className}`}>
    <svg viewBox="0 0 140 140" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]" xmlns="http://www.w3.org/2000/svg">
      {/* White Die-Cut Vinyl Contour */}
      <circle cx="70" cy="70" r="62" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="4" />
      
      {/* Turbo Snail Shell Housing */}
      <path
        d="M 70 20 C 100 20 120 45 120 75 C 120 105 95 120 65 120 C 35 120 20 95 20 70 C 20 40 45 20 70 20 Z"
        fill="#27272A"
        stroke="#71717A"
        strokeWidth="3"
      />
      {/* Exhaust Pipe Inlet */}
      <rect x="90" y="20" width="30" height="24" rx="3" fill="#3F3F46" stroke="#71717A" strokeWidth="2" />

      {/* Center Compressor Wheel */}
      <circle cx="68" cy="72" r="32" fill="#18181B" stroke="#E4E4E7" strokeWidth="2.5" />
      
      {/* Turbine Blades (Animated on hover) */}
      <g transform="translate(68, 72)" className="group-hover:animate-spin-slow origin-center">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={i}
            x1="0"
            y1="0"
            x2="0"
            y2="-26"
            stroke="#38BDF8"
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${angle})`}
          />
        ))}
        <circle cx="0" cy="0" r="7" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1.5" />
      </g>
    </svg>
  </div>
);

// 5. Realistic Die-Cut Start Engine Ignition Button Sticker
export const DieCutEngineStartSticker = ({ className = "w-20 h-20" }) => (
  <div className={`relative group inline-block cursor-pointer select-none transition-transform duration-300 hover:scale-115 hover:-rotate-6 hover:-translate-y-1 active:scale-95 ${className}`}>
    <svg viewBox="0 0 140 140" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]" xmlns="http://www.w3.org/2000/svg">
      {/* White Die-Cut Vinyl Outline */}
      <circle cx="70" cy="70" r="62" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="4" />
      
      {/* Outer Brushed Aluminum Bezel */}
      <circle cx="70" cy="70" r="54" fill="#18181B" stroke="#71717A" strokeWidth="4" />
      
      {/* Glowing Crimson Push Button */}
      <circle cx="70" cy="70" r="44" fill="#DC2626" stroke="#991B1B" strokeWidth="2.5" />
      <circle cx="70" cy="70" r="41" fill="none" stroke="#FCA5A5" strokeWidth="1" opacity="0.7" />

      {/* Button Text */}
      <text x="70" y="58" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="11" letterSpacing="1">
        START
      </text>
      <text x="70" y="74" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="11" letterSpacing="1">
        ENGINE
      </text>
      <text x="70" y="90" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="800" fontSize="9" opacity="0.85">
        STOP
      </text>

      {/* Top Gloss Flare */}
      <path d="M 40 45 Q 70 30 100 45 Q 70 55 40 45 Z" fill="#FFFFFF" opacity="0.35" />
    </svg>
  </div>
);

// 6. Realistic Die-Cut Checkered Racing Flag Sticker
export const DieCutRacingFlagSticker = ({ className = "w-20 h-20" }) => (
  <div className={`relative group inline-block cursor-pointer select-none transition-transform duration-300 hover:scale-115 hover:rotate-4 hover:-translate-y-1 active:scale-95 ${className}`}>
    <svg viewBox="0 0 140 140" className="w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]" xmlns="http://www.w3.org/2000/svg">
      {/* White Die-Cut Vinyl Outline */}
      <path
        d="M 20 20 L 115 15 Q 125 55 105 85 L 20 90 Z"
        fill="#FFFFFF"
        stroke="#E4E4E7"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Flag Pole */}
      <line x1="20" y1="12" x2="20" y2="128" stroke="#18181B" strokeWidth="6" strokeLinecap="round" />
      <circle cx="20" cy="12" r="5" fill="#EAB308" />

      {/* Checkered Grid Pattern */}
      <g transform="translate(24, 20)">
        <rect x="0" y="0" width="18" height="16" fill="#09090B" />
        <rect x="18" y="0" width="18" height="16" fill="#FFFFFF" />
        <rect x="36" y="0" width="18" height="16" fill="#09090B" />
        <rect x="54" y="0" width="18" height="16" fill="#FFFFFF" />
        <rect x="72" y="0" width="18" height="16" fill="#09090B" />

        <rect x="0" y="16" width="18" height="16" fill="#FFFFFF" />
        <rect x="18" y="16" width="18" height="16" fill="#09090B" />
        <rect x="36" y="16" width="18" height="16" fill="#FFFFFF" />
        <rect x="54" y="16" width="18" height="16" fill="#09090B" />
        <rect x="72" y="16" width="18" height="16" fill="#FFFFFF" />

        <rect x="0" y="32" width="18" height="16" fill="#09090B" />
        <rect x="18" y="32" width="18" height="16" fill="#FFFFFF" />
        <rect x="36" y="32" width="18" height="16" fill="#09090B" />
        <rect x="54" y="32" width="18" height="16" fill="#FFFFFF" />
        <rect x="72" y="32" width="18" height="16" fill="#09090B" />

        <rect x="0" y="48" width="18" height="16" fill="#FFFFFF" />
        <rect x="18" y="48" width="18" height="16" fill="#09090B" />
        <rect x="36" y="48" width="18" height="16" fill="#FFFFFF" />
        <rect x="54" y="48" width="18" height="16" fill="#09090B" />
        <rect x="72" y="48" width="18" height="16" fill="#E2001A" />
      </g>
    </svg>
  </div>
);

// 7. Base Component Exports for Lock & Layouts
export const BMWLogo = DieCutBMWLogo;
export const BMWM3Car = DieCutBMWM4Car;
export const BMWMBadge = DieCutMBadge;
export const StartEngineButton = DieCutEngineStartSticker;
export const TurboBoostGauge = DieCutTurboSticker;

export const BMWMStripes = ({ className = "h-4 w-28" }) => (
  <div className={`inline-flex transform -skew-x-12 overflow-hidden rounded-sm shadow-md border border-white/60 ${className}`}>
    <div className="flex-1 bg-[#009FE3]" />
    <div className="flex-1 bg-[#0019A8]" />
    <div className="flex-1 bg-[#E2001A]" />
  </div>
);

// BMW M Sport Alloy Wheel Rim (for Vinyl player)
export const BMWMWheelRim = ({ className = "w-40 h-40", isSpinning = false }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <svg
      viewBox="0 0 200 200"
      className={`w-full h-full filter drop-shadow-2xl select-none ${isSpinning ? 'animate-spin-slow' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Rubber Tyre */}
      <circle cx="100" cy="100" r="95" fill="#18181B" stroke="#27272A" strokeWidth="5" />
      {/* Drilled Brake Disc behind rim */}
      <circle cx="100" cy="100" r="76" fill="#52525B" stroke="#3F3F46" strokeWidth="2" />
      {/* Blue M Sport Brake Caliper */}
      <path d="M 140 60 A 70 70 0 0 1 165 110 L 150 105 A 55 55 0 0 0 130 68 Z" fill="#0066B1" stroke="#004A80" strokeWidth="1.5" />
      <text x="145" y="90" fill="#FFFFFF" fontWeight="900" fontSize="7" transform="rotate(45 145 90)">///M</text>

      {/* M Competition Double-Spoke Alloy Rim */}
      <circle cx="100" cy="100" r="68" fill="#27272A" stroke="#71717A" strokeWidth="2" />
      
      {/* 5 Double Spokes */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <polygon points="94,100 92,38 98,38 97,100" fill="#E4E4E7" stroke="#A1A1AA" strokeWidth="0.5" />
          <polygon points="103,100 102,38 108,38 106,100" fill="#E4E4E7" stroke="#A1A1AA" strokeWidth="0.5" />
        </g>
      ))}

      {/* Center BMW Hubcap */}
      <circle cx="100" cy="100" r="18" fill="#000000" stroke="#E4E4E7" strokeWidth="1.5" />
      <g transform="translate(100, 100)">
        <path d="M 0 0 L -12 0 A 12 12 0 0 1 0 -12 Z" fill="#FFFFFF" />
        <path d="M 0 0 L 0 -12 A 12 12 0 0 1 12 0 Z" fill="#0066B1" />
        <path d="M 0 0 L 12 0 A 12 12 0 0 1 0 12 Z" fill="#FFFFFF" />
        <path d="M 0 0 L 0 12 A 12 12 0 0 1 -12 0 Z" fill="#0066B1" />
      </g>
    </svg>
  </div>
);
