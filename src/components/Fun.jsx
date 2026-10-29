import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { copy } from '../data/copy';

export default function Fun({ lang }) {
  const t = (obj) => obj[lang];
  const [candleLit, setCandleLit] = useState(true);
  
  // State to track which song is currently playing ('none', 'song1', 'song2')
  const [playingTrack, setPlayingTrack] = useState('none');
  
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

  const blowCandle = () => {
    if (candleLit) {
      setCandleLit(false);
      fireConfetti();
      if (navigator.vibrate) navigator.vibrate(200);
    }
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
    <section id="fun" className="section-container fun-section">
      <h2 className="section-title text-center">{t(copy.fun.title)}</h2>
      
      <div className="fun-interactive-area">
        
        {/* Music Player Area */}
        <div className="music-player">
          {/* Hidden native audio elements */}
          <audio ref={audioRef1} src="/photos/erefte.mp3" loop onEnded={() => setPlayingTrack('none')} />
          <audio ref={audioRef2} src="/photos/jo.mp3" loop onEnded={() => setPlayingTrack('none')} />
          
          <p className="music-hint">
            {lang === 'am' ? 'ዘፈን ምረጥ:' : 'Choose a song:'}
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
                {playingTrack === 'song1' ? 'Erefte (Pause)' : 'Erefte 🎵'}
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
                {playingTrack === 'song2' ? 'Jo (Pause)' : 'Jo 🎵'}
              </span>
            </button>
          </div>
        </div>

        <div className="divider-line"></div>

        {/* Candle */}
        <div 
          className={`candle-container ${candleLit ? 'lit' : 'out'}`} 
          onClick={blowCandle}
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