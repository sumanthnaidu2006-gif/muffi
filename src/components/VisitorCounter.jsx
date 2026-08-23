import React, { useState, useEffect } from 'react';
import { Eye, Sparkles } from 'lucide-react';

export const VisitorCounter = ({ theme = 'naruto' }) => {
  const [visits, setVisits] = useState(null);

  useEffect(() => {
    // Unique namespace for Muffi's scrapbook app
    const namespace = 'muffi-scrapbook-siddhu';
    const key = 'visits';

    // Fetch and increment live visitor counter
    fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`)
      .then((res) => {
        if (!res.ok) throw new Error('API response not ok');
        return res.json();
      })
      .then((data) => {
        if (data && typeof data.count === 'number') {
          setVisits(data.count);
          localStorage.setItem('muffi_site_visits', data.count.toString());
        }
      })
      .catch(() => {
        // Fallback to local visitor tracker if offline/network restricted
        const current = parseInt(localStorage.getItem('muffi_site_visits') || '1', 10);
        const updated = current + 1;
        localStorage.setItem('muffi_site_visits', updated.toString());
        setVisits(updated);
      });
  }, []);

  if (visits === null) return null;

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold backdrop-blur-sm border shadow-sm transition-all mt-2 select-none ${
        theme === 'bmw'
          ? 'bg-[#0c121e]/80 text-sky-300 border-sky-500/30 shadow-sky-500/10'
          : 'bg-white/85 text-amber-900 border-amber-300/80 shadow-amber-900/5'
      }`}
      title="Total visits"
    >
      <Eye className={`w-3.5 h-3.5 ${theme === 'bmw' ? 'text-sky-400' : 'text-amber-600'} animate-pulse`} />
      <span>{visits.toLocaleString()} visits</span>
    </div>
  );
};
