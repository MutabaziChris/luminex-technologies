import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Sparkles, Shield, Cpu, Activity, TrendingUp, Lock, CheckCircle2, Zap } from 'lucide-react';
import { HeroCanvas } from './HeroCanvas';

interface HeroSectionProps {
  onStartProject: () => void;
  onScheduleCall: () => void;
  onOpenEstimator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onScheduleCall,
  onOpenEstimator
}) => {
  const [activeTab, setActiveTab] = useState<'metrics' | 'ai' | 'security'>('metrics');
  const [pulseCount, setPulseCount] = useState(14820);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '70px 0 60px 0', background: 'var(--bg-primary)' }}>
      {/* Background Interactive Particle Canvas */}
      <HeroCanvas />

      {/* Radial Ambient Glows */}
      <div className="ambient-glow-gold" style={{ top: '-100px', left: '10%' }}></div>
      <div className="ambient-glow-blue" style={{ top: '200px', right: '5%' }}></div>

      <div className="max-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', maxWidth: '920px', margin: '0 auto' }}>
          
          {/* Top Enterprise Badge */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <div
              className="badge-pill"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <Sparkles style={{ width: '13px', height: '13px', color: 'var(--primary-gold)', flexShrink: 0 }} />
              <span>AFRICA'S PREMIER ENTERPRISE SOFTWARE ENGINE</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(1.75rem, 5.5vw, 4.2rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '20px',
              letterSpacing: '-0.03em',
              wordBreak: 'break-word',
              hyphens: 'auto',
              color: 'var(--text-main)'
            }}
          >
            Engineering the Future of <br className="desktop-only" />
            <span className="gradient-text-blue">Digital Innovation.</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              maxWidth: '820px',
              margin: '0 auto 30px auto',
              fontWeight: 600
            }}
          >
            We build enterprise software, AI platforms, mobile apps, clinic portals, and personal websites that help businesses and leaders automate, scale, and thrive.
          </p>

          {/* Dual Main CTAs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '40px'
            }}
          >
            <button
              onClick={onStartProject}
              className="btn-cyan"
              style={{ padding: '14px 28px', fontSize: '0.95rem' }}
            >
              <span>Start Your Project</span>
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </button>

            <button
              onClick={onScheduleCall}
              className="btn-gold"
              style={{ padding: '14px 24px', fontSize: '0.95rem' }}
            >
              <Calendar style={{ width: '16px', height: '16px' }} />
              <span>Schedule Call</span>
            </button>

            <button
              onClick={onOpenEstimator}
              className="btn-secondary"
              style={{ padding: '14px 20px', fontSize: '0.95rem' }}
            >
              <Zap style={{ width: '16px', height: '16px', color: 'var(--primary-gold)' }} />
              <span>ROI Estimator</span>
            </button>
          </div>

          {/* Key Executive Trust Metrics Banner */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '14px',
              padding: '20px',
              background: 'var(--bg-card)',
              backdropFilter: 'blur(16px)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-subtle)',
              boxShadow: 'var(--shadow-card)',
              marginBottom: '50px'
            }}
          >
            <div>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>140+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 800 }}>Projects Done</div>
            </div>

            <div>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: 'var(--primary-blue)', fontFamily: 'var(--font-heading)' }}>99.99%</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 800 }}>Cloud SLA</div>
            </div>

            <div>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#10B981', fontFamily: 'var(--font-heading)' }}>12+</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 800 }}>Countries</div>
            </div>

            <div>
              <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: 'var(--primary-gold)', fontFamily: 'var(--font-heading)' }}>99.4%</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 800 }}>Client CSAT</div>
            </div>
          </div>

        </div>

        {/* Floating 3D Interactive Enterprise Dashboard Mockup */}
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div
            className="glass-panel"
            style={{
              padding: '20px',
              border: '1px solid var(--border-blue)',
              boxShadow: 'var(--shadow-hover)',
              borderRadius: '20px',
              background: 'var(--bg-card)'
            }}
          >
            {/* Dashboard Window Header Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '14px',
                marginBottom: '16px',
                borderBottom: '1px solid var(--border-subtle)',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }} />
                <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginLeft: '8px', fontFamily: 'monospace', fontWeight: 800 }}>
                  luminex-core-sys [ONLINE]
                </span>
              </div>

              {/* Interactive Dashboard Tabs */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setActiveTab('metrics')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    background: activeTab === 'metrics' ? 'rgba(30, 80, 255, 0.12)' : 'transparent',
                    border: activeTab === 'metrics' ? '1px solid var(--primary-blue)' : 'none',
                    color: activeTab === 'metrics' ? 'var(--primary-blue)' : 'var(--text-muted)'
                  }}
                >
                  Telemetry
                </button>
                <button
                  onClick={() => setActiveTab('ai')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    background: activeTab === 'ai' ? 'rgba(30, 80, 255, 0.12)' : 'transparent',
                    border: activeTab === 'ai' ? '1px solid var(--primary-blue)' : 'none',
                    color: activeTab === 'ai' ? 'var(--primary-blue)' : 'var(--text-muted)'
                  }}
                >
                  AI RAG
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    cursor: 'pointer',
                    background: activeTab === 'security' ? 'rgba(30, 80, 255, 0.12)' : 'transparent',
                    border: activeTab === 'security' ? '1px solid var(--primary-blue)' : 'none',
                    color: activeTab === 'security' ? 'var(--primary-blue)' : 'var(--text-muted)'
                  }}
                >
                  Zero-Trust
                </button>
              </div>
            </div>

            {/* Tab Content Display */}
            {activeTab === 'metrics' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-subtle)', fontSize: '0.75rem', fontWeight: 800 }}>
                    <span>API Traffic</span>
                    <Activity style={{ width: '14px', height: '14px', color: 'var(--primary-blue)' }} />
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-main)', margin: '8px 0 2px 0' }}>
                    {pulseCount.toLocaleString()} <span style={{ fontSize: '0.75rem', color: '#10B981' }}>/s</span>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 800 }}>
                    <TrendingUp style={{ width: '10px', height: '10px' }} />
                    <span>+14.2% peak throughput</span>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-subtle)', fontSize: '0.75rem', fontWeight: 800 }}>
                    <span>Response Latency</span>
                    <Cpu style={{ width: '14px', height: '14px', color: '#3B82F6' }} />
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-main)', margin: '8px 0 2px 0' }}>
                    38.4 <span style={{ fontSize: '0.75rem', color: 'var(--primary-blue)' }}>ms</span>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', fontWeight: 700 }}>
                    Redis Cache Active
                  </div>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-subtle)', fontSize: '0.75rem', fontWeight: 800 }}>
                    <span>Security Audit</span>
                    <Shield style={{ width: '14px', height: '14px', color: '#10B981' }} />
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-main)', margin: '8px 0 2px 0' }}>
                    0 <span style={{ fontSize: '0.75rem', color: '#10B981' }}>Breaches</span>
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 800 }}>
                    <CheckCircle2 style={{ width: '10px', height: '10px' }} />
                    <span>ISO 27001 & AES-256</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ai' && (
              <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', color: 'var(--text-main)', fontSize: '0.85rem', fontFamily: 'monospace', fontWeight: 600 }}>
                <div style={{ color: 'var(--primary-blue)', marginBottom: '6px' }}>[LUMINEX-AI] &gt; Query: "Schedule dental appointment for Dr. Keza."</div>
                <div style={{ color: '#10B981', marginBottom: '6px' }}>✓ Appointment locked in Supabase DB. WhatsApp SMS dispatch triggered.</div>
              </div>
            )}

            {activeTab === 'security' && (
              <div style={{ background: 'var(--bg-secondary)', padding: '16px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Lock style={{ width: '32px', height: '32px', color: '#10B981', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '2px', fontWeight: 800 }}>Zero-Trust Cryptographic Vault</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.775rem', fontWeight: 600 }}>
                    SAML SSO, TLS 1.3 encryption, and automated backups.
                  </p>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
