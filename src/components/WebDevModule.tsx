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
  Briefcase,
  Utensils,
  CheckSquare,
  Globe,
  Building,
  Target,
  Award,
} from 'lucide-react';
import { storageService } from '../services/storageService';
import { GITHUB_DEMO_REPOS, type GitHubDemoRepo } from '../data/githubReposData';

interface WebDevModuleProps {
  onSuccessEnquiry: (id: string) => void;
  onOpenCustomPlan: () => void;
}

export const WebDevModule: React.FC<WebDevModuleProps> = ({ onSuccessEnquiry, onOpenCustomPlan }) => {
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedRepoId, setSelectedRepoId] = useState<string>('blaze-cafe-');
  const [previewMode, setPreviewMode] = useState<'simulated' | 'live'>('simulated');

  // Interactive simulated states for repositories
  const [activeTabTask, setActiveTabTask] = useState<'tasks' | 'assessments' | 'team'>('tasks');
  const [cafeCategory, setCafeCategory] = useState<'all' | 'coffee' | 'bites' | 'desserts'>('all');
  const [cafeCartCount, setCafeCartCount] = useState<number>(1);

  // Enquiry form state
  const [customerName, setCustomerName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [websiteType, setWebsiteType] = useState('Custom SaaS Web Application');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Responsive Design',
    'User Authentication & Dashboard',
    'Speed & Performance Optimization',
  ]);
  const [budgetRange, setBudgetRange] = useState('₹35,000 - ₹75,000');
  const [timeline, setTimeline] = useState('2-3 Weeks');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const currentRepo = GITHUB_DEMO_REPOS.find((r) => r.id === selectedRepoId) || GITHUB_DEMO_REPOS[0];

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
        description: `Project: ${currentRepo.title} | Features: ${selectedFeatures.join(
          ', '
        )} | Details: ${description}`,
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
    <section className="py-12 relative" id="webdev-section" aria-labelledby="webdev-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#efc88b]/40 border border-[#a66c59]/30 text-xs font-semibold text-[#000000] uppercase tracking-wider mb-3 font-['Barlow']">
            Module 02 • High-Performance Web
          </div>
          <h2 id="webdev-heading" className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight font-['Barlow']">
            Web Design & Full-Stack Development
          </h2>
          <p className="mt-4 text-[#7c7c7c] text-lg sm:text-xl font-['Lateef']">
            Explore live production web architectures engineered by <strong className="text-[#000000]">BlazeByte Studio</strong>. Test multi-device responsive viewports, interact with real business demos, and configure your custom enterprise web project.
          </p>
        </div>

        {/* Commercial Showcase Projects Selector Bar */}
        <div className="mb-6 bg-white rounded-2xl p-4 sm:p-5 border border-[rgba(124,124,124,0.22)] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#000000] font-['Barlow']">
            <span className="w-2.5 h-2.5 rounded-full bg-[#cf5c36]" aria-hidden="true"></span>
            <span className="font-semibold text-[#000000]">Active Web Showcase:</span>
            <span className="text-[#cf5c36] font-semibold">{currentRepo.title}</span>
          </div>

          {/* Project Selection Tabs with Tablist ARIA */}
          <div role="tablist" aria-label="Web showcase applications" className="flex flex-wrap items-center gap-2">
            {GITHUB_DEMO_REPOS.map((repo) => (
              <button
                key={repo.id}
                role="tab"
                id={`project-tab-${repo.id}`}
                aria-selected={selectedRepoId === repo.id}
                aria-controls="project-preview-panel"
                onClick={() => setSelectedRepoId(repo.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold font-['Barlow'] transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedRepoId === repo.id
                    ? 'bg-[#cf5c36] text-white shadow-sm'
                    : 'bg-[#eee5e9]/70 text-[#7c7c7c] hover:text-[#000000] hover:bg-[#eee5e9] border border-[rgba(124,124,124,0.22)]'
                }`}
              >
                <span>{repo.name}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentRepo.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#cf5c36] hover:bg-[#a66c59] flex items-center gap-1.5 font-['Barlow'] transition-colors"
              aria-label={`Open live site for ${currentRepo.title} (opens in new tab)`}
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Open Live Site</span>
            </a>
          </div>
        </div>

        {/* Interactive Multi-Device Emulator */}
        <div className="mb-20">
          <div className="bg-white rounded-[28px] p-6 border border-[rgba(124,124,124,0.22)] shadow-sm">
            {/* Viewport Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[rgba(124,124,124,0.18)] font-['Barlow']">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[#000000] uppercase tracking-wider">
                  Device Viewport:
                </span>
                <div role="group" aria-label="Device viewport preview selector" className="inline-flex items-center p-1 bg-[#eee5e9]/70 rounded-xl border border-[rgba(124,124,124,0.2)]">
                  <button
                    type="button"
                    aria-pressed={viewportMode === 'desktop'}
                    onClick={() => setViewportMode('desktop')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewportMode === 'desktop'
                        ? 'bg-[#cf5c36] text-white shadow-sm'
                        : 'text-[#7c7c7c] hover:text-[#000000]'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Desktop (1920px)</span>
                  </button>
                  <button
                    type="button"
                    aria-pressed={viewportMode === 'tablet'}
                    onClick={() => setViewportMode('tablet')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewportMode === 'tablet'
                        ? 'bg-[#cf5c36] text-white shadow-sm'
                        : 'text-[#7c7c7c] hover:text-[#000000]'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Tablet (768px)</span>
                  </button>
                  <button
                    type="button"
                    aria-pressed={viewportMode === 'mobile'}
                    onClick={() => setViewportMode('mobile')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewportMode === 'mobile'
                        ? 'bg-[#cf5c36] text-white shadow-sm'
                        : 'text-[#7c7c7c] hover:text-[#000000]'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Mobile (375px)</span>
                  </button>
                </div>
              </div>

              {/* Preview Rendering Mode & Fullscreen */}
              <div className="flex items-center gap-3">
                <div role="group" aria-label="Preview render mode" className="inline-flex items-center p-1 bg-[#eee5e9]/70 rounded-xl border border-[rgba(124,124,124,0.2)]">
                  <button
                    type="button"
                    aria-pressed={previewMode === 'simulated'}
                    onClick={() => setPreviewMode('simulated')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      previewMode === 'simulated'
                        ? 'bg-[#cf5c36] text-white font-semibold'
                        : 'text-[#7c7c7c] hover:text-[#000000]'
                    }`}
                  >
                    Interactive Prototype
                  </button>
                  <button
                    type="button"
                    aria-pressed={previewMode === 'live'}
                    onClick={() => setPreviewMode('live')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      previewMode === 'live'
                        ? 'bg-[#a66c59] text-white font-semibold'
                        : 'text-[#7c7c7c] hover:text-[#000000]'
                    }`}
                  >
                    Live Web Frame
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="p-2 rounded-lg bg-[#eee5e9] hover:bg-stone-300 text-[#7c7c7c] hover:text-[#000000] transition-colors cursor-pointer"
                  aria-label={isFullScreen ? 'Exit Full Screen Preview' : 'Full Screen Preview'}
                  title={isFullScreen ? 'Exit Full Screen' : 'Full Screen Preview'}
                >
                  {isFullScreen ? <Minimize2 className="w-4 h-4" aria-hidden="true" /> : <Maximize2 className="w-4 h-4" aria-hidden="true" />}
                </button>
              </div>
            </div>

            {/* Virtual Device Frame */}
            <div
              id="project-preview-panel"
              role="region"
              aria-label={`Interactive preview of ${currentRepo.title}`}
              className={`mt-6 mx-auto transition-all duration-300 bg-[#faf8f9] border border-[rgba(124,124,124,0.25)] rounded-2xl overflow-hidden shadow-md relative ${
                viewportMode === 'desktop'
                  ? 'w-full h-[650px]'
                  : viewportMode === 'tablet'
                  ? 'w-[768px] max-w-full h-[650px] border-4 border-slate-300'
                  : 'w-[375px] max-w-full h-[650px] border-8 border-slate-400 rounded-[38px]'
              }`}
            >
              {/* Device Header Bar */}
              <div className="bg-white px-4 py-2.5 border-b border-[rgba(124,124,124,0.18)] flex items-center justify-between text-xs text-[#7c7c7c] font-['Barlow']">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                </div>
                <div className="px-3.5 py-0.5 rounded-md bg-[#eee5e9]/70 border border-[rgba(124,124,124,0.2)] text-[11px] text-[#000000] font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true"></span>
                  <span className="truncate max-w-[280px]">{currentRepo.liveUrl}</span>
                </div>
                <div className="text-[10px] uppercase font-mono text-[#cf5c36]">
                  {viewportMode}
                </div>
              </div>

              {/* Viewport Content */}
              {previewMode === 'live' ? (
                <div className="h-[calc(100%-42px)] w-full bg-white relative">
                  <iframe
                    src={currentRepo.liveUrl}
                    title={currentRepo.title}
                    className="w-full h-full border-none"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    loading="lazy"
                  />
                </div>
              ) : (
                /* Interactive Prototype Canvas for the selected project */
                <div className="h-[calc(100%-42px)] overflow-y-auto p-6 bg-[#faf8f9] text-[#000000] space-y-6">
                  {/* PROJECT 1: BLAZE CAFE (FEATURING 2ND USER IMAGE) */}
                  {selectedRepoId === 'blaze-cafe-' && (
                    <div className="space-y-6 font-['Barlow']">
                      {/* Top Banner featuring the 2nd user image */}
                      <div className="relative rounded-2xl overflow-hidden border border-[rgba(124,124,124,0.25)] shadow-sm bg-stone-900 text-white">
                        <img
                          src="/assets/web-service-blaze-cafe.jpg"
                          alt="Blaze Cafe Artisan Dining & Online Food Ordering Interface"
                          className="w-full h-64 sm:h-72 object-cover object-top opacity-90 hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#efc88b] text-[#000000] text-xs font-bold uppercase w-fit mb-2">
                            Hospitality & E-Commerce Web Service
                          </div>
                          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                            Blaze Cafe — Artisan Dining & Digital Ordering
                          </h3>
                          <p className="text-xs sm:text-sm text-stone-300 max-w-xl mt-1">
                            A small cafe built around slow brews and honest pastry. Look through today's favorites, then order ahead — pay online or settle up with cash when you collect it.
                          </p>
                          <div className="mt-4 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                              Open • Kitchen closes at 6pm
                            </span>
                            <span className="text-stone-400 text-xs">•</span>
                            <span className="text-xs text-[#efc88b]">Monsoon Pour: Cardamom Mocha + Bun from ₹599</span>
                          </div>
                        </div>
                      </div>

                      {/* Interactive Cafe Controls */}
                      <div className="p-5 rounded-2xl bg-white border border-[rgba(124,124,124,0.22)] space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                          <div>
                            <h4 className="text-base font-bold text-[#000000]">Explore Today's Menu</h4>
                            <p className="text-xs text-[#7c7c7c]">Filter items, review ingredients, and simulate instant digital order checkout.</p>
                          </div>
                          {/* Cafe Category Pills */}
                          <div className="flex gap-1.5 bg-[#eee5e9] p-1 rounded-xl w-fit">
                            {(['all', 'coffee', 'bites', 'desserts'] as const).map((cat) => (
                              <button
                                key={cat}
                                onClick={() => setCafeCategory(cat)}
                                className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all cursor-pointer ${
                                  cafeCategory === cat
                                    ? 'bg-[#cf5c36] text-white shadow-sm'
                                    : 'text-[#7c7c7c] hover:text-[#000000]'
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Menu Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {[
                            {
                              name: 'Brown Sugar Oat Latte',
                              cat: 'coffee',
                              desc: 'Oat milk, double espresso, brown sugar syrup, cinnamon dust.',
                              price: '₹460',
                              badge: "Today's Favorite",
                            },
                            {
                              name: 'Monsoon Pour Coffee',
                              cat: 'coffee',
                              desc: 'Warm cardamom mocha paired with fresh cinnamon brioche bun.',
                              price: '₹599',
                              badge: 'Seasonal Special',
                            },
                            {
                              name: 'Artisan Avocado Sourdough',
                              cat: 'bites',
                              desc: 'Crushed avocado, microgreens, roasted pumpkin seeds, chili flakes.',
                              price: '₹340',
                              badge: 'Chef Choice',
                            },
                            {
                              name: 'Belgian Truffle Waffle',
                              cat: 'desserts',
                              desc: 'Fresh Belgian waffle, 70% dark chocolate ganache, toasted hazelnut.',
                              price: '₹390',
                              badge: 'Fresh Bake',
                            },
                            {
                              name: 'Slow-Drip Kyoto Cold Brew',
                              cat: 'coffee',
                              desc: '12-hour cold extraction, subtle floral notes, served over clear sphere ice.',
                              price: '₹310',
                              badge: 'Cold Brewed',
                            },
                            {
                              name: 'Wild Blueberry Cheesecake',
                              cat: 'desserts',
                              desc: 'New York style baked cream cheese, simmered Nilgiri blueberries.',
                              price: '₹420',
                              badge: 'Best Dessert',
                            },
                          ]
                            .filter((i) => cafeCategory === 'all' || i.cat === cafeCategory)
                            .map((item, idx) => (
                              <div
                                key={idx}
                                className="p-4 rounded-xl bg-[#faf8f9] border border-[rgba(124,124,124,0.22)] flex flex-col justify-between hover:border-[#cf5c36] transition-all"
                              >
                                <div>
                                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#efc88b]/60 text-[#000000] font-semibold uppercase">
                                    {item.badge}
                                  </span>
                                  <h5 className="text-base font-bold text-[#000000] mt-2">{item.name}</h5>
                                  <p className="text-xs text-[#7c7c7c] mt-1 leading-relaxed">{item.desc}</p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-[rgba(124,124,124,0.18)] flex items-center justify-between">
                                  <span className="text-base font-extrabold text-[#cf5c36]">{item.price}</span>
                                  <button
                                    onClick={() => setCafeCartCount(cafeCartCount + 1)}
                                    className="px-3 py-1 rounded-lg bg-[#cf5c36] text-white font-bold text-xs hover:bg-[#a66c59] transition-colors cursor-pointer"
                                  >
                                    Add to Order
                                  </button>
                                </div>
                              </div>
                            ))}
                        </div>

                        {/* Order Summary Pill */}
                        <div className="p-3.5 rounded-xl bg-[#eee5e9]/70 border border-[rgba(124,124,124,0.2)] flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <Utensils className="w-4 h-4 text-[#cf5c36]" aria-hidden="true" />
                            <span className="font-semibold text-[#000000]">
                              Simulated Cart: {cafeCartCount} item(s) selected
                            </span>
                          </div>
                          <a
                            href="https://blaze-byte-rcwb.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#cf5c36] font-semibold hover:underline flex items-center gap-1"
                          >
                            <span>Open Live Cafe Deployment</span>
                            <ExternalLink className="w-3 h-3" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 2: WORK TRACKER SAAS */}
                  {selectedRepoId === 'blaze-app' && (
                    <div className="space-y-5 font-['Barlow']">
                      <div className="p-6 rounded-2xl bg-white border border-[rgba(124,124,124,0.25)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase mb-2">
                            Enterprise Operations SaaS
                          </div>
                          <h3 className="text-2xl font-bold text-[#000000]">
                            Work Tracker & Team Assessment Suite
                          </h3>
                          <p className="text-xs text-[#7c7c7c] mt-1">
                            Team workspace for tracking daily tasks, work hours, self-assessments, and WhatsApp pending alerts.
                          </p>
                        </div>
                        <a
                          href="https://blaze-app-nine.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#cf5c36] hover:bg-[#a66c59] flex items-center gap-1.5 shrink-0 transition-colors"
                        >
                          <span>Open Live Vercel App</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </div>

                      {/* Interactive Workspace Tabs inside Preview */}
                      <div className="flex gap-2 border-b border-[rgba(124,124,124,0.18)] pb-2" role="tablist" aria-label="Task Tracker Tabs">
                        {[
                          { id: 'tasks', label: 'Daily Work Board', icon: CheckSquare },
                          { id: 'assessments', label: 'Daily Self-Assessment', icon: Sparkles },
                          { id: 'team', label: 'Team Status & Alerts', icon: Briefcase },
                        ].map((t) => {
                          const Icon = t.icon;
                          return (
                            <button
                              key={t.id}
                              role="tab"
                              aria-selected={activeTabTask === t.id}
                              onClick={() => setActiveTabTask(t.id as any)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                                activeTabTask === t.id
                                  ? 'bg-[#cf5c36] text-white shadow-sm'
                                  : 'text-[#7c7c7c] hover:text-[#000000] bg-white border border-[rgba(124,124,124,0.2)]'
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                              <span>{t.label}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Tasks board */}
                      {activeTabTask === 'tasks' && (
                        <div className="space-y-3">
                          {[
                            {
                              title: 'BlazeByte Studio SaaS Platform Architecture',
                              member: 'Bharath Raj',
                              hours: '5.5h',
                              status: 'Completed',
                              deadline: 'Today',
                            },
                            {
                              title: 'Client WhatsApp Redirection Integration',
                              member: 'Badri',
                              hours: '3.0h',
                              status: 'In Progress',
                              deadline: 'Tomorrow',
                            },
                            {
                              title: 'Core Web Vitals & Three.js Shader Optimization',
                              member: 'Arun',
                              hours: '2.5h',
                              status: 'Pending',
                              deadline: '12 Nov',
                            },
                          ].map((task, i) => (
                            <div
                              key={i}
                              className="p-4 rounded-xl bg-white border border-[rgba(124,124,124,0.22)] flex items-center justify-between text-xs"
                            >
                              <div>
                                <div className="font-semibold text-[#000000] text-sm">{task.title}</div>
                                <div className="text-[11px] text-[#7c7c7c] mt-0.5">
                                  Assigned to: <strong className="text-[#000000]">{task.member}</strong> • {task.hours} spent
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[#7c7c7c] text-[11px]">Due: {task.deadline}</span>
                                <span
                                  className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                    task.status === 'Completed'
                                      ? 'bg-emerald-100 text-emerald-800'
                                      : task.status === 'In Progress'
                                      ? 'bg-blue-100 text-blue-800'
                                      : 'bg-amber-100 text-amber-800'
                                  }`}
                                >
                                  {task.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Assessments tab */}
                      {activeTabTask === 'assessments' && (
                        <div className="p-5 rounded-xl bg-white border border-[rgba(124,124,124,0.22)] space-y-3 text-xs">
                          <div className="font-bold text-[#000000] text-sm">
                            Daily Performance Reflection (Score: 5 / 5)
                          </div>
                          <p className="text-[#7c7c7c] italic">
                            "Completed full design-to-code alignment with mountain backdrop, interactive multi-device simulator, and verified commercial web applications."
                          </p>
                          <div className="flex items-center gap-2 text-emerald-700 text-xs font-semibold">
                            <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                            <span>Reviewed & Approved by Team Lead</span>
                          </div>
                        </div>
                      )}

                      {/* Team status */}
                      {activeTabTask === 'team' && (
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          {[
                            { name: 'Bharath Raj', role: 'Architect & Lead', status: 'Online', alerts: '0 Pending' },
                            { name: 'Badri Narayanan', role: 'Full Stack Dev', status: 'Active Sprint', alerts: '1 WhatsApp review' },
                            { name: 'Arun Kumar', role: 'UI/UX & 3D Shaders', status: 'Reviewing', alerts: '0 Pending' },
                          ].map((m, i) => (
                            <div key={i} className="p-3.5 rounded-xl bg-white border border-[rgba(124,124,124,0.22)]">
                              <div className="font-bold text-[#000000]">{m.name}</div>
                              <div className="text-[11px] text-[#7c7c7c]">{m.role}</div>
                              <div className="mt-2 flex items-center justify-between text-[10px]">
                                <span className="text-emerald-700 font-semibold">● {m.status}</span>
                                <span className="text-[#7c7c7c]">{m.alerts}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* PROJECT 3: FLAGSHIP DIGITAL STUDIO (blazebyte.store / blazebyte.shop) */}
                  {selectedRepoId === 'Blaze-Byte' && (
                    <div className="space-y-5 font-['Barlow']">
                      <div className="p-6 rounded-2xl bg-white border border-[rgba(124,124,124,0.25)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#efc88b]/60 text-[#000000] text-xs font-semibold uppercase mb-2">
                            Flagship Digital Experience
                          </div>
                          <h3 className="text-2xl font-bold text-[#000000]">
                            BlazeByte Studio — Flagship Web & SaaS Hub
                          </h3>
                          <p className="text-xs text-[#7c7c7c] mt-1">
                            Powers blazebyte.shop & blazebyte.store with high-performance responsive UI, interactive WebGL wave shaders, and custom client request pipelines.
                          </p>
                        </div>
                        <a
                          href="https://blazebyte.store"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#cf5c36] hover:bg-[#a66c59] flex items-center gap-1.5 shrink-0 transition-colors"
                        >
                          <span>Explore Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-white border border-[rgba(124,124,124,0.22)]">
                          <div className="text-xs text-[#7c7c7c]">Design Framework</div>
                          <div className="text-sm font-bold text-[#000000] mt-1">Tailwind CSS + Glassmorphism</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white border border-[rgba(124,124,124,0.22)]">
                          <div className="text-xs text-[#7c7c7c]">Typography Suite</div>
                          <div className="text-sm font-bold text-[#000000] mt-1">Lateef & Barlow & Playfair</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white border border-[rgba(124,124,124,0.22)]">
                          <div className="text-xs text-[#7c7c7c]">Color Architecture</div>
                          <div className="text-sm font-bold text-[#cf5c36] mt-1">#000000 • #eee5e9 • #cf5c36</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* PROJECT 4: BLAZEBYTE STUDIO 07 (blazebyte.info) */}
                  {selectedRepoId === 'Blaze-Byte_1' && (
                    <div className="space-y-5 font-['Barlow']">
                      <div className="p-6 rounded-2xl bg-white border border-[rgba(124,124,124,0.25)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#efc88b]/60 text-[#000000] text-xs font-semibold uppercase mb-2">
                            Creative Digital Agency
                          </div>
                          <h3 className="text-2xl font-bold text-[#000000] flex items-center gap-2">
                            <Globe className="w-6 h-6 text-[#cf5c36]" aria-hidden="true" />
                            <span>BlazeByte Studio 07 — Agency & Portfolio Platform</span>
                          </h3>
                          <p className="text-xs text-[#7c7c7c] mt-1">
                            Agency portfolio showcasing creative direction, digital branding, interactive case studies, and conversion-focused web layouts.
                          </p>
                        </div>
                        <a
                          href="https://blazebyte07.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#cf5c36] hover:bg-[#a66c59] flex items-center gap-1.5 shrink-0 transition-colors"
                        >
                          <span>Explore Agency Live</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white border border-[rgba(124,124,124,0.22)] space-y-2">
                          <h4 className="text-sm font-bold text-[#000000]">Full-Funnel Agency Services</h4>
                          <p className="text-xs text-[#7c7c7c]">
                            Custom brand design systems, high-converting promotional landing pages, and search optimization built for high ROI.
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-white border border-[rgba(124,124,124,0.22)] space-y-2">
                          <h4 className="text-sm font-bold text-[#000000]">Interactive Client Showcases</h4>
                          <p className="text-xs text-[#7c7c7c]">
                            Seamless video and 3D embeds, frictionless enquiry triggers, and multi-platform responsive rendering.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Company Details & About BlazeByte Studio from official sites */}
        <div className="mb-20 bg-white rounded-[28px] p-8 sm:p-10 border border-[rgba(124,124,124,0.22)] shadow-sm font-['Barlow']">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#efc88b]/40 border border-[#a66c59]/30 text-xs font-semibold text-[#000000] uppercase tracking-wider mb-2">
              About BlazeByte Studio Network
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000000]">
              Engineering Scalable Systems Across Three Specialized Hubs
            </h3>
            <p className="text-sm text-[#7c7c7c] mt-2 leading-relaxed">
              Based in Coimbatore, Tamil Nadu, BlazeByte Studio operates a unified digital network covering commercial SaaS software, interactive WebGL creative engineering, and full-funnel digital agency acceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#faf8f9] border border-[rgba(124,124,124,0.2)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#cf5c36] uppercase tracking-wider">Commercial SaaS</span>
                  <Building className="w-5 h-5 text-[#cf5c36]" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-bold text-[#000000]">blazebyte.shop</h4>
                <p className="text-xs text-[#7c7c7c] mt-2 leading-relaxed">
                  Our flagship SaaS platform featuring autonomous AI chatbots, live analytics consoles, custom service builder, and transparent subscription tiers.
                </p>
              </div>
              <a
                href="https://www.blazebyte.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-3 border-t border-[rgba(124,124,124,0.18)] text-xs font-bold text-[#cf5c36] hover:underline flex items-center gap-1"
              >
                <span>Visit blazebyte.shop</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf8f9] border border-[rgba(124,124,124,0.2)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#a66c59] uppercase tracking-wider">Digital Product Studio</span>
                  <Target className="w-5 h-5 text-[#a66c59]" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-bold text-[#000000]">blazebyte.store</h4>
                <p className="text-xs text-[#7c7c7c] mt-2 leading-relaxed">
                  Interactive WebGL design and creative frontend studio. Demonstrates procedural 3D particle shaders, mountain visual depth, and custom brand storytelling.
                </p>
              </div>
              <a
                href="https://www.blazebyte.store"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-3 border-t border-[rgba(124,124,124,0.18)] text-xs font-bold text-[#a66c59] hover:underline flex items-center gap-1"
              >
                <span>Visit blazebyte.store</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#faf8f9] border border-[rgba(124,124,124,0.2)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#000000] uppercase tracking-wider">Agency & Consulting</span>
                  <Award className="w-5 h-5 text-[#000000]" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-bold text-[#000000]">blazebyte.info</h4>
                <p className="text-xs text-[#7c7c7c] mt-2 leading-relaxed">
                  Corporate digital agency services, brand architecture, enterprise consulting, and custom technical integrations for high-growth businesses.
                </p>
              </div>
              <a
                href="https://www.blazebyte.info"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 pt-3 border-t border-[rgba(124,124,124,0.18)] text-xs font-bold text-[#000000] hover:underline flex items-center gap-1"
              >
                <span>Visit blazebyte.info</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* 10 Web Development Capabilities */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#000000] font-['Barlow']">
              Complete Web Development Capabilities
            </h3>
            <p className="mt-2 text-sm text-[#7c7c7c] font-['Lateef'] text-lg">
              From single high-impact landing pages to complex enterprise web platforms with customer dashboards and custom APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl flex flex-col justify-between border border-[rgba(124,124,124,0.22)] shadow-sm hover:border-[#cf5c36] transition-all group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#eee5e9] border border-[rgba(124,124,124,0.2)] flex items-center justify-center text-[#cf5c36] mb-3 group-hover:scale-105 transition-transform" aria-hidden="true">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[#000000] mb-1.5 font-['Barlow']">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-[#7c7c7c] leading-relaxed font-['Lateef'] text-base">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[rgba(124,124,124,0.18)] flex items-center gap-1 text-[11px] text-[#cf5c36] font-semibold font-['Barlow']">
                    <span>Explore scope</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Website Project Enquiry Form with Accessible Controls */}
        <div className="bg-white rounded-[28px] p-8 sm:p-10 border border-[rgba(124,124,124,0.22)] shadow-sm max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8 font-['Barlow']">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#efc88b]/40 text-[#000000] text-xs font-semibold uppercase tracking-wider mb-2">
              Start Your Project
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#000000]">
              Website Project Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#7c7c7c] mt-1 font-['Lateef'] text-lg">
              Submit your project specifications for a structured timeline, architectural assessment, and pricing breakdown.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center p-8 bg-emerald-50 border border-emerald-300 rounded-2xl space-y-4 font-['Barlow']">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-bold text-[#000000]">
                Enquiry Successfully Logged!
              </h4>
              <p className="text-xs sm:text-sm text-[#7c7c7c] max-w-md mx-auto font-['Lateef'] text-lg">
                Thank you, {customerName}. Your web project requirements referencing <strong>{currentRepo.title}</strong> have been recorded in the BlazeByte Studio portal. Our engineering leads will review the scope and reach out within 24 hours.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/917708795342?text=${encodeURIComponent(
                    `Hi BlazeByte Studio, I just submitted an enquiry for a ${websiteType} inspired by ${currentRepo.title}. My name is ${customerName}. Let's discuss!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#cf5c36] hover:bg-[#a66c59] flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Fast-Track on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#000000] bg-[#eee5e9] hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  Submit Another Requirement
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleEnquirySubmit} className="space-y-6 font-['Barlow']">
              {errorMsg && (
                <div role="alert" className="p-3.5 rounded-xl bg-red-50 border border-red-300 text-xs text-red-700 font-semibold">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="enquiry-customer-name" className="text-xs font-semibold text-[#000000] block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    id="enquiry-customer-name"
                    type="text"
                    required
                    aria-required="true"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Bharath Raj"
                    className="w-full bg-[#faf8f9] border border-[rgba(124,124,124,0.3)] rounded-xl px-4 py-2.5 text-sm text-[#000000] focus:outline-none focus:border-[#cf5c36]"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-business-name" className="text-xs font-semibold text-[#000000] block mb-1.5">
                    Business / Company Name
                  </label>
                  <input
                    id="enquiry-business-name"
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. BlazeByte Technologies"
                    className="w-full bg-[#faf8f9] border border-[rgba(124,124,124,0.3)] rounded-xl px-4 py-2.5 text-sm text-[#000000] focus:outline-none focus:border-[#cf5c36]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="enquiry-email" className="text-xs font-semibold text-[#000000] block mb-1.5">
                    Work Email Address *
                  </label>
                  <input
                    id="enquiry-email"
                    type="email"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@yourcompany.com"
                    className="w-full bg-[#faf8f9] border border-[rgba(124,124,124,0.3)] rounded-xl px-4 py-2.5 text-sm text-[#000000] focus:outline-none focus:border-[#cf5c36]"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-phone" className="text-xs font-semibold text-[#000000] block mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    id="enquiry-phone"
                    type="tel"
                    required
                    aria-required="true"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 77087 95342"
                    className="w-full bg-[#faf8f9] border border-[rgba(124,124,124,0.3)] rounded-xl px-4 py-2.5 text-sm text-[#000000] focus:outline-none focus:border-[#cf5c36]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="enquiry-type" className="text-xs font-semibold text-[#000000] block mb-1.5">
                    Website Type
                  </label>
                  <select
                    id="enquiry-type"
                    value={websiteType}
                    onChange={(e) => setWebsiteType(e.target.value)}
                    className="w-full bg-[#faf8f9] border border-[rgba(124,124,124,0.3)] rounded-xl px-4 py-2.5 text-sm text-[#000000] focus:outline-none focus:border-[#cf5c36]"
                  >
                    <option>Custom SaaS Web Application</option>
                    <option>Digital Product Studio</option>
                    <option>Hospitality & Food Order (like Blaze Cafe)</option>
                    <option>Agency Portfolio & Landing Page</option>
                    <option>E-Commerce Storefront</option>
                    <option>Complete Website Redesign</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="enquiry-budget" className="text-xs font-semibold text-[#000000] block mb-1.5">
                    Budget Preference
                  </label>
                  <select
                    id="enquiry-budget"
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-[#faf8f9] border border-[rgba(124,124,124,0.3)] rounded-xl px-4 py-2.5 text-sm text-[#000000] focus:outline-none focus:border-[#cf5c36]"
                  >
                    <option>₹15,000 - ₹35,000 (Starter)</option>
                    <option>₹35,000 - ₹75,000 (Professional)</option>
                    <option>₹75,000 - ₹1,50,000 (Enterprise)</option>
                    <option>₹1,50,000+ (Custom Scaled Architecture)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="enquiry-timeline" className="text-xs font-semibold text-[#000000] block mb-1.5">
                    Preferred Timeline
                  </label>
                  <select
                    id="enquiry-timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-[#faf8f9] border border-[rgba(124,124,124,0.3)] rounded-xl px-4 py-2.5 text-sm text-[#000000] focus:outline-none focus:border-[#cf5c36]"
                  >
                    <option>1-2 Weeks (Urgent Sprint)</option>
                    <option>2-3 Weeks (Standard)</option>
                    <option>4-6 Weeks (Comprehensive Build)</option>
                    <option>Flexible Timeline</option>
                  </select>
                </div>
              </div>

              {/* Feature checkboxes */}
              <div>
                <span className="text-xs font-semibold text-[#000000] block mb-2">
                  Select Architectural Features Required:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {featureOptions.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat);
                    const btnClass = isChecked
                      ? 'p-2.5 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer flex items-center justify-between bg-[#efc88b]/40 border-[#cf5c36] text-[#000000] font-semibold'
                      : 'p-2.5 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer flex items-center justify-between bg-[#faf8f9] border-stone-300 text-[#7c7c7c] hover:border-stone-400';
                    return (
                      <button
                        key={feat}
                        type="button"
                        onClick={() => toggleFeature(feat)}
                        className={btnClass}
                      >
                        <span className="truncate pr-1">{feat}</span>
                        {isChecked ? <CheckCircle2 className="w-3.5 h-3.5 text-[#cf5c36] shrink-0" aria-hidden="true" /> : null}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="enquiry-desc" className="text-xs font-semibold text-[#000000] block mb-1.5">
                  Detailed Project Specifications *
                </label>
                <textarea
                  id="enquiry-desc"
                  rows={4}
                  required
                  aria-required="true"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Outline your company vision, target audience, mandatory integrations, or reference websites..."
                  className="w-full bg-[#faf8f9] border border-[rgba(124,124,124,0.3)] rounded-xl p-3.5 text-sm text-[#000000] focus:outline-none focus:border-[#cf5c36]"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={onOpenCustomPlan}
                  className="text-xs text-[#cf5c36] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Prefer calculating a granular plan? Open Custom Builder</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#cf5c36] hover:bg-[#a66c59] disabled:opacity-50 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{isSubmitting ? 'Logging Enquiry...' : 'Submit Project Brief'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
