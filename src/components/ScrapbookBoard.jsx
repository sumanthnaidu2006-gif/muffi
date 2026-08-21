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
  RealBMWM4Sticker,
  RealBMWLogoSticker,
  RealMBadgeSticker,
  RealStartEngineSticker,
  RealCheckeredFlagSticker,
  BMWMStripes,
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
    <div
      className={`min-h-screen w-full relative pb-24 overflow-x-hidden transition-colors duration-700 ${
        theme === 'bmw'
          ? 'bg-gradient-to-b from-[#080b11] via-[#0e1420] to-[#06080c] text-zinc-100 selection:bg-sky-500/30'
          : 'bg-gradient-to-b from-[#fef3c7] via-[#fff7ed] to-[#fed7aa] text-[#451a03] selection:bg-amber-300'
      }`}
    >
      {/* Top Header Bar Accent */}
      {theme === 'bmw' ? (
        <div className="h-1.5 w-full flex sticky top-0 z-50">
          <div className="flex-1 bg-[#009FE3]" />
          <div className="flex-1 bg-[#0019A8]" />
          <div className="flex-1 bg-[#E2001A]" />
        </div>
      ) : (
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 sticky top-0 z-50" />
      )}

      {/* Background Audio Controller */}
      <AudioController isPlaying={isPlayingMusic} onTogglePlay={toggleMusic} />

      {/* Top Floating Navbar / Header */}
      <header
        className={`sticky top-1.5 z-40 backdrop-blur-md px-4 sm:px-8 py-3 flex items-center justify-between shadow-md transition-colors ${
          theme === 'bmw'
            ? 'bg-[#0b1019]/90 border-b border-zinc-800 text-white shadow-black/40'
            : 'bg-[#fff8eb]/90 border-b border-amber-200/90 text-amber-950 shadow-amber-900/5'
        }`}
      >
        <div className="flex items-center gap-2">
          {theme === 'bmw' ? (
            <div className="w-8 h-8">
              <RealBMWLogoSticker className="w-8 h-8" />
            </div>
          ) : (
            <span className="text-xl">🌸</span>
          )}
          <h1 className="font-handwriting text-2xl sm:text-3xl font-bold">
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
                  ? 'bg-blue-600 text-white shadow-blue-500/50'
                  : 'bg-orange-600 text-white shadow-orange-500/40'
                : theme === 'bmw'
                ? 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 border border-zinc-700'
                : 'bg-white text-amber-950 hover:bg-amber-100 border border-amber-200'
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
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-cute transition-colors ${
              theme === 'bmw'
                ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700'
                : 'bg-white hover:bg-amber-100 text-amber-950 border border-amber-200'
            }`}
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
              <RealBMWM4Sticker className="w-32 sm:w-40" />
            </div>
            <div className="absolute top-2 right-4 sm:right-12 transform rotate-12 animate-float hidden md:block">
              <RealStartEngineSticker className="w-18 sm:w-22" />
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
          <div
            className={`absolute -top-3 left-1/2 -translate-x-1/2 w-48 h-6 -rotate-1 opacity-90 rounded-sm ${
              theme === 'bmw' ? 'bg-gradient-to-r from-[#009FE3] via-[#0019A8] to-[#E2001A]' : 'washi-tape-yellow'
            }`}
          />

          <div
            className={`rounded-3xl px-8 py-5 shadow-2xl transition-colors border-2 ${
              theme === 'bmw'
                ? 'bg-[#121824]/90 border-zinc-700/80 text-white shadow-black/50'
                : 'bg-white/90 border-amber-200/90 text-amber-950 shadow-amber-900/10'
            }`}
          >
            <span
              className={`font-cute text-sm uppercase tracking-widest font-bold block mb-1 ${
                theme === 'bmw' ? 'text-sky-400' : 'text-orange-600'
              }`}
            >
              ✨ Next time manam photos digaka evi marchali ee 😭😭 ✨
            </span>
            <h2 className="font-handwriting text-4xl sm:text-6xl font-bold">
              For {CONFIG.recipientName}, with Love
            </h2>
            <p
              className={`font-cute text-base sm:text-xl mt-1 ${
                theme === 'bmw' ? 'text-zinc-300' : 'text-amber-800'
              }`}
            >
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
            <div
              className={`border-2 rounded-3xl p-6 shadow-2xl flex flex-col items-center justify-center relative transition-colors ${
                theme === 'bmw'
                  ? 'bg-[#121824]/90 border-zinc-700/80 text-white shadow-black/40'
                  : 'bg-[#fffdf8] border-[#e6d8ba] text-zinc-900 shadow-scrapbook'
              }`}
            >
              <div className="absolute top-3 left-4">
                <span className={`font-handwriting text-2xl font-bold ${theme === 'bmw' ? 'text-white' : 'text-zinc-900'}`}>
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
            <div
              className={`border-2 rounded-3xl p-6 shadow-2xl transition-colors ${
                theme === 'bmw'
                  ? 'bg-[#121824]/90 border-zinc-700/80 text-white shadow-black/40'
                  : 'bg-[#fffdf8] border-[#e6d8ba] text-zinc-900 shadow-scrapbook'
              }`}
            >
              <PolaroidGallery theme={theme} />
            </div>

            {/* Interactive Memory Map */}
            <MemoryMap theme={theme} />
          </div>
        </div>
      </main>

      {/* Real Photographic Die-Cut Stickers Bar at Bottom (Exact words preserved) */}
      <section className="max-w-5xl mx-auto mt-14 px-4">
        <div
          className={`border-2 border-dashed rounded-3xl p-6 sm:p-8 shadow-2xl relative transition-colors ${
            theme === 'bmw'
              ? 'bg-[#121824]/90 border-zinc-700/80 text-white shadow-black/50'
              : 'bg-white/90 border-amber-300/90 text-amber-950 shadow-amber-900/10'
          }`}
        >
          <div className="text-center mb-6">
            <span className={`font-handwriting text-3xl sm:text-4xl font-bold ${theme === 'bmw' ? 'text-white' : 'text-amber-950'}`}>
              stickers anni animate chesa neee 💃🕺
            </span>
            <p className={`font-cute text-sm sm:text-base font-bold mt-1 ${theme === 'bmw' ? 'text-sky-400' : 'text-orange-600'}`}>
              They move 🍃 • Hover or tap the stickers to feel the sporty physics!
            </p>
          </div>

          {/* Dynamic Sticker Squad based on theme */}
          {theme === 'bmw' ? (
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {/* Real Photographic BMW M4 Competition */}
              <div className="flex flex-col items-center group">
                <RealBMWM4Sticker className="w-36 sm:w-44" />
                <span className="font-cute text-xs text-zinc-200 font-bold mt-2 bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-blue-600/60 shadow-sm">
                  BMW M4 Competition 🏎️
                </span>
              </div>

              {/* Real Photographic 3D Chrome BMW Roundel */}
              <div className="flex flex-col items-center group">
                <RealBMWLogoSticker className="w-20 sm:w-24" />
                <span className="font-cute text-xs text-zinc-200 font-bold mt-2 bg-zinc-800 px-2.5 py-0.5 rounded-full border border-zinc-600 shadow-sm">
                  3D Chrome Emblem 🇩🇪
                </span>
              </div>

              {/* Real Photographic ///M Power Metal Badge */}
              <div className="flex flex-col items-center group">
                <RealMBadgeSticker className="w-32 sm:w-36" />
                <span className="font-cute text-xs text-zinc-200 font-bold mt-2 bg-red-950/80 px-2.5 py-0.5 rounded-full border border-red-600/60 shadow-sm">
                  ///M Performance Badge
                </span>
              </div>

              {/* Real Start Engine Stop Button */}
              <div className="flex flex-col items-center group">
                <RealStartEngineSticker className="w-20 sm:w-24" />
                <span className="font-cute text-xs text-zinc-200 font-bold mt-2 bg-zinc-800 px-2.5 py-0.5 rounded-full border border-zinc-600 shadow-sm">
                  Push Start Button 🔴
                </span>
              </div>

              {/* Real Checkered Racing Flag */}
              <div className="flex flex-col items-center group">
                <RealCheckeredFlagSticker className="w-20 sm:w-24" />
                <span className="font-cute text-xs text-zinc-200 font-bold mt-2 bg-zinc-800 px-2.5 py-0.5 rounded-full border border-zinc-600 shadow-sm">
                  Track Finish Flag 🏁
                </span>
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
      <footer
        className={`mt-16 text-center text-xs font-cute flex flex-col items-center gap-1.5 ${
          theme === 'bmw' ? 'text-zinc-400' : 'text-amber-900/70'
        }`}
      >
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
