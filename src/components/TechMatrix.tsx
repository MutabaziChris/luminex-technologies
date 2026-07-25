import React from 'react';
import { TECH_STACK_CATEGORIES } from '../data/content';

export const TechMatrix: React.FC = () => {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="max-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            ENGINEERING STACK & ARCHITECTURE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>
            Modern Tech <span className="gradient-text-blue">Stack & Standards</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 600 }}>
            We leverage battle-tested open-source frameworks, cloud infrastructure, and AI tools to craft fault-tolerant applications.
          </p>
        </div>

        {/* Stack Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {TECH_STACK_CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="glass-panel"
              style={{
                padding: '32px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--primary-gold)', marginBottom: '20px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '10px' }}>
                {cat.name}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {cat.items.map((item) => (
                  <div key={item.name} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)' }}>{item.name}</span>
                      <span style={{ fontSize: '0.725rem', color: 'var(--primary-blue)', background: 'rgba(30, 80, 255, 0.1)', padding: '2px 8px', borderRadius: '4px', fontWeight: 800 }}>
                        {item.level}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, fontWeight: 600 }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
