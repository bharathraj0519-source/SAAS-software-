import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ServiceShowcaseGrid } from './components/ServiceShowcaseGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Pricing } from './components/Pricing';
import { FaqAccordionDemo } from './components/ui/faq-accordion';
import { ChatbotModule } from './components/ChatbotModule';
import { WebDevModule } from './components/WebDevModule';
import { SeoModule } from './components/SeoModule';
import { CustomPlanBuilder } from './components/CustomPlanBuilder';
import { PlanOrderModal } from './components/PlanOrderModal';
import { CustomerPortalModal } from './components/CustomerPortalModal';
import { LegalModal } from './components/LegalModal';
import { CookieConsent } from './components/CookieConsent';
import { Sparkles, Phone, CheckCircle2 } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import type { SubscriptionPlan } from './types';

function AppContent() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedPlanForOrder, setSelectedPlanForOrder] = useState<SubscriptionPlan | null>(null);
  const [portalMode, setPortalMode] = useState<'user' | 'admin' | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'cookies' | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleNavigate = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPlan = (plan: SubscriptionPlan) => {
    setSelectedPlanForOrder(plan);
  };

  return (
    <div className="min-h-screen text-[var(--text)] flex flex-col font-['Lateef'] text-xl selection:bg-[#cf5c36] selection:text-white relative isolation-isolate">
      {/* WCAG 2.4.1 Skip to Content Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Re-added Atmospheric Mountain Video Backdrop from previous setup */}
      <video
        className="page-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/mountain-bg.jpg"
        aria-hidden="true"
      >
        <source src="/assets/purple-desert-optimized.mp4" type="video/mp4" />
      </video>
      <div className="page-video-shade" aria-hidden="true"></div>

      {/* Live Region Toast Notification */}
      <div aria-live="polite" aria-atomic="true">
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl bg-white border border-emerald-400 text-[#000000] shadow-xl flex items-center gap-3 animate-in slide-in-from-bottom-5 font-['Barlow']">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
            <div className="text-sm font-semibold">{toastMessage}</div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenPortal={(mode) => setPortalMode(mode)}
      />

      {/* Main Content Area with Skip Target */}
      <main id="main-content" tabIndex={-1} className="flex-1 relative z-10 focus:outline-none">
        {activeTab === 'home' && (
          <>
            {/* Hero Section with FlipText and Crisp Light Styling (No Background Effects) */}
            <Hero
              onExploreServices={() => {
                const el = document.getElementById('services-overview');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onBuildCustomPlan={() => handleNavigate('custom-plan')}
            />

            {/* 4 Interactive Service Modules Overview with Cover Images & Guaranteed Fallbacks */}
            <ServiceShowcaseGrid onSelectService={(id) => handleNavigate(id)} />

            {/* Why Choose Us & Agent Bento Grid Section */}
            <WhyChooseUs />

            {/* Simple, Predictable Pricing Tiers with @phosphor-icons/react */}
            <Pricing />

            {/* Frequently Asked Questions Accordion */}
            <FaqAccordionDemo />

            {/* Final Conversion Section */}
            <section className="py-20 relative overflow-hidden text-center" id="contact">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="bg-white p-10 sm:p-14 rounded-[32px] border border-[rgba(124,124,124,0.22)] shadow-sm relative overflow-hidden">
                  <p className="text-[#cf5c36] text-xs uppercase tracking-[0.18em] font-bold mb-3 font-['Barlow']">
                    Our Vision
                  </p>

                  <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight leading-tight max-w-2xl mx-auto font-['Barlow']">
                    Every idea deserves the opportunity to become{' '}
                    <span className="font-script-italic text-[#cf5c36]">
                      something meaningful.
                    </span>
                  </h2>

                  <p className="mt-4 text-xl sm:text-2xl text-[#7c7c7c] max-w-xl mx-auto font-['Lateef'] leading-relaxed">
                    We combine creativity, technology, AI, and automation to help businesses build stronger digital experiences, work smarter, and grow with confidence.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => handleNavigate('custom-plan')}
                      className="px-8 py-3.5 rounded-full text-base font-semibold text-white bg-[#cf5c36] hover:bg-[#a66c59] flex items-center justify-center gap-2 cursor-pointer font-['Barlow'] transition-colors shadow-sm"
                    >
                      <Sparkles className="w-4 h-4 text-[#efc88b]" aria-hidden="true" />
                      <span>Build Your Custom Plan</span>
                    </button>

                    <a
                      href="https://wa.me/917708795342?text=Hi%20BlazeByte%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-7 py-3.5 rounded-full text-base font-semibold text-[#000000] bg-[#eee5e9] hover:bg-stone-200 border border-[rgba(124,124,124,0.25)] flex items-center justify-center gap-2 font-['Barlow'] transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#cf5c36]" aria-hidden="true" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Tab: AI Chatbot SaaS */}
        {activeTab === 'chatbot' && (
          <div className="pt-28 sm:pt-32">
            <ChatbotModule
              onSelectPlan={handleSelectPlan}
              onOpenCustomPlan={() => handleNavigate('custom-plan')}
            />
          </div>
        )}

        {/* Tab: Web Design & Development (Demo Webs DO NOT show cookies or terms & conditions) */}
        {activeTab === 'webdev' && (
          <div className="pt-28 sm:pt-32">
            <WebDevModule
              onSuccessEnquiry={(id) => showToast(`Web project enquiry ${id} recorded successfully!`)}
              onOpenCustomPlan={() => handleNavigate('custom-plan')}
            />
          </div>
        )}

        {/* Tab: SEO Services SaaS */}
        {activeTab === 'seo' && (
          <div className="pt-28 sm:pt-32">
            <SeoModule
              onSelectPlan={handleSelectPlan}
              onOpenCustomPlan={() => handleNavigate('custom-plan')}
            />
          </div>
        )}

        {/* Tab: Custom Plan Builder */}
        {activeTab === 'custom-plan' && (
          <div className="pt-28 sm:pt-32">
            <CustomPlanBuilder
              onSuccessEnquiry={(id) => showToast(`Custom proposal request ${id} recorded!`)}
            />
          </div>
        )}
      </main>

      {/* Footer with Legal & Cookie Policy Navigation */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Plan Order / Checkout Modal */}
      <PlanOrderModal
        plan={selectedPlanForOrder}
        onClose={() => setSelectedPlanForOrder(null)}
        onSuccess={(id) => {
          showToast(`Subscription request ${id} submitted!`);
        }}
      />

      {/* Customer Portal / Admin Modal */}
      {portalMode && (
        <CustomerPortalModal
          initialMode={portalMode}
          onClose={() => setPortalMode(null)}
          onNavigateSection={(sec) => {
            setPortalMode(null);
            handleNavigate(sec);
          }}
        />
      )}

      {/* Legal & SLA Modal for Privacy, Terms & Cookies */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Main Site Cookie Consent Banner (Does not appear inside demo webs) */}
      <CookieConsent
        onOpenCookiesPolicy={() => setLegalModalType('cookies')}
        onOpenPrivacyPolicy={() => setLegalModalType('privacy')}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
