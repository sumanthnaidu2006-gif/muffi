import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';

export const FlowerBloomTransition = ({ onAnimationComplete }) => {
  const [stage, setStage] = useState('entering'); // 'entering' -> 'held' -> 'sliding_up'

  useEffect(() => {
    // 1. Grand floral confetti burst
    confetti({
      particleCount: 80,
      spread: 120,
      origin: { y: 0.5 },
      colors: ['#fde047', '#f59e0b', '#fb7185', '#f43f5e', '#fed7aa', '#86efac'],
    });

    // 2. Timing
    const holdTimer = setTimeout(() => {
      setStage('held');
    }, 350);

    const slideTimer = setTimeout(() => {
      setStage('sliding_up');
    }, 2200);

    const completeTimer = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, 3000);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(slideTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Massive Fullscreen Floral Tapestry Curtain */}
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
          backgroundColor: '#fef08a',
        }}
      >
        {/* Fullscreen High-Resolution Flower Bed */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=2400&auto=format&fit=crop&q=90')`,
            filter: 'saturate(1.25) brightness(0.92)',
          }}
        />

        {/* Warm Golden & Rose Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-amber-950/20 to-black/30" />

        {/* Grand Centered Text - BIG & BOLD */}
        <div className="relative z-10 text-center px-4 max-w-4xl transform animate-bloom-pop">
          
          {/* Top Subtitle */}
          <div className="mb-2">
            <span className="font-cute text-xl sm:text-3xl text-amber-200 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] uppercase tracking-widest">
              🌸 For {CONFIG.recipientName} 🌸
            </span>
          </div>

          {/* HUGE Heading Text */}
          <h1 className="font-handwriting text-6xl sm:text-8xl md:text-9xl font-extrabold text-white tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] leading-none my-2">
            A small Gift 🙂
          </h1>

          {/* Bottom Subtitle Tag */}
          <div className="mt-4">
            <span className="font-cute text-lg sm:text-2xl text-amber-100 font-bold bg-black/60 px-8 py-2 rounded-full backdrop-blur-md shadow-2xl border border-white/20">
              From: {CONFIG.senderName} ✨
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
