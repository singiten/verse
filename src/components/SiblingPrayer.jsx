import React, { useState } from 'react';
import { content } from '../data/content';

export default function SiblingPrayer({ lang }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const t = (obj) => obj[lang];

  return (
    <section className="section-container prayer-section">
      <div 
        className={`flip-card ${isFlipped ? 'flipped' : ''}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flip-card-inner">
          
          {/* Front of the card */}
          <div className="flip-card-front floating">
            <h3 className="prayer-title">{t(content.siblingPrayer.frontTitle)}</h3>
            <p className="tap-hint">{t(content.siblingPrayer.tapToOpen)} 👆</p>
            <div className="cross-icon">✝</div>
          </div>

          {/* Back of the card */}
          <div className="flip-card-back">
            <p className="prayer-text">"{t(content.siblingPrayer.prayerText)}"</p>
            <p className="prayer-sign">{lang === 'am' ? '— ' : '— With love'}</p>
          </div>

        </div>
      </div>
    </section>
  );
}
