import React from 'react';

export default function LangToggle({ lang, setLang }) {
  return (
    <button 
      className="lang-toggle"
      onClick={() => setLang(lang === 'am' ? 'en' : 'am')}
      aria-label="Toggle language"
    >
      {lang === 'am' ? 'EN' : 'አማ'}
    </button>
  );
}