import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceShowcaseGridProps {
  onSelectService: (serviceId: string) => void;
}

export const ServiceShowcaseGrid: React.FC<ServiceShowcaseGridProps> = ({ onSelectService }) => {
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

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
      coverImage: '/assets/web-design-home.jpg',
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

  // Robust inline vector renderers for bulletproof visual display
  const renderFallbackIllustration = (id: string) => {
    switch (id) {
      case 'chatbot':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#faf8f9] to-[#eee5e9] p-5 flex flex-col justify-between font-['Barlow']">
            <div className="flex items-center justify-between border-b border-[rgba(124,124,124,0.18)] pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#cf5c36] text-white flex items-center justify-center font-bold text-xs">
                  BB
                </div>
                <div>
                  <div className="text-xs font-bold text-[#000000]">BlazeByte AI Assistant</div>
                  <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active Lead Capture
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#efc88b]/40 text-[#a66c59] border border-[#a66c59]/20">
                WhatsApp Linked
              </span>
            </div>
            <div className="space-y-2 text-xs py-2">
              <div className="p-2 rounded-xl bg-white border border-[rgba(124,124,124,0.15)] text-[#000000] max-w-[85%] shadow-2xs">
                "Hello! How can I assist your business growth today?"
              </div>
              <div className="p-2 rounded-xl bg-[#cf5c36] text-white ml-auto max-w-[78%] text-right font-medium shadow-2xs">
                "We need a custom web application with AI chat."
              </div>
            </div>
            <div className="p-2 rounded-xl bg-white/80 border border-[rgba(124,124,124,0.18)] text-[11px] text-[#7c7c7c] flex items-center justify-between">
              <span>Routing to WhatsApp architect (+91 77087 95342)...</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
          </div>
        );

      case 'webdev':
        return (
          <div className="w-full h-full bg-[#181210] p-4 flex flex-col justify-between text-white font-['Barlow']">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#efc88b]">
                <span>☕ Blaze Cafe Prototype</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-bold">
                0.82s LCP
              </span>
            </div>
            <div className="py-2 text-center">
              <h4 className="text-base font-extrabold tracking-tight">Brown Sugar Oat Latte</h4>
              <p className="text-xs text-stone-300">Oat milk, double espresso, brown sugar syrup</p>
              <div className="text-sm font-bold text-[#efc88b] mt-1">₹460 • Fast Checkout</div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-stone-400 border-t border-white/10 pt-2">
              <span>Responsive Web Portal</span>
              <span className="text-[#cf5c36] font-bold">Inspect Live &rarr;</span>
            </div>
          </div>
        );

      case 'seo':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#faf8f9] to-[#eee5e9] p-4 sm:p-5 flex flex-col justify-between font-['Barlow']">
            <div className="flex items-center justify-between border-b border-[rgba(124,124,124,0.18)] pb-2">
              <div>
                <span className="text-xs font-bold text-[#000000] block">Search Health Telemetry</span>
                <span className="text-[10px] text-[#7c7c7c]">blazebyte.shop • IndexNow Active</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
                94 / 100
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 py-1 text-center">
              <div className="p-2 rounded-xl bg-white border border-[rgba(124,124,124,0.15)] shadow-2xs">
                <div className="text-[10px] text-[#7c7c7c]">LCP Speed</div>
                <div className="text-sm font-extrabold text-[#cf5c36]">0.82s</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-[rgba(124,124,124,0.15)] shadow-2xs">
                <div className="text-[10px] text-[#7c7c7c]">Organic</div>
                <div className="text-sm font-extrabold text-emerald-600">+340%</div>
              </div>
              <div className="p-2 rounded-xl bg-white border border-[rgba(124,124,124,0.15)] shadow-2xs">
                <div className="text-[10px] text-[#7c7c7c]">Maps Rank</div>
                <div className="text-sm font-extrabold text-[#a66c59]">#1 Local</div>
              </div>
            </div>
            <div className="text-[11px] text-[#7c7c7c] flex items-center justify-between border-t border-[rgba(124,124,124,0.15)] pt-2">
              <span>Coimbatore &amp; Global indexing active</span>
              <span className="text-emerald-700 font-bold">100% Validated</span>
            </div>
          </div>
        );

      case 'custom-plan':
        return (
          <div className="w-full h-full bg-gradient-to-br from-[#faf8f9] to-[#eee5e9] p-4 sm:p-5 flex flex-col justify-between font-['Barlow']">
            <div className="flex items-center justify-between border-b border-[rgba(124,124,124,0.18)] pb-2">
              <span className="text-xs font-bold text-[#000000]">Modular Plan Configurator</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#efc88b]/40 text-[#a66c59] border border-[#a66c59]/20">
                Save 20% Annual
              </span>
            </div>
            <div className="space-y-1.5 py-1 text-xs">
              <div className="p-1.5 px-2.5 rounded-lg bg-white border border-[#cf5c36]/40 flex items-center justify-between shadow-2xs">
                <span className="font-semibold text-[#000000]">AI Chatbot Plus</span>
                <span className="text-[10px] font-bold text-[#cf5c36]">INCLUDED</span>
              </div>
              <div className="p-1.5 px-2.5 rounded-lg bg-white border border-[#cf5c36]/40 flex items-center justify-between shadow-2xs">
                <span className="font-semibold text-[#000000]">Custom Web App &amp; SEO</span>
                <span className="text-[10px] font-bold text-[#cf5c36]">INCLUDED</span>
              </div>
            </div>
            <div className="p-2 rounded-xl bg-white border border-[rgba(124,124,124,0.15)] flex items-center justify-between text-xs">
              <span className="text-[#7c7c7c]">Scope: ₹35k - ₹75k</span>
              <span className="font-bold text-[#cf5c36]">No Lock-In &rarr;</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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

        {/* 4 Service Cards Grid */}
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

                {/* Service Cover Image Frame with guaranteed fallback */}
                <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden border border-[#7c7c7c]/15 mb-6 bg-[#eee5e9] relative">
                  {failedImages[service.id] ? (
                    renderFallbackIllustration(service.id)
                  ) : (
                    <img
                      src={service.coverImage}
                      alt={`${service.title} cover preview`}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                      onError={() => handleImageError(service.id)}
                    />
                  )}
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
