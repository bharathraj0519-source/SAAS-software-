import React, { useState } from 'react';
import {
  TrendingUp,
  Search,
  CheckCircle2,
  AlertTriangle,
  FileText,
  BarChart3,
  Calendar,
  Globe,
  MapPin,
  ShieldAlert,
  ArrowRight,
  Download,
  Info,
  Check,
  Zap,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { SEO_PLANS } from '../data/plansData';
import {
  SEO_HISTORICAL_RECORDS,
  SEO_METRIC_CARDS,
  HISTORICAL_CHART_DATA,
  SAMPLE_KEYWORDS,
  TECHNICAL_ISSUES,
} from '../data/seoDemoData';
import type { SubscriptionPlan } from '../types';

interface SeoModuleProps {
  onSelectPlan: (plan: SubscriptionPlan) => void;
  onOpenCustomPlan: () => void;
}

export const SeoModule: React.FC<SeoModuleProps> = ({ onSelectPlan, onOpenCustomPlan }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'keywords' | 'indexing' | 'technical' | 'local'>('overview');
  const [dateRange, setDateRange] = useState<'7d' | '28d' | '90d' | 'historical'>('historical');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadReport = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);

    const reportContent = `=====================================================
BLAZEBYTE STUDIO — HISTORICAL SEO PERFORMANCE AUDIT REPORT
Target Project: BlazeByte Studio (https://www.blazebyte.shop)
Report Classification: Historical Demonstration Record
Generated: ${new Date().toLocaleString()}
=====================================================

1. EXECUTIVE HEALTH SUMMARY:
- Overall Site Health: 94 / 100
- GSC Scanned Pages: 27 Pages
- Discovered Pages in Search: 18 Pages
- High-Priority Indexing Requests: 4 Submitted & Confirmed
- Compiled Production Routes: 45 Routes Clean
- IndexNow Verification: Key Hash Confirmed & Automated

2. RESOLVED CRITICAL ISSUES:
- /marketing routing content gap: RESOLVED & Restructured
- Local Google Maps Geo-query: RESOLVED for Coimbatore Region
- Google Business Profile (GBP): Primary Categories & Profile Aligned
- Clutch Agency Verification: COMPLETED

3. KEYWORD TRACKING FOCUS:
- web development studio coimbatore (Transactional, 1,300/mo)
- saas web application development (Commercial, 2,900/mo)
- business automation ai chatbot (Transactional, 880/mo)
- custom responsive landing page agency (Commercial, 1,100/mo)

4. NEXT GROWTH VECTOR:
- Continuous Google Business Profile visual post uploads.
- Dynamic Schema.org JSON-LD expansion across client case studies.
=====================================================`;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blazebyte-seo-audit-report-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="py-12 relative" id="seo-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2391FF]/10 border border-[#2391FF]/30 text-xs font-semibold text-[#2391FF] uppercase tracking-wider mb-3">
            Module 03 • Organic Growth Suite
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Barlow']">
            SEO Services & Search Intelligence
          </h2>
          <p className="mt-4 text-[#B7B09E] text-base sm:text-lg">
            Dominating organic search through rigorous technical hygiene, IndexNow instant dispatch, semantic content gap fixes, and Google Maps local 3-pack optimization.
          </p>
        </div>

        {/* Transparent Demo Data Disclaimer Pill */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3 max-w-4xl mx-auto mb-10">
          <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-[#B7B09E] leading-relaxed">
            <strong className="text-white">Historical Demonstration Telemetry:</strong> The analytics, route logs, and audit records below reflect historical project data from BlazeByte Studio (https://www.blazebyte.shop), including our 27 scanned pages, verified IndexNow key, and resolved /marketing content gaps. These serve as realistic proof-of-methodology rather than fabricated live customer metrics.
          </div>
        </div>

        {/* SEO Analytics Dashboard Frame */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-[#2391FF]/30 shadow-2xl mb-16">
          {/* Dashboard Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white font-['Barlow']">
                  Search Engine Telemetry Console
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#2391FF]/20 text-[#2391FF] border border-[#2391FF]/30">
                  DEMO DATA
                </span>
              </div>
              <div className="text-xs text-[#B7B09E] mt-0.5">
                Target Entity: <span className="text-white font-medium">https://www.blazebyte.shop</span> (BlazeByte Studio)
              </div>
            </div>

            {/* Date Range Selector & Export Action */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center p-1 bg-[#181e29] rounded-xl border border-white/10">
                {(['7d', '28d', '90d', 'historical'] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setDateRange(r)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium uppercase transition-all ${
                      dateRange === r
                        ? 'bg-[#2391FF] text-white shadow-md shadow-[#2391FF]/20'
                        : 'text-[#B7B09E] hover:text-white'
                    }`}
                  >
                    {r === 'historical' ? 'All-Time' : r}
                  </button>
                ))}
              </div>

              <button
                onClick={handleDownloadReport}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#2391FF]/40 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Download Audit Summary"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Downloaded</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 text-[#2391FF]" />
                    <span>Export Audit</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            {SEO_METRIC_CARDS.map((card, i) => (
              <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <div className="text-xs text-[#B7B09E]">{card.label}</div>
                <div className="text-2xl font-bold text-white mt-1 font-['Barlow']">{card.value}</div>
                <div className="text-[11px] text-emerald-400 font-medium mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{card.change}</span>
                </div>
                <div className="text-[10px] text-[#B7B09E]/70 mt-1">{card.subtext}</div>
              </div>
            ))}
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10 mb-6">
            {[
              { id: 'overview', label: 'Overview & Impressions', icon: BarChart3 },
              { id: 'indexing', label: 'Historical Records & GSC', icon: Globe },
              { id: 'keywords', label: 'Keyword Tracking', icon: Search },
              { id: 'technical', label: 'Technical SEO Hygiene', icon: Zap },
              { id: 'local', label: 'Local SEO & Maps', icon: MapPin },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#2391FF] text-white shadow-md shadow-[#2391FF]/25'
                      : 'text-[#B7B09E] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab 1: Overview Chart */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="glass-card p-5 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-white font-['Barlow']">
                      Search Impressions & Clicks (Telemetry Projection)
                    </h4>
                    <p className="text-xs text-[#B7B09E]">
                      Trend line following technical sitemap dispatch and /marketing gap clearance.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-[#2391FF]">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2391FF]"></span>
                      Impressions
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      Clicks
                    </span>
                  </div>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={HISTORICAL_CHART_DATA}>
                      <defs>
                        <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2391FF" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#2391FF" stopOpacity={0.0} />
                        </linearGradient>
                        <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2b3547" />
                      <XAxis dataKey="date" stroke="#838a98" fontSize={11} />
                      <YAxis stroke="#838a98" fontSize={11} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#181e29',
                          borderColor: 'rgba(35,145,255,0.3)',
                          borderRadius: '12px',
                          fontSize: '12px',
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="impressions"
                        stroke="#2391FF"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorImpressions)"
                      />
                      <Area
                        type="monotone"
                        dataKey="clicks"
                        stroke="#10b981"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorClicks)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Historical Records Table */}
          {activeTab === 'indexing' && (
            <div className="space-y-4 overflow-x-auto">
              <div className="text-xs text-[#B7B09E] mb-2">
                Historical BlazeByte Studio project audit records confirmed during production deployment:
              </div>
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-white">
                    <th className="py-2.5 px-3 font-semibold">Audit Record</th>
                    <th className="py-2.5 px-3 font-semibold">Category</th>
                    <th className="py-2.5 px-3 font-semibold">Observed Metric</th>
                    <th className="py-2.5 px-3 font-semibold">Status</th>
                    <th className="py-2.5 px-3 font-semibold">Verification Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-[#B7B09E]">
                  {SEO_HISTORICAL_RECORDS.map((rec) => (
                    <tr key={rec.id} className="hover:bg-white/[0.02]">
                      <td className="py-3 px-3 text-white font-medium">{rec.title}</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-white">
                          {rec.category}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[#2391FF] font-semibold">{rec.metric}</td>
                      <td className="py-3 px-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            rec.status === 'Verified' || rec.status === 'Completed' || rec.status === 'Cleared'
                              ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                          }`}
                        >
                          {rec.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 max-w-xs">{rec.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Tab 3: Keyword Tracking Table */}
          {activeTab === 'keywords' && (
            <div className="space-y-4 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-white">
                    <th className="py-2.5 px-3 font-semibold">Target Keyword</th>
                    <th className="py-2.5 px-3 font-semibold">Estimated Volume</th>
                    <th className="py-2.5 px-3 font-semibold">Difficulty Score</th>
                    <th className="py-2.5 px-3 font-semibold">Search Intent</th>
                    <th className="py-2.5 px-3 font-semibold">Target Status</th>
                    <th className="py-2.5 px-3 font-semibold">Commercial CPC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-[#B7B09E]">
                  {SAMPLE_KEYWORDS.map((kw, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02]">
                      <td className="py-3 px-3 text-white font-medium">{kw.keyword}</td>
                      <td className="py-3 px-3">{kw.volume}</td>
                      <td className="py-3 px-3">{kw.difficulty}</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded bg-[#2391FF]/10 text-[#2391FF] text-[10px]">
                          {kw.intent}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-emerald-400 font-medium">{kw.status}</td>
                      <td className="py-3 px-3 text-white">{kw.cpc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Tab 4: Technical Issues */}
          {activeTab === 'technical' && (
            <div className="space-y-3">
              {TECHNICAL_ISSUES.map((issue) => (
                <div
                  key={issue.id}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm font-['Barlow']">
                        {issue.title}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                          issue.status === 'Resolved'
                            ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        {issue.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#2391FF] font-mono">{issue.affectedUrl}</div>
                    <div className="text-[#B7B09E]">{issue.recommendation}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 5: Local SEO & Google Business Profile */}
          {activeTab === 'local' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#B7B09E]">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 font-['Barlow']">
                  <MapPin className="w-4 h-4 text-[#2391FF]" />
                  <span>Google Business Profile (GBP) Status</span>
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Listing Verification:</span>
                    <span className="text-emerald-400 font-medium">Verified Active</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Primary Category:</span>
                    <span className="text-white font-medium">Software Company / Web Design</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span>Coimbatore Geo-Targeting:</span>
                    <span className="text-emerald-400 font-medium">Rank Pack Cleared</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Follow-up Action Area:</span>
                    <span className="text-amber-400 font-medium">Weekly Visual Posts & Photos</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2 font-['Barlow']">
                  <Globe className="w-4 h-4 text-[#2391FF]" />
                  <span>IndexNow Protocol Handshake</span>
                </h4>
                <p className="leading-relaxed">
                  IndexNow automatically alerts Bing and Yandex the instant routes or URLs change, bypassing slow discovery crawls.
                </p>
                <div className="p-3 rounded-lg bg-[#181e29] border border-white/10 font-mono text-[11px] text-[#2391FF]">
                  Key Status: 200 OK Verified • auto-ping active
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SEO Pricing & Packages — PLUS and PRO ONLY (NO FREE PLAN) */}
        <div className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-2 border border-amber-500/20">
              Commercial Retainers (Plus & Pro Only)
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Barlow']">
              Select Your SEO Growth Plan
            </h3>
            <p className="mt-2 text-sm text-[#B7B09E]">
              SEO requires continuous technical crawl monitoring and strategic optimization. BlazeByte Studio offers dedicated Plus and Pro tiers.
            </p>

            {/* Billing Toggle */}
            <div className="mt-6 inline-flex items-center p-1 bg-[#181e29] rounded-xl border border-white/10">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-[#2391FF] text-white shadow-md shadow-[#2391FF]/20'
                    : 'text-[#B7B09E] hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  billingPeriod === 'yearly'
                    ? 'bg-[#2391FF] text-white shadow-md shadow-[#2391FF]/20'
                    : 'text-[#B7B09E] hover:text-white'
                }`}
              >
                <span>Annual Contract</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* 2 SEO Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {SEO_PLANS.map((plan) => {
              const isPopular = plan.isPopular;
              const displayPrice =
                billingPeriod === 'monthly'
                  ? `₹${plan.priceMonthly.toLocaleString('en-IN')}`
                  : `₹${Math.round(plan.priceYearly / 12).toLocaleString('en-IN')}`;

              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                    isPopular
                      ? 'glass-panel border-2 border-[#2391FF] shadow-2xl shadow-[#2391FF]/20'
                      : 'glass-card'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#2391FF] to-[#006ee6] text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-[#2391FF]/40">
                      Recommended For Scale
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-2xl font-bold text-white font-['Barlow']">{plan.name}</h4>
                      <span className="text-xs font-semibold uppercase text-[#2391FF] bg-[#2391FF]/10 px-2.5 py-0.5 rounded border border-[#2391FF]/30">
                        {plan.tier} Tier
                      </span>
                    </div>

                    <p className="text-xs text-[#B7B09E] mb-6 min-h-[32px]">{plan.tagline}</p>

                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white">{displayPrice}</span>
                        <span className="text-xs text-[#B7B09E]">
                          / month {billingPeriod === 'yearly' && '(billed annually)'}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#B7B09E] mt-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#2391FF]" />
                        <span>{plan.limits.frequency} • {plan.limits.crawledPages}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-semibold uppercase tracking-wider text-white">
                        Deliverables & Scope
                      </div>
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs">
                          {feat.included ? (
                            <CheckCircle2 className="w-4 h-4 text-[#2391FF] shrink-0 mt-0.5" />
                          ) : (
                            <span className="w-4 h-4 text-white/20 shrink-0 mt-0.5 text-center">✕</span>
                          )}
                          <span className={feat.included ? 'text-white' : 'text-white/40 line-through'}>
                            {feat.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#2391FF] to-[#006ee6] hover:from-[#3ea0ff] hover:to-[#2391FF] text-white shadow-lg shadow-[#2391FF]/30'
                        : 'bg-white/5 hover:bg-[#2391FF] text-white border border-white/10 hover:border-[#2391FF]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
