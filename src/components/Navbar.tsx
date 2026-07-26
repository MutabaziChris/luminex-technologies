import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Calculator, PhoneCall, Sun, Moon, FileText } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import type { Currency } from '../types';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  currency: Currency;
  onToggleCurrency: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenScheduler: () => void;
  onOpenEstimator: () => void;
  onOpenCapability: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  currency,
  onToggleCurrency,
  theme,
  onToggleTheme,
  onOpenScheduler,
  onOpenEstimator,
  onOpenCapability
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: string) => {
    onNavigate(view);
    setMobileOpen(false);
    
    // Smooth scroll to target section if on page
    const targetEl = document.getElementById(view);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 500,
        transition: 'all 0.3s ease',
        background: scrolled
          ? theme === 'light' ? 'rgba(255, 255, 255, 0.98)' : 'rgba(6, 8, 18, 0.96)'
          : theme === 'light' ? 'rgba(255, 255, 255, 0.92)' : 'rgba(6, 8, 18, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: theme === 'light'
          ? '1px solid rgba(15, 23, 42, 0.12)'
          : '1px solid rgba(223, 178, 89, 0.3)',
        boxShadow: scrolled
          ? theme === 'light' ? '0 10px 30px rgba(15, 23, 42, 0.1)' : '0 10px 35px rgba(0, 0, 0, 0.8)'
          : 'none'
      }}
    >
      <div
        className="max-container navbar-inner-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px',
          paddingLeft: '12px',
          paddingRight: '12px'
        }}
      >
        
        {/* Prominent Gold-Bordered Logo */}
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <BrandLogo size="sm" showTagline={false} theme={theme} onClick={() => handleNavClick('home')} />
        </div>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '18px' }} className="desktop-only">
          {[
            { id: 'home', label: 'Home' },
            { id: 'services', label: 'Services' },
            { id: 'industries', label: 'Industries' },
            { id: 'portfolio', label: 'Case Studies' },
            { id: 'pricing', label: 'Pricing & Plans' },
            { id: 'about', label: 'About' },
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: currentView === item.id
                  ? '#B45309'
                  : theme === 'light' ? '#0F172A' : '#F8FAFC',
                fontWeight: currentView === item.id ? 800 : 700,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'color 0.2s',
                padding: '6px 2px'
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Controls Container */}
        <div className="navbar-controls-group" style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
          
          {/* Theme Toggle Button (Sun / Moon) */}
          <button
            onClick={onToggleTheme}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: theme === 'light' ? 'rgba(15, 23, 42, 0.06)' : 'rgba(255, 255, 255, 0.08)',
              border: theme === 'light' ? '1px solid rgba(15, 23, 42, 0.15)' : '1px solid rgba(223, 178, 89, 0.4)',
              color: theme === 'light' ? '#B45309' : '#FCD34D',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle Theme Mode"
          >
            {theme === 'light' ? <Moon style={{ width: '17px', height: '17px' }} /> : <Sun style={{ width: '17px', height: '17px' }} />}
          </button>

          {/* Currency Switcher */}
          <button
            onClick={onToggleCurrency}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              background: theme === 'light' ? 'rgba(217, 119, 6, 0.12)' : 'rgba(223, 178, 89, 0.15)',
              border: theme === 'light' ? '1px solid rgba(217, 119, 6, 0.35)' : '1px solid rgba(223, 178, 89, 0.4)',
              borderRadius: 'var(--radius-full)',
              color: theme === 'light' ? '#B45309' : '#FCD34D',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer',
              flexShrink: 0
            }}
            title="Toggle Currency (RWF / USD)"
          >
            <Globe style={{ width: '13px', height: '13px', color: theme === 'light' ? '#B45309' : '#DFB259' }} />
            <span>{currency}</span>
          </button>

          {/* ROI Estimator Button (Desktop only) */}
          <button
            onClick={onOpenEstimator}
            className="desktop-only"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              background: 'rgba(30, 80, 255, 0.1)',
              border: '1px solid rgba(30, 80, 255, 0.3)',
              borderRadius: 'var(--radius-full)',
              color: '#1E50FF',
              fontSize: '0.8rem',
              fontWeight: 800,
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <Calculator style={{ width: '14px', height: '14px' }} />
            <span>ROI Calculator</span>
          </button>

          {/* Schedule Call Button */}
          <button
            onClick={onOpenScheduler}
            className="btn-gold navbar-cta-btn"
            style={{
              padding: '7px 12px',
              fontSize: '0.8rem',
              flexShrink: 0,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px'
            }}
          >
            <PhoneCall style={{ width: '14px', height: '14px', flexShrink: 0 }} />
            <span className="cta-full-text">Schedule Call</span>
            <span className="cta-short-text">Call</span>
          </button>

          {/* High-Contrast Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle-btn"
            style={{
              background: theme === 'light' ? 'rgba(217, 119, 6, 0.12)' : 'rgba(223, 178, 89, 0.15)',
              border: theme === 'light' ? '1.5px solid #D97706' : '1.5px solid #FCD34D',
              borderRadius: '10px',
              color: theme === 'light' ? '#B45309' : '#FCD34D',
              cursor: 'pointer',
              padding: '7px 9px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X style={{ width: '22px', height: '22px' }} /> : <Menu style={{ width: '22px', height: '22px' }} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div
          style={{
            background: theme === 'light' ? '#FFFFFF' : '#060812',
            borderBottom: '2px solid #D97706',
            padding: '20px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
          }}
        >
          {[
            { id: 'home', label: 'Home Overview' },
            { id: 'services', label: 'Services & Capabilities' },
            { id: 'industries', label: 'Industries We Serve' },
            { id: 'portfolio', label: 'Case Studies Portfolio' },
            { id: 'pricing', label: 'Pricing & Plans (250k+ RWF)' },
            { id: 'about', label: 'About Luminex' },
            { id: 'contact', label: 'Contact Us' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                textAlign: 'left',
                background: 'none',
                border: 'none',
                color: currentView === item.id ? '#B45309' : theme === 'light' ? '#0F172A' : '#F8FAFC',
                fontSize: '1rem',
                fontWeight: currentView === item.id ? 800 : 600,
                padding: '10px 0',
                borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
              }}
            >
              {item.label}
            </button>
          ))}

          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <button
              onClick={onToggleTheme}
              className="btn-secondary"
              style={{ flex: 1, padding: '10px', fontSize: '0.8rem' }}
            >
              {theme === 'light' ? <Moon style={{ width: '14px', height: '14px' }} /> : <Sun style={{ width: '14px', height: '14px' }} />}
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>

            <button
              onClick={() => { setMobileOpen(false); onOpenCapability(); }}
              className="btn-gold"
              style={{ flex: 1, padding: '10px', fontSize: '0.8rem' }}
            >
              <FileText style={{ width: '14px', height: '14px' }} />
              Profile PDF
            </button>
          </div>
        </div>
      )}

      {/* Responsive Custom Rules */}
      <style>{`
        @media (max-width: 480px) {
          .navbar-inner-container {
            padding-left: 6px !important;
            padding-right: 6px !important;
          }
          .navbar-controls-group {
            gap: 4px !important;
          }
          .cta-full-text {
            display: none !important;
          }
          .cta-short-text {
            display: inline !important;
          }
          .navbar-cta-btn {
            padding: 5px 8px !important;
            font-size: 0.725rem !important;
          }
        }
        @media (min-width: 481px) {
          .cta-short-text {
            display: none !important;
          }
          .cta-full-text {
            display: inline !important;
          }
        }
        @media (max-width: 992px) {
          .desktop-only {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
        @media (min-width: 993px) {
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
