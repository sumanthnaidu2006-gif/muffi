import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Mic, Volume2, ExternalLink } from 'lucide-react';
import { CONFIG } from '../../config';
import { BMWM3Car } from '../BMWComponents';
import { ChibiHinata, RamenSticker } from '../NarutoCharacters';

export const VoiceNotePlayer = ({ theme = 'naruto' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(12);
  const [showTranscript, setShowTranscript] = useState(false);

  const audioRef = useRef(null);

  // Audio event handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoaded = () => {
      if (audio.duration && isFinite(audio.duration)) {
        setAudioDuration(Math.round(audio.duration));
      }
    };

    const handleTime = () => {
      if (audio.duration) {
        setCurrentTime(audio.currentTime);
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnd = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener('loadedmetadata', handleLoaded);
    audio.addEventListener('durationchange', handleLoaded);
    audio.addEventListener('timeupdate', handleTime);
    audio.addEventListener('ended', handleEnd);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoaded);
      audio.removeEventListener('durationchange', handleLoaded);
      audio.removeEventListener('timeupdate', handleTime);
      audio.removeEventListener('ended', handleEnd);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error('Audio play error:', err);
      });
    }
  };

  const handleSeek = (percent) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const targetTime = (percent / 100) * audio.duration;
    audio.currentTime = targetTime;
    setCurrentTime(targetTime);
    setProgress(percent);
  };

  const formatTime = (secs) => {
    const s = Math.floor(secs || 0);
    const mins = Math.floor(s / 60);
    const remainingSecs = s % 60;
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  const waveHeights = [25, 45, 80, 35, 95, 60, 100, 45, 85, 95, 55, 75, 35, 85, 65, 95, 45, 70, 90, 40, 75, 55, 95, 45, 65];

  return (
    <div className="relative group">
      {/* HTML5 Audio Element connected to your converted MP3 voice note */}
      <audio
        ref={audioRef}
        src="/voice_note.mp3"
        preload="auto"
      />

      {/* Corner badge based on theme */}
      {theme === 'bmw' ? (
        <div className="absolute -top-10 -left-4 z-20 transform -rotate-6 hover:scale-110 transition-transform">
          <BMWM3Car className="w-20 h-14" />
        </div>
      ) : (
        <>
          <div className="absolute -top-12 -left-6 z-20 transform -rotate-6 hover:scale-110 transition-transform">
            <ChibiHinata className="w-18 h-18" />
          </div>
          <div className="absolute -bottom-4 -right-4 z-20 rotate-12 hover:scale-110 transition-transform">
            <RamenSticker className="w-12 h-12" />
          </div>
        </>
      )}

      {/* Main Voice Note Card */}
      <div className="relative bg-white/95 border-2 border-zinc-200 rounded-3xl p-4 sm:p-5 shadow-scrapbook hover:shadow-xl transition-all duration-300">
        
        {/* Top Header (Exact words preserved) */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-full flex items-center justify-center ${theme === 'bmw' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
              <Mic className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-zinc-900 leading-none">
                {CONFIG.voiceNote.title}
              </h4>
              <p className={`font-cute text-xs font-semibold mt-0.5 ${theme === 'bmw' ? 'text-blue-700' : 'text-emerald-700'}`}>
                {CONFIG.voiceNote.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="text-[11px] font-cute px-2.5 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200 transition-colors"
          >
            {showTranscript ? 'Hide text' : 'Read transcript 💬'}
          </button>
        </div>

        {/* Audio Waveform & Play Button Container */}
        <div className="flex items-center gap-3 bg-[#f8f9fa] p-3 rounded-2xl border border-zinc-200 shadow-inner">
          
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-md transition-all duration-150 active:scale-90 text-white cursor-pointer ${
              theme === 'bmw'
                ? 'bg-gradient-to-tr from-blue-700 to-sky-500 hover:from-blue-600 hover:to-sky-400 shadow-blue-500/30'
                : 'bg-gradient-to-tr from-emerald-700 to-emerald-500 hover:from-emerald-600 hover:to-emerald-400 shadow-emerald-500/30'
            }`}
            title={isPlaying ? 'Pause voice note' : 'Play voice note'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>

          {/* Dynamic Interactive Waveform Bars */}
          <div className="flex-1 flex items-center gap-[3px] h-9 overflow-hidden">
            {waveHeights.map((h, index) => {
              const barProgressPercent = (index / waveHeights.length) * 100;
              const isPlayed = progress >= barProgressPercent;
              return (
                <div
                  key={index}
                  className="flex-1 flex items-center justify-center h-full cursor-pointer py-1"
                  onClick={() => handleSeek(barProgressPercent)}
                >
                  <span
                    className={`w-full max-w-[4px] rounded-full transition-all duration-150 ${
                      isPlayed
                        ? theme === 'bmw'
                          ? index % 3 === 0 ? 'bg-[#009FE3]' : index % 3 === 1 ? 'bg-[#0019A8]' : 'bg-[#E2001A]'
                          : 'bg-emerald-600'
                        : isPlaying
                        ? 'bg-emerald-200'
                        : 'bg-zinc-300'
                    }`}
                    style={{
                      height: isPlaying ? `${Math.min(100, Math.max(15, h * (isPlayed ? 1.05 : 0.75) + (index % 2 === 0 ? 8 : -8)))}%` : `${h * 0.7}%`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Duration / Counter */}
          <div className="text-right flex-shrink-0 font-mono text-xs text-zinc-500 min-w-[36px]">
            {isPlaying ? formatTime(currentTime) : formatTime(audioDuration)}
          </div>
        </div>

        {/* Transcript Box (Exact words preserved) */}
        {showTranscript && (
          <div className="mt-3 p-3.5 bg-amber-50/90 rounded-2xl border border-amber-200/80 font-cute text-sm text-zinc-900 animate-slide-up shadow-sm">
            <p className="italic leading-relaxed">"{CONFIG.voiceNote.transcript}"</p>
          </div>
        )}
      </div>
    </div>
  );
};
