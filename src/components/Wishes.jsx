import React, { useState, useEffect } from 'react';
import { copy } from '../data/copy';

export default function Wishes({ lang }) {
  const t = (obj) => obj[lang];
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState('');
  const [wish, setWish] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  // Load wishes from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('josi-wishes');
    if (saved) setWishes(JSON.parse(saved));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !wish.trim()) return;

    const newWish = { name, wish, id: Date.now() };
    const updatedWishes = [newWish, ...wishes];
    
    setWishes(updatedWishes);
    localStorage.setItem('josi-wishes', JSON.stringify(updatedWishes));
    
    setName('');
    setWish('');
    setShowSuccess(true);
    
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="wishes" className="section-container wishes-section">
      <h2 className="section-title text-center">{t(copy.wishes.title)}</h2>

      {/* Display Wishes */}
      <div className="wishes-list">
        {wishes.map((w) => (
          <div key={w.id} className="wish-card">
            <p className="wish-text">"{w.wish}"</p>
            <p className="wish-author">— {w.name}</p>
          </div>
        ))}
      </div>

      {/* Wish Form */}
      <div className="card wish-form-card">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>{t(copy.wishes.nameLabel)}</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="input-group">
            <label>{t(copy.wishes.wishLabel)}</label>
            <textarea 
              value={wish} 
              onChange={(e) => setWish(e.target.value)} 
              placeholder={t(copy.wishes.placeholder)}
              required 
              rows="3"
            />
          </div>
          <button type="submit" className="primary-btn full-width">
            {t(copy.wishes.send)}
          </button>
          {showSuccess && (
            <p className="success-msg">{t(copy.wishes.success)}</p>
          )}
        </form>
      </div>
    </section>
  );
}