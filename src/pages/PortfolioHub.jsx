import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PortfolioHub({ setActiveTab, lang, t }) {
  return (
    <div style={{ padding: '7rem 1.5rem 5rem 1.5rem', maxWidth: '1320px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-up">
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(0, 102, 255, 0.1)',
          border: '1px solid rgba(0, 102, 255, 0.3)',
          padding: '0.35rem 1rem',
          borderRadius: 'var(--radius-full)',
          color: 'var(--accent-blue)',
          fontSize: '0.8rem',
          fontWeight: 800,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          <Sparkles size={14} />
          PHOTOGRAPHY COLLECTIONS
        </div>

        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          {t.hub.title}
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto' }}>
          {t.hub.subtitle}
        </p>
      </div>

      {/* 4 Category Cards List (NO DESCRIPTIONS, ONLY MAIN TITLE & BUTTON) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {portfolioData.categories.map((cat, index) => {
          const title = lang === 'pt' ? cat.titlePt : cat.titleEn;

          return (
            <div
              key={cat.id}
              onClick={() => { setActiveTab(`category-${cat.id}`); window.scrollTo(0,0); }}
              className="glass-card hub-card-row"
            >
              {/* Image Col */}
              <div style={{
                order: index % 2 === 0 ? 1 : 2,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img
                  src={cat.bannerImage}
                  alt={title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    transition: 'transform 0.6s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(8, 10, 16, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--accent-blue)',
                  border: '1px solid rgba(0, 102, 255, 0.4)'
                }}>
                  {cat.count} {t.hub.photosCount}
                </div>
              </div>

              {/* Text Content Col */}
              <div style={{
                order: index % 2 === 0 ? 2 : 1,
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                {/* ONLY MAIN TITLE */}
                <h2 style={{ fontSize: '2.2rem', marginBottom: '1.5rem', color: 'var(--text-main)', textTransform: 'uppercase' }}>
                  {title}
                </h2>

                <div>
                  <button
                    className="btn-primary"
                    style={{
                      padding: '0.9rem 1.8rem',
                      fontSize: '0.95rem'
                    }}
                  >
                    {t.hub.viewCategory}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
