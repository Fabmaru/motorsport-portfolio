import React from 'react';
import { Instagram, Facebook, Mail, ArrowUp } from 'lucide-react';

export default function Footer({ setActiveTab, t }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-light)',
      padding: '4rem 1.5rem 2rem 1.5rem',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Brand Col */}
          <div>
            <div className="logo-brand" style={{ marginBottom: '1.25rem' }}>
              <img src="/assets/logo_main.png" alt="Fabmaru Photo Logo" className="logo-img" style={{ height: '52px' }} />
            </div>
            
            {/* Follow Me Section */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Follow me
              </div>
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                <a 
                  href="https://instagram.com/fabmaruphoto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram @fabmaruphoto"
                  title="Instagram @fabmaruphoto"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Instagram size={22} />
                </a>

                <a 
                  href="https://facebook.com/fabmaruphoto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook @fabmaruphoto"
                  title="Facebook @fabmaruphoto"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Facebook size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Categories Links */}
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              {t.hub.title}
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <button 
                  onClick={() => { setActiveTab('category-motorsport'); window.scrollTo(0,0); }}
                  style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}
                >
                  {t.hub.categories.motorsport.title}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('category-sports'); window.scrollTo(0,0); }}
                  style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}
                >
                  {t.hub.categories.sports.title}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('category-automotive'); window.scrollTo(0,0); }}
                  style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}
                >
                  {t.hub.categories.automotive.title}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('category-artistic_events'); window.scrollTo(0,0); }}
                  style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}
                >
                  {t.hub.categories.artistic_events.title}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '1.05rem', marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              {t.nav.contact}
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              Porto & Braga Region, Portugal (Worldwide)
            </p>
            <p style={{ color: 'var(--accent-blue)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '1rem' }}>
              fabio@fabmaruphoto.com
            </p>
            <button 
              onClick={() => { setActiveTab('contact'); window.scrollTo(0,0); }}
              className="btn-secondary"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem' }}
            >
              {t.contact.title}
            </button>
          </div>
        </div>

        {/* Bottom Bar: All images and content © Fábio Martins. All Rights Reserved. */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
            {t.footer.rights}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ color: 'var(--accent-blue)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em' }}>
              {t.footer.tagline}
            </span>
            <button
              onClick={scrollToTop}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-light)'
              }}
            >
              {t.footer.backToTop}
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
