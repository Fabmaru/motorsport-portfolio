import React, { useState } from 'react';
import { Globe, Menu, X, ChevronRight } from 'lucide-react';

export default function Header({ lang, setLang, activeTab, setActiveTab, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'pt' : 'en');
  };

  return (
    <header className="header-glass">
      <div className="nav-container">
        {/* Logo with Circular Icon on Upper Left */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} 
          className="logo-brand"
          style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}
        >
          <img 
            src="/assets/logo_small.png" 
            alt="Fabmaru Photo Icon" 
            style={{ 
              height: '46px', 
              width: '46px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '1.5px solid rgba(0, 102, 255, 0.4)',
              boxShadow: '0 0 12px rgba(0, 102, 255, 0.25)',
              flexShrink: 0
            }}
          />
          <img 
            src="/assets/logo_main.png" 
            alt="Fabmaru Photo Logo" 
            className="logo-img"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <button
            onClick={() => handleNavClick('home')}
            style={{
              color: activeTab === 'home' ? 'var(--accent-blue)' : 'var(--text-main)',
              fontWeight: activeTab === 'home' ? 700 : 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s ease',
              borderBottom: activeTab === 'home' ? '2px solid var(--accent-blue)' : '2px solid transparent',
              paddingBottom: '0.25rem'
            }}
          >
            {t.nav.home}
          </button>

          <button
            onClick={() => handleNavClick('portfolio')}
            style={{
              color: activeTab === 'portfolio' || activeTab.startsWith('category-') ? 'var(--accent-blue)' : 'var(--text-main)',
              fontWeight: activeTab === 'portfolio' || activeTab.startsWith('category-') ? 700 : 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s ease',
              borderBottom: activeTab === 'portfolio' || activeTab.startsWith('category-') ? '2px solid var(--accent-blue)' : '2px solid transparent',
              paddingBottom: '0.25rem'
            }}
          >
            {t.nav.portfolio}
          </button>

          <button
            onClick={() => handleNavClick('about')}
            style={{
              color: activeTab === 'about' ? 'var(--accent-blue)' : 'var(--text-main)',
              fontWeight: activeTab === 'about' ? 700 : 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s ease',
              borderBottom: activeTab === 'about' ? '2px solid var(--accent-blue)' : '2px solid transparent',
              paddingBottom: '0.25rem'
            }}
          >
            {t.nav.about}
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            style={{
              color: activeTab === 'contact' ? 'var(--accent-blue)' : 'var(--text-main)',
              fontWeight: activeTab === 'contact' ? 700 : 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s ease',
              borderBottom: activeTab === 'contact' ? '2px solid var(--accent-blue)' : '2px solid transparent',
              paddingBottom: '0.25rem'
            }}
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Right Actions: Language Switcher & Book CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Language Toggle Pill */}
          <button
            onClick={toggleLang}
            title="Switch Language / Mudar Idioma"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55rem',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-light)',
              padding: '0.4rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-main)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', opacity: lang === 'en' ? 1 : 0.55 }}>
              <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>🇬🇧</span>
              <span style={{ color: lang === 'en' ? 'var(--accent-blue)' : 'var(--text-muted)', fontWeight: 800 }}>EN</span>
            </span>
            <span style={{ color: 'var(--border-light)' }}>|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', opacity: lang === 'pt' ? 1 : 0.55 }}>
              <span style={{ fontSize: '1.05rem', lineHeight: 1 }}>🇵🇹</span>
              <span style={{ color: lang === 'pt' ? 'var(--accent-blue)' : 'var(--text-muted)', fontWeight: 800 }}>PT</span>
            </span>
          </button>

          {/* Book Session CTA Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary"
            style={{
              padding: '0.55rem 1.1rem',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-sm)'
            }}
          >
            {t.nav.bookSession}
            <ChevronRight size={16} />
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--text-main)', display: 'none' }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(8, 10, 16, 0.98)',
          borderBottom: '1px solid var(--border-light)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          <button onClick={() => handleNavClick('home')} style={{ color: activeTab === 'home' ? 'var(--accent-blue)' : 'var(--text-main)', textAlign: 'left', fontSize: '1.1rem', fontWeight: 600 }}>
            {t.nav.home}
          </button>
          <button onClick={() => handleNavClick('portfolio')} style={{ color: activeTab === 'portfolio' ? 'var(--accent-blue)' : 'var(--text-main)', textAlign: 'left', fontSize: '1.1rem', fontWeight: 600 }}>
            {t.nav.portfolio}
          </button>
          <button onClick={() => handleNavClick('about')} style={{ color: activeTab === 'about' ? 'var(--accent-blue)' : 'var(--text-main)', textAlign: 'left', fontSize: '1.1rem', fontWeight: 600 }}>
            {t.nav.about}
          </button>
          <button onClick={() => handleNavClick('contact')} style={{ color: activeTab === 'contact' ? 'var(--accent-blue)' : 'var(--text-main)', textAlign: 'left', fontSize: '1.1rem', fontWeight: 600 }}>
            {t.nav.contact}
          </button>
        </div>
      )}
    </header>
  );
}
