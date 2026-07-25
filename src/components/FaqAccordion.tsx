import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-0');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const categories = ['All', 'General', 'Security & IP', 'Process & Timeline', 'Pricing & SLAs'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="section-padding" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="max-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            EXECUTIVE QUESTIONS & TRANSPARENCY
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Frequently Asked <span className="gradient-text-blue">Questions</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Everything you need to know about our engineering process, IP transfer, pricing in RWF, and SLAs.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div style={{ maxWidth: '800px', margin: '0 auto 40px auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Search Box */}
          <div style={{ position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', width: '18px', height: '18px', color: 'var(--primary-gold)' }} />
            <input
              type="text"
              placeholder="Search questions (e.g., IP ownership, dental clinic, timeline, RWF payments)..."
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
                outline: 'none',
                boxShadow: 'var(--shadow-card)'
              }}
            />
          </div>

          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '6px 16px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  background: selectedCategory === cat ? 'linear-gradient(135deg, #1E50FF 0%, #00F0FF 100%)' : 'var(--bg-card)',
                  color: selectedCategory === cat ? '#FFFFFF' : 'var(--text-muted)',
                  border: selectedCategory === cat ? 'none' : '1px solid var(--border-subtle)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-panel"
                style={{
                  borderRadius: '16px',
                  background: 'var(--bg-card)',
                  border: isOpen ? '1px solid var(--border-gold)' : '1px solid var(--border-subtle)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: 'var(--text-main)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <HelpCircle style={{ width: '20px', height: '20px', color: 'var(--primary-gold)', flexShrink: 0 }} />
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.4 }}>{faq.question}</span>
                  </div>

                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(217, 119, 6, 0.15)' : 'rgba(0, 0, 0, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease'
                    }}
                  >
                    <ChevronDown style={{ width: '16px', height: '16px', color: isOpen ? 'var(--primary-gold)' : 'var(--text-muted)' }} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 24px 22px 56px', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
