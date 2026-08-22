import React, { useState, useEffect } from 'react';
import { PrankScreen } from './components/PrankScreen';
import { LockScreen } from './components/LockScreen';
import { FlowerBloomTransition } from './components/FlowerBloomTransition';
import { ScrapbookBoard } from './components/ScrapbookBoard';
import { logVisitorEvent } from './utils/visitorLogger';

function App() {
  const [isPrankPassed, setIsPrankPassed] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isBlooming, setIsBlooming] = useState(false);
  
  // Theme state: 'bmw' or 'naruto' (persisted in localStorage)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app_theme') || 'bmw';
  });

  // Log page view when someone loads the website
  useEffect(() => {
    logVisitorEvent('PAGE_VIEW', { theme });
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('app_theme', newTheme);
  };

  const handlePrankBypass = () => {
    setIsPrankPassed(true);
  };

  const handleUnlock = () => {
    logVisitorEvent('UNLOCKED', { theme });
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
      {/* 1. Starting Prank Screen */}
      {!isPrankPassed && (
        <PrankScreen
          onBypass={handlePrankBypass}
          theme={theme}
        />
      )}

      {/* 2. Real Lock Screen (Shows after Prank is bypassed by Siddhu) */}
      {isPrankPassed && !isUnlocked && (
        <LockScreen
          onUnlock={handleUnlock}
          theme={theme}
          onToggleTheme={handleThemeChange}
        />
      )}

      {/* 3. Transition Animation */}
      {isBlooming && (
        <FlowerBloomTransition
          onAnimationComplete={handleBloomComplete}
          theme={theme}
        />
      )}

      {/* 4. Main Scrapbook Board */}
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
