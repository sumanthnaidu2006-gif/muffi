import React, { useState } from 'react';
import { Send, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { logVisitorEvent } from '../utils/visitorLogger';

export const PrankScreen = ({ onBypass, theme = 'bmw' }) => {
  const [tapCount, setTapCount] = useState(0);
  const [comment, setComment] = useState('');
  const [feedback, setFeedback] = useState('');

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
      particleCount: 70,
      spread: 120,
      origin: { y: 0.5 },
    });
    if (onBypass) onBypass();
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    setComment(val);

    // If user types "..." directly, trigger bypass to real site immediately!
    if (val.trim() === '...' || val.trim() === '…') {
      triggerBypass();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = comment.trim();
    if (!trimmed) return;

    if (trimmed === '...' || trimmed === '…') {
      triggerBypass();
      return;
    }

    // Log the anger vent message to Discord / Webhook
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
    }, 3500);
  };

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center p-4 bg-[#090b10] text-white select-none overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Clean Minimal Prank Box */}
      <div className="relative z-10 max-w-sm w-full bg-[#121620]/90 border border-zinc-800 rounded-3xl p-6 sm:p-8 text-center shadow-2xl backdrop-blur-xl">
        
        {/* Clickable Center Emoji */}
        <div
          onClick={handleSecretTap}
          className="mx-auto w-20 h-20 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center cursor-pointer transition-transform active:scale-90 hover:scale-105 mb-5 shadow-inner"
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

        {/* Comment Box: Show your anger here */}
        <div className="mt-7 pt-5 border-t border-zinc-800/80 text-left">
          <div className="flex items-center justify-between mb-2">
            <label
              htmlFor="anger-input"
              className="text-xs font-mono font-medium text-zinc-400 flex items-center gap-1.5"
            >
              <Flame className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
              <span>show your anger here</span>
            </label>
            <span className="text-[10px] font-mono text-zinc-600">vent box</span>
          </div>

          <form onSubmit={handleSubmit} className="relative flex items-center">
            <input
              id="anger-input"
              type="text"
              value={comment}
              onChange={handleInputChange}
              placeholder="Show your anger here..."
              className="w-full bg-zinc-900/90 border border-zinc-700/80 focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/50 rounded-xl px-3.5 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 font-sans outline-none transition-all pr-10 shadow-inner"
            />
            <button
              type="submit"
              aria-label="Send anger"
              className="absolute right-1.5 p-1.5 rounded-lg bg-zinc-800 hover:bg-rose-600 text-zinc-400 hover:text-white transition-colors active:scale-95 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Feedback Toast / Response after submitting */}
          {feedback && (
            <div className="mt-2.5 text-center text-xs font-mono text-amber-300/90 bg-amber-950/40 border border-amber-800/50 py-1.5 px-3 rounded-lg">
              {feedback}
            </div>
          )}
        </div>

        {/* Secret Master Button (Discreet) */}
        <div className="mt-5 pt-3 border-t border-zinc-800/50 flex justify-center">
          <button
            onClick={triggerBypass}
            className="text-[11px] font-mono text-zinc-600 hover:text-zinc-400 transition-colors py-0.5 px-3 rounded-full hover:bg-zinc-800/50"
            title="Secret"
          >
            • • •
          </button>
        </div>
      </div>
    </div>
  );
};
