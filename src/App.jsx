import React, { useState } from 'react';
import Hero from './components/Hero';
import Message from './components/Message';
import Blessing from './components/Blessing';
import Gallery from './components/Gallery';
import Verses from './components/Verses';
import Fun from './components/Fun';
import Closing from './components/Closing';
import LangToggle from './components/LangToggle';

export default function App() {
  const [lang, setLang] = useState('am'); 

  return (
    <div className={`app-container lang-${lang}`}>
      <LangToggle lang={lang} setLang={setLang} />
      
      <main>
        <Hero lang={lang} />
        <Message lang={lang} />
        <Blessing lang={lang} />
        <Gallery lang={lang} />
        <Verses lang={lang} />
        <Fun lang={lang} />
      </main>
      
       {/* <Closing lang={lang} /> */}
    </div>
  );
}