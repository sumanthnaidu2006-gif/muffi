import React, { useEffect, useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';

export const FlowerBloomTransition = ({ onAnimationComplete, theme = 'bmw' }) => {
  // Stages: 'flowing_in' -> 'hovering' -> 'gust_away'
  const [stage, setStage] = useState('flowing_in');

  // Generate 32 unique flower particles with randomized wind physics
  const flowerParticles = useMemo(() => {
    const isBMW = theme === 'bmw';
    const items = [];
    const count = 28;

    for (let i = 0; i < count; i++) {
      // Grid positioning with randomized offsets
      const col = (i % 6) / 5;
      const row = Math.floor(i / 6) / 4;
      const x = 8 + col * 84 + (Math.random() * 10 - 5);
      const y = 10 + row * 80 + (Math.random() * 10 - 5);

      // Random wind scatter directions (blown away to the top-right / top-left by sudden gust)
      const gustAngle = -35 + Math.random() * 50; // upwards angled blast
      const gustDistance = 140 + Math.random() * 80;
      const gustX = Math.cos((gustAngle * Math.PI) / 180) * gustDistance;
      const gustY = Math.sin((gustAngle * Math.PI) / 180) * -gustDistance;
      const spin = (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 540);

      items.push({
        id: i,
        x: `${x}%`,
        y: `${y}%`,
        size: 70 + Math.floor(Math.random() * 65), // 70px to 135px
        type: i % 4, // 0: primary rose, 1: dahlia, 2: blossom, 3: single petal
        enterDelay: (i * 25) + Math.random() * 50,
        floatDuration: 2.5 + Math.random() * 1.5,
        gustX: `${gustX}vw`,
        gustY: `${gustY}vh`,
        gustSpin: `${spin}deg`,
        gustDelay: (i * 20) + Math.random() * 60,
        colorType: isBMW
          ? i % 3 === 0 ? 'sapphire' : i % 3 === 1 ? 'black' : 'cyan'
          : i % 3 === 0 ? 'yellow' : i % 3 === 1 ? 'orange' : 'amber',
      });
    }
    return items;
  }, [theme]);

  useEffect(() => {
    // 1. Initial Flow In (0ms -> 500ms)
    const hoverTimer = setTimeout(() => {
      setStage('hovering');
    }, 450);

    // 2. Sudden Powerful Gust of Wind! (at 2.0s)
    const gustTimer = setTimeout(() => {
      setStage('gust_away');

      // Trigger high-velocity scatter confetti timed with the wind gust!
      confetti({
        particleCount: 70,
        spread: 140,
        origin: { x: 0.2, y: 0.8 },
        angle: 55,
        velocity: 45,
        colors: theme === 'bmw'
          ? ['#009FE3', '#0019A8', '#38BDF8', '#1E293B', '#E2001A']
          : ['#F59E0B', '#F97316', '#FBBF24', '#EA580C', '#FEF08A'],
      });
    }, 2000);

    // 3. Complete Transition (at 2.85s)
    const completeTimer = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, 2850);

    return () => {
      clearTimeout(hoverTimer);
      clearTimeout(gustTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete, theme]);

  const isBMW = theme === 'bmw';

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none">
      {/* Background Soft Atmospheric Blur Veil */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          stage === 'gust_away' ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          background: isBMW
            ? 'radial-gradient(circle at center, rgba(11, 16, 25, 0.95) 0%, rgba(6, 8, 12, 0.98) 100%)'
            : 'radial-gradient(circle at center, rgba(254, 243, 199, 0.95) 0%, rgba(254, 215, 170, 0.98) 100%)',
          backdropFilter: 'blur(10px)',
        }}
      />

      {/* Wind Gust Streaks across the screen when gust hits */}
      {stage === 'gust_away' && (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <svg className="w-full h-full opacity-60" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path
              d="M -100 800 Q 400 400 1100 200"
              fill="none"
              stroke={isBMW ? '#38BDF8' : '#FBBF24'}
              strokeWidth="12"
              strokeDasharray="200 400"
              className="animate-wind-streak"
            />
            <path
              d="M -50 950 Q 500 550 1150 350"
              fill="none"
              stroke={isBMW ? '#009FE3' : '#F97316'}
              strokeWidth="8"
              strokeDasharray="150 350"
              className="animate-wind-streak"
              style={{ animationDelay: '60ms' }}
            />
            <path
              d="M -150 650 Q 350 250 1050 50"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeDasharray="100 300"
              className="animate-wind-streak"
              style={{ animationDelay: '120ms' }}
            />
          </svg>
        </div>
      )}

      {/* Massive Field of Individual Blooming Flowers & Flying Petals */}
      <div className="relative w-full h-full overflow-hidden">
        {flowerParticles.map((fl) => {
          const isEntering = stage === 'flowing_in';
          const isGustAway = stage === 'gust_away';

          return (
            <div
              key={fl.id}
              className="absolute pointer-events-none transition-all"
              style={{
                left: fl.x,
                top: fl.y,
                transform: isEntering
                  ? `translate3d(0, 100vh, 0) scale(0.2) rotate(-90deg)`
                  : isGustAway
                  ? `translate3d(${fl.gustX}, ${fl.gustY}, 0) scale(0.4) rotate(${fl.gustSpin})`
                  : `translate3d(0, 0, 0) scale(1) rotate(0deg)`,
                opacity: isEntering ? 0 : isGustAway ? 0 : 1,
                transitionDuration: isEntering ? '600ms' : isGustAway ? '850ms' : '400ms',
                transitionTimingFunction: isGustAway
                  ? 'cubic-bezier(0.12, 0.8, 0.32, 1)'
                  : 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: isEntering ? `${fl.enterDelay}ms` : isGustAway ? `${fl.gustDelay}ms` : '0ms',
              }}
            >
              {/* Flower SVG Art customized by theme */}
              {fl.colorType === 'sapphire' ? (
                // Sapphire Blue Rose
                <svg width={fl.size} height={fl.size} viewBox="0 0 100 100" className="filter drop-shadow-xl animate-wiggle">
                  <circle cx="50" cy="50" r="42" fill="#0066B1" stroke="#38BDF8" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="32" fill="#0019A8" stroke="#009FE3" strokeWidth="2" />
                  <circle cx="50" cy="50" r="20" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="10" fill="#38BDF8" />
                  <path d="M 50 12 C 65 24 65 38 50 38 C 35 38 35 24 50 12" fill="#BAE6FD" opacity="0.85" />
                  <path d="M 50 88 C 65 76 65 62 50 62 C 35 62 35 76 50 88" fill="#BAE6FD" opacity="0.85" />
                </svg>
              ) : fl.colorType === 'black' ? (
                // Midnight Black Rose
                <svg width={fl.size} height={fl.size} viewBox="0 0 100 100" className="filter drop-shadow-2xl">
                  <circle cx="50" cy="50" r="44" fill="#09090B" stroke="#3F3F46" strokeWidth="3" />
                  <circle cx="50" cy="50" r="34" fill="#18181B" stroke="#71717A" strokeWidth="2" />
                  <circle cx="50" cy="50" r="22" fill="#27272A" stroke="#009FE3" strokeWidth="1.5" />
                  <circle cx="50" cy="50" r="11" fill="#E2001A" />
                  <path d="M 50 16 Q 75 32 65 65 Q 40 75 30 50 Q 35 30 50 16" fill="#3F3F46" opacity="0.6" />
                </svg>
              ) : fl.colorType === 'cyan' ? (
                // Electric Cyan Blossom
                <svg width={fl.size} height={fl.size} viewBox="0 0 100 100" className="filter drop-shadow-xl animate-spin-slow">
                  <circle cx="50" cy="50" r="40" fill="#38BDF8" stroke="#E0F2FE" strokeWidth="2" />
                  <circle cx="50" cy="50" r="28" fill="#0284C7" stroke="#BAE6FD" strokeWidth="2" />
                  <circle cx="50" cy="50" r="16" fill="#0369A1" />
                  <circle cx="50" cy="50" r="8" fill="#FFFFFF" />
                  <path d="M 50 8 C 60 22 60 36 50 36 C 40 36 40 22 50 8" fill="#FFFFFF" opacity="0.9" />
                </svg>
              ) : fl.colorType === 'yellow' ? (
                // Golden Sunflower / Yellow Rose
                <svg width={fl.size} height={fl.size} viewBox="0 0 100 100" className="filter drop-shadow-xl animate-spin-slow">
                  <circle cx="50" cy="50" r="42" fill="#FEF08A" stroke="#EAB308" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="32" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
                  <circle cx="50" cy="50" r="20" fill="#FACC15" stroke="#A16207" strokeWidth="2" />
                  <circle cx="50" cy="50" r="10" fill="#78350F" />
                  <path d="M 50 10 C 65 22 65 36 50 36 C 35 36 35 22 50 10" fill="#FEF9C3" opacity="0.9" />
                  <path d="M 50 90 C 65 78 65 64 50 64 C 35 64 35 78 50 90" fill="#FEF9C3" opacity="0.9" />
                </svg>
              ) : fl.colorType === 'orange' ? (
                // Vibrant Orange Marigold
                <svg width={fl.size} height={fl.size} viewBox="0 0 100 100" className="filter drop-shadow-xl animate-wiggle">
                  <circle cx="50" cy="50" r="44" fill="#FED7AA" stroke="#F97316" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="34" fill="#FB923C" stroke="#EA580C" strokeWidth="2" />
                  <circle cx="50" cy="50" r="22" fill="#EA580C" stroke="#C2410C" strokeWidth="2" />
                  <circle cx="50" cy="50" r="11" fill="#9A3412" />
                  <path d="M 50 14 C 60 26 60 40 50 40 C 40 40 40 26 50 14" fill="#FFF7ED" opacity="0.9" />
                </svg>
              ) : (
                // Amber Blossom
                <svg width={fl.size} height={fl.size} viewBox="0 0 100 100" className="filter drop-shadow-xl">
                  <circle cx="50" cy="50" r="40" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
                  <circle cx="50" cy="50" r="28" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
                  <circle cx="50" cy="50" r="16" fill="#D97706" />
                  <circle cx="50" cy="50" r="8" fill="#78350F" />
                </svg>
              )}
            </div>
          );
        })}

        {/* Center Grand Message Card - Flows in and Gets Carried Away by the Gust of Wind */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700"
          style={{
            transform: stage === 'flowing_in'
              ? 'translate3d(0, 40px, 0) scale(0.6)'
              : stage === 'gust_away'
              ? 'translate3d(100vw, -60vh, 0) scale(0.3) rotate(25deg)'
              : 'translate3d(0, 0, 0) scale(1) rotate(0deg)',
            opacity: stage === 'gust_away' ? 0 : 1,
            transitionTimingFunction: stage === 'gust_away'
              ? 'cubic-bezier(0.16, 1, 0.3, 1)'
              : 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <div className="relative text-center px-4 max-w-4xl transform">
            {/* Top Subtitle */}
            <div className="mb-2">
              <span
                className={`font-cute text-xl sm:text-3xl font-bold uppercase tracking-widest ${
                  isBMW
                    ? 'text-sky-300 drop-shadow-[0_2px_12px_rgba(0,159,227,0.9)]'
                    : 'text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
                }`}
              >
                {isBMW ? '🏎️ For ' : '🌸 For '}
                {CONFIG.recipientName}
                {isBMW ? ' 🏎️' : ' 🌸'}
              </span>
            </div>

            {/* HUGE Heading Text (Exact text preserved) */}
            <h1 className="font-handwriting text-6xl sm:text-8xl md:text-9xl font-extrabold text-white tracking-wide drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-none my-2">
              A small Gift 🙂
            </h1>

            {/* Bottom Subtitle Tag */}
            <div className="mt-4">
              <span
                className={`font-cute text-lg sm:text-2xl font-bold px-8 py-2.5 rounded-full backdrop-blur-md shadow-2xl border ${
                  isBMW
                    ? 'text-sky-100 bg-[#070a10]/85 border-sky-400/50 shadow-sky-500/30'
                    : 'text-amber-100 bg-black/60 border-white/30'
                }`}
              >
                From: {CONFIG.senderName} ✨
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
