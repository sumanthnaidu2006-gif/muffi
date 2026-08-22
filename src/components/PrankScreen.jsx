import React, { useState } from 'react';
import { Skull, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

export const PrankScreen = ({ onBypass, theme = 'bmw' }) => {
  const [tapCount, setTapCount] = useState(0);

  // Secret bypass: Triple-tap or single click on the secret center icon to bypass
  const handleSecretTap = () => {
    const next = tapCount + 1;
    setTapCount(next);

    if (next >= 3) {
      triggerBypass();
    } else {
      setTimeout(() => setTapCount(0), 1000);
    }
  };

  const triggerBypass = () => {
    confetti({
      particleCount: 70,
      spread: 120,
      origin: { y: 0.5 },
    });
    if (onBypass) onBypass();
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center p-4 bg-[#090b10] text-white select-none overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Clean Minimal Prank Box (No names shown) */}
      <div className="relative z-10 max-w-sm w-full bg-[#121620]/90 border border-zinc-800 rounded-3xl p-8 text-center shadow-2xl backdrop-blur-xl">
        
        {/* Secret Clickable Center Emoji (Triple-tap to remove) */}
        <div
          onClick={handleSecretTap}
          className="mx-auto w-20 h-20 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center cursor-pointer transition-transform active:scale-90 hover:scale-105 mb-6"
          title="🤪"
        >
          <span className="text-4xl select-none">🤪</span>
        </div>

        {/* Short & Clean Text */}
        <h1 className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
          You have been pranked
        </h1>

        <p className="font-cute text-sm text-zinc-400 mt-2">
          Nothing to see here... 🔒
        </p>

        {/* Secret Master Button (Discreet) */}
        <div className="mt-8 pt-4 border-t border-zinc-800/80">
          <button
            onClick={triggerBypass}
            className="text-[11px] font-mono text-zinc-600 hover:text-zinc-400 transition-colors py-1 px-3 rounded-full hover:bg-zinc-800/50"
          >
            • • •
          </button>
        </div>
      </div>
    </div>
  );
};
