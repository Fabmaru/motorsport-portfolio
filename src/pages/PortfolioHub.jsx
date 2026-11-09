import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { getCategoryUrl } from '../utils/routes';
import { useDocumentMeta } from '../utils/seo';
import { ScrollReveal, SmoothImage } from '../components/SmoothEffects';

export default function PortfolioHub({ lang, t }) {
  const pageTitle = lang === 'pt' 
    ? 'Coleções de Fotografia | Fábio Martins'
    : 'Photography Collections & Galleries | Fábio Martins';
    
  const pageDescription = lang === 'pt'
    ? 'Explore as coleções de fotografia de desporto motorizado, desporto, automóveis e eventos artísticos de Fábio Martins.'
    : 'Explore photography collections covering motorsport, sports, automotive, and artistic events by Fábio Martins.';

  useDocumentMeta(pageTitle, pageDescription);

  return (
    <div style={{ padding: '7rem 1.5rem 5rem 1.5rem', maxWidth: '1320px', margin: '0 auto' }}>
      {/* Header */}
      <ScrollReveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          {t.hub.title}
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto' }}>
          {t.hub.subtitle}
        </p>
      </ScrollReveal>

      {/* 4 Category Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {portfolioData.categories.map((cat, index) => {
          const title = lang === 'pt' ? cat.titlePt : cat.titleEn;

          return (
            <ScrollReveal
              key={cat.id}
              as={Link}
              to={getCategoryUrl(cat.id)}
              delay={index * 80}
              className="glass-card hub-card-row"
              style={{ textDecoration: 'none' }}
            >
              {/* Image Col */}
              <div style={{
                order: index % 2 === 0 ? 1 : 2,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <SmoothImage
                  src={cat.bannerImage}
                  alt={`${title} - Fabmaru Photo`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center'
                  }}
                />
              </div>

              {/* Text Content Col */}
              <div style={{
                order: index % 2 === 0 ? 2 : 1,
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--text-main)', textTransform: 'uppercase' }}>
                  {title}
                </h2>

                <div>
                  <span
                    className="btn-primary"
                    style={{
                      padding: '0.9rem 1.8rem',
                      fontSize: '0.95rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem'
                    }}
                  >
                    {t.hub.viewCategory}
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
