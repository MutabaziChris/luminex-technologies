import React, { useState } from 'react';
import { Layout, BrainCircuit, Smartphone, Cloud, ShieldCheck, Zap, Code2, Globe, Compass, RefreshCw, Database, Palette, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { SERVICES } from '../data/content';
import type { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenInquiry: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Core' | 'Specialized' | 'Strategic'>('All');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout style={{ width: '28px', height: '28px', color: 'var(--electric-cyan)' }} />;
      case 'BrainCircuit': return <BrainCircuit style={{ width: '28px', height: '28px', color: '#8B5CF6' }} />;
      case 'Smartphone': return <Smartphone style={{ width: '28px', height: '28px', color: '#10B981' }} />;
      case 'Cloud': return <Cloud style={{ width: '28px', height: '28px', color: '#3B82F6' }} />;
      case 'ShieldCheck': return <ShieldCheck style={{ width: '28px', height: '28px', color: '#EF4444' }} />;
      case 'Zap': return <Zap style={{ width: '28px', height: '28px', color: '#F59E0B' }} />;
      case 'Code2': return <Code2 style={{ width: '28px', height: '28px', color: '#06B6D4' }} />;
      case 'Globe': return <Globe style={{ width: '28px', height: '28px', color: '#6366F1' }} />;
      case 'Compass': return <Compass style={{ width: '28px', height: '28px', color: '#EC4899' }} />;
      case 'RefreshCw': return <RefreshCw style={{ width: '28px', height: '28px', color: '#14B8A6' }} />;
      case 'Database': return <Database style={{ width: '28px', height: '28px', color: '#3B82F6' }} />;
      case 'Palette': return <Palette style={{ width: '28px', height: '28px', color: '#F43F5E' }} />;
      default: return <Layout style={{ width: '28px', height: '28px', color: 'var(--electric-cyan)' }} />;
    }
  };

  const filteredServices = selectedCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="section-padding" style={{ position: 'relative', background: 'var(--bg-primary)' }}>
      <div className="max-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            SPECIALIZED ENGINEERING CAPABILITIES
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Services Built for <span className="gradient-text-blue">Scale, Security & Speed</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            From clinic appointment portals and personal portfolio websites to AI RAG systems and enterprise ERPs, Luminex delivers end-to-end technical excellence.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '45px' }}>
          {['All', 'Core', 'Specialized', 'Strategic'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              style={{
                padding: '8px 20px',
                borderRadius: 'var(--radius-full)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                background: selectedCategory === cat ? 'linear-gradient(135deg, #1E50FF 0%, #00F0FF 100%)' : 'var(--bg-card)',
                color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-muted)',
                border: selectedCategory === cat ? 'none' : '1px solid var(--border-subtle)',
                boxShadow: selectedCategory === cat ? 'var(--glow-blue)' : 'var(--shadow-card)'
              }}
            >
              {cat === 'All' ? 'All Capabilities' : `${cat} Services`}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-panel glass-card-glow"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
              onClick={() => setActiveModalService(service)}
            >
              <div>
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: 'rgba(30, 80, 255, 0.08)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}
                >
                  {getIcon(service.iconName)}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '10px', color: 'var(--text-main)' }}>
                  {service.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px' }}>
                  {service.shortDesc}
                </p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {service.recommendedTech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '4px 8px',
                        background: 'rgba(15, 23, 42, 0.04)',
                        borderRadius: '6px',
                        fontSize: '0.725rem',
                        fontWeight: 600,
                        color: 'var(--text-subtle)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--primary-gold)',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}
              >
                <span>View Architecture & Deliverables</span>
                <ArrowRight style={{ width: '15px', height: '15px' }} />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(5, 7, 15, 0.75)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveModalService(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '700px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px',
              position: 'relative',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-gold)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalService(null)}
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
              <X style={{ width: '20px', height: '20px' }} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(30, 80, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {getIcon(activeModalService.iconName)}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>{activeModalService.title}</h3>
                <span style={{ fontSize: '0.8rem', color: 'var(--primary-gold)', fontWeight: 700 }}>Target: {activeModalService.targetAudience}</span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '24px' }}>
              {activeModalService.fullDesc}
            </p>

            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
              Key Deliverables
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {activeModalService.keyDeliverables.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <CheckCircle2 style={{ width: '17px', height: '17px', color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>
              Recommended Engineering Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {activeModalService.recommendedTech.map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '6px 12px',
                    background: 'rgba(30, 80, 255, 0.1)',
                    border: '1px solid rgba(30, 80, 255, 0.25)',
                    borderRadius: 'var(--radius-full)',
                    color: '#1E50FF',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  setActiveModalService(null);
                  onOpenInquiry();
                }}
                className="btn-gold"
                style={{ flex: 1 }}
              >
                Request Proposal for {activeModalService.title}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
