import React, { useState } from 'react';
import { X, Calculator, ArrowRight } from 'lucide-react';
import type { Currency } from '../types';

interface RoiCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  onOpenInquiry: () => void;
}

export const RoiCalculatorModal: React.FC<RoiCalculatorModalProps> = ({
  isOpen,
  onClose,
  currency,
  onOpenInquiry
}) => {
  const [projectScope, setProjectScope] = useState<'website' | 'corporate' | 'app' | 'enterprise'>('corporate');
  const [complexity, setComplexity] = useState<'standard' | 'advanced' | 'ai'>('advanced');

  if (!isOpen) return null;

  // Investment logic
  let basePriceRWF = 1500000;
  let devHours = 140;

  if (projectScope === 'website') {
    basePriceRWF = 500000;
    devHours = 60;
  } else if (projectScope === 'corporate') {
    basePriceRWF = 1500000;
    devHours = 140;
  } else if (projectScope === 'app') {
    basePriceRWF = 3000000;
    devHours = 260;
  } else if (projectScope === 'enterprise') {
    basePriceRWF = 7500000;
    devHours = 520;
  }

  if (complexity === 'advanced') {
    basePriceRWF *= 1.3;
    devHours *= 1.3;
  } else if (complexity === 'ai') {
    basePriceRWF *= 1.6;
    devHours *= 1.6;
  }

  const priceUSD = Math.round(basePriceRWF / 1250);
  const estimatedSavingsRWF = Math.round(basePriceRWF * 2.8);
  const estimatedSavingsUSD = Math.round(estimatedSavingsRWF / 1250);
  const paybackMonths = Math.max(2, Math.round((basePriceRWF / (estimatedSavingsRWF / 12)) * 10) / 10);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000, // Higher than navbar zIndex (500)
        background: 'rgba(5, 7, 15, 0.75)',
        backdropFilter: 'blur(24px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-panel"
        style={{
          maxWidth: '850px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '36px',
          position: 'relative',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-gold)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(0, 0, 0, 0.05)',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%'
          }}
        >
          <X style={{ width: '22px', height: '22px' }} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ padding: '10px', background: 'rgba(30,80,255,0.1)', borderRadius: '12px' }}>
            <Calculator style={{ width: '24px', height: '24px', color: 'var(--primary-blue)' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Interactive ROI & Cost Estimator</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Calculate estimated engineering investment and operational savings</span>
          </div>
        </div>

        {/* Step 1: Project Scope Selection */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
            1. Select Project Scope & Target Platform
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px' }}>
            {[
              { id: 'website', name: 'Personal / Clinic Site (500k)' },
              { id: 'corporate', name: 'Corporate Portal (1.5M)' },
              { id: 'app', name: 'Web App / Mobile (3M+)' },
              { id: 'enterprise', name: 'Enterprise ERP / Sovereign' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setProjectScope(item.id as any)}
                style={{
                  padding: '12px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: projectScope === item.id ? 'rgba(30, 80, 255, 0.15)' : 'var(--bg-primary)',
                  border: projectScope === item.id ? '2px solid var(--primary-blue)' : '1px solid var(--border-subtle)',
                  color: projectScope === item.id ? 'var(--primary-blue)' : 'var(--text-muted)',
                  textAlign: 'center'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Intelligence & Integration Complexity */}
        <div style={{ marginBottom: '28px' }}>
          <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-main)', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
            2. Select Architecture & AI Integration Level
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
            {[
              { id: 'standard', name: 'Standard Core', desc: 'Base REST APIs & DB' },
              { id: 'advanced', name: 'Advanced Microservices', desc: 'SSO, RBAC, High Concurrency' },
              { id: 'ai', name: 'AI & Sovereign RAG', desc: 'GenAI, OCR, Vector DB' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setComplexity(item.id as any)}
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: complexity === item.id ? 'rgba(217, 119, 6, 0.12)' : 'var(--bg-primary)',
                  border: complexity === item.id ? '2px solid var(--primary-gold)' : '1px solid var(--border-subtle)',
                  color: complexity === item.id ? 'var(--primary-gold)' : 'var(--text-muted)',
                  textAlign: 'left'
                }}
              >
                <div style={{ fontWeight: 800, color: 'var(--text-main)' }}>{item.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', marginTop: '2px', fontWeight: 600 }}>{item.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Calculation Output Panel */}
        <div
          style={{
            background: 'var(--bg-primary)',
            padding: '24px',
            borderRadius: '16px',
            border: '1px solid var(--border-blue)',
            marginBottom: '28px'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 800 }}>Estimated Investment</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary-blue)', fontFamily: 'var(--font-heading)', marginTop: '4px' }}>
                {currency === 'RWF' ? `${Math.round(basePriceRWF).toLocaleString()} RWF` : `$${priceUSD.toLocaleString()} USD`}
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Est. ~{Math.round(devHours)} Dev Hours</span>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 800 }}>Projected Y1 Savings</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#10B981', fontFamily: 'var(--font-heading)', marginTop: '4px' }}>
                {currency === 'RWF' ? `${Math.round(estimatedSavingsRWF).toLocaleString()} RWF` : `$${estimatedSavingsUSD.toLocaleString()} USD`}
              </div>
              <span style={{ fontSize: '0.75rem', color: '#10B981', fontWeight: 800 }}>+280% Average Return</span>
            </div>

            <div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 800 }}>Payback Period</span>
              <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary-gold)', fontFamily: 'var(--font-heading)', marginTop: '4px' }}>
                {paybackMonths} Months
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Rapid Cost Recoupment</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            onClose();
            onOpenInquiry();
          }}
          className="btn-gold"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          <span>Lock In Estimate & Schedule Technical Scoping Call</span>
          <ArrowRight style={{ width: '16px', height: '16px' }} />
        </button>

      </div>
    </div>
  );
};
