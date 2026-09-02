import React, { useState } from 'react';
import { Send, Flame, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { logVisitorEvent } from '../utils/visitorLogger';

export const PrankScreen = ({ onBypass, theme = 'naruto' }) => {
  const [tapCount, setTapCount] = useState(0);
  const [comment, setComment] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  // Secret bypass: Triple-tap on center icon
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
      particleCount: 80,
      spread: 140,
      origin: { y: 0.5 },
      colors: ['#F59E0B', '#F97316', '#FEF08A', '#38BDF8', '#FFFFFF'],
    });
    const savedMsg = localStorage.getItem('muffi_anger_message') || '';
    if (onBypass) onBypass(savedMsg);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setComment(val);

    // If user types "....." directly, trigger bypass to real site immediately!
    if (val.trim() === '.....') {
      triggerBypass();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = comment.trim();
    if (!trimmed) return;

    if (trimmed === '.....') {
      triggerBypass();
      return;
    }

    // Persist anger message so it's linked into the real site & logs
    localStorage.setItem('muffi_anger_message', trimmed);

    // Trigger shake animation
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);

    // Log the anger vent message to Discord / Webhook / Email
    logVisitorEvent('ANGER_VENT', { comment: trimmed, theme });

    const funReactions = [
      "Anger registered & dumped into the void 🗑️✨",
      "Calm down haha... it's just a prank 🤭",
      "Phew! Did that feel better? 😜",
      "Anger level: 9000+ 🌋 Received!",
      "Noted! But still nothing here... 😈"
    ];
    const randomReaction = funReactions[Math.floor(Math.random() * funReactions.length)];
    setFeedback(randomReaction);
    setComment('');

    setTimeout(() => {
      setFeedback('');
    }, 3800);
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center p-4 bg-[#090b10] text-white select-none overflow-hidden">
      {/* Background Soft Glow Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[140px] pointer-events-none animate-soft-pulse" />
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Clean Minimal Glassmorphism Prank Card */}
      <div className={`relative z-10 max-w-sm w-full p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-white/0 rounded-3xl shadow-glass-dark ${isShaking ? 'animate-shake' : ''}`}>
        <div className="bg-[#121620]/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 text-center border border-white/5">
          
          {/* Clickable Center Emoji */}
          <div
            onClick={handleSecretTap}
            className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-90 hover:scale-105 hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(251,191,36,0.25)] mb-5 shadow-inner group"
            title="🤪"
          >
            <span className="text-4xl select-none group-hover:scale-110 transition-transform duration-200">🤪</span>
          </div>

          {/* Short & Clean Text */}
          <h1 className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
            You have been pranked
          </h1>

          <p className="font-cute text-sm text-zinc-400 mt-2 flex items-center justify-center gap-1">
            <span>Nothing to see here...</span>
            <span className="text-base">🔒</span>
          </p>

          {/* Comment Box: Show your anger here */}
          <div className="mt-7 pt-5 border-t border-zinc-800/80 text-left">
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="anger-input"
                className="text-xs font-mono font-medium text-zinc-300 flex items-center gap-1.5"
              >
                <Flame className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                <span className="tracking-wide">show your anger here</span>
              </label>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">vent box</span>
            </div>

            <form onSubmit={handleSubmit} className="relative flex items-center">
              <input
                id="anger-input"
                type="text"
                value={comment}
                onChange={handleInputChange}
                placeholder="Show your anger here..."
                className="w-full bg-zinc-900/90 border border-zinc-700/70 focus:border-rose-500/80 focus:ring-2 focus:ring-rose-500/30 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 font-sans outline-none transition-all pr-11 shadow-inner"
              />
              <button
                type="submit"
                aria-label="Send anger"
                className="absolute right-1.5 p-1.5 rounded-lg bg-zinc-800 hover:bg-rose-600 text-zinc-400 hover:text-white transition-all active:scale-90 cursor-pointer shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Feedback Toast / Response after submitting */}
            {feedback && (
              <div className="mt-3 text-center text-xs font-mono text-amber-200 bg-amber-950/60 border border-amber-500/40 py-2 px-3 rounded-xl animate-scale-in shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                {feedback}
              </div>
            )}
          </div>

          {/* Secret Master Button (Discreet) */}
          <div className="mt-6 pt-3 border-t border-zinc-800/50 flex justify-center">
            <button
              onClick={triggerBypass}
              className="text-[11px] font-mono text-zinc-600 hover:text-zinc-400 transition-colors py-1 px-4 rounded-full hover:bg-zinc-800/50 active:scale-95 cursor-pointer"
              title="Secret Bypass"
            >
              • • •
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
