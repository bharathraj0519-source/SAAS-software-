import React from 'react';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import { FlipText } from '@/components/ui/flip-text';
import { HeroScene } from '@/components/HeroScene';

interface HeroProps {
  onExploreServices: () => void;
  onBuildCustomPlan: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onBuildCustomPlan }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden isolation-auto">
      {/* Three.js Interactive Particle Header Scene from index.html */}
      <HeroScene />

      {/* Hero Ambient Radial Lighting */}
      <div className="glow a -left-20 top-1/4"></div>
      <div className="glow b right-10 top-1/3"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge from index.html */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-8 border border-[rgba(99,203,255,0.4)] shadow-[0_0_24px_rgba(112,37,237,0.3)]">
          <img
            src="/assets/brain-glow.png"
            alt="BlazeByte AI"
            className="w-4 h-4 object-contain filter drop-shadow-[0_0_6px_#65ffe3]"
          />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#65ffe3] uppercase font-['Barlow']">
            BlazeByte Studio • Enterprise SaaS & Digital Systems
          </span>
        </div>

        {/* Main Headline with FlipText, Script Bold Italic, and index.html Color Gradient */}
        <div className="header-text-glow font-['Barlow']">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-2">
            <FlipText className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white">
              Build Smarter. Grow Faster.
            </FlipText>
          </h1>

          <div className="mt-2 text-4xl sm:text-6xl lg:text-7xl font-script-italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#8effd2] via-[#63cbff] to-[#d86bff] drop-shadow-[0_0_28px_rgba(112,37,237,0.7)] py-2">
            Automate Everything.
          </div>
        </div>

        {/* Supporting description with Lateef primary typography */}
        <p className="mt-5 text-xl sm:text-2xl text-[#eef2f3] max-w-3xl mx-auto leading-relaxed font-['Lateef'] font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Empowering modern businesses with autonomous AI chatbots, high-conversion web applications, and precision SEO architectures — turning bold ideas into scalable digital systems.
        </p>

        {/* CTAs matching index.html pill buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-md mx-auto">
          <button
            onClick={onExploreServices}
            className="pill primary w-full sm:w-auto px-8 py-3.5 text-base flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onBuildCustomPlan}
            className="pill w-full sm:w-auto px-7 py-3.5 text-base text-[#e1e4eb] hover:text-white flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#65ffe3]" />
            <span>Build Your Custom Plan</span>
          </button>
        </div>

        {/* Floating Architectural Indicators */}
        <div className="mt-14 pt-8 border-t border-[rgba(99,203,255,0.2)] grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left font-['Barlow']">
          <div className="p-3.5 rounded-2xl glass flex items-center gap-3">
            <img src="/assets/automation.svg" alt="Automation" className="w-6 h-6 object-contain" />
            <div>
              <div className="text-xs font-bold text-white">AI Automation</div>
              <div className="text-[11px] text-[#9ea6bd]">Multi-Tier Agents</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl glass flex items-center gap-3">
            <img src="/assets/branding.svg" alt="Web Dev" className="w-6 h-6 object-contain" />
            <div>
              <div className="text-xs font-bold text-white">Web Design</div>
              <div className="text-[11px] text-[#9ea6bd]">Sub-Second Speed</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl glass flex items-center gap-3">
            <img src="/assets/growth.svg" alt="SEO" className="w-6 h-6 object-contain" />
            <div>
              <div className="text-xs font-bold text-white">SEO Growth</div>
              <div className="text-[11px] text-[#9ea6bd]">Data-Driven Health</div>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl glass flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg bg-[rgba(99,203,255,0.15)] flex items-center justify-center text-[#65ffe3]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Custom Config</div>
              <div className="text-[11px] text-[#9ea6bd]">Bespoke Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
