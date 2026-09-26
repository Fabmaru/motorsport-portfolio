import React from 'react';
import { Camera } from 'lucide-react';
import { useDocumentMeta } from '../utils/seo';

export default function AboutPage({ lang, t }) {
  const pageTitle = lang === 'pt' 
    ? 'Sobre Fábio Martins | Fotógrafo Profissional Porto'
    : 'About Fábio Martins | Professional Photographer Porto';
    
  const pageDescription = lang === 'pt'
    ? 'Conheça Fábio Martins, fotógrafo de desporto motorizado, desporto e eventos no Porto, Portugal.'
    : 'Learn about Fábio Martins, photographer specializing in motorsport, sports, and events from Porto, Portugal.';

  useDocumentMeta(pageTitle, pageDescription);

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
          <Camera size={14} />
          {t.about.subtitle}
        </div>

        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          {t.about.title}
        </h1>
      </div>

      {/* Main Grid: Portrait & Bio */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3.5rem',
        alignItems: 'center'
      }}>
        {/* Photographer Image Card */}
        <div className="glass-card" style={{ padding: '1rem', position: 'relative', overflow: 'hidden' }}>
          <img
            src="/assets/photographer_portrait.jpg"
            alt="Fábio Martins Photographer"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            style={{
              width: '100%',
              borderRadius: 'var(--radius-sm)',
              display: 'block',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '1.75rem',
            left: '1.75rem',
            right: '1.75rem',
            background: 'rgba(8, 10, 16, 0.82)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 102, 255, 0.35)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 102, 255, 0.15)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.85rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(0, 102, 255, 0.15)',
              border: '1px solid rgba(0, 102, 255, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Camera size={20} color="var(--accent-blue)" />
            </div>
            <div>
              <div style={{
                fontWeight: 800,
                fontSize: '1.05rem',
                color: '#FFFFFF',
                letterSpacing: '0.02em',
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase'
              }}>
                Fábio Martins
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Fabmaru Photo
              </div>
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            {t.about.bioP1}
          </p>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            {t.about.bioP2}
          </p>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            {t.about.bioP3}
          </p>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            {t.about.bioP4}
          </p>
        </div>
      </div>
    </div>
  );
}
