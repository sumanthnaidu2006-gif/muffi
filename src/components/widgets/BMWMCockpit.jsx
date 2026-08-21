import React, { useState, useEffect, useRef } from 'react';
import { Gauge, Zap, Flame, Compass, Volume2, ShieldAlert } from 'lucide-react';
import { CONFIG } from '../../config';
import { BMWLogo, BMWMStripes, StartEngineButton } from '../BMWComponents';

export const BMWMCockpit = () => {
  const [rpm, setRpm] = useState(1000);
  const [speed, setSpeed] = useState(0);
  const [boost, setBoost] = useState(0.2);
  const [gear, setGear] = useState('P');
  const [isReving, setIsReving] = useState(false);
  const [driveMode, setDriveMode] = useState('SPORT PLUS'); // 'COMFORT' | 'SPORT PLUS' | 'M TRACK'
  const [launchReady, setLaunchReady] = useState(false);

  const revIntervalRef = useRef(null);
  const audioContextRef = useRef(null);

  // Synthesize realistic engine rev sound using Web Audio API oscillator
  const startEngineSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      audioContextRef.current = ctx;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(65, ctx.currentTime); // Low idle rumble
      gain.gain.setValueAtTime(0.08, ctx.currentTime);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 1.2); // Rev up to high pitch
      gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 1.2);
    } catch (e) {}
  };

  const stopEngineSound = () => {
    if (audioContextRef.current) {
      try {
        audioContextRef.current.close();
      } catch (e) {}
    }
  };

  // Rev throttle loop
  useEffect(() => {
    if (isReving) {
      setGear('D1');
      startEngineSound();
      revIntervalRef.current = setInterval(() => {
        setRpm((prev) => {
          const next = prev + Math.floor(Math.random() * 400 + 350);
          if (next >= 7500) {
            setLaunchReady(true);
            return 7800 + Math.floor(Math.random() * 200); // bouncing on rev limiter
          }
          return next;
        });

        setSpeed((prev) => Math.min(265, prev + Math.floor(Math.random() * 18 + 12)));
        setBoost((prev) => Math.min(2.4, +(prev + 0.15).toFixed(2)));
      }, 60);
    } else {
      stopEngineSound();
      if (revIntervalRef.current) clearInterval(revIntervalRef.current);
      // Smooth idle decay
      const decayTimer = setInterval(() => {
        setRpm((prev) => {
          if (prev <= 1050) {
            clearInterval(decayTimer);
            setGear('P');
            setLaunchReady(false);
            return 950;
          }
          return Math.max(950, prev - 450);
        });
        setSpeed((prev) => Math.max(0, prev - 25));
        setBoost((prev) => Math.max(0.2, +(prev - 0.25).toFixed(2)));
      }, 50);
    }

    return () => {
      if (revIntervalRef.current) clearInterval(revIntervalRef.current);
    };
  }, [isReving]);

  // Calculate needle rotation (0 to 180 deg)
  const rpmDeg = -90 + (rpm / 8000) * 180;
  const speedDeg = -90 + (speed / 300) * 180;
  const isRedline = rpm >= 6800;

  return (
    <div className="relative group w-full select-none">
      {/* Carbon Fiber Outer Bezel */}
      <div className="relative bg-[#0d0f12] border-2 border-zinc-800 rounded-3xl p-5 sm:p-6 shadow-2xl overflow-hidden text-white">
        
        {/* Subtle Carbon Fiber Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#ef4444 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
          }}
        />

        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4 relative z-10">
          <div className="flex items-center gap-2">
            <BMWLogo className="w-8 h-8" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm sm:text-base tracking-wider text-white font-mono">
                  M3 G80 COMPETITION
                </span>
                <BMWMStripes className="h-2 w-12" />
              </div>
              <p className="text-[10px] text-zinc-400 font-mono tracking-tight flex items-center gap-2">
                <span>PILOT: {CONFIG.senderName?.toUpperCase()}</span>
                <span>•</span>
                <span className="text-sky-400 font-bold">CO-PILOT: {CONFIG.recipientName?.toUpperCase()} ❤️</span>
              </p>
            </div>
          </div>

          {/* Drive Mode Selector */}
          <div className="flex items-center gap-1 bg-zinc-900/90 p-1 rounded-full border border-zinc-800">
            {['COMFORT', 'SPORT PLUS', 'M TRACK'].map((mode) => (
              <button
                key={mode}
                onClick={() => setDriveMode(mode)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold transition-all ${
                  driveMode === mode
                    ? mode === 'M TRACK'
                      ? 'bg-red-600 text-white shadow-md'
                      : mode === 'SPORT PLUS'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-emerald-600 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Digital M Instrument Cluster (Dual Gauges) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 py-2">
          
          {/* 1. TACHOMETER (RPM) */}
          <div className="bg-[#12151b] border border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center relative shadow-inner">
            {/* Redline Warning Flash */}
            {isRedline && (
              <div className="absolute inset-0 bg-red-600/15 animate-pulse rounded-2xl pointer-events-none" />
            )}

            {/* Gauge Dial */}
            <div className="relative w-44 h-24 flex items-end justify-center overflow-hidden">
              {/* Dial Track */}
              <div className="w-40 h-40 rounded-full border-8 border-zinc-800 border-t-blue-500 border-r-red-500 transform rotate-45 absolute -top-16" />
              {/* Needle */}
              <div
                className="w-1.5 h-20 bg-gradient-to-t from-red-600 to-amber-300 origin-bottom transition-transform duration-75 rounded-t-full shadow-lg"
                style={{
                  transform: `rotate(${rpmDeg}deg)`,
                }}
              />
              <div className="w-5 h-5 rounded-full bg-zinc-900 border-2 border-white absolute bottom-0 shadow-md" />
            </div>

            {/* Digital Readout */}
            <div className="mt-2 text-center">
              <span className={`font-mono text-3xl sm:text-4xl font-extrabold tracking-tight ${isRedline ? 'text-red-500 animate-bounce' : 'text-white'}`}>
                {rpm.toLocaleString()}
              </span>
              <span className="text-[10px] font-mono text-zinc-400 block tracking-widest uppercase">
                RPM × 1000 • 8000 REDLINE
              </span>
            </div>

            {/* Shift Lights Bar */}
            <div className="flex gap-1 mt-2">
              {[1, 2, 3, 4, 5, 6, 7].map((bar) => {
                const active = rpm >= bar * 1050;
                const isRed = bar >= 6;
                return (
                  <div
                    key={bar}
                    className={`w-4 h-1.5 rounded-sm transition-all duration-75 ${
                      active
                        ? isRed
                          ? 'bg-red-500 shadow-sm shadow-red-500'
                          : 'bg-amber-400'
                        : 'bg-zinc-800'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* 2. SPEEDOMETER (KM/H) */}
          <div className="bg-[#12151b] border border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center relative shadow-inner">
            {/* Gauge Dial */}
            <div className="relative w-44 h-24 flex items-end justify-center overflow-hidden">
              <div className="w-40 h-40 rounded-full border-8 border-zinc-800 border-t-sky-400 transform rotate-45 absolute -top-16" />
              {/* Needle */}
              <div
                className="w-1.5 h-20 bg-gradient-to-t from-sky-400 to-blue-600 origin-bottom transition-transform duration-75 rounded-t-full shadow-lg"
                style={{
                  transform: `rotate(${speedDeg}deg)`,
                }}
              />
              <div className="w-5 h-5 rounded-full bg-zinc-900 border-2 border-white absolute bottom-0 shadow-md" />
            </div>

            {/* Digital Readout */}
            <div className="mt-2 text-center">
              <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {speed}
              </span>
              <span className="text-[10px] font-mono text-zinc-400 block tracking-widest uppercase">
                KM/H SPEED • GEAR: <span className="text-red-400 font-bold">{gear}</span>
              </span>
            </div>

            {/* Boost Pressure */}
            <div className="flex items-center gap-2 mt-2 text-[11px] font-mono text-zinc-400">
              <span>TWIN-TURBO BOOST:</span>
              <span className="text-amber-400 font-bold">{boost} BAR</span>
            </div>
          </div>
        </div>

        {/* Center Dashboard Status Banner */}
        <div className="my-4 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-blue-400" />
            <span>DESTINATION: <strong className="text-white font-cute text-sm">Bengaluru 📍</strong></span>
          </div>

          <div className="flex items-center gap-2">
            {launchReady ? (
              <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white font-extrabold text-[10px] animate-pulse flex items-center gap-1">
                <Flame className="w-3 h-3 fill-current" />
                LAUNCH CONTROL READY 🚀
              </span>
            ) : (
              <span className="text-zinc-400 text-[11px]">
                ROAD: <strong className="text-emerald-400">NICE ROAD EXPRESSWAY</strong>
              </span>
            )}
          </div>
        </div>

        {/* Interactive Gas Pedal & Start Engine Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          
          {/* Press & Hold Gas Pedal (Desktop mouse / Mobile touch) */}
          <button
            onMouseDown={() => setIsReving(true)}
            onMouseUp={() => setIsReving(false)}
            onMouseLeave={() => setIsReving(false)}
            onTouchStart={() => setIsReving(true)}
            onTouchEnd={() => setIsReving(false)}
            className={`w-full sm:w-auto px-8 py-3.5 rounded-2xl font-mono font-extrabold text-sm flex items-center justify-center gap-2.5 shadow-xl transition-all active:scale-95 cursor-pointer ${
              isReving
                ? 'bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 text-white scale-105 shadow-red-500/50'
                : 'bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white shadow-blue-500/30'
            }`}
          >
            <Zap className={`w-4 h-4 ${isReving ? 'animate-bounce fill-current' : ''}`} />
            <span>{isReving ? 'REVING M TWIN-TURBO 🏁💨' : 'HOLD GAS PEDAL TO REV 🏎️'}</span>
          </button>

          {/* Quick Rev Tap */}
          <button
            onClick={() => {
              setIsReving(true);
              setTimeout(() => setIsReving(false), 900);
            }}
            className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 active:scale-95 text-zinc-200 font-mono text-xs font-bold border border-zinc-700 flex items-center justify-center gap-2"
          >
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Quick Rev Blip 💨</span>
          </button>
        </div>

        {/* Hint footer */}
        <p className="font-cute text-xs text-zinc-500 text-center mt-3">
          💡 Press and hold the gas pedal button to push the M3 to 8,000 RPM redline & hear the engine roar!
        </p>
      </div>
    </div>
  );
};
