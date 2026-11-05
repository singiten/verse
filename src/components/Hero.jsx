import React from 'react';
import { copy } from '../data/copy';
import { content } from '../data/content';

export default function Hero({ lang }) {
  const t = (obj) => obj[lang];
  
  const scrollToNext = () => {
    document.getElementById('message').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {/* Floating Particles Background */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`particle particle-${i}`}></div>
        ))}
      </div>

      <div className="hero-content glass-card">
        <div className="hero-badge">🎂</div>
        <p className="hero-greeting">{t(copy.hero.greeting)}</p>
        <h1 className="hero-name">{t(content.name)}</h1>
        <p className="hero-sub">{t(copy.hero.sub)}</p>
        
        <div className="hero-divider"></div>
        
        <p className="hero-love">{t(copy.hero.withLove)}</p>
        
        <button className="primary-btn glowing-btn" onClick={scrollToNext}>
          {t(copy.hero.cta)}
        </button>
      </div>
    </section>
  );
}
