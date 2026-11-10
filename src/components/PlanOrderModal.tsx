import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, Phone } from 'lucide-react';
import { storageService } from '../services/storageService';
import type { SubscriptionPlan } from '../types';

interface PlanOrderModalProps {
  plan: SubscriptionPlan | null;
  onClose: () => void;
  onSuccess: (enquiryId: string) => void;
}

export const PlanOrderModal: React.FC<PlanOrderModalProps> = ({ plan, onClose, onSuccess }) => {
  if (!plan) return null;

  const [customerName, setCustomerName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [assignedId, setAssignedId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const displayPrice =
    billingPeriod === 'monthly'
      ? plan.priceMonthly === 0
        ? 'Free Demo / 14-Day Trial'
        : `₹${plan.priceMonthly.toLocaleString('en-IN')} / month`
      : plan.priceYearly === 0
      ? 'Free Demo'
      : `₹${Math.round(plan.priceYearly / 12).toLocaleString('en-IN')} / mo (₹${plan.priceYearly.toLocaleString(
          'en-IN'
        )} billed annually)`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!customerName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const enquiry = storageService.saveEnquiry({
        type: plan.category === 'chatbot' ? 'chatbot_plan' : 'seo_plan',
        name: customerName,
        company: businessName,
        email,
        phone,
        selectedPlanId: plan.id,
        selectedPlanName: `${plan.name} Plan (${plan.tier.toUpperCase()}) - ${billingPeriod}`,
        description: `Plan: ${plan.name} (${plan.category.toUpperCase()}) | Billing: ${billingPeriod} | Notes: ${
          notes || 'Subscription onboarding request'
        }`,
      });

      setIsSubmitting(false);
      setAssignedId(enquiry.id);
      setSubmitted(true);
      onSuccess(enquiry.id);
    } catch {
      setIsSubmitting(false);
      setErrorMsg('Submission error. Please try again.');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="plan-order-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="glass-panel border border-sky-400/30 rounded-2xl w-full max-w-lg shadow-2xl flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-100/90 dark:bg-[#141822] border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
            <h3 id="plan-order-title" className="text-base font-bold text-[var(--text-heading)] font-['Barlow']">
              Plan Selection & Activation Request
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg bg-slate-200/80 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 text-[var(--muted)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <h4 className="text-xl font-bold text-[var(--text-heading)] font-['Barlow']">
                Plan Request Logged: {assignedId}
              </h4>
              <p className="text-xs text-[var(--muted)] max-w-xs mx-auto">
                Thank you, {customerName}! Your subscription request for the{' '}
                <strong className="text-[var(--text-heading)]">{plan.name} Tier</strong> has been assigned reference ID{' '}
                <span className="font-mono text-sky-700 dark:text-[#2391FF]">{assignedId}</span>.
              </p>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href={`https://wa.me/917708795342?text=${encodeURIComponent(
                    `Hi BlazeByte Studio, I just requested the ${plan.name} (${plan.category}) plan (Ref: ${assignedId}). My name is ${customerName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Connect with Onboarding Team on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs text-[var(--muted)] hover:text-[var(--text-heading)] cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 font-['Barlow']">
              {errorMsg && (
                <div role="alert" className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-600 dark:text-red-400">
                  {errorMsg}
                </div>
              )}

              {/* Plan Snapshot */}
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[var(--muted)]">Selected Service Tier:</div>
                    <div className="text-base font-bold text-[var(--text-heading)]">{plan.name}</div>
                  </div>
                  <span className="text-xs font-semibold uppercase px-2.5 py-1 rounded bg-sky-500/10 text-sky-700 dark:text-[#2391FF] border border-sky-500/20">
                    {plan.tier}
                  </span>
                </div>
                <div className="text-sm font-semibold text-sky-700 dark:text-[#2391FF] pt-1 border-t border-slate-200 dark:border-white/5">
                  {displayPrice}
                </div>
              </div>

              {/* Billing Toggle */}
              <div>
                <label className="text-xs font-semibold text-[var(--text-heading)] block mb-1.5">
                  Billing Frequency
                </label>
                <div role="group" aria-label="Order billing period" className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    aria-pressed={billingPeriod === 'monthly'}
                    onClick={() => setBillingPeriod('monthly')}
                    className={`py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                      billingPeriod === 'monthly'
                        ? 'bg-sky-500/15 border-sky-500 text-sky-800 dark:text-white'
                        : 'border-slate-300 dark:border-white/10 text-[var(--muted)] hover:border-slate-400'
                    }`}
                  >
                    Monthly Retainer
                  </button>
                  <button
                    type="button"
                    aria-pressed={billingPeriod === 'yearly'}
                    onClick={() => setBillingPeriod('yearly')}
                    className={`py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                      billingPeriod === 'yearly'
                        ? 'bg-sky-500/15 border-sky-500 text-sky-800 dark:text-white'
                        : 'border-slate-300 dark:border-white/10 text-[var(--muted)] hover:border-slate-400'
                    }`}
                  >
                    Annual (Save 20%)
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="order-cust-name" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                    Your Name *
                  </label>
                  <input
                    id="order-cust-name"
                    type="text"
                    required
                    aria-required="true"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Bharath Raj"
                    className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="order-biz-name" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                    Company Name
                  </label>
                  <input
                    id="order-biz-name"
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Apex Enterprises"
                    className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="order-email" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                    Work Email *
                  </label>
                  <input
                    id="order-email"
                    type="email"
                    required
                    aria-required="true"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="order-phone" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    id="order-phone"
                    type="tel"
                    required
                    aria-required="true"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 77087 95342"
                    className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="order-notes" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                  Specific Requirements / Use Case (Optional)
                </label>
                <textarea
                  id="order-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Website URL, existing setup, or specific integrations..."
                  className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-[var(--muted)] hover:text-[var(--text-heading)] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md shadow-sky-600/25 cursor-pointer"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Plan Activation'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
