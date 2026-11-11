import React, { useState } from 'react';
import {
  Bot,
  Zap,
  TrendingUp,
  Sliders,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Phone,
  Gauge,
  Sparkles,
  Layers,
  Clock,
  ExternalLink,
} from 'lucide-react';

interface AgentBentoGridProps {
  className?: string;
}

export const AgentBentoGrid: React.FC<AgentBentoGridProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ai' | 'speed' | 'seo'>('all');
  const [interactiveCounter, setInteractiveCounter] = useState(340);

  return (
    <div className={`w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {/* Bento Grid Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 font-['Barlow']">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#efc88b]/40 border border-[#a66c59]/30 text-xs font-bold text-[#000000] uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#cf5c36]" aria-hidden="true" />
          <span>Autonomous SaaS Capabilities</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight leading-tight">
          Intelligent Systems Engineered for Commercial Scale
        </h2>
        <p className="mt-4 text-[#7c7c7c] text-lg sm:text-xl font-['Lateef'] leading-relaxed">
          Explore how BlazeByte Studio combines autonomous AI agents, sub-second web architectures, and precision organic search telemetry into one unified commercial platform.
        </p>
      </div>

      {/* Bento Grid Asymmetric Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 font-['Barlow']">
        {/* CARD 1 (Featured 2-column wide): Autonomous AI Agent Engine */}
        <div className="md:col-span-2 bg-white rounded-[28px] p-7 sm:p-8 border border-[rgba(124,124,124,0.22)] shadow-sm hover:border-[#cf5c36] transition-all flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#efc88b]/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#efc88b]/30 text-[#a66c59] border border-[#a66c59]/20 uppercase tracking-wider">
                Module 01 • AI Agents
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Response Latency &lt;380ms
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000000] mb-2">
              Autonomous AI Chatbots with WhatsApp Hand-off
            </h3>
            <p className="text-xs sm:text-sm text-[#7c7c7c] leading-relaxed mb-6">
              Our multi-tier conversational agents digest your product catalog, qualify prospect inquiries across Free, Plus, and Pro tiers, and route verified leads directly to WhatsApp.
            </p>

            {/* Interactive Chat Simulation Snippet */}
            <div className="p-4 rounded-2xl bg-[#faf8f9] border border-[rgba(124,124,124,0.18)] space-y-3 mb-6">
              <div className="flex items-center gap-2.5 text-xs text-[#7c7c7c] pb-2 border-b border-[rgba(124,124,124,0.14)]">
                <Bot className="w-4 h-4 text-[#cf5c36]" aria-hidden="true" />
                <span className="font-semibold text-[#000000]">Live Agent Telemetry</span>
                <span className="ml-auto text-[11px] text-emerald-700 font-medium">99.4% Qualification Accuracy</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-white border border-[rgba(124,124,124,0.14)] text-[#000000] max-w-[85%]">
                  "Hi! I can answer questions about BlazeByte services or route your proposal directly to WhatsApp."
                </div>
                <div className="p-2.5 rounded-xl bg-[#cf5c36] text-white ml-auto max-w-[80%] text-right font-medium">
                  "I need a quote for an online cafe food ordering website."
                </div>
                <div className="p-2.5 rounded-xl bg-white border border-[rgba(124,124,124,0.14)] text-[#000000] max-w-[90%]">
                  "Perfect! Check out our Blaze Cafe prototype. Connecting you to our lead architect at <strong>+91 77087 95342</strong>."
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[rgba(124,124,124,0.14)] text-xs text-[#7c7c7c]">
            <span className="font-semibold text-[#000000]">Available on Free, Plus &amp; Pro tiers</span>
            <span className="text-[#cf5c36] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Test Agent <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </span>
          </div>
        </div>

        {/* CARD 2: Sub-Second Speed Guarantee */}
        <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-[rgba(124,124,124,0.22)] shadow-sm hover:border-[#cf5c36] transition-all flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#eee5e9] flex items-center justify-center text-[#cf5c36] mb-5 border border-[rgba(124,124,124,0.18)]">
              <Gauge className="w-6 h-6" aria-hidden="true" />
            </div>

            <span className="text-[11px] font-bold text-[#a66c59] uppercase tracking-wider block mb-1">
              Performance Standard
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#000000] mb-2">
              Sub-Second LCP Guarantee
            </h3>
            <p className="text-xs text-[#7c7c7c] leading-relaxed mb-6">
              90+ Google PageSpeed benchmarks on mobile and desktop. Zero cumulative layout shift (CLS: 0.00) with edge caching.
            </p>

            {/* Score Ring Display */}
            <div className="p-4 rounded-2xl bg-[#faf8f9] border border-[rgba(124,124,124,0.18)] flex items-center justify-between">
              <div>
                <div className="text-3xl font-extrabold text-[#cf5c36]">99/100</div>
                <div className="text-[11px] text-[#7c7c7c]">Core Web Vitals</div>
              </div>
              <div className="text-right text-xs">
                <div className="font-bold text-[#000000]">0.82s LCP</div>
                <div className="text-emerald-700 font-semibold text-[11px]">42ms INP</div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[rgba(124,124,124,0.14)] flex items-center justify-between text-xs text-[#cf5c36] font-bold">
            <span>Verified Edge Architecture</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
          </div>
        </div>

        {/* CARD 3: SEO & Local Maps Ranking */}
        <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-[rgba(124,124,124,0.22)] shadow-sm hover:border-[#cf5c36] transition-all flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#eee5e9] flex items-center justify-center text-[#cf5c36] mb-5 border border-[rgba(124,124,124,0.18)]">
              <TrendingUp className="w-6 h-6" aria-hidden="true" />
            </div>

            <span className="text-[11px] font-bold text-[#a66c59] uppercase tracking-wider block mb-1">
              Organic Search
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#000000] mb-2">
              Top 3 Google Maps Geo-Rank
            </h3>
            <p className="text-xs text-[#7c7c7c] leading-relaxed mb-6">
              Dominant local search visibility with automated IndexNow protocol push, schema tagging, and regional ranking.
            </p>

            {/* Metric pill */}
            <div className="p-4 rounded-2xl bg-[#faf8f9] border border-[rgba(124,124,124,0.18)] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#7c7c7c]">Organic Impressions:</span>
                <span className="font-extrabold text-[#000000]">+{interactiveCounter}%</span>
              </div>
              <div className="w-full bg-[#eee5e9] h-2 rounded-full overflow-hidden">
                <div className="bg-[#cf5c36] h-full rounded-full transition-all duration-700" style={{ width: '84%' }}></div>
              </div>
              <div className="text-[10px] text-[#7c7c7c] pt-1">Coimbatore, Tamil Nadu &amp; Global target</div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[rgba(124,124,124,0.14)] flex items-center justify-between text-xs text-[#cf5c36] font-bold">
            <span>IndexNow Active</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
          </div>
        </div>

        {/* CARD 4: Custom Plan & Modular Flexibility */}
        <div className="bg-white rounded-[28px] p-7 sm:p-8 border border-[rgba(124,124,124,0.22)] shadow-sm hover:border-[#cf5c36] transition-all flex flex-col justify-between group">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#eee5e9] flex items-center justify-center text-[#cf5c36] mb-5 border border-[rgba(124,124,124,0.18)]">
              <Sliders className="w-6 h-6" aria-hidden="true" />
            </div>

            <span className="text-[11px] font-bold text-[#a66c59] uppercase tracking-wider block mb-1">
              Bespoke Pricing
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#000000] mb-2">
              No Rigid Lock-In Plans
            </h3>
            <p className="text-xs text-[#7c7c7c] leading-relaxed mb-6">
              Pick only the features you need. Real-time scope calculation with transparent monthly retainers and 20% annual discount.
            </p>

            <div className="space-y-2 text-xs">
              {['AI Chatbot Multi-Tier', 'Custom Web Portal', 'Local SEO & Telemetry', 'Cloud SLA & Backups'].map((feat, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-[#faf8f9] border border-[rgba(124,124,124,0.14)]">
                  <span className="text-[#000000] font-medium">{feat}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#cf5c36]" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[rgba(124,124,124,0.14)] flex items-center justify-between text-xs text-[#000000] font-bold">
            <span>Interactive Calculator</span>
            <ArrowRight className="w-4 h-4 text-[#cf5c36] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </div>
        </div>

        {/* CARD 5 (Featured 2-column wide): Enterprise Infrastructure & Continuous SLA */}
        <div className="md:col-span-2 bg-white rounded-[28px] p-7 sm:p-8 border border-[rgba(124,124,124,0.22)] shadow-sm hover:border-[#cf5c36] transition-all flex flex-col justify-between group relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#efc88b]/30 text-[#a66c59] border border-[#a66c59]/20 uppercase tracking-wider">
                Full-Funnel Partnership
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000000] mt-2">
                Long-Term Retainer &amp; Continuous Growth SLA
              </h3>
            </div>
            <div className="p-3 rounded-2xl bg-[#faf8f9] border border-[rgba(124,124,124,0.18)] text-right shrink-0">
              <div className="text-xs text-[#7c7c7c]">Engineer Response SLA</div>
              <div className="text-lg font-bold text-[#cf5c36]">&lt;1 Hour Guaranteed</div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#7c7c7c] leading-relaxed mb-6">
            We don't vanish after delivery. BlazeByte Studio partners with growing businesses for ongoing security patches, conversion rate optimization, local marketing campaigns, and continuous feature expansion.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[rgba(124,124,124,0.14)] text-xs">
            <div className="p-3 rounded-xl bg-[#faf8f9] border border-[rgba(124,124,124,0.14)]">
              <div className="font-bold text-[#000000]">Coimbatore HQ</div>
              <div className="text-[#7c7c7c] text-[11px] mt-0.5">Tamil Nadu, India</div>
            </div>
            <div className="p-3 rounded-xl bg-[#faf8f9] border border-[rgba(124,124,124,0.14)]">
              <div className="font-bold text-[#000000]">Direct WhatsApp</div>
              <div className="text-[#cf5c36] text-[11px] mt-0.5">+91 77087 95342</div>
            </div>
            <div className="p-3 rounded-xl bg-[#faf8f9] border border-[rgba(124,124,124,0.14)]">
              <div className="font-bold text-[#000000]">Network Sites</div>
              <div className="text-[#7c7c7c] text-[11px] mt-0.5">blazebyte.shop / .store / .info</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function AgentBentoGridDemo() {
  return (
    <AgentBentoGrid className="my-8" />
  );
}

export default AgentBentoGrid;
