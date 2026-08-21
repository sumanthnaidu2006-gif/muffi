import React, { useRef, useEffect } from 'react';
import { HelpCircle, Sparkles, Volume2, Music } from 'lucide-react';
import { BMWMWheelRim, BMWMStripes } from '../BMWComponents';
import { ChibiKurama } from '../NarutoCharacters';

export const VinylRecord = ({ isPlaying, onTogglePlay, theme = 'bmw' }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log('Audio play error:', err);
        });
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isPlaying]);

  return (
    <div className="relative flex flex-col items-center select-none group w-full">
      {/* Hidden local audio element for 100% reliable instant playback */}
      <audio
        ref={audioRef}
        src="/gangnam.mp3"
        preload="auto"
        loop
      />

      {/* Top Corner Badge based on theme */}
      {theme === 'bmw' ? (
        <div className="absolute -top-8 -left-2 z-20 transform -rotate-12 hover:scale-110 transition-transform">
          <BMWMStripes className="h-4 w-20" />
        </div>
      ) : (
        <div className="absolute -top-10 -left-4 z-20 transform -rotate-12 hover:scale-110 transition-transform">
          <ChibiKurama className="w-16 h-16" />
        </div>
      )}

      {/* Disc Container (Click to Play/Pause) */}
      <div
        onClick={onTogglePlay}
        className="relative cursor-pointer transition-transform duration-300 hover:scale-105"
        title={isPlaying ? 'Pause secret track' : 'Play secret track'}
      >
        {theme === 'bmw' ? (
          <div className="relative">
            <BMWMWheelRim className="w-40 h-40 sm:w-48 sm:h-48" isSpinning={isPlaying} />
            {/* Center Mystery Badge Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-black/85 border border-zinc-500 shadow-xl flex flex-col items-center justify-center text-center">
                <span className="font-extrabold text-[7px] text-zinc-300 uppercase tracking-wider leading-none">
                  TOP SECRET
                </span>
                <span className="font-handwriting text-base font-extrabold text-amber-300 leading-tight">
                  ???
                </span>
                <span className="text-[6.5px] text-zinc-400 font-bold leading-none">
                  MYSTERY 🤫
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#18181b] border-4 border-zinc-700 shadow-2xl flex items-center justify-center relative overflow-hidden ${
              isPlaying ? 'animate-spin-slow' : ''
            }`}
            style={{
              backgroundImage: `repeating-radial-gradient(#18181b 0, #18181b 3px, #27272a 4px, #18181b 5px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none" />
            <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 border-2 border-amber-600 flex flex-col items-center justify-center text-center shadow-inner relative z-10 p-1">
              <span className="font-extrabold text-[8px] text-zinc-950 uppercase tracking-widest leading-none">
                TOP SECRET
              </span>
              <span className="font-handwriting text-xl sm:text-2xl font-extrabold text-rose-900 leading-tight">
                ???
              </span>
              <span className="text-[7.5px] text-amber-950 font-bold leading-none">
                MYSTERY TRACK 🤫
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-700 mt-0.5" />
            </div>
            {/* Tonearm */}
            <div
              className={`absolute top-2 right-2 w-16 h-20 pointer-events-none transition-transform duration-500 origin-top-right ${
                isPlaying ? 'rotate-12' : '-rotate-12'
              }`}
            >
              <div className="w-1.5 h-14 bg-zinc-400 ml-auto mr-3 rounded-full shadow" />
              <div className="w-3 h-4 bg-zinc-800 ml-auto mr-2 rounded-sm shadow" />
            </div>
          </div>
        )}
      </div>

      {/* Disc Subtitle - Mystery & Surprise (Exact words preserved) */}
      <div className="mt-3 text-center">
        <p className="font-cute text-xs text-amber-900 font-bold flex items-center justify-center gap-1">
          {isPlaying ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
              <span className="text-rose-700">🎵 Secret Song Playing... 💃🕺</span>
            </>
          ) : (
            <>
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>Mystery Track ❓ (Tap vinyl to play!)</span>
            </>
          )}
        </p>
        <span className="text-[10px] text-stone-500 font-cute block mt-0.5">
          {isPlaying ? '▶ Click vinyl disc to pause' : '▶ Click vinyl disc directly to hear the song'}
        </span>
      </div>
    </div>
  );
};
