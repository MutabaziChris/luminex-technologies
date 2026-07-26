import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TechMarquee } from './components/TechMarquee';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesGrid } from './components/IndustriesGrid';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { SecurityComplianceSection } from './components/SecurityComplianceSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { CaseStudyGallery } from './components/CaseStudyGallery';
import { TechMatrix } from './components/TechMatrix';
import { LeadershipSection } from './components/LeadershipSection';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { BlogSection } from './components/BlogSection';
import { FaqAccordion } from './components/FaqAccordion';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SeoHead } from './components/SeoHead';
import { MobileQuickDock } from './components/MobileQuickDock';

import { RoiCalculatorModal } from './components/RoiCalculatorModal';
import { AiAssistant } from './components/AiAssistant';
import { MeetingSchedulerModal } from './components/MeetingSchedulerModal';
import { CapabilityStatementModal } from './components/CapabilityStatementModal';

import type { Currency } from './types';
import { COMPANY_INFO } from './data/content';
import { PhoneCall } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [currency, setCurrency] = useState<Currency>('RWF');
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // Initial default Light mode

  // Modals state
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isCapabilityOpen, setIsCapabilityOpen] = useState(false);

  // Apply data-theme attribute on document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'RWF' ? 'USD' : 'RWF'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenInquiry = () => {
    setCurrentView('contact');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)', paddingTop: '84px' }}>
      
      {/* Dynamic SEO Meta & JSON-LD Schema */}
      <SeoHead
        title={`${COMPANY_INFO.name} | ${COMPANY_INFO.tagline}`}
        description={COMPANY_INFO.description}
      />

      {/* Fixed Sticky Header Navigator */}
      <Navbar
        currentView={currentView}
        onNavigate={setCurrentView}
        currency={currency}
        onToggleCurrency={toggleCurrency}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenScheduler={() => setIsSchedulerOpen(true)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onOpenCapability={() => setIsCapabilityOpen(true)}
      />

      {/* Main Content Views */}
      <main style={{ flex: 1, paddingBottom: '60px' }}>
        {currentView === 'home' && (
          <>
            <HeroSection
              onStartProject={handleOpenInquiry}
              onScheduleCall={() => setIsSchedulerOpen(true)}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />
            <TechMarquee />
            <ServicesSection onOpenInquiry={handleOpenInquiry} />
            <IndustriesGrid />
            <WhyChooseUsSection />
            <SecurityComplianceSection />
            <ProcessTimeline />
            <CaseStudyGallery onOpenInquiry={handleOpenInquiry} />
            <TechMatrix />
            <LeadershipSection />
            <TestimonialsCarousel />
            <PricingSection
              currency={currency}
              onToggleCurrency={toggleCurrency}
              onOpenInquiry={handleOpenInquiry}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />
            <FaqAccordion />
            <ContactSection />
          </>
        )}

        {currentView === 'services' && (
          <div>
            <ServicesSection onOpenInquiry={handleOpenInquiry} />
            <IndustriesGrid />
            <SecurityComplianceSection />
            <ProcessTimeline />
            <ContactSection />
          </div>
        )}

        {currentView === 'industries' && (
          <div>
            <IndustriesGrid />
            <ServicesSection onOpenInquiry={handleOpenInquiry} />
            <WhyChooseUsSection />
            <ContactSection />
          </div>
        )}

        {currentView === 'portfolio' && (
          <div>
            <CaseStudyGallery onOpenInquiry={handleOpenInquiry} />
            <ContactSection />
          </div>
        )}

        {currentView === 'technologies' && (
          <div>
            <TechMatrix />
            <TechMarquee />
            <ContactSection />
          </div>
        )}

        {currentView === 'pricing' && (
          <div>
            <PricingSection
              currency={currency}
              onToggleCurrency={toggleCurrency}
              onOpenInquiry={handleOpenInquiry}
              onOpenEstimator={() => setIsEstimatorOpen(true)}
            />
            <WhyChooseUsSection />
            <ContactSection />
          </div>
        )}

        {currentView === 'about' && (
          <div>
            <AboutSection />
            <LeadershipSection />
            <ProcessTimeline />
            <ContactSection />
          </div>
        )}

        {currentView === 'blog' && (
          <div>
            <BlogSection />
            <ContactSection />
          </div>
        )}

        {currentView === 'faq' && (
          <div>
            <FaqAccordion />
            <ContactSection />
          </div>
        )}

        {currentView === 'contact' && (
          <div>
            <ContactSection />
          </div>
        )}
      </main>

      {/* Enterprise Footer */}
      <Footer
        onNavigate={setCurrentView}
        currency={currency}
        onToggleCurrency={toggleCurrency}
        onOpenCapability={() => setIsCapabilityOpen(true)}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Desktop Floating Consultation Float Button */}
      <button
        onClick={() => setIsSchedulerOpen(true)}
        className="desktop-only"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 180,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 20px',
          background: theme === 'light' ? 'rgba(255, 255, 255, 0.95)' : 'rgba(11, 16, 33, 0.95)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(223, 178, 89, 0.4)',
          borderRadius: 'var(--radius-full)',
          color: theme === 'light' ? '#0F172A' : '#FFFFFF',
          fontWeight: 700,
          fontSize: '0.85rem',
          cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)'
        }}
      >
        <PhoneCall style={{ width: '16px', height: '16px', color: '#DFB259' }} />
        <span>Book Consultation</span>
      </button>

      {/* Mobile Sticky Quick Navigation Dock with Theme Toggle */}
      <MobileQuickDock
        onNavigate={setCurrentView}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Floating Luminex AI Advisor */}
      <AiAssistant
        onOpenScheduler={() => setIsSchedulerOpen(true)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Modals */}
      <MeetingSchedulerModal
        isOpen={isSchedulerOpen}
        onClose={() => setIsSchedulerOpen(false)}
      />

      <RoiCalculatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        currency={currency}
        onOpenInquiry={handleOpenInquiry}
      />

      <CapabilityStatementModal
        isOpen={isCapabilityOpen}
        onClose={() => setIsCapabilityOpen(false)}
      />

    </div>
  );
}

export default App;
