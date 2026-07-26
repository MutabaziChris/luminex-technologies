import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Building2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="max-container">
        
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            VERIFIED INDUSTRY CASE OUTCOMES
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Measurable Client <span className="gradient-text-blue">Impact</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Verified operational results and feedback from executives and business leaders.
          </p>
        </div>

        <div
          className="glass-panel"
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '40px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-gold)',
            position: 'relative',
            borderRadius: '24px'
          }}
        >
          <Quote style={{ width: '42px', height: '42px', color: 'var(--primary-gold)', opacity: 0.4, marginBottom: '20px' }} />

          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--text-main)', lineHeight: 1.6, marginBottom: '28px', fontStyle: 'italic', fontWeight: 500 }}>
            "{current.content}"
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            
            {/* Executive Role & Organization */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(217, 119, 6, 0.12)',
                  border: '1.5px solid var(--primary-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Building2 style={{ width: '24px', height: '24px', color: 'var(--primary-gold)' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)' }}>
                  {current.role}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--primary-gold)', fontWeight: 700 }}>
                  {current.organization}
                </div>
                <div style={{ fontSize: '0.775rem', color: 'var(--text-subtle)', fontWeight: 600 }}>
                  Industry Vertical: {current.industry}
                </div>
              </div>
            </div>

            {/* Metric Callout & Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#10B981', fontFamily: 'var(--font-heading)' }}>
                  {current.metric}
                </div>
                <div style={{ fontSize: '0.725rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 700 }}>
                  {current.metricLabel}
                </div>
              </div>

              {/* Slider Arrows */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={prevTestimonial}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft style={{ width: '18px', height: '18px' }} />
                </button>

                <button
                  onClick={nextTestimonial}
                  className="btn-gold"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label="Next Testimonial"
                >
                  <ChevronRight style={{ width: '18px', height: '18px' }} />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
