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
    <section className="py-12 relative" id="webdev-section" aria-labelledby="webdev-heading">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-700 dark:text-[#65ffe3] uppercase tracking-wider mb-3 font-['Barlow']">
            Module 02 • High-Performance Web
          </div>
          <h2 id="webdev-heading" className="text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight font-['Barlow']">
            Web Design & Full-Stack Development
          </h2>
          <p className="mt-4 text-[var(--muted)] text-lg sm:text-xl font-['Lateef']">
            Explore live production demonstrations based on official GitHub repositories created by <strong className="text-[var(--text-heading)]">@bharathraj0519-source</strong>. Test interactive viewports, inspect repository source codes, and launch custom web projects.
          </p>
        </div>

        {/* GitHub Repositories Selector Bar */}
        <div className="mb-6 glass rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[var(--text)] font-['Barlow']">
            <GitBranch className="w-4 h-4 text-sky-600 dark:text-[#65ffe3]" aria-hidden="true" />
            <span className="font-semibold text-[var(--text-heading)]">Active GitHub Demo:</span>
            <span className="text-sky-700 dark:text-[#65ffe3] font-mono font-medium">bharathraj0519-source/{currentRepo.name}</span>
          </div>

          {/* Repo Selection Pills with Tablist ARIA */}
          <div role="tablist" aria-label="GitHub reference repositories" className="flex flex-wrap items-center gap-2">
            {GITHUB_DEMO_REPOS.map((repo) => (
              <button
                key={repo.id}
                role="tab"
                id={`repo-tab-${repo.id}`}
                aria-selected={selectedRepoId === repo.id}
                aria-controls="repo-preview-panel"
                onClick={() => setSelectedRepoId(repo.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold font-['Barlow'] transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedRepoId === repo.id
                    ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-md shadow-sky-600/30'
                    : 'bg-black/5 dark:bg-white/5 text-[var(--muted)] hover:text-[var(--text-heading)] hover:bg-black/10 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10'
                }`}
              >
                <span>{repo.name}</span>
                {repo.stars > 0 && (
                  <span className="flex items-center text-[10px] text-amber-500 dark:text-amber-300">
                    <Star className="w-2.5 h-2.5 fill-amber-500 dark:fill-amber-300 mr-0.5" aria-hidden="true" />
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
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--muted)] hover:text-[var(--text-heading)] bg-black/5 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center gap-1.5 font-['Barlow']"
              aria-label={`View ${currentRepo.name} source code on GitHub (opens in new tab)`}
            >
              <Code2 className="w-3.5 h-3.5 text-sky-600 dark:text-[#65ffe3]" aria-hidden="true" />
              <span>GitHub Repo</span>
            </a>
            <a
              href={currentRepo.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center gap-1.5 font-['Barlow']"
              aria-label={`Open live site for ${currentRepo.name} (opens in new tab)`}
            >
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Open Live Site</span>
            </a>
          </div>
        </div>

        {/* Interactive Multi-Device Emulator */}
        <div className="mb-20">
          <div className="glass rounded-[28px] p-6 border border-sky-400/30 shadow-[0_0_45px_rgba(112,37,237,0.15)]">
            {/* Viewport Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-white/10 font-['Barlow']">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-[var(--text-heading)] uppercase tracking-wider">
                  Device Viewport:
                </span>
                <div role="group" aria-label="Device viewport preview selector" className="inline-flex items-center p-1 bg-slate-200/80 dark:bg-[#0d0824] rounded-xl border border-slate-300 dark:border-white/10">
                  <button
                    type="button"
                    aria-pressed={viewportMode === 'desktop'}
                    onClick={() => setViewportMode('desktop')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                      viewportMode === 'desktop'
                        ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-md shadow-sky-600/20'
                        : 'text-[var(--muted)] hover:text-[var(--text-heading)]'
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
                        ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-md shadow-sky-600/20'
                        : 'text-[var(--muted)] hover:text-[var(--text-heading)]'
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
                        ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-md shadow-sky-600/20'
                        : 'text-[var(--muted)] hover:text-[var(--text-heading)]'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Mobile (375px)</span>
                  </button>
                </div>
              </div>

              {/* Preview Rendering Mode & Fullscreen */}
              <div className="flex items-center gap-3">
                <div role="group" aria-label="Preview render mode" className="inline-flex items-center p-1 bg-slate-200/80 dark:bg-[#0d0824] rounded-xl border border-slate-300 dark:border-white/10">
                  <button
                    type="button"
                    aria-pressed={previewMode === 'simulated'}
                    onClick={() => setPreviewMode('simulated')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      previewMode === 'simulated'
                        ? 'bg-sky-600 dark:bg-[#65ffe3]/20 text-white dark:text-[#65ffe3] font-semibold'
                        : 'text-[var(--muted)] hover:text-[var(--text-heading)]'
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
                        ? 'bg-emerald-600 dark:bg-emerald-500/20 text-white dark:text-emerald-400 font-semibold'
                        : 'text-[var(--muted)] hover:text-[var(--text-heading)]'
                    }`}
                  >
                    Live Vercel Frame
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  className="p-2 rounded-lg bg-slate-200/80 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 text-[var(--muted)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
                  aria-label={isFullScreen ? 'Exit Full Screen Preview' : 'Full Screen Preview'}
                  title={isFullScreen ? 'Exit Full Screen' : 'Full Screen Preview'}
                >
                  {isFullScreen ? <Minimize2 className="w-4 h-4" aria-hidden="true" /> : <Maximize2 className="w-4 h-4" aria-hidden="true" />}
                </button>
              </div>
            </div>

            {/* Virtual Device Frame */}
            <div
              id="repo-preview-panel"
              role="region"
              aria-label={`Interactive preview of ${currentRepo.name}`}
              className={`mt-6 mx-auto transition-all duration-300 bg-slate-900 border border-sky-400/30 rounded-2xl overflow-hidden shadow-2xl relative ${
                viewportMode === 'desktop'
                  ? 'w-full h-[620px]'
                  : viewportMode === 'tablet'
                  ? 'w-[768px] max-w-full h-[620px] border-4 border-slate-700'
                  : 'w-[375px] max-w-full h-[620px] border-8 border-slate-700 rounded-[38px]'
              }`}
            >
              {/* Device Header Bar */}
              <div className="bg-slate-800 px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs text-slate-300 font-['Barlow']">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                </div>
                <div className="px-3.5 py-0.5 rounded-md bg-slate-900 border border-white/10 text-[11px] text-white/90 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true"></span>
                  <span className="truncate max-w-[280px]">{currentRepo.liveUrl}</span>
                </div>
                <div className="text-[10px] uppercase font-mono text-sky-400">
                  {viewportMode}
                </div>
              </div>

              {/* Viewport Content */}
              {previewMode === 'live' ? (
                <div className="h-[calc(100%-42px)] w-full bg-slate-950 relative">
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
                <div className="h-[calc(100%-42px)] overflow-y-auto p-6 bg-slate-950 text-white space-y-6">
                  {/* REPO 1: BLAZE-APP WORK TRACKER PROTOTYPE */}
                  {selectedRepoId === 'blaze-app' && (
                    <div className="space-y-5 font-['Barlow']">
                      <div className="p-6 rounded-2xl glass border border-sky-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase mb-2">
                            Live Enterprise Workspace
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            Blazebyte Technologies — Work Tracker & Assessment
                          </h3>
                          <p className="text-xs text-slate-300 mt-1">
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
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </div>

                      {/* Interactive Workspace Tabs inside Preview */}
                      <div className="flex gap-2 border-b border-white/10 pb-2" role="tablist" aria-label="Task Tracker Tabs">
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
                                  ? 'bg-[#2391FF] text-white'
                                  : 'text-slate-300 hover:text-white bg-white/5'
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
                              className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs"
                            >
                              <div>
                                <div className="font-semibold text-white text-sm">{task.title}</div>
                                <div className="text-[11px] text-slate-300 mt-0.5">
                                  Assigned to: <strong className="text-white">{task.member}</strong> • {task.hours} spent
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-slate-400 text-[11px]">Due: {task.deadline}</span>
                                <span
                                  className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                    task.status === 'Completed'
                                      ? 'bg-emerald-500/20 text-emerald-400'
                                      : task.status === 'In Progress'
                                      ? 'bg-sky-500/20 text-sky-400'
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
                        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/10 space-y-3 text-xs">
                          <div className="font-bold text-white text-sm">
                            Daily Performance Reflection (Score: 5 / 5)
                          </div>
                          <p className="text-slate-300 italic">
                            "Completed full design-to-code alignment with mountain backdrop, Three.js wave particle canvas, and GitHub repository demo integration."
                          </p>
                          <div className="flex items-center gap-2 text-emerald-400 text-xs">
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
                            <div key={i} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                              <div className="font-bold text-white">{m.name}</div>
                              <div className="text-[11px] text-slate-300">{m.role}</div>
                              <div className="mt-2 flex items-center justify-between text-[10px]">
                                <span className="text-emerald-400">● {m.status}</span>
                                <span className="text-slate-400">{m.alerts}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* REPO 2: BLAZE-BYTE MAIN REPOSITORY REFERENCE */}
                  {selectedRepoId === 'Blaze-Byte' && (
                    <div className="space-y-5 font-['Barlow']">
                      <div className="p-6 rounded-2xl glass border border-sky-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-400 text-xs font-semibold uppercase mb-2">
                            Flagship Design Inspiration
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            BlazeByte Studio — Official Web Experience
                          </h3>
                          <p className="text-xs text-slate-300 mt-1">
                            Original repository powering blazebyte.shop & blazebyte.store with dark glassmorphism, responsive navigation, and animated hero sections.
                          </p>
                        </div>
                        <a
                          href="https://blaze-byte.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pill primary px-4 py-2 text-xs flex items-center gap-1.5 shrink-0"
                        >
                          <span>Explore Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                          <div className="text-xs text-slate-300">Design Framework</div>
                          <div className="text-sm font-bold text-white mt-1">Tailwind CSS + Glassmorphism</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                          <div className="text-xs text-slate-300">Typography Suite</div>
                          <div className="text-sm font-bold text-white mt-1">Lateef & Barlow & Playfair</div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                          <div className="text-xs text-slate-300">Brand Colorway</div>
                          <div className="text-sm font-bold text-sky-400 mt-1">#202734 • #2391FF • #65ffe3</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* REPO 3: BLAZE-CAFE HOSPITALITY EXPERIENCE */}
                  {selectedRepoId === 'blaze-cafe-' && (
                    <div className="space-y-5 font-['Barlow']">
                      <div className="p-6 rounded-2xl glass border border-amber-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase mb-2">
                            Hospitality & F&B Prototype
                          </div>
                          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <Utensils className="w-6 h-6 text-amber-400" aria-hidden="true" />
                            <span>Blaze Cafe — Modern Coffee & Dining Portal</span>
                          </h3>
                          <p className="text-xs text-slate-300 mt-1">
                            Interactive food ordering showcase with category filters, dynamic pricing, and instant table reservations.
                          </p>
                        </div>
                        <a
                          href="https://blaze-cafe.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pill primary px-4 py-2 text-xs flex items-center gap-1.5 shrink-0"
                        >
                          <span>Open Cafe Website</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </div>

                      {/* Cafe Menu Category Filter */}
                      <div className="flex gap-2">
                        {(['all', 'coffee', 'bites', 'desserts'] as const).map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setCafeCategory(cat)}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold uppercase transition-all cursor-pointer ${
                              cafeCategory === cat
                                ? 'bg-amber-500 text-slate-900 font-bold'
                                : 'bg-white/5 text-slate-300 hover:text-white'
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { name: 'Signature Cold Brew', cat: 'coffee', price: '₹180', tag: 'Bestseller' },
                          { name: 'Artisan Avocado Toast', cat: 'bites', price: '₹240', tag: 'Chef Choice' },
                          { name: 'Belgian Truffle Waffle', cat: 'desserts', price: '₹220', tag: 'Fresh' },
                        ]
                          .filter((i) => cafeCategory === 'all' || i.cat === cafeCategory)
                          .map((item, idx) => (
                            <div key={idx} className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                              <div>
                                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 font-semibold uppercase">
                                  {item.tag}
                                </span>
                                <h4 className="text-base font-bold text-white mt-2">{item.name}</h4>
                                <div className="text-xs text-slate-300 mt-1">Single-origin preparation with specialty roasting</div>
                              </div>
                              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                                <span className="text-base font-extrabold text-amber-300">{item.price}</span>
                                <button className="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs cursor-pointer">
                                  Order Demo
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* REPO 4: BLAZE-BYTE_1 DIGITAL AGENCY SUITE */}
                  {selectedRepoId === 'Blaze-Byte_1' && (
                    <div className="space-y-5 font-['Barlow']">
                      <div className="p-6 rounded-2xl glass border border-purple-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 text-xs font-semibold uppercase mb-2">
                            Creative Digital Agency
                          </div>
                          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                            <Globe className="w-6 h-6 text-purple-400" aria-hidden="true" />
                            <span>Blaze-Byte_1 — Marketing & Product Showcase</span>
                          </h3>
                          <p className="text-xs text-slate-300 mt-1">
                            Agency portfolio showcasing creative direction, digital branding, interactive case studies, and conversion-focused web layouts.
                          </p>
                        </div>
                        <a
                          href="https://blaze-byte-1.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pill primary px-4 py-2 text-xs flex items-center gap-1.5 shrink-0"
                        >
                          <span>Explore Agency Live</span>
                          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                          <h4 className="text-sm font-bold text-white">Full-Funnel Agency Services</h4>
                          <p className="text-xs text-slate-300">
                            Custom brand design systems, high-converting promotional landing pages, and search optimization built for high ROI.
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                          <h4 className="text-sm font-bold text-white">Interactive Client Showcases</h4>
                          <p className="text-xs text-slate-300">
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

        {/* 10 Web Development Capabilities */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-heading)] font-['Barlow']">
              Complete Web Development Capabilities
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)] font-['Lateef'] text-lg">
              From single high-impact landing pages to complex enterprise web platforms with customer dashboards and custom APIs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="glass p-5 rounded-2xl flex flex-col justify-between group hover:border-sky-500 dark:hover:border-[#65ffe3]"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-600 dark:text-[#65ffe3] mb-3 group-hover:scale-110 transition-transform" aria-hidden="true">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-[var(--text-heading)] mb-1.5 font-['Barlow']">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-[var(--muted)] leading-relaxed font-['Lateef'] text-base">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-200 dark:border-white/5 flex items-center gap-1 text-[11px] text-sky-600 dark:text-[#65ffe3] font-medium font-['Barlow']">
                    <span>Explore scope</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Website Project Enquiry Form with Accessible Controls */}
        <div className="glass rounded-[28px] p-8 sm:p-10 border border-sky-400/30 shadow-2xl max-w-4xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-8 font-['Barlow']">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-700 dark:text-[#65ffe3] text-xs font-semibold uppercase tracking-wider mb-2">
              Start Your Project
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-heading)]">
              Website Project Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)] mt-1 font-['Lateef'] text-lg">
              Submit your project specifications for a structured timeline, architectural assessment, and pricing breakdown.
            </p>
          </div>

          {formSubmitted ? (
            <div className="text-center p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-4 animate-in zoom-in-95 font-['Barlow']">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-bold text-[var(--text-heading)]">
                Enquiry Successfully Logged!
              </h4>
              <p className="text-xs sm:text-sm text-[var(--muted)] max-w-md mx-auto font-['Lateef'] text-lg">
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
                  <Phone className="w-3.5 h-3.5 text-emerald-300" aria-hidden="true" />
                  <span>Fast-Track on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="pill px-4 py-2.5 text-xs text-[var(--text)] hover:text-sky-600 cursor-pointer"
                >
                  Submit Another Requirement
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleEnquirySubmit} className="space-y-6 font-['Barlow']">
              {errorMsg && (
                <div role="alert" className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-600 dark:text-red-400">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="enquiry-customer-name" className="text-xs font-semibold text-[var(--text-heading)] block mb-1.5">
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
                    className="w-full bg-white dark:bg-[#0d0824] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-business-name" className="text-xs font-semibold text-[var(--text-heading)] block mb-1.5">
                    Business / Company Name
                  </label>
                  <input
                    id="enquiry-business-name"
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. BlazeByte Technologies"
                    className="w-full bg-white dark:bg-[#0d0824] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="enquiry-email" className="text-xs font-semibold text-[var(--text-heading)] block mb-1.5">
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
                    className="w-full bg-white dark:bg-[#0d0824] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry-phone" className="text-xs font-semibold text-[var(--text-heading)] block mb-1.5">
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
                    className="w-full bg-white dark:bg-[#0d0824] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="enquiry-type" className="text-xs font-semibold text-[var(--text-heading)] block mb-1.5">
                    Website Type
                  </label>
                  <select
                    id="enquiry-type"
                    value={websiteType}
                    onChange={(e) => setWebsiteType(e.target.value)}
                    className="w-full bg-white dark:bg-[#0d0824] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
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
                  <label htmlFor="enquiry-budget" className="text-xs font-semibold text-[var(--text-heading)] block mb-1.5">
                    Budget Preference
                  </label>
                  <select
                    id="enquiry-budget"
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-white dark:bg-[#0d0824] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                  >
                    <option>₹15,000 - ₹35,000 (Starter)</option>
                    <option>₹35,000 - ₹75,000 (Professional)</option>
                    <option>₹75,000 - ₹1,50,000 (Enterprise)</option>
                    <option>₹1,50,000+ (Custom Scaled Architecture)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="enquiry-timeline" className="text-xs font-semibold text-[var(--text-heading)] block mb-1.5">
                    Preferred Timeline
                  </label>
                  <select
                    id="enquiry-timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full bg-white dark:bg-[#0d0824] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                  >
                    <option>1-2 Weeks (Urgent Sprint)</option>
                    <option>2-3 Weeks (Standard)</option>
                    <option>4-6 Weeks (Comprehensive Build)</option>
                    <option>Flexible Timeline</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-[var(--text-heading)] block mb-2">
                  Select Required Features
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" role="group" aria-label="Feature requirements checkboxes">
                  {featureOptions.map((feat) => {
                    const isChecked = selectedFeatures.includes(feat);
                    return (
                      <button
                        type="button"
                        key={feat}
                        role="checkbox"
                        aria-checked={isChecked}
                        onClick={() => toggleFeature(feat)}
                        className={`text-left text-xs p-2.5 rounded-xl border transition-all cursor-pointer ${
                          isChecked
                            ? 'bg-sky-500/15 border-sky-500 text-sky-800 dark:text-sky-300 font-medium'
                            : 'bg-black/[0.02] dark:bg-white/[0.02] border-slate-300 dark:border-white/10 text-[var(--muted)] hover:border-slate-400'
                        }`}
                      >
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 ${isChecked ? 'text-sky-600 dark:text-sky-400' : 'text-slate-400 dark:text-white/20'}`}
                            aria-hidden="true"
                          />
                          <span>{feat}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="enquiry-description" className="text-xs font-semibold text-[var(--text-heading)] block mb-1.5">
                  Project Description & Requirements *
                </label>
                <textarea
                  id="enquiry-description"
                  required
                  aria-required="true"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell us about your brand, what pages you need, any reference repositories (e.g. blaze-app or blaze-cafe-), and key business goals..."
                  className="w-full bg-white dark:bg-[#0d0824] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
                <button
                  type="button"
                  onClick={onOpenCustomPlan}
                  className="text-xs text-sky-700 dark:text-[#65ffe3] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Prefer to pick features step-by-step? Try Custom Plan Builder</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="pill primary w-full sm:w-auto px-8 py-3.5 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{isSubmitting ? 'Logging Enquiry...' : 'Submit Project Enquiry'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
