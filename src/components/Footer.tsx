import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { SpotlightNavbar } from '@/components/ui/spotlight-navbar';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms' | 'cookies') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  return (
    <footer className="relative border-t border-[rgba(124,124,124,0.22)] bg-[#eee5e9]/90 backdrop-blur-xl pt-16 pb-12 overflow-hidden text-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Spotlight Capsule Navigation in Footer as in image 6 */}
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

        {/* 4-column balanced grid with clean light hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[rgba(124,124,124,0.22)] font-['Barlow']">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-16 h-11 flex items-center justify-center p-1 rounded-xl bg-white border border-[rgba(124,124,124,0.22)] shadow-sm">
                <img
                  src="/assets/blazebyte-logo.png"
                  alt="BlazeByte Studio Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-[#000000] flex items-center gap-1.5">
                  BlazeByte <span className="text-[#cf5c36]">Studio</span>
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-[#7c7c7c] uppercase block">
                  Enterprise SaaS & Systems
                </span>
              </div>
            </div>

            <p className="text-[#000000]/80 text-xl sm:text-2xl leading-relaxed max-w-sm font-['Lateef'] font-medium">
              We design and engineer enterprise-grade web applications, autonomous AI chatbots, and strategic organic search visibility systems to power modern commercial growth.
            </p>

            <div className="space-y-2.5 text-sm text-[#7c7c7c] pt-2 font-['Barlow']">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#cf5c36]" aria-hidden="true" />
                <span className="text-[#000000] font-semibold">Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#cf5c36]" aria-hidden="true" />
                <a href="tel:+917708795342" className="text-[#000000] hover:text-[#cf5c36] font-semibold transition-colors">
                  +91 7708795342
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#cf5c36]" aria-hidden="true" />
                <a href="mailto:contact@blazebytestudio7.com" className="text-[#000000] hover:text-[#cf5c36] font-semibold transition-colors">
                  contact@blazebytestudio7.com
                </a>
              </div>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[#000000]">Platform Modules</h4>
            <ul className="space-y-2 text-xs text-[#7c7c7c]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('chatbot')}
                  className="hover:text-[#cf5c36] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>AI Chatbot SaaS</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('webdev')}
                  className="hover:text-[#cf5c36] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>Web Design & Dev</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('seo')}
                  className="hover:text-[#cf5c36] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>SEO Analytics Suite</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('custom-plan')}
                  className="hover:text-[#cf5c36] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>Custom Plan Builder</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </button>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[#000000]">Capabilities</h4>
            <ul className="space-y-2 text-xs text-[#7c7c7c]">
              <li>Interactive Multi-Tier Chatbots</li>
              <li>SaaS & Cloud Web Portals</li>
              <li>Core Web Vitals Optimization</li>
              <li>Schema & IndexNow Push</li>
              <li>WhatsApp Automated Workflows</li>
              <li>Multi-Channel CRM Integration</li>
            </ul>
          </div>

          {/* Trust & Official Network */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-[#000000]">Trust & Network</h4>
            <ul className="space-y-2.5 text-xs text-[#7c7c7c]">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-[#cf5c36] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-[#cf5c36] transition-colors cursor-pointer"
                >
                  Terms & Service SLA
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('cookies')}
                  className="hover:text-[#cf5c36] transition-colors cursor-pointer"
                >
                  Cookie Policy & Preferences
                </button>
              </li>
              <li className="pt-1 flex flex-col gap-2">
                <a
                  href="https://www.blazebyte.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(124,124,124,0.22)] hover:border-[#cf5c36] text-xs text-[#000000] transition-all shadow-sm w-fit"
                  aria-label="Visit BlazeByte official shop website (opens in new tab)"
                >
                  <Globe className="w-3.5 h-3.5 text-[#cf5c36]" aria-hidden="true" />
                  <span>blazebyte.shop</span>
                </a>
                <a
                  href="https://www.blazebyte.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(124,124,124,0.22)] hover:border-[#cf5c36] text-xs text-[#000000] transition-all shadow-sm w-fit"
                  aria-label="Visit BlazeByte digital product store (opens in new tab)"
                >
                  <Globe className="w-3.5 h-3.5 text-[#a66c59]" aria-hidden="true" />
                  <span>blazebyte.store</span>
                </a>
                <a
                  href="https://www.blazebyte.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[rgba(124,124,124,0.22)] hover:border-[#cf5c36] text-xs text-[#000000] transition-all shadow-sm w-fit"
                  aria-label="Visit BlazeByte info agency portal (opens in new tab)"
                >
                  <Globe className="w-3.5 h-3.5 text-[#cf5c36]" aria-hidden="true" />
                  <span>blazebyte.info</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7c7c7c] font-['Barlow']">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
            <span>© {new Date().getFullYear()} BlazeByte Studio. Commercial SaaS Platform. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#7c7c7c]">
              Coimbatore, Tamil Nadu • Designed with precision • Crafted for scale
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
