import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { copy } from '../data/copy';
import { content } from '../data/content';

export default function Fun({ lang }) {
  const t = (obj) => obj[lang];
  const [candleLit, setCandleLit] = useState(true);
  
  // State to track which song is currently playing ('none', 'song1', 'song2')
  const [playingTrack, setPlayingTrack] = useState('none');
  
  // State for the 10-second celebration
  const [showCelebration, setShowCelebration] = useState(false);
  
  // Two separate refs for the two audio elements
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);

  const fireConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7a1f2b', '#d4a537', '#ffffff']
    });
  };

  // The 10-second celebration sequence
  const triggerCelebration = () => {
    if (!candleLit) return; // Don't re-trigger if already blown out
    
    setCandleLit(false);
    setShowCelebration(true);

    // 1. Initial big blast
    fireConfetti();
    if (navigator.vibrate) navigator.vibrate([200, 100, 200]);

    // 2. Continuous fireworks for 10 seconds
    const duration = 10 * 1000;
    const animationEnd = Date.now() + duration;
    
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        setShowCelebration(false); // Hide the popup card after 10s
        return;
      }
      
      // Fire from the left and right edges
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ['#7a1f2b', '#d4a537']
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ['#7a1f2b', '#d4a537']
      });
    }, 250); // Fires every 250ms
  };

  // Reusable function to handle playing/pausing
  const handlePlayTrack = (trackId, currentRef) => {
    const otherRef = trackId === 'song1' ? audioRef2 : audioRef1;

    // If clicking the currently playing song, pause it
    if (playingTrack === trackId) {
      currentRef.current.pause();
      setPlayingTrack('none');
    } else {
      // Otherwise, play the new song and pause the other one
      otherRef.current.pause();
      otherRef.current.currentTime = 0; // reset other song
      
      currentRef.current.play();
      setPlayingTrack(trackId);
    }
  };

  return (
    <section id="fun" className={`section-container fun-section ${showCelebration ? 'celebrating-bg' : ''}`}>
      
      {/* THE CELEBRATION POPUP CARD */}
      {showCelebration && (
        <div className="celebration-modal">
          <div className="celebration-card">
            <h1 className="celebration-text">
              {lang === 'am' ? 'መልካም ልደት!' : 'Happy Birthday!'}
            </h1>
            <h2 className="celebration-name">{t(content.name)}!</h2>
            <p className="celebration-sub">🎉 🎂 ✨</p>
          </div>
        </div>
      )}

      <h2 className="section-title text-center">{t(copy.fun.title)}</h2>
      
      <div className="fun-interactive-area">
        
        {/* Music Player Area */}
        <div className="music-player">
          {/* Hidden native audio elements */}
          <audio ref={audioRef1} src="/photos/erefte.mp3" loop onEnded={() => setPlayingTrack('none')} />
          <audio ref={audioRef2} src="/photos/jo.mp3" loop onEnded={() => setPlayingTrack('none')} />
          
          <p className="music-hint">
            {lang === 'am' ? 'መዝሙር ምረጥ:' : 'Choose a mezmur:'}
          </p>

          <div className="music-buttons-grid">
            {/* Song 1 Button */}
            <button 
              className={`music-btn ${playingTrack === 'song1' ? 'playing' : ''}`} 
              onClick={() => handlePlayTrack('song1', audioRef1)}
            >
              <div className="vinyl-disc">
                <div className="vinyl-center"></div>
              </div>
              <span className="music-text">
                {playingTrack === 'song1' ? 'Erefte (Pause)' : ' 🎵'}
              </span>
            </button>

            {/* Song 2 Button */}
            <button 
              className={`music-btn ${playingTrack === 'song2' ? 'playing' : ''}`} 
              onClick={() => handlePlayTrack('song2', audioRef2)}
            >
              <div className="vinyl-disc">
                <div className="vinyl-center"></div>
              </div>
              <span className="music-text">
                {playingTrack === 'song2' ? 'Jo (Pause)' : ' 🎵'}
              </span>
            </button>
          </div>
        </div>

        <div className="divider-line"></div>

        {/* Candle - Now triggers the 10s celebration */}
        <div 
          className={`candle-container ${candleLit ? 'lit' : 'out'}`} 
          onClick={triggerCelebration}
          role="button"
          tabIndex={0}
        >
          <div className="flame"></div>
          <div className="candle-body"></div>
          <p className="candle-text">
            {candleLit ? t(copy.fun.candle) : t(copy.fun.blowout)}
          </p>
        </div>

        {/* Confetti Button */}
        <button className="primary-btn confetti-btn" onClick={fireConfetti}>
          {t(copy.fun.confetti)}
        </button>
      </div>
    </section>
  );
}
