import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const stepsTrackRef = useRef<HTMLUListElement>(null);

  const steps = [
    {
      step: '01',
      name: 'Discover',
      icon: '🔍',
      color: '#63cbff',
      lead: 'We learn about your business, goals, audience, challenges, and ideas to understand what you actually need.',
      detail: 'Every strong project begins with clarity.',
      items: ['Business goals', 'Target audience', 'Requirements', 'Current problems'],
    },
    {
      step: '02',
      name: 'Plan',
      icon: '🧠',
      color: '#7787ff',
      lead: 'Turn ideas into a clear strategy.',
      detail: 'We define the right solution, features, technology, timeline, and project direction.',
      items: ['Strategy', 'Features', 'Technology', 'Roadmap'],
    },
    {
      step: '03',
      name: 'Design',
      icon: '✨',
      color: '#62ff29',
      lead: 'Create the experience.',
      detail: 'We transform the strategy into intuitive interfaces, visual identities, prototypes, and creative experiences.',
      items: ['UI/UX', 'Wireframes', 'Branding', 'Prototype'],
    },
    {
      step: '04',
      name: 'Build',
      icon: '💻',
      color: '#ff70a9',
      lead: 'Turn designs into reality.',
      detail: 'Our development process brings the approved concept to life using modern technologies and scalable solutions.',
      items: ['Development', 'Integration', 'Testing', 'Optimization'],
    },
    {
      step: '05',
      name: 'Growth',
      icon: '🚀',
      color: '#f3ff74',
      lead: 'Launch, improve, and scale.',
      detail: 'After launch, we continue helping you optimize your digital presence, automate processes, attract customers, and grow.',
      items: ['Marketing', 'Automation', 'Analytics', 'Support'],
    },
  ];

  const problems = [
    { from: 'Weak digital presence', to: 'A strong digital experience', color: '#c166f9' },
    { from: 'Repetitive manual work', to: 'Smart AI & automation', color: '#fb8c50' },
    { from: 'Outdated design', to: 'Modern UI/UX', color: '#33ffb7' },
    { from: 'Low online visibility', to: 'Better digital reach', color: '#71aaff' },
    { from: 'One-time project', to: 'Long-term digital growth', color: '#ff92d9' },
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (stepsTrackRef.current) {
      const offset = direction === 'left' ? -380 : 380;
      stepsTrackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative">
      {/* Workflow Gallery Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[#65ffe3] text-sm uppercase tracking-[0.18em] font-semibold mb-2 font-['Barlow']">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-['Barlow']">
            From your idea to a digital solution
          </h2>
          <p className="mt-3 text-[#9ea6bd] text-lg sm:text-xl font-['Lateef']">
            A simple, smarter way to build and launch scalable commercial systems.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <ul
            ref={stepsTrackRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory px-2"
            style={{ scrollbarWidth: 'none' }}
          >
            {steps.map((s, idx) => (
              <li
                key={idx}
                className="flex-none w-[320px] sm:w-[380px] glass rounded-[26px] p-8 text-left snap-center relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
                style={{
                  border: `1px solid ${s.color}45`,
                  boxShadow: `0 0 30px ${s.color}20`,
                }}
              >
                {/* Large Background Step Number */}
                <span
                  className="absolute right-5 top-2 font-extrabold text-7xl font-['Barlow'] opacity-15 select-none pointer-events-none"
                  style={{ color: s.color }}
                >
                  {s.step}
                </span>

                <div
                  className="w-12 h-12 rounded-full border flex items-center justify-center text-xl mb-6 shadow-md"
                  style={{ borderColor: s.color, boxShadow: `0 0 18px ${s.color}50` }}
                >
                  {s.icon}
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-bold uppercase tracking-wider mb-2 font-['Barlow']"
                  style={{ color: s.color }}
                >
                  {s.name}
                </h3>

                <p className="text-white text-lg font-semibold leading-snug mb-2 font-['Barlow']">
                  {s.lead}
                </p>

                <p className="text-[#c9cfdd] text-base leading-relaxed mb-4 font-['Lateef']">
                  {s.detail}
                </p>

                <ul className="space-y-1.5 text-sm text-[#eef1f5] font-['Barlow'] pt-2 border-t border-white/10">
                  {s.items.map((it, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }}></span>
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
              className="pill px-5 py-2 text-sm text-white hover:border-[#65ffe3] flex items-center gap-1.5 cursor-pointer font-['Barlow']"
              aria-label="Previous step"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Prev</span>
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="pill px-5 py-2 text-sm text-white hover:border-[#65ffe3] flex items-center gap-1.5 cursor-pointer font-['Barlow']"
              aria-label="Next step"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Why BlazeByte Transformation Cards from index.html */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-[#65ffe3] text-sm uppercase tracking-[0.18em] font-semibold mb-2 font-['Barlow']">
            Why BlazeByte?
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-['Barlow']">
            We turn digital problems into <span className="text-[#65ffe3]">better possibilities.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {problems.map((item, idx) => (
            <article
              key={idx}
              className="p-6 rounded-[24px] border-[1.5px] border-[#65ffe3] bg-white/[0.035] backdrop-blur-md flex flex-col justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_28px_rgba(101,255,227,0.3)] font-['Barlow']"
            >
              <span className="text-xs uppercase tracking-[0.16em] text-[#d6d9e4] mb-2 font-medium">
                {idx + 1}. {item.from}
              </span>
              <span className="text-[#65ffe3] text-sm my-1">↓</span>
              <b
                className="text-xl font-bold uppercase tracking-wide my-1.5"
                style={{ color: item.color }}
              >
                BlazeByte
              </b>
              <span className="text-[#65ffe3] text-sm my-1">↓</span>
              <span className="text-sm font-semibold text-white mt-1">
                {item.to}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
