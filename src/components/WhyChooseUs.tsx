import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const stepsTrackRef = useRef<HTMLUListElement>(null);

  const steps = [
    {
      step: '01',
      name: 'Discover',
      icon: '🔍',
      color: '#0284c7',
      darkColor: '#63cbff',
      lead: 'We learn about your business, goals, audience, challenges, and ideas to understand what you actually need.',
      detail: 'Every strong project begins with clarity.',
      items: ['Business goals', 'Target audience', 'Requirements', 'Current problems'],
    },
    {
      step: '02',
      name: 'Plan',
      icon: '🧠',
      color: '#4f46e5',
      darkColor: '#7787ff',
      lead: 'Turn ideas into a clear strategy.',
      detail: 'We define the right solution, features, technology, timeline, and project direction.',
      items: ['Strategy', 'Features', 'Technology', 'Roadmap'],
    },
    {
      step: '03',
      name: 'Design',
      icon: '✨',
      color: '#15803d',
      darkColor: '#62ff29',
      lead: 'Create the experience.',
      detail: 'We transform the strategy into intuitive interfaces, visual identities, prototypes, and creative experiences.',
      items: ['UI/UX', 'Wireframes', 'Branding', 'Prototype'],
    },
    {
      step: '04',
      name: 'Build',
      icon: '💻',
      color: '#be185d',
      darkColor: '#ff70a9',
      lead: 'Turn designs into reality.',
      detail: 'Our development process brings the approved concept to life using modern technologies and scalable solutions.',
      items: ['Development', 'Integration', 'Testing', 'Optimization'],
    },
    {
      step: '05',
      name: 'Growth',
      icon: '🚀',
      color: '#b45309',
      darkColor: '#f3ff74',
      lead: 'Launch, improve, and scale.',
      detail: 'After launch, we continue helping you optimize your digital presence, automate processes, attract customers, and grow.',
      items: ['Marketing', 'Automation', 'Analytics', 'Support'],
    },
  ];

  const problems = [
    { from: 'Weak digital presence', to: 'A strong digital experience', color: '#9333ea', darkColor: '#c166f9' },
    { from: 'Repetitive manual work', to: 'Smart AI & automation', color: '#ea580c', darkColor: '#fb8c50' },
    { from: 'Outdated design', to: 'Modern UI/UX', color: '#059669', darkColor: '#33ffb7' },
    { from: 'Low online visibility', to: 'Better digital reach', color: '#2563eb', darkColor: '#71aaff' },
    { from: 'One-time project', to: 'Long-term digital growth', color: '#db2777', darkColor: '#ff92d9' },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (stepsTrackRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      stepsTrackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section aria-labelledby="how-we-work-heading" className="py-20 relative">
      {/* Workflow Gallery Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-emerald-600 dark:text-[#65ffe3] text-sm uppercase tracking-[0.18em] font-semibold mb-2 font-['Barlow']">
            How We Work
          </p>
          <h2 id="how-we-work-heading" className="text-3xl sm:text-5xl font-bold text-[var(--text-heading)] tracking-tight font-['Barlow']">
            From your idea to a digital solution
          </h2>
          <p className="mt-3 text-[var(--muted)] text-lg sm:text-xl font-['Lateef']">
            A simple, smarter way to build and launch scalable commercial systems.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <ul
            ref={stepsTrackRef}
            aria-label="Workflow steps list"
            tabIndex={0}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory px-2 focus:outline-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {steps.map((s, idx) => (
              <li
                key={idx}
                className="flex-none w-[320px] sm:w-[380px] glass rounded-[26px] p-8 text-left snap-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-sky-400/30 dark:border-sky-400/20"
              >
                {/* Large Background Step Number */}
                <span
                  className="absolute right-5 top-2 font-extrabold text-7xl font-['Barlow'] opacity-10 select-none pointer-events-none text-sky-800 dark:text-sky-300"
                  aria-hidden="true"
                >
                  {s.step}
                </span>

                <div
                  className="w-12 h-12 rounded-full border border-sky-500/40 dark:border-sky-400/40 flex items-center justify-center text-xl mb-6 shadow-sm bg-black/5 dark:bg-white/5"
                  aria-hidden="true"
                >
                  {s.icon}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider mb-2 font-['Barlow'] text-sky-700 dark:text-sky-400">
                  {s.name}
                </h3>

                <p className="text-[var(--text-heading)] text-lg font-semibold leading-snug mb-2 font-['Barlow']">
                  {s.lead}
                </p>

                <p className="text-[var(--muted)] text-base leading-relaxed mb-4 font-['Lateef']">
                  {s.detail}
                </p>

                <ul className="space-y-1.5 text-sm text-[var(--text)] font-['Barlow'] pt-2 border-t border-slate-200 dark:border-white/10" aria-label={`${s.name} deliverables`}>
                  {s.items.map((it, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-sky-400" aria-hidden="true"></span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Carousel Arrows */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => handleScroll('left')}
              className="pill px-5 py-2 text-sm text-[var(--text)] hover:text-sky-600 dark:hover:text-white flex items-center gap-1.5 cursor-pointer font-['Barlow']"
              aria-label="Previous step"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Prev</span>
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="pill px-5 py-2 text-sm text-[var(--text)] hover:text-sky-600 dark:hover:text-white flex items-center gap-1.5 cursor-pointer font-['Barlow']"
              aria-label="Next step"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Why BlazeByte Transformation Cards from index.html */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-emerald-600 dark:text-[#65ffe3] text-sm uppercase tracking-[0.18em] font-semibold mb-2 font-['Barlow']">
            Why BlazeByte?
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-[var(--text-heading)] tracking-tight font-['Barlow']">
            We turn digital problems into <span className="text-sky-600 dark:text-[#65ffe3]">better possibilities.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {problems.map((item, idx) => (
            <article
              key={idx}
              className="p-6 rounded-[24px] border border-sky-400/30 dark:border-[#65ffe3] glass flex flex-col justify-center text-center transition-all duration-300 hover:-translate-y-2 font-['Barlow']"
            >
              <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)] mb-2 font-medium">
                {idx + 1}. {item.from}
              </span>
              <span className="text-sky-600 dark:text-[#65ffe3] text-sm my-1" aria-hidden="true">↓</span>
              <b className="text-xl font-bold uppercase tracking-wide my-1.5 text-sky-700 dark:text-sky-300">
                BlazeByte
              </b>
              <span className="text-sky-600 dark:text-[#65ffe3] text-sm my-1" aria-hidden="true">↓</span>
              <span className="text-sm font-semibold text-[var(--text-heading)] mt-1">
                {item.to}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
