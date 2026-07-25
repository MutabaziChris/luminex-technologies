import React, { useState } from 'react';
import { X } from 'lucide-react';
import { BLOG_POSTS } from '../data/content';
import type { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="section-padding" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="max-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            ENGINEERING INSIGHTS & THOUGHT LEADERSHIP
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Luminex Tech <span className="gradient-text-blue">Magazine</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Deep dives into clinic booking conversion, enterprise architecture, sovereign cloud, and software security.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="glass-panel glass-card-glow"
              style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', background: 'var(--bg-card)' }}
              onClick={() => setSelectedPost(post)}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
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
                    {post.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{post.readTime}</span>
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px', lineHeight: 1.3 }}>
                  {post.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-main)' }}>{post.author.name}</div>
                    <div style={{ fontSize: '0.725rem', color: 'var(--text-subtle)' }}>{post.author.role} • {post.date}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Post Modal */}
      {selectedPost && (
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
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="glass-panel"
            style={{
              maxWidth: '800px',
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
              onClick={() => setSelectedPost(null)}
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

            <span style={{ color: 'var(--primary-gold)', fontWeight: 800, fontSize: '0.85rem' }}>{selectedPost.category}</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', margin: '8px 0 16px 0' }}>{selectedPost.title}</h2>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-subtle)', marginBottom: '24px' }}>
              By {selectedPost.author.name} ({selectedPost.author.role}) • Published {selectedPost.date}
            </div>

            <div style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '16px' }}>{selectedPost.excerpt}</p>
              <p>{selectedPost.content}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
