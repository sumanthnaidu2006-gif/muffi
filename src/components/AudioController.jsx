import React, { useEffect, useRef } from 'react';
import { CONFIG } from '../config';

export const AudioController = ({ isPlaying, onTogglePlay }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log('Audio autoplay prevented or error:', err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <audio
      ref={audioRef}
      src={CONFIG.music.audioUrl}
      loop
      preload="auto"
    />
  );
};
