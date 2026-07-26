import React from 'react';
import { Check, X, Sparkles, Award } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Engineering Standard',
      others: 'Generic pre-made templates & bloated page builders',
      luminex: '100% Custom React & TypeScript high-performance engineering',
      highlight: true
    },
    {
      feature: 'Communication & Delivery',
      others: 'Slow responses & delayed email updates',
      luminex: 'Dedicated lead architect & guaranteed sub-2hr SLA response',
      highlight: false
    },
    {
      feature: 'Pricing & Budget Transparency',
      others: 'Hidden add-on fees & surprise post-launch charges',
      luminex: 'Fixed transparent pricing (250k+ RWF) with zero hidden fees',
      highlight: true
    },
    {
      feature: 'Architecture & Scalability',
      others: 'Monolithic legacy scripts that break under traffic spikes',
      luminex: 'Cloud-native microservices & database clustering',
      highlight: false
    },
    {
      feature: 'Code & IP Ownership',
      others: 'Locked proprietary code & monthly license holdbacks',
      luminex: '100% Full source code & IP ownership transferred upon settlement',
      highlight: true
    },
    {
      feature: 'Ongoing SLA & Maintenance',
      others: 'Minimal post-launch support & abandoned plugins',
      luminex: 'Long-term 24/7 uptime monitoring & security patch updates',
      highlight: false
    }
  ];

  return (
    <section id="why-choose-us" className="section-padding section-highlight-gold">
      <div className="max-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Award style={{ width: '13px', height: '13px', color: 'var(--primary-gold)' }} />
            <span>UNCOMPROMISING ENTERPRISE VALUE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>
            Why Enterprise Leaders Choose <span className="gradient-text-gold">Luminex</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 600 }}>
            Compare how Luminex Technologies elevates digital engineering over traditional freelancers and generic offshore web agencies.
          </p>
        </div>

        {/* Comparison Table */}
        <div
          className="glass-panel"
          style={{
            overflowX: 'auto',
            background: 'var(--bg-card)',
            border: '2px solid var(--border-gold)',
            boxShadow: 'var(--shadow-highlight)',
            borderRadius: '20px'
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)', borderBottom: '2px solid var(--border-gold)' }}>
                <th style={{ padding: '20px', fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)', width: '25%' }}>
                  Evaluation Criteria
                </th>
                <th style={{ padding: '20px', fontSize: '0.95rem', fontWeight: 800, color: '#EF4444', width: '37.5%' }}>
                  Generic Freelancers & Agencies
                </th>
                <th style={{ padding: '20px', fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary-gold)', width: '37.5%', background: 'rgba(217, 119, 6, 0.08)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles style={{ width: '18px', height: '18px', color: 'var(--primary-gold)' }} />
                    <span>Luminex Technologies Standard</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid var(--border-subtle)',
                    background: row.highlight ? 'rgba(217, 119, 6, 0.03)' : 'transparent'
                  }}
                >
                  <td style={{ padding: '18px 20px', fontSize: '0.9rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {row.feature}
                  </td>
                  <td style={{ padding: '18px 20px', fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <X style={{ width: '16px', height: '16px', color: '#EF4444', flexShrink: 0, marginTop: '3px' }} />
                      <span>{row.others}</span>
                    </div>
                  </td>
                  <td style={{ padding: '18px 20px', fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 700, background: 'rgba(217, 119, 6, 0.04)' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <Check style={{ width: '18px', height: '18px', color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                      <span>{row.luminex}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};
