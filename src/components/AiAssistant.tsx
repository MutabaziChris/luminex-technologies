import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';

interface AiAssistantProps {
  onOpenScheduler: () => void;
  onOpenInquiry: () => void;
}

export const AiAssistant: React.FC<AiAssistantProps> = ({ onOpenScheduler, onOpenInquiry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: `Hello! I am Luminex AI Advisor. Ask me anything about our small business & clinic websites (500k RWF), personal brand portfolios (250k RWF), AI solutions, or enterprise web apps!`,
      time: 'Just now'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage.trim();
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [...prev, { sender: 'user', text: userText, time: now }]);
    setInputMessage('');

    // Generate intelligent responses
    setTimeout(() => {
      let aiText = `Thank you for your inquiry regarding Luminex Technologies. Our team specializes in small business & dental clinic websites, personal brand portfolios, enterprise web apps, AI solutions, and mobile applications.`;

      const lower = userText.toLowerCase();

      if (lower.includes('price') || lower.includes('cost') || lower.includes('rwf') || lower.includes('budget')) {
        aiText = `Luminex offers transparent pricing: Personal Brand Portfolios starting at 250,000 RWF, Dental Clinic & Small Business Websites starting at 500,000 RWF (with 24/7 appointment booking & WhatsApp sync), Corporate Portals at 1,500,000 RWF, and Business Web Apps at 3,000,000 RWF.`;
      } else if (lower.includes('clinic') || lower.includes('dental') || lower.includes('booking') || lower.includes('doctor')) {
        aiText = `Our Dental & Small Business package (500,000 RWF) includes 24/7 calendar appointment booking, direct WhatsApp consultation triggers, treatment price lists, doctor profiles, and local Google Maps SEO.`;
      } else if (lower.includes('tech') || lower.includes('stack') || lower.includes('react') || lower.includes('java')) {
        aiText = `We specialize in React, Next.js, TypeScript, and Vite on the frontend, with Node.js, Spring Boot, Python, and Supabase / PostgreSQL on the backend.`;
      } else if (lower.includes('contact') || lower.includes('call') || lower.includes('schedule') || lower.includes('meet')) {
        aiText = `You can schedule a direct 30-minute scoping call with our team or chat with us instantly on WhatsApp at +250 781 367 769!`;
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: aiText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 800);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 180,
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 25px rgba(217, 119, 6, 0.4)',
          cursor: 'pointer',
          transition: 'transform 0.25s ease'
        }}
        title="Chat with Luminex AI Advisor"
      >
        {isOpen ? <X style={{ width: '24px', height: '24px' }} /> : <Bot style={{ width: '26px', height: '26px' }} />}
      </button>

      {/* Floating Chat Window */}
      {isOpen && (
        <div
          className="glass-panel"
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '24px',
            zIndex: 180,
            width: 'min(380px, calc(100vw - 32px))',
            height: '520px',
            display: 'flex',
            flexDirection: 'column',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-gold)',
            boxShadow: 'var(--shadow-hover)',
            borderRadius: '20px',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: 'rgba(15, 23, 42, 0.04)',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ padding: '6px', background: 'rgba(217, 119, 6, 0.12)', borderRadius: '10px' }}>
                <Bot style={{ width: '20px', height: '20px', color: 'var(--primary-gold)' }} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-main)' }}>Luminex AI Advisor</div>
                <div style={{ fontSize: '0.7rem', color: '#10B981', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
                  Online • Studio Assistant
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X style={{ width: '20px', height: '20px' }} />
            </button>
          </div>

          {/* Messages Body */}
          <div style={{ flex: 1, padding: '16px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '12px 16px',
                  borderRadius: m.sender === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                  background: m.sender === 'user' ? 'linear-gradient(135deg, #1E50FF 0%, #1E40AF 100%)' : 'rgba(15, 23, 42, 0.05)',
                  color: m.sender === 'user' ? '#FFFFFF' : 'var(--text-main)',
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                  border: m.sender === 'ai' ? '1px solid var(--border-subtle)' : 'none'
                }}
              >
                {m.text}
                <div style={{ fontSize: '0.65rem', color: m.sender === 'user' ? '#E2E8F0' : 'var(--text-subtle)', textAlign: 'right', marginTop: '4px' }}>
                  {m.time}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Action Quick Prompts */}
          <div style={{ padding: '8px 12px', display: 'flex', gap: '6px', overflowX: 'auto', borderTop: '1px solid var(--border-subtle)' }}>
            <button
              onClick={() => { setIsOpen(false); onOpenScheduler(); }}
              style={{
                fontSize: '0.725rem',
                color: 'var(--primary-gold)',
                background: 'rgba(217, 119, 6, 0.1)',
                border: '1px solid rgba(217, 119, 6, 0.25)',
                borderRadius: 'var(--radius-full)',
                padding: '4px 10px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontWeight: 700
              }}
            >
              📅 Schedule Call
            </button>
            <button
              onClick={() => { setIsOpen(false); onOpenInquiry(); }}
              style={{
                fontSize: '0.725rem',
                color: '#1E50FF',
                background: 'rgba(30, 80, 255, 0.1)',
                border: '1px solid rgba(30, 80, 255, 0.25)',
                borderRadius: 'var(--radius-full)',
                padding: '4px 10px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                fontWeight: 700
              }}
            >
              💼 Submit Proposal
            </button>
          </div>

          {/* Form Input */}
          <form onSubmit={handleSend} style={{ padding: '12px', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: '8px' }}>
            <input
              type="text"
              placeholder="Ask about clinic sites, RWF pricing..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              style={{
                flex: 1,
                padding: '10px 14px',
                background: 'var(--bg-primary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-full)',
                color: 'var(--text-main)',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                border: 'none',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Send style={{ width: '16px', height: '16px' }} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
