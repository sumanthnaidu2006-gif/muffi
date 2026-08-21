import React, { useState } from 'react';
import { Lock, Unlock, Delete, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';
import { RealBMWLogoSticker, BMWMStripes, RealBMWM4Sticker, RealStartEngineSticker } from './BMWComponents';
import { ChibiNaruto, ChibiKurama, KonohaStamp } from './NarutoCharacters';
import { ThemeSwitcher } from './ThemeSwitcher';

export const LockScreen = ({ onUnlock, theme = 'bmw', onToggleTheme }) => {
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
      }, 600);
    } else {
      setIsError(true);
      setTimeout(() => {
        setPin('');
        setIsError(false);
      }, 800);
    }
  };

  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden flex flex-col items-center justify-center p-4 select-none transition-colors duration-700 ${
        theme === 'bmw'
          ? 'bg-gradient-to-b from-[#090c13] via-[#0f1523] to-[#06080d] text-white'
          : 'bg-gradient-to-b from-[#fef3c7] via-[#fff7ed] to-[#fed7aa] text-amber-950'
      }`}
    >
      {/* Top Floating Theme Switcher */}
      <div className="absolute top-4 right-4 z-30">
        <ThemeSwitcher currentTheme={theme} onToggleTheme={onToggleTheme} />
      </div>

      {/* Top Bar Accent */}
      {theme === 'bmw' ? (
        <div className="absolute top-0 left-0 right-0 h-2 flex z-20">
          <div className="flex-1 bg-[#009FE3]" />
          <div className="flex-1 bg-[#0019A8]" />
          <div className="flex-1 bg-[#E2001A]" />
        </div>
      ) : (
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 z-20" />
      )}

      {/* Ambient Lighting Glows */}
      {theme === 'bmw' ? (
        <>
          <div className="absolute top-10 left-10 w-72 h-48 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-16 right-8 w-80 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-10 left-10 w-64 h-36 bg-amber-300/40 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute top-32 right-12 w-72 h-40 bg-orange-300/40 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-16 left-8 w-80 h-44 bg-yellow-300/40 rounded-full blur-2xl pointer-events-none" />
        </>
      )}

      {/* Theme Decorative Accents */}
      {theme === 'bmw' ? (
        <>
          <div className="absolute -bottom-2 right-4 md:right-24 opacity-95 animate-float hidden sm:block">
            <RealBMWM4Sticker className="w-36 sm:w-48" />
          </div>
          <div className="absolute top-16 right-10 md:right-28 opacity-90 rotate-6 hidden sm:block">
            <RealStartEngineSticker className="w-16 h-16" />
          </div>
        </>
      ) : (
        <>
          <div className="absolute -bottom-4 right-4 md:right-24 opacity-90 animate-float hidden sm:block">
            <ChibiKurama className="w-28 h-28 md:w-36 md:h-36" />
          </div>
          <div className="absolute top-16 right-10 md:right-28 opacity-80 rotate-12 hidden sm:block">
            <KonohaStamp className="w-16 h-16" />
          </div>
        </>
      )}

      {/* Main Lock Card Container */}
      <div className={`relative z-10 flex flex-col items-center max-w-sm w-full transition-transform duration-300 ${isError ? 'animate-bounce' : ''}`}>
        
        {/* Center Lock Badge */}
        <div className="relative mb-4 flex items-center justify-center">
          {theme === 'bmw' ? (
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-zinc-900 to-[#121824] flex items-center justify-center shadow-2xl border-2 border-zinc-700">
              {isSuccess ? (
                <Unlock className="w-12 h-12 text-blue-400 animate-pulse" />
              ) : (
                <RealBMWLogoSticker className="w-20 h-20" />
              )}
            </div>
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-300 via-yellow-200 to-orange-300 flex items-center justify-center shadow-xl border-2 border-amber-400">
              {isSuccess ? (
                <Unlock className="w-12 h-12 text-amber-900 animate-pulse" />
              ) : (
                <Lock className="w-12 h-12 text-amber-900" />
              )}
              {/* Chibi Naruto on top */}
              <div className="absolute -top-10 -right-6 animate-wiggle">
                <ChibiNaruto className="w-16 h-16" expression="wink" />
              </div>
            </div>
          )}
        </div>

        {/* Header Titles (Exact text preserved) */}
        <div className="text-center mb-6">
          <div className={`flex items-center justify-center gap-2 font-handwriting text-2xl md:text-3xl font-bold tracking-wide ${theme === 'bmw' ? 'text-white' : 'text-amber-950'}`}>
            <span>From: {CONFIG.senderName}</span>
            <span className={theme === 'bmw' ? 'text-sky-400' : 'text-orange-500'}>•</span>
            <span>For: {CONFIG.recipientName}</span>
          </div>
          <p className={`font-cute text-lg mt-0.5 flex items-center justify-center gap-1.5 ${theme === 'bmw' ? 'text-zinc-300' : 'text-amber-800'}`}>
            <Sparkles className={`w-4 h-4 ${theme === 'bmw' ? 'text-sky-400' : 'text-amber-600'}`} />
            {CONFIG.subtitle}
          </p>
          {theme === 'bmw' && (
            <div className="mt-1.5 flex justify-center">
              <BMWMStripes className="h-2 w-20" />
            </div>
          )}
        </div>

        {/* PIN Indicators */}
        <div className="flex items-center justify-center gap-4 mb-7">
          {[0, 1, 2, 3].map((idx) => {
            const isFilled = pin.length > idx;
            return (
              <div
                key={idx}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                  isSuccess
                    ? 'bg-emerald-500 border-emerald-400 scale-125'
                    : isError
                    ? 'bg-rose-500 border-rose-400 scale-110'
                    : isFilled
                    ? theme === 'bmw'
                      ? 'bg-sky-500 border-sky-300 scale-110 shadow-md shadow-sky-500/50'
                      : 'bg-orange-500 border-orange-600 scale-110 shadow-sm'
                    : theme === 'bmw'
                    ? 'bg-zinc-800/80 border-zinc-600'
                    : 'bg-white/90 border-amber-300'
                }`}
              />
            );
          })}
        </div>

        {/* Numeric Keypad */}
        <div
          className={`grid grid-cols-3 gap-3 w-full max-w-[280px] p-4 rounded-3xl backdrop-blur-md shadow-2xl transition-colors ${
            theme === 'bmw'
              ? 'bg-[#111722]/90 border border-zinc-700/80 shadow-black/60'
              : 'bg-white/80 border-2 border-amber-200/90 shadow-amber-900/10'
          }`}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className={`h-14 rounded-2xl text-2xl font-cute font-bold shadow-sm transition-all duration-150 flex items-center justify-center active:scale-95 ${
                theme === 'bmw'
                  ? 'bg-zinc-800/90 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-sky-400 hover:shadow-md'
                  : 'bg-white/95 hover:bg-amber-100 text-amber-950 border border-amber-200 hover:border-amber-400'
              }`}
            >
              {num}
            </button>
          ))}

          {/* Spacer */}
          <div className={`flex items-center justify-center ${theme === 'bmw' ? 'text-sky-400' : 'text-amber-500'}`}>
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          {/* Zero */}
          <button
            onClick={() => handleNumberClick('0')}
            className={`h-14 rounded-2xl text-2xl font-cute font-bold shadow-sm transition-all duration-150 flex items-center justify-center active:scale-95 ${
              theme === 'bmw'
                ? 'bg-zinc-800/90 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-sky-400 hover:shadow-md'
                : 'bg-white/95 hover:bg-amber-100 text-amber-950 border border-amber-200 hover:border-amber-400'
            }`}
          >
            0
          </button>

          {/* Delete */}
          <button
            onClick={handleDelete}
            className={`h-14 rounded-2xl text-xl font-bold shadow-sm transition-all duration-150 flex items-center justify-center active:scale-95 ${
              theme === 'bmw'
                ? 'bg-red-950/60 hover:bg-red-900/80 text-red-300 border border-red-800/80'
                : 'bg-rose-100 hover:bg-rose-200 text-rose-800 border border-rose-200'
            }`}
            title="Delete"
          >
            <Delete className="w-6 h-6" />
          </button>
        </div>

        {/* Hint text (Exact text preserved) */}
        <p className={`font-cute text-sm mt-6 text-center ${theme === 'bmw' ? 'text-zinc-400' : 'text-amber-900/70'}`}>
          💡 Uk the password very well
        </p>

        {/* Watermark */}
        <div className={`mt-8 text-xs font-cute tracking-widest uppercase ${theme === 'bmw' ? 'text-zinc-500' : 'text-amber-800/40'}`}>
          {CONFIG.instagramTag}
        </div>
      </div>
    </div>
  );
};
