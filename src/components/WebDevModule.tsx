import React, { useState } from 'react';
import {
  Monitor,
  Tablet,
  Smartphone,
  Maximize2,
  Minimize2,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Code2,
  Send,
  Zap,
  Shield,
  Layers,
  ShoppingBag,
  RefreshCw,
  Gauge,
  Phone,
} from 'lucide-react';
import { storageService } from '../services/storageService';

interface WebDevModuleProps {
  onSuccessEnquiry: (id: string) => void;
  onOpenCustomPlan: () => void;
}

export const WebDevModule: React.FC<WebDevModuleProps> = ({ onSuccessEnquiry, onOpenCustomPlan }) => {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeDemoTemplate, setActiveDemoTemplate] = useState<'corporate' | 'saas' | 'ecommerce'>('corporate');

  // Enquiry form state
  const [customerName, setCustomerName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteType, setWebsiteType] = useState('Corporate Business Website');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Responsive Design',
    'Speed & Performance Optimization',
  ]);
  const [budgetRange, setBudgetRange] = useState('₹35,000 - ₹75,000');
  const [timeline, setTimeline] = useState('2-3 Weeks');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const capabilities = [
    {
      title: 'Custom Website Development',
      desc: 'Bespoke web platforms built from ground-up using React, Next.js, and TypeScript tailored to your company goals.',
      icon: Code2,
    },
    {
      title: 'Modern Website Redesign',
      desc: 'Transform outdated legacy sites into blazing-fast, mobile-first digital experiences that elevate brand prestige.',
      icon: RefreshCw,
    },
    {
      title: 'Corporate Business Websites',
      desc: 'Structured 5-10 page business portals highlighting credentials, case studies, team profiles, and service enquiry workflows.',
      icon: Layers,
    },
    {
      title: 'High-Converting Landing Pages',
      desc: 'Focused conversion funnels optimized for Google & Meta ad campaigns with frictionless lead capture forms.',
      icon: Zap,
    },
    {
      title: 'E-Commerce Storefronts',
      desc: 'Secure transactional web stores with product catalogs, shopping carts, automated email alerts, and Razorpay/Stripe checkout.',
      icon: ShoppingBag,
    },
    {
      title: 'Responsive & Adaptive Design',
      desc: 'Flawless visual execution across 4K displays, laptops, tablets, and smartphones without layout shift.',
      icon: Monitor,
    },
    {
      title: 'Performance & Core Web Vitals',
      desc: '90+ Google PageSpeed guarantees, sub-second Largest Contentful Paint (LCP), and edge-cached asset distribution.',
      icon: Gauge,
    },
    {
      title: 'Ongoing Website Maintenance',
      desc: 'Regular security patches, software updates, automated cloud backups, and uptime health monitoring.',
      icon: Shield,
    },
    {
      title: 'Custom SaaS & Cloud Portals',
      desc: 'Full-stack web applications featuring user authentication, role-based dashboards, and relational databases.',
      icon: Sparkles,
    },
    {
      title: 'Third-Party API Integrations',
      desc: 'Seamless connections with WhatsApp Business API, CRM systems, payment gateways, and custom webhooks.',
      icon: ExternalLink,
    },
  ];

  const featureOptions = [
    'Responsive Design',
    'Speed & Performance Optimization',
    'User Authentication & Dashboard',
    'Payment Gateway Integration',
    'WhatsApp Live Connect',
    'SEO Optimization & Schema',
    'CMS for Easy Content Updates',
    'Multi-language Support',
  ];

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!customerName.trim() || !email.trim() || !phone.trim() || !description.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const record = storageService.saveEnquiry({
        type: 'webdev',
        name: customerName,
        company: businessName,
        email,
        phone,
        projectType: websiteType,
        budgetRange,
        timeline,
        description: `Features: ${selectedFeatures.join(', ')} | Details: ${description}`,
      });

      setIsSubmitting(false);
      setFormSubmitted(true);
      onSuccessEnquiry(record.id);
    } catch {
      setIsSubmitting(false);
      setErrorMsg('Submission failed. Please check network connection.');
    }
  };

  return (
    <div className="py-12 relative" id="webdev-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2391FF]/10 border border-[#2391FF]/30 text-xs font-semibold text-[#2391FF] uppercase tracking-wider mb-3">
            Module 02 • High-Performance Web
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Barlow']">
            Web Design & Full-Stack Development
          </h2>
          <p className="mt-4 text-[#B7B09E] text-base sm:text-lg">
            Inspect our interactive multi-device showcase built directly from BlazeByte Studio design standards. Test responsive viewports, explore our 10 service capabilities, and submit your project requirements.
          </p>
        </div>

        {/* Interactive Device Preview Showcase */}
        <div className="mb-20">
          <div className="glass-panel rounded-2xl p-6 border border-[#2391FF]/25 shadow-2xl">
            {/* Viewport Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Device Preview:
                </span>
                <div className="inline-flex items-center p-1 bg-[#181e29] rounded-xl border border-white/10">
                  <button
                    onClick={() => setViewportMode('desktop')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                      viewportMode === 'desktop'
                        ? 'bg-[#2391FF] text-white shadow-md shadow-[#2391FF]/20'
                        : 'text-[#B7B09E] hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop (1920px)</span>
                  </button>
                  <button
                    onClick={() => setViewportMode('tablet')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                      viewportMode === 'tablet'
                        ? 'bg-[#2391FF] text-white shadow-md shadow-[#2391FF]/20'
                        : 'text-[#B7B09E] hover:text-white'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span>Tablet (768px)</span>
                  </button>
                  <button
                    onClick={() => setViewportMode('mobile')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                      viewportMode === 'mobile'
                        ? 'bg-[#2391FF] text-white shadow-md shadow-[#2391FF]/20'
                        : 'text-[#B7B09E] hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile (375px)</span>
                  </button>
                </div>
              </div>

              {/* Template Switcher & Full-screen */}
              <div className="flex items-center gap-3">
                <div className="text-xs text-[#B7B09E] hidden sm:block">Sample Theme:</div>
                <div className="inline-flex items-center p-1 bg-[#181e29] rounded-xl border border-white/10">
                  {(['corporate', 'saas', 'ecommerce'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setActiveDemoTemplate(t)}
                      className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-all ${
                        activeDemoTemplate === t
                          ? 'bg-white/10 text-white font-semibold'
                          : 'text-[#B7B09E] hover:text-white'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#B7B09E] hover:text-white transition-colors"
                  title={isFullScreen ? 'Exit Full Screen' : 'Full Screen Preview'}
                >
                  {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Virtual Device Frame */}
            <div
              className={`mt-6 mx-auto transition-all duration-300 bg-[#0d121c] border border-[#2391FF]/30 rounded-2xl overflow-hidden shadow-2xl relative ${
                viewportMode === 'desktop'
                  ? 'w-full h-[580px]'
                  : viewportMode === 'tablet'
                  ? 'w-[768px] max-w-full h-[580px] border-4 border-[#2b3547]'
                  : 'w-[375px] max-w-full h-[580px] border-8 border-[#2b3547] rounded-[36px]'
              }`}
            >
              {/* Device Notch / Header Bar */}
              <div className="bg-[#181e29] px-4 py-2 border-b border-white/10 flex items-center justify-between text-xs text-[#B7B09E]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="px-3 py-0.5 rounded-md bg-[#202734] border border-white/5 text-[11px] text-white/80 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>https://preview.blazebyte.shop/{activeDemoTemplate}-showcase</span>
                </div>
                <div className="text-[10px] uppercase font-mono text-[#2391FF]">
                  {viewportMode}
                </div>
              </div>

              {/* Scrollable Simulated Web App Canvas */}
              <div className="h-[calc(100%-38px)] overflow-y-auto p-6 bg-[#202734] text-white space-y-6 relative selection:bg-[#2391FF]">
                {/* Hero Inside Preview */}
                <div className="relative rounded-2xl p-8 bg-gradient-to-br from-[#181e29] to-[#202734] border border-[#2391FF]/30 overflow-hidden text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2391FF]/10 text-[#2391FF] text-[11px] font-semibold mb-4">
                    <Sparkles className="w-3 h-3" />
                    <span>
                      {activeDemoTemplate === 'corporate'
                        ? 'Next-Gen Corporate Enterprise Design'
                        : activeDemoTemplate === 'saas'
                        ? 'High-Yield Cloud SaaS Architecture'
                        : 'Modern E-Commerce Conversion Engine'}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-['Barlow'] max-w-xl mx-auto">
                    {activeDemoTemplate === 'corporate'
                      ? 'Building Trust Through Modern Digital Craft'
                      : activeDemoTemplate === 'saas'
                      ? 'Scale Your Business With Automated Precision'
                      : 'Frictionless Online Storefront Experience'}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B7B09E] max-w-md mx-auto mt-3">
                    Crafted with sub-second page performance, intuitive layout hierarchy, and seamless lead conversion funnels.
                  </p>

                  <div className="mt-6 flex items-center justify-center gap-3">
                    <span className="px-5 py-2 rounded-xl text-xs font-semibold bg-[#2391FF] text-white shadow-lg shadow-[#2391FF]/30">
                      Explore Live Demo
                    </span>
                    <span className="px-4 py-2 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-[#B7B09E]">
                      View Case Study
                    </span>
                  </div>
                </div>

                {/* 3 Interactive Cards inside Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-[#2391FF]/10 flex items-center justify-center text-[#2391FF] mb-3">
                      <Gauge className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-white">99 PageSpeed</div>
                    <div className="text-xs text-[#B7B09E] mt-1">Core Web Vitals optimized</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-[#2391FF]/10 flex items-center justify-center text-[#2391FF] mb-3">
                      <Shield className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-white">Cloudflare Edge</div>
                    <div className="text-xs text-[#B7B09E] mt-1">Global DDOS & CDN security</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-[#2391FF]/10 flex items-center justify-center text-[#2391FF] mb-3">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-white">WhatsApp Hook</div>
                    <div className="text-xs text-[#B7B09E] mt-1">Instant buyer dispatch</div>
                  </div>
                </div>

                {/* Sample Showcase Gallery Row */}
                <div className="p-5 rounded-xl bg-[#181e29] border border-white/10">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white mb-3">
                    Included Architectural Highlights
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-[#B7B09E]">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2391FF]" />
                      <span>Next.js 15 SSR</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2391FF]" />
                      <span>Tailwind CSS</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2391FF]" />
                      <span>Schema Markup</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2391FF]" />
                      <span>Zero Hydration Lag</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10 Web Development Capabilities */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Barlow']">
              Complete Web Development Capabilities
            </h3>
            <p className="mt-2 text-sm text-[#B7B09E]">
              From single high-impact landing pages to complex enterprise web platforms with customer dashboards and custom APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-xl flex flex-col justify-between group hover:border-[#2391FF]/40"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#2391FF]/10 border border-[#2391FF]/20 flex items-center justify-center text-[#2391FF] mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5 font-['Barlow']">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-[#B7B09E] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1 text-[11px] text-[#2391FF] font-medium">
                    <span>Explore scope</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Website Project Enquiry Form */}
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-[#2391FF]/30 shadow-2xl max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2391FF]/10 text-[#2391FF] text-xs font-semibold uppercase tracking-wider mb-2">
              Start Your Project
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Barlow']">
              Website Project Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#B7B09E] mt-1">
              Submit your project specifications for a structured timeline, architectural assessment, and pricing breakdown.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-4 animate-in zoom-in-95">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white font-['Barlow']">
                Enquiry Successfully Logged!
              </h4>
              <p className="text-xs sm:text-sm text-[#B7B09E] max-w-md mx-auto">
                Thank you, {customerName}. Your web project requirements have been recorded in the BlazeByte Studio portal. Our engineering leads will review the scope and reach out within 24 hours.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/917708795342?text=${encodeURIComponent(
                    `Hi BlazeByte Studio, I just submitted an enquiry for a ${websiteType}. My name is ${customerName}. Let's discuss!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center gap-2 shadow-lg shadow-emerald-600/30"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Fast-Track on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-medium text-[#B7B09E] hover:text-white bg-white/5 border border-white/10"
                >
                  Submit Another Requirement
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleEnquirySubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-white block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Bharath Raj"
                    className="w-full bg-[#202734] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-white block mb-1.5">
                    Business / Company Name
                  </label>
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. BlazeByte Technologies"
                    className="w-full bg-[#202734] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-white block mb-1.5">
                    Work Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@yourcompany.com"
                    className="w-full bg-[#202734] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-white block mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 77087 95342"
                    className="w-full bg-[#202734] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label className="text-xs font-semibold text-white block mb-1.5">
                    Website Type
                  </label>
                  <select
                    value={websiteType}
                    onChange={(e) => setWebsiteType(e.target.value)}
                    className="w-full bg-[#202734] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                  >
                    <option>Corporate Business Website</option>
                    <option>High-Converting Landing Page</option>
                    <option>Custom SaaS Web Application</option>
                    <option>E-Commerce Storefront</option>
                    <option>Portfolio & Personal Brand</option>
                    <option>Complete Website Redesign</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-white block mb-1.5">
                    Budget Preference
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-[#202734] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                  >
                    <option>₹15,000 - ₹35,000 (Starter)</option>
                    <option>₹35,000 - ₹75,000 (Professional)</option>
                    <option>₹75,000 - ₹1,50,000 (Enterprise)</option>
                    <option>₹1,50,000+ (Custom Scaled Architecture)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-white block mb-1.5">
                    Preferred Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-[#202734] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                  >
                    <option>1-2 Weeks (Urgent Sprint)</option>
                    <option>2-3 Weeks (Standard)</option>
                    <option>4-6 Weeks (Comprehensive Build)</option>
                    <option>Flexible Timeline</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-white block mb-2">
                  Select Required Features
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {featureOptions.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat);
                    return (
                      <button
                        type="button"
                        key={feat}
                        onClick={() => toggleFeature(feat)}
                        className={`text-left text-xs p-2.5 rounded-xl border transition-all ${
                          isChecked
                            ? 'bg-[#2391FF]/15 border-[#2391FF] text-white font-medium'
                            : 'bg-white/[0.02] border-white/10 text-[#B7B09E] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 ${isChecked ? 'text-[#2391FF]' : 'text-white/20'}`}
                          />
                          <span>{feat}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-white block mb-1.5">
                  Project Description & Requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us about your brand, what pages you need, any reference websites, and key business goals..."
                  className="w-full bg-[#202734] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#B7B09E]/50 focus:outline-none focus:border-[#2391FF]"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={onOpenCustomPlan}
                  className="text-xs text-[#2391FF] hover:underline flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Prefer to pick features step-by-step? Try Custom Plan Builder</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2391FF] to-[#0070e0] hover:from-[#3ea0ff] hover:to-[#2391FF] shadow-lg shadow-[#2391FF]/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Logging Enquiry...' : 'Submit Project Enquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
