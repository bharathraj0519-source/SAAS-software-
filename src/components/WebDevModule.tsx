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
  GitBranch,
  Star,
  Globe,
  Utensils,
  CheckSquare,
  Briefcase,
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
  const [selectedRepoId, setSelectedRepoId] = useState<string>('blaze-app');
  const [previewMode, setPreviewMode] = useState<'simulated' | 'live'>('simulated');

  // Interactive simulated states for repositories
  const [activeTabTask, setActiveTabTask] = useState<'tasks' | 'assessments' | 'team'>('tasks');
  const [cafeCategory, setCafeCategory] = useState<'all' | 'coffee' | 'bites' | 'desserts'>('all');

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
        description: `Reference Repo: ${currentRepo.name} (${currentRepo.repoUrl}) | Features: ${selectedFeatures.join(
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
    <div className="py-12 relative" id="webdev-section">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(99,203,255,0.15)] border border-[rgba(99,203,255,0.3)] text-xs font-semibold text-[#65ffe3] uppercase tracking-wider mb-3 font-['Barlow']">
            Module 02 • High-Performance Web
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Barlow']">
            Web Design & Full-Stack Development
          </h2>
          <p className="mt-4 text-[#cbd0dc] text-lg sm:text-xl font-['Lateef']">
            Explore live production demonstrations based on official GitHub repositories created by <strong className="text-white">@bharathraj0519-source</strong>. Test interactive viewports, inspect repository source codes, and launch custom web projects.
          </p>
        </div>

        {/* GitHub Repositories Selector Bar */}
        <div className="mb-6 glass rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#e1e4eb] font-['Barlow']">
            <GitBranch className="w-4 h-4 text-[#65ffe3]" />
            <span className="font-semibold text-white">Active GitHub Demo:</span>
            <span className="text-[#65ffe3] font-mono font-medium">bharathraj0519-source/{currentRepo.name}</span>
          </div>

          {/* Repo Selection Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {GITHUB_DEMO_REPOS.map((repo) => (
              <button
                key={repo.id}
                onClick={() => setSelectedRepoId(repo.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold font-['Barlow'] transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedRepoId === repo.id
                    ? 'bg-[#2391FF] text-white shadow-md shadow-[#2391FF]/30'
                    : 'bg-white/5 text-[#B7B09E] hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <span>{repo.name}</span>
                {repo.stars > 0 && (
                  <span className="flex items-center text-[10px] text-amber-300">
                    <Star className="w-2.5 h-2.5 fill-amber-300 mr-0.5" />
                    {repo.stars}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentRepo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#c8ccda] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-1.5 font-['Barlow']"
            >
              <Code2 className="w-3.5 h-3.5 text-[#65ffe3]" />
              <span>GitHub Repo</span>
            </a>
            <a
              href={currentRepo.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600/80 hover:bg-emerald-500 flex items-center gap-1.5 font-['Barlow']"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Live Site</span>
            </a>
          </div>
        </div>

        {/* Interactive Multi-Device Emulator */}
        <div className="mb-20">
          <div className="glass rounded-[28px] p-6 border border-[rgba(99,203,255,0.3)] shadow-[0_0_45px_rgba(112,37,237,0.25)]">
            {/* Viewport Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10 font-['Barlow']">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Device Viewport:
                </span>
                <div className="inline-flex items-center p-1 bg-[#0d0824] rounded-xl border border-white/10">
                  <button
                    onClick={() => setViewportMode('desktop')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
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
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
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

              {/* Preview Rendering Mode & Fullscreen */}
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center p-1 bg-[#0d0824] rounded-xl border border-white/10">
                  <button
                    onClick={() => setPreviewMode('simulated')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      previewMode === 'simulated'
                        ? 'bg-[#65ffe3]/20 text-[#65ffe3] font-semibold'
                        : 'text-[#B7B09E] hover:text-white'
                    }`}
                  >
                    Interactive Prototype
                  </button>
                  <button
                    onClick={() => setPreviewMode('live')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      previewMode === 'live'
                        ? 'bg-emerald-500/20 text-emerald-400 font-semibold'
                        : 'text-[#B7B09E] hover:text-white'
                    }`}
                  >
                    Live Vercel Frame
                  </button>
                </div>

                <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#B7B09E] hover:text-white transition-colors cursor-pointer"
                  title={isFullScreen ? 'Exit Full Screen' : 'Full Screen Preview'}
                >
                  {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Virtual Device Frame */}
            <div
              className={`mt-6 mx-auto transition-all duration-300 bg-[#070219] border border-[rgba(99,203,255,0.3)] rounded-2xl overflow-hidden shadow-2xl relative ${
                viewportMode === 'desktop'
                  ? 'w-full h-[620px]'
                  : viewportMode === 'tablet'
                  ? 'w-[768px] max-w-full h-[620px] border-4 border-[#2b3547]'
                  : 'w-[375px] max-w-full h-[620px] border-8 border-[#2b3547] rounded-[38px]'
              }`}
            >
              {/* Device Header Bar */}
              <div className="bg-[#0d0824] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs text-[#B7B09E] font-['Barlow']">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="px-3.5 py-0.5 rounded-md bg-[#070219] border border-white/10 text-[11px] text-white/90 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span className="truncate max-w-[280px]">{currentRepo.liveUrl}</span>
                </div>
                <div className="text-[10px] uppercase font-mono text-[#65ffe3]">
                  {viewportMode}
                </div>
              </div>

              {/* Viewport Content */}
              {previewMode === 'live' ? (
                <div className="h-[calc(100%-42px)] w-full bg-[#070219] relative">
                  <iframe
                    src={currentRepo.liveUrl}
                    title={currentRepo.title}
                    className="w-full h-full border-none"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    loading="lazy"
                  />
                </div>
              ) : (
                /* Interactive Prototype Canvas for the selected repo */
                <div className="h-[calc(100%-42px)] overflow-y-auto p-6 bg-[#070219] text-white space-y-6">
                  {/* REPO 1: BLAZE-APP WORK TRACKER PROTOTYPE */}
                  {selectedRepoId === 'blaze-app' && (
                    <div className="space-y-5 font-['Barlow']">
                      <div className="p-6 rounded-2xl glass border border-[rgba(99,203,255,0.3)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase mb-2">
                            Live Enterprise Workspace
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            Blazebyte Technologies — Work Tracker & Assessment
                          </h3>
                          <p className="text-xs text-[#B7B09E] mt-1">
                            Team workspace for tracking daily tasks, work hours, self-assessments, and WhatsApp pending alerts.
                          </p>
                        </div>
                        <a
                          href="https://blaze-app-nine.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pill primary px-4 py-2 text-xs flex items-center gap-1.5 shrink-0"
                        >
                          <span>Open Live Vercel App</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Interactive Workspace Tabs inside Preview */}
                      <div className="flex gap-2 border-b border-white/10 pb-2">
                        {[
                          { id: 'tasks', label: 'Daily Work Board', icon: CheckSquare },
                          { id: 'assessments', label: 'Daily Self-Assessment', icon: Sparkles },
                          { id: 'team', label: 'Team Status & Alerts', icon: Briefcase },
                        ].map((t) => {
                          const Icon = t.icon;
                          return (
                            <button
                              key={t.id}
                              onClick={() => setActiveTabTask(t.id as any)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                                activeTabTask === t.id
                                  ? 'bg-[#2391FF] text-white'
                                  : 'text-[#B7B09E] hover:text-white bg-white/5'
                              }`}
                            >
                              <Icon className="w-3.5 h-3.5" />
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
                              className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-xs"
                            >
                              <div>
                                <div className="font-semibold text-white text-sm">{task.title}</div>
                                <div className="text-[11px] text-[#B7B09E] mt-0.5">
                                  Assigned to: <strong className="text-white">{task.member}</strong> • {task.hours} spent
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-[#9ea6bd] text-[11px]">Due: {task.deadline}</span>
                                <span
                                  className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                    task.status === 'Completed'
                                      ? 'bg-emerald-500/20 text-emerald-400'
                                      : task.status === 'In Progress'
                                      ? 'bg-[#2391FF]/20 text-[#2391FF]'
                                      : 'bg-amber-500/20 text-amber-400'
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
                        <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-3 text-xs">
                          <div className="font-bold text-white text-sm">
                            Daily Performance Reflection (Score: 5 / 5)
                          </div>
                          <p className="text-[#d2d5df] italic">
                            "Completed full design-to-code alignment with mountain backdrop, Three.js wave particle canvas, and GitHub repository demo integration."
                          </p>
                          <div className="flex items-center gap-2 text-emerald-400 text-xs">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Reviewed & Approved by Team Lead</span>
                          </div>
                        </div>
                      )}

                      {/* Team status */}
                      {activeTabTask === 'team' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="font-semibold text-white">Bharath Raj (Lead)</div>
                            <div className="text-emerald-400 text-[11px] mt-1">All Daily Work Logged ✓</div>
                          </div>
                          <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                            <div className="font-semibold text-white">Badri (Development)</div>
                            <div className="text-[#63cbff] text-[11px] mt-1">1 Task In Progress</div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* REPO 2: BLAZE-BYTE FLAGSHIP STOREFRONT */}
                  {selectedRepoId === 'Blaze-Byte' && (
                    <div className="space-y-6 font-['Barlow']">
                      <div className="relative rounded-2xl p-8 glass border border-[rgba(99,203,255,0.4)] overflow-hidden text-center">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#65ffe3]/15 text-[#65ffe3] text-xs font-semibold uppercase mb-3">
                          Flagship Web Platform
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                          A Digital Product Studio <span className="text-[#65ffe3]">that will work</span>
                        </h3>
                        <p className="text-sm text-[#cbd0dc] max-w-lg mx-auto mt-3 font-['Lateef'] text-xl">
                          Web design, SEO services, media publishing, and gaming hubs — turning bold ideas into commercial systems.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-3">
                          <a
                            href="https://blazebyte.store"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pill primary px-5 py-2 text-xs flex items-center gap-1.5"
                          >
                            <span>Visit blazebyte.store</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                          <div className="text-[#65ffe3] font-bold text-sm">Three.js Particle Canvas</div>
                          <div className="text-[#B7B09E] mt-1">Real-time procedural GPU noise wave</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                          <div className="text-[#63cbff] font-bold text-sm">5-Stage Workflow</div>
                          <div className="text-[#B7B09E] mt-1">Drag-and-snap process gallery</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                          <div className="text-[#d86bff] font-bold text-sm">Bento Grid Matrix</div>
                          <div className="text-[#B7B09E] mt-1">Expanding service detail cards</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* REPO 3: BLAZE-CAFE HOSPITALITY EXPERIENCE */}
                  {selectedRepoId === 'blaze-cafe-' && (
                    <div className="space-y-5 font-['Barlow']">
                      <div className="p-6 rounded-2xl glass border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase mb-2">
                            Hospitality & E-Commerce
                          </div>
                          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <Utensils className="w-5 h-5 text-amber-400" />
                            <span>Blaze Cafe — Modern Dining & Digital Menu</span>
                          </h3>
                          <p className="text-xs text-[#B7B09E] mt-1">
                            Interactive cafe menu, table reservations, and direct WhatsApp customer ordering.
                          </p>
                        </div>
                        <a
                          href="https://blaze-byte-rcwb.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pill primary px-4 py-2 text-xs flex items-center gap-1.5 shrink-0"
                        >
                          <span>Open Live Cafe App</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Interactive Menu Filtering */}
                      <div className="flex gap-2">
                        {(['all', 'coffee', 'bites', 'desserts'] as const).map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setCafeCategory(cat)}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-all ${
                              cafeCategory === cat
                                ? 'bg-amber-500 text-black font-bold'
                                : 'text-[#B7B09E] bg-white/5 hover:text-white'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { name: 'Signature Cold Brew', cat: 'coffee', price: '₹220', rating: '4.9 ★' },
                          { name: 'Artisan Sourdough Toast', cat: 'bites', price: '₹280', rating: '4.8 ★' },
                          { name: 'Belgian Truffle Waffle', cat: 'desserts', price: '₹320', rating: '5.0 ★' },
                        ]
                          .filter((item) => cafeCategory === 'all' || item.cat === cafeCategory)
                          .map((dish, i) => (
                            <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-white">{dish.name}</span>
                                <span className="text-amber-400 font-semibold">{dish.rating}</span>
                              </div>
                              <div className="text-[#65ffe3] font-bold text-sm mt-2">{dish.price}</div>
                              <div className="mt-3 pt-2 border-t border-white/5 text-[11px] text-[#B7B09E]">
                                WhatsApp Instant Order Available
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* REPO 4: BLAZE-BYTE_1 AGENCY PORTFOLIO */}
                  {selectedRepoId === 'Blaze-Byte_1' && (
                    <div className="space-y-5 font-['Barlow']">
                      <div className="p-6 rounded-2xl glass border border-[rgba(99,203,255,0.3)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2391FF]/20 text-[#63cbff] text-xs font-semibold uppercase mb-2">
                            Creative Agency Showcase
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            BlazeByte Studio 07 — Agency Design & Portfolio
                          </h3>
                          <p className="text-xs text-[#B7B09E] mt-1">
                            High-impact conversion landing page designed for corporate client acquisition.
                          </p>
                        </div>
                        <a
                          href="https://blazebyte07.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pill primary px-4 py-2 text-xs flex items-center gap-1.5 shrink-0"
                        >
                          <span>Open Live Vercel App</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                          <div className="font-bold text-white text-sm">Conversion-Optimized Hero</div>
                          <p className="text-[#B7B09E]">
                            Clean, high-contrast layouts guiding prospective clients towards immediate WhatsApp consultations.
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
                          <div className="font-bold text-white text-sm">Responsive Mobile-First Codebase</div>
                          <p className="text-[#B7B09E]">
                            Fluid grid structures built to render consistently across iOS, Android, and widescreen monitors.
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

        {/* Official GitHub Repositories Showcase Grid */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-[#65ffe3] text-sm uppercase tracking-[0.18em] font-semibold mb-2 font-['Barlow']">
              Official Open-Source & Production Repositories
            </p>
            <h3 className="text-2xl sm:text-4xl font-bold text-white font-['Barlow']">
              Live Work from @bharathraj0519-source
            </h3>
            <p className="mt-2 text-sm text-[#cbd0dc] font-['Lateef'] text-lg">
              Explore the live architectures, source code repositories, and production Vercel builds powering BlazeByte Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GITHUB_DEMO_REPOS.map((repo) => {
              const isSelected = selectedRepoId === repo.id;
              return (
                <div
                  key={repo.id}
                  className={`glass rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? 'border-[#65ffe3] shadow-[0_0_35px_rgba(101,255,227,0.25)] -translate-y-1'
                      : 'hover:border-[rgba(99,203,255,0.4)] hover:-translate-y-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 font-['Barlow']">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#65ffe3]">
                        {repo.category}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-[#B7B09E]">
                        <span className="font-mono text-[#63cbff]">{repo.language}</span>
                        {repo.stars > 0 && (
                          <span className="flex items-center text-amber-300">
                            <Star className="w-3.5 h-3.5 fill-amber-300 mr-1" />
                            {repo.stars}
                          </span>
                        )}
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-1 font-['Barlow'] flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-[#65ffe3]" />
                      <span>{repo.title}</span>
                    </h4>

                    <div className="text-xs font-mono text-[#63cbff] mb-3">
                      github.com/bharathraj0519-source/{repo.name}
                    </div>

                    <p className="text-sm text-[#cbd0dc] leading-relaxed mb-5 font-['Lateef'] text-lg">
                      {repo.description}
                    </p>

                    <div className="space-y-1.5 mb-6 font-['Barlow']">
                      {repo.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#e1e4eb]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#65ffe3] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {repo.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-[#B7B09E] font-['Barlow']"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 font-['Barlow']">
                    <button
                      onClick={() => {
                        setSelectedRepoId(repo.id);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className="pill primary px-4 py-2 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <Monitor className="w-3.5 h-3.5" />
                      <span>Test in Device Frame</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={repo.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#c8ccda] hover:text-white"
                        title="View Source on GitHub"
                      >
                        <Code2 className="w-4 h-4" />
                      </a>
                      <a
                        href={repo.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#65ffe3] hover:text-white"
                        title="Open Live Website"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 10 Web Development Capabilities */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Barlow']">
              Complete Web Development Capabilities
            </h3>
            <p className="mt-2 text-sm text-[#cbd0dc] font-['Lateef'] text-lg">
              From single high-impact landing pages to complex enterprise web platforms with customer dashboards and custom APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="glass p-5 rounded-2xl flex flex-col justify-between group hover:border-[#65ffe3]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[rgba(99,203,255,0.15)] border border-[rgba(99,203,255,0.3)] flex items-center justify-center text-[#65ffe3] mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5 font-['Barlow']">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-[#cbd0dc] leading-relaxed font-['Lateef'] text-base">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-white/5 flex items-center gap-1 text-[11px] text-[#65ffe3] font-medium font-['Barlow']">
                    <span>Explore scope</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Website Project Enquiry Form */}
        <div className="glass rounded-[28px] p-8 sm:p-10 border border-[rgba(99,203,255,0.35)] shadow-2xl max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8 font-['Barlow']">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#65ffe3]/10 text-[#65ffe3] text-xs font-semibold uppercase tracking-wider mb-2">
              Start Your Project
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Website Project Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#cbd0dc] mt-1 font-['Lateef'] text-lg">
              Submit your project specifications for a structured timeline, architectural assessment, and pricing breakdown.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-4 animate-in zoom-in-95 font-['Barlow']">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">
                Enquiry Successfully Logged!
              </h4>
              <p className="text-xs sm:text-sm text-[#cbd0dc] max-w-md mx-auto font-['Lateef'] text-lg">
                Thank you, {customerName}. Your web project requirements referencing repo <strong>{currentRepo.name}</strong> have been recorded in the BlazeByte Studio portal. Our engineering leads will review the scope and reach out within 24 hours.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/917708795342?text=${encodeURIComponent(
                    `Hi BlazeByte Studio, I just submitted an enquiry for a ${websiteType} inspired by ${currentRepo.name}. My name is ${customerName}. Let's discuss!`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill primary px-5 py-2.5 text-xs flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#65ffe3]" />
                  <span>Fast-Track on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="pill px-4 py-2.5 text-xs text-[#B7B09E] hover:text-white"
                >
                  Submit Another Requirement
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleEnquirySubmit} className="space-y-6 font-['Barlow']">
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
                    className="w-full bg-[#0d0824] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#65ffe3]"
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
                    className="w-full bg-[#0d0824] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#65ffe3]"
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
                    className="w-full bg-[#0d0824] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#65ffe3]"
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
                    className="w-full bg-[#0d0824] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#65ffe3]"
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
                    className="w-full bg-[#0d0824] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#65ffe3]"
                  >
                    <option>Custom SaaS Web Application (like blaze-app)</option>
                    <option>Digital Product Studio (like Blaze-Byte)</option>
                    <option>Hospitality & Food Order (like blaze-cafe-)</option>
                    <option>Agency Portfolio & Landing Page (like Blaze-Byte_1)</option>
                    <option>E-Commerce Storefront</option>
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
                    className="w-full bg-[#0d0824] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#65ffe3]"
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
                    className="w-full bg-[#0d0824] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#65ffe3]"
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
                            ? 'bg-[#2391FF]/20 border-[#65ffe3] text-white font-medium'
                            : 'bg-white/[0.02] border-white/10 text-[#B7B09E] hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 ${isChecked ? 'text-[#65ffe3]' : 'text-white/20'}`}
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
                  placeholder="Tell us about your brand, what pages you need, any reference repositories (e.g. blaze-app or blaze-cafe-), and key business goals..."
                  className="w-full bg-[#0d0824] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-[#B7B09E]/50 focus:outline-none focus:border-[#65ffe3]"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={onOpenCustomPlan}
                  className="text-xs text-[#65ffe3] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Prefer to pick features step-by-step? Try Custom Plan Builder</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="pill primary w-full sm:w-auto px-8 py-3.5 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
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
