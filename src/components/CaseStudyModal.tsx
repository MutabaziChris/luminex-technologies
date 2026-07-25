import React, { useState } from 'react';
import { X, CheckCircle2, Server } from 'lucide-react';
import type { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenInquiry
}) => {
  const [interactiveTab, setInteractiveTab] = useState<'overview' | 'architecture' | 'prototype'>('overview');
  const [prototypeSimStep, setPrototypeSimStep] = useState(1);

  if (!caseStudy) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 250,
        background: 'rgba(5, 7, 15, 0.88)',
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
          maxWidth: '960px',
          width: '100%',
          maxHeight: '92vh',
          overflowY: 'auto',
          padding: '36px',
          position: 'relative',
          background: '#070A17',
          border: `1px solid ${caseStudy.accentColor || '#00F0FF'}`
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#94A3B8',
            cursor: 'pointer',
            padding: '10px',
            borderRadius: '50%'
          }}
        >
          <X style={{ width: '22px', height: '22px' }} />
        </button>

        {/* Top Header Tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
          <span
            style={{
              padding: '4px 12px',
              background: 'rgba(255, 255, 255, 0.06)',
              borderRadius: 'var(--radius-full)',
              color: caseStudy.accentColor,
              fontSize: '0.8rem',
              fontWeight: 700,
              border: `1px solid ${caseStudy.accentColor}44`
            }}
          >
            FEATURED CONCEPT PROJECT • {caseStudy.category.toUpperCase()}
          </span>
          <span style={{ fontSize: '0.8rem', color: '#64748B' }}>Client Type: {caseStudy.clientType}</span>
        </div>

        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
          {caseStudy.title}
        </h2>
        <p style={{ color: '#00F0FF', fontSize: '1.05rem', fontWeight: 600, marginBottom: '24px' }}>
          {caseStudy.tagline}
        </p>

        {/* Modal View Selector Tabs */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '14px',
            marginBottom: '28px'
          }}
        >
          <button
            onClick={() => setInteractiveTab('overview')}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: interactiveTab === 'overview' ? 'rgba(30, 80, 255, 0.25)' : 'transparent',
              border: interactiveTab === 'overview' ? '1px solid #1E50FF' : 'none',
              color: interactiveTab === 'overview' ? '#FFFFFF' : '#94A3B8'
            }}
          >
            Case Study Overview
          </button>
          <button
            onClick={() => setInteractiveTab('architecture')}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: interactiveTab === 'architecture' ? 'rgba(30, 80, 255, 0.25)' : 'transparent',
              border: interactiveTab === 'architecture' ? '1px solid #1E50FF' : 'none',
              color: interactiveTab === 'architecture' ? '#FFFFFF' : '#94A3B8'
            }}
          >
            System Architecture
          </button>
          <button
            onClick={() => setInteractiveTab('prototype')}
            style={{
              padding: '8px 18px',
              borderRadius: '8px',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: interactiveTab === 'prototype' ? 'rgba(30, 80, 255, 0.25)' : 'transparent',
              border: interactiveTab === 'prototype' ? '1px solid #1E50FF' : 'none',
              color: interactiveTab === 'prototype' ? '#00F0FF' : '#94A3B8'
            }}
          >
            Interactive Prototype Simulator
          </button>
        </div>

        {/* Tab 1: Overview */}
        {interactiveTab === 'overview' && (
          <div>
            {/* Impact Metrics Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {caseStudy.impactMetrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(15, 23, 42, 0.7)',
                    padding: '20px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: caseStudy.accentColor }}>{m.value}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', marginTop: '4px' }}>{m.label}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '4px' }}>{m.detail}</div>
                </div>
              ))}
            </div>

            {/* Challenge vs Solution Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
              <div style={{ background: 'rgba(239, 68, 68, 0.06)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <h4 style={{ color: '#EF4444', fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>
                  Operational Challenge
                </h4>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {caseStudy.challenge}
                </p>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.06)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <h4 style={{ color: '#10B981', fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>
                  Luminex Engineering Solution
                </h4>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px' }}>
                Key Functional Capabilities
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '10px' }}>
                {caseStudy.keyFeatures.map((feat, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#CBD5E1', fontSize: '0.9rem' }}>
                    <CheckCircle2 style={{ width: '16px', height: '16px', color: '#00F0FF', flexShrink: 0 }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Stats Banner */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '12px',
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '12px',
                marginBottom: '32px'
              }}
            >
              <div>
                <span style={{ fontSize: '0.725rem', color: '#64748B' }}>Duration</span>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>{caseStudy.stats.duration}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.725rem', color: '#64748B' }}>Engineering Pod</span>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>{caseStudy.stats.teamSize}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.725rem', color: '#64748B' }}>Volume Served</span>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF' }}>{caseStudy.stats.usersServed}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.725rem', color: '#64748B' }}>Measured Outcome</span>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: caseStudy.accentColor }}>{caseStudy.stats.roi}</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Architecture */}
        {interactiveTab === 'architecture' && (
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '16px' }}>
              Microservices & System Blueprint
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {caseStudy.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '16px 20px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    borderRadius: '12px',
                    borderLeft: `4px solid ${caseStudy.accentColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    color: '#F8FAFC',
                    fontSize: '0.95rem'
                  }}
                >
                  <Server style={{ width: '20px', height: '20px', color: caseStudy.accentColor }} />
                  <span>{arch}</span>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
              Technology Stack Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {caseStudy.technologies.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: '8px 16px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--radius-full)',
                    color: '#00F0FF',
                    fontSize: '0.85rem',
                    fontWeight: 600
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Interactive Prototype Simulator */}
        {interactiveTab === 'prototype' && (
          <div style={{ marginBottom: '32px' }}>
            <div style={{ background: '#05070F', padding: '24px', borderRadius: '16px', border: '1px solid rgba(0, 240, 255, 0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.85rem', color: '#00F0FF', fontFamily: 'monospace' }}>
                  PROTOTYPE SIMULATOR: {caseStudy.title} [STEP {prototypeSimStep} OF 3]
                </span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {[1, 2, 3].map((step) => (
                    <button
                      key={step}
                      onClick={() => setPrototypeSimStep(step)}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        background: prototypeSimStep === step ? '#00F0FF' : 'rgba(255,255,255,0.1)',
                        color: prototypeSimStep === step ? '#000000' : '#FFFFFF',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 700
                      }}
                    >
                      Step {step}
                    </button>
                  ))}
                </div>
              </div>

              {prototypeSimStep === 1 && (
                <div style={{ background: 'rgba(15,23,42,0.9)', padding: '20px', borderRadius: '12px', color: '#CBD5E1' }}>
                  <h5 style={{ color: '#FFFFFF', fontSize: '1rem', marginBottom: '8px' }}>Phase 1: User Authentication & Role Access</h5>
                  <p style={{ fontSize: '0.875rem' }}>Biometric facial scan / SSO verified. Session token signed with RSA-4096 private key. Granular permissions initialized.</p>
                </div>
              )}

              {prototypeSimStep === 2 && (
                <div style={{ background: 'rgba(15,23,42,0.9)', padding: '20px', borderRadius: '12px', color: '#CBD5E1' }}>
                  <h5 style={{ color: '#00F0FF', fontSize: '1rem', marginBottom: '8px' }}>Phase 2: Real-Time Event Data Stream Ingestion</h5>
                  <p style={{ fontSize: '0.875rem' }}>Processing 240 telemetry feeds/sec across distributed Kafka message queue into encrypted PostgreSQL cluster.</p>
                </div>
              )}

              {prototypeSimStep === 3 && (
                <div style={{ background: 'rgba(15,23,42,0.9)', padding: '20px', borderRadius: '12px', color: '#CBD5E1' }}>
                  <h5 style={{ color: '#10B981', fontSize: '1rem', marginBottom: '8px' }}>Phase 3: Automated Decision & Impact Report</h5>
                  <p style={{ fontSize: '0.875rem' }}>Operational result generated. Audit logs sealed cryptographically and synced with administrative dashboard.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div style={{ display: 'flex', gap: '14px', marginTop: '24px' }}>
          <button
            onClick={() => {
              onClose();
              onOpenInquiry();
            }}
            className="btn-cyan"
            style={{ flex: 1 }}
          >
            Build Similar Platform for Your Organization
          </button>
        </div>

      </div>
    </div>
  );
};
