import React, { useState } from 'react';
import {
  Sliders,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Bot,
  Globe,
  TrendingUp,
  Zap,
  Trash2,
  Phone,
  Send,
} from 'lucide-react';
import { CUSTOM_PLAN_CATEGORIES, CUSTOM_PLAN_FEATURES } from '../data/customPlanFeatures';
import { storageService } from '../services/storageService';
import type { CustomPlanItem } from '../types';

interface CustomPlanBuilderProps {
  onSuccessEnquiry: (enquiryId: string) => void;
}

export const CustomPlanBuilder: React.FC<CustomPlanBuilderProps> = ({ onSuccessEnquiry }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedPrimaryService, setSelectedPrimaryService] = useState<string>('Full-Stack Digital Growth');
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([
    'wd-landing',
    'cb-whatsapp',
    'seo-gbp',
  ]);
  const [timeline, setTimeline] = useState<string>('2-3 Weeks (Standard Delivery)');
  const [budgetPreference, setBudgetPreference] = useState<string>('₹35,000 - ₹75,000');

  // Customer Contact Fields
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEnquiryId, setSubmittedEnquiryId] = useState<string | null>(null);
  const [formError, setFormError] = useState('');

  const selectedItems = CUSTOM_PLAN_FEATURES.filter((f) => selectedItemIds.includes(f.id));

  const totalMin = selectedItems.reduce((acc, curr) => acc + curr.estCostMin, 0);
  const totalMax = selectedItems.reduce((acc, curr) => acc + curr.estCostMax, 0);

  const toggleItem = (id: string) => {
    if (selectedItemIds.includes(id)) {
      setSelectedItemIds(selectedItemIds.filter((item) => item !== id));
    } else {
      setSelectedItemIds([...selectedItemIds, id]);
    }
  };

  const removeItem = (id: string) => {
    setSelectedItemIds(selectedItemIds.filter((item) => item !== id));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setFormError('Please enter your Name, Work Email, and WhatsApp number.');
      return;
    }

    if (selectedItems.length === 0) {
      setFormError('Please select at least one feature or capability.');
      return;
    }

    setIsSubmitting(true);

    try {
      const selections = selectedItems.map((item) => ({
        category: item.category,
        featureName: item.name,
      }));

      const record = storageService.saveEnquiry({
        type: 'custom_plan',
        name: fullName,
        company: companyName,
        email,
        phone,
        projectType: selectedPrimaryService,
        budgetRange: budgetPreference,
        timeline,
        customSelections: selections,
        description: `Selected Features (${selectedItems.length}): ${selectedItems
          .map((i) => i.name)
          .join(', ')} | Note: ${projectDescription || 'Custom Configurator Request'}`,
      });

      setIsSubmitting(false);
      setSubmittedEnquiryId(record.id);
      onSuccessEnquiry(record.id);
    } catch {
      setIsSubmitting(false);
      setFormError('Failed to record submission. Please check connection.');
    }
  };

  const primaryObjectives = [
    {
      id: 'Full-Stack Digital Growth',
      title: 'Full Digital Transformation',
      desc: 'Combine custom web app, conversational AI assistant, and local search dominance.',
      icon: Sparkles,
    },
    {
      id: 'Web & E-Commerce Infrastructure',
      title: 'Web & E-Commerce Build',
      desc: 'Modern website, custom customer portal, shopping carts, and payment gateways.',
      icon: Globe,
    },
    {
      id: 'AI Chatbot & Workflow Automation',
      title: 'AI Automation & Chatbots',
      desc: 'Autonomous lead qualification, 24/7 client query resolution, and WhatsApp sync.',
      icon: Bot,
    },
    {
      id: 'Search Engine & Organic Authority',
      title: 'SEO & Search Scaling',
      desc: 'Technical hygiene, Google Business Profile Maps 3-pack, and IndexNow push.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="py-12 relative" id="custom-plan-section" aria-labelledby="custom-plan-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-700 dark:text-[#2391FF] uppercase tracking-wider mb-3">
            Module 04 • Bespoke Architecture
          </div>
          <h2 id="custom-plan-heading" className="text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight font-['Barlow']">
            Custom Plan Configurator
          </h2>
          <p className="mt-4 text-[var(--muted)] text-base sm:text-lg">
            No rigid plans. Hand-pick the exact capabilities you need across Chatbots, Web Development, SEO, and Automation to generate a custom project proposal.
          </p>
        </div>

        {submittedEnquiryId ? (
          <div className="glass-panel max-w-2xl mx-auto p-10 rounded-2xl border border-emerald-500/40 text-center space-y-6 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-heading)] font-['Barlow']">
              Custom Proposal Request Recorded!
            </h3>
            <p className="text-xs sm:text-sm text-[var(--muted)]">
              Thank you, <strong className="text-[var(--text-heading)]">{fullName}</strong>. Your custom plan reference is{' '}
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-200/80 dark:bg-[#181e29] text-sky-700 dark:text-[#2391FF] border border-sky-400/40">
                {submittedEnquiryId}
              </span>
              . Our solution architect will prepare your formal proposal with line-item milestones.
            </p>

            <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-left text-xs space-y-2">
              <div className="text-[var(--text-heading)] font-semibold">Configured Package:</div>
              <div className="text-[var(--muted)]">Primary Goal: {selectedPrimaryService}</div>
              <div className="text-[var(--muted)]">
                Selected Features: {selectedItems.map((i) => i.name).join(', ')}
              </div>
              <div className="text-[var(--muted)]">Timeline: {timeline}</div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={`https://wa.me/917708795342?text=${encodeURIComponent(
                  `Hi BlazeByte Studio! I created a custom plan (Ref: ${submittedEnquiryId}) with ${selectedItems.length} features. My name is ${fullName}. Can we review the estimate?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Discuss on WhatsApp Instantly</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmittedEnquiryId(null);
                  setCurrentStep(1);
                  setSelectedItemIds(['wd-landing', 'cb-whatsapp', 'seo-gbp']);
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-medium text-[var(--muted)] hover:text-[var(--text-heading)] bg-black/5 dark:bg-white/5 border border-slate-300 dark:border-white/10 cursor-pointer"
              >
                Build Another Plan
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            {/* Left Column: Multi-Step Interactive Configurator */}
            <div className="lg:col-span-8 space-y-6">
              {/* Step Progress Indicators */}
              <nav aria-label="Custom plan configurator steps" className="glass-panel p-4 rounded-xl border border-slate-200 dark:border-white/10 flex items-center justify-between overflow-x-auto text-xs">
                {[
                  { step: 1, label: '1. Objective' },
                  { step: 2, label: '2. Features' },
                  { step: 3, label: '3. Add-ons' },
                  { step: 4, label: '4. Delivery' },
                  { step: 5, label: '5. Contact' },
                ].map((s) => (
                  <button
                    key={s.step}
                    type="button"
                    aria-current={currentStep === s.step ? 'step' : undefined}
                    onClick={() => setCurrentStep(s.step)}
                    className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer font-medium ${
                      currentStep === s.step
                        ? 'bg-sky-600 dark:bg-[#2391FF] text-white font-bold shadow-md shadow-sky-600/20'
                        : currentStep > s.step
                        ? 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-white/[0.03]'
                        : 'text-[var(--muted)] hover:text-[var(--text-heading)]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </nav>

              {/* Step 1: Primary Objective */}
              {currentStep === 1 && (
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-heading)] font-['Barlow']">
                      Step 1: Choose Your Primary Focus
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1">
                      What is the primary commercial objective for your business right now?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {primaryObjectives.map((obj) => {
                      const Icon = obj.icon;
                      const isSelected = selectedPrimaryService === obj.id;
                      return (
                        <div
                          key={obj.id}
                          tabIndex={0}
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setSelectedPrimaryService(obj.id)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setSelectedPrimaryService(obj.id);
                            }
                          }}
                          className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'bg-sky-500/15 border-sky-500 shadow-md shadow-sky-500/10'
                              : 'bg-black/[0.02] dark:bg-white/[0.02] border-slate-300 dark:border-white/10 hover:border-slate-400'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-600 dark:text-[#2391FF]">
                                <Icon className="w-5 h-5" aria-hidden="true" />
                              </div>
                              {isSelected && (
                                <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
                              )}
                            </div>
                            <h4 className="text-sm font-bold text-[var(--text-heading)] mb-1">{obj.title}</h4>
                            <p className="text-xs text-[var(--muted)]">{obj.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 flex items-center gap-2 cursor-pointer shadow-md shadow-sky-600/25"
                    >
                      <span>Proceed to Core Features</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Core Features (Web & Chatbot) */}
              {currentStep === 2 && (
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-heading)] font-['Barlow']">
                      Step 2: Web & AI Chatbot Capabilities
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1">
                      Toggle the components you wish to include in your digital build.
                    </p>
                  </div>

                  {/* AI Chatbot Group */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-[#2391FF] mb-3 flex items-center gap-1.5">
                      <Bot className="w-4 h-4" aria-hidden="true" />
                      <span>AI Chatbot Options</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="AI Chatbot Options">
                      {CUSTOM_PLAN_FEATURES.filter((f) => f.category === 'chatbot').map((f) => {
                        const isSelected = selectedItemIds.includes(f.id);
                        return (
                          <div
                            key={f.id}
                            tabIndex={0}
                            role="checkbox"
                            aria-checked={isSelected}
                            onClick={() => toggleItem(f.id)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleItem(f.id);
                              }
                            }}
                            className={`p-4 rounded-xl border text-xs transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-sky-500/15 border-sky-500'
                                : 'bg-black/[0.02] dark:bg-white/[0.02] border-slate-300 dark:border-white/10 hover:border-slate-400'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <span className="font-semibold text-[var(--text-heading)]">{f.name}</span>
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 ${
                                  isSelected ? 'text-sky-600 dark:text-[#2391FF]' : 'text-slate-400 dark:text-white/20'
                                }`}
                                aria-hidden="true"
                              />
                            </div>
                            <p className="text-[11px] text-[var(--muted)] mb-2">{f.description}</p>
                            <div className="text-[10px] text-sky-700 dark:text-[#2391FF] font-mono">
                              Est. ₹{f.estCostMin.toLocaleString()} - ₹{f.estCostMax.toLocaleString()}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Web Development Group */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-[#2391FF] mb-3 flex items-center gap-1.5">
                      <Globe className="w-4 h-4" aria-hidden="true" />
                      <span>Web Design & Infrastructure Options</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="Web Infrastructure Options">
                      {CUSTOM_PLAN_FEATURES.filter((f) => f.category === 'webdev').map((f) => {
                        const isSelected = selectedItemIds.includes(f.id);
                        return (
                          <div
                            key={f.id}
                            tabIndex={0}
                            role="checkbox"
                            aria-checked={isSelected}
                            onClick={() => toggleItem(f.id)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleItem(f.id);
                              }
                            }}
                            className={`p-4 rounded-xl border text-xs transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-sky-500/15 border-sky-500'
                                : 'bg-black/[0.02] dark:bg-white/[0.02] border-slate-300 dark:border-white/10 hover:border-slate-400'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <span className="font-semibold text-[var(--text-heading)]">{f.name}</span>
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 ${
                                  isSelected ? 'text-sky-600 dark:text-[#2391FF]' : 'text-slate-400 dark:text-white/20'
                                }`}
                                aria-hidden="true"
                              />
                            </div>
                            <p className="text-[11px] text-[var(--muted)] mb-2">{f.description}</p>
                            <div className="text-[10px] text-sky-700 dark:text-[#2391FF] font-mono">
                              Est. ₹{f.estCostMin.toLocaleString()} - ₹{f.estCostMax.toLocaleString()}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-4 py-2 text-xs text-[var(--muted)] hover:text-[var(--text-heading)] flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 flex items-center gap-2 shadow-md shadow-sky-600/25 cursor-pointer"
                    >
                      <span>Next: SEO & Marketing Add-ons</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: SEO & Marketing Add-ons */}
              {currentStep === 3 && (
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-heading)] font-['Barlow']">
                      Step 3: Search Engine Optimization & Growth Add-ons
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1">
                      Choose organic ranking modules and automated lead generation funnels.
                    </p>
                  </div>

                  {/* SEO Group */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-[#2391FF] mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" aria-hidden="true" />
                      <span>SEO & Search Authority Modules</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="SEO Modules">
                      {CUSTOM_PLAN_FEATURES.filter((f) => f.category === 'seo').map((f) => {
                        const isSelected = selectedItemIds.includes(f.id);
                        return (
                          <div
                            key={f.id}
                            tabIndex={0}
                            role="checkbox"
                            aria-checked={isSelected}
                            onClick={() => toggleItem(f.id)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleItem(f.id);
                              }
                            }}
                            className={`p-4 rounded-xl border text-xs transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-sky-500/15 border-sky-500'
                                : 'bg-black/[0.02] dark:bg-white/[0.02] border-slate-300 dark:border-white/10 hover:border-slate-400'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <span className="font-semibold text-[var(--text-heading)]">{f.name}</span>
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 ${
                                  isSelected ? 'text-sky-600 dark:text-[#2391FF]' : 'text-slate-400 dark:text-white/20'
                                }`}
                                aria-hidden="true"
                              />
                            </div>
                            <p className="text-[11px] text-[var(--muted)] mb-2">{f.description}</p>
                            <div className="text-[10px] text-sky-700 dark:text-[#2391FF] font-mono">
                              Est. ₹{f.estCostMin.toLocaleString()} - ₹{f.estCostMax.toLocaleString()}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Marketing Addons Group */}
                  <div className="pt-4 border-t border-slate-200 dark:border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-[#2391FF] mb-3 flex items-center gap-1.5">
                      <Zap className="w-4 h-4" aria-hidden="true" />
                      <span>Marketing & Process Automation Add-ons</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="Marketing and Automation Add-ons">
                      {CUSTOM_PLAN_FEATURES.filter((f) => f.category === 'addons').map((f) => {
                        const isSelected = selectedItemIds.includes(f.id);
                        return (
                          <div
                            key={f.id}
                            tabIndex={0}
                            role="checkbox"
                            aria-checked={isSelected}
                            onClick={() => toggleItem(f.id)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleItem(f.id);
                              }
                            }}
                            className={`p-4 rounded-xl border text-xs transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-sky-500/15 border-sky-500'
                                : 'bg-black/[0.02] dark:bg-white/[0.02] border-slate-300 dark:border-white/10 hover:border-slate-400'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <span className="font-semibold text-[var(--text-heading)]">{f.name}</span>
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 ${
                                  isSelected ? 'text-sky-600 dark:text-[#2391FF]' : 'text-slate-400 dark:text-white/20'
                                }`}
                                aria-hidden="true"
                              />
                            </div>
                            <p className="text-[11px] text-[var(--muted)] mb-2">{f.description}</p>
                            <div className="text-[10px] text-sky-700 dark:text-[#2391FF] font-mono">
                              Est. ₹{f.estCostMin.toLocaleString()} - ₹{f.estCostMax.toLocaleString()}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-4 py-2 text-xs text-[var(--muted)] hover:text-[var(--text-heading)] flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 flex items-center gap-2 shadow-md shadow-sky-600/25 cursor-pointer"
                    >
                      <span>Next: Timeline & Budget</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Timeline & Preferences */}
              {currentStep === 4 && (
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-heading)] font-['Barlow']">
                      Step 4: Delivery Timeline & Investment Scope
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1">
                      Define when you need this live and your planned investment range.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-semibold text-[var(--text-heading)] block mb-2">
                        Preferred Deployment Schedule
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Deployment schedule selection">
                        {[
                          '1-2 Weeks (Rapid Sprint)',
                          '2-3 Weeks (Standard Delivery)',
                          '4-6 Weeks (Phased Rollout)',
                        ].map((t) => (
                          <div
                            key={t}
                            tabIndex={0}
                            role="radio"
                            aria-checked={timeline === t}
                            onClick={() => setTimeline(t)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setTimeline(t);
                              }
                            }}
                            className={`p-4 rounded-xl border text-xs cursor-pointer text-center font-medium transition-all ${
                              timeline === t
                                ? 'bg-sky-500/15 border-sky-500 text-sky-800 dark:text-white shadow-md shadow-sky-500/10'
                                : 'bg-black/[0.02] dark:bg-white/[0.02] border-slate-300 dark:border-white/10 text-[var(--muted)] hover:border-slate-400'
                            }`}
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 dark:border-white/5">
                      <div className="text-xs font-semibold text-[var(--text-heading)] block mb-2">
                        Estimated Budget Bracket
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3" role="radiogroup" aria-label="Budget bracket selection">
                        {[
                          '₹15,000 - ₹35,000',
                          '₹35,000 - ₹75,000',
                          '₹75,000 - ₹1,50,000',
                          '₹1,50,000+ Custom',
                        ].map((b) => (
                          <div
                            key={b}
                            tabIndex={0}
                            role="radio"
                            aria-checked={budgetPreference === b}
                            onClick={() => setBudgetPreference(b)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setBudgetPreference(b);
                              }
                            }}
                            className={`p-3.5 rounded-xl border text-xs cursor-pointer text-center font-medium transition-all ${
                              budgetPreference === b
                                ? 'bg-sky-500/15 border-sky-500 text-sky-800 dark:text-white shadow-md shadow-sky-500/10'
                                : 'bg-black/[0.02] dark:bg-white/[0.02] border-slate-300 dark:border-white/10 text-[var(--muted)] hover:border-slate-400'
                            }`}
                          >
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-4 py-2 text-xs text-[var(--muted)] hover:text-[var(--text-heading)] flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(5)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 flex items-center gap-2 shadow-md shadow-sky-600/25 cursor-pointer"
                    >
                      <span>Next: Enter Details & Review</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 5: Contact & Final Review with Accessible Form Controls */}
              {currentStep === 5 && (
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-heading)] font-['Barlow']">
                      Step 5: Review Selections & Request Formal Proposal
                    </h3>
                    <p className="text-xs text-[var(--muted)] mt-1">
                      Enter your details to receive an itemized proposal and timeline breakdown.
                    </p>
                  </div>

                  {formError && (
                    <div role="alert" className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-600 dark:text-red-400">
                      {formError}
                    </div>
                  )}

                  <form onSubmit={handleFinalSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="custom-name" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                          Full Name *
                        </label>
                        <input
                          id="custom-name"
                          type="text"
                          required
                          aria-required="true"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Bharath Raj"
                          className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="custom-company" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                          Company / Venture Name
                        </label>
                        <input
                          id="custom-company"
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. BlazeByte Studio"
                          className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="custom-email" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                          Work Email Address *
                        </label>
                        <input
                          id="custom-email"
                          type="email"
                          required
                          aria-required="true"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="contact@company.com"
                          className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                        />
                      </div>
                      <div>
                        <label htmlFor="custom-phone" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                          WhatsApp / Phone *
                        </label>
                        <input
                          id="custom-phone"
                          type="tel"
                          required
                          aria-required="true"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 77087 95342"
                          className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="custom-notes" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                        Additional Notes or Specific Integrations Needed
                      </label>
                      <textarea
                        id="custom-notes"
                        rows={3}
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="Mention any custom APIs, database preferences, or brand guidelines..."
                        className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/10">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(4)}
                        className="px-4 py-2 text-xs text-[var(--muted)] hover:text-[var(--text-heading)] flex items-center gap-1.5 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 flex items-center gap-2 shadow-lg shadow-sky-600/25 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{isSubmitting ? 'Recording Proposal...' : 'Submit Custom Plan Request'}</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Live Summary Panel */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="glass-panel rounded-2xl p-6 border border-sky-400/30 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                  <h4 className="text-base font-bold text-[var(--text-heading)] font-['Barlow'] flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
                    <span>Package Summary</span>
                  </h4>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-[#2391FF] font-semibold border border-sky-500/20">
                    {selectedItems.length} Features
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="text-[var(--muted)]">Primary Objective:</div>
                  <div className="font-semibold text-[var(--text-heading)] text-sm">{selectedPrimaryService}</div>
                </div>

                {/* Selected Features List */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-white/5">
                  <div className="text-xs font-semibold text-[var(--text-heading)]">Chosen Capabilities:</div>
                  {selectedItems.length === 0 ? (
                    <div className="text-xs text-[var(--muted)] italic py-2">
                      No features selected yet. Choose options from the left.
                    </div>
                  ) : (
                    <div className="max-h-56 overflow-y-auto space-y-2 pr-1">
                      {selectedItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-2 rounded-lg bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 text-xs group"
                        >
                          <span className="text-[var(--text)] truncate max-w-[190px]">{item.name}</span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-[var(--muted)] hover:text-red-500 p-1 transition-colors cursor-pointer"
                            aria-label={`Remove ${item.name} from plan`}
                            title="Remove feature"
                          >
                            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Timeline & Estimate */}
                <div className="pt-4 border-t border-slate-200 dark:border-white/10 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[var(--muted)]">Target Timeline:</span>
                    <span className="text-[var(--text-heading)] font-medium">{timeline}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 space-y-1">
                    <div className="text-[11px] text-[var(--muted)]">Indicative Budget Range:</div>
                    <div className="text-lg font-bold text-[var(--text-heading)] font-['Barlow']">
                      {totalMin === 0 ? (
                        'Request Custom Quote'
                      ) : (
                        `₹${totalMin.toLocaleString()} - ₹${totalMax.toLocaleString()}`
                      )}
                    </div>
                    <div className="text-[10px] text-[var(--muted)]">
                      *Final price confirmed based on specific API & hosting requirements.
                    </div>
                  </div>
                </div>

                {/* Quick Step Jump */}
                {currentStep < 5 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(5)}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-[var(--text-heading)] bg-black/5 hover:bg-sky-600 hover:text-white dark:bg-white/5 dark:hover:bg-[#2391FF] border border-slate-300 dark:border-white/10 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Proceed to Submission</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
