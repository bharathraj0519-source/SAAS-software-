import React from 'react';
import { Cpu, Zap, ShieldCheck, Layers, Award, Clock } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Cpu,
      title: 'Architectural Excellence',
      description: 'Zero bloat, zero clumsy templates. We build bespoke solutions tailored precisely to your operational workflows and business requirements.',
    },
    {
      icon: Zap,
      title: 'Sub-Second Page Loads',
      description: 'Our web apps achieve top-tier Core Web Vitals with 90+ Google PageSpeed benchmarks for maximum conversion rates and search authority.',
    },
    {
      icon: Layers,
      title: 'Seamless WhatsApp & CRM Sync',
      description: 'Never lose a hot inquiry. Our chatbots and forms transfer qualified leads directly into your WhatsApp chats and central CRM instantly.',
    },
    {
      icon: ShieldCheck,
      title: 'Transparent, Fixed Scope',
      description: 'No hidden surprise bills. Every custom plan or subscription tier has clear deliverables, guaranteed response times, and upfront milestones.',
    },
    {
      icon: Clock,
      title: 'Rapid Deployment Cadence',
      description: 'From rapid 7-day landing page deployments to staged multi-week SaaS builds, our engineering sprints ensure quick time-to-market.',
    },
    {
      icon: Award,
      title: 'Continuous Optimization',
      description: 'We monitor crawl health, technical issues, indexation status, and conversational drop-offs to continually elevate your digital performance.',
    },
  ];

  return (
    <section className="py-20 relative bg-[#181e29]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2391FF]/10 border border-[#2391FF]/30 text-xs font-semibold text-[#2391FF] uppercase tracking-wider mb-4">
            The BlazeByte Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-['Barlow']">
            Engineered For Growth. Built Without Compromise.
          </h2>
          <p className="mt-4 text-[#B7B09E] text-base sm:text-lg">
            Why leading founders, expanding businesses, and regional leaders trust BlazeByte Studio to build their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-7 rounded-2xl relative overflow-hidden group hover:border-[#2391FF]/40"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2391FF]/10 border border-[#2391FF]/30 flex items-center justify-center text-[#2391FF] mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-['Barlow']">
                  {item.title}
                </h3>
                <p className="text-sm text-[#B7B09E] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
