import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, Menu, X, ChevronRight } from 'lucide-react';

export default function Header({ lang, setLang, t }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const toggleLang = () => {
    setLang(lang === 'en' ? 'pt' : 'en');
  };

  const isHomeActive = pathname === '/' || pathname === '';
  const isPortfolioActive = pathname.startsWith('/portfolio');
  const isAboutActive = pathname.startsWith('/about');
  const isContactActive = pathname.startsWith('/contact');

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header-glass">
      <div className="nav-container">
        {/* Main Fabmaru Photo Logo */}
        <Link 
          to="/" 
          className="logo-brand"
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={closeMobileMenu}
        >
          <img 
            src="/assets/logo_main.png" 
            alt="Fabmaru Photo Logo" 
            className="logo-img"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <Link
            to="/"
            style={{
              color: isHomeActive ? 'var(--accent-blue)' : 'var(--text-main)',
              fontWeight: isHomeActive ? 700 : 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s ease',
              borderBottom: isHomeActive ? '2px solid var(--accent-blue)' : '2px solid transparent',
              paddingBottom: '0.25rem',
              textDecoration: 'none'
            }}
          >
            {t.nav.home}
          </Link>

          <Link
            to="/portfolio/"
            style={{
              color: isPortfolioActive ? 'var(--accent-blue)' : 'var(--text-main)',
              fontWeight: isPortfolioActive ? 700 : 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s ease',
              borderBottom: isPortfolioActive ? '2px solid var(--accent-blue)' : '2px solid transparent',
              paddingBottom: '0.25rem',
              textDecoration: 'none'
            }}
          >
            {t.nav.portfolio}
          </Link>

          <Link
            to="/about/"
            style={{
              color: isAboutActive ? 'var(--accent-blue)' : 'var(--text-main)',
              fontWeight: isAboutActive ? 700 : 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s ease',
              borderBottom: isAboutActive ? '2px solid var(--accent-blue)' : '2px solid transparent',
              paddingBottom: '0.25rem',
              textDecoration: 'none'
            }}
          >
            {t.nav.about}
          </Link>

          <Link
            to="/contact/"
            style={{
              color: isContactActive ? 'var(--accent-blue)' : 'var(--text-main)',
              fontWeight: isContactActive ? 700 : 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s ease',
              borderBottom: isContactActive ? '2px solid var(--accent-blue)' : '2px solid transparent',
              paddingBottom: '0.25rem',
              textDecoration: 'none'
            }}
          >
            {t.nav.contact}
          </Link>
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
          <Link
            to="/contact/"
            className="btn-primary"
            style={{
              padding: '0.55rem 1.1rem',
              fontSize: '0.85rem',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none'
            }}
          >
            {t.nav.bookSession}
            <ChevronRight size={16} />
          </Link>

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
          <Link 
            to="/" 
            onClick={closeMobileMenu}
            style={{ color: isHomeActive ? 'var(--accent-blue)' : 'var(--text-main)', textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}
          >
            {t.nav.home}
          </Link>
          <Link 
            to="/portfolio/" 
            onClick={closeMobileMenu}
            style={{ color: isPortfolioActive ? 'var(--accent-blue)' : 'var(--text-main)', textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}
          >
            {t.nav.portfolio}
          </Link>
          <Link 
            to="/about/" 
            onClick={closeMobileMenu}
            style={{ color: isAboutActive ? 'var(--accent-blue)' : 'var(--text-main)', textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}
          >
            {t.nav.about}
          </Link>
          <Link 
            to="/contact/" 
            onClick={closeMobileMenu}
            style={{ color: isContactActive ? 'var(--accent-blue)' : 'var(--text-main)', textAlign: 'left', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none' }}
          >
            {t.nav.contact}
          </Link>
        </div>
      )}
    </header>
  );
}
