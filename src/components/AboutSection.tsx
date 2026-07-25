import React from 'react';
import { Target, Compass, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="max-container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            ABOUT LUMINEX TECHNOLOGIES
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Africa's Trusted <span className="gradient-text-blue">Software Engineering Partner</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '60px' }}>
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderLeft: '4px solid var(--primary-blue)'
            }}
          >
            <div style={{ padding: '12px', background: 'rgba(30,80,255,0.1)', width: 'max-content', borderRadius: '14px', marginBottom: '20px' }}>
              <Target style={{ width: '28px', height: '28px', color: 'var(--primary-blue)' }} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>Our Mission</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
              {COMPANY_INFO.mission}
            </p>
          </div>

          <div
            className="glass-panel"
            style={{
              padding: '36px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderLeft: '4px solid var(--primary-gold)'
            }}
          >
            <div style={{ padding: '12px', background: 'rgba(217,119,6,0.1)', width: 'max-content', borderRadius: '14px', marginBottom: '20px' }}>
              <Compass style={{ width: '28px', height: '28px', color: 'var(--primary-gold)' }} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>Our Vision</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
              {COMPANY_INFO.vision}
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', textAlign: 'center', marginBottom: '32px' }}>
            Our Core Values & Engineering Culture
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {COMPANY_INFO.coreValues.map((val) => (
              <div
                key={val.title}
                className="glass-panel glass-card-glow"
                style={{ padding: '24px', background: 'var(--bg-card)' }}
              >
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--primary-gold)', marginBottom: '8px' }}>
                  {val.title}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Businesses Trust Us */}
        <div
          className="glass-panel"
          style={{
            padding: '40px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-gold)',
            borderRadius: '24px'
          }}
        >
          <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '24px' }}>
            Why Clients Choose Luminex Technologies
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '14px' }}>
              <CheckCircle2 style={{ width: '22px', height: '22px', color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontWeight: 800, marginBottom: '4px' }}>Absolute IP Code Ownership</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>We transfer 100% of source code, git repositories, and cloud configurations upon project settlement.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px' }}>
              <CheckCircle2 style={{ width: '22px', height: '22px', color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontWeight: 800, marginBottom: '4px' }}>Accessible & Scalable Tiers</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>From 250,000 RWF personal portfolios and clinic portals to custom enterprise software apps.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px' }}>
              <CheckCircle2 style={{ width: '22px', height: '22px', color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontWeight: 800, marginBottom: '4px' }}>Zero Freelancer Risk</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Full legal contracts, SLA uptime guarantees, and dedicated engineering pods in Kigali.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
