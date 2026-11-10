---
name: saas-software
description: Comprehensive engineering and design playbook for architecting, building, styling, and deploying production-ready SaaS studio platforms (AI Chatbots, Web Portals, SEO Analytics, and Custom Plan Builders) with custom color palettes, accessible glassmorphism, portfolio demos, and Git/Vercel deployment workflows.
---

# SaaS Software Studio Platform — Architecture, Development & Deployment Playbook

This skill distills the end-to-end process of designing, developing, refining, and deploying commercial SaaS platforms and digital studio portals (modeled on the BlazeByte Studio SaaS architecture). Use this skill whenever building, refactoring, or scaling a commercial SaaS product or agency platform.

---

## 1. Core Architectural Pillars

A commercial SaaS studio platform must operate as a true revenue-generating software product, not just a static agency landing page. It is structured around four primary interactive service modules and a conversion-focused core:

1. **AI Chatbot SaaS Module**:
   - Interactive multi-tier chat console (Free, Plus, Pro).
   - Live simulated bot reasoning, knowledge base matching, and lead capture.
   - Fallback workflows with direct WhatsApp routing and enquiry logging.
   - Chat transcript export (`.txt` / `.json`) and conversation reset.

2. **Web Design & Development Showcase Module**:
   - Interactive multi-device emulator (Desktop 1920px, Tablet 768px, Mobile 375px).
   - Dual preview modes: Simulated interactive prototype vs. Live iframe web frame.
   - Commercial portfolio showcase (converting raw repositories into branded commercial case studies).
   - Project enquiry form capturing requirements, budget tiers, timelines, and feature checklists.

3. **SEO Services & Analytics Suite Module**:
   - Interactive SEO console with live site health score calculation.
   - Core Web Vitals audit (LCP, FID/INP, CLS).
   - Real-time keyword ranking simulator and automated search crawler.
   - Sitemap generator, robots.txt validator, and IndexNow API push.

4. **Custom Plan Builder & Pricing Calculator**:
   - Granular feature selector categorized by service domain (AI, Web, SEO, SLA).
   - Real-time price calculator supporting monthly and annual billing (-20% discount).
   - Dynamic proposal summary generator with direct checkout / order modal.

5. **Customer & Admin Portal**:
   - LocalStorage-backed client proposal and enquiry tracker.
   - Admin view for managing incoming project briefs, lead statuses, and subscription requests.

---

## 2. Design System & Palette Execution

### Color Palette Architecture
When styling the platform, adhere strictly to the client's chosen brand palette. For example, the warm porcelain light-theme palette:
- **Main Background**: `#eee5e9`
- **Surface / Cards**: `#ffffff` (or subtle frosted glass `rgba(255, 255, 255, 0.85)`)
- **Primary Headings & Bold Copy**: `#000000`
- **Secondary / Supporting Body Text**: `#7c7c7c`
- **Primary Brand Accent / CTAs**: `#cf5c36`
- **Warm Secondary Accent**: `#a66c59`
- **Highlight Pills & Badges**: `#efc88b`
- **Crisp Borders**: `rgba(124, 124, 124, 0.22)` or `border-stone-200`

### Glassmorphism & Visual Restraint
- **Borders**: Always use crisp, hairline borders (`1px solid rgba(124, 124, 124, 0.22)` or subtle white overlays) to define card boundaries.
- **Glows**: Avoid overpowering neon halos. Restrict ambient radial gradients to subtle tints (`opacity: 0.03` to `0.08`).
- **Backdrop Blur**: Use `backdrop-blur-md` (8px) to `backdrop-blur-xl` (16px) for navigation capsules and elevated modals.
- **Ambient Canvas / Backdrop**: Complement with an ambient video loop or Three.js procedural particle wave shader pinned in the background with subtle opacity.

### Typography Hierarchy
- Headings: Bold modern geometric sans (e.g. `Barlow`, `Inter`, or `Outfit`).
- Emphasis / Script accents: Italic serif or script font (e.g. `font-script-italic`, `Playfair Display`).
- Primary Body / Descriptions: High-readability body font (e.g. `Lateef`, `Plus Jakarta Sans`).

---

## 3. Standard UI Components & Patterns

### A. Accessible Spotlight Navbar
Place a floating capsule navigation bar with an interactive cursor-following spotlight effect:
```tsx
import { SpotlightNavbar } from '@/components/ui/spotlight-navbar';

<SpotlightNavbar
  items={[
    { label: 'Home', onClick: () => navigate('home') },
    { label: 'AI Chatbot', onClick: () => navigate('chatbot') },
    { label: 'Web Development', onClick: () => navigate('webdev') },
    { label: 'SEO Services', onClick: () => navigate('seo') },
    { label: 'Custom Plan', onClick: () => navigate('custom-plan') },
  ]}
/>
```

### B. FlipText Hero Animation
Incorporate animated character flips for primary value propositions:
```tsx
import { FlipText } from '@/components/ui/flip-text';

<FlipText className="text-4xl sm:text-6xl font-extrabold text-[#000000]">
  Build Smarter. Grow Faster.
</FlipText>
```

