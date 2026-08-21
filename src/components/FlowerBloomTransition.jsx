import React, { useEffect, useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';

export const FlowerBloomTransition = ({ onAnimationComplete, theme = 'bmw' }) => {
  // Stages: 'entering' -> 'hovering' -> 'gust_away'
  const [stage, setStage] = useState('entering');
  const isBMW = theme === 'bmw';

  // 1. Naruto Flower Particles (Golden yellow & orange floral flurry)
  const narutoFlowers = useMemo(() => {
    const items = [];
    for (let i = 0; i < 28; i++) {
      const col = (i % 6) / 5;
      const row = Math.floor(i / 6) / 4;
      const x = 8 + col * 84 + (Math.random() * 10 - 5);
      const y = 10 + row * 80 + (Math.random() * 10 - 5);
      const gustAngle = -35 + Math.random() * 50;
      const gustDistance = 140 + Math.random() * 80;
      const gustX = Math.cos((gustAngle * Math.PI) / 180) * gustDistance;
      const gustY = Math.sin((gustAngle * Math.PI) / 180) * -gustDistance;
      const spin = (Math.random() > 0.5 ? 1 : -1) * (360 + Math.random() * 540);

      items.push({
        id: i,
        x: `${x}%`,
        y: `${y}%`,
        size: 70 + Math.floor(Math.random() * 65),
        enterDelay: (i * 25) + Math.random() * 50,
        gustX: `${gustX}vw`,
        gustY: `${gustY}vh`,
        gustSpin: `${spin}deg`,
        gustDelay: (i * 20) + Math.random() * 60,
        colorType: i % 3 === 0 ? 'yellow' : i % 3 === 1 ? 'orange' : 'amber',
      });
    }
    return items;
  }, []);

  // 2. BMW Drift Smoke & M-Speed Particles
  const bmwParticles = useMemo(() => {
    const items = [];
    for (let i = 0; i < 24; i++) {
      const x = 10 + (i % 6) * 16 + (Math.random() * 8 - 4);
      const y = 15 + Math.floor(i / 6) * 22 + (Math.random() * 8 - 4);
      const blastX = 150 + Math.random() * 80;
      const blastY = -50 + (Math.random() * 80 - 40);

      items.push({
        id: i,
        x: `${x}%`,
        y: `${y}%`,
        size: 80 + Math.floor(Math.random() * 80),
        enterDelay: i * 20,
        blastX: `${blastX}vw`,
        blastY: `${blastY}vh`,
        type: i % 4, // 0: sapphire petal, 1: smoke puff, 2: black petal, 3: cyan spark
      });
    }
    return items;
  }, []);

  useEffect(() => {
    // 1. Enter to Hover
    const hoverTimer = setTimeout(() => {
      setStage('hovering');
    }, 450);

    // 2. Sudden Launch / Wind Gust Blast (at 2.1s)
    const gustTimer = setTimeout(() => {
      setStage('gust_away');

      if (isBMW) {
        // High-velocity M-Power aero confetti blast
        confetti({
          particleCount: 100,
          spread: 160,
          origin: { x: 0.1, y: 0.6 },
          angle: 40,
          velocity: 60,
          colors: ['#009FE3', '#0019A8', '#E2001A', '#38BDF8', '#FFFFFF', '#0F172A'],
        });
      } else {
        // Naruto golden leaves & petals confetti
        confetti({
          particleCount: 80,
          spread: 140,
          origin: { x: 0.2, y: 0.8 },
          angle: 55,
          velocity: 45,
          colors: ['#F59E0B', '#F97316', '#FBBF24', '#EA580C', '#FEF08A'],
        });
      }
    }, 2100);

    // 3. Complete Transition (at 2.9s)
    const completeTimer = setTimeout(() => {
      if (onAnimationComplete) onAnimationComplete();
    }, 2900);

    return () => {
      clearTimeout(hoverTimer);
      clearTimeout(gustTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete, isBMW]);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none">
      
      {/* ========================================================================= */}
      {/* 🏎️ BMW THEME TRANSITION: LASERLIGHTS, DRIFT SMOKE & HIGH-SPEED SLIPSTREAM */}
      {/* ========================================================================= */}
      {isBMW ? (
        <div
          className={`w-full h-full relative flex items-center justify-center transition-opacity duration-700 ${
            stage === 'gust_away' ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background: 'radial-gradient(circle at center, rgba(8, 13, 22, 0.98) 0%, rgba(4, 6, 9, 0.99) 100%)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Glowing BMW Laserlight Angel Eyes Halo Beam Effect in Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Dual Angel Eyes */}
            <div className="flex items-center gap-24 sm:gap-40 opacity-70">
              <div className="w-32 sm:w-48 h-20 sm:h-28 rounded-full border-4 border-sky-400 shadow-[0_0_60px_rgba(56,189,248,0.8)] animate-pulse" />
              <div className="w-32 sm:w-48 h-20 sm:h-28 rounded-full border-4 border-sky-400 shadow-[0_0_60px_rgba(56,189,248,0.8)] animate-pulse" />
            </div>
            {/* Center M-Glow */}
            <div className="absolute w-[500px] h-[300px] bg-gradient-to-r from-[#009FE3]/20 via-[#0019A8]/25 to-[#E2001A]/20 rounded-full blur-[90px]" />
          </div>

          {/* High-Speed Aero Slipstream Streaks when Launching Away */}
          {stage === 'gust_away' && (
            <div className="absolute inset-0 z-20 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
                <line x1="-200" y1="200" x2="1200" y2="150" stroke="#38BDF8" strokeWidth="8" strokeDasharray="150 250" className="animate-wind-streak" />
                <line x1="-150" y1="320" x2="1250" y2="280" stroke="#009FE3" strokeWidth="12" strokeDasharray="200 300" className="animate-wind-streak" style={{ animationDelay: '40ms' }} />
                <line x1="-300" y1="440" x2="1100" y2="400" stroke="#E2001A" strokeWidth="6" strokeDasharray="100 200" className="animate-wind-streak" style={{ animationDelay: '80ms' }} />
              </svg>
            </div>
          )}

          {/* Swirling Drift Smoke & Sapphire/Black Flower Petals Field */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {bmwParticles.map((pt) => {
              const isEntering = stage === 'entering';
              const isGustAway = stage === 'gust_away';

              return (
                <div
                  key={pt.id}
                  className="absolute pointer-events-none transition-all"
                  style={{
                    left: pt.x,
                    top: pt.y,
                    transform: isEntering
                      ? 'translate3d(-100vw, 40vh, 0) scale(0.2)'
                      : isGustAway
                      ? `translate3d(${pt.blastX}, ${pt.blastY}, 0) scale(0.2) rotate(360deg)`
                      : 'translate3d(0, 0, 0) scale(1) rotate(0deg)',
                    opacity: isEntering ? 0 : isGustAway ? 0 : 0.85,
                    transitionDuration: isEntering ? '600ms' : isGustAway ? '750ms' : '400ms',
                    transitionTimingFunction: isGustAway
                      ? 'cubic-bezier(0.1, 0.9, 0.2, 1)'
                      : 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transitionDelay: isEntering ? `${pt.enterDelay}ms` : '0ms',
                  }}
                >
                  {pt.type === 0 ? (
                    // Sapphire Blue Flower
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#0019a8] via-[#0066b1] to-[#38bdf8] border-2 border-sky-300 shadow-[0_0_20px_rgba(0,102,177,0.6)] flex items-center justify-center">
                      <span className="text-xl">🌸</span>
                    </div>
                  ) : pt.type === 1 ? (
                    // Drift Smoke Puff
                    <div className="w-24 h-24 rounded-full bg-slate-200/20 blur-xl animate-pulse" />
                  ) : pt.type === 2 ? (
                    // Midnight Black Rose
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#09090b] via-[#18181b] to-[#27272a] border-2 border-red-500/60 shadow-[0_0_20px_rgba(226,0,26,0.4)] flex items-center justify-center">
                      <span className="text-xl">🥀</span>
                    </div>
                  ) : (
                    // Cyan Laserlight Spark
                    <div className="w-8 h-8 rounded-full bg-sky-400 blur-sm shadow-[0_0_15px_#38bdf8]" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Center BMW Grand Badge Card - Slides in with Speed & Launches Away */}
          <div
            className="relative z-30 text-center px-4 max-w-4xl transition-all duration-700"
            style={{
              transform: stage === 'entering'
                ? 'translate3d(0, 50px, 0) scale(0.6)'
                : stage === 'gust_away'
                ? 'translate3d(120vw, -30vh, 0) scale(0.2) rotate(20deg)'
                : 'translate3d(0, 0, 0) scale(1) rotate(0deg)',
              opacity: stage === 'gust_away' ? 0 : 1,
              transitionTimingFunction: stage === 'gust_away'
                ? 'cubic-bezier(0.16, 1, 0.3, 1)'
                : 'cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            {/* Top Subtitle */}
            <div className="mb-2">
              <span className="font-cute text-xl sm:text-3xl font-extrabold uppercase tracking-widest text-sky-300 drop-shadow-[0_2px_15px_rgba(0,159,227,0.9)]">
                🏎️ For {CONFIG.recipientName} 🏎️
              </span>
            </div>

            {/* HUGE Heading Text (Exact text preserved) */}
            <h1 className="font-handwriting text-6xl sm:text-8xl md:text-9xl font-extrabold text-white tracking-wide drop-shadow-[0_4px_30px_rgba(0,159,227,0.8)] leading-none my-3">
              A small Gift 🙂
            </h1>

            {/* Bottom Subtitle Tag */}
            <div className="mt-4 flex justify-center">
              <span className="font-cute text-lg sm:text-2xl font-bold px-8 py-2.5 rounded-full backdrop-blur-xl shadow-[0_0_25px_rgba(0,159,227,0.4)] border border-sky-400/50 bg-[#070a10]/90 text-sky-100">
                From: {CONFIG.senderName} ✨
              </span>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* 🍃 NARUTO THEME TRANSITION: GOLDEN SUNFLOWERS, ORANGE MARIGOLDS & LEAF GUST */
        /* ========================================================================= */
        <div
          className={`w-full h-full relative flex items-center justify-center transition-opacity duration-700 ${
            stage === 'gust_away' ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            background: 'radial-gradient(circle at center, rgba(254, 243, 199, 0.96) 0%, rgba(254, 215, 170, 0.98) 100%)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Wind Gust Streaks */}
          {stage === 'gust_away' && (
            <div className="absolute inset-0 z-20 pointer-events-none">
              <svg className="w-full h-full opacity-60" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                <path d="M -100 800 Q 400 400 1100 200" fill="none" stroke="#FBBF24" strokeWidth="12" strokeDasharray="200 400" className="animate-wind-streak" />
                <path d="M -50 950 Q 500 550 1150 350" fill="none" stroke="#F97316" strokeWidth="8" strokeDasharray="150 350" className="animate-wind-streak" style={{ animationDelay: '60ms' }} />
              </svg>
            </div>
          )}

          {/* Field of Golden & Orange Flowers */}
          <div className="relative w-full h-full overflow-hidden">
            {narutoFlowers.map((fl) => {
              const isEntering = stage === 'entering';
              const isGustAway = stage === 'gust_away';

              return (
                <div
                  key={fl.id}
                  className="absolute pointer-events-none transition-all"
                  style={{
                    left: fl.x,
                    top: fl.y,
                    transform: isEntering
                      ? 'translate3d(0, 100vh, 0) scale(0.2) rotate(-90deg)'
                      : isGustAway
                      ? `translate3d(${fl.gustX}, ${fl.gustY}, 0) scale(0.4) rotate(${fl.gustSpin})`
                      : 'translate3d(0, 0, 0) scale(1) rotate(0deg)',
                    opacity: isEntering ? 0 : isGustAway ? 0 : 1,
                    transitionDuration: isEntering ? '600ms' : isGustAway ? '850ms' : '400ms',
                    transitionTimingFunction: isGustAway
                      ? 'cubic-bezier(0.12, 0.8, 0.32, 1)'
                      : 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transitionDelay: isEntering ? `${fl.enterDelay}ms` : isGustAway ? `${fl.gustDelay}ms` : '0ms',
                  }}
                >
                  {fl.colorType === 'yellow' ? (
                    <svg width={fl.size} height={fl.size} viewBox="0 0 100 100" className="filter drop-shadow-xl animate-spin-slow">
                      <circle cx="50" cy="50" r="42" fill="#FEF08A" stroke="#EAB308" strokeWidth="2.5" />
                      <circle cx="50" cy="50" r="32" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
                      <circle cx="50" cy="50" r="20" fill="#FACC15" />
                      <circle cx="50" cy="50" r="10" fill="#78350F" />
                    </svg>
                  ) : fl.colorType === 'orange' ? (
                    <svg width={fl.size} height={fl.size} viewBox="0 0 100 100" className="filter drop-shadow-xl animate-wiggle">
                      <circle cx="50" cy="50" r="44" fill="#FED7AA" stroke="#F97316" strokeWidth="2.5" />
                      <circle cx="50" cy="50" r="34" fill="#FB923C" stroke="#EA580C" strokeWidth="2" />
                      <circle cx="50" cy="50" r="22" fill="#EA580C" />
                      <circle cx="50" cy="50" r="11" fill="#9A3412" />
                    </svg>
                  ) : (
                    <svg width={fl.size} height={fl.size} viewBox="0 0 100 100" className="filter drop-shadow-xl">
                      <circle cx="50" cy="50" r="40" fill="#FDE68A" stroke="#D97706" strokeWidth="2" />
                      <circle cx="50" cy="50" r="28" fill="#F59E0B" />
                      <circle cx="50" cy="50" r="16" fill="#D97706" />
                    </svg>
                  )}
                </div>
              );
            })}

            {/* Center Naruto Card */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700"
              style={{
                transform: stage === 'entering'
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
                <div className="mb-2">
                  <span className="font-cute text-xl sm:text-3xl font-bold uppercase tracking-widest text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                    🌸 For {CONFIG.recipientName} 🌸
                  </span>
                </div>
                <h1 className="font-handwriting text-6xl sm:text-8xl md:text-9xl font-extrabold text-white tracking-wide drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] leading-none my-2">
                  A small Gift 🙂
                </h1>
                <div className="mt-4">
                  <span className="font-cute text-lg sm:text-2xl font-bold px-8 py-2.5 rounded-full backdrop-blur-md shadow-2xl border text-amber-100 bg-black/60 border-white/30">
                    From: {CONFIG.senderName} ✨
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
