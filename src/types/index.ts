export type ServiceCategory = 'chatbot' | 'webdev' | 'seo' | 'automation';

export interface PlanFeature {
  name: string;
  included: boolean;
  tooltip?: string;
  limit?: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  category: 'chatbot' | 'seo';
  tier: 'free' | 'plus' | 'pro';
  tagline: string;
  priceMonthly: number;
  priceYearly: number;
  isPopular?: boolean;
  features: PlanFeature[];
  limits: {
    messages?: string;
    bots?: string;
    support: string;
    crawledPages?: string;
    frequency?: string;
  };
  ctaText: string;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  suggestedActions?: string[];
  leadCaptured?: boolean;
}

export interface SeoHistoricalRecord {
  id: string;
  title: string;
  category: 'GSC' | 'Indexing' | 'Routes' | 'Technical' | 'Local SEO' | 'Profile';
  metric: string;
  status: 'Verified' | 'Cleared' | 'Completed' | 'Pending Review';
  date: string;
  details: string;
}

export interface SeoKeywordRecord {
  keyword: string;
  volume: string;
  difficulty: string;
  intent: 'Commercial' | 'Informational' | 'Transactional';
  status: string;
  cpc: string;
}

export interface SeoTechnicalIssue {
  id: string;
  title: string;
  severity: 'Critical' | 'Warning' | 'Passed';
  status: 'Resolved' | 'In Progress' | 'Monitoring';
  affectedUrl: string;
  recommendation: string;
}

export interface CustomPlanItem {
  id: string;
  category: 'chatbot' | 'webdev' | 'seo' | 'addons';
  name: string;
  description: string;
  estCostMin: number;
  estCostMax: number;
  recommendedFor?: string;
}

export interface ProjectEnquiry {
  id: string;
  createdAt: string;
  type: 'general' | 'webdev' | 'chatbot_plan' | 'seo_plan' | 'custom_plan';
  name: string;
  email: string;
  phone: string;
  company?: string;
  selectedPlanId?: string;
  selectedPlanName?: string;
  customSelections?: {
    category: string;
    featureName: string;
  }[];
  projectType?: string;
  budgetRange?: string;
  timeline?: string;
  description: string;
  status: 'New' | 'In Review' | 'Contacted' | 'Archived';
}

export interface AdminSettings {
  demoModeNotice: boolean;
  pricingOverrides: Record<string, { monthly: number; yearly: number }>;
}
