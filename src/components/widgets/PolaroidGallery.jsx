import React, { useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { CONFIG } from '../../config';
import { BMWM3Car, BMWLogo, BMWMStripes } from '../BMWComponents';
import { ChibiNaruto, ChibiSasuke, ChibiHinata, ChibiKurama } from '../NarutoCharacters';
import { PolaroidModal } from '../PolaroidModal';

export const PolaroidGallery = ({ theme = 'bmw' }) => {
  const [selectedPolaroid, setSelectedPolaroid] = useState(null);

  const getCornerBadge = (item, index) => {
    if (theme === 'bmw') {
      return index % 2 === 0 ? <BMWM3Car className="w-12 h-10" /> : <BMWLogo className="w-8 h-8" />;
    }
    switch (item.chibiBadge) {
      case 'naruto':
        return <ChibiNaruto className="w-10 h-10" expression="happy" />;
      case 'hinata':
        return <ChibiHinata className="w-10 h-10" />;
      case 'sasuke':
        return <ChibiSasuke className="w-10 h-10" />;
      case 'kurama':
        return <ChibiKurama className="w-10 h-10" />;
      default:
        return <ChibiNaruto className="w-10 h-10" expression="wink" />;
    }
  };

  return (
    <>
      <div className="relative">
        {/* Section Header with Washi Tape (Exact words preserved) */}
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-2">
            <span className="font-handwriting text-3xl font-bold text-zinc-900">
              my fav 📷
            </span>
            {theme === 'bmw' && <BMWMStripes className="h-2 w-12" />}
          </div>
          <span className="text-xs font-cute text-amber-700/70">
            tap photos to expand ✨
          </span>
        </div>

        {/* Gallery Grid / Collage Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {CONFIG.polaroids.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedPolaroid(item)}
              className={`group relative cursor-pointer transform ${item.rotation} hover:rotate-0 hover:scale-105 transition-all duration-300`}
            >
              {/* Washi Tape Accent */}
              <div
                className={`absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 z-20 opacity-90 ${
                  index % 2 === 0
                    ? 'washi-tape-yellow'
                    : 'washi-tape-pink'
                } -rotate-2`}
              />

              {/* Corner Badge */}
              <div className="absolute -bottom-3 -right-3 z-30 transform rotate-6 group-hover:scale-110 transition-transform">
                {getCornerBadge(item, index)}
              </div>

              {/* Polaroid Frame */}
              <div className="polaroid-frame p-3 pb-5 rounded-xl bg-white border border-stone-200 shadow-md">
                
                {/* Photo */}
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-stone-100 shadow-inner relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors" />
                </div>

                {/* Caption on Polaroid Bottom (Exact words preserved) */}
                <div className="mt-3 text-center">
                  <h4 className="font-handwriting text-xl font-bold text-stone-800 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-cute text-xs text-stone-500 mt-0.5">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      {selectedPolaroid && (
        <PolaroidModal
          polaroid={selectedPolaroid}
          onClose={() => setSelectedPolaroid(null)}
          theme={theme}
        />
      )}
    </>
  );
};
