import React from 'react';
import { copy } from '../data/copy';

export default function Blessing({ lang }) {
  const t = (obj) => obj[lang];

  return (
    <section id="blessing" className="section-container blessing-section">
      <div className="blessing-content">
        <h2 className="section-title text-center">{t(copy.blessing.title)}</h2>
        
        <div className="verse-card">
          <p className="verse-text">"{t(copy.blessing.verse)}"</p>
          <p className="verse-ref">— {t(copy.blessing.ref)}</p>
        </div>

        <p className="prayer-note text-center">
          {t(copy.blessing.prayer)}
        </p>
      </div>
    </section>
  );
}