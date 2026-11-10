import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceShowcaseGridProps {
  onSelectService: (serviceId: string) => void;
}

export const ServiceShowcaseGrid: React.FC<ServiceShowcaseGridProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'chatbot',
      badge: 'INTERACTIVE AI MODULE',
      title: 'AI Chatbot SaaS',
      tagline: 'AUTONOMOUS LEAD CAPTURE & 24/7 INTELLIGENT SUPPORT',
      description:
        'Deploy conversational AI agents equipped with custom business knowledge ingestion, multi-step qualification workflows, and instant WhatsApp enquiry routing.',
      highlights: ['Free, Plus & Pro Tiers', 'Live Conversation Simulator', 'WhatsApp Lead Routing', 'CRM & Webhook Sync'],
      iconSrc: '/assets/automation.svg',
      coverImage: '/assets/ai-chatbot-cover.svg',
      cta: 'Launch Chatbot Demo',
    },
    {
      id: 'webdev',
      badge: 'INTERACTIVE SHOWCASE',
      title: 'Web Design & Development',
      tagline: 'HIGH-CONVERTING WEB APPLICATIONS & DIGITAL PORTALS',
      description:
        'Modern corporate websites, landing pages, and bespoke cloud portals built with React, Next.js, and modern styling engineered for sub-second speeds.',
      highlights: ['Desktop / Tablet / Mobile Previews', '10 Comprehensive Capabilities', 'Custom Client Dashboards', 'Sub-second LCP Guarantee'],
      iconSrc: '/assets/branding.svg',
      coverImage: '/assets/web-design-home.jpg', // 1st user uploaded image
      cta: 'Explore Device Demos',
    },
    {
      id: 'seo',
      badge: 'PLUS & PRO ONLY',
      title: 'SEO Services SaaS',
      tagline: 'ORGANIC VISIBILITY, INDEXING & LOCAL MAPS DOMINANCE',
      description:
        'Data-driven search engine optimization powered by historical audit telemetry, IndexNow protocol sync, content gap resolution, and Google Business Profile scaling.',
      highlights: ['Historical Project Telemetry', 'GSC & IndexNow Validation', 'Local Maps 3-Pack Strategy', 'Strictly Plus & Pro Tiers'],
      iconSrc: '/assets/growth.svg',
      coverImage: '/assets/seo-service-cover.svg',
      cta: 'View SEO Analytics',
    },
    {
      id: 'custom-plan',
      badge: 'BESPOKE PACKAGE',
      title: 'Custom Plan Builder',
      tagline: 'CONFIGURE EXACT FEATURES FOR YOUR GROWTH ARCHITECTURE',
      description:
        'Select the exact combination of AI chatbot features, web infrastructure, SEO modules, and marketing automations to receive a transparent project proposal.',
      highlights: ['Multi-Step Visual Configurator', 'Real-Time Price & Scope Tally', 'No Rigid Lock-In', 'Instant Structured Proposal'],
      iconSrc: '/assets/brain-glow.png',
      coverImage: '/assets/custom-plan-cover.svg',
      cta: 'Configure Custom Plan',
    },
  ];

  return (
    <section id="services-overview" aria-labelledby="services-overview-title" className="py-20 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#cf5c36] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mb-3 font-['Barlow']">
            Four Core Pillars
          </p>
          <h2 id="services-overview-title" className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight font-['Barlow']">
            Business-Focused Digital Systems
          </h2>
          <p className="mt-4 text-[#7c7c7c] text-lg sm:text-xl font-['Lateef']">
            Experience our active simulators, inspect real architectural benchmarks, and tailor a software solution designed precisely for your enterprise.
          </p>
        </div>

        {/* 4 Service Cards Grid Styled as in Image 3 with Reworked SVGs & Cover Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              tabIndex={0}
              role="region"
              aria-labelledby={`card-title-${service.id}`}
              className="bg-white rounded-[28px] p-7 sm:p-9 flex flex-col justify-between border border-[#7c7c7c]/20 hover:border-[#cf5c36] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group relative overflow-hidden focus:outline-none"
              onClick={() => onSelectService(service.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectService(service.id);
                }
              }}
            >
              <div>
                {/* Header Row: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center p-3 border border-[#7c7c7c]/20 bg-[#eee5e9]/50 shadow-sm group-hover:scale-105 transition-transform"
                    aria-hidden="true"
                  >
                    <img
                      src={service.iconSrc}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <span className="text-[11px] font-bold px-3.5 py-1 rounded-full border border-[#a66c59]/30 text-[#a66c59] bg-[#efc88b]/15 uppercase tracking-wider font-['Barlow']">
                    {service.badge}
                  </span>
                </div>

                {/* Service Cover Image Frame */}
                <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#7c7c7c]/15 mb-6 bg-[#eee5e9]">
                  <img
                    src={service.coverImage}
                    alt={`${service.title} cover preview`}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <h3
                  id={`card-title-${service.id}`}
                  className="text-2xl sm:text-3xl font-extrabold text-[#000000] mb-1.5 font-['Barlow']"
                >
                  {service.title}
                </h3>

                <div className="text-xs font-bold uppercase tracking-wider mb-3 font-['Barlow'] text-[#cf5c36]">
                  {service.tagline}
                </div>

                <p className="text-base sm:text-lg text-[#7c7c7c] leading-relaxed mb-6 font-['Lateef']">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2.5 mb-8 font-['Barlow']">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#000000]">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-[#cf5c36]" aria-hidden="true" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                className="w-full py-3.5 px-6 rounded-full border border-[#7c7c7c]/25 bg-white group-hover:bg-[#cf5c36] text-[#000000] group-hover:text-white group-hover:border-[#cf5c36] text-sm font-bold flex items-center justify-between transition-all cursor-pointer shadow-sm"
                aria-label={`${service.cta} for ${service.title}`}
              >
                <span>{service.cta}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
