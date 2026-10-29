import React from 'react';
import { copy } from '../data/copy';

export default function Closing({ lang }) {
  const t = (obj) => obj[lang];

  const handleShare = async () => {
    const shareData = {
      title: lang === 'am' ? 'መልካም ልደት ጆሴፍ!' : 'Happy Birthday Joseph!',
      text: lang === 'am' ? 'የጆሲን የልደት ገጽ ተመልከት!' : 'Check out Josi\'s birthday page!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to WhatsApp
      const text = encodeURIComponent(`${shareData.title} ${shareData.url}`);
      window.open(`https://wa.me/?text=${text}`, '_blank');
    }
  };

  return (
    <footer className="closing-section">
      <div className="closing-content">
        <h2 className="closing-title">{t(copy.closing.title)}</h2>
        <p className="closing-body">{t(copy.closing.body)}</p>
        
        <button className="secondary-btn share-btn" onClick={handleShare}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          {t(copy.closing.share)}
        </button>

        <p className="footer-note">
          Made with ❤️ for Josi.
        </p>
      </div>
    </footer>
  );
}