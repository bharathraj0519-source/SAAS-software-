import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FlipText } from '@/components/ui/flip-text';

interface HeroProps {
  onExploreServices: () => void;
  onBuildCustomPlan: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onBuildCustomPlan }) => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-transparent"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#7c7c7c]/25 shadow-sm mb-7">
          <img
            src="/assets/brain-glow.png"
            alt=""
            aria-hidden="true"
            className="w-4 h-4 object-contain"
          />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#a66c59] uppercase font-['Barlow']">
            BlazeByte Studio • Enterprise SaaS & Digital Systems
          </span>
        </div>

        {/* Main Headline with FlipText, Script Bold Italic, and Light Theme Palette */}
        <div className="font-['Barlow']">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#000000] max-w-4xl mx-auto leading-[1.08] mb-2"
          >
            <FlipText className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#000000]">
              Build Smarter. Grow Faster.
            </FlipText>
          </h1>

          <div className="mt-2 text-4xl sm:text-6xl lg:text-7xl font-script-italic text-[#cf5c36] py-1">
            Automate Everything.
          </div>
        </div>

        {/* Supporting description with Lateef primary typography */}
        <p className="mt-5 text-xl sm:text-2xl text-[#7c7c7c] max-w-3xl mx-auto leading-relaxed font-['Lateef'] font-normal">
          Empowering modern businesses with autonomous AI chatbots, high-conversion web applications, and precision SEO architectures — turning bold ideas into scalable digital systems.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-md mx-auto font-['Barlow']">
          <button
            onClick={onExploreServices}
            className="pill primary w-full sm:w-auto px-8 py-3.5 text-base flex items-center justify-center gap-2.5 group cursor-pointer"
            aria-label="Explore services catalog"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>

          <button
            onClick={onBuildCustomPlan}
            className="pill w-full sm:w-auto px-7 py-3.5 text-base text-[#000000] hover:text-[#cf5c36] flex items-center justify-center gap-2.5 cursor-pointer bg-white border border-[#7c7c7c]/30"
            aria-label="Build a custom subscription plan"
          >
            <Sparkles className="w-4 h-4 text-[#cf5c36]" aria-hidden="true" />
            <span>Build Your Custom Plan</span>
          </button>
        </div>

        {/* Floating Architectural Indicators */}
        <div className="mt-14 pt-8 border-t border-[#7c7c7c]/20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left font-['Barlow']">
          <div className="p-4 rounded-2xl bg-white border border-[#7c7c7c]/20 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eee5e9] flex items-center justify-center p-2 shrink-0">
              <img src="/assets/automation.svg" alt="" aria-hidden="true" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#000000]">AI Automation</div>
              <div className="text-[11px] text-[#7c7c7c]">Multi-Tier Agents</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#7c7c7c]/20 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eee5e9] flex items-center justify-center p-2 shrink-0">
              <img src="/assets/branding.svg" alt="" aria-hidden="true" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#000000]">Web Design</div>
              <div className="text-[11px] text-[#7c7c7c]">Sub-Second Speed</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#7c7c7c]/20 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#eee5e9] flex items-center justify-center p-2 shrink-0">
              <img src="/assets/growth.svg" alt="" aria-hidden="true" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#000000]">SEO Growth</div>
              <div className="text-[11px] text-[#7c7c7c]">Data-Driven Health</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#7c7c7c]/20 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#efc88b]/20 flex items-center justify-center text-[#cf5c36] shrink-0">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#000000]">Custom Config</div>
              <div className="text-[11px] text-[#7c7c7c]">Bespoke Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
