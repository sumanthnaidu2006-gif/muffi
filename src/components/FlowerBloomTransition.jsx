import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';

export const FlowerBloomTransition = ({ onAnimationComplete, theme = 'bmw' }) => {
  const [stage, setStage] = useState('entering'); // 'entering' -> 'held' -> 'sliding_up'

  useEffect(() => {
    // 1. Confetti burst customized by theme
    if (theme === 'bmw') {
      confetti({
        particleCount: 90,
        spread: 120,
        origin: { y: 0.5 },
        colors: ['#009FE3', '#0019A8', '#E2001A', '#38BDF8', '#1E293B', '#F8FAFC'],
      });
    } else {
      confetti({
        particleCount: 90,
        spread: 120,
        origin: { y: 0.5 },
        colors: ['#F59E0B', '#F97316', '#FBBF24', '#EA580C', '#FEF08A', '#FFEDD5'],
      });
    }

    // 2. Timing
    const holdTimer = setTimeout(() => {
      setStage('held');
    }, 350);

    const slideTimer = setTimeout(() => {
      setStage('sliding_up');
    }, 2400);

    const completeTimer = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, 3200);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(slideTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete, theme]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none">
      {/* Massive Fullscreen Flowing Floral Tapestry Wave */}
      <div
        className={`w-full h-full relative flex flex-col items-center justify-center transition-transform shadow-2xl ${
          stage === 'entering'
            ? 'translate-y-full'
            : stage === 'held'
            ? 'translate-y-0'
            : '-translate-y-full'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          transitionDuration: stage === 'sliding_up' ? '900ms' : '450ms',
          backgroundColor: theme === 'bmw' ? '#07090e' : '#fef08a',
        }}
      >
        {/* Fullscreen High-Resolution Flower Bed Wave based on Theme */}
        {theme === 'bmw' ? (
          <>
            {/* Wave of Deep Blue & Midnight Black Flowers */}
            <div
              className="absolute inset-0 bg-cover bg-center animate-pulse"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=2400&auto=format&fit=crop&q=90')`,
                filter: 'saturate(1.8) hue-rotate(180deg) brightness(0.65)',
              }}
            />
            {/* Secondary Layer: Midnight Sapphire Dark Floral Texture */}
            <div
              className="absolute inset-0 opacity-60 mix-blend-overlay bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=2400&auto=format&fit=crop&q=90')`,
                filter: 'brightness(0.5)',
              }}
            />
            {/* Deep M-Motorsport Blue & Black Ambient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-[#0019A8]/30 to-black/80" />
            <div className="absolute inset-0 bg-radial from-[#009FE3]/20 via-transparent to-black/70" />
          </>
        ) : (
          <>
            {/* Wave of Yellow & Vibrant Orange Flowers */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=2400&auto=format&fit=crop&q=90')`,
                filter: 'saturate(1.4) brightness(0.95)',
              }}
            />
            {/* Secondary Layer: Warm Orange & Golden Sunburst Petals */}
            <div
              className="absolute inset-0 opacity-40 mix-blend-overlay bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=2400&auto=format&fit=crop&q=90')`,
              }}
            />
            {/* Warm Golden Sunset Ambient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-amber-950/20 to-black/40" />
          </>
        )}

        {/* Floating Animated Flower Petals Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className={`absolute top-10 left-10 w-48 h-48 rounded-full blur-3xl animate-pulse ${
              theme === 'bmw' ? 'bg-blue-600/30' : 'bg-yellow-400/40'
            }`}
          />
          <div
            className={`absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl animate-pulse ${
              theme === 'bmw' ? 'bg-cyan-500/25' : 'bg-orange-500/40'
            }`}
          />
        </div>

        {/* Grand Centered Text - BIG & BOLD (Exact words preserved) */}
        <div className="relative z-10 text-center px-4 max-w-4xl transform animate-bloom-pop">
          
          {/* Top Subtitle */}
          <div className="mb-2">
            <span
              className={`font-cute text-xl sm:text-3xl font-bold uppercase tracking-widest ${
                theme === 'bmw'
                  ? 'text-sky-300 drop-shadow-[0_2px_12px_rgba(0,159,227,0.8)]'
                  : 'text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
              }`}
            >
              {theme === 'bmw' ? '🏎️ For ' : '🌸 For '}
              {CONFIG.recipientName}
              {theme === 'bmw' ? ' 🏎️' : ' 🌸'}
            </span>
          </div>

          {/* HUGE Heading Text (Exact text preserved) */}
          <h1 className="font-handwriting text-6xl sm:text-8xl md:text-9xl font-extrabold text-white tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)] leading-none my-2">
            A small Gift 🙂
          </h1>

          {/* Bottom Subtitle Tag */}
          <div className="mt-4">
            <span
              className={`font-cute text-lg sm:text-2xl font-bold px-8 py-2 rounded-full backdrop-blur-md shadow-2xl border ${
                theme === 'bmw'
                  ? 'text-sky-100 bg-[#0b0e14]/80 border-sky-500/40 shadow-sky-500/20'
                  : 'text-amber-100 bg-black/60 border-white/20'
              }`}
            >
              From: {CONFIG.senderName} ✨
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
