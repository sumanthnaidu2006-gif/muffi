import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Compass, Sparkles } from 'lucide-react';
import { CONFIG } from '../../config';
import { BMWLogo } from '../BMWComponents';
import { KonohaStamp } from '../NarutoCharacters';

export const MemoryMap = ({ theme = 'naruto' }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    const { latitude, longitude, zoom } = CONFIG.map;

    const map = L.map(mapContainerRef.current, {
      center: [latitude, longitude],
      zoom: zoom || 12,
      zoomControl: true,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      opacity: 0.9,
    }).addTo(map);

    const customPinHtml = `
      <div class="relative flex items-center justify-center transform -translate-x-1/2 -translate-y-full cursor-pointer animate-bounce">
        <div class="w-10 h-10 rounded-full ${theme === 'bmw' ? 'bg-blue-600' : 'bg-rose-500'} border-2 border-white shadow-xl flex items-center justify-center text-white font-bold text-sm">
          📍
        </div>
        <div class="absolute -bottom-1 w-2 h-2 ${theme === 'bmw' ? 'bg-blue-700' : 'bg-rose-600'} rotate-45"></div>
      </div>
    `;

    const customIcon = L.divIcon({
      html: customPinHtml,
      className: 'custom-map-pin',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family: 'Patrick Hand', cursive; text-align: center; padding: 4px;">
        <h4 style="font-size: 16px; font-weight: bold; color: #1e3a8a; margin: 0;">${CONFIG.map.locationName}</h4>
        <p style="font-size: 13px; color: #4b5563; margin: 4px 0 0 0;">${CONFIG.map.pinLabel}</p>
      </div>
    `).openPopup();

    mapInstanceRef.current = map;

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [theme]);

  return (
    <div className="relative group">
      {/* Corner stamp based on theme */}
      <div className="absolute -top-5 -right-5 z-20 rotate-12 hover:scale-110 transition-transform">
        {theme === 'bmw' ? <BMWLogo className="w-12 h-12" /> : <KonohaStamp className="w-14 h-14" />}
      </div>

      {/* Main Map Card (Exact words preserved) */}
      <div className="relative bg-[#fffdfa] border-2 border-zinc-200 rounded-3xl p-4 sm:p-5 shadow-scrapbook hover:shadow-xl transition-all duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme === 'bmw' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'}`}>
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <span className={`text-[10px] font-bold tracking-wider uppercase font-mono ${theme === 'bmw' ? 'text-blue-600' : 'text-emerald-700'}`}>
                {CONFIG.map.title}
              </span>
              <h3 className="font-handwriting text-2xl font-bold text-zinc-950 leading-none">
                {CONFIG.map.locationName}
              </h3>
            </div>
          </div>

          <span className={`font-cute text-xs font-semibold px-2.5 py-1 rounded-full border ${theme === 'bmw' ? 'text-blue-800 bg-blue-50 border-blue-200' : 'text-emerald-800 bg-emerald-50 border-emerald-200'}`}>
            {CONFIG.map.subtitle}
          </span>
        </div>

        {/* Map Viewport */}
        <div className="w-full h-56 rounded-2xl overflow-hidden shadow-inner border border-zinc-200 relative z-10">
          <div ref={mapContainerRef} className="w-full h-full" />
        </div>

        {/* Footer Note */}
        <div className="mt-3 flex items-center justify-between text-xs text-[#8c7a65] font-cute">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            {CONFIG.map.pinLabel}
          </span>
          <span className="font-mono text-[10px] text-zinc-400">Leaflet Map</span>
        </div>
      </div>
    </div>
  );
};
