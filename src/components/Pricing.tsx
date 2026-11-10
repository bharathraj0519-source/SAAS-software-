import React from 'react';
import { PricingTiers, type PricingTier } from '@/components/ui/pricing-tiers';
import { CloudArrowDownIcon, LightningIcon, UsersThreeIcon } from '@phosphor-icons/react';

interface PricingProps {
  onSelectPlan?: (planId: string) => void;
  onContactSales?: () => void;
}

const tiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'For side projects, fast landing pages, and solo builders.',
    price: { monthly: 19, yearly: 15 },
    cta: { label: 'Start free trial', href: '#contact' },
    featuresLabel: 'Starter includes:',
    features: [
      { label: <><b>5</b> projects & landing funnels</>, icon: <LightningIcon weight="fill" /> },
      { label: <><b>10,000</b> monthly visitors & chatbot queries</>, icon: <CloudArrowDownIcon weight="fill" /> },
      { label: <>Sub-second LCP optimization guarantee</> },
      { label: <>Standard WhatsApp lead notification</> },
    ],
  },
  {
    id: 'team',
    name: 'Team',
    description: 'For growing companies and businesses that ship every week.',
    price: { monthly: 49, yearly: 39 },
    featured: true,
    cta: { label: 'Start free trial', href: '#contact' },
    featuresLabel: 'Everything in Starter, plus:',
    features: [
      { label: <><b>Shared workspaces</b> & team accounts</>, icon: <UsersThreeIcon weight="fill" /> },
      { label: <>Autonomous AI chatbot with custom docs ingestion</>, icon: <LightningIcon weight="fill" /> },
      { label: <>IndexNow push & organic search tracking</>, icon: <CloudArrowDownIcon weight="fill" /> },
      { label: <>Dedicated WhatsApp senior engineer bridge</> },
    ],
  },
];

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan, onContactSales }) => {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingTiers
          title="Simple, predictable pricing"
          description={<>Every plan starts with a <b>14-day free trial</b> and dedicated engineering support.</>}
          tiers={tiers}
          enterprise={{
            name: 'Enterprise',
            description: 'Custom full-stack systems, dedicated cloud hosting, and SLA guarantees.',
            cta: {
              label: 'Contact sales',
              href: '#custom-plan',
              onClick: onContactSales,
            },
            features: [
              { label: <><b>Unlimited</b> projects & bespoke microservices</> },
              { label: <>Custom LLM integrations (OpenAI / Gemini / Claude)</> },
              { label: <>Local Maps 3-Pack & competitive search takeover</> },
              { label: <>Direct architect WhatsApp hotline (+91 7708795342)</> },
            ],
          }}
          onSelectPlan={onSelectPlan}
          onBillingChange={(billing) => console.log('Selected billing:', billing)}
        />
      </div>
    </section>
  );
};

export default Pricing;
