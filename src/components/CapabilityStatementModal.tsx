import React from 'react';
import { X, FileText, CheckCircle2, Phone, Mail, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface CapabilityStatementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CapabilityStatementModal: React.FC<CapabilityStatementModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
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
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '40px',
          position: 'relative',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-gold)'
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

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '16px' }}>
          <div style={{ padding: '12px', background: 'rgba(217, 119, 6, 0.1)', borderRadius: '12px' }}>
            <FileText style={{ width: '28px', height: '28px', color: 'var(--primary-gold)' }} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)' }}>Official Capability Statement</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>{COMPANY_INFO.name} — Studio Profile Deck</span>
          </div>
        </div>

        {/* Executive Summary */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>1. Company Overview</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 600 }}>
            {COMPANY_INFO.description}
          </p>
        </div>

        {/* Core Competencies */}
        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>2. Core Competencies & Services</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
            {[
              'Small Business & Clinic Websites (500k RWF)',
              'Personal Brand Portfolios (250k RWF)',
              'Enterprise Web Apps & ERPs (3M+ RWF)',
              'Generative AI & RAG Knowledge Hubs',
              'Cross-Platform iOS & Android Mobile Apps',
              '24/7 SLA System Maintenance & Security'
            ].map((comp, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600 }}>
                <CheckCircle2 style={{ width: '16px', height: '16px', color: '#10B981', flexShrink: 0 }} />
                <span>{comp}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Contact Card */}
        <div
          style={{
            padding: '20px',
            background: 'var(--bg-primary)',
            borderRadius: '14px',
            border: '1px solid var(--border-subtle)',
            marginBottom: '28px'
          }}
        >
          <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>3. Studio Credentials</h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail style={{ width: '16px', height: '16px', color: 'var(--primary-gold)' }} />
              <span>{COMPANY_INFO.email}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone style={{ width: '16px', height: '16px', color: 'var(--primary-blue)' }} />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe style={{ width: '16px', height: '16px', color: '#10B981' }} />
              <span>Kigali, Rwanda (Remote-First)</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => window.print()}
          className="btn-gold"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          Print / Save Capability Statement PDF
        </button>

      </div>
    </div>
  );
};
