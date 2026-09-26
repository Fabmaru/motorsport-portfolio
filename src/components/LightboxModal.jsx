import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera, Sliders } from 'lucide-react';

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

  const hasExif = item.exif && (item.exif.camera || item.exif.exposure || item.exif.lens);

  return (
    <div className="lightbox-backdrop" onContextMenu={(e) => e.preventDefault()}>
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

      {/* Main Container */}
      <div style={{
        maxWidth: isFullscreen ? '98vw' : '88vw',
        maxHeight: isFullscreen ? '94vh' : '84vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        gap: '0.75rem'
      }}>
        <img
          src={item.image}
          alt="Photo Preview"
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          style={{
            maxWidth: '100%',
            maxHeight: hasExif ? (isFullscreen ? '86vh' : '76vh') : (isFullscreen ? '92vh' : '82vh'),
            objectFit: 'contain',
            borderRadius: 'var(--radius-sm)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)',
            border: '1px solid var(--border-light)',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none'
          }}
        />

        {/* Technical Specs Bar (Only rendered if EXIF metadata exists) */}
        {hasExif && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.8rem 1.2rem',
            background: 'rgba(8, 10, 16, 0.75)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0, 102, 255, 0.25)',
            padding: '0.4rem 1.2rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            letterSpacing: '0.02em',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
          }}>
            {item.exif.camera && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#FFFFFF', fontWeight: 600 }}>
                <Camera size={14} color="var(--accent-blue)" />
                {item.exif.camera}
              </span>
            )}
            {item.exif.lens && (
              <span style={{ opacity: 0.85 }}>{item.exif.lens}</span>
            )}
            {item.exif.focalLength && (
              <span style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>{item.exif.focalLength}</span>
            )}
            {(item.exif.exposure || item.exif.aperture || item.exif.iso) && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', opacity: 0.9 }}>
                <Sliders size={13} color="var(--accent-blue)" />
                {[item.exif.exposure, item.exif.aperture, item.exif.iso].filter(Boolean).join(' • ')}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

