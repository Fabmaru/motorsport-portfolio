import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, LayoutGrid, MapPin, Tag, Flag } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CategoryGalleryPage({ categoryId, onSelectPhoto, setActiveTab, lang, t }) {
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [selectedDiscipline, setSelectedDiscipline] = useState('ALL');

  const categoryMeta = portfolioData.categories.find(c => c.id === categoryId) || portfolioData.categories[0];
  const title = lang === 'pt' ? categoryMeta.titlePt : categoryMeta.titleEn;

  // Filter category items
  const categoryItems = portfolioData.items.filter(item => item.category === categoryId);

  // If this is Motorsport, define the 5 sub-categories
  const isMotorsport = categoryId === 'motorsport';
  const disciplines = categoryMeta.disciplines || [
    { id: 'circuit', titleEn: 'Circuit', titlePt: 'Velocidade' },
    { id: 'rally', titleEn: 'Rally', titlePt: 'Rali' },
    { id: 'rallycross', titleEn: 'Rallycross', titlePt: 'Rallycross' },
    { id: 'karting', titleEn: 'Karting', titlePt: 'Karting' },
    { id: 'hillclimb', titleEn: 'Hillclimb', titlePt: 'Rampa' }
  ];

  // Extract all unique tags
  const allTags = ['ALL', ...new Set(categoryItems.flatMap(i => i.tags || []))];

  const filteredItems = categoryItems.filter(item => {
    const matchesTag = selectedTag === 'ALL' || (item.tags && item.tags.includes(selectedTag));
    const matchesDiscipline = selectedDiscipline === 'ALL' || item.subCategory === selectedDiscipline;
    return matchesTag && matchesDiscipline;
  });

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
          <button
            onClick={() => setActiveTab('portfolio')}
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
              border: '1px solid var(--border-light)'
            }}
          >
            <ArrowLeft size={16} />
            {t.gallery.backToHub}
          </button>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', textTransform: 'uppercase' }}>
            {title}
          </h1>
        </div>
      </section>

      {/* Control Bar: Discipline & Tag Filters */}
      <section style={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '2rem 1.5rem 1rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem'
      }}>
        {/* Motorsport Disciplines Sub-nav */}
        {isMotorsport && (
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-blue)', fontWeight: 700, fontSize: '0.85rem', marginRight: '0.5rem' }}>
              <Flag size={16} />
              <span>{lang === 'pt' ? 'CATEGORIAS:' : 'DISCIPLINES:'}</span>
            </div>
            <button
              onClick={() => setSelectedDiscipline('ALL')}
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
                textTransform: 'uppercase'
              }}
            >
              {lang === 'pt' ? 'Todas (5 Galerias)' : 'All (5 Galleries)'}
            </button>
            {disciplines.map(d => {
              const dTitle = lang === 'pt' ? d.titlePt : d.titleEn;
              const isActive = selectedDiscipline === d.id;
              return (
                <button
                  key={d.id}
                  onClick={() => setSelectedDiscipline(d.id)}
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
                    textTransform: 'uppercase'
                  }}
                >
                  {dTitle}
                </button>
              );
            })}
          </div>
        )}

        {/* Tag Filters & Grid Indicator Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
            <Tag size={16} color="var(--accent-blue)" style={{ marginRight: '0.25rem' }} />
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                style={{
                  background: selectedTag === tag ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                  color: selectedTag === tag ? '#FFFFFF' : 'var(--text-muted)',
                  border: '1px solid var(--border-light)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tag === 'ALL' ? t.gallery.all : tag}
              </button>
            ))}
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'rgba(0, 102, 255, 0.12)',
            border: '1px solid rgba(0, 102, 255, 0.4)',
            padding: '0.4rem 0.85rem',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--accent-blue)',
            fontSize: '0.82rem',
            fontWeight: 700
          }}>
            <LayoutGrid size={16} />
            <span>{t.gallery.grid3x3} ({filteredItems.length} {t.hub.photosCount})</span>
          </div>
        </div>
      </section>

      {/* GALLERY SECTIONS */}
      <section style={{ maxWidth: '1320px', margin: '0 auto', padding: '1.5rem 1.5rem 4rem 1.5rem' }}>
        {isMotorsport && selectedDiscipline === 'ALL' ? (
          /* Render 5 Distinct Titled Galleries for Motorsport */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {disciplines.map(disc => {
              const discTitle = lang === 'pt' ? disc.titlePt : disc.titleEn;
              const discItems = filteredItems.filter(item => item.subCategory === disc.id);
              if (discItems.length === 0) return null;

              return (
                <div key={disc.id} id={`disc-${disc.id}`}>
                  {/* Discipline Section Title */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1.75rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--border-light)'
                  }}>
                    <h2 style={{ fontSize: '1.8rem', textTransform: 'uppercase', color: '#FFFFFF', letterSpacing: '0.04em' }}>
                      {discTitle}
                    </h2>
                    <span style={{
                      background: 'rgba(0, 102, 255, 0.15)',
                      color: 'var(--accent-blue)',
                      padding: '0.2rem 0.7rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.8rem',
                      fontWeight: 800
                    }}>
                      {discItems.length} {t.hub.photosCount}
                    </span>
                  </div>

                  {/* 3x3 Photo Grid */}
                  <div className="gallery-grid-3x3">
                    {discItems.map(item => {
                      const itemTitle = lang === 'pt' ? item.titlePt : item.titleEn;
                      return (
                        <div
                          key={item.id}
                          onClick={() => onSelectPhoto(item, discItems)}
                          className="gallery-item"
                        >
                          <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                            <img src={item.image} alt={itemTitle} />
                            <div style={{
                              position: 'absolute',
                              inset: 0,
                              background: 'linear-gradient(to top, rgba(8, 10, 16, 0.92) 0%, transparent 60%)',
                              opacity: 0,
                              transition: 'opacity 0.3s ease',
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'flex-end',
                              padding: '1.25rem'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                            onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                            >
                              <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                {itemTitle}
                              </div>
                              <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                <MapPin size={12} color="var(--accent-blue)" />
                                {item.location}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Render Single Grid for specific subcategory or non-motorsport categories */
          <div className="gallery-grid-3x3">
            {filteredItems.map(item => {
              const itemTitle = lang === 'pt' ? item.titlePt : item.titleEn;
              return (
                <div
                  key={item.id}
                  onClick={() => onSelectPhoto(item, filteredItems)}
                  className="gallery-item"
                >
                  <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                    <img src={item.image} alt={itemTitle} />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(8, 10, 16, 0.92) 0%, transparent 60%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '1.25rem'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = 0}
                    >
                      <div style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                        {itemTitle}
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <MapPin size={12} color="var(--accent-blue)" />
                        {item.location}
                      </div>
                    </div>
                  </div>
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
                <div
                  key={otherCat.id}
                  onClick={() => { setActiveTab(`category-${otherCat.id}`); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="glass-card"
                  style={{
                    position: 'relative',
                    height: '130px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1.25rem'
                  }}
                >
                  <img
                    src={otherCat.bannerImage}
                    alt={otherTitle}
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
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}
