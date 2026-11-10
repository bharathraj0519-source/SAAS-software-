import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

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
      iconType: 'svg',
      iconSrc: '/assets/automation.svg',
      accentColor: '#8275f3',
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
      iconType: 'svg',
      iconSrc: '/assets/branding.svg',
      accentColor: '#63cbff',
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
      iconType: 'svg',
      iconSrc: '/assets/growth.svg',
      accentColor: '#50e3a4',
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
      iconType: 'image',
      iconSrc: '/assets/brain-glow.png',
      accentColor: '#d86bff',
      cta: 'Configure Custom Plan',
    },
  ];

  return (
    <section id="services-overview" className="py-20 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#65ffe3] text-sm uppercase tracking-[0.18em] font-semibold mb-3 font-['Barlow']">
            Four Core Pillars
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-['Barlow']">
            Business-Focused Digital Systems
          </h2>
          <p className="mt-4 text-[#cbd0dc] text-lg sm:text-xl font-['Lateef']">
            Experience our active simulators, inspect real architectural benchmarks, and tailor a software solution designed precisely for your enterprise.
          </p>
        </div>

        {/* 4 Service Cards Grid Styled as in index.html */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass rounded-[24px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-[#65ffe3] cursor-pointer group relative overflow-hidden"
              style={{
                borderColor: `rgba(99, 203, 255, 0.25)`,
              }}
              onClick={() => onSelectService(service.id)}
            >
              {/* Subtle back radial glow with accent color */}
              <div
                className="absolute -right-16 -top-16 w-52 h-52 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: service.accentColor }}
              ></div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center p-3 border shadow-lg group-hover:scale-110 transition-transform"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      borderColor: service.accentColor,
                      boxShadow: `0 0 20px ${service.accentColor}40`,
                    }}
                  >
                    <img
                      src={service.iconSrc}
                      alt={service.title}
                      className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                    />
                  </div>

                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full border bg-white/5 uppercase tracking-wider font-['Barlow']"
                    style={{ color: service.accentColor, borderColor: `${service.accentColor}60` }}
                  >
                    {service.badge}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-bold text-white mb-2 font-['Barlow'] transition-colors"
                  style={{ textShadow: `0 0 16px ${service.accentColor}40` }}
                >
                  {service.title}
                </h3>

                <div className="text-xs font-semibold uppercase tracking-wider mb-3 font-['Barlow']" style={{ color: service.accentColor }}>
                  {service.tagline}
                </div>

                <p className="text-base sm:text-lg text-[#d2d5df] leading-relaxed mb-6 font-['Lateef']">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2.5 mb-8 font-['Barlow']">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#e1e4eb]">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: service.accentColor }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className="pill w-full py-3 px-5 text-sm font-semibold text-white flex items-center justify-between transition-all group-hover:border-[#65ffe3]"
              >
                <span>{service.cta}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-[#65ffe3]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
