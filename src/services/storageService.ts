import type { ProjectEnquiry, AdminSettings } from '../types';

const ENQUIRIES_KEY = 'blazebyte_enquiries';
const ADMIN_SETTINGS_KEY = 'blazebyte_admin_settings';
const AUTH_KEY = 'blazebyte_auth_user';

export const storageService = {
  getEnquiries(): ProjectEnquiry[] {
    const raw = localStorage.getItem(ENQUIRIES_KEY);
    if (!raw) {
      const initial: ProjectEnquiry[] = [
        {
          id: 'ENQ-8941',
          createdAt: new Date(Date.now() - 3600000 * 24 * 2).toISOString(),
          type: 'webdev',
          name: 'Arun Kumar',
          company: 'Aura Logistics Tech',
          email: 'arun@auralogistics.in',
          phone: '+91 98450 12345',
          projectType: 'Corporate Business Website',
          budgetRange: '₹35,000 - ₹75,000',
          timeline: '2-3 Weeks',
          description: 'Need a fast corporate website with customer shipment tracking widget and WhatsApp enquiry redirect.',
          status: 'In Review',
        },
        {
          id: 'ENQ-8942',
          createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
          type: 'chatbot_plan',
          name: 'Priya Sundaram',
          company: 'Sundaram Wellness Clinics',
          email: 'priya@sundaramclinics.com',
          phone: '+91 94432 98765',
          selectedPlanId: 'chatbot-plus',
          selectedPlanName: 'AI Chatbot Plus Tier',
          description: 'Looking to automate patient appointment inquiries on our web portal and route high-priority queries to WhatsApp.',
          status: 'New',
        },
        {
          id: 'ENQ-8943',
          createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
          type: 'seo_plan',
          name: 'Karthik Raja',
          company: 'Veloce Auto Spare Parts',
          email: 'karthik@veloceparts.com',
          phone: '+91 97890 54321',
          selectedPlanId: 'seo-pro',
          selectedPlanName: 'SEO Pro Tier',
          description: 'We need to dominate Coimbatore and South India local Google searches for wholesale spare parts and fix crawl errors.',
          status: 'Contacted',
        },
      ];
      localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(initial));
      return initial;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return [];
    }
  },

  saveEnquiry(enquiry: Omit<ProjectEnquiry, 'id' | 'createdAt' | 'status'>): ProjectEnquiry {
    const all = this.getEnquiries();
    const newRecord: ProjectEnquiry = {
      ...enquiry,
      id: `ENQ-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
      status: 'New',
    };
    const updated = [newRecord, ...all];
    localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(updated));
    return newRecord;
  },

  updateEnquiryStatus(id: string, status: ProjectEnquiry['status']): void {
    const all = this.getEnquiries();
    const updated = all.map(item => item.id === id ? { ...item, status } : item);
    localStorage.setItem(ENQUIRIES_KEY, JSON.stringify(updated));
  },

  getAdminSettings(): AdminSettings {
    const raw = localStorage.getItem(ADMIN_SETTINGS_KEY);
    if (!raw) {
      const defaults: AdminSettings = {
        demoModeNotice: true,
        pricingOverrides: {},
      };
      localStorage.setItem(ADMIN_SETTINGS_KEY, JSON.stringify(defaults));
      return defaults;
    }
    try {
      return JSON.parse(raw);
    } catch {
      return { demoModeNotice: true, pricingOverrides: {} };
    }
  },

  saveAdminSettings(settings: AdminSettings): void {
    localStorage.setItem(ADMIN_SETTINGS_KEY, JSON.stringify(settings));
  },

  getAuthUser(): { role: 'guest' | 'user' | 'admin'; email?: string } {
    const raw = localStorage.getItem(AUTH_KEY);
    if (!raw) return { role: 'guest' };
    try {
      return JSON.parse(raw);
    } catch {
      return { role: 'guest' };
    }
  },

  setAuthUser(auth: { role: 'guest' | 'user' | 'admin'; email?: string }): void {
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  },
};
