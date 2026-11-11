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
      {/* Bento Grid Header with larger readable fonts */}
      <div className="text-center max-w-4xl mx-auto mb-16 font-['Barlow']">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#efc88b]/40 border border-[#a66c59]/30 text-xs sm:text-sm font-bold text-[#000000] uppercase tracking-wider mb-4 shadow-2xs">
          <Sparkles className="w-4 h-4 text-[#cf5c36]" aria-hidden="true" />
          <span>Autonomous SaaS Capabilities</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-[#000000] tracking-tight leading-tight">
          Intelligent Systems Engineered for Commercial Scale
        </h2>
        <p className="mt-5 text-[#000000]/75 text-2xl sm:text-3xl font-['Lateef'] font-medium leading-relaxed max-w-3xl mx-auto">
          Explore how BlazeByte Studio combines autonomous AI agents, sub-second web architectures, and precision organic search telemetry into one unified commercial platform.
        </p>
      </div>

      {/* Bento Grid Asymmetric Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 font-['Barlow']">
        {/* CARD 1 (Featured 2-column wide): Autonomous AI Agent Engine */}
        <div className="md:col-span-2 bg-white/95 backdrop-blur-md rounded-[32px] p-8 sm:p-10 border border-[rgba(124,124,124,0.25)] shadow-md hover:border-[#cf5c36] transition-all flex flex-col justify-between group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#efc88b]/15 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>

          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full bg-[#efc88b]/40 text-[#a66c59] border border-[#a66c59]/25 uppercase tracking-wider">
                Module 01 • AI Agents
              </span>
              <span className="text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-100 px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-emerald-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Response Latency &lt;380ms
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black text-[#000000] mb-3 leading-tight">
              Autonomous AI Chatbots with WhatsApp Hand-off
            </h3>
            <p className="text-base sm:text-lg text-[#000000]/80 leading-relaxed mb-6 font-medium">
              Our multi-tier conversational agents digest your product catalog, qualify prospect inquiries across Free, Plus, and Pro tiers, and route verified leads directly to WhatsApp.
            </p>

            {/* Interactive Chat Simulation Snippet */}
            <div className="p-5 rounded-2xl bg-[#faf8f9] border border-[rgba(124,124,124,0.22)] space-y-3 mb-6 shadow-inner">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#7c7c7c] pb-2.5 border-b border-[rgba(124,124,124,0.18)]">
                <Bot className="w-5 h-5 text-[#cf5c36]" aria-hidden="true" />
                <span className="font-bold text-[#000000]">Live Agent Telemetry</span>
                <span className="ml-auto text-xs sm:text-sm text-emerald-700 font-bold">99.4% Qualification Accuracy</span>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-white border border-[rgba(124,124,124,0.18)] text-[#000000] max-w-[85%] font-medium shadow-2xs">
                  "Hi! I can answer questions about BlazeByte services or route your proposal directly to WhatsApp."
                </div>
                <div className="p-3 rounded-xl bg-[#cf5c36] text-white ml-auto max-w-[80%] text-right font-semibold shadow-2xs">
                  "I need a quote for an online cafe food ordering website."
                </div>
                <div className="p-3 rounded-xl bg-white border border-[rgba(124,124,124,0.18)] text-[#000000] max-w-[90%] font-medium shadow-2xs">
                  "Perfect! Check out our Blaze Cafe prototype. Connecting you to our lead architect at <strong className="text-[#cf5c36]">+91 77087 95342</strong>."
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-5 border-t border-[rgba(124,124,124,0.18)] text-sm font-bold text-[#7c7c7c]">
            <span className="text-[#000000]">Available on Free, Plus &amp; Pro tiers</span>
            <span className="text-[#cf5c36] group-hover:translate-x-1 transition-transform flex items-center gap-1.5">
              Test Agent <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </div>
        </div>

        {/* CARD 2: Sub-Second Speed Guarantee */}
        <div className="bg-white/95 backdrop-blur-md rounded-[32px] p-8 border border-[rgba(124,124,124,0.25)] shadow-md hover:border-[#cf5c36] transition-all flex flex-col justify-between group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#cf5c36]/15 to-[#efc88b]/20 flex items-center justify-center text-[#cf5c36] mb-6 border border-[#cf5c36]/30">
              <Gauge className="w-7 h-7" aria-hidden="true" />
            </div>

            <span className="text-xs sm:text-sm font-extrabold text-[#a66c59] uppercase tracking-wider block mb-1">
              Performance Standard
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#000000] mb-3 leading-tight">
              Sub-Second LCP Guarantee
            </h3>
            <p className="text-sm sm:text-base text-[#000000]/80 leading-relaxed mb-6 font-medium">
              90+ Google PageSpeed benchmarks on mobile and desktop. Zero cumulative layout shift (CLS: 0.00) with edge caching.
            </p>

            {/* Score Ring Display */}
            <div className="p-4 rounded-2xl bg-[#faf8f9] border border-[rgba(124,124,124,0.2)] flex items-center justify-between shadow-inner">
              <div>
                <div className="text-4xl font-black text-[#cf5c36]">99/100</div>
                <div className="text-xs font-bold text-[#7c7c7c]">Core Web Vitals</div>
              </div>
              <div className="text-right text-sm">
                <div className="font-extrabold text-[#000000]">0.82s LCP</div>
                <div className="text-emerald-700 font-bold text-xs">42ms INP</div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[rgba(124,124,124,0.18)] flex items-center justify-between text-sm text-[#cf5c36] font-bold">
            <span>Verified Edge Architecture</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-600" aria-hidden="true" />
          </div>
        </div>

        {/* CARD 3: SEO & Local Maps Ranking */}
        <div className="bg-white/95 backdrop-blur-md rounded-[32px] p-8 border border-[rgba(124,124,124,0.25)] shadow-md hover:border-[#cf5c36] transition-all flex flex-col justify-between group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-[#cf5c36]/15 flex items-center justify-center text-emerald-600 mb-6 border border-emerald-500/30">
              <TrendingUp className="w-7 h-7" aria-hidden="true" />
            </div>

            <span className="text-xs sm:text-sm font-extrabold text-[#a66c59] uppercase tracking-wider block mb-1">
              Organic Search
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#000000] mb-3 leading-tight">
              Top 3 Google Maps Geo-Rank
            </h3>
            <p className="text-sm sm:text-base text-[#000000]/80 leading-relaxed mb-6 font-medium">
              Dominant local search visibility with automated IndexNow protocol push, schema tagging, and regional ranking.
            </p>

            {/* Metric pill */}
            <div className="p-4 rounded-2xl bg-[#faf8f9] border border-[rgba(124,124,124,0.2)] space-y-2.5 shadow-inner">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#7c7c7c] font-medium">Organic Impressions:</span>
                <span className="font-black text-[#000000] text-base">+{interactiveCounter}%</span>
              </div>
              <div className="w-full bg-[#eee5e9] h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#cf5c36] h-full rounded-full transition-all duration-700" style={{ width: '84%' }}></div>
              </div>
              <div className="text-xs text-[#7c7c7c] font-semibold pt-1">Coimbatore, Tamil Nadu &amp; Global target</div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[rgba(124,124,124,0.18)] flex items-center justify-between text-sm text-[#cf5c36] font-bold">
            <span>IndexNow Active</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-600" aria-hidden="true" />
          </div>
        </div>

        {/* CARD 4: Custom Plan & Modular Flexibility */}
        <div className="bg-white/95 backdrop-blur-md rounded-[32px] p-8 border border-[rgba(124,124,124,0.25)] shadow-md hover:border-[#cf5c36] transition-all flex flex-col justify-between group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#efc88b]/30 to-[#cf5c36]/20 flex items-center justify-center text-[#cf5c36] mb-6 border border-[#efc88b]/50">
              <Sliders className="w-7 h-7" aria-hidden="true" />
            </div>

            <span className="text-xs sm:text-sm font-extrabold text-[#a66c59] uppercase tracking-wider block mb-1">
              Bespoke Pricing
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#000000] mb-3 leading-tight">
              No Rigid Lock-In Plans
            </h3>
            <p className="text-sm sm:text-base text-[#000000]/80 leading-relaxed mb-6 font-medium">
              Pick only the features you need. Real-time scope calculation with transparent monthly retainers and 20% annual discount.
            </p>

            <div className="space-y-2 text-xs sm:text-sm">
              {['AI Chatbot Multi-Tier', 'Custom Web Portal', 'Local SEO & Telemetry', 'Cloud SLA & Backups'].map((feat, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-[#faf8f9] border border-[rgba(124,124,124,0.18)] shadow-2xs">
                  <span className="text-[#000000] font-bold">{feat}</span>
                  <CheckCircle2 className="w-4 h-4 text-[#cf5c36]" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-[rgba(124,124,124,0.18)] flex items-center justify-between text-sm text-[#000000] font-bold">
            <span>Interactive Calculator</span>
            <ArrowRight className="w-4 h-4 text-[#cf5c36] group-hover:translate-x-1.5 transition-transform" aria-hidden="true" />
          </div>
        </div>

        {/* CARD 5 (Featured 2-column wide): Enterprise Infrastructure & Continuous SLA */}
        <div className="md:col-span-2 bg-white/95 backdrop-blur-md rounded-[32px] p-8 sm:p-10 border border-[rgba(124,124,124,0.25)] shadow-md hover:border-[#cf5c36] transition-all flex flex-col justify-between group relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full bg-[#efc88b]/40 text-[#a66c59] border border-[#a66c59]/25 uppercase tracking-wider">
                Full-Funnel Partnership
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-[#000000] mt-3 leading-tight">
                Long-Term Retainer &amp; Continuous Growth SLA
              </h3>
            </div>
            <div className="p-4 rounded-2xl bg-[#faf8f9] border border-[rgba(124,124,124,0.2)] text-right shrink-0 shadow-inner">
              <div className="text-xs font-bold text-[#7c7c7c]">Engineer Response SLA</div>
              <div className="text-xl font-black text-[#cf5c36]">&lt;1 Hour Guaranteed</div>
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#000000]/80 leading-relaxed mb-6 font-medium">
            We don't vanish after delivery. BlazeByte Studio partners with growing businesses for ongoing security patches, conversion rate optimization, local marketing campaigns, and continuous feature expansion.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-[rgba(124,124,124,0.18)] text-sm">
            <div className="p-3.5 rounded-xl bg-[#faf8f9] border border-[rgba(124,124,124,0.18)] shadow-2xs">
              <div className="font-bold text-[#000000]">Coimbatore HQ</div>
              <div className="text-[#7c7c7c] text-xs font-medium mt-0.5">Tamil Nadu, India</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#faf8f9] border border-[rgba(124,124,124,0.18)] shadow-2xs">
              <div className="font-bold text-[#000000]">Direct WhatsApp</div>
              <div className="text-[#cf5c36] text-xs font-bold mt-0.5">+91 77087 95342</div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#faf8f9] border border-[rgba(124,124,124,0.18)] shadow-2xs">
              <div className="font-bold text-[#000000]">Network Sites</div>
              <div className="text-[#7c7c7c] text-xs font-medium mt-0.5">blazebyte.shop / .store / .info</div>
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
