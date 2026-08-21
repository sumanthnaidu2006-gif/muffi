import React from 'react';

// Cute Chibi Naruto
export const ChibiNaruto = ({ className = "w-24 h-24", expression = "happy" }) => (
  <svg viewBox="0 0 160 160" className={`filter drop-shadow-md select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hairGradNaruto" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF066" />
        <stop offset="100%" stopColor="#F5B300" />
      </linearGradient>
      <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF4E6" />
        <stop offset="100%" stopColor="#FCD5B5" />
      </linearGradient>
      <linearGradient id="headbandGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2563EB" />
        <stop offset="100%" stopColor="#1E3A8A" />
      </linearGradient>
    </defs>
    
    {/* Spiky Hair Back */}
    <path d="M 30 75 Q 15 50 25 35 Q 35 30 45 40 Q 40 20 60 15 Q 75 12 80 28 Q 95 10 115 18 Q 125 25 120 40 Q 135 30 145 45 Q 140 65 130 80 Z" fill="url(#hairGradNaruto)" stroke="#D97706" strokeWidth="2.5" strokeLinejoin="round" />
    
    {/* Ears */}
    <circle cx="34" cy="85" r="10" fill="#FCD5B5" stroke="#E59866" strokeWidth="1.5" />
    <circle cx="126" cy="85" r="10" fill="#FCD5B5" stroke="#E59866" strokeWidth="1.5" />
    
    {/* Head Base */}
    <rect x="36" y="48" width="88" height="76" rx="38" fill="url(#skinGrad)" stroke="#E59866" strokeWidth="2" />
    
    {/* Headband Cloth */}
    <path d="M 36 54 Q 80 46 124 54 L 122 72 Q 80 64 38 72 Z" fill="url(#headbandGrad)" stroke="#1E3A8A" strokeWidth="1.5" />
    {/* Metal Plate */}
    <rect x="56" y="52" width="48" height="20" rx="4" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.5" />
    {/* Plate Rivets */}
    <circle cx="60" cy="56" r="1.5" fill="#475569" />
    <circle cx="60" cy="68" r="1.5" fill="#475569" />
    <circle cx="100" cy="56" r="1.5" fill="#475569" />
    <circle cx="100" cy="68" r="1.5" fill="#475569" />
    {/* Konoha Leaf Symbol */}
    <path d="M 76 65 C 72 63 72 58 78 57 C 84 56 87 61 83 66 C 80 69 75 67 76 65" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    <path d="M 74 65 L 70 66" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
    <path d="M 82 56 L 85 53" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />

    {/* Hair Bangs */}
    <path d="M 38 52 Q 48 62 55 52 Q 68 64 80 50 Q 92 64 105 52 Q 112 62 122 52" fill="url(#hairGradNaruto)" stroke="#D97706" strokeWidth="2" strokeLinejoin="round" />

    {/* Eyes */}
    {expression === "wink" ? (
      <>
        {/* Left Winking Eye */}
        <path d="M 52 88 Q 62 80 72 88" fill="none" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />
        {/* Right Big Sparkle Eye */}
        <ellipse cx="98" cy="88" rx="10" ry="12" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
        <ellipse cx="98" cy="88" rx="6" ry="8" fill="#0C4A6E" />
        <circle cx="95" cy="84" r="3.5" fill="#FFFFFF" />
        <circle cx="101" cy="92" r="1.8" fill="#FFFFFF" />
      </>
    ) : (
      <>
        {/* Big Cute Blue Eyes */}
        <ellipse cx="62" cy="88" rx="9" ry="11" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
        <ellipse cx="62" cy="88" rx="5.5" ry="7" fill="#0C4A6E" />
        <circle cx="59" cy="84" r="3.2" fill="#FFFFFF" />
        <circle cx="65" cy="91" r="1.6" fill="#FFFFFF" />

        <ellipse cx="98" cy="88" rx="9" ry="11" fill="#0284C7" stroke="#0369A1" strokeWidth="1.5" />
        <ellipse cx="98" cy="88" rx="5.5" ry="7" fill="#0C4A6E" />
        <circle cx="95" cy="84" r="3.2" fill="#FFFFFF" />
        <circle cx="101" cy="91" r="1.6" fill="#FFFFFF" />
      </>
    )}

    {/* Whiskers Marks */}
    <g stroke="#E59866" strokeWidth="2" strokeLinecap="round">
      <line x1="42" y1="92" x2="52" y2="94" />
      <line x1="40" y1="98" x2="52" y2="98" />
      <line x1="42" y1="104" x2="52" y2="102" />

      <line x1="108" y1="94" x2="118" y2="92" />
      <line x1="108" y1="98" x2="120" y2="98" />
      <line x1="108" y1="102" x2="118" y2="104" />
    </g>

    {/* Rosy Blush */}
    <ellipse cx="50" cy="98" rx="8" ry="4" fill="#F43F5E" opacity="0.35" />
    <ellipse cx="110" cy="98" rx="8" ry="4" fill="#F43F5E" opacity="0.35" />

    {/* Cute Mouth */}
    <path d="M 72 105 Q 80 116 88 105 Z" fill="#E11D48" stroke="#BE123C" strokeWidth="1.5" />
    <path d="M 75 106 Q 80 110 85 106" fill="#FFFFFF" />

    {/* Orange Collar */}
    <path d="M 45 120 L 35 145 Q 80 155 125 145 L 115 120 Q 80 128 45 120 Z" fill="#EA580C" stroke="#C2410C" strokeWidth="2" />
    <path d="M 60 122 L 68 145 M 100 122 L 92 145" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Cute Chibi Hinata
export const ChibiHinata = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 160 160" className={`filter drop-shadow-md select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hairGradHinata" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#4338CA" />
        <stop offset="100%" stopColor="#1E1B4B" />
      </linearGradient>
    </defs>

    {/* Long Dark Blue Hair Back */}
    <path d="M 32 60 Q 20 100 24 140 Q 40 148 50 135 L 48 85 Q 80 70 112 85 L 110 135 Q 120 148 136 140 Q 140 100 128 60 Z" fill="url(#hairGradHinata)" stroke="#1E1B4B" strokeWidth="2" />

    {/* Ears */}
    <circle cx="36" cy="85" r="9" fill="#FFF1E6" stroke="#FBBF24" strokeWidth="1" />
    <circle cx="124" cy="85" r="9" fill="#FFF1E6" stroke="#FBBF24" strokeWidth="1" />

    {/* Face */}
    <rect x="38" y="48" width="84" height="74" rx="37" fill="#FFF5EB" stroke="#FED7AA" strokeWidth="1.5" />

    {/* Hime Bangs */}
    <path d="M 36 50 Q 80 40 124 50 L 126 78 Q 112 82 108 72 Q 95 80 80 72 Q 65 80 52 72 Q 48 82 34 78 Z" fill="url(#hairGradHinata)" stroke="#1E1B4B" strokeWidth="2" />

    {/* Lavender Byakugan Eyes */}
    <ellipse cx="60" cy="88" rx="9" ry="11" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="2" />
    <circle cx="60" cy="88" r="5" fill="#DDD6FE" />
    <circle cx="58" cy="85" r="3" fill="#FFFFFF" />

    <ellipse cx="100" cy="88" rx="9" ry="11" fill="#EDE9FE" stroke="#C4B5FD" strokeWidth="2" />
    <circle cx="100" cy="88" r="5" fill="#DDD6FE" />
    <circle cx="98" cy="85" r="3" fill="#FFFFFF" />

    {/* Heavy Shy Blush */}
    <ellipse cx="48" cy="98" rx="10" ry="5" fill="#FB7185" opacity="0.55" />
    <ellipse cx="112" cy="98" rx="10" ry="5" fill="#FB7185" opacity="0.55" />
    {/* Blush Lines */}
    <line x1="44" y1="97" x2="52" y2="99" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="108" y1="99" x2="116" y2="97" stroke="#E11D48" strokeWidth="1.5" strokeLinecap="round" />

    {/* Shy Sweet Smile */}
    <path d="M 75 106 Q 80 110 85 106" fill="none" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" />

    {/* Cozy Lavender Hoodie/Jacket */}
    <path d="M 40 122 L 30 148 Q 80 158 130 148 L 120 122 Q 80 132 40 122 Z" fill="#DDD6FE" stroke="#8B5CF6" strokeWidth="2" />
    <path d="M 55 125 Q 80 140 105 125" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="1.5" />
    <circle cx="80" cy="138" r="4" fill="#C4B5FD" />
  </svg>
);

// Cute Chibi Sasuke
export const ChibiSasuke = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 160 160" className={`filter drop-shadow-md select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hairGradSasuke" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
    </defs>

    {/* Spiky Ducktail Hair Back */}
    <path d="M 28 65 Q 10 40 22 25 Q 32 30 40 38 Q 45 15 65 15 Q 80 10 90 20 Q 110 10 130 20 Q 145 35 135 60 Q 155 75 140 95 L 128 75 L 32 75 Q 15 85 28 65 Z" fill="url(#hairGradSasuke)" stroke="#0F172A" strokeWidth="2.5" />

    {/* Face */}
    <rect x="36" y="48" width="88" height="76" rx="38" fill="#FFF7ED" stroke="#FED7AA" strokeWidth="2" />

    {/* Side Bangs */}
    <path d="M 34 50 Q 55 85 45 105 Q 40 85 48 55 Z" fill="url(#hairGradSasuke)" />
    <path d="M 126 50 Q 105 85 115 105 Q 120 85 112 55 Z" fill="url(#hairGradSasuke)" />
    <path d="M 45 50 Q 80 65 115 50 Q 80 40 45 50 Z" fill="url(#hairGradSasuke)" />

    {/* Cool Dark Eyes with Sparkle */}
    <ellipse cx="62" cy="86" rx="8" ry="10" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
    <circle cx="60" cy="83" r="2.8" fill="#FFFFFF" />

    <ellipse cx="98" cy="86" rx="8" ry="10" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
    <circle cx="96" cy="83" r="2.8" fill="#FFFFFF" />

    {/* Subtle tsundere blush */}
    <ellipse cx="50" cy="96" rx="6" ry="3" fill="#FB7185" opacity="0.4" />
    <ellipse cx="110" cy="96" rx="6" ry="3" fill="#FB7185" opacity="0.4" />

    {/* Small smirk / cute pout */}
    <path d="M 76 104 Q 82 108 86 103" fill="none" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" />

    {/* High Collar Blue Shirt */}
    <path d="M 44 122 L 34 148 Q 80 156 126 148 L 116 122 Q 80 128 44 122 Z" fill="#1E3A8A" stroke="#172554" strokeWidth="2" />
    <path d="M 52 115 L 64 135 L 80 126 L 96 135 L 108 115 Q 80 124 52 115 Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
    {/* Uchiha Fan Crest mini on collar */}
    <circle cx="80" cy="142" r="5" fill="#EF4444" />
    <path d="M 75 142 A 5 5 0 0 1 85 142 Z" fill="#FFFFFF" />
    <rect x="79" y="142" width="2" height="4" fill="#FFFFFF" />
  </svg>
);

