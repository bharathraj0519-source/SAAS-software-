import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { ServiceShowcaseGrid } from './components/ServiceShowcaseGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ChatbotModule } from './components/ChatbotModule';
import { WebDevModule } from './components/WebDevModule';
import { SeoModule } from './components/SeoModule';
import { CustomPlanBuilder } from './components/CustomPlanBuilder';
import { PlanOrderModal } from './components/PlanOrderModal';
import { CustomerPortalModal } from './components/CustomerPortalModal';
import { LegalModal } from './components/LegalModal';
import { Sparkles, Phone, CheckCircle2 } from 'lucide-react';
import type { SubscriptionPlan } from './types';

export function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedPlanForOrder, setSelectedPlanForOrder] = useState<SubscriptionPlan | null>(null);
  const [portalMode, setPortalMode] = useState<'user' | 'admin' | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
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
    <div className="min-h-screen text-white flex flex-col font-['Lateef'] text-xl selection:bg-[#2391FF] selection:text-white relative isolation-isolate">
      {/* Animated Mountain Picture & Video Background from index.html */}
      <video
        className="page-video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/mountain-bg.jpg"
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          pointerEvents: 'none',
          zIndex: -10,
        }}
      >
        <source src="/assets/purple-desert-optimized.mp4" type="video/mp4" />
      </video>
      <div
        className="page-video-shade"
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: -9,
        }}
      ></div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-2xl glass border border-emerald-500/40 text-white shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5 font-['Barlow']">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-sm font-semibold">{toastMessage}</div>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenPortal={(mode) => setPortalMode(mode)}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {activeTab === 'home' && (
          <>
            {/* Hero Section with FlipText, Three.js Scene & Mountain Backdrop */}
            <Hero
              onExploreServices={() => {
                const el = document.getElementById('services-overview');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onBuildCustomPlan={() => handleNavigate('custom-plan')}
            />

            {/* 4 Interactive Service Modules Overview with correct SVGs & Glass style */}
            <ServiceShowcaseGrid onSelectService={(id) => handleNavigate(id)} />

            {/* Why Choose Us & Bento Grid */}
            <WhyChooseUs />

            {/* Final Conversion Section from index.html */}
            <section className="py-24 relative overflow-hidden text-center" id="contact">
              <div className="glow a left-1/4 top-10"></div>
              <div className="glow b right-1/4 bottom-10"></div>

              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="glass p-10 sm:p-14 rounded-[32px] border border-[rgba(99,203,255,0.3)] shadow-[0_0_50px_rgba(112,37,237,0.35)] relative overflow-hidden">
                  <p className="text-[#65ffe3] text-sm uppercase tracking-[0.18em] font-semibold mb-4 font-['Barlow']">
                    Our Vision
                  </p>

                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto font-['Barlow'] header-text-glow">
                    Every idea deserves the opportunity to become{' '}
                    <span className="font-script-italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8effd2] to-[#d86bff]">
                      something meaningful.
                    </span>
                  </h2>

                  <p className="mt-5 text-xl sm:text-2xl text-[#d5d8e2] max-w-xl mx-auto font-['Lateef'] leading-relaxed">
                    We combine creativity, technology, AI, and automation to help businesses build stronger digital experiences, work smarter, and grow with confidence.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => handleNavigate('custom-plan')}
                      className="pill primary px-8 py-3.5 text-base flex items-center justify-center gap-2 cursor-pointer font-['Barlow'] font-semibold"
                    >
                      <Sparkles className="w-4 h-4 text-[#65ffe3]" />
                      <span>Build Your Custom Plan</span>
                    </button>

                    <a
                      href="https://wa.me/917708795342?text=Hi%20BlazeByte%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill px-7 py-3.5 text-base text-[#e1e4eb] hover:text-white flex items-center justify-center gap-2 font-['Barlow'] font-semibold"
                    >
                      <Phone className="w-4 h-4 text-[#63cbff]" />
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
          <div className="pt-20">
            <ChatbotModule
              onSelectPlan={handleSelectPlan}
              onOpenCustomPlan={() => handleNavigate('custom-plan')}
            />
          </div>
        )}

        {/* Tab: Web Design & Development */}
        {activeTab === 'webdev' && (
          <div className="pt-20">
            <WebDevModule
              onSuccessEnquiry={(id) => showToast(`Web project enquiry ${id} recorded successfully!`)}
              onOpenCustomPlan={() => handleNavigate('custom-plan')}
            />
          </div>
        )}

        {/* Tab: SEO Services SaaS */}
        {activeTab === 'seo' && (
          <div className="pt-20">
            <SeoModule
              onSelectPlan={handleSelectPlan}
              onOpenCustomPlan={() => handleNavigate('custom-plan')}
            />
          </div>
        )}

        {/* Tab: Custom Plan Builder */}
        {activeTab === 'custom-plan' && (
          <div className="pt-20">
            <CustomPlanBuilder
              onSuccessEnquiry={(id) => showToast(`Custom proposal request ${id} recorded!`)}
            />
          </div>
        )}
      </main>

      {/* Footer */}
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

      {/* Legal & SLA Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
