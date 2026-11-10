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
    name: 'blaze-app',
    title: 'Work Tracker & Assessment SaaS',
    repoUrl: 'https://github.com/bharathraj0519-source/blaze-app',
    liveUrl: 'https://blaze-app-nine.vercel.app',
    language: 'JavaScript / React',
    category: 'Cloud SaaS Application',
    tagline: 'Employee work tracking, daily self-assessments, and manager review system.',
    description:
      'A production-ready internal enterprise tool built for BlazeByte Technologies. Features role-based access for team leads and members, daily task checklists, score reflection rubrics, resource link saving, and instant WhatsApp pending work notifications.',
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
    name: 'Blaze-Byte',
    title: 'BlazeByte Studio — Flagship Web & SaaS',
    repoUrl: 'https://github.com/bharathraj0519-source/Blaze-Byte',
    liveUrl: 'https://blazebyte.store',
    language: 'HTML / JS / Three.js',
    category: 'Digital Studio & SaaS Hub',
    tagline: 'The official digital product studio platform featuring WebGL particle waves.',
    description:
      'The flagship BlazeByte Studio digital product experience featuring Three.js procedural WebGL particle scenes, responsive glassmorphism panels, interactive 5-stage drag workflow galleries, and Supabase client request pipeline.',
    highlights: [
      'Three.js WebGL Particle Wave Shader',
      'Ambient Mountain Video Background',
      '5-Stage Drag-and-Scroll Workflow Gallery',
      'Interactive Bento Grid Capability Explorer',
    ],
    techStack: ['Three.js', 'HTML5 / CSS3', 'Supabase', 'Cloudflare', 'Barlow Font'],
    stars: 1,
  },
  {
    id: 'blaze-cafe-',
    name: 'blaze-cafe-',
    title: 'Blaze Cafe — Hospitality & Digital Menu',
    repoUrl: 'https://github.com/bharathraj0519-source/blaze-cafe-',
    liveUrl: 'https://blaze-byte-rcwb.vercel.app',
    language: 'HTML / CSS / JS',
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
    techStack: ['Modern Web', 'Responsive CSS', 'Vercel Hosting', 'WhatsApp API'],
    stars: 0,
  },
  {
    id: 'Blaze-Byte_1',
    name: 'Blaze-Byte_1',
    title: 'BlazeByte Studio 07 — Agency Portfolio',
    repoUrl: 'https://github.com/bharathraj0519-source/Blaze-Byte_1',
    liveUrl: 'https://blazebyte07.vercel.app',
    language: 'HTML / CSS / Web',
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
