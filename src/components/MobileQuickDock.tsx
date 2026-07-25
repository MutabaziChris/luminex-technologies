import React from 'react';
import { DollarSign, MessageSquare, PhoneCall, Zap, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface MobileQuickDockProps {
  onNavigate: (view: string) => void;
  onOpenEstimator: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const MobileQuickDock: React.FC<MobileQuickDockProps> = ({
  onNavigate,
  onOpenEstimator,
  theme,
  onToggleTheme
}) => {
  const handleNav = (view: string) => {
    onNavigate(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 190,
        background: theme === 'light' ? 'rgba(255, 255, 255, 0.96)' : 'rgba(6, 8, 18, 0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderTop: theme === 'light' ? '1px solid rgba(15, 23, 42, 0.12)' : '1px solid rgba(223, 178, 89, 0.3)',
        boxShadow: '0 -4px 25px rgba(0, 0, 0, 0.15)',
        padding: '8px 12px'
      }}
      className="mobile-only-dock"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', gap: '4px' }}>
        
        {/* Plans Navigation */}
        <button
          onClick={() => handleNav('pricing')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            background: 'none',
            border: 'none',
            color: theme === 'light' ? '#0F172A' : '#F8FAFC',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer'
          }}
        >
          <DollarSign style={{ width: '18px', height: '18px', color: '#D97706' }} />
          <span>Plans</span>
        </button>

        {/* Contact Form Trigger */}
        <button
          onClick={() => handleNav('contact')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            background: 'none',
            border: 'none',
            color: theme === 'light' ? '#0F172A' : '#F8FAFC',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer'
          }}
        >
          <PhoneCall style={{ width: '18px', height: '18px', color: '#1E50FF' }} />
          <span>Contact</span>
        </button>

        {/* ROI Estimator Trigger */}
        <button
          onClick={onOpenEstimator}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            background: 'none',
            border: 'none',
            color: theme === 'light' ? '#0F172A' : '#F8FAFC',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer'
          }}
        >
          <Zap style={{ width: '18px', height: '18px', color: '#10B981' }} />
          <span>ROI Tool</span>
        </button>

        {/* WhatsApp Direct Chat Button */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Luminex%20Technologies,%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            color: '#10B981',
            fontSize: '0.7rem',
            fontWeight: 800,
            textDecoration: 'none'
          }}
        >
          <MessageSquare style={{ width: '18px', height: '18px' }} />
          <span>WhatsApp</span>
        </a>

        {/* Theme Toggle Button */}
        <button
          onClick={onToggleTheme}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3px',
            background: 'none',
            border: 'none',
            color: theme === 'light' ? '#D97706' : '#FCD34D',
            fontSize: '0.7rem',
            fontWeight: 800,
            cursor: 'pointer'
          }}
        >
          {theme === 'light' ? <Moon style={{ width: '18px', height: '18px' }} /> : <Sun style={{ width: '18px', height: '18px' }} />}
          <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>

      </div>

      <style>{`
        @media (min-width: 769px) {
          .mobile-only-dock {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
