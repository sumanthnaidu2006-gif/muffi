import React, { useState } from 'react';
import { Sparkles, Heart, Lock, Volume2, VolumeX } from 'lucide-react';
import { CONFIG } from '../config';
import { SpotifyPlayer } from './widgets/SpotifyPlayer';
import { VoiceNotePlayer } from './widgets/VoiceNotePlayer';
import { PolaroidGallery } from './widgets/PolaroidGallery';
import { MemoryMap } from './widgets/MemoryMap';
import { VinylRecord } from './widgets/VinylRecord';
import { LoveLetterCard } from './widgets/LoveLetterCard';
import { VideoFrame } from './widgets/VideoFrame';
import {
  BMWLogo,
  BMWMStripes,
  BMWM3Car,
  StartEngineButton,
  TurboBoostGauge,
} from './BMWComponents';
import {
  ChibiNaruto,
  ChibiHinata,
  ChibiSasuke,
  ChibiKakashi,
  ChibiKurama,
  RamenSticker,
} from './NarutoCharacters';
import { AudioController } from './AudioController';
import { ThemeSwitcher } from './ThemeSwitcher';

export const ScrapbookBoard = ({ onRelock, theme = 'bmw', onToggleTheme }) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const toggleMusic = () => {
    setIsPlayingMusic(!isPlayingMusic);
  };

  return (
    <div className="min-h-screen w-full relative bg-[#fcf8ee] text-[#453a2d] pb-24 overflow-x-hidden selection:bg-amber-200">
      
      {/* Top Header Bar Accent */}
      {theme === 'bmw' ? (
        <div className="h-1.5 w-full flex sticky top-0 z-50">
          <div className="flex-1 bg-[#009FE3]" />
          <div className="flex-1 bg-[#0019A8]" />
          <div className="flex-1 bg-[#E2001A]" />
        </div>
      ) : (
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 sticky top-0 z-50" />
      )}

      {/* Background Audio Controller */}
      <AudioController isPlaying={isPlayingMusic} onTogglePlay={toggleMusic} />

      {/* Top Floating Navbar / Header */}
      <header className="sticky top-1.5 z-40 bg-[#fcf8ee]/90 backdrop-blur-md border-b border-zinc-200/80 px-4 sm:px-8 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          {theme === 'bmw' ? (
            <BMWLogo className="w-7 h-7" />
          ) : (
            <span className="text-xl">🌸</span>
          )}
          <h1 className="font-handwriting text-2xl sm:text-3xl font-bold text-zinc-950">
            For {CONFIG.recipientName} ✨
          </h1>
          {theme === 'bmw' && <BMWMStripes className="h-2 w-10 hidden sm:inline-flex" />}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Interactive Theme Switcher in Navbar */}
          <ThemeSwitcher currentTheme={theme} onToggleTheme={onToggleTheme} />

          {/* Music Toggle */}
          <button
            onClick={toggleMusic}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-cute font-bold transition-all shadow-sm ${
              isPlayingMusic
                ? theme === 'bmw'
                  ? 'bg-blue-600 text-white'
                  : 'bg-amber-600 text-white'
                : 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200'
            }`}
            title="Toggle background music"
          >
            {isPlayingMusic ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span>Playing Music</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Muted</span>
              </>
            )}
          </button>

          {/* Relock Button */}
          <button
            onClick={onRelock}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs font-cute transition-colors"
            title="Lock scrapbook"
          >
            <Lock className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Lock</span>
          </button>
        </div>
      </header>

      {/* Hero Dedication Section (Exact words preserved) */}
      <section className="max-w-5xl mx-auto px-4 pt-8 pb-4 text-center relative">
        {/* Floating Theme Stickers on top */}
        {theme === 'bmw' ? (
          <>
            <div className="absolute top-2 left-4 sm:left-12 transform -rotate-12 animate-float-slow hidden md:block">
              <BMWM3Car className="w-24 h-16" />
            </div>
            <div className="absolute top-2 right-4 sm:right-12 transform rotate-12 animate-float hidden md:block">
              <StartEngineButton className="w-16 h-16" />
            </div>
          </>
        ) : (
          <>
            <div className="absolute top-2 left-4 sm:left-12 transform -rotate-12 animate-float-slow hidden md:block">
              <ChibiNaruto className="w-20 h-20" expression="happy" />
            </div>
            <div className="absolute top-2 right-4 sm:right-12 transform rotate-12 animate-float hidden md:block">
              <ChibiHinata className="w-20 h-20" />
            </div>
          </>
        )}

        <div className="inline-block relative">
          {/* Washi tape over title */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-48 h-6 washi-tape-yellow -rotate-1 opacity-90 rounded-sm" />

          <div className="bg-white/85 border-2 border-zinc-200/90 rounded-3xl px-8 py-5 shadow-scrapbook">
            <span className="font-cute text-sm uppercase tracking-widest text-amber-700 font-bold block mb-1">
              ✨ Next time manam photos digaka evi marchali ee 😭😭 ✨
            </span>
            <h2 className="font-handwriting text-4xl sm:text-6xl font-bold text-zinc-950">
              For {CONFIG.recipientName}, with Love
            </h2>
            <p className="font-cute text-base sm:text-xl text-amber-800/80 mt-1">
              From: {CONFIG.senderName} • "telusa naku unna rogalu anni poyay ee ante hope so 🥲"
            </p>
          </div>
        </div>
      </section>

      {/* Main Scrapbook Collage Board */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols on lg screens) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Spotify / Favorite Person Player */}
            <SpotifyPlayer
              isPlaying={isPlayingMusic}
              onTogglePlay={toggleMusic}
              theme={theme}
            />

            {/* Voice Note Player */}
            <VoiceNotePlayer theme={theme} />

            {/* Mystery Track */}
            <div className="bg-[#fffdf8] border-2 border-zinc-200 rounded-3xl p-6 shadow-scrapbook flex flex-col items-center justify-center relative">
              <div className="absolute top-3 left-4">
                <span className="font-handwriting text-2xl font-bold text-zinc-900">
                  Mystery Track 🕵️‍♂️🎶
                </span>
              </div>
              <div className="mt-4 w-full">
                <VinylRecord
                  isPlaying={isPlayingMusic}
                  onTogglePlay={toggleMusic}
                  theme={theme}
                />
              </div>
            </div>

            {/* Video Frame Widget */}
            <VideoFrame />
          </div>

          {/* Right Column (7 cols on lg screens) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Love Letter Card */}
            <LoveLetterCard theme={theme} />

            {/* Polaroid Photo Booth Gallery (my fav 📷) */}
            <div className="bg-[#fffdf8] border-2 border-zinc-200 rounded-3xl p-6 shadow-scrapbook">
              <PolaroidGallery theme={theme} />
            </div>

            {/* Interactive Memory Map */}
            <MemoryMap theme={theme} />
          </div>
        </div>
      </main>

      {/* Floating Animated Stickers Bar at Bottom (Exact words preserved) */}
      <section className="max-w-4xl mx-auto mt-14 px-4">
        <div className="bg-white/80 border-2 border-dashed border-zinc-300 rounded-3xl p-6 shadow-scrapbook relative">
          <div className="text-center mb-4">
            <span className="font-handwriting text-3xl font-bold text-zinc-900">
              stickers anni animate chesa neee 💃🕺
            </span>
            <p className="font-cute text-sm text-amber-700">
              They move 🍃
            </p>
          </div>

          {/* Dynamic Sticker Squad based on theme */}
          {theme === 'bmw' ? (
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-200 cursor-pointer">
                <BMWM3Car className="w-20 h-14" />
                <span className="font-cute text-xs text-zinc-900 font-bold mt-1">BMW M3 G80</span>
              </div>
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-200 cursor-pointer">
                <BMWLogo className="w-14 h-14 animate-spin-slow" />
                <span className="font-cute text-xs text-zinc-900 font-bold mt-1">BMW Roundel</span>
              </div>
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-200 cursor-pointer">
                <StartEngineButton className="w-14 h-14 animate-pulse" />
                <span className="font-cute text-xs text-zinc-900 font-bold mt-1">Start Engine</span>
              </div>
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-200 cursor-pointer">
                <TurboBoostGauge className="w-14 h-14 animate-wiggle" />
                <span className="font-cute text-xs text-zinc-900 font-bold mt-1">Twin-Turbo</span>
              </div>
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-200 cursor-pointer">
                <BMWMStripes className="h-6 w-20" />
                <span className="font-cute text-xs text-zinc-900 font-bold mt-1">M Power</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-200 cursor-pointer">
                <ChibiNaruto className="w-16 h-16 animate-bounce" expression="wink" />
                <span className="font-cute text-xs text-amber-900 font-bold mt-1">Naruto</span>
              </div>
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-200 cursor-pointer">
                <ChibiHinata className="w-16 h-16 animate-pulse" />
                <span className="font-cute text-xs text-amber-900 font-bold mt-1">Hinata</span>
              </div>
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-200 cursor-pointer">
                <ChibiSasuke className="w-16 h-16 animate-wiggle" />
                <span className="font-cute text-xs text-amber-900 font-bold mt-1">Sasuke</span>
              </div>
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-200 cursor-pointer">
                <ChibiKakashi className="w-16 h-16 animate-float" />
                <span className="font-cute text-xs text-amber-900 font-bold mt-1">Kakashi</span>
              </div>
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-200 cursor-pointer">
                <ChibiKurama className="w-16 h-16 animate-spin-slow" />
                <span className="font-cute text-xs text-amber-900 font-bold mt-1">Kurama</span>
              </div>
              <div className="flex flex-col items-center hover:scale-125 transition-transform duration-200 cursor-pointer">
                <RamenSticker className="w-14 h-14 animate-bounce" />
                <span className="font-cute text-xs text-amber-900 font-bold mt-1">Ramen 🍜</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer (Exact words preserved) */}
      <footer className="mt-16 text-center text-xs font-cute text-zinc-600 flex flex-col items-center gap-1.5">
        <div className="flex items-center gap-1.5">
          <span>Made with</span>
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>for {CONFIG.recipientName}</span>
        </div>
        <div className="font-mono text-[10px] tracking-widest uppercase opacity-70">
          {CONFIG.instagramTag}
        </div>
      </footer>
    </div>
  );
};
