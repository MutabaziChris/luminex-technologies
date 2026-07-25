import React from 'react';
import { PROCESS_STAGES } from '../data/content';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="max-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            A-TO-Z ENGINEERING METHODOLOGY
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            5 Stages from <span className="gradient-text-blue">Concept to Execution</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Our predictable agile process ensures rapid delivery, zero unexpected costs, and complete peace of mind.
          </p>
        </div>

        {/* Timeline Horizontal / Vertical Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.step}
              className="glass-panel"
              style={{
                padding: '28px',
                position: 'relative',
                background: 'var(--bg-card)',
                borderTop: '3px solid var(--primary-gold)'
              }}
            >
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'var(--primary-gold)',
                  fontFamily: 'var(--font-heading)',
                  lineHeight: 1,
                  marginBottom: '14px',
                  opacity: 0.85
                }}
              >
                {stage.step}
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
                {stage.title}
              </h3>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
