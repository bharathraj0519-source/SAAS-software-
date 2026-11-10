import React, { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, TrendingUp, Zap, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const stepsTrackRef = useRef<HTMLUListElement>(null);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [activeTransformationIdx, setActiveTransformationIdx] = useState(0);

  const steps = [
    {
      step: '01',
      name: 'Discover',
      tag: 'Clarity & Research',
      icon: '🔍',
      lead: 'We learn about your business, audience, workflows, and commercial goals to uncover what will actually move the needle.',
      detail: 'Every high-converting system begins with absolute clarity. We analyze your competitors across Coimbatore, India, and global markets to identify untapped opportunities.',
      items: ['Commercial business goals', 'Target audience psychology', 'System requirements & data flow', 'Current bottlenecks & manual gaps'],
      webReference: 'Insights from blazebyte.store & blazebyte.shop',
    },
    {
      step: '02',
      name: 'Plan',
      tag: 'Architecture & Strategy',
      icon: '🧠',
      lead: 'Turn ideas into a battle-tested technical roadmap.',
      detail: 'We architect the database schemas, API connections, React/Next.js component trees, and AI knowledge vectors needed for sub-second speeds.',
      items: ['System architecture design', 'Feature milestone prioritization', 'Tech stack validation', 'Interactive prototype roadmap'],
      webReference: 'Standardized sprint workflows from blazebyte.info',
    },
    {
      step: '03',
      name: 'Design',
      tag: 'High-Impact UI/UX',
      icon: '✨',
      lead: 'Craft intuitive, accessible digital experiences.',
      detail: 'We translate the strategy into modern interfaces, micro-interactions, responsive viewports, and WCAG-compliant design systems that elevate brand prestige.',
      items: ['Design systems & typography', 'Mobile-first wireframes', 'Design prototypes', 'Sub-second UX optimization'],
      webReference: 'Design language referenced from blazebyte.store',
    },
    {
      step: '04',
      name: 'Build',
      tag: 'Full-Stack Execution',
      icon: '💻',
      lead: 'Turn designs into scalable production reality.',
      detail: 'Our engineering sprint develops clean, modular code with TypeScript, Next.js, and Supabase edge backends with rigorous performance testing.',
      items: ['Component development', 'AI assistant & webhook sync', 'Core Web Vitals tuning', 'Continuous security testing'],
      webReference: 'Enterprise standards verified on blazebyte.shop',
    },
    {
      step: '05',
      name: 'Growth',
      tag: 'Launch & Continuous Scale',
      icon: '🚀',
      lead: 'Deploy, index, automate, and scale revenue.',
      detail: 'After domain launch, we activate IndexNow search dispatch, local Google Maps 3-pack ranking, and ongoing maintenance to drive sustained organic growth.',
      items: ['Instant search engine indexing', 'WhatsApp automated lead flows', 'Google Business Profile dominance', 'Dedicated engineer WhatsApp bridge'],
      webReference: 'Continuous support powered by BlazeByte Studio',
    },
  ];

  const problems = [
    {
      id: 0,
      from: 'Weak digital presence',
      to: 'A strong digital experience',
      metric: '+340% Higher Engagement',
      beforeDetail: 'Outdated static brochure website with slow page load, low mobile usability, and zero customer interactivity.',
      afterDetail: 'Sub-second Next.js web application with dynamic previews, accessible typography, and frictionless lead conversion.',
    },
    {
      id: 1,
      from: 'Repetitive manual work',
      to: 'Smart AI & automation',
      metric: '85% Faster Lead Handling',
      beforeDetail: 'Manually answering repetitive pricing, business hours, and service questions across email and phone calls.',
      afterDetail: 'Autonomous AI chatbot ingesting your full knowledge base with instant 1-click WhatsApp routing (+91 7708795342).',
    },
    {
      id: 2,
      from: 'Outdated design',
      to: 'Modern UI/UX',
      metric: '99+ PageSpeed Benchmark',
      beforeDetail: 'Cluttered layouts with excessive neon glows, confusing navigation, and inaccessible contrast.',
      afterDetail: 'Minimalist warm palette, crisp borders, intuitive visual hierarchy, and full WCAG AA accessibility.',
    },
    {
      id: 3,
      from: 'Low online visibility',
      to: 'Better digital reach',
      metric: 'Top 3 Maps Geo-Rank',
      beforeDetail: 'Unindexed URLs, missing sitemaps, zero local presence on Google Maps, and content gap errors.',
      afterDetail: 'Active IndexNow protocol dispatch, verified Google Business Profile, and targeted Coimbatore regional keywords.',
    },
    {
      id: 4,
      from: 'One-time project',
      to: 'Long-term digital growth',
      metric: '100% Retainer Transparency',
      beforeDetail: 'Agencies that disappear after final delivery, leaving you with technical debt and broken dependencies.',
      afterDetail: 'Dedicated engineering partnership with custom configurators, no lock-in, and milestone transparency.',
    },
  ];

  const handleNextStep = () => {
    const next = (currentStepIdx + 1) % steps.length;
    setCurrentStepIdx(next);
    scrollToCard(next);
  };

  const handlePrevStep = () => {
    const prev = (currentStepIdx - 1 + steps.length) % steps.length;
    setCurrentStepIdx(prev);
    scrollToCard(prev);
  };

  const scrollToCard = (index: number) => {
    if (stepsTrackRef.current) {
      const cardWidth = 380;
      stepsTrackRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section aria-labelledby="how-we-work-heading" className="py-20 relative">
      {/* Workflow Gallery Section with Scrolling Cards (Image 4) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#cf5c36] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mb-2 font-['Barlow']">
            HOW WE WORK
          </p>
          <h2 id="how-we-work-heading" className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight font-['Barlow']">
            From your idea to a digital solution
          </h2>
          <p className="mt-3 text-[#7c7c7c] text-lg sm:text-xl font-['Lateef']">
            A simple, smarter way to build and launch scalable commercial systems. Experience each phase step-by-step.
          </p>

          {/* Step Stepper Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label="Workflow progress stepper">
            {steps.map((s, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={currentStepIdx === idx}
                aria-label={`Jump to Step ${s.step}: ${s.name}`}
                onClick={() => {
                  setCurrentStepIdx(idx);
                  scrollToCard(idx);
                }}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  currentStepIdx === idx
                    ? 'w-10 bg-[#cf5c36]'
                    : 'w-2.5 bg-[#7c7c7c]/30 hover:bg-[#7c7c7c]/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scrolling Cards Container matching Image 4 */}
        <div className="relative">
          <ul
            ref={stepsTrackRef}
            aria-label="Workflow steps list"
            tabIndex={0}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory px-2 focus:outline-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {steps.map((s, idx) => {
              const isCurrent = currentStepIdx === idx;
              return (
                <li
                  key={idx}
                  className={`flex-none w-[320px] sm:w-[380px] bg-white rounded-[28px] p-8 text-left snap-center relative overflow-hidden transition-all duration-300 border ${
                    isCurrent
                      ? 'border-[#cf5c36] shadow-lg shadow-[#cf5c36]/10 scale-[1.01]'
                      : 'border-[#7c7c7c]/20 hover:border-[#a66c59]/50 shadow-sm'
                  }`}
                >
                  {/* Large Background Step Number */}
                  <span
                    className="absolute right-5 top-2 font-extrabold text-7xl font-['Barlow'] opacity-10 select-none pointer-events-none text-[#000000]"
                    aria-hidden="true"
                  >
                    {s.step}
                  </span>

                  {/* Icon Box */}
                  <div
                    className="w-12 h-12 rounded-2xl border border-[#7c7c7c]/20 bg-[#eee5e9]/60 flex items-center justify-center text-xl mb-5 shadow-sm"
                    aria-hidden="true"
                  >
                    {s.icon}
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#a66c59] bg-[#efc88b]/20 px-2.5 py-0.5 rounded font-['Barlow'] inline-block mb-2">
                    {s.tag}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide mb-2 font-['Barlow'] text-[#000000]">
                    {s.name}
                  </h3>

                  <p className="text-[#000000] text-lg font-bold leading-snug mb-2 font-['Barlow']">
                    {s.lead}
                  </p>

                  <p className="text-[#7c7c7c] text-base leading-relaxed mb-4 font-['Lateef'] text-xl">
                    {s.detail}
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-[#000000] font-['Barlow'] pt-3 border-t border-[#eee5e9]">
                    {s.items.map((it, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cf5c36]" aria-hidden="true"></span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-[#eee5e9] text-[11px] text-[#7c7c7c] font-['Barlow'] flex items-center justify-between">
                    <span>{s.webReference}</span>
                    <span className="font-mono text-[#cf5c36] font-bold">Step {s.step}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Stepper Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-6 font-['Barlow']">
            <button
              onClick={handlePrevStep}
              className="px-5 py-2.5 text-xs font-bold text-[#000000] bg-white hover:bg-[#eee5e9] border border-[#7c7c7c]/30 rounded-full flex items-center gap-2 cursor-pointer shadow-sm"
              aria-label="Previous step"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Previous Step</span>
            </button>
            <span className="text-xs font-semibold text-[#7c7c7c]">
              Step {currentStepIdx + 1} of {steps.length}
            </span>
            <button
              onClick={handleNextStep}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#cf5c36] hover:bg-[#b84f2e] rounded-full flex items-center gap-2 cursor-pointer shadow-sm"
              aria-label="Next step"
            >
              <span>Next Step</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Why BlazeByte Interactive Transformation Section (Image 5 Reworked) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#cf5c36] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mb-2 font-['Barlow']">
            WHY BLAZEBYTE?
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight font-['Barlow']">
            We turn digital problems into <span className="text-[#cf5c36]">better possibilities.</span>
          </h2>
          <p className="mt-3 text-[#7c7c7c] text-lg sm:text-xl font-['Lateef']">
            Click any pillar below to inspect the interactive before-and-after transformation methodology.
          </p>
        </div>

        {/* 5 Transformation Cards Grid matching Image 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {problems.map((item, idx) => {
            const isSelected = activeTransformationIdx === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTransformationIdx(idx)}
                className={`p-6 rounded-[24px] border text-center transition-all duration-300 flex flex-col justify-between cursor-pointer font-['Barlow'] ${
                  isSelected
                    ? 'bg-white border-2 border-[#cf5c36] shadow-md shadow-[#cf5c36]/15 -translate-y-1'
                    : 'bg-white border-[#7c7c7c]/20 hover:border-[#a66c59]/50 shadow-sm'
                }`}
                aria-pressed={isSelected}
              >
                <div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#7c7c7c] mb-2 font-bold block">
                    {idx + 1}. {item.from}
                  </span>
                  <span className="text-[#cf5c36] text-sm my-1 block" aria-hidden="true">↓</span>
                  <b className="text-lg font-bold uppercase tracking-wider my-1 text-[#000000] block">
                    BlazeByte
                  </b>
                  <span className="text-[#cf5c36] text-sm my-1 block" aria-hidden="true">↓</span>
                  <span className="text-xs sm:text-sm font-bold text-[#cf5c36] mt-1 block">
                    {item.to}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-[#eee5e9] text-[10px] font-bold uppercase text-[#a66c59]">
                  {item.metric}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Transformation Deep Dive Panel */}
        <div className="bg-white rounded-[28px] p-8 border border-[#7c7c7c]/20 shadow-sm max-w-4xl mx-auto font-['Barlow']">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#eee5e9]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a66c59]">
                Interactive Transformation #{activeTransformationIdx + 1}
              </span>
              <h3 className="text-2xl font-extrabold text-[#000000] mt-1">
                From {problems[activeTransformationIdx].from} to {problems[activeTransformationIdx].to}
              </h3>
            </div>
            <div className="px-4 py-1.5 rounded-full bg-[#efc88b]/20 border border-[#a66c59]/30 text-xs font-bold text-[#cf5c36]">
              {problems[activeTransformationIdx].metric}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            <div className="p-5 rounded-2xl bg-[#eee5e9]/40 border border-[#7c7c7c]/15 space-y-2">
              <div className="text-xs font-bold uppercase text-[#7c7c7c] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>The Common Problem</span>
              </div>
              <p className="text-sm text-[#7c7c7c] leading-relaxed font-['Lateef'] text-xl">
                {problems[activeTransformationIdx].beforeDetail}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#cf5c36]/30 shadow-sm space-y-2">
              <div className="text-xs font-bold uppercase text-[#cf5c36] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#cf5c36]" />
                <span>The BlazeByte Solution</span>
              </div>
              <p className="text-sm text-[#000000] leading-relaxed font-['Lateef'] text-xl font-medium">
                {problems[activeTransformationIdx].afterDetail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
