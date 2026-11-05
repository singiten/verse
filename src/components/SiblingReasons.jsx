import React from 'react';
import { content } from '../data/content';

export default function SiblingReasons({ lang }) {
  const t = (obj) => obj[lang];

  return (
    <section className="section-container reasons-section">
      <h2 className="section-title text-center">
        {lang === 'am' ? 'ለምን ወንድሜ ነህ?' : 'Why You are My Brother'}
      </h2>
      
      <div className="reasons-grid">
        {content.siblingReasons.map((reason, index) => (
          <div key={index} className="reason-card">
            <h3 className="reason-title">{t(reason.title)}</h3>
            <p className="reason-desc">{t(reason.desc)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
