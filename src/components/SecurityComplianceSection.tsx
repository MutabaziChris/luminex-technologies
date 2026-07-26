import React from 'react';
import { Shield, Lock, FileCheck, Server, RefreshCw, Key } from 'lucide-react';

export const SecurityComplianceSection: React.FC = () => {
  const securityPillars = [
    {
      icon: Shield,
      title: 'OWASP Top 10 Active Defense',
      desc: 'Rigorous protection against SQL injection, XSS, CSRF, and broken access controls.'
    },
    {
      icon: Lock,
      title: 'AES-256 & TLS 1.3 Encryption',
      desc: 'Military-grade end-to-end encryption for data in transit and at rest in PostgreSQL clusters.'
    },
    {
      icon: Key,
      title: 'Enterprise SSO & SAML / OAuth2',
      desc: 'Granular Role-Based Access Control (RBAC) and biometric Single Sign-On authentication.'
    },
    {
      icon: FileCheck,
      title: 'GDPR & HIPAA Data Residency',
      desc: 'Architected to meet sovereign data privacy standards for medical and financial systems.'
    },
    {
      icon: RefreshCw,
      title: 'Automated Multi-AZ Backups',
      desc: 'Continuous real-time database replication and point-in-time automated disaster recovery.'
    },
    {
      icon: Server,
      title: '24/7 Security Operations & Logs',
      desc: 'Round-the-clock automated log monitoring, anomaly detection, and security patches.'
    }
  ];

  return (
    <section id="security-compliance" className="section-padding section-highlight-blue">
      <div className="max-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Shield style={{ width: '13px', height: '13px', color: 'var(--primary-blue)' }} />
            <span>ENTERPRISE SECURITY BY DESIGN</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>
            Uncompromising Security & <span className="gradient-text-blue">Compliance</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 600 }}>
            Enterprise procurement managers demand absolute data protection. Every Luminex codebase undergoes automated security audits and strict cryptographic verification.
          </p>
        </div>

        {/* Security Pillars Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {securityPillars.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '28px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-blue)',
                  borderRadius: '18px',
                  transition: 'transform 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <div style={{ padding: '10px', background: 'rgba(30, 80, 255, 0.12)', borderRadius: '12px', flexShrink: 0 }}>
                    <IconComponent style={{ width: '24px', height: '24px', color: 'var(--primary-blue)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {p.title}
                  </h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, fontWeight: 600 }}>
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
