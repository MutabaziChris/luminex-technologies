import React from 'react';
import { UserCheck, Mail, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <UserCheck style={{ width: '13px', height: '13px', color: 'var(--primary-gold)' }} />
            <span>EXECUTIVE GOVERNANCE & ACCOUNTABILITY</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>
            Leadership Behind <span className="gradient-text-gold">Luminex</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 600 }}>
            Enterprise clients demand direct accountability. Luminex is led by senior engineering architects dedicated to precision, security, and measurable ROI.
          </p>
        </div>

        {/* Founder & Leadership Card */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '40px',
            background: 'var(--bg-card)',
            border: '2px solid var(--border-gold)',
            boxShadow: 'var(--shadow-card)',
            borderRadius: '24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          {/* Portrait Container */}
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                width: '180px',
                height: '180px',
                margin: '0 auto 20px auto',
                borderRadius: '50%',
                padding: '6px',
                background: 'linear-gradient(135deg, #D97706 0%, #1E50FF 100%)',
                boxShadow: '0 10px 30px rgba(217, 119, 6, 0.3)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
                alt="Mutabazi Jean Pierre Christian - Founder & CEO"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '4px' }}>
              Mutabazi Jean Pierre Christian
            </h3>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-gold)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '12px' }}>
              Founder & Chief Executive Officer
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                style={{ padding: '8px 14px', background: 'rgba(217, 119, 6, 0.1)', border: '1px solid rgba(217, 119, 6, 0.3)', borderRadius: 'var(--radius-full)', color: 'var(--primary-gold)', fontSize: '0.785rem', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Mail style={{ width: '13px', height: '13px' }} />
                <span>Executive Contact</span>
              </a>
            </div>
          </div>

          {/* Executive Bio & Philosophy */}
          <div>
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
              "Software engineering is not just writing code — it is building long-term operational confidence."
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px', fontWeight: 600 }}>
              Christian founded Luminex Technologies with a singular vision: to bridge the gap between global enterprise engineering standards and African digital transformation needs. Under his leadership, Luminex has delivered software platforms for dental clinics, commercial banks, government ministries, and international advisory executives.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
              {[
                'Full Executive IP Ownership Guarantee',
                'Zero-Downtime Microservices Design',
                'OWASP Security & Data Protection',
                '24/7 SLA Technical Accountability'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-main)' }}>
                  <CheckCircle2 style={{ width: '15px', height: '15px', color: '#10B981', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
