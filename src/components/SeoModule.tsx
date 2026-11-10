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
    <section className="py-12 relative" id="seo-section" aria-labelledby="seo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-700 dark:text-[#2391FF] uppercase tracking-wider mb-3">
            Module 03 • Organic Growth Suite
          </div>
          <h2 id="seo-heading" className="text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight font-['Barlow']">
            SEO Services & Search Intelligence
          </h2>
          <p className="mt-4 text-[var(--muted)] text-base sm:text-lg">
            Dominating organic search through rigorous technical hygiene, IndexNow instant dispatch, semantic content gap fixes, and Google Maps local 3-pack optimization.
          </p>
        </div>

        {/* Transparent Demo Data Disclaimer Pill */}
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-start gap-3 max-w-4xl mx-auto mb-10">
          <Info className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="text-xs text-[var(--muted)] leading-relaxed">
            <strong className="text-[var(--text-heading)]">Historical Demonstration Telemetry:</strong> The analytics, route logs, and audit records below reflect historical project data from BlazeByte Studio (https://www.blazebyte.shop), including our 27 scanned pages, verified IndexNow key, and resolved /marketing content gaps. These serve as realistic proof-of-methodology rather than fabricated live customer metrics.
          </div>
        </div>

        {/* SEO Analytics Dashboard Frame */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-sky-400/30 shadow-2xl mb-16">
          {/* Dashboard Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-[var(--text-heading)] font-['Barlow']">
                  Search Engine Telemetry Console
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-[#2391FF] border border-sky-500/20">
                  DEMO DATA
                </span>
              </div>
              <div className="text-xs text-[var(--muted)] mt-0.5">
                Target Entity: <span className="text-[var(--text-heading)] font-medium">https://www.blazebyte.shop</span> (BlazeByte Studio)
              </div>
            </div>

            {/* Date Range Selector & Export Action */}
            <div className="flex items-center gap-3">
              <div role="group" aria-label="Date range selector" className="inline-flex items-center p-1 bg-slate-200/80 dark:bg-[#181e29] rounded-xl border border-slate-300 dark:border-white/10">
                {(['7d', '28d', '90d', 'historical'] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    aria-pressed={dateRange === r}
                    onClick={() => setDateRange(r)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium uppercase transition-all cursor-pointer ${
                      dateRange === r
                        ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-md shadow-sky-600/20'
                        : 'text-[var(--muted)] hover:text-[var(--text-heading)]'
                    }`}
                  >
                    {r === 'historical' ? 'All-Time' : r}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleDownloadReport}
                className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-[var(--text-heading)] bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
                aria-label="Download SEO Audit Summary"
                title="Download Audit Summary"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span className="text-emerald-600 dark:text-emerald-400">Downloaded</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
                    <span>Export Audit</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Metric Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
            {SEO_METRIC_CARDS.map((card, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5">
                <div className="text-xs text-[var(--muted)]">{card.label}</div>
                <div className="text-2xl font-bold text-[var(--text-heading)] mt-1 font-['Barlow']">{card.value}</div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                  <span>{card.change}</span>
                </div>
                <div className="text-[10px] text-[var(--muted)] mt-1">{card.subtext}</div>
              </div>
            ))}
          </div>

          {/* Interactive Navigation Tabs with ARIA */}
          <div role="tablist" aria-label="SEO telemetry sections" className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-white/10 mb-6">
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
                  role="tab"
                  id={`tab-seo-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-seo-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-md shadow-sky-600/25'
                      : 'text-[var(--muted)] hover:text-[var(--text-heading)] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab 1: Overview Chart */}
          {activeTab === 'overview' && (
            <div id="panel-seo-overview" role="tabpanel" aria-labelledby="tab-seo-overview" className="space-y-6">
              <div className="glass-card p-5 rounded-xl border border-slate-200 dark:border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-[var(--text-heading)] font-['Barlow']">
                      Search Impressions & Clicks (Telemetry Projection)
                    </h4>
                    <p className="text-xs text-[var(--muted)]">
                      Trend line following technical sitemap dispatch and /marketing gap clearance.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5 text-sky-600 dark:text-[#2391FF]">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-600 dark:bg-[#2391FF]" aria-hidden="true"></span>
                      Impressions
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400" aria-hidden="true"></span>
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
                      <CartesianGrid strokeDasharray="3 3" stroke="#94a3b833" />
                      <XAxis dataKey="date" stroke="#64748b" fontSize={11} />
                      <YAxis stroke="#64748b" fontSize={11} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'var(--panel)',
                          color: 'var(--text)',
                          borderColor: 'var(--card-border)',
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
            <div id="panel-seo-indexing" role="tabpanel" aria-labelledby="tab-seo-indexing" className="space-y-4 overflow-x-auto">
              <div className="text-xs text-[var(--muted)] mb-2">
                Historical BlazeByte Studio project audit records confirmed during production deployment:
              </div>
              <table className="w-full text-left text-xs" aria-label="Historical SEO Audit Records">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10 text-[var(--text-heading)]">
                    <th scope="col" className="py-2.5 px-3 font-semibold">Audit Record</th>
                    <th scope="col" className="py-2.5 px-3 font-semibold">Category</th>
                    <th scope="col" className="py-2.5 px-3 font-semibold">Observed Metric</th>
                    <th scope="col" className="py-2.5 px-3 font-semibold">Status</th>
                    <th scope="col" className="py-2.5 px-3 font-semibold">Verification Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-[var(--muted)]">
                  {SEO_HISTORICAL_RECORDS.map((rec) => (
                    <tr key={rec.id} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02]">
                      <th scope="row" className="py-3 px-3 text-[var(--text-heading)] font-medium text-left">{rec.title}</th>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-slate-300 dark:border-white/10 text-[10px] text-[var(--text-heading)]">
                          {rec.category}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-sky-700 dark:text-[#2391FF] font-semibold">{rec.metric}</td>
                      <td className="py-3 px-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            rec.status === 'Verified' || rec.status === 'Completed' || rec.status === 'Cleared'
                              ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30'
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
            <div id="panel-seo-keywords" role="tabpanel" aria-labelledby="tab-seo-keywords" className="space-y-4 overflow-x-auto">
              <table className="w-full text-left text-xs" aria-label="Target Keyword Tracking Telemetry">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-white/10 text-[var(--text-heading)]">
                    <th scope="col" className="py-2.5 px-3 font-semibold">Target Keyword</th>
                    <th scope="col" className="py-2.5 px-3 font-semibold">Estimated Volume</th>
                    <th scope="col" className="py-2.5 px-3 font-semibold">Difficulty Score</th>
                    <th scope="col" className="py-2.5 px-3 font-semibold">Search Intent</th>
                    <th scope="col" className="py-2.5 px-3 font-semibold">Target Status</th>
                    <th scope="col" className="py-2.5 px-3 font-semibold">Commercial CPC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-[var(--muted)]">
                  {SAMPLE_KEYWORDS.map((kw, idx) => (
                    <tr key={idx} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02]">
                      <th scope="row" className="py-3 px-3 text-[var(--text-heading)] font-medium text-left">{kw.keyword}</th>
                      <td className="py-3 px-3">{kw.volume}</td>
                      <td className="py-3 px-3">{kw.difficulty}</td>
                      <td className="py-3 px-3">
                        <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-[#2391FF] text-[10px]">
                          {kw.intent}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-emerald-700 dark:text-emerald-400 font-medium">{kw.status}</td>
                      <td className="py-3 px-3 text-[var(--text-heading)]">{kw.cpc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Tab 4: Technical Issues */}
          {activeTab === 'technical' && (
            <div id="panel-seo-technical" role="tabpanel" aria-labelledby="tab-seo-technical" className="space-y-3">
              {TECHNICAL_ISSUES.map((issue) => (
                <div
                  key={issue.id}
                  className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[var(--text-heading)] text-sm font-['Barlow']">
                        {issue.title}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                          issue.status === 'Resolved'
                            ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30'
                            : 'bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30'
                        }`}
                      >
                        {issue.status}
                      </span>
                    </div>
                    <div className="text-[11px] text-sky-700 dark:text-[#2391FF] font-mono">{issue.affectedUrl}</div>
                    <div className="text-[var(--muted)]">{issue.recommendation}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 5: Local SEO & Google Business Profile */}
          {activeTab === 'local' && (
            <div id="panel-seo-local" role="tabpanel" aria-labelledby="tab-seo-local" className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[var(--muted)]">
              <div className="p-5 rounded-xl bg-slate-100/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-3">
                <h4 className="text-sm font-bold text-[var(--text-heading)] flex items-center gap-2 font-['Barlow']">
                  <MapPin className="w-4 h-4 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
                  <span>Google Business Profile (GBP) Status</span>
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b border-slate-200 dark:border-white/5">
                    <span>Listing Verification:</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium">Verified Active</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200 dark:border-white/5">
                    <span>Primary Category:</span>
                    <span className="text-[var(--text-heading)] font-medium">Software Company / Web Design</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-200 dark:border-white/5">
                    <span>Coimbatore Geo-Targeting:</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium">Rank Pack Cleared</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Follow-up Action Area:</span>
                    <span className="text-amber-700 dark:text-amber-400 font-medium">Weekly Visual Posts & Photos</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-100/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-3">
                <h4 className="text-sm font-bold text-[var(--text-heading)] flex items-center gap-2 font-['Barlow']">
                  <Globe className="w-4 h-4 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
                  <span>IndexNow Protocol Handshake</span>
                </h4>
                <p className="leading-relaxed">
                  IndexNow automatically alerts Bing and Yandex the instant routes or URLs change, bypassing slow discovery crawls.
                </p>
                <div className="p-3 rounded-lg bg-slate-200/80 dark:bg-[#181e29] border border-slate-300 dark:border-white/10 font-mono text-[11px] text-sky-700 dark:text-[#2391FF]">
                  Key Status: 200 OK Verified • auto-ping active
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SEO Pricing & Packages — PLUS and PRO ONLY (NO FREE PLAN) */}
        <div className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-[11px] font-bold uppercase tracking-wider mb-2 border border-amber-500/20">
              Commercial Retainers (Plus & Pro Only)
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-heading)] font-['Barlow']">
              Select Your SEO Growth Plan
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Search engine optimization requires dedicated computing time, ongoing sitemap distribution, and competitive intelligence. We offer solely high-ROI Plus and Pro retainers.
            </p>

            {/* Billing Toggle */}
            <div role="group" aria-label="SEO billing frequency" className="mt-6 inline-flex items-center p-1 bg-slate-200/80 dark:bg-[#181e29] rounded-xl border border-slate-300 dark:border-white/10">
              <button
                type="button"
                aria-pressed={billingPeriod === 'monthly'}
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  billingPeriod === 'monthly'
                    ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-md shadow-sky-600/20'
                    : 'text-[var(--muted)] hover:text-[var(--text-heading)]'
                }`}
              >
                Monthly Retainer
              </button>
              <button
                type="button"
                aria-pressed={billingPeriod === 'yearly'}
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingPeriod === 'yearly'
                    ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-md shadow-sky-600/20'
                    : 'text-[var(--muted)] hover:text-[var(--text-heading)]'
                }`}
              >
                <span>Annual Contract</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-500/30">
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
                      ? 'glass-panel border-2 border-sky-500 shadow-2xl shadow-sky-500/20 -translate-y-2'
                      : 'glass-card'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-sky-600/40">
                      Recommended for Growth
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-[var(--text-heading)] font-['Barlow']">{plan.name}</h4>
                      <span className="text-xs font-semibold uppercase text-sky-700 dark:text-[#2391FF] bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                        {plan.tier}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--muted)] mb-6 min-h-[32px]">{plan.tagline}</p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-slate-200 dark:border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-[var(--text-heading)]">{displayPrice}</span>
                        <span className="text-xs text-[var(--muted)]">
                          / month {billingPeriod === 'yearly' && '(billed annually)'}
                        </span>
                      </div>
                      <div className="text-[11px] text-[var(--muted)] mt-1.5 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
                        <span>{plan.limits.crawledPages}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-heading)]">
                        Strategic Deliverables
                      </div>
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-[var(--text)]">{feat.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white shadow-lg shadow-sky-600/30'
                        : 'bg-black/5 hover:bg-sky-600 hover:text-white dark:bg-white/5 dark:hover:bg-[#2391FF] text-[var(--text)] dark:text-white border border-slate-300 dark:border-white/10'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
