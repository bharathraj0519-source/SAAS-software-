import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    category: 'General & Studio',
    question: 'What is BlazeByte Studio and what services do you provide?',
    answer:
      'BlazeByte Studio is a modern commercial SaaS and digital systems studio based in Coimbatore, Tamil Nadu. We specialize in four core verticals: autonomous AI chatbots, high-converting custom web applications (Next.js/React), data-driven SEO architectures, and bespoke custom plan configuration with direct WhatsApp architect hand-off.',
  },
  {
    category: 'AI Chatbot',
    question: 'How does the autonomous AI chatbot demonstration and live deployment work?',
    answer:
      'Our conversational AI assistants ingest your business knowledge base, documentation, and FAQs. They autonomously answer customer inquiries, qualify leads, and redirect priority prospects directly to your WhatsApp or CRM via webhooks. Live production chatbots integrate securely with your OpenAI or Google Gemini API keys and Supabase backends.',
  },
  {
    category: 'Web Development',
    question: 'What performance standards and technology stack do you guarantee for web projects?',
    answer:
      'We engineer web platforms using React, Next.js, TypeScript, and modern styling architectures. Every project is optimized for sub-second Largest Contentful Paint (LCP), 90+ Google PageSpeed benchmarks, mobile responsiveness, edge caching, and strict WCAG accessibility compliance.',
  },
  {
    category: 'SEO & Growth',
    question: 'Why are SEO services strictly offered in Plus and Pro tiers with no Free tier?',
    answer:
      'Effective search engine optimization requires continuous computing power, index monitoring, IndexNow API dispatch, competitor content gap analysis, and Google Business Profile local 3-pack optimization. To protect client ROI and guarantee measurable results, we offer dedicated high-impact retainers rather than superficial free audits.',
  },
  {
    category: 'Pricing & Plans',
    question: 'Can I configure a bespoke custom plan instead of choosing a rigid package?',
    answer:
      'Yes! Through our Custom Plan Builder, you can hand-select specific chatbot features, website pages, SEO modules, and marketing automations. The configurator tallies an itemized timeline and transparent investment estimate with no rigid lock-in.',
  },
  {
    category: 'Delivery & Support',
    question: 'What are your delivery timelines and how do we communicate during a sprint?',
    answer:
      'High-impact landing page sprints typically deliver in 7–10 days. Comprehensive full-stack platforms and custom SaaS portals are staged in 2–4 week sprints with real-time preview URLs. Every client is assigned a direct WhatsApp engineering bridge (+91 7708795342) for frictionless updates.',
  },
];

interface FaqAccordionProps {
  items?: FaqItem[];
  className?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items = FAQ_DATA, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full max-w-4xl mx-auto space-y-3.5 font-['Barlow'] ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'bg-white border-[#cf5c36] shadow-sm shadow-[#cf5c36]/10'
                : 'bg-white/90 border-[#7c7c7c]/20 hover:border-[#a66c59]/50'
            }`}
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              className="w-full py-4.5 px-6 flex items-center justify-between text-left cursor-pointer gap-4"
            >
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full shrink-0 ${isOpen ? 'bg-[#cf5c36]' : 'bg-[#7c7c7c]/40'}`} aria-hidden="true" />
                <span className="text-base sm:text-lg font-bold text-[#000000]">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-[#a66c59] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#cf5c36]' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="px-6 pb-5 pt-1 text-sm sm:text-base text-[#7c7c7c] leading-relaxed font-['Lateef'] text-xl border-t border-[#eee5e9]"
              >
                <p>{item.answer}</p>
                {item.category && (
                  <span className="inline-block mt-3 text-xs font-semibold uppercase tracking-wider text-[#a66c59] bg-[#efc88b]/20 px-2.5 py-0.5 rounded font-['Barlow']">
                    {item.category}
                  </span>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export function FaqAccordionDemo() {
  return <FaqAccordion />;
}

export default FaqAccordion;
