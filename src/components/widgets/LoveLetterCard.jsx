import React from 'react';
import { Heart, BookOpen, Quote, Sparkles } from 'lucide-react';
import { CONFIG } from '../../config';
import { BMWLogo, BMWMStripes } from '../BMWComponents';
import { ChibiKakashi } from '../NarutoCharacters';

export const LoveLetterCard = ({ theme = 'naruto' }) => {
  return (
    <div className="relative group">
      {/* Corner badge based on theme */}
      {theme === 'bmw' ? (
        <div className="absolute -top-10 -right-4 z-20 transform rotate-6 hover:scale-110 transition-transform">
          <BMWLogo className="w-14 h-14" />
        </div>
      ) : (
        <div className="absolute -top-12 -right-6 z-20 transform rotate-6 hover:scale-110 transition-transform">
          <ChibiKakashi className="w-16 h-16" />
        </div>
      )}

      {/* Main Letter Card */}
      <div className="relative bg-[#fffdf5] border-2 border-[#e6d8ba] rounded-3xl p-6 shadow-scrapbook hover:shadow-xl transition-all duration-300">
        
        {/* Dictionary Definition Block (Exact words preserved) */}
        <div className="pb-4 border-b border-dashed border-[#e6d8ba]/80 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-serif italic font-bold text-2xl text-[#8c7a65]">
              {CONFIG.letter.word}
            </span>
            <span className="text-xs font-mono text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
              {CONFIG.letter.type}
            </span>
          </div>
          <p className="font-cute text-sm text-stone-600 mt-1 italic leading-snug">
            "{CONFIG.letter.definition}"
          </p>
        </div>

        {/* Heartfelt Letter Message (Exact words preserved) */}
        <div className="relative">
          <Quote className="w-8 h-8 text-amber-200/50 absolute -top-2 -left-2 -z-0" />
          <p className="font-handwriting text-2xl text-stone-800 leading-relaxed relative z-10 pl-2">
            {CONFIG.letter.message}
          </p>
        </div>

        {/* Sign-off */}
        <div className="mt-4 pt-3 border-t border-dashed border-[#e6d8ba]/80 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-rose-500 font-cute text-sm font-bold">
            <Heart className="w-4 h-4 fill-rose-500" />
            <span>Always & Forever</span>
          </div>
          <div className="flex items-center gap-2">
            {theme === 'bmw' && <BMWMStripes className="h-2 w-12" />}
            <span className="font-handwriting text-xl text-stone-800 font-bold">
              — {CONFIG.senderName} ❤️
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
