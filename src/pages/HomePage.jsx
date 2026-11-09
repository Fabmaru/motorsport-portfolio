import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { getCategoryUrl } from '../utils/routes';
import { useDocumentMeta } from '../utils/seo';
import { SmoothImage } from '../components/SmoothEffects';

export default function HomePage({ lang, t }) {
  const pageTitle = lang === 'pt' 
    ? 'Fábio Martins | Fotógrafo de Desporto Motorizado, Desporto e Eventos em Porto'
    : 'Fábio Martins | Motorsport, Sports & Event Photographer from Porto';
    
  const pageDescription = lang === 'pt'
    ? 'Portfólio oficial de fotografia de desporto motorizado, desporto, eventos e automóveis por Fábio Martins, baseado no Norte de Portugal.'
    : 'Official motorsport, sports, events, and automotive photography portfolio by Fábio Martins, based in the North of Portugal.';

  useDocumentMeta(pageTitle, pageDescription);

  const [scrollY, setScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const categoriesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      setScrollY(currentY);
      if (currentY > 45) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategories = () => {
    if (categoriesRef.current) {
      categoriesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Smooth hero parallax & fade calculation
  const heroProgress = Math.min(scrollY / 500, 1);
  const heroTextOpacity = Math.max(1 - heroProgress * 1.15, 0);
  const heroTextTranslate = heroProgress * -45;
  const heroBgScale = 1 + heroProgress * 0.08;

  return (
    <div className="speed-lines">
      {/* FULL-SCREEN HERO BANNER SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 1.5rem 4rem 1.5rem',
        overflow: 'hidden'
      }}>
        {/* Hero Background Image with Smooth Scroll Scale */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/hero_banner.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'brightness(0.65)',
          transform: `scale(${heroBgScale})`,
          transition: 'transform 0.15s ease-out',
          willChange: 'transform'
        }} />
        
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.15) 0%, rgba(8, 10, 16, 0.95) 100%), linear-gradient(to top, rgba(8, 10, 16, 1) 0%, transparent 35%)'
        }} />

        {/* Hero Content Box */}
        <div className="animate-fade-up" style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '980px',
          textAlign: 'center',
          opacity: heroTextOpacity,
          transform: `translateY(${heroTextTranslate}px)`,
          transition: 'opacity 0.15s ease-out, transform 0.15s ease-out',
          willChange: 'opacity, transform'
        }}>
          {/* Main Title */}
          <h1 style={{
            fontSize: 'clamp(2.3rem, 5.5vw, 4.4rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            textShadow: '0 10px 30px rgba(0,0,0,0.8)'
          }}>
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
            color: 'var(--text-muted)',
            maxWidth: '820px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            {t.hero.subtitle}
          </p>
        </div>

        {/* Scroll Down Cue at Bottom of Fullscreen Hero */}
        <button
          onClick={scrollToCategories}
          aria-label="Scroll down to portfolio categories"
          className="hero-scroll-indicator"
          style={{
            opacity: hasScrolled ? 0 : 0.85,
            pointerEvents: hasScrolled ? 'none' : 'auto'
          }}
        >
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)'
          }}>
            {lang === 'pt' ? 'Explorar' : 'Scroll'}
          </span>
          <ChevronDown size={20} color="var(--accent-blue)" className="scroll-chevron-bounce" />
        </button>
      </section>

      {/* PORTFOLIO CATEGORIES SECTION - TRANSITIONS IN ON SCROLL */}
      <section
        ref={categoriesRef}
        className={`home-below-fold ${hasScrolled ? 'is-revealed' : ''}`}
        style={{
          padding: '5rem 1.5rem 4rem 1.5rem',
          maxWidth: '1320px',
          margin: '0 auto'
        }}
      >
        <div
          className={`home-section-header ${hasScrolled ? 'is-revealed' : ''}`}
          style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          <h2 style={{ fontSize: '2.2rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            {t.hub.title}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            {t.hub.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {portfolioData.categories.map((cat, idx) => {
            const catTitle = lang === 'pt' ? cat.titlePt : cat.titleEn;
            return (
              <Link
                key={cat.id}
                to={getCategoryUrl(cat.id)}
                className={`category-card home-category-reveal ${hasScrolled ? 'is-revealed' : ''}`}
                style={{
                  textDecoration: 'none',
                  transitionDelay: hasScrolled ? `${120 + idx * 110}ms` : '0ms'
                }}
              >
                <SmoothImage src={cat.bannerImage} alt={`${catTitle} - Fabmaru Photo`} />
                <div className="category-overlay">
                  <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                    {catTitle}
                  </h3>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '0.85rem'
                  }}>
                    {t.hub.viewCategory} <ArrowRight size={16} color="var(--accent-blue)" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
