import React from 'react';
import { Film, ExternalLink, Play } from 'lucide-react';
import { CONFIG } from '../../config';

export const VideoFrame = () => {
  const youtubeUrl = `https://www.youtube.com/watch?v=${CONFIG.video.youtubeId}`;

  return (
    <div className="relative group">
      {/* Playing Card Accents in background */}
      <div className="absolute -top-6 -left-4 w-12 h-16 bg-white rounded-lg shadow-md border border-zinc-200 transform -rotate-12 flex flex-col items-center justify-between p-1 select-none pointer-events-none">
        <span className="text-xs font-bold text-red-600 self-start">A♥</span>
        <span className="text-sm text-red-600">♥</span>
        <span className="text-xs font-bold text-red-600 self-end">A♥</span>
      </div>

      {/* Main Video Frame */}
      <div className="relative bg-[#fffdfa] border-2 border-[#e6d8ba] rounded-3xl p-4 shadow-scrapbook hover:shadow-xl transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3 px-1">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-amber-700" />
            <h4 className="font-handwriting text-2xl font-bold text-amber-950">
              {CONFIG.video.title}
            </h4>
          </div>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-cute text-amber-800 bg-amber-100 hover:bg-amber-200 px-2.5 py-1 rounded-full flex items-center gap-1 transition-colors shadow-sm"
            title="Open on YouTube"
          >
            <span>Open YouTube</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Video Iframe / Player with youtube-nocookie and full permissions */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner border border-zinc-300 relative">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${CONFIG.video.youtubeId}?rel=0&modestbranding=1&enablejsapi=1`}
            title={CONFIG.video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  );
};
