import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  return (
    <footer className="relative border-t border-white/10 bg-[#181e29] pt-16 pb-12 overflow-hidden text-sm">
      {/* Subtle ambient light */}
      <div className="ambient-glow bg-[#2391FF] w-[450px] h-[300px] -bottom-32 left-1/2 -translate-x-1/2 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#202734] border border-[#2391FF]/30 flex items-center justify-center p-1 shadow-md shadow-[#2391FF]/10">
                <img
                  src="/assets/blazebyte-logo.png"
                  alt="BlazeByte Studio"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-['Barlow']">
                BlazeByte <span className="text-[#2391FF]">Studio</span>
              </span>
            </div>

            <p className="text-[#B7B09E] text-xs sm:text-sm leading-relaxed max-w-sm">
              We design and engineer enterprise-grade web applications, autonomous AI chatbots, and strategic organic search visibility systems to power modern commercial growth.
            </p>

            <div className="space-y-2 text-xs text-[#B7B09E] pt-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#2391FF]" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#2391FF]" />
                <a href="tel:+917708795342" className="hover:text-white transition-colors">
                  +91 7708795342
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#2391FF]" />
                <a href="mailto:contact@blazebytestudio7.com" className="hover:text-white transition-colors">
                  contact@blazebytestudio7.com
                </a>
              </div>
            </div>
          </div>

          {/* Service Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Platform Modules</h4>
            <ul className="space-y-2 text-xs text-[#B7B09E]">
              <li>
                <button
                  onClick={() => onNavigate('chatbot')}
                  className="hover:text-[#2391FF] transition-colors flex items-center gap-1 group"
                >
                  <span>AI Chatbot SaaS</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('webdev')}
                  className="hover:text-[#2391FF] transition-colors flex items-center gap-1 group"
                >
                  <span>Web Design & Dev</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('seo')}
                  className="hover:text-[#2391FF] transition-colors flex items-center gap-1 group"
                >
                  <span>SEO Analytics Suite</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('custom-plan')}
                  className="hover:text-[#2391FF] transition-colors flex items-center gap-1 group"
                >
                  <span>Custom Plan Builder</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions & Tech */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Capabilities</h4>
            <ul className="space-y-2 text-xs text-[#B7B09E]">
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Trust & Compliance</h4>
            <ul className="space-y-2 text-xs text-[#B7B09E]">
              <li>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors"
                >
                  Terms & Service SLA
                </button>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.blazebyte.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#2391FF]/40 text-xs text-white"
                >
                  <Globe className="w-3 h-3 text-[#2391FF]" />
                  <span>blazebyte.shop</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B7B09E]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2391FF]" />
            <span>© {new Date().getFullYear()} BlazeByte Studio. Commercial SaaS Platform. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#B7B09E]/80">
              Designed with precision • Crafted for scale
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
