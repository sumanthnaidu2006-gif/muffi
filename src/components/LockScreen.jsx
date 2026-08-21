import React, { useState } from 'react';
import { Lock, Unlock, Delete, Sparkles } from 'lucide-react';
import { CONFIG } from '../config';
import { BMWLogo, BMWMStripes, BMWM3Car, StartEngineButton } from './BMWComponents';
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
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-[#fef8e7] via-[#fffbf0] to-[#faedd0] flex flex-col items-center justify-center p-4 select-none">
      {/* Top Floating Theme Switcher */}
      <div className="absolute top-4 right-4 z-30">
        <ThemeSwitcher currentTheme={theme} onToggleTheme={onToggleTheme} />
      </div>

      {/* Top M-Stripe bar if in BMW theme */}
      {theme === 'bmw' && (
        <div className="absolute top-0 left-0 right-0 h-2 flex">
          <div className="flex-1 bg-[#009FE3]" />
          <div className="flex-1 bg-[#0019A8]" />
          <div className="flex-1 bg-[#E2001A]" />
        </div>
      )}

      {/* Decorative Pastel Clouds & Glows */}
      <div className="absolute top-10 left-10 w-48 h-28 bg-white/70 rounded-full blur-xl pointer-events-none" />
      <div className="absolute top-32 right-12 w-64 h-32 bg-amber-100/60 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-16 left-8 w-72 h-36 bg-orange-100/50 rounded-full blur-2xl pointer-events-none" />

      {/* Theme Decorative Accents */}
      {theme === 'bmw' ? (
        <>
          {/* BMW M3 G80 on bottom right */}
          <div className="absolute -bottom-2 right-4 md:right-24 opacity-95 animate-float hidden sm:block">
            <BMWM3Car className="w-32 h-24 md:w-44 md:h-32" />
          </div>

          {/* Start Engine Button top right */}
          <div className="absolute top-16 right-10 md:right-28 opacity-90 rotate-6 hidden sm:block">
            <StartEngineButton className="w-14 h-14" />
          </div>
        </>
      ) : (
        <>
          {/* Chibi Kurama on bottom right */}
          <div className="absolute -bottom-4 right-4 md:right-24 opacity-90 animate-float hidden sm:block">
            <ChibiKurama className="w-28 h-28 md:w-36 md:h-36" />
          </div>

          {/* Konoha Stamp top right */}
          <div className="absolute top-16 right-10 md:right-28 opacity-80 rotate-12 hidden sm:block">
            <KonohaStamp className="w-16 h-16" />
          </div>
        </>
      )}

      {/* Main Lock Card Container */}
      <div className={`relative z-10 flex flex-col items-center max-w-sm w-full transition-transform duration-300 ${isError ? 'animate-bounce' : ''}`}>
        
        {/* Center Lock Badge */}
        <div className="relative mb-3 flex items-center justify-center">
          {theme === 'bmw' ? (
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-zinc-900 to-zinc-800 flex items-center justify-center shadow-2xl border-2 border-zinc-700">
              {isSuccess ? (
                <Unlock className="w-12 h-12 text-blue-400 animate-pulse" />
              ) : (
                <BMWLogo className="w-18 h-18" />
              )}
            </div>
          ) : (
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-200 via-yellow-100 to-amber-300 flex items-center justify-center shadow-lg border-2 border-amber-300/80">
              {isSuccess ? (
                <Unlock className="w-12 h-12 text-amber-700 animate-pulse" />
              ) : (
                <Lock className="w-12 h-12 text-amber-700" />
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
          <div className="flex items-center justify-center gap-2 text-amber-900/80 font-handwriting text-2xl md:text-3xl font-bold tracking-wide">
            <span>From: {CONFIG.senderName}</span>
            <span className={theme === 'bmw' ? 'text-blue-500' : 'text-amber-500'}>•</span>
            <span>For: {CONFIG.recipientName}</span>
          </div>
          <p className="font-cute text-amber-700/70 text-lg mt-0.5 flex items-center justify-center gap-1.5">
            <Sparkles className={`w-4 h-4 ${theme === 'bmw' ? 'text-blue-500' : 'text-amber-500'}`} />
            {CONFIG.subtitle}
          </p>
          {theme === 'bmw' && (
            <div className="mt-1 flex justify-center">
              <BMWMStripes className="h-2 w-20" />
            </div>
          )}
        </div>

        {/* PIN Indicators */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[0, 1, 2, 3].map((idx) => {
            const isFilled = pin.length > idx;
            return (
              <div
                key={idx}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
                  isSuccess
                    ? 'bg-emerald-500 border-emerald-600 scale-125'
                    : isError
                    ? 'bg-rose-500 border-rose-600 scale-110'
                    : isFilled
                    ? theme === 'bmw'
                      ? 'bg-blue-600 border-blue-800 scale-110 shadow-sm'
                      : 'bg-amber-600 border-amber-700 scale-110 shadow-sm'
                    : 'bg-white/80 border-amber-300'
                }`}
              />
            );
          })}
        </div>

        {/* Custom Numeric Keypad */}
        <div className="grid grid-cols-3 gap-3 w-full max-w-[280px] bg-white/70 p-4 rounded-3xl backdrop-blur-md border border-zinc-200 shadow-xl">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="h-14 rounded-2xl bg-white/95 hover:bg-amber-50 active:scale-95 text-zinc-900 text-2xl font-cute font-bold shadow-sm transition-all duration-150 flex items-center justify-center border border-zinc-100 hover:border-amber-300"
            >
              {num}
            </button>
          ))}

          {/* Spacer */}
          <div className="flex items-center justify-center text-amber-500">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>

          {/* Zero */}
          <button
            onClick={() => handleNumberClick('0')}
            className="h-14 rounded-2xl bg-white/95 hover:bg-amber-50 active:scale-95 text-zinc-900 text-2xl font-cute font-bold shadow-sm transition-all duration-150 flex items-center justify-center border border-zinc-100 hover:border-amber-300"
          >
            0
          </button>

          {/* Delete */}
          <button
            onClick={handleDelete}
            className="h-14 rounded-2xl bg-rose-50/80 hover:bg-rose-100 active:scale-95 text-rose-800 text-xl font-bold shadow-sm transition-all duration-150 flex items-center justify-center border border-rose-100"
            title="Delete"
          >
            <Delete className="w-6 h-6" />
          </button>
        </div>

        {/* Hint text (Exact text preserved) */}
        <p className="font-cute text-amber-800/60 text-sm mt-6 text-center">
          💡 Uk the password very well
        </p>

        {/* Watermark */}
        <div className="mt-8 text-xs font-cute tracking-widest text-amber-800/40 uppercase">
          {CONFIG.instagramTag}
        </div>
      </div>
    </div>
  );
};
