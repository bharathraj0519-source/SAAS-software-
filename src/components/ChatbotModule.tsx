import React, { useState, useEffect, useRef } from 'react';
import {
  Bot,
  Send,
  Trash2,
  Download,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  MessageSquare,
  ShieldCheck,
  Phone,
  ArrowRight,
  Sliders,
  Layers,
  Zap,
} from 'lucide-react';
import { CHATBOT_PLANS } from '../data/plansData';
import { CHATBOT_KNOWLEDGE_BASE, INITIAL_BOT_MESSAGES } from '../data/chatbotKnowledge';
import type { ChatMessage, SubscriptionPlan } from '../types';

interface ChatbotModuleProps {
  onSelectPlan: (plan: SubscriptionPlan) => void;
  onOpenCustomPlan: () => void;
}

export const ChatbotModule: React.FC<ChatbotModuleProps> = ({ onSelectPlan, onOpenCustomPlan }) => {
  const [activeTier, setActiveTier] = useState<'free' | 'plus' | 'pro'>('plus');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [showLeadModal, setShowLeadModal] = useState(false);

  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize conversation when tier changes
  useEffect(() => {
    const initialText = INITIAL_BOT_MESSAGES[activeTier];
    const initialMsg: ChatMessage = {
      id: `bot-init-${Date.now()}`,
      sender: 'bot',
      text: initialText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: [
        'What web services do you offer?',
        'How much does a custom web app cost?',
        'Can I talk to someone on WhatsApp?',
        'What is your delivery timeline?',
      ],
    };
    setMessages([initialMsg]);
    setMessageCount(0);
  }, [activeTier]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    // Free plan simulated limit check
    if (activeTier === 'free' && messageCount >= 6) {
      const limitMsg: ChatMessage = {
        id: `bot-limit-${Date.now()}`,
        sender: 'bot',
        text: '⚠️ You have reached the Free Plan demo message allowance (6/6 demo messages). Upgrade to Plus or Pro for unlimited conversational AI and real-time knowledge base sync!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: ['View Plus Plan', 'View Pro Plan'],
      };
      setMessages((prev) => [...prev, limitMsg]);
      return;
    }

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setMessageCount((prev) => prev + 1);
    setIsTyping(true);

    // Simulate intelligent bot reasoning
    setTimeout(() => {
      const lower = text.toLowerCase();
      let matchedResponse = '';
      let actions: string[] = [];

      for (const item of CHATBOT_KNOWLEDGE_BASE) {
        if (item.keywords.some((k) => lower.includes(k))) {
          matchedResponse = item.response;
          actions = item.suggestedActions || [];
          break;
        }
      }

      if (!matchedResponse) {
        if (activeTier === 'free') {
          matchedResponse =
            "I'm currently running on the Free Tier configuration with basic FAQ resolution. To receive in-depth technical analysis or customized project quotes, ask about our web services, pricing, or WhatsApp support!";
          actions = ['What web services do you offer?', 'How much does it cost?'];
        } else if (activeTier === 'plus') {
          matchedResponse =
            "Thanks for your inquiry! As a Plus Tier assistant, I've noted your question and can instantly bridge you to our senior architect on WhatsApp (+91 7708795342). Would you like to leave your contact info for a fast callback?";
          actions = ['Submit Contact Info', 'Open WhatsApp Directly'];
        } else {
          matchedResponse =
            "Under the Pro Tier multi-step workflow engine, your inquiry has been evaluated across our service taxonomy. We can provision a custom full-stack pipeline, connect directly to our REST API, or immediately schedule an architect consultation.";
          actions = ['Configure Custom Plan', 'Open WhatsApp Directly', 'Test CRM Webhook Sync'];
        }
      }

      const botReply: ChatMessage = {
        id: `bot-reply-${Date.now()}`,
        sender: 'bot',
        text: matchedResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: actions,
      };

      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 700);
  };

  const handleActionClick = (action: string) => {
    if (action === 'Open WhatsApp Directly') {
      window.open('https://wa.me/917708795342?text=Hi%20BlazeByte%20Studio,%20I%20am%20testing%20the%20AI%20chatbot%20demo', '_blank');
      return;
    }

    if (action === 'Submit Contact Info') {
      setShowLeadModal(true);
      return;
    }

    if (action === 'View Plus Plan') {
      setActiveTier('plus');
      return;
    }

    if (action === 'View Pro Plan') {
      setActiveTier('pro');
      return;
    }

    if (action === 'Configure Custom Plan') {
      onOpenCustomPlan();
      return;
    }

    if (action === 'Test CRM Webhook Sync') {
      const webhookMsg: ChatMessage = {
        id: `bot-webhook-${Date.now()}`,
        sender: 'bot',
        text: '✅ [SIMULATED WEBHOOK TRIGGERED] POST 200 OK -> https://api.blazebyte.shop/v1/crm/lead-sync. Payload: { channel: "ai_chatbot_pro", status: "qualified", timestamp: "' + new Date().toISOString() + '" }',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, webhookMsg]);
      return;
    }

    handleSendMessage(action);
  };

  const clearChat = () => {
    const initialText = INITIAL_BOT_MESSAGES[activeTier];
    setMessages([
      {
        id: `bot-reset-${Date.now()}`,
        sender: 'bot',
        text: initialText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: [
          'What web services do you offer?',
          'How much does a custom web app cost?',
          'Can I talk to someone on WhatsApp?',
        ],
      },
    ]);
    setMessageCount(0);
  };

  const exportChat = () => {
    const transcript = messages
      .map((m) => `[${m.timestamp}] ${m.sender === 'bot' ? 'BlazeByte AI' : 'User'}: ${m.text}`)
      .join('\n\n');
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blazebyte-chat-${activeTier}-${new Date().toISOString().slice(0, 10)}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCaptureLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone) return;

    setLeadCaptured(true);
    setShowLeadModal(false);

    const confirmationMsg: ChatMessage = {
      id: `bot-lead-${Date.now()}`,
      sender: 'bot',
      text: `🎉 Thank you, ${leadName}! Your inquiry and contact (${leadPhone}) have been captured in the system. Our team has received the notification. You can also message us directly on WhatsApp below!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: ['Open WhatsApp Directly'],
      leadCaptured: true,
    };

    setMessages((prev) => [...prev, confirmationMsg]);
  };

  return (
    <section className="py-12 relative" id="chatbot-section" aria-labelledby="chatbot-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-600 dark:text-[#2391FF] uppercase tracking-wider mb-3">
            Module 01 • Conversational AI
          </div>
          <h2 id="chatbot-heading" className="text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight font-['Barlow']">
            Autonomous Business AI Chatbots
          </h2>
          <p className="mt-4 text-[var(--muted)] text-base sm:text-lg">
            Experience our intelligent virtual assistant live. Test response fidelity, switch subscription tiers, and see how AI can qualify leads and route inquiries 24/7.
          </p>
        </div>

        {/* Interactive Chatbot Demo Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Interactive Simulation Controls & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 border border-sky-400/20 shadow-xl">
              <h3 className="text-lg font-bold text-[var(--text-heading)] mb-2 flex items-center gap-2 font-['Barlow']">
                <Sliders className="w-5 h-5 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
                <span>Live Tier Playground</span>
              </h3>
              <p className="text-xs text-[var(--muted)] mb-5">
                Toggle tiers below to experience the behavioral difference between Free, Plus, and Pro intelligence levels in real time.
              </p>

              {/* Tier Switcher Tabs with ARIA roles */}
              <div role="tablist" aria-label="Chatbot demo tiers" className="grid grid-cols-3 gap-2 p-1.5 bg-slate-200/80 dark:bg-[#181e29] rounded-xl border border-slate-300 dark:border-white/5 mb-5">
                {(['free', 'plus', 'pro'] as const).map((tier) => (
                  <button
                    key={tier}
                    role="tab"
                    id={`tab-tier-${tier}`}
                    aria-selected={activeTier === tier}
                    aria-controls="chat-window-panel"
                    onClick={() => setActiveTier(tier)}
                    className={`py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                      activeTier === tier
                        ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-md shadow-sky-600/30'
                        : 'text-[var(--muted)] hover:text-[var(--text)] hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>

              {/* Tier Specs Highlight */}
              <div className="p-4 rounded-xl bg-slate-100/80 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 space-y-2.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[var(--muted)]">Current Simulation:</span>
                  <span className="font-semibold uppercase px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-[#2391FF] border border-sky-500/20">
                    {activeTier} Plan Demo
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--muted)]">Knowledge Ingestion:</span>
                  <span className="text-[var(--text-heading)] font-medium">
                    {activeTier === 'free' ? 'Standard FAQs' : activeTier === 'plus' ? 'Custom Docs + Web' : 'Deep Semantic Vectors'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--muted)]">WhatsApp Hand-off:</span>
                  <span className="text-[var(--text-heading)] font-medium">
                    {activeTier === 'free' ? 'Manual Link' : 'Instant 1-Click Route'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[var(--muted)]">Webhook & CRM API:</span>
                  <span className="text-[var(--text-heading)] font-medium">
                    {activeTier === 'pro' ? 'Enabled (REST + JSON)' : 'Unavailable'}
                  </span>
                </div>
                {activeTier === 'free' && (
                  <div className="pt-2 text-[11px] text-amber-600 dark:text-amber-400 flex items-center gap-1.5 border-t border-slate-200 dark:border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true"></span>
                    <span>Free Plan Demo limited to 6 messages per session.</span>
                  </div>
                )}
              </div>

              {/* Quick Scenarios */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/5">
                <div className="text-xs font-semibold text-[var(--text-heading)] mb-2">Simulated Customer Inquiries:</div>
                <div className="flex flex-wrap gap-1.5" role="group" aria-label="Predefined question chips">
                  {[
                    'What web services do you offer?',
                    'How much does a custom web app cost?',
                    'Can I talk to someone on WhatsApp?',
                    'What is your delivery timeline?',
                  ].map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip)}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-sky-500/15 dark:bg-white/5 dark:hover:bg-sky-500/15 border border-slate-200 dark:border-white/5 text-[var(--muted)] hover:text-sky-700 dark:hover:text-white transition-all text-left cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Value Proposition Note */}
            <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-400/20 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-sky-600 dark:text-[#2391FF] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="text-xs text-[var(--muted)] leading-relaxed">
                <strong className="text-[var(--text-heading)] block mb-0.5">Commercial Simulation Transparency:</strong>
                This chatbot simulator demonstrates response patterns, lead intake, and WhatsApp redirection without external API rate bottlenecks. Live deployment connects securely to your OpenAI / Gemini API keys and Supabase Edge functions.
              </div>
            </div>
          </div>

          {/* Right Column: Modern Chat Window */}
          <div className="lg:col-span-7" id="chat-window-panel" role="tabpanel" aria-labelledby={`tab-tier-${activeTier}`}>
            <div className="glass-panel rounded-2xl border border-sky-400/30 shadow-2xl flex flex-col h-[600px] overflow-hidden">
              {/* Chat Header */}
              <div className="px-5 py-4 bg-slate-100/90 dark:bg-[#181e29]/90 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-blue-700 flex items-center justify-center text-white shadow-md shadow-sky-600/30">
                      <Bot className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-[#181e29]" aria-hidden="true"></span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[var(--text-heading)] flex items-center gap-2">
                      <span>BlazeByte AI Assistant</span>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-sky-500/10 text-sky-700 dark:text-[#2391FF] border border-sky-500/20">
                        {activeTier}
                      </span>
                    </div>
                    <div className="text-xs text-[var(--muted)]">
                      {isTyping ? 'Generating response...' : 'Online • Ready to assist'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={exportChat}
                    className="p-2 rounded-lg bg-slate-200/70 hover:bg-slate-300 dark:bg-white/5 dark:hover:bg-white/10 text-[var(--muted)] hover:text-[var(--text)] transition-colors cursor-pointer"
                    aria-label="Export chat log as text file"
                    title="Export Chat Log"
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                  </button>
                  <button
                    onClick={clearChat}
                    className="p-2 rounded-lg bg-slate-200/70 hover:bg-red-500/20 dark:bg-white/5 dark:hover:bg-red-500/20 text-[var(--muted)] hover:text-red-500 transition-colors cursor-pointer"
                    aria-label="Clear chat conversation"
                    title="Clear Conversation"
                  >
                    <Trash2 className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div
                ref={chatContainerRef}
                role="log"
                aria-live="polite"
                aria-label="Chat messages transcript"
                className="flex-1 p-5 overflow-y-auto space-y-4"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-sky-600 to-blue-700 text-white rounded-tr-none shadow-md shadow-sky-600/20'
                          : 'bg-white dark:bg-[#202734]/90 text-[var(--text-heading)] border border-slate-200 dark:border-white/10 rounded-tl-none shadow-sm'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>

                      {/* Suggested Action Chips */}
                      {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-1.5">
                          {msg.suggestedActions.map((action, i) => (
                            <button
                              key={i}
                              onClick={() => handleActionClick(action)}
                              className="text-[11px] px-2.5 py-1 rounded-lg bg-sky-50 dark:bg-white/10 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-600 text-sky-700 dark:text-white transition-colors font-medium cursor-pointer"
                            >
                              {action}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-[var(--muted)] mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-[var(--muted)] bg-slate-100 dark:bg-[#202734]/70 p-3 rounded-xl border border-slate-200 dark:border-white/5 w-fit" aria-live="assertive">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce" aria-hidden="true"></span>
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce [animation-delay:0.2s]" aria-hidden="true"></span>
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-bounce [animation-delay:0.4s]" aria-hidden="true"></span>
                    <span className="ml-1 text-[11px]">BlazeByte AI is typing...</span>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <div className="p-3 bg-slate-100 dark:bg-[#181e29] border-t border-slate-200 dark:border-white/10">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <label htmlFor="chat-input-field" className="sr-only">Type your question or request</label>
                  <input
                    id="chat-input-field"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your question or request..."
                    className="flex-1 bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-[var(--text)] placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    aria-label="Send message"
                    className="p-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white disabled:opacity-40 disabled:hover:bg-sky-600 transition-all shadow-md shadow-sky-600/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Capture Simulation Modal */}
        {showLeadModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          >
            <div className="glass-panel rounded-2xl p-6 max-w-md w-full shadow-2xl relative border border-sky-400/30">
              <h4 id="lead-modal-title" className="text-lg font-bold text-[var(--text-heading)] mb-2 font-['Barlow']">
                Connect With BlazeByte Studio
              </h4>
              <p className="text-xs text-[var(--muted)] mb-4">
                Leave your details below. In a production chatbot, this submits directly to your CRM and triggers instant WhatsApp hand-off.
              </p>

              <form onSubmit={handleCaptureLead} className="space-y-4">
                <div>
                  <label htmlFor="lead-name-input" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                    Your Name
                  </label>
                  <input
                    id="lead-name-input"
                    type="text"
                    required
                    aria-required="true"
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="e.g. Bharath Raj"
                    className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label htmlFor="lead-phone-input" className="text-xs font-semibold text-[var(--text-heading)] block mb-1">
                    WhatsApp / Phone Number
                  </label>
                  <input
                    id="lead-phone-input"
                    type="tel"
                    required
                    aria-required="true"
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="e.g. +91 77087 95342"
                    className="w-full bg-white dark:bg-[#202734] border border-slate-300 dark:border-white/10 rounded-xl px-3.5 py-2 text-sm text-[var(--text)] focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowLeadModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-[var(--muted)] hover:text-[var(--text)] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md shadow-sky-600/25 cursor-pointer"
                  >
                    Confirm & Route Lead
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Subscription Pricing Section */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-heading)] font-['Barlow']">
              AI Chatbot Subscription Tiers
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Flexible plans tailored for personal previews up to high-volume multi-channel enterprise deployments.
            </p>

            {/* Billing Toggle */}
            <div
              role="group"
              aria-label="Billing frequency selection"
              className="mt-6 inline-flex items-center p-1 bg-slate-200/80 dark:bg-[#181e29] rounded-xl border border-slate-300 dark:border-white/10"
            >
              <button
                type="button"
                aria-pressed={billingPeriod === 'monthly'}
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  billingPeriod === 'monthly'
                    ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-md shadow-sky-600/20'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                aria-pressed={billingPeriod === 'yearly'}
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingPeriod === 'yearly'
                    ? 'bg-sky-600 dark:bg-[#2391FF] text-white shadow-md shadow-sky-600/20'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`}
              >
                <span>Annual Billing</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-500/30">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* 3 Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {CHATBOT_PLANS.map((plan) => {
              const isPopular = plan.isPopular;
              const displayPrice =
                billingPeriod === 'monthly'
                  ? plan.priceMonthly === 0
                    ? '₹0'
                    : `₹${plan.priceMonthly.toLocaleString('en-IN')}`
                  : plan.priceYearly === 0
                  ? '₹0'
                  : `₹${Math.round(plan.priceYearly / 12).toLocaleString('en-IN')}`;

              return (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-7 flex flex-col justify-between relative transition-all duration-300 ${
                    isPopular
                      ? 'glass-panel border-2 border-sky-500 shadow-2xl shadow-sky-500/20 -translate-y-2'
                      : 'glass-card'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-600 to-blue-700 text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-sky-600/40">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-[var(--text-heading)] font-['Barlow']">{plan.name}</h4>
                      <span className="text-xs font-semibold uppercase text-sky-700 dark:text-[#2391FF] bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                        {plan.tier}
                      </span>
                    </div>

                    <p className="text-xs text-[var(--muted)] mb-6 min-h-[32px]">{plan.tagline}</p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-slate-200 dark:border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-[var(--text-heading)]">{displayPrice}</span>
                        {plan.priceMonthly > 0 && (
                          <span className="text-xs text-[var(--muted)]">
                            / month {billingPeriod === 'yearly' && '(billed annually)'}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-[var(--muted)] mt-1.5 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-sky-600 dark:text-[#2391FF]" aria-hidden="true" />
                        <span>{plan.limits.messages}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[var(--text-heading)]">
                        Included Features
                      </div>
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs">
                          {feat.included ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                          ) : (
                            <XCircle className="w-4 h-4 text-slate-400 dark:text-white/20 shrink-0 mt-0.5" aria-hidden="true" />
                          )}
                          <span className={feat.included ? 'text-[var(--text)]' : 'text-[var(--muted)] opacity-50 line-through'}>
                            {feat.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => onSelectPlan(plan)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white shadow-lg shadow-sky-600/30'
                        : 'bg-black/5 hover:bg-sky-600 hover:text-white dark:bg-white/5 dark:hover:bg-[#2391FF] text-[var(--text)] dark:text-white border border-slate-300 dark:border-white/10'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Plan Comparison Table with Accessible Markup */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 overflow-x-auto">
            <h4 className="text-lg font-bold text-[var(--text-heading)] mb-6 font-['Barlow']">
              Feature Comparison Matrix
            </h4>
            <table className="w-full text-left text-xs sm:text-sm" aria-label="Chatbot Plan Feature Comparison Matrix">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10 text-[var(--text-heading)]">
                  <th scope="col" className="py-3 px-4 font-semibold">Capability</th>
                  <th scope="col" className="py-3 px-4 font-semibold">Free</th>
                  <th scope="col" className="py-3 px-4 font-semibold text-sky-700 dark:text-[#2391FF]">Plus (Recommended)</th>
                  <th scope="col" className="py-3 px-4 font-semibold">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-[var(--muted)]">
                <tr>
                  <th scope="row" className="py-3 px-4 text-[var(--text-heading)] font-medium text-left">Monthly Interaction Cap</th>
                  <td className="py-3 px-4">50 messages</td>
                  <td className="py-3 px-4 text-[var(--text)]">2,500 messages</td>
                  <td className="py-3 px-4 text-sky-700 dark:text-[#2391FF] font-semibold">15,000+ messages</td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 px-4 text-[var(--text-heading)] font-medium text-left">Knowledge Base Sync</th>
                  <td className="py-3 px-4">Predefined FAQs</td>
                  <td className="py-3 px-4 text-[var(--text)]">Custom Docs & URLs</td>
                  <td className="py-3 px-4 text-sky-700 dark:text-[#2391FF] font-semibold">Unlimited Vector Sync</td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 px-4 text-[var(--text-heading)] font-medium text-left">WhatsApp Direct Routing</th>
                  <td className="py-3 px-4">❌ Unavailable</td>
                  <td className="py-3 px-4 text-emerald-700 dark:text-emerald-400 font-semibold">✅ 1-Click Hand-off</td>
                  <td className="py-3 px-4 text-emerald-700 dark:text-emerald-400 font-semibold">✅ Automated Flow</td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 px-4 text-[var(--text-heading)] font-medium text-left">CRM Webhook Integration</th>
                  <td className="py-3 px-4">❌ Unavailable</td>
                  <td className="py-3 px-4">❌ Unavailable</td>
                  <td className="py-3 px-4 text-emerald-700 dark:text-emerald-400 font-semibold">✅ REST API & Webhooks</td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 px-4 text-[var(--text-heading)] font-medium text-left">Custom Widget Branding</th>
                  <td className="py-3 px-4">BlazeByte Badge</td>
                  <td className="py-3 px-4 text-[var(--text)]">Custom Brand Colors</td>
                  <td className="py-3 px-4 text-sky-700 dark:text-[#2391FF] font-semibold">Full White-Label</td>
                </tr>
                <tr>
                  <th scope="row" className="py-3 px-4 text-[var(--text-heading)] font-medium text-left">Support SLA</th>
                  <td className="py-3 px-4">Standard</td>
                  <td className="py-3 px-4 text-[var(--text)]">Priority Email/WhatsApp</td>
                  <td className="py-3 px-4 text-sky-700 dark:text-[#2391FF] font-semibold">Dedicated Engineer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
