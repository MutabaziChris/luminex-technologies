import React from 'react';
import { HeartPulse, GraduationCap, Landmark, Building2, Truck, HardHat, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES } from '../data/content';

export const IndustriesGrid: React.FC = () => {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse style={{ width: '28px', height: '28px', color: '#10B981' }} />;
      case 'GraduationCap': return <GraduationCap style={{ width: '28px', height: '28px', color: 'var(--primary-gold)' }} />;
      case 'Landmark': return <Landmark style={{ width: '28px', height: '28px', color: '#3B82F6' }} />;
      case 'Building2': return <Building2 style={{ width: '28px', height: '28px', color: '#F59E0B' }} />;
      case 'Truck': return <Truck style={{ width: '28px', height: '28px', color: '#8B5CF6' }} />;
      case 'HardHat': return <HardHat style={{ width: '28px', height: '28px', color: '#EC4899' }} />;
      default: return <HeartPulse style={{ width: '28px', height: '28px', color: '#10B981' }} />;
    }
  };

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="max-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            SECTOR SPECIALIZATION & INDUSTRY EXPERTISE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Tailored Solutions for <span className="gradient-text-gold">Every Sector</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Whether you run a private dental practice, an executive advisory, a university, or a hospital network, Luminex crafts targeted digital platforms.
          </p>
        </div>

        {/* Industries Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="glass-panel glass-card-glow"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'var(--bg-card)'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      background: 'rgba(30, 80, 255, 0.06)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {ind.title}
                  </h3>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {ind.description}
                </p>

                {/* Use Cases */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {ind.useCases.map((uc) => (
                    <span
                      key={uc}
                      style={{
                        padding: '4px 10px',
                        background: 'rgba(15, 23, 42, 0.04)',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--text-subtle)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {uc}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  paddingTop: '14px',
                  borderTop: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#10B981',
                  fontSize: '0.825rem',
                  fontWeight: 700
                }}
              >
                <CheckCircle2 style={{ width: '15px', height: '15px', flexShrink: 0 }} />
                <span>{ind.keyBenefit}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
