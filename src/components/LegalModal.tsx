import React from 'react';
import { X, ShieldCheck, FileText, Cookie } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'cookies' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="bg-white border border-[rgba(124,124,124,0.25)] rounded-2xl w-full max-w-2xl max-h-[85vh] shadow-2xl flex flex-col overflow-hidden relative font-['Barlow']">
        {/* Header */}
        <div className="px-6 py-4 bg-[#faf8f9] border-b border-[rgba(124,124,124,0.18)] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' && (
              <ShieldCheck className="w-5 h-5 text-[#cf5c36]" aria-hidden="true" />
            )}
            {type === 'terms' && (
              <FileText className="w-5 h-5 text-[#cf5c36]" aria-hidden="true" />
            )}
            {type === 'cookies' && (
              <Cookie className="w-5 h-5 text-[#cf5c36]" aria-hidden="true" />
            )}
            <h3 id="legal-modal-title" className="text-base font-bold text-[#000000]">
              {type === 'privacy' && 'Privacy Policy & Data Protection'}
              {type === 'terms' && 'Terms of Service & Delivery SLA'}
              {type === 'cookies' && 'Cookie Policy & Data Transparency'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg bg-[#eee5e9] hover:bg-stone-200 text-[#7c7c7c] hover:text-[#000000] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto text-sm text-[#7c7c7c] space-y-4 leading-relaxed font-['Lateef'] text-xl">
          {type === 'privacy' && (
            <>
              <p>
                <strong className="text-[#000000] font-['Barlow'] text-base">BlazeByte Studio</strong> respects your commercial privacy. When you interact with our SaaS platform, test simulators, configure custom service packages, or submit enquiry forms, we collect only the project parameters, business name, contact numbers, and emails necessary to deliver engineering consultations and accurate commercial proposals.
              </p>
              <h4 className="text-sm font-bold text-[#000000] pt-2 font-['Barlow']">Information We Collect</h4>
              <p>
                We collect information you provide directly through our interactive tools: chatbot simulator queries, web design enquiry specifications, SEO target domains, and custom plan selections. We also collect standard technical telemetry (browser type, load times, device viewport) to maintain sub-second performance.
              </p>
              <h4 className="text-sm font-bold text-[#000000] pt-2 font-['Barlow']">Data Security & Storage</h4>
              <p>
                Project inquiries and client requests are processed securely with modern encryption standards. We never sell, rent, monetize, or distribute your business details to third-party advertising brokers.
              </p>
              <h4 className="text-sm font-bold text-[#000000] pt-2 font-['Barlow']">WhatsApp Direct Routing</h4>
              <p>
                When you initiate direct communication via WhatsApp or click lead routing (+91 77087 95342), your conversation brief is delivered securely to our senior architects based in Coimbatore, Tamil Nadu, for direct technical scoping.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                <strong className="text-[#000000] font-['Barlow'] text-base">BlazeByte Studio Commercial Agreement:</strong> All bespoke web development, AI chatbot deployments, and SEO retainers are governed by transparent, agreed-upon service milestones.
              </p>
              <h4 className="text-sm font-bold text-[#000000] pt-2 font-['Barlow']">Production Delivery SLA</h4>
              <p>
                Standard landing page sprints are slated for delivery in 7-10 business days upon receipt of design criteria. Full-scale SaaS web applications and multi-tier chatbot systems follow iterative 2-3 week sprints with private staging URL previews prior to public deployment.
              </p>
              <h4 className="text-sm font-bold text-[#000000] pt-2 font-['Barlow']">Transparent Pricing & No Lock-In</h4>
              <p>
                Pricing generated through our Custom Plan Builder and Starter/Team/Enterprise tiers represents transparent commercial estimates. Subscriptions operate on predictable monthly or discounted annual agreements without hidden renewal penalties.
              </p>
              <h4 className="text-sm font-bold text-[#000000] pt-2 font-['Barlow']">Intellectual Property & Code Ownership</h4>
              <p>
                Upon final milestone settlement, clients retain 100% full ownership of their custom application source code, designs, branding assets, and database schemas developed during the contract.
              </p>
            </>
          )}

          {type === 'cookies' && (
            <>
              <p>
                <strong className="text-[#000000] font-['Barlow'] text-base">Cookie & Local Storage Usage:</strong> BlazeByte Studio utilizes lightweight first-party cookies and browser local storage to provide a seamless interactive SaaS experience.
              </p>
              <h4 className="text-sm font-bold text-[#000000] pt-2 font-['Barlow']">Types of Cookies We Use</h4>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>
                  <strong className="text-[#000000] font-['Barlow'] text-xs">Essential & Functional:</strong> Necessary to persist your interactive session, selected simulation tabs, and custom plan builder calculations.
                </li>
                <li>
                  <strong className="text-[#000000] font-['Barlow'] text-xs">Telemetry & Performance:</strong> Measures Core Web Vitals (LCP, CLS, INP) to ensure our sub-second page performance benchmarks are met across devices.
                </li>
              </ul>
              <h4 className="text-sm font-bold text-[#000000] pt-2 font-['Barlow']">Zero Intrusive Tracking in Demo Webs</h4>
              <p>
                In strict accordance with our product guidelines, all simulated multi-device website demos (such as Blaze Cafe or Nova Scribe inside the Web Development Module) are entirely isolated and do not render any cookie banners, tracking scripts, or terms prompts within their preview frames.
              </p>
              <h4 className="text-sm font-bold text-[#000000] pt-2 font-['Barlow']">Managing Your Preferences</h4>
              <p>
                You may clear or adjust your cookie preferences at any time by selecting "Essential Only" on the consent banner or resetting your browser storage cache.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#faf8f9] border-t border-[rgba(124,124,124,0.18)] flex items-center justify-between">
          <span className="text-xs text-[#7c7c7c]">
            BlazeByte Studio • Coimbatore, Tamil Nadu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#cf5c36] hover:bg-[#b84f2e] cursor-pointer transition-colors shadow-sm"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
