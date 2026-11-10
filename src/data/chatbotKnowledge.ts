export interface ChatFAQ {
  keywords: string[];
  response: string;
  suggestedActions?: string[];
  planTier?: 'free' | 'plus' | 'pro';
}

export const CHATBOT_KNOWLEDGE_BASE: ChatFAQ[] = [
  {
    keywords: ['services', 'what do you do', 'offer', 'help'],
    response: "BlazeByte Studio specializes in three core pillars: 1) AI Chatbot & Automation Systems, 2) Custom High-Performance Web Design & Full-Stack Development, and 3) Results-Driven Technical & Local SEO. Which service fits your current goals?",
    suggestedActions: ["Explore Web Design", "AI Chatbot Demo", "SEO Services", "Build Custom Package"],
  },
  {
    keywords: ['price', 'pricing', 'cost', 'how much', 'budget', 'rate'],
    response: "Our pricing is transparent and tailored to your scope: Chatbot plans start from Free trial up to ₹4,999/mo for Enterprise Pro. SEO plans start at ₹4,999/mo for Plus and ₹11,999/mo for Pro. Custom web builds vary based on pages and integrations. Would you like to build a custom plan to get an instant quote?",
    suggestedActions: ["Build Custom Plan", "Chatbot Pricing", "SEO Pricing", "Talk to Team on WhatsApp"],
  },
  {
    keywords: ['web', 'website', 'design', 'development', 'pages'],
    response: "We craft modern, ultra-fast websites using Next.js, React, and Tailwind CSS with sub-second loading times. We specialize in Landing Pages, Corporate Business Websites, and Custom Web Applications with interactive portals.",
    suggestedActions: ["Try Device Preview Demo", "Request Web Quote", "Talk to an Architect"],
  },
  {
    keywords: ['seo', 'rank', 'google', 'search', 'ranking', 'keywords'],
    response: "Our SEO services are purely data-driven. We don't do fluff — we optimize crawlability, resolve content gaps, implement rich Schema.org markup, and dominate Google Maps local packs. Note: SEO is available under our Plus and Pro tiers.",
    suggestedActions: ["View SEO Analytics Demo", "Check SEO Plans", "Request Technical Audit"],
  },
  {
    keywords: ['whatsapp', 'call', 'contact', 'phone', 'support', 'meet', 'talk'],
    response: "You can reach the BlazeByte Studio engineering team directly via WhatsApp at +91 7708795342 or email at contact@blazebytestudio7.com. We are based in Coimbatore, Tamil Nadu, India.",
    suggestedActions: ["Open WhatsApp Now", "Submit Project Enquiry"],
  },
  {
    keywords: ['timeline', 'how long', 'duration', 'delivery', 'turnaround'],
    response: "High-converting landing pages are typically delivered within 7 to 10 days. Comprehensive business websites take 2 to 3 weeks, while custom SaaS platforms and complex automations take 4 to 6 weeks with staged milestones.",
    suggestedActions: ["Get a Project Timeline", "Build Custom Plan"],
  },
  {
    keywords: ['technology', 'tech stack', 'flutter', 'react', 'next'],
    response: "We build on enterprise-grade modern stacks: React 19, Next.js, TypeScript, Tailwind CSS, Cloudflare Edge, Supabase/PostgreSQL, and Flutter for cross-platform mobile apps.",
    suggestedActions: ["Explore Web Capabilities", "Discuss Architecture"],
  },
];

export const INITIAL_BOT_MESSAGES = {
  free: "👋 Welcome to BlazeByte Studio's Free Chatbot Preview! I can answer standard FAQs about our services, business hours, and core offerings. Try asking below!",
  plus: "🚀 Hello! You are testing our PLUS AI Chatbot. I'm connected to BlazeByte Studio's knowledge base and can capture your requirements and instantly connect you to our team on WhatsApp.",
  pro: "⚡ Welcome to our PRO Enterprise AI Agent. In Pro mode, I feature multi-step qualification, CRM lead synchronization, dynamic webhook simulation, and custom persona instructions. How can I accelerate your business today?",
};
