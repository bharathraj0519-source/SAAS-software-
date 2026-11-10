import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';
import { SpotlightNavbar } from '@/components/ui/spotlight-navbar';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  return (
    <footer className="relative border-t border-[rgba(99,203,255,0.2)] bg-[#070219]/80 backdrop-blur-2xl pt-16 pb-12 overflow-hidden text-sm">
      {/* Background radial glows */}
      <div className="glow a -left-20 bottom-0 opacity-20"></div>
      <div className="glow b -right-20 top-0 opacity-15"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Spotlight Navigation in Footer as requested */}
        <div className="flex justify-center mb-12">
          <SpotlightNavbar
            items={[
              { label: 'Home', onClick: () => onNavigate('home') },
              { label: 'AI Chatbot', onClick: () => onNavigate('chatbot') },
              { label: 'Web Development', onClick: () => onNavigate('webdev') },
              { label: 'SEO Services', onClick: () => onNavigate('seo') },
              { label: 'Custom Plan', onClick: () => onNavigate('custom-plan') },
            ]}
          />
        </div>

        {/* 4-column balanced grid with perfect spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[rgba(99,203,255,0.15)] font-['Barlow']">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-16 h-11 flex items-center justify-center p-1 rounded-xl bg-white/[0.04] border border-[rgba(99,203,255,0.3)] shadow-[0_0_15px_rgba(99,203,255,0.25)]">
                <img
                  src="/assets/blazebyte-logo.png"
                  alt="BlazeByte Studio Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_#63cbff]"
                />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  BlazeByte <span className="text-[#63cbff]">Studio</span>
                </span>
                <span className="text-[11px] font-semibold tracking-wider text-[#9ea6bd] uppercase block">
                  Enterprise SaaS & Systems
                </span>
              </div>
            </div>

            <p className="text-[#cbd0dc] text-base leading-relaxed max-w-sm font-['Lateef']">
              We design and engineer enterprise-grade web applications, autonomous AI chatbots, and strategic organic search visibility systems to power modern commercial growth.
            </p>

            <div className="space-y-2 text-xs text-[#9ea6bd] pt-2 font-['Barlow']">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#65ffe3]" />
                <span className="text-[#e1e4eb]">Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#65ffe3]" />
                <a href="tel:+917708795342" className="hover:text-white transition-colors">
                  +91 7708795342
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#65ffe3]" />
                <a href="mailto:contact@blazebytestudio7.com" className="hover:text-white transition-colors">
                  contact@blazebytestudio7.com
                </a>
              </div>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-white">Platform Modules</h4>
            <ul className="space-y-2 text-xs text-[#9ea6bd]">
              <li>
                <button
                  onClick={() => onNavigate('chatbot')}
                  className="hover:text-[#65ffe3] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>AI Chatbot SaaS</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('webdev')}
                  className="hover:text-[#65ffe3] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>Web Design & Dev</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('seo')}
                  className="hover:text-[#65ffe3] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>SEO Analytics Suite</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom-plan')}
                  className="hover:text-[#65ffe3] transition-colors flex items-center gap-1 group cursor-pointer"
                >
                  <span>Custom Plan Builder</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-white">Capabilities</h4>
            <ul className="space-y-2 text-xs text-[#9ea6bd]">
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
            <h4 className="text-xs font-bold uppercase tracking-[0.14em] text-white">Trust & Compliance</h4>
            <ul className="space-y-2 text-xs text-[#9ea6bd]">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms & Service SLA
                </button>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.blazebyte.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-[#65ffe3] text-xs text-white transition-all shadow-sm"
                >
                  <Globe className="w-3 h-3 text-[#65ffe3]" />
                  <span>blazebyte.shop</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9ea6bd] font-['Barlow']">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#65ffe3]" />
            <span>© {new Date().getFullYear()} BlazeByte Studio. Commercial SaaS Platform. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#9ea6bd]/80">
              Designed with precision • Crafted for scale
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
