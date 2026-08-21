import React from 'react';
import { CONFIG } from '../config';

// 1. Sporty Drift Tire Burnout & Skidmark Sticker (Option 7)
export const DriftTireBurnoutSticker = ({ className = "w-36 sm:w-44" }) => (
  <div
    className={`relative group inline-block cursor-pointer select-none transition-all duration-300 hover:scale-115 hover:-rotate-3 hover:-translate-y-2 active:scale-95 ${className}`}
    style={{
      filter: 'drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 4px #ffffff) drop-shadow(0 10px 18px rgba(0,0,0,0.4))',
    }}
  >
    <svg viewBox="0 0 240 140" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Thick White Die-Cut Vinyl Contour */}
      <path
        d="M 20 60 Q 50 15 120 18 Q 190 15 220 55 Q 230 95 180 125 Q 110 130 50 120 Q 15 105 20 60 Z"
        fill="#FFFFFF"
        stroke="#E4E4E7"
        strokeWidth="6"
        strokeLinejoin="round"
      />

      {/* Asphalt Skidmark Road Texture */}
      <rect x="25" y="24" width="190" height="92" rx="20" fill="#18181B" />
      
      {/* Dual Curved Drift Skidmarks */}
      <path
        d="M 35 90 Q 90 40 170 50 Q 205 55 210 70"
        fill="none"
        stroke="#09090B"
        strokeWidth="16"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M 45 105 Q 100 55 180 65 Q 215 70 215 85"
        fill="none"
        stroke="#09090B"
        strokeWidth="16"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Tire Tread Grooves */}
      <path
        d="M 35 90 Q 90 40 170 50 Q 205 55 210 70"
        fill="none"
        stroke="#27272A"
        strokeWidth="12"
        strokeDasharray="6 4"
        strokeLinecap="round"
      />
      <path
        d="M 45 105 Q 100 55 180 65 Q 215 70 215 85"
        fill="none"
        stroke="#27272A"
        strokeWidth="12"
        strokeDasharray="6 4"
        strokeLinecap="round"
      />

      {/* Drift Smoke Clouds */}
      <circle cx="185" cy="55" r="16" fill="#F8FAFC" opacity="0.85" />
      <circle cx="205" cy="65" r="14" fill="#E2E8F0" opacity="0.9" />
      <circle cx="170" cy="70" r="18" fill="#F1F5F9" opacity="0.8" />
      <circle cx="195" cy="85" r="15" fill="#FFFFFF" opacity="0.95" />

      {/* M-Sport Tri-Color Accent Slash */}
      <g transform="translate(40, 36) skewX(-18)">
        <rect x="0" y="0" width="6" height="20" fill="#009FE3" />
        <rect x="7" y="0" width="6" height="20" fill="#0019A8" />
        <rect x="14" y="0" width="6" height="20" fill="#E2001A" />
      </g>

      {/* Sporty Drift Text */}
      <text x="68" y="48" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="13" letterSpacing="1">
        DRIFT MODE
      </text>
      <text x="68" y="62" fill="#38BDF8" fontFamily="sans-serif" fontWeight="800" fontSize="9" letterSpacing="0.5">
        SMILES PER GALLON 💨
      </text>
      <text x="50" y="105" fill="#FBBF24" fontFamily="sans-serif" fontWeight="900" fontSize="11" letterSpacing="0.5">
        SIDEWAYS IN 2ND GEAR 🏁
      </text>
    </svg>
  </div>
);

// 2. BMW M4 Competition Drift Sports Car Sticker
export const BMWDriftCarSticker = ({ className = "w-36 sm:w-44" }) => (
  <div
    className={`relative group inline-block cursor-pointer select-none transition-all duration-300 hover:scale-115 hover:rotate-3 hover:-translate-y-2 active:scale-95 ${className}`}
    style={{
      filter: 'drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 4px #ffffff) drop-shadow(0 10px 18px rgba(0,0,0,0.4))',
    }}
  >
    <img
      src="/stickers/bmw_m4.png"
      alt="BMW M4 Competition"
      className="w-full h-auto object-contain pointer-events-none transform transition-transform duration-300 group-hover:brightness-105"
    />
  </div>
);

