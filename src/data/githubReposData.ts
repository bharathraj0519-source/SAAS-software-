export interface GitHubDemoRepo {
  id: string;
  name: string;
  title: string;
  repoUrl: string;
  liveUrl: string;
  language: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  stars: number;
}

export const GITHUB_DEMO_REPOS: GitHubDemoRepo[] = [
  {
    id: 'blaze-app',
    name: 'Work Tracker SaaS',
    title: 'Enterprise Work Tracker & Self-Assessment System',
    repoUrl: 'https://blazebyte.shop',
    liveUrl: 'https://blaze-app-nine.vercel.app',
    language: 'React 19 / TypeScript',
    category: 'Cloud SaaS Application',
    tagline: 'Employee work tracking, daily self-assessments, and manager review system.',
    description:
      'A production-grade enterprise operations system engineered for BlazeByte Studio. Features role-based access for team leads and members, daily task checklists, score reflection rubrics, resource link saving, and instant WhatsApp pending work notifications.',
    highlights: [
      'Daily Work Logger & Hours Tracker',
      'Team Assessment Scale (1–5 reflection)',
      'Manager Review & Feedback Mechanism',
      'WhatsApp Pending Work Dispatcher',
    ],
    techStack: ['React 19', 'Next.js', 'Tailwind CSS', 'Lucide Icons', 'Vercel Edge'],
    stars: 1,
  },
  {
    id: 'Blaze-Byte',
    name: 'Flagship Digital Studio',
    title: 'BlazeByte Studio — Flagship Web & SaaS Hub',
    repoUrl: 'https://www.blazebyte.store',
    liveUrl: 'https://blazebyte.store',
    language: 'WebGL / Three.js / React',
    category: 'Digital Studio & SaaS Hub',
    tagline: 'The official digital product studio platform featuring WebGL particle waves.',
    description:
      'The flagship BlazeByte Studio digital product experience featuring Three.js procedural WebGL particle scenes, responsive glassmorphism panels, interactive 5-stage drag workflow galleries, and Supabase client request pipeline.',
    highlights: [
      'Three.js WebGL Particle Wave Shader',
      'Ambient Mountain Dynamic Backdrop',
      '5-Stage Drag-and-Scroll Workflow Gallery',
      'Interactive Bento Grid Capability Explorer',
    ],
    techStack: ['Three.js', 'WebGL Shaders', 'Supabase', 'Cloudflare', 'Barlow Font'],
    stars: 1,
  },
  {
    id: 'blaze-cafe-',
    name: 'Blaze Cafe Hospitality',
    title: 'Blaze Cafe — Artisan Dining & Online Food Ordering',
    repoUrl: 'https://www.blazebyte.shop',
    liveUrl: 'https://blaze-byte-rcwb.vercel.app',
    language: 'React / Next.js / Tailwind',
    category: 'Hospitality & E-Commerce',
    tagline: 'Modern dining and cafe web portal with interactive menu and reservation booking.',
    description:
      'An elegant culinary storefront developed for hospitality and dining brands. Features categorized food & beverage item showcases, chef recommendations, table booking reservation intake, and WhatsApp order routing.',
    highlights: [
      'Interactive Categorized Cafe Menu',
      'Table Reservation Intake System',
      'Chef Specials & Dynamic Pricing Cards',
      'Direct WhatsApp Order Confirmation',
    ],
    techStack: ['Next.js', 'Responsive CSS', 'Vercel Hosting', 'WhatsApp API'],
    stars: 0,
  },
  {
    id: 'Blaze-Byte_1',
    name: 'Agency Hub 07',
    title: 'BlazeByte Studio 07 — Agency & Portfolio Platform',
    repoUrl: 'https://www.blazebyte.info',
    liveUrl: 'https://blazebyte07.vercel.app',
    language: 'TypeScript / Tailwind CSS',
    category: 'Agency Portfolio & Conversion',
    tagline: 'High-conversion digital agency landing page with client enquiry funnels.',
    description:
      'A refined, conversion-focused agency portfolio crafted for business service discovery. Combines bold typographic hierarchy, structured service tiers, responsive mobile-first navigation, and verified client quote request forms.',
    highlights: [
      'Conversion-Optimized Hero Section',
      'Tiered Digital Service Offerings',
      'Full Responsive Viewport Adaptation',
      'Direct WhatsApp & Email Hand-off',
    ],
    techStack: ['HTML5', 'Modern Flexbox/Grid', 'Vercel Deployment'],
    stars: 0,
  },
];
