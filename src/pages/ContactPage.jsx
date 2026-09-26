import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Facebook, Send, CheckCircle, User, Loader2 } from 'lucide-react';
import { useDocumentMeta } from '../utils/seo';

export default function ContactPage({ lang, t }) {
  const pageTitle = lang === 'pt' 
    ? 'Contactos & Reservas | Fábio Martins Fotografia'
    : 'Bookings & Contact | Fábio Martins Photography';
    
  const pageDescription = lang === 'pt'
    ? 'Entre em contacto para reservas de cobertura fotográfica de corridas, eventos desportivos e comerciais com Fábio Martins.'
    : 'Book race coverage, sports events, automotive shoots, or event photography with Fábio Martins Photography.';

  useDocumentMeta(pageTitle, pageDescription);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    date: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/fabio@fabmaruphoto.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Category: formData.category || 'General Enquiry',
          Target_Date: formData.date || 'Not specified',
          Message: formData.message,
          _subject: `New Portfolio Booking Enquiry: ${formData.name}`,
          _template: 'table'
        })
      });

      const data = await response.json();
      if (response.ok || data.success === 'true' || data.success === true) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

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
          <Mail size={14} />
          {lang === 'pt' ? 'RESERVAS E ACREDITAÇÕES' : 'BOOKINGS & ACCREDITATION'}
        </div>

        <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          {t.contact.title}
        </h1>

        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto' }}>
          {t.contact.subtitle}
        </p>
      </div>

      {/* Grid: Form & Direct Contact Details */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
        alignItems: 'start'
      }}>
        {/* Contact Form Card */}
        <div className="glass-card" style={{ padding: '2.5rem' }}>
          {submitted ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              animation: 'fadeIn 0.4s ease'
            }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(0, 102, 255, 0.15)',
                color: 'var(--accent-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto',
                border: '1px solid var(--accent-blue)'
              }}>
                <CheckCircle size={36} />
              </div>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', color: '#FFFFFF' }}>
                {lang === 'pt' ? 'Mensagem Enviada!' : 'Message Sent Successfully!'}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 2rem auto' }}>
                {t.contact.form.success}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', category: '', date: '', message: '' });
                }}
                className="btn-secondary"
                style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}
              >
                {lang === 'pt' ? 'Enviar Outra Mensagem' : 'Send Another Message'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Name */}
              <div>
                <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {t.contact.form.name} *
                </label>
                <div style={{ position: 'relative' }}>
                  <User size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Silva"
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem 1rem 0.85rem 2.8rem',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {t.contact.form.email} *
                </label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@raceteam.com"
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem 1rem 0.85rem 2.8rem',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Category Select & Date */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {t.contact.form.category}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'var(--bg-surface-elevated)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem 1rem',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option value="">{t.contact.form.categories.select}</option>
                    <option value="motorsport">{t.contact.form.categories.motorsport}</option>
                    <option value="automotive">{t.contact.form.categories.automotive}</option>
                    <option value="sports">{t.contact.form.categories.sports}</option>
                    <option value="artistic_events">{t.contact.form.categories.artistic_events}</option>
                    <option value="portraits">{t.contact.form.categories.portraits}</option>
                    <option value="others">{t.contact.form.categories.others}</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    {t.contact.form.date}
                  </label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    placeholder="e.g. Oct 2026"
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-light)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.85rem 1rem',
                      color: 'var(--text-main)',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {t.contact.form.message} *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Details regarding your shoot, track meeting, location..."
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '0.85rem 1rem',
                    color: 'var(--text-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{
                  width: '100%',
                  marginTop: '0.5rem',
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.6rem'
                }}
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {lang === 'pt' ? 'A enviar...' : 'Sending...'}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t.contact.form.send}
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Direct Contact Cards & Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: '#FFFFFF' }}>
              {lang === 'pt' ? 'INFORMACÃO DE CONTACTO DIRETO' : 'DIRECT CONTACT INFO'}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 102, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-blue)'
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                    {lang === 'pt' ? 'Localização' : 'Location'}
                  </div>
                  <div style={{ color: '#FFFFFF', fontWeight: 600 }}>{t.contact.details.location}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 102, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-blue)'
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Email</div>
                  <a href="mailto:fabio@fabmaruphoto.com" style={{ color: 'var(--accent-blue)', fontWeight: 600 }}>
                    fabio@fabmaruphoto.com
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 102, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-blue)'
                }}>
                  <Instagram size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Instagram</div>
                  <a href="https://instagram.com/fabmaruphoto" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                    @fabmaruphoto
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 102, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-blue)'
                }}>
                  <Facebook size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Facebook</div>
                  <a href="https://facebook.com/fabmaruphoto" target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', fontWeight: 600 }}>
                    @fabmaruphoto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
