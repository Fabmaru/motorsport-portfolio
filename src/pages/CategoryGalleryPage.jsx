import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Flag } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { getCategoryUrl, getMotorsportDisciplineUrl } from '../utils/routes';
import { useDocumentMeta } from '../utils/seo';

export default function CategoryGalleryPage({ categoryId, initialDiscipline, onSelectPhoto, lang, t }) {
  const params = useParams();

  const selectedDiscipline = params.discipline || initialDiscipline || 'ALL';

  const categoryMeta = portfolioData.categories.find(c => c.id === categoryId) || portfolioData.categories[0];
  const title = lang === 'pt' ? categoryMeta.titlePt : categoryMeta.titleEn;

  // Document Title & Meta SEO
  let seoTitle = `${title} Photography | Fábio Martins`;
  let seoDesc = `Explore ${title} photography portfolio by Fábio Martins.`;

  if (categoryId === 'motorsport') {
    if (selectedDiscipline !== 'ALL') {
      const discName = selectedDiscipline.charAt(0).toUpperCase() + selectedDiscipline.slice(1);
      seoTitle = `${discName} Motorsport Photography | Fábio Martins`;
      seoDesc = `High-speed ${discName} motorsport racing photography collection by Fábio Martins.`;
    } else {
      seoTitle = `Motorsport Photography | Circuit, Rally, Rallycross, Karting & Hillclimb | Fábio Martins`;
      seoDesc = `Action motorsport photography covering circuit racing, rally, rallycross, karting, and hillclimb by Fábio Martins.`;
    }
  }

  useDocumentMeta(seoTitle, seoDesc);

  // If this is Motorsport, define the 5 sub-categories
  const isMotorsport = categoryId === 'motorsport';
  const disciplines = categoryMeta.disciplines || [
    { id: 'circuit', titleEn: 'Circuit', titlePt: 'Velocidade' },
    { id: 'rally', titleEn: 'Rally', titlePt: 'Rali' },
    { id: 'rallycross', titleEn: 'Rallycross', titlePt: 'Rallycross' },
    { id: 'karting', titleEn: 'Karting', titlePt: 'Karting' },
    { id: 'hillclimb', titleEn: 'Hillclimb', titlePt: 'Rampa' }
  ];

  // Filter and randomize category items
  const filteredItems = useMemo(() => {
    const items = portfolioData.items.filter(item => {
      if (item.category !== categoryId) return false;
      return selectedDiscipline === 'ALL' || item.subCategory === selectedDiscipline;
    });

    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, [categoryId, selectedDiscipline]);

  return (
    <div>
      {/* Category Header Hero */}
      <section style={{
        position: 'relative',
        height: '300px',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '3rem 1.5rem',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${categoryMeta.bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          filter: 'brightness(0.45)'
        }} />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, var(--bg-dark) 0%, transparent 80%)'
        }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1320px',
          width: '100%',
          margin: '0 auto'
        }}>
          <Link
            to="/portfolio/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginBottom: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-light)',
              textDecoration: 'none'
            }}
          >
            <ArrowLeft size={16} />
            {t.gallery.backToHub}
          </Link>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', textTransform: 'uppercase' }}>
            {title}
          </h1>
        </div>
      </section>

      {/* Control Bar: Discipline Filters */}
      {isMotorsport && (
        <section style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '2rem 1.5rem 0rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          {/* Motorsport Disciplines Sub-nav */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-blue)', fontWeight: 700, fontSize: '0.85rem', marginRight: '0.5rem' }}>
              <Flag size={16} />
              <span>{lang === 'pt' ? 'CATEGORIAS:' : 'DISCIPLINES:'}</span>
            </div>
            <Link
              to={getMotorsportDisciplineUrl('ALL')}
              style={{
                background: selectedDiscipline === 'ALL' ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                color: selectedDiscipline === 'ALL' ? '#FFFFFF' : 'var(--text-muted)',
                border: '1px solid var(--border-light)',
                padding: '0.45rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.85rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              {lang === 'pt' ? 'Todas (5 Galerias)' : 'All (5 Galleries)'}
            </Link>
            {disciplines.map(d => {
              const dTitle = lang === 'pt' ? d.titlePt : d.titleEn;
              const isActive = selectedDiscipline === d.id;
              return (
                <Link
                  key={d.id}
                  to={getMotorsportDisciplineUrl(d.id)}
                  style={{
                    background: isActive ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                    color: isActive ? '#FFFFFF' : 'var(--text-muted)',
                    border: '1px solid var(--border-light)',
                    padding: '0.45rem 1.1rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                >
                  {dTitle}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Grid of Photos */}
      <section style={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '2rem 1.5rem 5rem 1.5rem'
      }}>
        {filteredItems.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--text-muted)' }}>
            {lang === 'pt' ? 'Nenhuma foto encontrada nesta secção.' : 'No photos found in this section.'}
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredItems.map(item => {
              const itemTitle = lang === 'pt' ? item.titlePt : item.titleEn;

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectPhoto(item, filteredItems)}
                  onContextMenu={(e) => e.preventDefault()}
                  className="gallery-item glass-card"
                  style={{
                    position: 'relative',
                    aspectRatio: '4/3',
                    borderRadius: 'var(--radius-sm)',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  <img
                    src={item.image}
                    alt={itemTitle || 'Gallery photo'}
                    loading="lazy"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* LINKS TO OTHER GALLERIES AT THE BOTTOM */}
      <section style={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '3rem 1.5rem 6rem 1.5rem',
        borderTop: '1px solid var(--border-light)'
      }}>
        <h3 style={{
          fontSize: '1.3rem',
          textTransform: 'uppercase',
          marginBottom: '1.75rem',
          color: '#FFFFFF',
          letterSpacing: '0.04em'
        }}>
          {lang === 'pt' ? 'Explorar Outras Galerias' : 'Explore Other Galleries'}
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem'
        }}>
          {portfolioData.categories
            .filter(c => c.id !== categoryId)
            .map(otherCat => {
              const otherTitle = lang === 'pt' ? otherCat.titlePt : otherCat.titleEn;
              return (
                <Link
                  key={otherCat.id}
                  to={getCategoryUrl(otherCat.id)}
                  className="glass-card"
                  style={{
                    position: 'relative',
                    height: '130px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1.25rem',
                    textDecoration: 'none'
                  }}
                >
                  <img
                    src={otherCat.bannerImage}
                    alt={otherTitle}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      filter: 'brightness(0.55)',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(8, 10, 16, 0.95) 0%, transparent 100%)'
                  }} />
                  <div style={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%'
                  }}>
                    <span style={{ fontWeight: 800, fontSize: '0.95rem', color: '#FFFFFF', textTransform: 'uppercase' }}>
                      {otherTitle}
                    </span>
                    <ArrowRight size={18} color="var(--accent-blue)" />
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    </div>
  );
}
