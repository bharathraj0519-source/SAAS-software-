import React, { useState, useEffect } from 'react';
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
import { Sparkles, ArrowRight, Phone, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
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
    <div className="min-h-screen bg-[#202734] text-white flex flex-col font-['Barlow'] selection:bg-[#2391FF] selection:text-white relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 p-4 rounded-xl glass-panel border border-emerald-500/40 text-white shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <div className="text-xs font-semibold">{toastMessage}</div>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        onNavigate={handleNavigate}
        onOpenPortal={(mode) => setPortalMode(mode)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              onExploreServices={() => {
                const el = document.getElementById('services-overview');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onBuildCustomPlan={() => handleNavigate('custom-plan')}
              onNavigate={handleNavigate}
            />

            {/* 4 Interactive Service Modules Overview */}
            <ServiceShowcaseGrid onSelectService={(id) => handleNavigate(id)} />

            {/* Why Choose Us & Architectural Bento Grid */}
            <WhyChooseUs />

            {/* Final Conversion Section */}
            <section className="py-24 relative overflow-hidden text-center">
              <div className="ambient-glow bg-[#2391FF] w-[500px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15"></div>

              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="glass-panel p-10 sm:p-14 rounded-3xl border border-[#2391FF]/30 shadow-2xl relative overflow-hidden">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2391FF]/10 border border-[#2391FF]/30 text-xs font-semibold text-[#2391FF] uppercase tracking-wider mb-6">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ready To Scale Your Digital Architecture?</span>
                  </div>

                  <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto font-['Barlow']">
                    Your vision. Our engineering.{' '}
                    <span className="text-[#2391FF]">One unified digital journey.</span>
                  </h2>

                  <p className="mt-4 text-base sm:text-lg text-[#B7B09E] max-w-xl mx-auto">
                    Whether you need an autonomous AI chatbot, an ultra-fast web application, or an aggressive SEO strategy, we turn requirements into reality.
                  </p>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={() => handleNavigate('custom-plan')}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2391FF] to-[#0070e0] hover:from-[#3ea0ff] hover:to-[#2391FF] shadow-lg shadow-[#2391FF]/25 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Build Your Custom Plan</span>
                    </button>

                    <a
                      href="https://wa.me/917708795342?text=Hi%20BlazeByte%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-semibold text-[#B7B09E] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2391FF]/40 transition-all flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-[#2391FF]" />
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
