import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { SpotlightNavbar } from '@/components/ui/spotlight-navbar';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  return (
    <footer className="relative border-t border-sky-400/20 bg-slate-100/90 dark:bg-[#070219]/80 backdrop-blur-2xl pt-16 pb-12 overflow-hidden text-sm">
      {/* Background radial glows */}
      <div className="glow a -left-20 bottom-0 opacity-15" aria-hidden="true"></div>
      <div className="glow b -right-20 top-0 opacity-10" aria-hidden="true"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Spotlight Navigation in Footer */}
        <nav aria-label="Footer quick navigation" className="flex justify-center mb-12">
          <SpotlightNavbar
            items={[
              { label: 'Home', onClick: () => onNavigate('home') },
              { label: 'AI Chatbot', onClick: () => onNavigate('chatbot') },
              { label: 'Web Development', onClick: () => onNavigate('webdev') },
              { label: 'SEO Services', onClick: () => onNavigate('seo') },
              { label: 'Custom Plan', onClick: () => onNavigate('custom-plan') },
            ]}
          />
        </nav>

        {/* 4-column balanced grid with perfect spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-sky-400/15 font-['Barlow']">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-16 h-11 flex items-center justify-center p-1 rounded-xl bg-white/[0.04] border border-sky-400/30 shadow-sm">
                <img
                  src="/assets/blazebyte-logo.png"
                  alt="BlazeByte Studio Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_#63cbff]"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-[var(--text-heading)] flex items-center gap-1.5">
                  BlazeByte <span className="text-sky-600 dark:text-[#63cbff]">Studio</span>
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-[var(--muted)] uppercase block">
                  Enterprise SaaS & Systems
                </span>
              </div>
            </div>

            <p className="text-[var(--muted)] text-base leading-relaxed max-w-sm font-['Lateef'] text-xl">
              We design and engineer enterprise-grade web applications, autonomous AI chatbots, and strategic organic search visibility systems to power modern commercial growth.
            </p>

            <div className="space-y-2 text-xs text-[var(--muted)] pt-2 font-['Barlow']">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-[#65ffe3]" aria-hidden="true" />
                <span className="text-[var(--text)]">Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-sky-600 dark:text-[#65ffe3]" aria-hidden="true" />
                <a href="tel:+917708795342" className="text-[var(--text)] hover:text-sky-600 transition-colors">
                  +91 7708795342
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-sky-600 dark:text-[#65ffe3]" aria-hidden="true" />
                <a href="mailto:contact@blazebytestudio7.com" className="text-[var(--text)] hover:text-sky-600 transition-colors">
                  contact@blazebytestudio7.com
                </a>
              </div>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-heading)]">Platform Modules</h4>
            <ul className="space-y-2 text-xs text-[var(--muted)]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('chatbot')}
                  className="hover:text-sky-600 dark:hover:text-[#65ffe3] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>AI Chatbot SaaS</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('webdev')}
                  className="hover:text-sky-600 dark:hover:text-[#65ffe3] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>Web Design & Dev</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('seo')}
                  className="hover:text-sky-600 dark:hover:text-[#65ffe3] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>SEO Analytics Suite</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('custom-plan')}
                  className="hover:text-sky-600 dark:hover:text-[#65ffe3] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>Custom Plan Builder</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </button>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-heading)]">Capabilities</h4>
            <ul className="space-y-2 text-xs text-[var(--muted)]">
              <li>Interactive Multi-Tier Chatbots</li>
              <li>SaaS & Cloud Web Portals</li>
              <li>Core Web Vitals Optimization</li>
              <li>Schema & IndexNow Push</li>
              <li>WhatsApp Automated Workflows</li>
              <li>Multi-Channel CRM Integration</li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-heading)]">Trust & Compliance</h4>
            <ul className="space-y-2 text-xs text-[var(--muted)]">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-sky-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-sky-600 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Terms & Service SLA
                </button>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.blazebyte.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-sky-500 text-xs text-[var(--text-heading)] transition-all shadow-sm"
                  aria-label="Visit BlazeByte official shop website (opens in new tab)"
                >
                  <Globe className="w-3 h-3 text-sky-600 dark:text-[#65ffe3]" aria-hidden="true" />
                  <span>blazebyte.shop</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)] font-['Barlow']">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-[#65ffe3]" aria-hidden="true" />
            <span>© {new Date().getFullYear()} BlazeByte Studio. Commercial SaaS Platform. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[var(--muted)]">
              Designed with precision • Crafted for scale
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
