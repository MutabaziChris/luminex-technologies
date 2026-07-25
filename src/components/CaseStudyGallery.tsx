import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, X, Search, Sparkles } from 'lucide-react';
import { CASE_STUDIES } from '../data/content';
import type { CaseStudy } from '../types';

interface CaseStudyGalleryProps {
  onOpenInquiry: () => void;
}

export const CaseStudyGallery: React.FC<CaseStudyGalleryProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Healthcare', 'GovTech', 'FinTech', 'AI & Cloud', 'Enterprise'];

  const filteredStudies = CASE_STUDIES.filter((study) => {
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    const matchesSearch =
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="section-padding section-highlight-blue">
      <div className="max-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 40px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            <Sparkles style={{ width: '13px', height: '13px', color: 'var(--primary-gold)' }} />
            <span>FEATURED CONCEPT PROJECTS & CASE STUDIES</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>
            Demonstrating <span className="gradient-text-blue">Architectural Superiority</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 600 }}>
            Explore realistic concept projects engineering enterprise solutions for hospitals, sovereign ministries, central banks, universities, and logistics networks.
          </p>
        </div>

        {/* Search Bar & Category Filter Bar */}
        <div style={{ maxWidth: '800px', margin: '0 auto 45px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Search Box */}
          <div style={{ position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', width: '18px', height: '18px', color: 'var(--primary-gold)' }} />
            <input
              type="text"
              placeholder="Search case studies by industry, stack, or outcome..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 48px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--text-main)',
                fontSize: '0.9rem',
                fontWeight: 600,
                outline: 'none',
                boxShadow: 'var(--shadow-card)'
              }}
            />
          </div>

          {/* Filter Categories */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 800,
                  fontSize: '0.825rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: selectedCategory === cat ? 'linear-gradient(135deg, #1E50FF 0%, #00F0FF 100%)' : 'var(--bg-card)',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-muted)',
                  border: selectedCategory === cat ? 'none' : '1px solid var(--border-subtle)',
                  boxShadow: selectedCategory === cat ? 'var(--glow-blue)' : 'var(--shadow-card)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Case Studies Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: '28px' }}>
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="glass-panel glass-card-glow"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                background: 'var(--bg-card)',
                borderTop: '4px solid var(--primary-gold)',
                boxShadow: 'var(--shadow-card)'
              }}
              onClick={() => setActiveModalStudy(study)}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span
                    style={{
                      padding: '4px 12px',
                      background: 'rgba(30, 80, 255, 0.12)',
                      borderRadius: 'var(--radius-full)',
                      color: 'var(--primary-blue)',
                      fontSize: '0.75rem',
                      fontWeight: 800
                    }}
                  >
                    {study.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 700 }}>{study.stats.duration}</span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px', lineHeight: 1.35 }}>
                  {study.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px', fontWeight: 600 }}>
                  {study.summary}
                </p>

                {/* Primary Metric Highlight */}
                <div
                  style={{
                    padding: '14px 16px',
                    background: 'var(--bg-secondary)',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 800 }}>
                      {study.impactMetrics[0].label}
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 900, color: '#10B981', fontFamily: 'var(--font-heading)' }}>
                      {study.impactMetrics[0].value}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.725rem', color: 'var(--text-muted)', textAlign: 'right', maxWidth: '140px', fontWeight: 600 }}>
                    {study.impactMetrics[0].detail}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--primary-gold)',
                  fontWeight: 800,
                  fontSize: '0.875rem'
                }}
              >
                <span>Inspect Case Study</span>
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {activeModalStudy && (
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
          onClick={() => setActiveModalStudy(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '850px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px',
              position: 'relative',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-gold)',
              boxShadow: 'var(--shadow-hover)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalStudy(null)}
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

            <span style={{ color: 'var(--primary-gold)', fontWeight: 800, fontSize: '0.85rem' }}>
              {activeModalStudy.category} • {activeModalStudy.clientType}
            </span>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', margin: '8px 0 12px 0' }}>
              {activeModalStudy.title}
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px', fontWeight: 600 }}>
              {activeModalStudy.tagline}
            </p>

            {/* Impact Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '28px' }}>
              {activeModalStudy.impactMetrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '16px',
                    background: 'var(--bg-secondary)',
                    borderRadius: '14px',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', fontWeight: 800, textTransform: 'uppercase' }}>{m.label}</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#10B981', fontFamily: 'var(--font-heading)', margin: '4px 0' }}>{m.value}</div>
                  <div style={{ fontSize: '0.775rem', color: 'var(--text-muted)', fontWeight: 600 }}>{m.detail}</div>
                </div>
              ))}
            </div>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>The Challenge</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px', fontWeight: 600 }}>{activeModalStudy.challenge}</p>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '10px' }}>Engineering Solution</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px', fontWeight: 600 }}>{activeModalStudy.solution}</p>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>Key Architecture Features</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
              {activeModalStudy.keyFeatures.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
                  <CheckCircle2 style={{ width: '16px', height: '16px', color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setActiveModalStudy(null);
                onOpenInquiry();
              }}
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Request Similar Project Solution
            </button>

          </div>
        </div>
      )}
    </section>
  );
};
