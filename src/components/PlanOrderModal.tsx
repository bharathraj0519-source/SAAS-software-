import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Sparkles, Send, Phone, Lock } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#181e29] border border-[#2391FF]/30 rounded-2xl w-full max-w-lg shadow-2xl flex flex-col overflow-hidden relative">
        {/* Header */}
        <div className="px-6 py-4 bg-[#141822] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-[#2391FF]" />
            <h3 className="text-base font-bold text-white font-['Barlow']">
              Plan Selection & Activation Request
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#B7B09E] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white font-['Barlow']">
                Plan Request Logged: {assignedId}
              </h4>
              <p className="text-xs text-[#B7B09E] max-w-xs mx-auto">
                Thank you, {customerName}! Your subscription request for the{' '}
                <strong className="text-white">{plan.name} Tier</strong> has been assigned reference ID{' '}
                <span className="font-mono text-[#2391FF]">{assignedId}</span>.
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
                  <Phone className="w-3.5 h-3.5" />
                  <span>Connect with Onboarding Team on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-[#B7B09E] hover:text-white"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Selected Plan Summary Pill */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-[#2391FF]/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#B7B09E]">Selected Plan:</div>
                  <div className="text-base font-bold text-white font-['Barlow'] flex items-center gap-2">
                    <span>{plan.name} Plan</span>
                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#2391FF]/20 text-[#2391FF]">
                      {plan.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-extrabold text-white">{displayPrice}</div>
                  {plan.priceMonthly > 0 && (
                    <button
                      type="button"
                      onClick={() =>
                        setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')
                      }
                      className="text-[10px] text-[#2391FF] hover:underline block mt-0.5"
                    >
                      Switch to {billingPeriod === 'monthly' ? 'Annual (Save 20%)' : 'Monthly'}
                    </button>
                  )}
                </div>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                  {errorMsg}
                </div>
              )}

              <div>
                <label className="text-xs font-semibold text-white block mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Bharath Raj"
                  className="w-full bg-[#202734] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-white block mb-1">
                  Business / Company Name
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. BlazeByte Studio"
                  className="w-full bg-[#202734] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-white block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full bg-[#202734] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-white block mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 77087 95342"
                    className="w-full bg-[#202734] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-white block mb-1">
                  Specific Requirements / Use Case
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Optional details or specific website URL to configure..."
                  className="w-full bg-[#202734] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2391FF] to-[#0070e0] hover:from-[#3ea0ff] hover:to-[#2391FF] flex items-center justify-center gap-2 shadow-lg shadow-[#2391FF]/25 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Recording Request...' : 'Confirm Plan Selection'}</span>
                </button>
              </div>

              <div className="text-[11px] text-[#B7B09E] text-center flex items-center justify-center gap-1.5 pt-1">
                <Lock className="w-3 h-3 text-[#2391FF]" />
                <span>Zero spam. No automated credit-card deductions without authorization.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
