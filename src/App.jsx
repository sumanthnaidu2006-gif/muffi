import React, { useState, useEffect } from 'react';
import { LockScreen } from './components/LockScreen';
import { FlowerBloomTransition } from './components/FlowerBloomTransition';
import { ScrapbookBoard } from './components/ScrapbookBoard';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isBlooming, setIsBlooming] = useState(false);
  
  // Theme state: 'bmw' or 'naruto' (persisted in localStorage)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app_theme') || 'bmw';
  });

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('app_theme', newTheme);
  };

  const handleUnlock = () => {
    setIsBlooming(true);
    setIsUnlocked(true); // Mount ScrapbookBoard in background for seamless reveal
  };

  const handleBloomComplete = () => {
    setIsBlooming(false);
  };

  const handleRelock = () => {
    setIsUnlocked(false);
    setIsBlooming(false);
  };

  return (
    <div className="min-h-screen w-full font-sans">
      {!isUnlocked && (
        <LockScreen
          onUnlock={handleUnlock}
          theme={theme}
          onToggleTheme={handleThemeChange}
        />
      )}

      {isBlooming && (
        <FlowerBloomTransition
          onAnimationComplete={handleBloomComplete}
          theme={theme}
        />
      )}

      {isUnlocked && (
        <ScrapbookBoard
          onRelock={handleRelock}
          theme={theme}
          onToggleTheme={handleThemeChange}
        />
      )}
    </div>
  );
}

export default App;
