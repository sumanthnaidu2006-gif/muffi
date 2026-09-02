import React from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';
import { CONFIG } from '../../config';
import { BMWLogo, BMWMStripes } from '../BMWComponents';
import { ChibiNaruto } from '../NarutoCharacters';

export const SpotifyPlayer = ({ isPlaying, onTogglePlay, theme = 'naruto' }) => {
  const getSpotifyEmbedUrl = () => {
    const link = CONFIG.music.spotifyUrl || CONFIG.music.spotifyTrackId || "6FfLg6FFqhCsrFOaHIGkg0";
    if (link.includes('open.spotify.com/embed/')) {
      return link;
    }
    if (link.includes('spotify.com')) {
      const match = link.match(/track\/([a-zA-Z0-9]+)/);
      if (match && match[1]) {
        return `https://open.spotify.com/embed/track/${match[1]}?utm_source=generator&theme=0`;
      }
    }
    return `https://open.spotify.com/embed/track/${link}?utm_source=generator&theme=0`;
  };

  const getSpotifyDirectLink = () => {
    if (CONFIG.music.spotifyUrl) return CONFIG.music.spotifyUrl;
    const trackId = CONFIG.music.spotifyTrackId || "6FfLg6FFqhCsrFOaHIGkg0";
    return `https://open.spotify.com/track/${trackId}`;
  };

  return (
    <div className="relative group">
      {/* Pushpins */}
      <div className="absolute -top-3 left-6 z-20 w-4 h-4 rounded-full bg-rose-600 border-2 border-rose-800 shadow-pin flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-rose-200" />
      </div>
      <div className="absolute -top-3 right-6 z-20 w-4 h-4 rounded-full bg-rose-600 border-2 border-rose-800 shadow-pin flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-rose-200" />
      </div>

      {/* Top Corner Sticker based on theme */}
      {theme === 'bmw' ? (
        <div className="absolute -top-7 -right-6 z-30 transform rotate-12 hover:scale-110 transition-transform">
          <BMWLogo className="w-14 h-14" />
        </div>
      ) : (
        <div className="absolute -top-10 -right-8 z-30 transform rotate-12 hover:scale-110 transition-transform">
          <ChibiNaruto className="w-16 h-16" expression="wink" />
        </div>
      )}

      {/* Main Pinned Note */}
      <div className="relative bg-[#fffdfa] paper-texture border-2 border-[#e6d8ba] rounded-2xl p-5 shadow-scrapbook transform -rotate-1 hover:rotate-0 transition-all duration-300">
        
        {/* Note Header (Exact words preserved) */}
        <div className="text-center pb-3 border-b border-dashed border-[#e6d8ba]/80 mb-3 flex items-center justify-between">
          <div className="mx-auto flex flex-col items-center">
            <span className="font-handwriting text-3xl font-bold text-rose-800 tracking-wide">
              Favorite person ❤️
            </span>
            {theme === 'bmw' && <BMWMStripes className="h-1.5 w-16 mt-0.5" />}
          </div>
          <a
            href={getSpotifyDirectLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-emerald-600 transition-colors p-1.5 rounded-lg hover:bg-emerald-50"
            title="Open on Spotify"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Official Spotify Embed Player */}
        <div className="w-full rounded-2xl overflow-hidden shadow-inner bg-black border border-zinc-200">
          <iframe
            style={{ borderRadius: '12px', display: 'block' }}
            src={getSpotifyEmbedUrl()}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Original Spotify Player"
          />
        </div>

        {/* Small Note Subtext */}
        <div className="mt-3 flex items-center justify-between text-xs text-[#8c7a65] font-cute">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Our special anthem
          </span>
          <span className="text-emerald-700 font-semibold font-mono text-[10px]">
            Official Spotify Embed
          </span>
        </div>
      </div>
    </div>
  );
};
