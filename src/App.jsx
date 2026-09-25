import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';

import HomePage from './pages/HomePage';
import PortfolioHub from './pages/PortfolioHub';
import CategoryGalleryPage from './pages/CategoryGalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { translations } from './data/translations';

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'pt'
  const [activeTab, setActiveTab] = useState('home'); 
  const [lightboxItem, setLightboxItem] = useState(null);
  const [lightboxList, setLightboxList] = useState([]);

  const t = translations[lang] || translations.en;

  const handleOpenLightbox = (item, list) => {
    setLightboxItem(item);
    setLightboxList(list || []);
  };

  const handleNavigateLightbox = (direction) => {
    if (!lightboxItem || lightboxList.length === 0) return;
    const currentIndex = lightboxList.findIndex(i => i.id === lightboxItem.id);
    if (currentIndex === -1) return;
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = lightboxList.length - 1;
    if (nextIndex >= lightboxList.length) nextIndex = 0;
    setLightboxItem(lightboxList[nextIndex]);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)' }}>
      {/* Header Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        t={t}
      />

      {/* Main Page Area */}
      <main style={{ flex: 1 }}>
        {activeTab === 'home' && (
          <HomePage
            setLang={setLang}
            setActiveTab={setActiveTab}
            t={t}
          />
        )}

        {activeTab === 'portfolio' && (
          <PortfolioHub
            setActiveTab={setActiveTab}
            lang={lang}
            t={t}
          />
        )}

        {activeTab.startsWith('category-') && (
          <CategoryGalleryPage
            categoryId={activeTab.replace('category-', '')}
            onSelectPhoto={handleOpenLightbox}
            setActiveTab={setActiveTab}
            lang={lang}
            t={t}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            lang={lang}
            t={t}
          />
        )}

        {activeTab === 'contact' && (
          <ContactPage
            lang={lang}
            t={t}
          />
        )}
      </main>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <LightboxModal
          item={lightboxItem}
          items={lightboxList}
          onClose={() => setLightboxItem(null)}
          onNavigate={handleNavigateLightbox}
          lang={lang}
          t={t}
        />
      )}

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        t={t}
      />
    </div>
  );
}
