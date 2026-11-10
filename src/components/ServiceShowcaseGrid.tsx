import React from 'react';
import { Bot, Globe, TrendingUp, Sliders, ArrowRight, CheckCircle2, Sparkles, Zap, Shield } from 'lucide-react';

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
        'Deploy conversational AI agents equipped with custom knowledge base ingestion, multi-step qualification workflows, and instant WhatsApp enquiry routing.',
      highlights: ['Free, Plus & Pro Tiers', 'Live Conversation Simulator', 'WhatsApp Lead Routing', 'CRM & Webhook Sync'],
      icon: Bot,
      color: 'from-[#2391FF]/20 to-[#202734]',
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
      icon: Globe,
      color: 'from-[#10b981]/20 to-[#202734]',
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
      icon: TrendingUp,
      color: 'from-[#8b5cf6]/20 to-[#202734]',
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
      icon: Sliders,
      color: 'from-[#f59e0b]/20 to-[#202734]',
      cta: 'Configure Custom Plan',
    },
  ];

  return (
    <section id="services-overview" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2391FF]/10 border border-[#2391FF]/30 text-xs font-semibold text-[#2391FF] uppercase tracking-wider mb-4">
            Commercial Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-['Barlow']">
            Four Core Pillars. One Unified SaaS Platform.
          </h2>
          <p className="mt-4 text-[#B7B09E] text-base sm:text-lg">
            Experience our active simulators, inspect real architectural benchmarks, and tailor a software solution designed precisely for your enterprise.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl glass-card p-8 flex flex-col justify-between overflow-hidden cursor-pointer"
                onClick={() => onSelectService(service.id)}
              >
                {/* Ambient Card Glow */}
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#2391FF]/10 rounded-full blur-3xl group-hover:bg-[#2391FF]/20 transition-all duration-300"></div>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2391FF]/20 to-transparent border border-[#2391FF]/30 flex items-center justify-center text-[#2391FF] group-hover:scale-110 transition-transform shadow-md shadow-[#2391FF]/10">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#B7B09E] group-hover:border-[#2391FF]/40 group-hover:text-white transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#2391FF] transition-colors font-['Barlow']">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-[#2391FF] mt-1 mb-3">
                    {service.tagline}
                  </div>
                  <p className="text-sm text-[#B7B09E] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2.5 mb-8">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#B7B09E]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2391FF] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  className="w-full py-3 px-4 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-[#2391FF] border border-white/10 hover:border-[#2391FF] transition-all flex items-center justify-between group-hover:bg-[#2391FF] shadow-md cursor-pointer"
                >
                  <span>{service.cta}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
