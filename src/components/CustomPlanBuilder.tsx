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
  Calendar,
  Phone,
  Send,
  HelpCircle,
  FileCheck,
  Building,
  Mail,
  User,
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
    <div className="py-12 relative" id="custom-plan-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2391FF]/10 border border-[#2391FF]/30 text-xs font-semibold text-[#2391FF] uppercase tracking-wider mb-3">
            Module 04 • Bespoke Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Barlow']">
            Custom Plan Configurator
          </h2>
          <p className="mt-4 text-[#B7B09E] text-base sm:text-lg">
            No rigid plans. Hand-pick the exact capabilities you need across Chatbots, Web Development, SEO, and Automation to generate a custom project proposal.
          </p>
        </div>

        {submittedEnquiryId ? (
          <div className="glass-panel max-w-2xl mx-auto p-10 rounded-2xl border border-emerald-500/40 text-center space-y-6 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white font-['Barlow']">
              Custom Proposal Request Recorded!
            </h3>
            <p className="text-xs sm:text-sm text-[#B7B09E]">
              Thank you, <strong className="text-white">{fullName}</strong>. Your custom plan reference is{' '}
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#181e29] text-[#2391FF] border border-[#2391FF]/40">
                {submittedEnquiryId}
              </span>
              . Our solution architect will prepare your formal proposal with line-item milestones.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 text-left text-xs space-y-2">
              <div className="text-white font-semibold">Configured Package:</div>
              <div className="text-[#B7B09E]">Primary Goal: {selectedPrimaryService}</div>
              <div className="text-[#B7B09E]">
                Selected Features: {selectedItems.map((i) => i.name).join(', ')}
              </div>
              <div className="text-[#B7B09E]">Timeline: {timeline}</div>
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
                <Phone className="w-4 h-4" />
                <span>Discuss on WhatsApp Instantly</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setSubmittedEnquiryId(null);
                  setCurrentStep(1);
                  setSelectedItemIds(['wd-landing', 'cb-whatsapp', 'seo-gbp']);
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-medium text-[#B7B09E] hover:text-white bg-white/5 border border-white/10"
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
              <div className="glass-panel p-4 rounded-xl border border-white/10 flex items-center justify-between overflow-x-auto text-xs">
                {[
                  { step: 1, label: '1. Objective' },
                  { step: 2, label: '2. Features' },
                  { step: 3, label: '3. Add-ons' },
                  { step: 4, label: '4. Delivery' },
                  { step: 5, label: '5. Contact' },
                ].map((s) => (
                  <button
                    key={s.step}
                    onClick={() => setCurrentStep(s.step)}
                    className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer font-medium ${
                      currentStep === s.step
                        ? 'bg-[#2391FF] text-white font-bold shadow-md shadow-[#2391FF]/20'
                        : currentStep > s.step
                        ? 'text-emerald-400 bg-white/[0.03]'
                        : 'text-[#B7B09E] hover:text-white'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Step 1: Primary Objective */}
              {currentStep === 1 && (
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Barlow']">
                      Step 1: Choose Your Primary Focus
                    </h3>
                    <p className="text-xs text-[#B7B09E] mt-1">
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
                          onClick={() => setSelectedPrimaryService(obj.id)}
                          className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'bg-[#2391FF]/15 border-[#2391FF] shadow-lg shadow-[#2391FF]/15'
                              : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <div className="w-10 h-10 rounded-lg bg-[#2391FF]/10 flex items-center justify-center text-[#2391FF]">
                                <Icon className="w-5 h-5" />
                              </div>
                              {isSelected && (
                                <CheckCircle2 className="w-5 h-5 text-[#2391FF]" />
                              )}
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">{obj.title}</h4>
                            <p className="text-xs text-[#B7B09E]">{obj.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2391FF] hover:bg-[#3ea0ff] flex items-center gap-2 cursor-pointer shadow-md shadow-[#2391FF]/25"
                    >
                      <span>Proceed to Core Features</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Core Features (Web & Chatbot) */}
              {currentStep === 2 && (
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Barlow']">
                      Step 2: Web & AI Chatbot Capabilities
                    </h3>
                    <p className="text-xs text-[#B7B09E] mt-1">
                      Toggle the components you wish to include in your digital build.
                    </p>
                  </div>

                  {/* AI Chatbot Group */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2391FF] mb-3 flex items-center gap-1.5">
                      <Bot className="w-4 h-4" />
                      <span>AI Chatbot Options</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CUSTOM_PLAN_FEATURES.filter((f) => f.category === 'chatbot').map((f) => {
                        const isSelected = selectedItemIds.includes(f.id);
                        return (
                          <div
                            key={f.id}
                            onClick={() => toggleItem(f.id)}
                            className={`p-4 rounded-xl border text-xs transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-[#2391FF]/15 border-[#2391FF]'
                                : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <span className="font-semibold text-white">{f.name}</span>
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 ${
                                  isSelected ? 'text-[#2391FF]' : 'text-white/20'
                                }`}
                              />
                            </div>
                            <p className="text-[11px] text-[#B7B09E] mb-2">{f.description}</p>
                            <div className="text-[10px] text-[#2391FF] font-mono">
                              Est. ₹{f.estCostMin.toLocaleString()} - ₹{f.estCostMax.toLocaleString()}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Web Development Group */}
                  <div className="pt-4 border-t border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2391FF] mb-3 flex items-center gap-1.5">
                      <Globe className="w-4 h-4" />
                      <span>Web Design & Infrastructure Options</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CUSTOM_PLAN_FEATURES.filter((f) => f.category === 'webdev').map((f) => {
                        const isSelected = selectedItemIds.includes(f.id);
                        return (
                          <div
                            key={f.id}
                            onClick={() => toggleItem(f.id)}
                            className={`p-4 rounded-xl border text-xs transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-[#2391FF]/15 border-[#2391FF]'
                                : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <span className="font-semibold text-white">{f.name}</span>
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 ${
                                  isSelected ? 'text-[#2391FF]' : 'text-white/20'
                                }`}
                              />
                            </div>
                            <p className="text-[11px] text-[#B7B09E] mb-2">{f.description}</p>
                            <div className="text-[10px] text-[#2391FF] font-mono">
                              Est. ₹{f.estCostMin.toLocaleString()} - ₹{f.estCostMax.toLocaleString()}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="px-4 py-2 text-xs text-[#B7B09E] hover:text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2391FF] hover:bg-[#3ea0ff] flex items-center gap-2 shadow-md shadow-[#2391FF]/25 cursor-pointer"
                    >
                      <span>Next: SEO & Marketing Add-ons</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: SEO & Marketing Add-ons */}
              {currentStep === 3 && (
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Barlow']">
                      Step 3: Search Engine Optimization & Growth Add-ons
                    </h3>
                    <p className="text-xs text-[#B7B09E] mt-1">
                      Choose organic ranking modules and automated lead generation funnels.
                    </p>
                  </div>

                  {/* SEO Group */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2391FF] mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" />
                      <span>SEO & Search Authority Modules</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CUSTOM_PLAN_FEATURES.filter((f) => f.category === 'seo').map((f) => {
                        const isSelected = selectedItemIds.includes(f.id);
                        return (
                          <div
                            key={f.id}
                            onClick={() => toggleItem(f.id)}
                            className={`p-4 rounded-xl border text-xs transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-[#2391FF]/15 border-[#2391FF]'
                                : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <span className="font-semibold text-white">{f.name}</span>
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 ${
                                  isSelected ? 'text-[#2391FF]' : 'text-white/20'
                                }`}
                              />
                            </div>
                            <p className="text-[11px] text-[#B7B09E] mb-2">{f.description}</p>
                            <div className="text-[10px] text-[#2391FF] font-mono">
                              Est. ₹{f.estCostMin.toLocaleString()} - ₹{f.estCostMax.toLocaleString()}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Marketing Addons Group */}
                  <div className="pt-4 border-t border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#2391FF] mb-3 flex items-center gap-1.5">
                      <Zap className="w-4 h-4" />
                      <span>Marketing & Process Automation Add-ons</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {CUSTOM_PLAN_FEATURES.filter((f) => f.category === 'addons').map((f) => {
                        const isSelected = selectedItemIds.includes(f.id);
                        return (
                          <div
                            key={f.id}
                            onClick={() => toggleItem(f.id)}
                            className={`p-4 rounded-xl border text-xs transition-all cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? 'bg-[#2391FF]/15 border-[#2391FF]'
                                : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <span className="font-semibold text-white">{f.name}</span>
                              <CheckCircle2
                                className={`w-4 h-4 shrink-0 ${
                                  isSelected ? 'text-[#2391FF]' : 'text-white/20'
                                }`}
                              />
                            </div>
                            <p className="text-[11px] text-[#B7B09E] mb-2">{f.description}</p>
                            <div className="text-[10px] text-[#2391FF] font-mono">
                              Est. ₹{f.estCostMin.toLocaleString()} - ₹{f.estCostMax.toLocaleString()}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="px-4 py-2 text-xs text-[#B7B09E] hover:text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => setCurrentStep(4)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2391FF] hover:bg-[#3ea0ff] flex items-center gap-2 shadow-md shadow-[#2391FF]/25 cursor-pointer"
                    >
                      <span>Next: Timeline & Budget</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Timeline & Preferences */}
              {currentStep === 4 && (
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Barlow']">
                      Step 4: Delivery Timeline & Investment Scope
                    </h3>
                    <p className="text-xs text-[#B7B09E] mt-1">
                      Define when you need this live and your planned investment range.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-white block mb-2">
                        Preferred Deployment Schedule
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          '1-2 Weeks (Rapid Sprint)',
                          '2-3 Weeks (Standard Delivery)',
                          '4-6 Weeks (Phased Rollout)',
                        ].map((t) => (
                          <div
                            key={t}
                            onClick={() => setTimeline(t)}
                            className={`p-4 rounded-xl border text-xs cursor-pointer text-center font-medium transition-all ${
                              timeline === t
                                ? 'bg-[#2391FF]/15 border-[#2391FF] text-white shadow-md shadow-[#2391FF]/15'
                                : 'bg-white/[0.02] border-white/10 text-[#B7B09E] hover:border-white/20'
                            }`}
                          >
                            {t}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5">
                      <label className="text-xs font-semibold text-white block mb-2">
                        Estimated Budget Bracket
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        {[
                          '₹15,000 - ₹35,000',
                          '₹35,000 - ₹75,000',
                          '₹75,000 - ₹1,50,000',
                          '₹1,50,000+ Custom',
                        ].map((b) => (
                          <div
                            key={b}
                            onClick={() => setBudgetPreference(b)}
                            className={`p-3.5 rounded-xl border text-xs cursor-pointer text-center font-medium transition-all ${
                              budgetPreference === b
                                ? 'bg-[#2391FF]/15 border-[#2391FF] text-white shadow-md shadow-[#2391FF]/15'
                                : 'bg-white/[0.02] border-white/10 text-[#B7B09E] hover:border-white/20'
                            }`}
                          >
                            {b}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="px-4 py-2 text-xs text-[#B7B09E] hover:text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={() => setCurrentStep(5)}
                      className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2391FF] hover:bg-[#3ea0ff] flex items-center gap-2 shadow-md shadow-[#2391FF]/25 cursor-pointer"
                    >
                      <span>Next: Enter Details & Review</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 5: Contact & Final Review */}
              {currentStep === 5 && (
                <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Barlow']">
                      Step 5: Review Selections & Request Formal Proposal
                    </h3>
                    <p className="text-xs text-[#B7B09E] mt-1">
                      Enter your details to receive an itemized proposal and timeline breakdown.
                    </p>
                  </div>

                  {formError && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                      {formError}
                    </div>
                  )}

                  <form onSubmit={handleFinalSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-white block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Bharath Raj"
                          className="w-full bg-[#202734] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-white block mb-1">
                          Company / Venture Name
                        </label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. BlazeByte Studio"
                          className="w-full bg-[#202734] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-white block mb-1">
                          Work Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="contact@company.com"
                          className="w-full bg-[#202734] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-white block mb-1">
                          WhatsApp / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 77087 95342"
                          className="w-full bg-[#202734] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-white block mb-1">
                        Additional Notes or Specific Integrations Needed
                      </label>
                      <textarea
                        rows={3}
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="Mention any custom APIs, database preferences, or brand guidelines..."
                        className="w-full bg-[#202734] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(4)}
                        className="px-4 py-2 text-xs text-[#B7B09E] hover:text-white flex items-center gap-1.5"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2391FF] to-[#0070e0] hover:from-[#3ea0ff] hover:to-[#2391FF] flex items-center gap-2 shadow-lg shadow-[#2391FF]/25 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>{isSubmitting ? 'Recording Proposal...' : 'Submit Custom Plan Request'}</span>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Live Summary Panel */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="glass-panel rounded-2xl p-6 border border-[#2391FF]/30 shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <h4 className="text-base font-bold text-white font-['Barlow'] flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-[#2391FF]" />
                    <span>Package Summary</span>
                  </h4>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-[#2391FF]/20 text-[#2391FF] font-semibold border border-[#2391FF]/30">
                    {selectedItems.length} Features
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="text-[#B7B09E]">Primary Objective:</div>
                  <div className="font-semibold text-white text-sm">{selectedPrimaryService}</div>
                </div>

                {/* Selected Features List */}
                <div className="space-y-2.5 pt-2 border-t border-white/5">
                  <div className="text-xs font-semibold text-white">Chosen Capabilities:</div>
                  {selectedItems.length === 0 ? (
                    <div className="text-xs text-[#B7B09E]/60 italic py-2">
                      No features selected yet. Choose options from the left.
                    </div>
                  ) : (
                    <div className="max-h-56 overflow-y-auto space-y-2 pr-1">
                      {selectedItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/5 text-xs group"
                        >
                          <span className="text-white truncate max-w-[190px]">{item.name}</span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-[#B7B09E] hover:text-red-400 p-1 transition-colors"
                            title="Remove feature"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Timeline & Estimate */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-[#B7B09E]">Target Timeline:</span>
                    <span className="text-white font-medium">{timeline}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <div className="text-[11px] text-[#B7B09E]">Indicative Budget Range:</div>
                    <div className="text-lg font-bold text-white font-['Barlow']">
                      {totalMin === 0 ? (
                        'Request Custom Quote'
                      ) : (
                        `₹${totalMin.toLocaleString()} - ₹${totalMax.toLocaleString()}`
                      )}
                    </div>
                    <div className="text-[10px] text-[#B7B09E]/70">
                      *Final price confirmed based on specific API & hosting requirements.
                    </div>
                  </div>
                </div>

                {/* Quick Step Jump */}
                {currentStep < 5 && (
                  <button
                    onClick={() => setCurrentStep(5)}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-[#2391FF] border border-white/10 hover:border-[#2391FF] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Proceed to Submission</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
