import React from 'react';
import { Mail, Phone, MapPin, Globe, FileText, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { BrandLogo } from './BrandLogo';
import type { Currency } from '../types';

interface FooterProps {
  onNavigate: (view: string) => void;
  currency: Currency;
  onToggleCurrency: () => void;
  onOpenCapability: () => void;
  onOpenEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  currency,
  onToggleCurrency,
  onOpenCapability,
  onOpenEstimator
}) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#04060E', borderTop: '1px solid rgba(223, 178, 89, 0.2)', paddingTop: '70px', paddingBottom: '30px' }}>
      <div className="max-container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* Brand & Description Column */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <BrandLogo size="md" showTagline={true} onClick={() => handleNavClick('home')} />
            </div>

            <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {COMPANY_INFO.description}
            </p>

            {/* Currency & Capability Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              <button
                onClick={onToggleCurrency}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  background: 'rgba(223, 178, 89, 0.1)',
                  border: '1px solid rgba(223, 178, 89, 0.3)',
                  borderRadius: 'var(--radius-full)',
                  color: '#FCD34D',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <Globe style={{ width: '14px', height: '14px' }} />
                <span>Currency: {currency}</span>
              </button>

              <button
                onClick={onOpenCapability}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-full)',
                  color: '#CBD5E1',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                <FileText style={{ width: '14px', height: '14px', color: '#DFB259' }} />
                <span>Capability Deck PDF</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FCD34D', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home Overview', view: 'home' },
                { label: 'Services & Capabilities', view: 'services' },
                { label: 'Case Studies Portfolio', view: 'portfolio' },
                { label: 'Technologies Matrix', view: 'technologies' },
                { label: 'Pricing Tiers (250k+ RWF)', view: 'pricing' },
                { label: 'About Luminex', view: 'about' },
                { label: 'Engineering Blog', view: 'blog' },
                { label: 'Executive FAQs', view: 'faq' },
                { label: 'Contact & Scoping', view: 'contact' }
              ].map((item) => (
                <button
                  key={item.view}
                  onClick={() => handleNavClick(item.view)}
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    color: '#94A3B8',
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#FCD34D')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
                >
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Key Capabilities Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FCD34D', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Core Specializations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Dental Clinic & Doctor Booking Portals',
                'Personal Brand Portfolio Websites',
                'Enterprise Web Applications & ERPs',
                'GenAI & Sovereign RAG Knowledge Systems',
                'Mobile Money & Banking API Gateways',
                'Government e-Permits & Civil Registries',
                '24/7 SLA Uptime Maintenance'
              ].map((cap, idx) => (
                <div key={idx} style={{ color: '#CBD5E1', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#DFB259' }} />
                  <span>{cap}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenEstimator}
              style={{
                marginTop: '20px',
                background: 'rgba(30, 80, 255, 0.15)',
                border: '1px solid rgba(30, 80, 255, 0.35)',
                borderRadius: '10px',
                padding: '8px 14px',
                color: '#60A5FA',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Calculate Project ROI & Budget</span>
              <ArrowUpRight style={{ width: '14px', height: '14px' }} />
            </button>
          </div>

          {/* Contact Information Column */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#FCD34D', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Direct Inquiry
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#CBD5E1', textDecoration: 'none', fontSize: '0.875rem' }}
              >
                <div style={{ padding: '8px', background: 'rgba(223, 178, 89, 0.1)', borderRadius: '8px' }}>
                  <Mail style={{ width: '16px', height: '16px', color: '#DFB259' }} />
                </div>
                <span>{COMPANY_INFO.email}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#CBD5E1', textDecoration: 'none', fontSize: '0.875rem' }}
              >
                <div style={{ padding: '8px', background: 'rgba(30, 80, 255, 0.1)', borderRadius: '8px' }}>
                  <Phone style={{ width: '16px', height: '16px', color: '#00F0FF' }} />
                </div>
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#CBD5E1', fontSize: '0.85rem' }}>
                <div style={{ padding: '8px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', flexShrink: 0 }}>
                  <MapPin style={{ width: '16px', height: '16px', color: '#10B981' }} />
                </div>
                <span>{COMPANY_INFO.address}</span>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Luminex%20Technologies,%20I%20would%20like%20to%20inquire%20about%20a%20website%20project.`}
                target="_blank"
                rel="noreferrer"
                className="btn-gold"
                style={{ marginTop: '10px', width: '100%', justifyContent: 'center', padding: '10px', fontSize: '0.85rem' }}
              >
                Direct WhatsApp Contact
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Line */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
            © {currentYear} {COMPANY_INFO.name}. All Rights Reserved. Built for high-impact innovation.
          </div>

          <div style={{ display: 'flex', gap: '20px', fontSize: '0.8rem', color: '#64748B' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span>•</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span>•</span>
            <span style={{ cursor: 'pointer' }}>Security Standards</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
