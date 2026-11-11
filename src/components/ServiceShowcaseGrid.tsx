import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Bot,
  Globe,
  TrendingUp,
  SlidersHorizontal,
  Sparkles,
  Zap,
  Gauge,
  Phone,
  Layers,
} from 'lucide-react';

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
      highlights: [
        'Free, Plus & Pro Tiers',
        'Live Conversation Simulator',
        'WhatsApp Lead Routing (+91 77087 95342)',
        'CRM & Webhook Sync',
      ],
      cta: 'Launch Chatbot Demo',
      icon: <Bot className="w-8 h-8 text-[#cf5c36]" aria-hidden="true" />,
      iconBorder: 'border-[#cf5c36]/40',
      iconBg: 'bg-gradient-to-br from-[#cf5c36]/15 to-[#efc88b]/20',
    },
    {
      id: 'webdev',
      badge: 'INTERACTIVE SHOWCASE',
      title: 'Web Design & Development',
      tagline: 'HIGH-CONVERTING WEB APPLICATIONS & DIGITAL PORTALS',
      description:
        'Modern corporate websites, landing pages, and bespoke cloud portals built with React, Next.js, and modern styling engineered for sub-second speeds.',
      highlights: [
        'Desktop / Tablet / Mobile Previews',
        '10 Comprehensive Capabilities',
        'Custom Client Dashboards',
        'Sub-second LCP Guarantee (0.82s)',
      ],
      cta: 'Explore Device Demos',
      icon: <Globe className="w-8 h-8 text-[#a66c59]" aria-hidden="true" />,
      iconBorder: 'border-[#a66c59]/40',
      iconBg: 'bg-gradient-to-br from-[#a66c59]/15 to-[#eee5e9]',
    },
    {
      id: 'seo',
      badge: 'PLUS & PRO ONLY',
      title: 'SEO Services SaaS',
      tagline: 'ORGANIC VISIBILITY, INDEXING & LOCAL MAPS DOMINANCE',
      description:
        'Data-driven search engine optimization powered by historical audit telemetry, IndexNow protocol sync, content gap resolution, and Google Business Profile scaling.',
      highlights: [
        'Historical Project Telemetry',
        'GSC & IndexNow Validation',
        'Local Maps 3-Pack Strategy (#1 Rank)',
        'Strictly Plus & Pro Tiers',
      ],
      cta: 'View SEO Analytics',
      icon: <TrendingUp className="w-8 h-8 text-emerald-600" aria-hidden="true" />,
      iconBorder: 'border-emerald-500/40',
      iconBg: 'bg-gradient-to-br from-emerald-500/15 to-[#cf5c36]/15',
    },
    {
      id: 'custom-plan',
      badge: 'BESPOKE PACKAGE',
      title: 'Custom Plan Builder',
      tagline: 'CONFIGURE EXACT FEATURES FOR YOUR GROWTH ARCHITECTURE',
      description:
        'Select the exact combination of AI chatbot features, web infrastructure, SEO modules, and marketing automations to receive a transparent project proposal.',
      highlights: [
        'Multi-Step Visual Configurator',
        'Real-Time Price & Scope Tally',
        'No Rigid Lock-In (Cancel Anytime)',
        'Instant Structured Proposal',
      ],
      cta: 'Configure Custom Plan',
      icon: <SlidersHorizontal className="w-8 h-8 text-[#cf5c36]" aria-hidden="true" />,
      iconBorder: 'border-[#efc88b]',
      iconBg: 'bg-gradient-to-br from-[#efc88b]/30 to-[#cf5c36]/20',
    },
  ];

  // High-fidelity interactive preview UI components replacing faint SVGs
  const renderCardPreview = (id: string) => {
    switch (id) {
      case 'chatbot':
        return (
          <div className="w-full h-full bg-gradient-to-br from-white via-[#faf8f9] to-[#eee5e9] p-5 sm:p-6 flex flex-col justify-between font-['Barlow'] relative overflow-hidden border border-[rgba(124,124,124,0.18)] rounded-2xl shadow-inner">
            <div className="flex items-center justify-between border-b border-[rgba(124,124,124,0.18)] pb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#cf5c36] to-[#a66c59] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  <Bot className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#000000]">BlazeByte AI Assistant</div>
                  <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Autonomous Lead Capture Active
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#efc88b]/40 text-[#a66c59] border border-[#a66c59]/20 shadow-2xs">
                WhatsApp Linked
              </span>
            </div>

            <div className="space-y-2.5 py-3 text-xs sm:text-sm">
              <div className="p-3 rounded-2xl bg-white border border-[rgba(124,124,124,0.18)] text-[#000000] max-w-[88%] shadow-xs font-medium">
                "Hello! How can BlazeByte Studio accelerate your digital growth today?"
              </div>
              <div className="p-3 rounded-2xl bg-gradient-to-r from-[#cf5c36] to-[#a66c59] text-white ml-auto max-w-[82%] text-right font-semibold shadow-xs">
                "We need a custom dining web app with AI chatbot &amp; SEO."
              </div>
            </div>

            <div className="p-2.5 px-3.5 rounded-xl bg-white border border-[#cf5c36]/30 text-xs text-[#000000] flex items-center justify-between shadow-xs">
              <span className="font-semibold text-[#cf5c36]">
                Routing verified brief to WhatsApp (+91 77087 95342)...
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            </div>
          </div>
        );

      case 'webdev':
        return (
          <div className="w-full h-full bg-[#181210] p-5 flex flex-col justify-between text-white font-['Barlow'] rounded-2xl relative overflow-hidden shadow-inner">
            <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
              <div className="flex items-center gap-2 text-sm font-extrabold text-[#efc88b]">
                <Globe className="w-4 h-4 text-[#efc88b]" aria-hidden="true" />
                <span>Blaze Cafe Prototype Live Preview</span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-400/30">
                0.82s Sub-Second LCP
              </span>
            </div>

            <div className="py-3 text-center">
              <h4 className="text-lg sm:text-xl font-black tracking-tight text-white">
                Brown Sugar Oat Latte
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 mt-0.5">
                Oat milk, double espresso, brown sugar syrup, cinnamon dust
              </p>
              <div className="text-base font-extrabold text-[#efc88b] mt-2">
                ₹460 • Multi-Device Responsive Experience
              </div>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm text-stone-400 border-t border-white/15 pt-2.5">
              <span className="font-medium text-stone-300">Desktop • Tablet • Mobile Viewports</span>
              <span className="text-[#cf5c36] font-bold flex items-center gap-1">
                Inspect Interactive Demos &rarr;
              </span>
            </div>
          </div>
        );

      case 'seo':
        return (
          <div className="w-full h-full bg-gradient-to-br from-white via-[#faf8f9] to-[#eee5e9] p-5 sm:p-6 flex flex-col justify-between font-['Barlow'] rounded-2xl border border-[rgba(124,124,124,0.18)] shadow-inner">
            <div className="flex items-center justify-between border-b border-[rgba(124,124,124,0.18)] pb-2.5">
              <div>
                <span className="text-sm font-extrabold text-[#000000] block">
                  Search Health &amp; Telemetry
                </span>
                <span className="text-xs text-[#7c7c7c]">
                  https://www.blazebyte.shop • IndexNow Active
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-extrabold border border-emerald-300 shadow-2xs">
                94 / 100 HEALTH
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 py-2 text-center">
              <div className="p-2.5 rounded-xl bg-white border border-[rgba(124,124,124,0.18)] shadow-xs">
                <div className="text-xs font-semibold text-[#7c7c7c]">LCP Speed</div>
                <div className="text-base sm:text-lg font-black text-[#cf5c36]">0.82s</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[rgba(124,124,124,0.18)] shadow-xs">
                <div className="text-xs font-semibold text-[#7c7c7c]">Impressions</div>
                <div className="text-base sm:text-lg font-black text-emerald-700">+340%</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[rgba(124,124,124,0.18)] shadow-xs">
                <div className="text-xs font-semibold text-[#7c7c7c]">Maps Rank</div>
                <div className="text-base sm:text-lg font-black text-[#a66c59]">#1 Local</div>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-[#7c7c7c] flex items-center justify-between border-t border-[rgba(124,124,124,0.18)] pt-2.5">
              <span>Coimbatore, Tamil Nadu &amp; Global targeting</span>
              <span className="text-emerald-700 font-bold">100% GSC Validated</span>
            </div>
          </div>
        );

      case 'custom-plan':
        return (
          <div className="w-full h-full bg-gradient-to-br from-white via-[#faf8f9] to-[#eee5e9] p-5 sm:p-6 flex flex-col justify-between font-['Barlow'] rounded-2xl border border-[rgba(124,124,124,0.18)] shadow-inner">
            <div className="flex items-center justify-between border-b border-[rgba(124,124,124,0.18)] pb-2.5">
              <span className="text-sm font-extrabold text-[#000000]">
                Interactive Custom Plan Configurator
              </span>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#efc88b]/40 text-[#a66c59] border border-[#a66c59]/20 shadow-2xs">
                Save 20% Annual
              </span>
            </div>

            <div className="space-y-2 py-2 text-xs sm:text-sm">
              <div className="p-2 px-3 rounded-xl bg-white border border-[#cf5c36]/40 flex items-center justify-between shadow-xs">
                <span className="font-bold text-[#000000]">AI Chatbot Plus Tier</span>
                <span className="text-xs font-extrabold text-[#cf5c36]">INCLUDED [₹2,999/mo]</span>
              </div>
              <div className="p-2 px-3 rounded-xl bg-white border border-[#cf5c36]/40 flex items-center justify-between shadow-xs">
                <span className="font-bold text-[#000000]">Custom High-Speed Web Portal</span>
                <span className="text-xs font-extrabold text-[#cf5c36]">INCLUDED [₹35k Scope]</span>
              </div>
            </div>

            <div className="p-2.5 px-3 rounded-xl bg-white border border-[rgba(124,124,124,0.18)] flex items-center justify-between text-xs sm:text-sm shadow-xs">
              <span className="text-[#7c7c7c] font-medium">Configured Scope: ₹35,000 - ₹75,000</span>
              <span className="font-bold text-[#cf5c36]">No Lock-In &rarr;</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="services-overview" aria-labelledby="services-overview-title" className="py-24 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20 font-['Barlow']">
          <p className="text-[#cf5c36] text-sm sm:text-base uppercase tracking-[0.25em] font-extrabold mb-3">
            Four Core Pillars
          </p>
          <h2
            id="services-overview-title"
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#000000] tracking-tight leading-[1.1]"
          >
            Business-Focused Digital Systems
          </h2>
          <p className="mt-5 text-[#000000]/75 text-2xl sm:text-3xl font-['Lateef'] font-medium leading-relaxed max-w-3xl mx-auto">
            Experience our active simulators, inspect real architectural benchmarks, and tailor a software solution designed precisely for your enterprise.
          </p>
        </div>

        {/* 4 Service Cards Grid with Increased Font Sizes and Modern High-Contrast Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              tabIndex={0}
              role="region"
              aria-labelledby={`card-title-${service.id}`}
              className="bg-white/95 backdrop-blur-md rounded-[32px] p-8 sm:p-11 flex flex-col justify-between border border-[#7c7c7c]/25 hover:border-[#cf5c36] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group relative overflow-hidden focus:outline-none"
              onClick={() => onSelectService(service.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectService(service.id);
                }
              }}
            >
              <div>
                {/* Header Row: High-Contrast Modern Icon (Replaced old SVG) & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center p-3 border ${service.iconBorder} ${service.iconBg} shadow-sm group-hover:scale-105 transition-transform`}
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>

                  <span className="text-xs font-bold px-4 py-1.5 rounded-full border border-[#a66c59]/30 text-[#a66c59] bg-[#efc88b]/20 uppercase tracking-wider font-['Barlow'] shadow-2xs">
                    {service.badge}
                  </span>
                </div>

                {/* Service Cover Frame rendering Rich Live UI Preview */}
                <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#7c7c7c]/20 mb-8 bg-[#eee5e9]">
                  {renderCardPreview(service.id)}
                </div>

                {/* Card Title with increased font size */}
                <h3
                  id={`card-title-${service.id}`}
                  className="text-3xl sm:text-4xl font-black text-[#000000] mb-2 font-['Barlow'] tracking-tight group-hover:text-[#cf5c36] transition-colors"
                >
                  {service.title}
                </h3>

                {/* Card Tagline */}
                <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4 font-['Barlow'] text-[#cf5c36]">
                  {service.tagline}
                </div>

                {/* Description with increased font size */}
                <p className="text-xl sm:text-2xl text-[#000000]/80 leading-relaxed mb-8 font-['Lateef'] font-medium">
                  {service.description}
                </p>

                {/* Highlights with increased font size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-9 font-['Barlow']">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm sm:text-base font-bold text-[#000000]">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-[#cf5c36]" aria-hidden="true" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button with increased font size */}
              <button
                type="button"
                className="w-full py-4 px-7 rounded-full border border-[#7c7c7c]/25 bg-white group-hover:bg-[#cf5c36] text-[#000000] group-hover:text-white group-hover:border-[#cf5c36] text-base sm:text-lg font-bold flex items-center justify-between transition-all cursor-pointer shadow-sm group-hover:shadow-lg font-['Barlow']"
                aria-label={`${service.cta} for ${service.title}`}
              >
                <span>{service.cta}</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
