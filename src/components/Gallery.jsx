import React from 'react';
import { copy } from '../data/copy';
import { content } from '../data/content';

export default function Gallery({ lang }) {
  const t = (obj) => obj[lang];

  return (
    <section id="gallery" className="section-container">
      <h2 className="section-title text-center">{t(copy.gallery.title)}</h2>
      
      {/* Horizontal scroll container for mobile */}
      <div className="gallery-scroll">
        {content.photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo.src} alt={t(photo.caption)} loading="lazy" />
            <div className="gallery-caption">{t(photo.caption)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}