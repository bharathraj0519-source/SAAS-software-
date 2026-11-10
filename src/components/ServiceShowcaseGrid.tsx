import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceShowcaseGridProps {
  onSelectService: (serviceId: string) => void;
}

export const ServiceShowcaseGrid: React.FC<ServiceShowcaseGridProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'chatbot',
      badge: 'Interactive AI Module',
      title: 'AI Chatbot SaaS',
      tagline: 'Autonomous Lead Capture & 24/7 Intelligent Support',
      description:
        'Deploy conversational AI agents equipped with custom business knowledge ingestion, multi-step qualification workflows, and instant WhatsApp enquiry routing.',
      highlights: ['Free, Plus & Pro Tiers', 'Live Conversation Simulator', 'WhatsApp Lead Routing', 'CRM & Webhook Sync'],
      iconSrc: '/assets/automation.svg',
      accentDark: '#8275f3',
      accentLight: '#6d28d9',
      cta: 'Launch Chatbot Demo',
    },
    {
      id: 'webdev',
      badge: 'Interactive Showcase',
      title: 'Web Design & Development',
      tagline: 'High-Converting Web Applications & Digital Portals',
      description:
        'Modern corporate websites, landing pages, and bespoke cloud portals built with React, Next.js, and Tailwind CSS engineered for sub-second speeds.',
      highlights: ['Desktop / Tablet / Mobile Previews', '10 Comprehensive Capabilities', 'Custom Client Dashboards', 'Sub-second LCP Guarantee'],
      iconSrc: '/assets/branding.svg',
      accentDark: '#63cbff',
      accentLight: '#0284c7',
      cta: 'Explore Device Demos',
    },
    {
      id: 'seo',
      badge: 'Plus & Pro Only',
      title: 'SEO Services SaaS',
      tagline: 'Organic Visibility, Indexing & Local Maps Dominance',
      description:
        'Data-driven search engine optimization powered by historical audit telemetry, IndexNow protocol sync, content gap resolution, and Google Business Profile scaling.',
      highlights: ['Historical Project Telemetry', 'GSC & IndexNow Validation', 'Local Maps 3-Pack Strategy', 'Strictly Plus & Pro Tiers'],
      iconSrc: '/assets/growth.svg',
      accentDark: '#50e3a4',
      accentLight: '#047857',
      cta: 'View SEO Analytics',
    },
    {
      id: 'custom-plan',
      badge: 'Bespoke Package',
      title: 'Custom Plan Builder',
      tagline: 'Configure Exact Features for Your Growth Architecture',
      description:
        'Select the exact combination of AI chatbot features, web infrastructure, SEO modules, and marketing automations to receive a transparent project proposal.',
      highlights: ['Multi-Step Visual Configurator', 'Real-Time Price & Scope Tally', 'No Rigid Lock-In', 'Instant Structured Proposal'],
      iconSrc: '/assets/brain-glow.png',
      accentDark: '#d86bff',
      accentLight: '#be185d',
      cta: 'Configure Custom Plan',
    },
  ];

  return (
    <section id="services-overview" aria-labelledby="services-overview-title" className="py-20 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-emerald-600 dark:text-[#65ffe3] text-sm uppercase tracking-[0.18em] font-semibold mb-3 font-['Barlow']">
            Four Core Pillars
          </p>
          <h2 id="services-overview-title" className="text-3xl sm:text-5xl font-bold text-[var(--text-heading)] tracking-tight font-['Barlow']">
            Business-Focused Digital Systems
          </h2>
          <p className="mt-4 text-[var(--muted)] text-lg sm:text-xl font-['Lateef']">
            Experience our active simulators, inspect real architectural benchmarks, and tailor a software solution designed precisely for your enterprise.
          </p>
        </div>

        {/* 4 Service Cards Grid Styled as in index.html with Accessible Contrast */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              tabIndex={0}
              role="region"
              aria-labelledby={`card-title-${service.id}`}
              className="glass rounded-[24px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 dark:hover:border-[#65ffe3] cursor-pointer group relative overflow-hidden focus:outline-none"
              onClick={() => onSelectService(service.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectService(service.id);
                }
              }}
            >
              {/* Subtle back radial glow with accent color */}
              <div
                className="absolute -right-16 -top-16 w-52 h-52 rounded-full blur-3xl opacity-15 dark:opacity-20 pointer-events-none transition-opacity group-hover:opacity-30 dark:group-hover:opacity-40"
                style={{ backgroundColor: service.accentDark }}
                aria-hidden="true"
              ></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center p-3 border shadow-md group-hover:scale-105 transition-transform bg-black/5 dark:bg-white/5"
                    style={{
                      borderColor: `var(--card-border)`,
                    }}
                    aria-hidden="true"
                  >
                    <img
                      src={service.iconSrc}
                      alt=""
                      className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
                    />
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full border border-sky-500/30 dark:border-sky-400/30 text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-white/5 uppercase tracking-wider font-['Barlow']">
                    {service.badge}
                  </span>
                </div>

                <h3
                  id={`card-title-${service.id}`}
                  className="text-2xl sm:text-3xl font-bold text-[var(--text-heading)] mb-2 font-['Barlow'] transition-colors"
                >
                  {service.title}
                </h3>

                <div className="text-xs font-semibold uppercase tracking-wider mb-3 font-['Barlow'] text-sky-700 dark:text-sky-300">
                  {service.tagline}
                </div>

                <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed mb-6 font-['Lateef']">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2.5 mb-8 font-['Barlow']">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[var(--text)]">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className="pill w-full py-3 px-5 text-sm font-semibold flex items-center justify-between transition-all group-hover:border-sky-500 dark:group-hover:border-[#65ffe3] text-[var(--text)] hover:text-sky-600 dark:hover:text-white"
                aria-label={`${service.cta} for ${service.title}`}
              >
                <span>{service.cta}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-sky-600 dark:text-[#65ffe3]" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
