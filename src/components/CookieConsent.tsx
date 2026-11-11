import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check, X, ExternalLink } from 'lucide-react';

interface CookieConsentProps {
  onOpenCookiesPolicy: () => void;
  onOpenPrivacyPolicy: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({
  onOpenCookiesPolicy,
  onOpenPrivacyPolicy,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already set cookie preference
    const consent = localStorage.getItem('blazebyte_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('blazebyte_cookie_consent', 'all');
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('blazebyte_cookie_consent', 'essential');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie and Privacy Consent Banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white/95 backdrop-blur-md border border-[rgba(124,124,124,0.25)] rounded-2xl p-5 shadow-2xl font-['Barlow'] text-left">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#eee5e9] flex items-center justify-center text-[#cf5c36] shrink-0">
              <Cookie className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#000000]">Cookie &amp; Privacy Preferences</h4>
              <p className="text-[11px] text-[#7c7c7c]">BlazeByte Studio SaaS Platform</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleEssentialOnly}
            aria-label="Close and keep essential only"
            className="p-1 rounded-lg text-[#7c7c7c] hover:text-[#000000] hover:bg-[#eee5e9] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <p className="text-xs text-[#7c7c7c] leading-relaxed mb-4 font-['Lateef'] text-lg">
          We use cookies and telemetry storage to preserve your simulator settings, remember configured plans, and verify security benchmarks. We respect your commercial privacy and never sell visitor data.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="w-full sm:w-auto flex-1 py-2 px-3 rounded-full bg-[#cf5c36] hover:bg-[#b84f2e] text-white text-xs font-bold transition-colors cursor-pointer shadow-sm text-center"
          >
            Accept All
          </button>

          <button
            type="button"
            onClick={handleEssentialOnly}
            className="w-full sm:w-auto flex-1 py-2 px-3 rounded-full bg-[#eee5e9] hover:bg-stone-200 text-[#000000] border border-[rgba(124,124,124,0.3)] text-xs font-semibold transition-colors cursor-pointer text-center"
          >
            Essential Only
          </button>
        </div>

        {/* Legal Links */}
        <div className="mt-3 pt-2.5 border-t border-[rgba(124,124,124,0.15)] flex items-center justify-between text-[11px] text-[#7c7c7c]">
          <button
            type="button"
            onClick={onOpenCookiesPolicy}
            className="hover:text-[#cf5c36] underline cursor-pointer"
          >
            Cookie Policy
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={onOpenPrivacyPolicy}
            className="hover:text-[#cf5c36] underline cursor-pointer"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <span className="text-[#a66c59] font-medium">Demo Protected</span>
        </div>
      </div>
    </div>
  );
};
