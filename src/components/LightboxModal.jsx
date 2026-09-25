import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function LightboxModal({ item, items, onClose, onNavigate, lang, t }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(-1);
      if (e.key === 'ArrowRight') onNavigate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!item) return null;

  return (
    <div className="lightbox-backdrop">
      {/* Top Bar Actions */}
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        right: '2rem',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF',
            border: '1px solid var(--border-light)',
            padding: '0.6rem',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          title="Toggle Fullscreen"
        >
          <Maximize2 size={18} />
        </button>

        <button
          onClick={onClose}
          style={{
            background: 'var(--accent-blue)',
            color: '#FFFFFF',
            border: 'none',
            padding: '0.6rem 1.1rem',
            borderRadius: 'var(--radius-sm)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontWeight: 700,
            cursor: 'pointer'
          }}
          title={t.gallery.close}
        >
          <X size={20} />
          {t.gallery.close}
        </button>
      </div>

      {/* Previous Photo Button */}
      <button
        onClick={() => onNavigate(-1)}
        style={{
          position: 'absolute',
          left: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(8, 10, 16, 0.85)',
          border: '1px solid var(--border-light)',
          color: '#FFFFFF',
          padding: '1rem',
          borderRadius: 'var(--radius-full)',
          backdropFilter: 'blur(10px)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)'
        }}
        title="Previous Photo (Left Arrow)"
      >
        <ChevronLeft size={32} color="var(--accent-blue)" />
      </button>

      {/* Next Photo Button */}
      <button
        onClick={() => onNavigate(1)}
        style={{
          position: 'absolute',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          background: 'rgba(8, 10, 16, 0.85)',
          border: '1px solid var(--border-light)',
          color: '#FFFFFF',
          padding: '1rem',
          borderRadius: 'var(--radius-full)',
          backdropFilter: 'blur(10px)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 0 20px rgba(0, 102, 255, 0.3)'
        }}
        title="Next Photo (Right Arrow)"
      >
        <ChevronRight size={32} color="var(--accent-blue)" />
      </button>

      {/* Main High-Res Image Display */}
      <div style={{
        maxWidth: isFullscreen ? '98vw' : '88vw',
        maxHeight: isFullscreen ? '94vh' : '84vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <img
          src={item.image}
          alt="Photo Preview"
          style={{
            maxWidth: '100%',
            maxHeight: '82vh',
            objectFit: 'contain',
            borderRadius: 'var(--radius-sm)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)',
            border: '1px solid var(--border-light)'
          }}
        />
      </div>
    </div>
  );
}
