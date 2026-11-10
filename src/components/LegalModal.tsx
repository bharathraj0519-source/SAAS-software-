import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="glass-panel border border-sky-400/30 rounded-2xl w-full max-w-2xl max-h-[85vh] shadow-2xl flex flex-col overflow-hidden relative">
        <div className="px-6 py-4 bg-slate-100/90 dark:bg-[#141822] border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
            ) : (
              <FileText className="w-5 h-5 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
            )}
            <h3 id="legal-modal-title" className="text-base font-bold text-[var(--text-heading)] font-['Barlow']">
              {type === 'privacy' ? 'Privacy Policy & Data Protection' : 'Terms of Service & Delivery SLA'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg bg-slate-200/80 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 text-[var(--muted)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-[var(--muted)] space-y-4 leading-relaxed font-['Lateef'] text-lg">
          {type === 'privacy' ? (
            <>
              <p>
                <strong className="text-[var(--text-heading)] font-['Barlow']">BlazeByte Studio</strong> respects your commercial privacy. When you use our SaaS demo simulators, custom plan builders, or enquiry forms, we collect only the project specifications, company name, contact numbers, and emails necessary to deliver engineering consultations and service proposals.
              </p>
              <h4 className="text-sm font-bold text-[var(--text-heading)] pt-2 font-['Barlow']">Data Security & Storage</h4>
              <p>
                Customer and technical inquiries submitted through our portal are stored in encrypted client stores and secured cloud databases. We do not sell, rent, or distribute contact details to third-party ad networks.
              </p>
              <h4 className="text-sm font-bold text-[var(--text-heading)] pt-2 font-['Barlow']">WhatsApp & Direct Messaging</h4>
              <p>
                When you initiate communication via WhatsApp or request direct lead routing, your message context is passed securely to our technical architects in Coimbatore, Tamil Nadu, for direct project communication.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong className="text-[var(--text-heading)] font-['Barlow']">BlazeByte Studio Commercial Terms:</strong> All custom web design, AI chatbot implementations, and SEO service retainers are executed under written project milestone agreements.
              </p>
              <h4 className="text-sm font-bold text-[var(--text-heading)] pt-2 font-['Barlow']">Service Delivery SLA</h4>
              <p>
                Landing page sprints are slated for 7-10 business days upon receipt of creative assets. Full-stack business websites are staged across 2-3 week sprints with staging URL previews before domain launch.
              </p>
              <h4 className="text-sm font-bold text-[var(--text-heading)] pt-2 font-['Barlow']">Subscriptions & Payment Integrity</h4>
              <p>
                All prices displayed on this platform are transparent commercial estimates or configured subscription tiers. No recurring charges occur without explicit customer invoice authorization.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-100/90 dark:bg-[#141822] border-t border-slate-200 dark:border-white/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
