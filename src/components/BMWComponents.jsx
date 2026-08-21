import React from 'react';

// 1. Real Photographic Die-Cut BMW M4 Competition Sports Car Sticker
export const RealBMWM4Sticker = ({ className = "w-36 sm:w-44" }) => (
  <div
    className={`relative group inline-block cursor-pointer select-none transition-all duration-300 hover:scale-115 hover:-rotate-3 hover:-translate-y-2 active:scale-95 ${className}`}
    style={{
      filter: 'drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 4px #ffffff) drop-shadow(0 10px 18px rgba(0,0,0,0.35))',
    }}
  >
    <img
      src="/stickers/bmw_m4.png"
      alt="BMW M4 Competition"
      className="w-full h-auto object-contain pointer-events-none transform transition-transform duration-300 group-hover:brightness-105"
    />
    {/* Glossy Vinyl Sheen Highlight */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
  </div>
);

// 2. Real Photographic 3D Chrome BMW Roundel Logo Sticker
export const RealBMWLogoSticker = ({ className = "w-20 sm:w-24" }) => (
  <div
    className={`relative group inline-block cursor-pointer select-none transition-all duration-300 hover:scale-115 hover:rotate-6 hover:-translate-y-2 active:scale-95 ${className}`}
    style={{
      filter: 'drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 4px #ffffff) drop-shadow(0 10px 18px rgba(0,0,0,0.35))',
    }}
  >
    <img
      src="/stickers/bmw_logo.png"
      alt="BMW Emblem"
      className="w-full h-auto object-contain pointer-events-none transform transition-transform duration-300 group-hover:brightness-105"
    />
    {/* Glossy Sheen Overlay */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
);

// 3. Real Photographic ///M Power Motorsport Badge Sticker
export const RealMBadgeSticker = ({ className = "w-32 sm:w-36" }) => (
  <div
    className={`relative group inline-block cursor-pointer select-none transition-all duration-300 hover:scale-115 hover:-rotate-4 hover:-translate-y-2 active:scale-95 ${className}`}
    style={{
      filter: 'drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 4px #ffffff) drop-shadow(0 10px 18px rgba(0,0,0,0.35))',
    }}
  >
    <img
      src="/stickers/bmw_m_badge.png"
      alt="BMW M Power Badge"
      className="w-full h-auto object-contain pointer-events-none transform transition-transform duration-300 group-hover:brightness-105"
    />
    {/* Glossy Sheen Overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
);

// 4. Real 3D Brushed Metal & Crimson Start Engine Push Button Sticker
export const RealStartEngineSticker = ({ className = "w-20 sm:w-24" }) => (
  <div
    className={`relative group inline-block cursor-pointer select-none transition-all duration-300 hover:scale-115 hover:rotate-3 hover:-translate-y-2 active:scale-95 ${className}`}
    style={{
      filter: 'drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 4px #ffffff) drop-shadow(0 10px 18px rgba(0,0,0,0.35))',
    }}
  >
    <div className="w-full aspect-square rounded-full bg-[#0a0a0c] border-4 border-zinc-400 p-1.5 shadow-inner flex items-center justify-center relative overflow-hidden">
      {/* Outer Knurled Ring */}
      <div className="absolute inset-1 rounded-full border border-dashed border-zinc-500 opacity-60" />
      {/* Crimson Core */}
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#991b1b] via-[#dc2626] to-[#ef4444] border-2 border-[#f87171] flex flex-col items-center justify-center text-center shadow-lg relative z-10">
        <span className="font-sans font-extrabold text-[9px] sm:text-[10px] text-white tracking-wider leading-none drop-shadow">
          ENGINE
        </span>
        <span className="font-sans font-black text-xs sm:text-sm text-white tracking-widest leading-tight drop-shadow-md">
          START
        </span>
        <span className="font-sans font-bold text-[8px] sm:text-[9px] text-red-100/90 tracking-wider leading-none">
          STOP
        </span>
      </div>
      {/* 3D Glass Flare */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent pointer-events-none rounded-full" />
    </div>
  </div>
);

// 5. Real Waving Carbon Checkered Track Flag Sticker
export const RealCheckeredFlagSticker = ({ className = "w-22 sm:w-26" }) => (
  <div
    className={`relative group inline-block cursor-pointer select-none transition-all duration-300 hover:scale-115 hover:-rotate-6 hover:-translate-y-2 active:scale-95 ${className}`}
    style={{
      filter: 'drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 4px #ffffff) drop-shadow(0 10px 18px rgba(0,0,0,0.35))',
    }}
  >
    <svg viewBox="0 0 140 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 24 16 L 120 12 Q 130 50 110 80 L 24 86 Z"
        fill="#FFFFFF"
        stroke="#E4E4E7"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <line x1="24" y1="8" x2="24" y2="114" stroke="#18181B" strokeWidth="6" strokeLinecap="round" />
      <circle cx="24" cy="8" r="5" fill="#EAB308" />
      <g transform="translate(28, 16)">
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

// 6. Base Exports for Header, Lockscreen & Vinyl
export const BMWLogo = RealBMWLogoSticker;
export const BMWM3Car = RealBMWM4Sticker;
export const BMWMBadge = RealMBadgeSticker;
export const StartEngineButton = RealStartEngineSticker;
export const TurboBoostGauge = RealMBadgeSticker;

export const BMWMStripes = ({ className = "h-4 w-28" }) => (
  <div className={`inline-flex transform -skew-x-12 overflow-hidden rounded-sm shadow-md border border-white/80 ${className}`}>
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
      <circle cx="100" cy="100" r="95" fill="#18181B" stroke="#27272A" strokeWidth="5" />
      <circle cx="100" cy="100" r="76" fill="#52525B" stroke="#3F3F46" strokeWidth="2" />
      <path d="M 140 60 A 70 70 0 0 1 165 110 L 150 105 A 55 55 0 0 0 130 68 Z" fill="#0066B1" stroke="#004A80" strokeWidth="1.5" />
      <text x="145" y="90" fill="#FFFFFF" fontWeight="900" fontSize="7" transform="rotate(45 145 90)">///M</text>

      <circle cx="100" cy="100" r="68" fill="#27272A" stroke="#71717A" strokeWidth="2" />
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <g key={i} transform={`rotate(${angle} 100 100)`}>
          <polygon points="94,100 92,38 98,38 97,100" fill="#E4E4E7" stroke="#A1A1AA" strokeWidth="0.5" />
          <polygon points="103,100 102,38 108,38 106,100" fill="#E4E4E7" stroke="#A1A1AA" strokeWidth="0.5" />
        </g>
      ))}

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
