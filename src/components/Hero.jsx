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
      <div className="hero-content">
        <p className="hero-greeting">{t(copy.hero.greeting)}</p>
        <h1 className="hero-name">{t(content.name)}</h1>
        <p className="hero-sub">{t(copy.hero.sub)}</p>
        <div className="hero-divider"></div>
        <p className="hero-love">{t(copy.hero.withLove)}</p>
        <button className="primary-btn" onClick={scrollToNext}>
          {t(copy.hero.cta)}
        </button>
      </div>
    </section>
  );
}