### C. Standardized Pricing Tiers
Use `@phosphor-icons/react` icons and a clean monthly/yearly billing switcher:
```tsx
import { PricingTiers, type PricingTier } from '@/components/ui/pricing-tiers';
import { CloudArrowDownIcon, LightningIcon, UsersThreeIcon } from '@phosphor-icons/react';

const tiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For side projects and solo builders.',
    price: { monthly: 19, yearly: 15 },
    cta: { label: 'Start free trial', href: '/signup' },
    featuresLabel: 'Starter includes:',
    features: [
      { label: <><b>5</b> projects</>, icon: <LightningIcon weight="fill" /> },
      { label: <><b>10,000</b> downloads/month</>, icon: <CloudArrowDownIcon weight="fill" /> },
    ],
  },
  {
    id: 'team',
    name: 'Team',
    description: 'For growing teams that ship every week.',
    price: { monthly: 49, yearly: 39 },
    featured: true,
    cta: { label: 'Start free trial', href: '/signup?plan=team' },
    featuresLabel: 'Everything in Starter, plus:',
    features: [{ label: 'Shared workspaces', icon: <UsersThreeIcon weight="fill" /> }],
  },
];
```

### D. Accessible FAQ Accordions
Provide clear, keyboard-navigable FAQs with `aria-expanded` and smooth heights:
```tsx
import { FaqAccordion } from '@/components/ui/faq-accordion';

export function FaqSection() {
  return <FaqAccordion />;
}
```

---

## 4. Transforming Repositories into Commercial Showcases

When referencing source repositories or past projects, avoid exposing amateur git identifiers (e.g. `user/repo-name`). Transform them into commercial case studies:

| Raw Identifier | Commercial Title | Category | Showcase Highlights |
| :--- | :--- | :--- | :--- |
| `blaze-app` | Enterprise Work Tracker & Assessment Suite | Cloud Operations SaaS | Hours logging, team rubrics, manager reviews, WhatsApp pending alerts |
| `Blaze-Byte` | BlazeByte Flagship Digital Studio | 3D WebGL & SaaS Hub | Procedural wave shaders, 5-stage drag gallery, client intake pipeline |
| `blaze-cafe-` | Blaze Cafe Artisan Dining & Online Ordering | Hospitality E-Commerce | Interactive category menu, seasonal cards, instant table reservation |
| `Blaze-Byte_1` | BlazeByte Studio 07 Agency Hub | Digital Agency Platform | Full-funnel agency offerings, responsive viewport layout, verified client funnels |

Always provide:
- High-resolution hero preview images (e.g. `/assets/web-service-blaze-cafe.jpg`).
- Interactive prototype states allowing users to click tabs, filter categories, or trigger simulated checkouts.
- Direct external link to live production deployments.

---

## 5. Accessibility (WCAG 2.1 AA) Compliance Checklist

1. **Skip to Main Content**: Always include an accessible `<a href="#main-content" className="skip-link">Skip to main content</a>` as the first focusable element.
2. **Keyboard Navigation**: Ensure all tabs, modals, accordions, and buttons have visible focus rings (`focus:outline-none focus:ring-2 focus:ring-[#cf5c36]`).
3. **ARIA Roles**:
   - Tabs: `role="tablist"`, `role="tab"`, `aria-selected`, `aria-controls`.
   - Modals: `role="dialog"`, `aria-modal="true"`, `aria-labelledby`.
   - Accordions: `aria-expanded`, `aria-controls`.
   - Live Regions: `aria-live="polite"`, `aria-atomic="true"` for toast notifications.
4. **Color Contrast**: Verify body copy (`#7c7c7c`) and headings (`#000000`) meet at least 4.5:1 contrast against `#eee5e9` and `#ffffff`.

---

## 6. Verification, Git & Vercel Deployment Workflow

### Pre-Deployment Verification
Before pushing or deploying, run a strict verification pass:
```bash
# 1. Typecheck and build
npm run build

# 2. Check local dev server response
curl -I http://127.0.0.1:5173/
```

### Git Repository Initialization & Push Runbook
1. Initialize or verify branch:
   ```bash
   git branch -m master main
   ```
2. Check status and stage all files:
   ```bash
   git add .
   git commit -m "feat: complete commercial SaaS platform release"
   ```
3. Set remote origin:
   ```bash
   git remote add origin git@github.com:<username>/<repo-name>.git
   ```
4. Push to GitHub:
   ```bash
   git push -u origin main
   ```

### Vercel Deployment Runbook
- **Via Vercel Dashboard**:
  1. Open [vercel.com/new](https://vercel.com/new).
  2. Import the GitHub repository.
  3. Framework Preset: **Vite**.
  4. Root Directory: `./`.
  5. Click **Deploy**.
- **Via Vercel CLI**:
  ```bash
  npx vercel deploy --prod --yes
  ```
