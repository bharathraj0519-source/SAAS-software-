import React from 'react';
import { ArrowRight, Sparkles, Bot, Layout, TrendingUp, Sliders } from 'lucide-react';
import { FlipText } from '@/components/ui/flip-text';
import { HeroScene } from './HeroScene';

interface HeroProps {
  onExploreServices: () => void;
  onBuildCustomPlan: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onBuildCustomPlan }) => {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-transparent"
    >
      {/* Procedural Three.js WebGL Particle Wave Scene Re-added from previous setup */}
      <HeroScene />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge with glowing indicator */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#cf5c36]/30 shadow-md mb-8 group hover:border-[#cf5c36] transition-colors">
          <span className="w-2.5 h-2.5 rounded-full bg-[#cf5c36] animate-pulse" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-bold tracking-wider text-[#a66c59] uppercase font-['Barlow']">
            BlazeByte Studio • Enterprise SaaS &amp; Digital Systems
          </span>
        </div>

        {/* Main Headline with Attractive Text Gradient & Glow Effect when background is active */}
        <div className="font-['Barlow']">
          <h1
            id="hero-heading"
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight max-w-5xl mx-auto leading-[1.05] mb-2 select-none"
          >
            <FlipText className="text-5xl sm:text-7xl lg:text-8xl font-black header-title-gradient">
              Build Smarter. Grow Faster.
            </FlipText>
          </h1>

          <div className="mt-3 text-5xl sm:text-7xl lg:text-8xl font-script-italic py-2 relative">
            <span className="header-script-glow">
              Automate Everything.
            </span>
          </div>
        </div>

        {/* Supporting description with increased font size and strong contrast */}
        <p className="mt-6 text-2xl sm:text-3xl lg:text-4xl text-[#000000]/85 max-w-4xl mx-auto leading-relaxed font-['Lateef'] font-medium drop-shadow-xs">
          Empowering modern businesses with autonomous AI chatbots, high-conversion web applications, and precision SEO architectures — turning bold ideas into scalable digital systems.
        </p>

        {/* CTAs with increased font size */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-lg mx-auto font-['Barlow']">
          <button
            onClick={onExploreServices}
            className="pill primary w-full sm:w-auto px-9 py-4 text-base sm:text-lg font-bold flex items-center justify-center gap-2.5 group cursor-pointer shadow-lg"
            aria-label="Explore services catalog"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </button>

          <button
            onClick={onBuildCustomPlan}
            className="pill w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-bold text-[#000000] hover:text-[#cf5c36] flex items-center justify-center gap-2.5 cursor-pointer bg-white/95 backdrop-blur-md border border-[#7c7c7c]/30 shadow-md"
            aria-label="Build a custom subscription plan"
          >
            <Sparkles className="w-5 h-5 text-[#cf5c36]" aria-hidden="true" />
            <span>Build Your Custom Plan</span>
          </button>
        </div>

        {/* 4 Architectural Indicators with Modern High-Contrast Lucide Icons (Replacing old faint SVGs) */}
        <div className="mt-16 pt-8 border-t border-[#7c7c7c]/25 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left font-['Barlow']">
          <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#7c7c7c]/25 shadow-sm hover:border-[#cf5c36] transition-all flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#cf5c36]/20 to-[#efc88b]/20 flex items-center justify-center text-[#cf5c36] shrink-0 border border-[#cf5c36]/30 group-hover:scale-105 transition-transform">
              <Bot className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-[#000000]">AI Automation</div>
              <div className="text-xs sm:text-sm text-[#7c7c7c] font-medium">Multi-Tier Agents</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#7c7c7c]/25 shadow-sm hover:border-[#a66c59] transition-all flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#a66c59]/20 to-[#eee5e9] flex items-center justify-center text-[#a66c59] shrink-0 border border-[#a66c59]/30 group-hover:scale-105 transition-transform">
              <Layout className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-[#000000]">Web Design</div>
              <div className="text-xs sm:text-sm text-[#7c7c7c] font-medium">Sub-Second Speed</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#7c7c7c]/25 shadow-sm hover:border-emerald-500 transition-all flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/15 to-[#cf5c36]/15 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-500/30 group-hover:scale-105 transition-transform">
              <TrendingUp className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-[#000000]">SEO Growth</div>
              <div className="text-xs sm:text-sm text-[#7c7c7c] font-medium">Data-Driven Health</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#7c7c7c]/25 shadow-sm hover:border-[#efc88b] transition-all flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#efc88b]/30 to-[#cf5c36]/20 flex items-center justify-center text-[#cf5c36] shrink-0 border border-[#efc88b]/50 group-hover:scale-105 transition-transform">
              <Sliders className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-extrabold text-[#000000]">Custom Config</div>
              <div className="text-xs sm:text-sm text-[#7c7c7c] font-medium">Bespoke Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
