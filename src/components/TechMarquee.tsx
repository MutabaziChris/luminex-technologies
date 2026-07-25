import React from 'react';

const TECH_LOGOS = [
  { name: 'React', label: 'REACT 19' },
  { name: 'Next.js', label: 'NEXT.JS' },
  { name: 'TypeScript', label: 'TYPESCRIPT' },
  { name: 'Java', label: 'JAVA SPRING' },
  { name: 'Python', label: 'PYTHON AI' },
  { name: 'Flutter', label: 'FLUTTER' },
  { name: 'Node.js', label: 'NODE.JS' },
  { name: 'PostgreSQL', label: 'POSTGRES' },
  { name: 'Supabase', label: 'SUPABASE' },
  { name: 'Docker', label: 'DOCKER' },
  { name: 'Kubernetes', label: 'KUBERNETES' },
  { name: 'OpenAI', label: 'OPENAI RAG' }
];

export const TechMarquee: React.FC = () => {
  return (
    <div
      style={{
        padding: '24px 0',
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '14px', fontSize: '0.725rem', color: 'var(--text-subtle)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800 }}>
        POWERED BY WORLD-CLASS OPEN-SOURCE & ENTERPRISE ARCHITECTURE
      </div>

      <div className="animate-marquee" style={{ gap: '40px' }}>
        {[...TECH_LOGOS, ...TECH_LOGOS, ...TECH_LOGOS].map((tech, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.05em',
              whiteSpace: 'nowrap'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-gold)' }} />
            <span>{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
