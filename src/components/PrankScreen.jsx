import React, { useState, useEffect, useRef } from 'react';
import { ShieldAlert, AlertTriangle, Skull, Lock, Key, Flame, Zap, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONFIG } from '../config';
import { logVisitorEvent } from '../utils/visitorLogger';

export const PrankScreen = ({ onBypass, theme = 'bmw' }) => {
  const [tapCount, setTapCount] = useState(0);
  const [prankMessage, setPrankMessage] = useState('');
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });
  const [showSecretModal, setShowSecretModal] = useState(false);
  const [masterCode, setMasterCode] = useState('');
  const [masterError, setMasterError] = useState(false);
  const [countdown, setCountdown] = useState(60);

  // Funny prank failure quotes
  const prankQuotes = [
    "Nice try! 😜 Access Denied!",
    "Arey Muffi, antha easy ga raadhu le 😂",
    "Error 404: Permission Not Found 💀",
    "Only Siddhu has the master key! 🔐",
    "Beg Siddhu nicely for the password 🫠",
    "Warning: Self destruct in 3... 2... jk 💣",
    "Siddhu ni adugu first 🏃‍♂️💨",
    "Access Denied Level 9999 🛑"
  ];

  // Self destruct timer loop (resets continuously for comedy)
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev <= 1 ? 59 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Secret Tap on Skull Icon (3 rapid taps unlocks!)
  const handleSecretIconTap = () => {
    const nextCount = tapCount + 1;
    setTapCount(nextCount);

    if (nextCount >= 3) {
      triggerBypassSuccess();
    } else {
      setTimeout(() => setTapCount(0), 1200);
    }
  };

  // Runaway button when hovering or clicking
  const handleRunawayButton = () => {
    const randomX = Math.floor(Math.random() * 240 - 120);
    const randomY = Math.floor(Math.random() * 160 - 80);
    setBtnPos({ x: randomX, y: randomY });

    const randomQuote = prankQuotes[Math.floor(Math.random() * prankQuotes.length)];
    setPrankMessage(randomQuote);
  };

  // Master code verification
  const handleMasterSubmit = (e) => {
    e.preventDefault();
    if (masterCode === CONFIG.passcode || masterCode.toLowerCase() === 'siddhu' || masterCode === '3117') {
      setShowSecretModal(false);
      triggerBypassSuccess();
    } else {
      setMasterError(true);
      setTimeout(() => setMasterError(false), 1000);
      setMasterCode('');
    }
  };

  const triggerBypassSuccess = () => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.5 },
      colors: ['#EF4444', '#F59E0B', '#3B82F6', '#10B981'],
    });
    logVisitorEvent('PRANK_BYPASSED', { theme });
    if (onBypass) onBypass();
  };

  const isBMW = theme === 'bmw';

  return (
    <div
      className={`min-h-screen w-full relative flex flex-col items-center justify-center p-4 select-none overflow-hidden transition-colors duration-700 ${
        isBMW
          ? 'bg-gradient-to-b from-[#0a0505] via-[#120808] to-[#050202] text-red-500'
          : 'bg-gradient-to-b from-[#1a0a00] via-[#260e00] to-[#0f0500] text-amber-500'
      }`}
    >
      {/* Glitch Grid Background Overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ef4444 1px, transparent 1px), radial-gradient(#f59e0b 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
      />

      {/* Top Red Alert Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 animate-pulse z-20" />

      {/* Ambient Pulsing Emergency Lights */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-red-600/15 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* Main Prank Box */}
      <div className="relative z-10 max-w-md w-full bg-[#140b0b]/90 border-2 border-red-600/80 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(239,68,68,0.35)] text-center backdrop-blur-xl animate-bloom-pop">
        
        {/* Siren Alert Header */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-red-400 mb-3 animate-pulse">
          <ShieldAlert className="w-5 h-5 text-red-500 animate-bounce" />
          <span>SECURITY LOCKOUT • ERROR 403</span>
          <ShieldAlert className="w-5 h-5 text-red-500 animate-bounce" />
        </div>

        {/* Secret Clickable Skull Icon (Triple Tap to Bypass!) */}
        <div
          onClick={handleSecretIconTap}
          className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-tr from-red-950 via-red-900 to-zinc-900 border-2 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.6)] flex items-center justify-center cursor-pointer transition-transform active:scale-90 hover:scale-110 mb-4 group"
          title="Secret override? (Triple-tap me)"
        >
          <Skull className="w-12 h-12 text-red-400 group-hover:text-red-200 animate-wiggle" />
          {tapCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-ping">
              {tapCount}
            </span>
          )}
        </div>

        {/* Big Prank Heading */}
        <h1 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight leading-tight uppercase drop-shadow-[0_2px_15px_rgba(239,68,68,0.8)]">
          YOU HAVE BEEN PRANKED! 🤪
        </h1>

        {/* Subtitle Message */}
        <p className="font-cute text-base sm:text-lg text-red-300 font-bold mt-2 leading-relaxed">
          Arey {CONFIG.recipientName}, em anukuntunnav? Easy ga website chusesthava? 😭😂
        </p>

        <p className="font-mono text-xs text-zinc-400 mt-2 bg-black/60 p-2.5 rounded-xl border border-red-900/60">
          🔒 Only <strong className="text-red-400 font-bold">{CONFIG.senderName}</strong> has the Master Override Key to remove this lock!
        </p>

        {/* Fake Self Destruct Counter */}
        <div className="my-4 flex items-center justify-center gap-2 text-xs font-mono bg-red-950/60 text-red-400 py-1.5 px-4 rounded-full border border-red-800/80">
          <Flame className="w-3.5 h-3.5 text-amber-500 animate-bounce" />
          <span>LOCKDOWN TIMER: <strong>00:{countdown < 10 ? `0${countdown}` : countdown}</strong></span>
        </div>

        {/* Prank Feedback Alert */}
        {prankMessage && (
          <div className="mb-4 p-2.5 rounded-xl bg-red-900/80 border border-red-500 text-white text-xs font-bold font-cute animate-bounce shadow-lg">
            {prankMessage}
          </div>
        )}

        {/* Interactive Fake Action Buttons */}
        <div className="flex flex-col gap-3 mt-4 relative">
          
          {/* Runaway "Unlock" Button */}
          <div className="relative h-12 flex items-center justify-center">
            <button
              onMouseEnter={handleRunawayButton}
              onClick={handleRunawayButton}
              onTouchStart={handleRunawayButton}
              style={{
                transform: `translate(${btnPos.x}px, ${btnPos.y}px)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="absolute px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono font-extrabold text-xs shadow-xl active:scale-95 cursor-pointer uppercase tracking-wider border border-red-400"
            >
              🔓 Attempt Emergency Bypass
            </button>
          </div>

          {/* Ask Siddhu Button */}
          <button
            onClick={() => {
              setPrankMessage(`Calling ${CONFIG.senderName}... He said: "No access for you today! 😜"`);
            }}
            className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-cute text-xs font-bold border border-zinc-800 transition-colors"
          >
            📞 Beg {CONFIG.senderName} for the Secret Key
          </button>
        </div>

        {/* Secret Master Key Modal Trigger (Discreet bottom key for Siddhu) */}
        <div className="mt-6 pt-4 border-t border-red-900/40 flex items-center justify-between text-[10px] font-mono text-zinc-500">
          <span>SEC-ID: #PRANK-3117</span>
          <button
            onClick={() => setShowSecretModal(true)}
            className="text-zinc-600 hover:text-red-400 transition-colors p-1 flex items-center gap-1"
            title="Siddhu Master Bypass"
          >
            <Key className="w-3.5 h-3.5" />
            <span>Master Override</span>
          </button>
        </div>
      </div>

      {/* Secret Password Modal for Siddhu */}
      {showSecretModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#120a0a] border-2 border-red-500 rounded-3xl p-6 max-w-xs w-full shadow-2xl text-center">
            <Key className="w-10 h-10 text-amber-400 mx-auto mb-2 animate-bounce" />
            <h3 className="text-white font-mono font-bold text-sm">
              Siddhu's Master Key Override
            </h3>
            <p className="text-xs text-zinc-400 font-cute mt-1">
              Enter the master passcode to remove this prank:
            </p>

            <form onSubmit={handleMasterSubmit} className="mt-4">
              <input
                type="password"
                value={masterCode}
                onChange={(e) => setMasterCode(e.target.value)}
                placeholder="Enter 3117 or siddhu"
                className={`w-full px-4 py-2.5 rounded-xl bg-black border text-white font-mono text-center text-sm outline-none ${
                  masterError ? 'border-red-500 animate-bounce' : 'border-zinc-700 focus:border-red-500'
                }`}
                autoFocus
              />
              <div className="flex gap-2 mt-3">
                <button
                  type="button"
                  onClick={() => setShowSecretModal(false)}
                  className="flex-1 py-2 rounded-xl bg-zinc-900 text-zinc-400 text-xs font-mono hover:bg-zinc-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold"
                >
                  Unlock 🔓
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
