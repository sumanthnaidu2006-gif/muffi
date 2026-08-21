import React from 'react';

// Official BMW Roundel Emblem (Vector SVG)
export const BMWLogo = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 160 160" className={`select-none filter drop-shadow-md ${className}`} xmlns="http://www.w3.org/2000/svg">
    <circle cx="80" cy="80" r="76" fill="#18181B" stroke="#A1A1AA" strokeWidth="4" />
    <circle cx="80" cy="80" r="70" fill="#000000" />
    
    {/* Silver Ring */}
    <circle cx="80" cy="80" r="48" fill="none" stroke="#E4E4E7" strokeWidth="3" />
    
    {/* Inner Bavarian Quadrants (Top-Left & Bottom-Right: White, Top-Right & Bottom-Left: Bavarian Blue) */}
    <g transform="translate(80, 80)">
      {/* Top Left - White */}
      <path d="M 0 0 L -46 0 A 46 46 0 0 1 0 -46 Z" fill="#FFFFFF" />
      {/* Top Right - Blue */}
      <path d="M 0 0 L 0 -46 A 46 46 0 0 1 46 0 Z" fill="#0066B1" />
      {/* Bottom Right - White */}
      <path d="M 0 0 L 46 0 A 46 46 0 0 1 0 46 Z" fill="#FFFFFF" />
      {/* Bottom Left - Blue */}
      <path d="M 0 0 L 0 46 A 46 46 0 0 1 -46 0 Z" fill="#0066B1" />
      {/* Center Dividing Lines */}
      <line x1="-46" y1="0" x2="46" y2="0" stroke="#71717A" strokeWidth="1.5" />
      <line x1="0" y1="-46" x2="0" y2="46" stroke="#71717A" strokeWidth="1.5" />
    </g>

    {/* BMW Letters in Curved Ring */}
    <text x="50" y="32" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.5">B</text>
    <text x="73" y="24" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.5">M</text>
    <text x="100" y="32" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="16" letterSpacing="0.5">W</text>
  </svg>
);

// BMW M Power Tri-Color Stripe (Cyan, Velvet Blue, Red)
export const BMWMStripes = ({ className = "h-4 w-28" }) => (
  <div className={`inline-flex transform -skew-x-12 overflow-hidden rounded-sm shadow-sm ${className}`}>
    <div className="flex-1 bg-[#009FE3]" />
    <div className="flex-1 bg-[#0019A8]" />
    <div className="flex-1 bg-[#E2001A]" />
  </div>
);

// BMW M Power Badge
export const BMWMBadge = ({ className = "w-20 h-10" }) => (
  <svg viewBox="0 0 120 60" className={`select-none filter drop-shadow-sm ${className}`} xmlns="http://www.w3.org/2000/svg">
    <g transform="skewX(-14)">
      <rect x="18" y="14" width="8" height="32" fill="#009FE3" rx="1.5" />
      <rect x="29" y="14" width="8" height="32" fill="#0019A8" rx="1.5" />
      <rect x="40" y="14" width="8" height="32" fill="#E2001A" rx="1.5" />
      <text x="54" y="44" fill="#18181B" fontFamily="sans-serif" fontWeight="900" fontSize="36" letterSpacing="-1">M</text>
    </g>
  </svg>
);

// Cute Chibi BMW M3 G80 Sports Car
export const BMWM3Car = ({ className = "w-28 h-20" }) => (
  <svg viewBox="0 0 200 120" className={`select-none filter drop-shadow-md ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bmwPaint" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
    </defs>
    
    {/* Car Roof & Cabin */}
    <path d="M 50 55 Q 70 25 115 25 Q 150 25 165 55 Z" fill="#0F172A" stroke="#1E293B" strokeWidth="2" />
    <path d="M 60 52 Q 78 30 115 30 Q 142 30 155 52 Z" fill="#93C5FD" opacity="0.8" />
    
    {/* Body Chassis */}
    <path d="M 15 75 Q 20 52 48 52 L 165 52 Q 190 55 192 78 Q 192 90 178 92 L 30 92 Q 12 92 15 75 Z" fill="url(#bmwPaint)" stroke="#0369A1" strokeWidth="2.5" />
    
    {/* M Carbon Hood Lines */}
    <path d="M 55 52 L 40 70 M 150 52 L 165 70" stroke="#0369A1" strokeWidth="1.5" />

    {/* Aggressive Angel Eyes Headlights */}
    <ellipse cx="28" cy="68" rx="7" ry="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
    <path d="M 23 68 Q 28 62 33 68" stroke="#38BDF8" strokeWidth="2.5" fill="none" />
    
    <ellipse cx="178" cy="68" rx="7" ry="5" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
    <path d="M 173 68 Q 178 62 183 68" stroke="#38BDF8" strokeWidth="2.5" fill="none" />

    {/* Iconic Tall Kidney Grille in Center */}
    <rect x="90" y="58" width="8" height="22" rx="3" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />
    <rect x="102" y="58" width="8" height="22" rx="3" fill="#0F172A" stroke="#1E293B" strokeWidth="1.5" />

    {/* Wheels with M Alloy Rims */}
    <g transform="translate(48, 90)">
      <circle cx="0" cy="0" r="18" fill="#18181B" stroke="#52525B" strokeWidth="2.5" />
      <circle cx="0" cy="0" r="11" fill="#71717A" stroke="#E4E4E7" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="4" fill="#0066B1" />
    </g>

    <g transform="translate(155, 90)">
      <circle cx="0" cy="0" r="18" fill="#18181B" stroke="#52525B" strokeWidth="2.5" />
      <circle cx="0" cy="0" r="11" fill="#71717A" stroke="#E4E4E7" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="4" fill="#0066B1" />
    </g>

    {/* M Power Stripe decal on side */}
    <g transform="translate(75, 72) skewX(-15)">
      <rect x="0" y="0" width="4" height="12" fill="#009FE3" />
      <rect x="5" y="0" width="4" height="12" fill="#0019A8" />
      <rect x="10" y="0" width="4" height="12" fill="#E2001A" />
    </g>
  </svg>
);

// BMW Push Start Engine Button
export const StartEngineButton = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={`select-none filter drop-shadow-md ${className}`} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="#18181B" stroke="#71717A" strokeWidth="3" />
    <circle cx="50" cy="50" r="38" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
    <circle cx="50" cy="50" r="35" fill="none" stroke="#F87171" strokeWidth="1" opacity="0.6" />
    <text x="50" y="42" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="8" letterSpacing="0.5">START</text>
    <text x="50" y="54" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="8" letterSpacing="0.5">ENGINE</text>
    <text x="50" y="66" textAnchor="middle" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="800" fontSize="7" opacity="0.8">STOP</text>
  </svg>
);

// Turbo Boost Gauge
export const TurboBoostGauge = ({ className = "w-14 h-14" }) => (
  <svg viewBox="0 0 100 100" className={`select-none filter drop-shadow-md ${className}`} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="#09090B" stroke="#27272A" strokeWidth="3" />
    <path d="M 22 75 A 35 35 0 1 1 78 75" fill="none" stroke="#3F3F46" strokeWidth="4" />
    <path d="M 50 15 A 35 35 0 0 1 78 75" fill="none" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
    <line x1="50" y1="50" x2="72" y2="35" stroke="#F87171" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="50" r="5" fill="#EF4444" />
    <text x="50" y="70" textAnchor="middle" fill="#A1A1AA" fontFamily="sans-serif" fontWeight="800" fontSize="8">BAR / PSI</text>
  </svg>
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

      {/* M Competition Double-Spoke Alloy Rim (Gunmetal & Silver Diamond Cut) */}
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
