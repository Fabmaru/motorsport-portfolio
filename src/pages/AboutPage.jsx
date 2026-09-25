import React from 'react';
import { Camera, Award, Flag, BookOpen, ShieldCheck, CheckCircle2, MapPin } from 'lucide-react';

export default function AboutPage({ lang, t }) {
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
        alignItems: 'center',
        marginBottom: '5rem'
      }}>
        {/* Photographer Image Card */}
        <div className="glass-card" style={{ padding: '1rem', position: 'relative', overflow: 'hidden' }}>
          <img
            src="/assets/photographer_portrait.jpg"
            alt="Fabmaru Photo Photographer"
            style={{
              width: '100%',
              borderRadius: 'var(--radius-sm)',
              display: 'block',
              objectFit: 'cover'
            }}
          />
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            right: '2rem',
            background: 'rgba(8, 10, 16, 0.88)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-sm)',
            padding: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem'
          }}>
            <ShieldCheck size={26} color="var(--accent-blue)" />
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#FFFFFF' }}>
                FABMARU PHOTO
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {t.contact.details.availability}
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

          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            {t.about.bioP4}
          </p>

          {/* Key Accreditations / Highlights */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFFFFF', fontWeight: 600 }}>
              <CheckCircle2 size={20} color="var(--accent-blue)" />
              <span>FIA & FIM International Accredited Trackside Media</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFFFFF', fontWeight: 600 }}>
              <CheckCircle2 size={20} color="var(--accent-blue)" />
              <span>High-speed panning & night endurance specialist</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#FFFFFF', fontWeight: 600 }}>
              <CheckCircle2 size={20} color="var(--accent-blue)" />
              <span>Commercial automotive studio & light painting</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trackside Statistics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        marginBottom: '5rem'
      }}>
        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent-blue)', fontFamily: 'var(--font-heading)' }}>
            12+
          </div>
          <div style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>
            {t.about.stats.years}
          </div>
        </div>

        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
            150+
          </div>
          <div style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>
            {t.about.stats.races}
          </div>
        </div>

        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent-blue)', fontFamily: 'var(--font-heading)' }}>
            25+
          </div>
          <div style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>
            {t.about.stats.circuits}
          </div>
        </div>

        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', fontWeight: 900, color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
            45+
          </div>
          <div style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase' }}>
            {t.about.stats.publications}
          </div>
        </div>
      </div>

      {/* Trackside Gear List */}
      <div className="glass-card" style={{ padding: '3rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            {t.about.gearTitle}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
            {t.about.gearSubtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {t.about.gearList.map((g, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-light)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1rem'
              }}
            >
              <Camera size={22} color="var(--accent-blue)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
              <div>
                <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                  {g.item}
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  {g.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
