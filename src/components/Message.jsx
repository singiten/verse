import React from 'react';
import { copy } from '../data/copy';

export default function Message({ lang }) {
  const t = (obj) => obj[lang];

  return (
    <section id="message" className="section-container message-section">
      <div className="card message-card">
        <h2 className="section-title">{t(copy.message.title)}</h2>
        <p className="message-body">{t(copy.message.body)}</p>
        <p className="message-signoff">{t(copy.message.signOff)}</p>
      </div>
    </section>
  );
}