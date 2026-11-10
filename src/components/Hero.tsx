import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Bot, Globe, TrendingUp } from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onBuildCustomPlan: () => void;
  onNavigate: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onBuildCustomPlan, onNavigate }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow bg-[#2391FF] w-[500px] h-[500px] -top-24 left-1/2 -translate-x-1/2 opacity-20"></div>
      <div className="ambient-glow bg-[#1a4eff] w-[400px] h-[400px] top-40 right-10 opacity-15"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Release / Status Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-[#2391FF]/30 text-xs font-medium text-white mb-8 shadow-lg shadow-[#2391FF]/10 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-[#2391FF] shadow-[0_0_8px_#2391FF]"></span>
          <span>BlazeByte Studio 2.0 • Enterprise SaaS & Digital Systems</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] font-['Barlow']">
          Build Smarter. Grow Faster.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2391FF] via-[#63cbff] to-white">
            Automate Everything.
          </span>
        </h1>

        {/* Supporting Description */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#B7B09E] max-w-3xl mx-auto leading-relaxed font-normal">
          Empowering modern businesses with autonomous AI chatbots, high-conversion web applications, and precision SEO architectures — unified into one scalable commercial platform.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#2391FF] to-[#0d7ae6] hover:from-[#3ea0ff] hover:to-[#2391FF] transition-all shadow-xl shadow-[#2391FF]/25 hover:shadow-[#2391FF]/40 flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onBuildCustomPlan}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold text-[#B7B09E] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2391FF]/40 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#2391FF]" />
            <span>Build Your Custom Plan</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
            <Bot className="w-5 h-5 text-[#2391FF] shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white">AI Automation</div>
              <div className="text-[11px] text-[#B7B09E]">Multi-Tier Agents</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
            <Globe className="w-5 h-5 text-[#2391FF] shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white">Web Apps</div>
              <div className="text-[11px] text-[#B7B09E]">Sub-Second Speed</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-[#2391FF] shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white">SEO Growth</div>
              <div className="text-[11px] text-[#B7B09E]">Data-Driven Health</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
            <Zap className="w-5 h-5 text-[#2391FF] shrink-0" />
            <div>
              <div className="text-xs font-semibold text-white">Custom Config</div>
              <div className="text-[11px] text-[#B7B09E]">Bespoke Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
