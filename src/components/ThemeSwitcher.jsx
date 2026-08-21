import React from 'react';
import { Sparkles } from 'lucide-react';
import { BMWLogo } from './BMWComponents';
import { ChibiNaruto } from './NarutoCharacters';

export const ThemeSwitcher = ({ currentTheme, onToggleTheme, className = "" }) => {
  return (
    <div className={`inline-flex items-center p-1 rounded-full bg-white/90 backdrop-blur-md border-2 border-zinc-300 shadow-md transition-all ${className}`}>
      {/* Naruto Option */}
      <button
        onClick={() => onToggleTheme('naruto')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-cute font-bold transition-all duration-200 ${
          currentTheme === 'naruto'
            ? 'bg-amber-500 text-white shadow-sm scale-105'
            : 'text-zinc-600 hover:text-amber-700 hover:bg-amber-50'
        }`}
        title="Switch to Naruto Theme"
      >
        <span className="text-sm">🍃</span>
        <span>Naruto</span>
      </button>

      {/* BMW Option */}
      <button
        onClick={() => onToggleTheme('bmw')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-cute font-bold transition-all duration-200 ${
          currentTheme === 'bmw'
            ? 'bg-blue-600 text-white shadow-sm scale-105'
            : 'text-zinc-600 hover:text-blue-700 hover:bg-blue-50'
        }`}
        title="Switch to BMW M Theme"
      >
        <span className="text-sm">🏎️</span>
        <span>BMW M</span>
      </button>
    </div>
  );
};
