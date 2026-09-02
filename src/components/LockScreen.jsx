import React, { useState } from 'react';
import { Lock, Unlock, Delete, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';
import { RealBMWLogoSticker, BMWMStripes, RealBMWM4Sticker, RealStartEngineSticker } from './BMWComponents';
import { ChibiNaruto, ChibiKurama, KonohaStamp } from './NarutoCharacters';
import { ThemeSwitcher } from './ThemeSwitcher';
import { VisitorCounter } from './VisitorCounter';

export const LockScreen = ({ onUnlock, theme = 'naruto', onToggleTheme }) => {
  const [pin, setPin] = useState('');
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNumberClick = (num) => {
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      
      if (newPin.length === 4) {
        verifyPin(newPin);
      }
    }
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
      setIsError(false);
    }
  };

  const verifyPin = (enteredPin) => {
    if (enteredPin === CONFIG.passcode) {
      setIsSuccess(true);
      setTimeout(() => {
        onUnlock();
      }, 500);
    } else {
      setIsError(true);
      setTimeout(() => {
        setPin('');
        setIsError(false);
      }, 700);
    }
  };

  const isBMW = theme === 'bmw';

  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center p-4 select-none transition-colors duration-700 ${
        isBMW
          ? 'bg-gradient-to-b from-[#06080d] via-[#0b101b] to-[#040609] text-white selection:bg-sky-500/30'
          : 'bg-gradient-to-b from-[#fef3c7] via-[#fff7ed] to-[#fed7aa] text-amber-950 selection:bg-amber-300'
      }`}
    >
      {/* Top Floating Theme Switcher */}
      <div className="absolute top-4 right-4 z-30">
        <ThemeSwitcher currentTheme={theme} onToggleTheme={onToggleTheme} />
      </div>

      {/* Top M-Stripe / Sunset Bar Accent */}
      {isBMW ? (
        <div className="absolute top-0 left-0 right-0 h-1.5 flex z-20 shadow-lg shadow-blue-500/30">
          <div className="flex-1 bg-[#009FE3]" />
          <div className="flex-1 bg-[#0019A8]" />
          <div className="flex-1 bg-[#E2001A]" />
        </div>
      ) : (
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 z-20" />
      )}

      {/* Ambient Lighting Glows */}
      {isBMW ? (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-12 left-12 w-80 h-56 bg-sky-500/15 rounded-full blur-[110px]" />
          <div className="absolute bottom-16 right-10 w-96 h-56 bg-blue-600/15 rounded-full blur-[130px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-red-500/10 rounded-full blur-[140px]" />
        </div>
      ) : (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-10 left-10 w-72 h-44 bg-amber-300/35 rounded-full blur-3xl" />
          <div className="absolute top-32 right-12 w-80 h-48 bg-orange-300/35 rounded-full blur-3xl" />
          <div className="absolute bottom-16 left-8 w-96 h-52 bg-yellow-300/35 rounded-full blur-3xl" />
        </div>
      )}

      {/* Theme Decorative Accents */}
      {isBMW ? (
        <>
          <div className="absolute -bottom-2 right-4 md:right-24 opacity-95 animate-float hidden sm:block pointer-events-none">
            <RealBMWM4Sticker className="w-40 sm:w-52" />
          </div>
          <div className="absolute top-16 right-10 md:right-28 opacity-90 rotate-6 hidden sm:block pointer-events-none">
            <RealStartEngineSticker className="w-18 h-18" />
          </div>
        </>
      ) : (
        <>
          <div className="absolute -bottom-4 right-4 md:right-24 opacity-90 animate-float hidden sm:block pointer-events-none">
            <ChibiKurama className="w-28 h-28 md:w-36 md:h-36" />
          </div>
          <div className="absolute top-16 right-10 md:right-28 opacity-80 rotate-12 hidden sm:block pointer-events-none">
            <KonohaStamp className="w-16 h-16" />
          </div>
        </>
      )}

      {/* Main Lock Card Container */}
      <div className={`relative z-10 flex flex-col items-center max-w-sm w-full transition-transform duration-300 ${isError ? 'animate-shake' : ''}`}>
        
        {/* Center Lock Badge */}
        <div className="relative mb-4 flex items-center justify-center">
          {isBMW ? (
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#0b101b] via-[#121927] to-[#1e293b] p-3 flex items-center justify-center shadow-[0_0_35px_rgba(0,159,227,0.35)] border-2 border-sky-400/40 transition-transform hover:scale-105">
              {isSuccess ? (
                <Unlock className="w-11 h-11 text-sky-400 animate-pulse" />
              ) : (
                <RealBMWLogoSticker className="w-18 h-18" />
              )}
            </div>
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-300 via-yellow-200 to-orange-300 flex items-center justify-center shadow-xl border-2 border-amber-400 transition-transform hover:scale-105">
              {isSuccess ? (
                <Unlock className="w-11 h-11 text-amber-900 animate-pulse" />
              ) : (
                <Lock className="w-11 h-11 text-amber-900" />
              )}
              <div className="absolute -top-10 -right-6 animate-wiggle">
                <ChibiNaruto className="w-16 h-16" expression="wink" />
              </div>
            </div>
          )}
        </div>

        {/* Header Titles (Exact text preserved) */}
        <div className="text-center mb-6">
          <div className={`flex items-center justify-center gap-2 font-handwriting text-2xl md:text-3xl font-bold tracking-wide ${isBMW ? 'text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]' : 'text-amber-950'}`}>
            <span>From: {CONFIG.senderName}</span>
            <span className={isBMW ? 'text-sky-400' : 'text-orange-500'}>•</span>
            <span>For: {CONFIG.recipientName}</span>
          </div>
          <p className={`font-cute text-lg mt-0.5 flex items-center justify-center gap-1.5 ${isBMW ? 'text-sky-200/90' : 'text-amber-800'}`}>
            <Sparkles className={`w-4 h-4 ${isBMW ? 'text-sky-400' : 'text-amber-600'}`} />
            {CONFIG.subtitle}
          </p>
          {isBMW && (
            <div className="mt-1.5 flex justify-center">
              <BMWMStripes className="h-1.5 w-20" />
            </div>
          )}
        </div>

        {/* PIN Indicators */}
        <div className="flex items-center justify-center gap-3.5 mb-7">
          {[0, 1, 2, 3].map((idx) => {
            const isFilled = pin.length > idx;
            return (
              <div
                key={idx}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                  isSuccess
                    ? 'bg-emerald-400 border-emerald-300 scale-125 shadow-[0_0_15px_rgba(52,211,153,0.8)]'
                    : isError
                    ? 'bg-rose-500 border-rose-400 scale-110 shadow-[0_0_15px_rgba(244,63,94,0.8)]'
                    : isFilled
                    ? isBMW
                      ? 'bg-sky-400 border-sky-200 scale-110 shadow-[0_0_15px_rgba(56,189,248,0.7)]'
                      : 'bg-orange-500 border-orange-600 scale-110 shadow-[0_0_12px_rgba(249,115,22,0.6)]'
                    : isBMW
                    ? 'bg-zinc-900/90 border-zinc-700/80'
                    : 'bg-white/90 border-amber-300/80'
                }`}
              />
            );
          })}
        </div>

        {/* Keypad Container */}
        <div
          className={`grid grid-cols-3 gap-3 w-full max-w-[280px] p-4 rounded-3xl backdrop-blur-xl transition-all ${
            isBMW
              ? 'bg-[#0f1523]/85 border border-white/10 shadow-glass-dark'
              : 'bg-white/85 border-2 border-amber-200/90 shadow-glass-warm'
          }`}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className={`h-14 rounded-2xl text-2xl font-cute font-bold shadow-sm transition-all duration-100 flex items-center justify-center active:scale-90 cursor-pointer ${
                isBMW
                  ? 'bg-gradient-to-b from-[#182130] to-[#101724] hover:from-[#232f44] hover:to-[#172133] text-white border border-white/10 hover:border-sky-400/80 hover:shadow-[0_0_15px_rgba(56,189,248,0.35)]'
                  : 'bg-white/95 hover:bg-amber-100 text-amber-950 border border-amber-200 hover:border-amber-400 hover:shadow-sm'
              }`}
            >
              {num}
            </button>
          ))}

          {/* Spacer */}
          <div className={`flex items-center justify-center ${isBMW ? 'text-sky-400' : 'text-amber-500'}`}>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>

          {/* Zero */}
          <button
            onClick={() => handleNumberClick('0')}
            className={`h-14 rounded-2xl text-2xl font-cute font-bold shadow-sm transition-all duration-100 flex items-center justify-center active:scale-90 cursor-pointer ${
              isBMW
                ? 'bg-gradient-to-b from-[#182130] to-[#101724] hover:from-[#232f44] hover:to-[#172133] text-white border border-white/10 hover:border-sky-400/80 hover:shadow-[0_0_15px_rgba(56,189,248,0.35)]'
                : 'bg-white/95 hover:bg-amber-100 text-amber-950 border border-amber-200 hover:border-amber-400 hover:shadow-sm'
            }`}
          >
            0
          </button>

          {/* Delete */}
          <button
            onClick={handleDelete}
            aria-label="Delete last digit"
            className={`h-14 rounded-2xl text-xl font-bold shadow-sm transition-all duration-100 flex items-center justify-center active:scale-90 cursor-pointer ${
              isBMW
                ? 'bg-red-950/70 hover:bg-red-900 text-red-300 border border-red-800/80 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                : 'bg-rose-100 hover:bg-rose-200 text-rose-800 border border-rose-200'
            }`}
            title="Delete"
          >
            <Delete className="w-5 h-5" />
          </button>
        </div>

        {/* Hint text (Exact text preserved) */}
        <p className={`font-cute text-sm mt-6 text-center ${isBMW ? 'text-sky-200/70' : 'text-amber-900/70'}`}>
          💡 Uk the password very well
        </p>

        {/* Watermark & Visitor Counter */}
        <div className={`mt-5 text-xs font-cute tracking-widest uppercase ${isBMW ? 'text-zinc-600' : 'text-amber-800/40'}`}>
          {CONFIG.instagramTag}
        </div>
        <VisitorCounter theme={theme} />
      </div>
    </div>
  );
};