// 3. BMW M Smart Remote Key Fob Sticker
export const BMWKeyFobSticker = ({ className = "w-22 sm:w-26" }) => (
  <div
    className={`relative group inline-block cursor-pointer select-none transition-all duration-300 hover:scale-115 hover:-rotate-6 hover:-translate-y-2 active:scale-95 ${className}`}
    style={{
      filter: 'drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 4px #ffffff) drop-shadow(0 10px 18px rgba(0,0,0,0.4))',
    }}
  >
    <svg viewBox="0 0 120 180" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* White Die-Cut Vinyl Outline */}
      <path
        d="M 30 20 Q 60 8 90 20 L 105 130 Q 100 170 60 170 Q 20 170 15 130 Z"
        fill="#FFFFFF"
        stroke="#E4E4E7"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Black Metallic Key Body */}
      <path
        d="M 34 26 Q 60 16 86 26 L 98 126 Q 94 162 60 162 Q 26 162 22 126 Z"
        fill="#18181B"
        stroke="#3F3F46"
        strokeWidth="2"
      />
      {/* Silver Side Blades */}
      <path d="M 22 50 L 26 120 L 32 120 L 28 50 Z" fill="#D4D4D8" />
      <path d="M 98 50 L 94 120 L 88 120 L 92 50 Z" fill="#D4D4D8" />
      
      {/* Center BMW Roundel Lock Button */}
      <circle cx="60" cy="70" r="18" fill="#000000" stroke="#71717A" strokeWidth="2" />
      <circle cx="60" cy="70" r="14" fill="#0066B1" />
      <path d="M 60 56 L 60 84" stroke="#FFFFFF" strokeWidth="2" />
      <path d="M 46 70 L 74 70" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="60" cy="70" r="4" fill="#FFFFFF" />

      {/* Unlock & Trunk Buttons */}
      <rect x="44" y="102" width="32" height="12" rx="4" fill="#27272A" stroke="#52525B" strokeWidth="1" />
      <text x="60" y="111" textAnchor="middle" fill="#E4E4E7" fontSize="8" fontWeight="bold">UNLOCK</text>
      
      <rect x="44" y="122" width="32" height="12" rx="4" fill="#27272A" stroke="#52525B" strokeWidth="1" />
      <text x="60" y="131" textAnchor="middle" fill="#E4E4E7" fontSize="8" fontWeight="bold">TRUNK</text>

      {/* M-Stripe Leather Strap Tag */}
      <g transform="translate(48, 142)">
        <rect x="0" y="0" width="7" height="18" fill="#009FE3" rx="1" />
        <rect x="8" y="0" width="7" height="18" fill="#0019A8" rx="1" />
        <rect x="16" y="0" width="7" height="18" fill="#E2001A" rx="1" />
      </g>
    </svg>
  </div>
);

// 4. Bengaluru Highway Road Sign Route Sticker
export const BengaluruRouteSticker = ({ className = "w-32 sm:w-38" }) => (
  <div
    className={`relative group inline-block cursor-pointer select-none transition-all duration-300 hover:scale-115 hover:rotate-3 hover:-translate-y-2 active:scale-95 ${className}`}
    style={{
      filter: 'drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 4px #ffffff) drop-shadow(0 10px 18px rgba(0,0,0,0.4))',
    }}
  >
    <svg viewBox="0 0 200 130" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* White Die-Cut Vinyl Outline */}
      <rect x="6" y="6" width="188" height="118" rx="18" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="4" />
      {/* Deep Highway Green/Blue Plate */}
      <rect x="12" y="12" width="176" height="106" rx="14" fill="#044E54" stroke="#FFFFFF" strokeWidth="2.5" />

      {/* Highway Shield Icon */}
      <rect x="22" y="22" width="42" height="24" rx="6" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />
      <text x="43" y="38" textAnchor="middle" fill="#000000" fontFamily="sans-serif" fontWeight="900" fontSize="12">
        NH 44
      </text>

      <text x="74" y="38" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="900" fontSize="15" letterSpacing="0.5">
        BENGALURU
      </text>

      {/* Speed & Lane Details */}
      <line x1="22" y1="56" x2="178" y2="56" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />

      <text x="24" y="78" fill="#99F6E4" fontFamily="sans-serif" fontWeight="bold" fontSize="10">
        PILOT: {CONFIG.senderName?.toUpperCase()}
      </text>
      <text x="24" y="94" fill="#FEF08A" fontFamily="sans-serif" fontWeight="900" fontSize="11">
        CO-PILOT: {CONFIG.recipientName?.toUpperCase()} ❤️
      </text>
      
      {/* Pin Icon */}
      <circle cx="162" cy="85" r="14" fill="#EF4444" stroke="#FFFFFF" strokeWidth="2" />
      <text x="162" y="89" textAnchor="middle" fill="#FFFFFF" fontSize="12">📍</text>
    </svg>
  </div>
);

