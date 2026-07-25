import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Clock, Headphones } from 'lucide-react';
import { PRICING_TIERS } from '../data/content';
import type { Currency } from '../types';

interface PricingSectionProps {
  currency: Currency;
  onToggleCurrency: () => void;
  onOpenInquiry: () => void;
  onOpenEstimator: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  currency,
  onToggleCurrency,
  onOpenInquiry,
  onOpenEstimator
}) => {
  const formatPrice = (tier: typeof PRICING_TIERS[0]) => {
    if (tier.isCustomQuote) return 'Custom Quote';
    if (currency === 'RWF') {
      return `Starting from ${tier.priceRWF.toLocaleString()} RWF`;
    }
    return `Starting from $${tier.priceUSD.toLocaleString()} USD`;
  };

  return (
    <section id="pricing" className="section-padding section-highlight-gold">
      <div className="max-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            TRANSPARENT ENTERPRISE INVESTMENT
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>
            Enterprise Quality <span className="gradient-text-gold">Without Hidden Costs</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px', fontWeight: 600 }}>
            All Luminex engineering tiers include full source code IP ownership, automated testing, security compliance, and dedicated SLA support options.
          </p>

          {/* Currency Toggle Banner */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'var(--bg-card)', padding: '8px 20px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-card)' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700 }}>Display Currency:</span>
            <button
              onClick={onToggleCurrency}
              style={{
                background: 'linear-gradient(135deg, #1E50FF 0%, #00F0FF 100%)',
                border: 'none',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.8rem',
                padding: '5px 16px',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer'
              }}
            >
              {currency === 'RWF' ? '🇷🇼 RWF (Rwandan Francs)' : '🇺🇸 USD ($)'} — Click to switch
            </button>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', marginBottom: '60px' }}>
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="glass-panel"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: 'var(--bg-card)',
                border: tier.popular ? '2px solid var(--primary-gold)' : '1px solid var(--border-subtle)',
                boxShadow: tier.popular ? 'var(--shadow-highlight)' : 'var(--shadow-card)'
              }}
            >
              {tier.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                    color: '#FFFFFF',
                    fontWeight: 900,
                    fontSize: '0.725rem',
                    padding: '4px 14px',
                    borderRadius: 'var(--radius-full)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    boxShadow: '0 4px 15px rgba(217, 119, 6, 0.4)'
                  }}
                >
                  MOST POPULAR TIER
                </div>
              )}

              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  {tier.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5, marginBottom: '20px', fontWeight: 600 }}>
                  {tier.subtitle}
                </p>

                {/* Price Display */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary-gold)', fontFamily: 'var(--font-heading)' }}>
                    {formatPrice(tier)}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '4px', fontWeight: 700 }}>
                    Est. Timeline: {tier.timeline} • Target: {tier.targetClients}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '18px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.775rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px', textTransform: 'uppercase' }}>
                    Included Deliverables:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {tier.deliverables.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
                        <CheckCircle2 style={{ width: '15px', height: '15px', color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenInquiry}
                className={tier.popular ? 'btn-gold' : 'btn-secondary'}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>{tier.isCustomQuote ? 'Request Custom Proposal' : 'Select Tier & Begin'}</span>
                <ArrowRight style={{ width: '15px', height: '15px' }} />
              </button>

            </div>
          ))}
        </div>

        {/* Maintenance & SLA Support Plans Callout */}
        <div
          className="glass-panel"
          style={{
            padding: '36px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-blue)',
            boxShadow: 'var(--shadow-card)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary-blue)', marginBottom: '10px' }}>
              <ShieldCheck style={{ width: '24px', height: '24px' }} />
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>SLA & Maintenance Options</h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: 1.6, fontWeight: 600 }}>
              Protect your website investment with 24/7 security patch updates, proactive database tuning, automated backups, and rapid incident response.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 700 }}>
              <Clock style={{ width: '16px', height: '16px', color: '#10B981' }} />
              <span>Standard Maintenance: 150,000 RWF / month (24h SLA)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 700 }}>
              <Headphones style={{ width: '16px', height: '16px', color: 'var(--primary-blue)' }} />
              <span>Enterprise Platinum SLA: 450,000 RWF / month (15min SLA + Dedicated Pod)</span>
            </div>
            <button
              onClick={onOpenEstimator}
              className="btn-primary"
              style={{ marginTop: '8px', alignSelf: 'flex-start', padding: '10px 22px', fontSize: '0.825rem' }}
            >
              Calculate Custom Project & Maintenance ROI
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
