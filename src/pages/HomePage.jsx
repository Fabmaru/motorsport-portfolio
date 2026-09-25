import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { getCategoryUrl } from '../utils/routes';
import { useDocumentMeta } from '../utils/seo';

export default function HomePage({ lang, t }) {
  const pageTitle = lang === 'pt' 
    ? 'Fábio Martins | Fotógrafo de Desporto Motorizado, Desporto e Eventos em Porto'
    : 'Fábio Martins | Motorsport, Sports & Event Photographer from Porto';
    
  const pageDescription = lang === 'pt'
    ? 'Portfólio oficial de fotografia de desporto motorizado, desporto, eventos e automóveis por Fábio Martins, baseado no Porto e Braga, Portugal.'
    : 'Official motorsport, sports, events, and automotive photography portfolio by Fábio Martins, based in the Porto and Braga region of Portugal.';

  useDocumentMeta(pageTitle, pageDescription);

  return (
    <div className="speed-lines">
      {/* HERO BANNER SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 1.5rem 4rem 1.5rem',
        overflow: 'hidden'
      }}>
        {/* Hero Background Image with Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/hero_banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'brightness(0.65)'
        }} />
        
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.15) 0%, rgba(8, 10, 16, 0.95) 100%), linear-gradient(to top, rgba(8, 10, 16, 1) 0%, transparent 40%)'
        }} />

        {/* Hero Content Box */}
        <div className="animate-fade-up" style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '980px',
          textAlign: 'center'
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
            Motorsport, Sports & Event Photographer from Porto
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
            Based in the Porto and Braga region of Portugal, available for racing, sports, events, portraits, and commercial photography worldwide.
          </p>
        </div>
      </section>

      {/* QUICK PREVIEW OF THE 4 CATEGORY BANNERS */}
      <section style={{
        padding: '4rem 1.5rem',
        maxWidth: '1320px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
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
          {portfolioData.categories.map((cat) => {
            const catTitle = lang === 'pt' ? cat.titlePt : cat.titleEn;
            return (
              <Link 
                key={cat.id}
                to={getCategoryUrl(cat.id)}
                className="category-card"
                style={{ textDecoration: 'none' }}
              >
                <img src={cat.bannerImage} alt={catTitle} />
                <div className="category-overlay">
                  <div style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent-blue)',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem'
                  }}>
                    {cat.count} {t.hub.photosCount}
                  </div>
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