// Cute Chibi Kakashi
export const ChibiKakashi = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 160 160" className={`filter drop-shadow-md select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hairGradKakashi" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>
    </defs>

    {/* Spiky Silver Hair Swept Left */}
    <path d="M 30 65 Q 10 35 25 15 Q 40 25 55 10 Q 75 15 90 8 Q 115 15 125 30 Q 140 45 130 70 Z" fill="url(#hairGradKakashi)" stroke="#94A3B8" strokeWidth="2" />

    {/* Face */}
    <rect x="38" y="48" width="84" height="74" rx="37" fill="#FFF5EB" stroke="#FED7AA" strokeWidth="1.5" />

    {/* Tilted Headband Covering Left Eye */}
    <path d="M 32 58 L 126 44 L 128 66 L 34 80 Z" fill="#1E3A8A" stroke="#172554" strokeWidth="1.5" />
    {/* Metal Plate tilted */}
    <g transform="rotate(-7 80 62)">
      <rect x="56" y="52" width="48" height="18" rx="3" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.2" />
      {/* Konoha symbol */}
      <path d="M 76 62 C 73 60 73 57 78 56 C 83 55 85 59 82 63 C 80 65 76 64 76 62" fill="none" stroke="#1E293B" strokeWidth="1.6" strokeLinecap="round" />
    </g>

    {/* Visible Right Eye (Relaxed/Smiling curve) */}
    <path d="M 90 85 Q 98 80 106 86" fill="none" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />
    <ellipse cx="98" cy="87" rx="3" ry="1.5" fill="#FB7185" opacity="0.6" />

    {/* Mask Covering Lower Face */}
    <path d="M 40 88 Q 80 92 120 88 L 118 122 Q 80 134 42 122 Z" fill="#334155" stroke="#1E293B" strokeWidth="2" />
    <path d="M 65 98 Q 80 106 95 98" fill="none" stroke="#475569" strokeWidth="1.5" />

    {/* Green Jonin Vest */}
    <path d="M 42 122 L 32 148 Q 80 156 128 148 L 118 122 Q 80 130 42 122 Z" fill="#15803D" stroke="#166534" strokeWidth="2" />
    <rect x="52" y="132" width="16" height="14" rx="2" fill="#166534" stroke="#14532D" strokeWidth="1" />
    <rect x="92" y="132" width="16" height="14" rx="2" fill="#166534" stroke="#14532D" strokeWidth="1" />
  </svg>
);

