import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export interface PricingFeature {
  label: React.ReactNode;
  icon?: React.ReactNode;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  featured?: boolean;
  cta: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  featuresLabel?: string;
  features: PricingFeature[];
}

export interface EnterpriseTier {
  name: string;
  description: string;
  cta: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  features: PricingFeature[];
}

export interface PricingTiersProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  tiers: PricingTier[];
  enterprise?: EnterpriseTier;
  onBillingChange?: (billing: 'monthly' | 'yearly') => void;
  onSelectPlan?: (tierId: string) => void;
}

export const PricingTiers: React.FC<PricingTiersProps> = ({
  title = 'Simple, predictable pricing',
  description = 'Every plan starts with a 14-day free trial.',
  tiers,
  enterprise,
  onBillingChange,
  onSelectPlan,
}) => {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  const handleBillingToggle = (selected: 'monthly' | 'yearly') => {
    setBilling(selected);
    if (onBillingChange) {
      onBillingChange(selected);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6 font-['Barlow']">
      {/* Title & Description Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#000000] tracking-tight">
          {title}
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#7c7c7c]">
          {description}
        </p>

        {/* Billing Switcher */}
        <div
          role="group"
          aria-label="Billing frequency selection"
          className="mt-6 inline-flex items-center p-1 bg-white rounded-full border border-[#7c7c7c]/25 shadow-sm"
        >
          <button
            type="button"
            aria-pressed={billing === 'monthly'}
            onClick={() => handleBillingToggle('monthly')}
            className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all cursor-pointer ${
              billing === 'monthly'
                ? 'bg-[#cf5c36] text-white shadow-sm'
                : 'text-[#7c7c7c] hover:text-[#000000]'
            }`}
          >
            Monthly billing
          </button>
          <button
            type="button"
            aria-pressed={billing === 'yearly'}
            onClick={() => handleBillingToggle('yearly')}
            className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-full transition-all flex items-center gap-1.5 cursor-pointer ${
              billing === 'yearly'
                ? 'bg-[#cf5c36] text-white shadow-sm'
                : 'text-[#7c7c7c] hover:text-[#000000]'
            }`}
          >
            <span>Annual billing</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#efc88b] text-[#000000] font-bold">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className={`grid grid-cols-1 ${enterprise ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6 lg:gap-8 items-stretch`}>
        {tiers.map((tier) => {
          const isFeatured = tier.featured;
          const priceValue = billing === 'monthly' ? tier.price.monthly : tier.price.yearly;

          return (
            <div
              key={tier.id}
              className={`rounded-[28px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                isFeatured
                  ? 'bg-white border-2 border-[#cf5c36] shadow-xl shadow-[#cf5c36]/10 -translate-y-1'
                  : 'bg-white border border-[#7c7c7c]/20 hover:border-[#a66c59]/50 shadow-sm'
              }`}
            >
              {isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#cf5c36] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000000]">{tier.name}</h3>
                  <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#eee5e9] text-[#a66c59] border border-[#a66c59]/20">
                    {billing}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#000000]/75 min-h-[40px] mb-6 font-medium">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-[#eee5e9]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl sm:text-6xl font-black text-[#000000]">
                      ${priceValue}
                    </span>
                    <span className="text-base font-semibold text-[#7c7c7c]">/ month</span>
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#a66c59] mt-1 block">
                    {billing === 'yearly' ? 'Billed annually (Save 20%)' : 'Billed monthly'}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  {tier.featuresLabel && (
                    <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#000000]">
                      {tier.featuresLabel}
                    </div>
                  )}
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm sm:text-base text-[#000000] font-medium">
                      {feature.icon ? (
                        <span className="text-[#cf5c36] w-5 h-5 shrink-0 flex items-center justify-center">
                          {feature.icon}
                        </span>
                      ) : (
                        <Check className="w-5 h-5 text-[#cf5c36] shrink-0" />
                      )}
                      <span>{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => {
                  if (tier.cta.onClick) {
                    tier.cta.onClick();
                  } else if (onSelectPlan) {
                    onSelectPlan(tier.id);
                  }
                }}
                className={`w-full py-4 px-6 rounded-full text-base font-bold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm ${
                  isFeatured
                    ? 'bg-[#cf5c36] hover:bg-[#b84f2e] text-white shadow-md shadow-[#cf5c36]/20'
                    : 'bg-[#000000] hover:bg-[#222222] text-white'
                }`}
              >
                <span>{tier.cta.label}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}

        {/* Enterprise Card if present */}
        {enterprise && (
          <div className="rounded-[28px] p-7 sm:p-8 flex flex-col justify-between bg-white border border-[#7c7c7c]/20 hover:border-[#a66c59]/50 shadow-sm transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-[#000000]">{enterprise.name}</h3>
                <span className="text-xs font-semibold uppercase px-2.5 py-0.5 rounded-full bg-[#efc88b]/20 text-[#a66c59] border border-[#a66c59]/30">
                  Custom
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#7c7c7c] min-h-[36px] mb-6">
                {enterprise.description}
              </p>

              <div className="mb-6 pb-6 border-b border-[#eee5e9]">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#000000]">
                    Custom
                  </span>
                </div>
                <span className="text-xs text-[#a66c59] mt-1 block">
                  Tailored contract & SLA
                </span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-[#000000]">
                  Enterprise includes:
                </div>
                {enterprise.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#000000]">
                    {feature.icon ? (
                      <span className="text-[#cf5c36] w-4 h-4 shrink-0 flex items-center justify-center">
                        {feature.icon}
                      </span>
                    ) : (
                      <Check className="w-4 h-4 text-[#cf5c36] shrink-0" />
                    )}
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                if (enterprise.cta.onClick) {
                  enterprise.cta.onClick();
                } else if (onSelectPlan) {
                  onSelectPlan('enterprise');
                }
              }}
              className="w-full py-3.5 px-6 rounded-full text-sm font-bold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 bg-[#eee5e9] hover:bg-[#e2d8dd] text-[#000000] border border-[#7c7c7c]/30"
            >
              <span>{enterprise.cta.label}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingTiers;