// 5. VIP Passenger Pass Boarding Pass Ticket Sticker
export const VIPPassengerPassSticker = ({ className = "w-36 sm:w-44" }) => (
  <div
    className={`relative group inline-block cursor-pointer select-none transition-all duration-300 hover:scale-115 hover:-rotate-3 hover:-translate-y-2 active:scale-95 ${className}`}
    style={{
      filter: 'drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 4px #ffffff) drop-shadow(0 10px 18px rgba(0,0,0,0.4))',
    }}
  >
    <svg viewBox="0 0 220 110" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* White Die-Cut Vinyl Outline */}
      <rect x="6" y="6" width="208" height="98" rx="14" fill="#FFFFFF" stroke="#E4E4E7" strokeWidth="4" />
      {/* Holographic Carbon Card */}
      <rect x="10" y="10" width="200" height="90" rx="10" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />

      {/* Gold Top Banner */}
      <rect x="10" y="10" width="200" height="24" rx="4" fill="url(#goldGradient)" />
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#FCD34D" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <text x="20" y="26" fill="#78350F" fontFamily="sans-serif" fontWeight="900" fontSize="10" letterSpacing="1">
        ⭐ BMW M FAST PASS • VIP PASSENGER
      </text>

      {/* Ticket Details */}
      <text x="20" y="52" fill="#94A3B8" fontSize="8" fontWeight="bold">PASSENGER NAME</text>
      <text x="20" y="68" fill="#F8FAFC" fontFamily="sans-serif" fontWeight="900" fontSize="14" letterSpacing="0.5">
        {CONFIG.recipientName?.toUpperCase()}
      </text>

      <text x="135" y="52" fill="#94A3B8" fontSize="8" fontWeight="bold">SEAT</text>
      <text x="135" y="68" fill="#38BDF8" fontFamily="sans-serif" fontWeight="900" fontSize="14">
        1A (FRONT)
      </text>

      {/* Bottom Barcode */}
      <g transform="translate(20, 78)">
        {[2, 4, 8, 12, 16, 20, 26, 30, 36, 42, 48, 52, 58, 64, 70, 76, 82, 90, 96, 104, 110, 118, 126, 134, 142, 150].map((pos, i) => (
          <line key={i} x1={pos} y1="0" x2={pos} y2="14" stroke="#CBD5E1" strokeWidth={i % 3 === 0 ? 2.5 : 1.2} />
        ))}
      </g>
      <text x="184" y="90" textAnchor="end" fill="#F43F5E" fontSize="9" fontWeight="bold">
        UNLIMITED RIDES ❤️
      </text>
    </svg>
  </div>
);

// 6. M-Sport Tri-Color Heart Sticker
export const MHeartSticker = ({ className = "w-20 sm:w-24" }) => (
  <div
    className={`relative group inline-block cursor-pointer select-none transition-all duration-300 hover:scale-115 hover:rotate-6 hover:-translate-y-2 active:scale-95 ${className}`}
    style={{
      filter: 'drop-shadow(0 0 2px #ffffff) drop-shadow(0 0 4px #ffffff) drop-shadow(0 10px 18px rgba(0,0,0,0.4))',
    }}
  >
    <svg viewBox="0 0 140 130" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* White Die-Cut Vinyl Outline */}
      <path
        d="M 70 120 C 20 80 5 45 25 22 C 45 -2 65 10 70 24 C 75 10 95 -2 115 22 C 135 45 120 80 70 120 Z"
        fill="#FFFFFF"
        stroke="#E4E4E7"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Deep Obsidian Heart Core */}
      <path
        d="M 70 114 C 24 76 10 44 28 24 C 46 4 64 14 70 26 C 76 14 94 4 112 24 C 130 44 116 76 70 114 Z"
        fill="#0F172A"
      />
      {/* M-Motorsport Diagonal Stripes across the heart */}
      <g transform="translate(42, 38) rotate(-28)">
        <rect x="0" y="0" width="12" height="60" fill="#009FE3" />
        <rect x="14" y="0" width="12" height="60" fill="#0019A8" />
        <rect x="28" y="0" width="12" height="60" fill="#E2001A" />
      </g>
      {/* Glossy Sheen Flare */}
      <ellipse cx="44" cy="36" rx="14" ry="7" fill="#FFFFFF" opacity="0.35" transform="rotate(-30 44 36)" />
    </svg>
  </div>
);

// 7. Base Component Exports for Header & Lock Screen
export const BMWLogo = BMWDriftCarSticker;
export const BMWM3Car = BMWDriftCarSticker;
export const BMWMBadge = DriftTireBurnoutSticker;
export const StartEngineButton = BMWKeyFobSticker;
export const TurboBoostGauge = MHeartSticker;

export const RealBMWM4Sticker = BMWDriftCarSticker;
export const RealBMWLogoSticker = MHeartSticker;
export const RealStartEngineSticker = BMWKeyFobSticker;
export const RealMBadgeSticker = DriftTireBurnoutSticker;

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
