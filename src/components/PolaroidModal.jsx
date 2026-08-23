import React from 'react';
import { X, Heart, Calendar, Sparkles } from 'lucide-react';
import { BMWM3Car, BMWLogo, BMWMStripes } from './BMWComponents';
import { ChibiNaruto, ChibiHinata, ChibiKurama, KonohaStamp } from './NarutoCharacters';

export const PolaroidModal = ({ polaroid, onClose, theme = 'naruto' }) => {
  if (!polaroid) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content - Expanded Polaroid */}
      <div className="relative z-10 bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border-4 border-zinc-200 transform animate-bloom-pop">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors active:scale-95 z-40"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Floating Corner Badge based on theme */}
        {theme === 'bmw' ? (
          <div className="absolute -top-6 -left-4 transform -rotate-12 animate-wiggle z-30">
            <BMWM3Car className="w-20 h-14" />
          </div>
        ) : (
          <div className="absolute -top-6 -left-4 transform -rotate-12 animate-bounce z-30">
            <ChibiNaruto className="w-16 h-16" expression="wink" />
          </div>
        )}

        {/* Polaroid Image */}
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner border border-zinc-200 relative group">
          <img
            src={polaroid.image}
            alt={polaroid.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Washi Tape Strip at the top */}
        <div
          className={`absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 -rotate-1 opacity-80 ${
            theme === 'bmw' ? 'bg-gradient-to-r from-[#009FE3] via-[#0019A8] to-[#E2001A]' : 'washi-tape-yellow'
          }`}
        />

        {/* Story & Details (Exact words preserved) */}
        <div className="mt-5 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-cute text-zinc-700 font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>{polaroid.date}</span>
          </div>

          <h3 className="font-handwriting text-3xl font-bold text-zinc-950 mt-1">
            {polaroid.title}
          </h3>

          <p className="font-cute text-lg text-zinc-800 mt-2 px-2 leading-relaxed">
            "{polaroid.caption}"
          </p>
        </div>
      </div>
    </div>
  );
};
