import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { sendInquiryNotification } from '../utils/notifications';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Small Business / Clinic Website (500,000 RWF)',
    budgetRWF: '500,000 RWF',
    timeline: '1 - 2 Weeks',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Dispatch to Email (luminex.tech.rw@gmail.com) and Phone WhatsApp (+250 781 367 769)
    await sendInquiryNotification({
      formType: 'Project Proposal Request',
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      budget: formData.budgetRWF,
      timeline: formData.timeline,
      message: formData.message
    });

    setLoading(false);
    setSubmitted(true);
    try {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    } catch (err) {}
  };

  return (
    <section id="contact" className="section-padding section-highlight-blue">
      <div className="max-container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
          <div className="badge-pill" style={{ marginBottom: '16px' }}>
            START YOUR PROJECT & GET A PROPOSAL
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 800, marginBottom: '16px', color: 'var(--text-main)' }}>
            Let's Build Something <span className="gradient-text-gold">Extraordinary</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 600 }}>
            Ready to upgrade your business or clinic website? Contact our principal engineering team directly. We respond in under 2 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'start' }}>
          
          {/* Contact Details Column */}
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '20px' }}>
              Direct Executive Contact
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '32px', fontWeight: 600 }}>
              Whether you need a 250,000 RWF personal brand website, a 500,000 RWF dental clinic booking portal, or a custom enterprise web application, we are ready to assist.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              
              <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--bg-card)', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ padding: '12px', background: 'rgba(217, 119, 6, 0.12)', borderRadius: '12px', flexShrink: 0 }}>
                  <Mail style={{ width: '22px', height: '22px', color: 'var(--primary-gold)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 800 }}>Official Inquiry Email</div>
                  <a href={`mailto:${COMPANY_INFO.email}`} style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', textDecoration: 'none' }}>
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--bg-card)', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ padding: '12px', background: 'rgba(30, 80, 255, 0.12)', borderRadius: '12px', flexShrink: 0 }}>
                  <Phone style={{ width: '22px', height: '22px', color: 'var(--primary-blue)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 800 }}>Direct Executive Line</div>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-main)', textDecoration: 'none' }}>
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', background: 'var(--bg-card)', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ padding: '12px', background: 'rgba(16, 185, 129, 0.12)', borderRadius: '12px', flexShrink: 0 }}>
                  <MapPin style={{ width: '22px', height: '22px', color: '#10B981' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-subtle)', textTransform: 'uppercase', fontWeight: 800 }}>Studio Location</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-main)' }}>
                    {COMPANY_INFO.address}
                  </div>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Luminex%20Technologies,%20I%20would%20like%20to%20discuss%20a%20website%20project.`}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
              style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '0.95rem' }}
            >
              <MessageSquare style={{ width: '18px', height: '18px' }} />
              <span>Chat Instantly on WhatsApp</span>
            </a>
          </div>

          {/* Proposal Form Column */}
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              background: 'var(--bg-card)',
              border: '2px solid var(--primary-gold)',
              boxShadow: 'var(--shadow-highlight)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <CheckCircle2 style={{ width: '64px', height: '64px', color: '#10B981', margin: '0 auto 16px auto' }} />
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                  Proposal Request Dispatched!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '24px', lineHeight: 1.6 }}>
                  Thank you, <strong>{formData.name}</strong>. Your inquiry has been dispatched to <strong>luminex.tech.rw@gmail.com</strong> and our mobile phone (+250 781 367 769). We will respond within 2 hours!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '4px' }}>
                  Request Custom Scoping Proposal
                </h3>
                <p style={{ color: 'var(--text-subtle)', fontSize: '0.85rem', marginBottom: '10px', fontWeight: 600 }}>
                  Fill out your project specifications to receive a fixed quote and delivery timeline.
                </p>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-main)', display: 'block', marginBottom: '6px' }}>Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontWeight: 600
                    }}
                  >
                    <option value="Personal Brand / Portfolio (250,000 RWF)">Personal Brand / Portfolio (250,000 RWF)</option>
                    <option value="Small Business / Clinic Website (500,000 RWF)">Small Business / Clinic Website (500,000 RWF)</option>
                    <option value="Corporate Portal (1,500,000 RWF)">Corporate Portal (1,500,000 RWF)</option>
                    <option value="Business Web Application (3,000,000 RWF+)">Business Web Application (3,000,000 RWF+)</option>
                    <option value="Custom Sovereign Enterprise System">Custom Sovereign Enterprise System</option>
                  </select>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      padding: '12px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontWeight: 600
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      padding: '12px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontWeight: 600
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      padding: '12px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontWeight: 600
                    }}
                  />
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    style={{
                      padding: '12px',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '10px',
                      color: 'var(--text-main)',
                      outline: 'none',
                      fontWeight: 600
                    }}
                  >
                    <option value="Urgent (Under 1 Week)">Urgent (Under 1 Week)</option>
                    <option value="1 - 2 Weeks">1 - 2 Weeks</option>
                    <option value="3 - 5 Weeks">3 - 5 Weeks</option>
                    <option value="Flexible">Flexible Timeline</option>
                  </select>
                </div>

                <textarea
                  rows={4}
                  placeholder="Describe your project goals, features required, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    color: 'var(--text-main)',
                    outline: 'none',
                    resize: 'vertical',
                    fontWeight: 600
                  }}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}
                >
                  <span>{loading ? 'Sending to Email & Phone...' : 'Submit Project Proposal Request'}</span>
                  <Send style={{ width: '16px', height: '16px' }} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