// Cute Baby Kurama (Nine Tails)
export const ChibiKurama = ({ className = "w-24 h-24" }) => (
  <svg viewBox="0 0 180 180" className={`filter drop-shadow-md select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kuramaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FB923C" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>

    {/* Nine Tails Fan in Background */}
    <g fill="#F97316" stroke="#C2410C" strokeWidth="1.5" opacity="0.95">
      <path d="M 30 110 Q 10 70 25 50 Q 40 70 50 105 Z" />
      <path d="M 45 115 Q 25 55 45 35 Q 60 60 65 110 Z" />
      <path d="M 60 120 Q 50 45 70 25 Q 85 55 80 115 Z" />
      <path d="M 120 120 Q 130 45 110 25 Q 95 55 100 115 Z" />
      <path d="M 135 115 Q 155 55 135 35 Q 120 60 115 110 Z" />
      <path d="M 150 110 Q 170 70 155 50 Q 140 70 130 105 Z" />
    </g>

    {/* Fox Ears */}
    <polygon points="50,70 30,20 75,50" fill="url(#kuramaGrad)" stroke="#C2410C" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="48,64 36,30 68,52" fill="#1E1B4B" />

    <polygon points="130,70 150,20 105,50" fill="url(#kuramaGrad)" stroke="#C2410C" strokeWidth="2" strokeLinejoin="round" />
    <polygon points="132,64 144,30 112,52" fill="#1E1B4B" />

    {/* Head */}
    <ellipse cx="90" cy="85" rx="44" ry="38" fill="url(#kuramaGrad)" stroke="#C2410C" strokeWidth="2" />

    {/* Cute Black Eye Outlines */}
    <path d="M 60 72 Q 74 65 80 78 Q 72 86 58 78 Z" fill="#18181B" />
    <path d="M 120 72 Q 106 65 100 78 Q 108 86 122 78 Z" fill="#18181B" />

    {/* Big Red/Crimson Cute Eyes */}
    <ellipse cx="70" cy="76" rx="5" ry="6" fill="#DC2626" />
    <circle cx="68" cy="74" r="2.2" fill="#FFFFFF" />

    <ellipse cx="110" cy="76" rx="5" ry="6" fill="#DC2626" />
    <circle cx="108" cy="74" r="2.2" fill="#FFFFFF" />

    {/* Cute Snout & Smile */}
    <path d="M 80 84 Q 90 92 100 84 Q 90 100 80 84 Z" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1" />
    <polygon points="87,88 93,88 90,92" fill="#18181B" />
    <path d="M 86 94 Q 90 98 94 94" fill="none" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" />

    {/* Little Cute Paws */}
    <circle cx="70" cy="125" r="14" fill="url(#kuramaGrad)" stroke="#C2410C" strokeWidth="1.5" />
    <circle cx="110" cy="125" r="14" fill="url(#kuramaGrad)" stroke="#C2410C" strokeWidth="1.5" />
    <ellipse cx="90" cy="130" rx="30" ry="20" fill="url(#kuramaGrad)" stroke="#C2410C" strokeWidth="1.5" />
  </svg>
);

// Steaming Ichiraku Ramen Bowl
export const RamenSticker = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 120 120" className={`filter drop-shadow-md select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
    {/* Steam Hearts */}
    <path d="M 45 25 Q 40 15 48 8 Q 55 15 50 25" fill="none" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <path d="M 75 25 Q 70 12 78 5 Q 85 12 80 25" fill="none" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

    {/* Bowl Base */}
    <path d="M 20 50 Q 20 105 60 105 Q 100 105 100 50 Z" fill="#DC2626" stroke="#991B1B" strokeWidth="3" />
    <path d="M 20 50 Q 60 62 100 50 Q 60 38 20 50 Z" fill="#F87171" stroke="#991B1B" strokeWidth="2" />
    
    {/* Broth & Noodles */}
    <ellipse cx="60" cy="50" rx="36" ry="10" fill="#FDE047" />
    
    {/* Narutomaki Fish Cake */}
    <circle cx="50" cy="48" r="8" fill="#FFFFFF" stroke="#F43F5E" strokeWidth="1.5" />
    <path d="M 48 48 Q 50 44 53 48 Q 50 51 47 48" fill="none" stroke="#F43F5E" strokeWidth="1.5" strokeLinecap="round" />

    {/* Boiled Egg Half */}
    <ellipse cx="70" cy="48" rx="8" ry="6" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
    <circle cx="70" cy="48" r="4" fill="#F59E0B" />

    {/* Chopsticks */}
    <line x1="30" y1="35" x2="95" y2="20" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
    <line x1="30" y1="40" x2="95" y2="24" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Konoha Leaf Crest Stamp
export const KonohaStamp = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={`filter drop-shadow-sm select-none ${className}`} xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="44" fill="#FEF08A" stroke="#CA8A04" strokeWidth="2.5" strokeDasharray="4 2" />
    <circle cx="50" cy="50" r="36" fill="#FEF9C3" stroke="#EAB308" strokeWidth="1.5" />
    <path d="M 52 56 C 45 52 45 42 56 40 C 67 38 72 47 65 56 C 60 62 50 59 52 56" fill="none" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M 47 56 L 40 58" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M 64 40 L 70 34" stroke="#B45309" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);
