import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';

import HomePage from './pages/HomePage';
import PortfolioHub from './pages/PortfolioHub';
import CategoryGalleryPage from './pages/CategoryGalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { translations } from './data/translations';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' or 'pt'
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
      <ScrollToTop />

      {/* Header Navigation */}
      <Header
        lang={lang}
        setLang={setLang}
        t={t}
      />

      {/* Main Page Area with Route Switcher */}
      <main style={{ flex: 1 }}>
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<HomePage lang={lang} setLang={setLang} t={t} />} />

          {/* Portfolio Hub Route */}
          <Route path="/portfolio" element={<PortfolioHub lang={lang} t={t} />} />

          {/* Motorsport Category Routes */}
          <Route
            path="/portfolio/motorsport"
            element={
              <CategoryGalleryPage
                categoryId="motorsport"
                initialDiscipline="ALL"
                onSelectPhoto={handleOpenLightbox}
                lang={lang}
                t={t}
              />
            }
          />
          <Route
            path="/portfolio/motorsport/:discipline"
            element={
              <CategoryGalleryPage
                categoryId="motorsport"
                onSelectPhoto={handleOpenLightbox}
                lang={lang}
                t={t}
              />
            }
          />

          {/* Sports Category Routes */}
          <Route
            path="/portfolio/sports"
            element={
              <CategoryGalleryPage
                categoryId="sports"
                onSelectPhoto={handleOpenLightbox}
                lang={lang}
                t={t}
              />
            }
          />

          {/* Automotive Category Routes */}
          <Route
            path="/portfolio/automotive"
            element={
              <CategoryGalleryPage
                categoryId="automotive"
                onSelectPhoto={handleOpenLightbox}
                lang={lang}
                t={t}
              />
            }
          />

          {/* Artistic & Events Category Routes */}
          <Route
            path="/portfolio/artistic-events"
            element={
              <CategoryGalleryPage
                categoryId="artistic_events"
                onSelectPhoto={handleOpenLightbox}
                lang={lang}
                t={t}
              />
            }
          />

          {/* About Routes */}
          <Route path="/about" element={<AboutPage lang={lang} t={t} />} />

          {/* Contact Routes */}
          <Route path="/contact" element={<ContactPage lang={lang} t={t} />} />

          {/* Fallback to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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
      <Footer t={t} />
    </div>
  );
}
