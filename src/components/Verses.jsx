import React from 'react';
import { copy } from '../data/copy';
import { content } from '../data/content';

export default function Verses({ lang }) {
  const t = (obj) => obj[lang];

  return (
    <section id="verses" className="section-container verses-section">
      <div className="text-center" style={{ marginBottom: '2rem' }}>
        <h2 className="section-title">{t(copy.verses.title)}</h2>
        <p className="verses-subtitle">{t(copy.verses.subtitle)}</p>
      </div>

      <div className="verses-list">
        {content.favoriteVerses.map((verse, index) => (
          <div key={index} className="favorite-verse-card">
            <p className="fav-verse-text">"{t(verse.text)}"</p>
            <p className="fav-verse-ref">— {t(verse.ref)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}