import React, { useState } from 'react';
import { X, Calendar, CheckCircle2 } from 'lucide-react';
import { sendInquiryNotification } from '../utils/notifications';
import confetti from 'canvas-confetti';

interface MeetingSchedulerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeetingSchedulerModal: React.FC<MeetingSchedulerModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'schedule' | 'submitted'>('schedule');
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState('2026-07-28');
  const [selectedTime, setSelectedTime] = useState('10:00 AM (CAT)');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    topic: 'Small Business / Clinic Website Scoping (500k RWF)'
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Send dual dispatch to Email & Phone WhatsApp
    await sendInquiryNotification({
      formType: 'Executive Consultation Booking',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      projectType: formData.topic,
      date: selectedDate,
      time: selectedTime,
      message: `Requested consultation for topic: ${formData.topic}`
    });

    setLoading(false);
    setStep('submitted');
    try {
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    } catch (err) {}
  };

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
          maxWidth: '680px',
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

        {step === 'schedule' ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ padding: '10px', background: 'rgba(217, 119, 6, 0.12)', borderRadius: '12px' }}>
                <Calendar style={{ width: '24px', height: '24px', color: 'var(--primary-gold)' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)' }}>Schedule Executive Scoping Call</h3>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>30-Minute Discovery Session with Principal Architects</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: 800, display: 'block', marginBottom: '6px' }}>Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontWeight: 600
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: 800, display: 'block', marginBottom: '6px' }}>Select Time Slot (CAT)</label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'var(--bg-primary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontWeight: 600
                    }}
                  >
                    <option value="09:00 AM (CAT)">09:00 AM CAT</option>
                    <option value="10:30 AM (CAT)">10:30 AM CAT</option>
                    <option value="02:00 PM (CAT)">02:00 PM CAT</option>
                    <option value="04:00 PM (CAT)">04:00 PM CAT</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-main)', fontWeight: 800, display: 'block', marginBottom: '6px' }}>Discussion Topic</label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    color: 'var(--text-main)',
                    outline: 'none',
                    fontWeight: 600
                  }}
                >
                  <option value="Small Business / Clinic Website Scoping (500k RWF)">Small Business / Clinic Website Scoping (500k RWF)</option>
                  <option value="Personal Brand & Portfolio Site (250k RWF)">Personal Brand & Portfolio Site (250k RWF)</option>
                  <option value="Corporate Portal (1.5M RWF)">Corporate Portal (1.5M RWF)</option>
                  <option value="Custom Business Web Application">Custom Business Web Application</option>
                  <option value="Generative AI & RAG Integration">Generative AI & RAG Integration</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    padding: '12px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    color: 'var(--text-main)',
                    outline: 'none',
                    fontWeight: 600
                  }}
                />
                <input
                  type="email"
                  placeholder="Work Email *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    padding: '12px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    color: 'var(--text-main)',
                    outline: 'none',
                    fontWeight: 600
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                <input
                  type="text"
                  placeholder="Organization / Business Name *"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  style={{
                    padding: '12px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    color: 'var(--text-main)',
                    outline: 'none',
                    fontWeight: 600
                  }}
                />
                <input
                  type="tel"
                  placeholder="Phone Number (WhatsApp) *"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={{
                    padding: '12px',
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    color: 'var(--text-main)',
                    outline: 'none',
                    fontWeight: 600
                  }}
                />
              </div>

              <button type="submit" disabled={loading} className="btn-gold" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                {loading ? 'Sending Email & Phone Alert...' : 'Confirm Consultation Booking'}
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle2 style={{ width: '64px', height: '64px', color: '#10B981', margin: '0 auto 16px auto' }} />
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              Discovery Call Confirmed!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '24px' }}>
              Thank you, {formData.name}. We have dispatched a confirmation to your email (<strong>{formData.email}</strong>) and your booking alert to <strong>luminex.tech.rw@gmail.com</strong> and WhatsApp (+250 781 367 769).
            </p>
            <button onClick={onClose} className="btn-primary">
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
