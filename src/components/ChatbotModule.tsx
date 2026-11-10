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

  const messagesEndRef = useRef<HTMLDivElement>(null);

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
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
          actions = ['Leave Contact Info', 'Open WhatsApp Directly'];
        } else {
          matchedResponse =
            "⚡ [Pro Engine Processed] Query evaluated across BlazeByte Studio's live architectural knowledge vector. Lead qualification stage: Active. System has generated a dispatch webhook payload ready for sync.";
          actions = ['Test CRM Webhook Sync', 'Connect via WhatsApp', 'Submit Custom Plan'];
        }
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: matchedResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: actions,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleActionClick = (action: string) => {
    if (action === 'Open WhatsApp Directly' || action === 'Talk to Team on WhatsApp' || action === 'Connect via WhatsApp' || action === 'Open WhatsApp Now') {
      window.open(
        'https://wa.me/917708795342?text=' +
          encodeURIComponent('Hi BlazeByte Studio, I was testing your AI Chatbot demo and would like to discuss my project.'),
        '_blank'
      );
      return;
    }

    if (action === 'Leave Contact Info') {
      setShowLeadModal(true);
      return;
    }

    if (action === 'View Plus Plan') {
      const plan = CHATBOT_PLANS.find((p) => p.id === 'chatbot-plus');
      if (plan) onSelectPlan(plan);
      return;
    }

    if (action === 'View Pro Plan') {
      const plan = CHATBOT_PLANS.find((p) => p.id === 'chatbot-pro');
      if (plan) onSelectPlan(plan);
      return;
    }

    if (action === 'Build Custom Plan' || action === 'Build Custom Package' || action === 'Submit Custom Plan') {
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
    <div className="py-12 relative" id="chatbot-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2391FF]/10 border border-[#2391FF]/30 text-xs font-semibold text-[#2391FF] uppercase tracking-wider mb-3">
            Module 01 • Conversational AI
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-['Barlow']">
            Autonomous Business AI Chatbots
          </h2>
          <p className="mt-4 text-[#B7B09E] text-base sm:text-lg">
            Experience our intelligent virtual assistant live. Test response fidelity, switch subscription tiers, and see how AI can qualify leads and route inquiries 24/7.
          </p>
        </div>

        {/* Interactive Chatbot Demo Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Interactive Simulation Controls & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel rounded-2xl p-6 border border-[#2391FF]/20 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2 font-['Barlow']">
                <Sliders className="w-5 h-5 text-[#2391FF]" />
                <span>Live Tier Playground</span>
              </h3>
              <p className="text-xs text-[#B7B09E] mb-5">
                Toggle tiers below to experience the behavioral difference between Free, Plus, and Pro intelligence levels in real time.
              </p>

              {/* Tier Switcher Tabs */}
              <div className="grid grid-cols-3 gap-2 p-1.5 bg-[#181e29] rounded-xl border border-white/5 mb-5">
                {(['free', 'plus', 'pro'] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setActiveTier(tier)}
                    className={`py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                      activeTier === tier
                        ? 'bg-[#2391FF] text-white shadow-md shadow-[#2391FF]/30'
                        : 'text-[#B7B09E] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tier}
                  </button>
                ))}
              </div>

              {/* Tier Specs Highlight */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 space-y-2.5 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-[#B7B09E]">Current Simulation:</span>
                  <span className="font-semibold text-white uppercase px-2 py-0.5 rounded bg-[#2391FF]/20 text-[#2391FF] border border-[#2391FF]/30">
                    {activeTier} Plan Demo
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#B7B09E]">Knowledge Ingestion:</span>
                  <span className="text-white font-medium">
                    {activeTier === 'free' ? 'Standard FAQs' : activeTier === 'plus' ? 'Custom Docs + Web' : 'Deep Semantic Vectors'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#B7B09E]">WhatsApp Hand-off:</span>
                  <span className="text-white font-medium">
                    {activeTier === 'free' ? 'Manual Link' : 'Instant 1-Click Route'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#B7B09E]">Webhook & CRM API:</span>
                  <span className="text-white font-medium">
                    {activeTier === 'pro' ? 'Enabled (REST + JSON)' : 'Unavailable'}
                  </span>
                </div>
                {activeTier === 'free' && (
                  <div className="pt-2 text-[11px] text-amber-400/90 flex items-center gap-1.5 border-t border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    <span>Free Plan Demo limited to 6 messages per session.</span>
                  </div>
                )}
              </div>

              {/* Quick Scenarios */}
              <div className="mt-5 pt-4 border-t border-white/5">
                <div className="text-xs font-semibold text-white mb-2">Simulated Customer Inquiries:</div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'What web services do you offer?',
                    'How much does a custom web app cost?',
                    'Can I talk to someone on WhatsApp?',
                    'What is your delivery timeline?',
                  ].map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip)}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#2391FF]/15 hover:border-[#2391FF]/30 border border-white/5 text-[#B7B09E] hover:text-white transition-all text-left"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Value Proposition Note */}
            <div className="p-4 rounded-xl bg-[#2391FF]/5 border border-[#2391FF]/20 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#2391FF] shrink-0 mt-0.5" />
              <div className="text-xs text-[#B7B09E] leading-relaxed">
                <strong className="text-white block mb-0.5">Commercial Simulation Transparency:</strong>
                This chatbot simulator demonstrates response patterns, lead intake, and WhatsApp redirection without external API rate bottlenecks. Live deployment connects securely to your OpenAI / Gemini API keys and Supabase Edge functions.
              </div>
            </div>
          </div>

          {/* Right Column: Modern Chat Window */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl border border-[#2391FF]/30 shadow-2xl flex flex-col h-[600px] overflow-hidden">
              {/* Chat Header */}
              <div className="px-5 py-4 bg-[#181e29]/90 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2391FF] to-[#005bb5] flex items-center justify-center text-white shadow-md shadow-[#2391FF]/30">
                      <Bot className="w-5 h-5" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#181e29]"></span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      <span>BlazeByte AI Assistant</span>
                      <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-[#2391FF]/20 text-[#2391FF] border border-[#2391FF]/40">
                        {activeTier}
                      </span>
                    </div>
                    <div className="text-xs text-[#B7B09E]">
                      {isTyping ? 'Generating response...' : 'Online • Ready to assist'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={exportChat}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#B7B09E] hover:text-white transition-colors"
                    title="Export Chat Log"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={clearChat}
                    className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-[#B7B09E] hover:text-red-400 transition-colors"
                    title="Clear Conversation"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 p-5 overflow-y-auto space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-[#2391FF] to-[#006ee6] text-white rounded-tr-none shadow-md shadow-[#2391FF]/20'
                          : 'bg-[#202734]/90 text-white border border-white/10 rounded-tl-none shadow-md'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>

                      {/* Suggested Action Chips */}
                      {msg.suggestedActions && msg.suggestedActions.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                          {msg.suggestedActions.map((action, i) => (
                            <button
                              key={i}
                              onClick={() => handleActionClick(action)}
                              className="text-[11px] px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#2391FF] text-white transition-colors font-medium cursor-pointer"
                            >
                              {action}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-[#B7B09E] mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 text-xs text-[#B7B09E] bg-[#202734]/70 p-3 rounded-xl border border-white/5 w-fit">
                    <span className="w-2 h-2 rounded-full bg-[#2391FF] animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-[#2391FF] animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#2391FF] animate-bounce [animation-delay:0.4s]"></span>
                    <span className="ml-1 text-[11px]">BlazeByte AI is typing...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Bar */}
              <div className="p-3 bg-[#181e29] border-t border-white/10">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your question or request..."
                    className="flex-1 bg-[#202734] border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder-[#B7B09E]/60 focus:outline-none focus:border-[#2391FF] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={!inputText.trim()}
                    className="p-2.5 rounded-xl bg-[#2391FF] text-white hover:bg-[#3ea0ff] disabled:opacity-40 disabled:hover:bg-[#2391FF] transition-all shadow-md shadow-[#2391FF]/20"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Lead Capture Simulation Modal */}
        {showLeadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[#181e29] border border-[#2391FF]/30 rounded-2xl p-6 max-w-md w-full shadow-2xl relative">
              <h4 className="text-lg font-bold text-white mb-2 font-['Barlow']">
                Connect With BlazeByte Studio
              </h4>
              <p className="text-xs text-[#B7B09E] mb-4">
                Leave your details below. In a production chatbot, this submits directly to your CRM and triggers instant WhatsApp hand-off.
              </p>

              <form onSubmit={handleCaptureLead} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-white block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="e.g. Bharath Raj"
                    className="w-full bg-[#202734] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-white block mb-1">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="e.g. +91 77087 95342"
                    className="w-full bg-[#202734] border border-white/10 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-[#2391FF]"
                  />
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowLeadModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-medium text-[#B7B09E] hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-[#2391FF] hover:bg-[#3ea0ff] shadow-md shadow-[#2391FF]/25"
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
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Barlow']">
              AI Chatbot Subscription Tiers
            </h3>
            <p className="mt-2 text-sm text-[#B7B09E]">
              Flexible plans tailored for personal previews up to high-volume multi-channel enterprise deployments.
            </p>

            {/* Billing Toggle */}
            <div className="mt-6 inline-flex items-center p-1 bg-[#181e29] rounded-xl border border-white/10">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  billingPeriod === 'monthly'
                    ? 'bg-[#2391FF] text-white shadow-md shadow-[#2391FF]/20'
                    : 'text-[#B7B09E] hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  billingPeriod === 'yearly'
                    ? 'bg-[#2391FF] text-white shadow-md shadow-[#2391FF]/20'
                    : 'text-[#B7B09E] hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
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
                      ? 'glass-panel border-2 border-[#2391FF] shadow-2xl shadow-[#2391FF]/20 -translate-y-2'
                      : 'glass-card'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#2391FF] to-[#006ee6] text-white text-[11px] font-bold uppercase tracking-wider shadow-lg shadow-[#2391FF]/40">
                      Most Popular
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-white font-['Barlow']">{plan.name}</h4>
                      <span className="text-xs font-semibold uppercase text-[#2391FF] bg-[#2391FF]/10 px-2 py-0.5 rounded border border-[#2391FF]/20">
                        {plan.tier}
                      </span>
                    </div>

                    <p className="text-xs text-[#B7B09E] mb-6 min-h-[32px]">{plan.tagline}</p>

                    {/* Price */}
                    <div className="mb-6 pb-6 border-b border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-white">{displayPrice}</span>
                        {plan.priceMonthly > 0 && (
                          <span className="text-xs text-[#B7B09E]">
                            / month {billingPeriod === 'yearly' && '(billed annually)'}
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-[#B7B09E] mt-1.5 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#2391FF]" />
                        <span>{plan.limits.messages}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-semibold uppercase tracking-wider text-white">
                        Included Features
                      </div>
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs">
                          {feat.included ? (
                            <CheckCircle2 className="w-4 h-4 text-[#2391FF] shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-4 h-4 text-white/20 shrink-0 mt-0.5" />
                          )}
                          <span className={feat.included ? 'text-white' : 'text-white/40 line-through'}>
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
                        ? 'bg-gradient-to-r from-[#2391FF] to-[#006ee6] hover:from-[#3ea0ff] hover:to-[#2391FF] text-white shadow-lg shadow-[#2391FF]/30'
                        : 'bg-white/5 hover:bg-[#2391FF] text-white border border-white/10 hover:border-[#2391FF]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Plan Comparison Table */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 overflow-x-auto">
            <h4 className="text-lg font-bold text-white mb-6 font-['Barlow']">
              Feature Comparison Matrix
            </h4>
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-white">
                  <th className="py-3 px-4 font-semibold">Capability</th>
                  <th className="py-3 px-4 font-semibold">Free</th>
                  <th className="py-3 px-4 font-semibold text-[#2391FF]">Plus (Recommended)</th>
                  <th className="py-3 px-4 font-semibold">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#B7B09E]">
                <tr>
                  <td className="py-3 px-4 text-white font-medium">Monthly Interaction Cap</td>
                  <td className="py-3 px-4">50 messages</td>
                  <td className="py-3 px-4 text-white">2,500 messages</td>
                  <td className="py-3 px-4 text-[#2391FF] font-semibold">15,000+ messages</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-medium">Knowledge Base Sync</td>
                  <td className="py-3 px-4">Predefined FAQs</td>
                  <td className="py-3 px-4 text-white">Custom Docs & URLs</td>
                  <td className="py-3 px-4 text-[#2391FF] font-semibold">Unlimited Vector Sync</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-medium">WhatsApp Direct Routing</td>
                  <td className="py-3 px-4">❌</td>
                  <td className="py-3 px-4 text-emerald-400">✅ 1-Click Hand-off</td>
                  <td className="py-3 px-4 text-emerald-400">✅ Automated Flow</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-medium">CRM Webhook Integration</td>
                  <td className="py-3 px-4">❌</td>
                  <td className="py-3 px-4">❌</td>
                  <td className="py-3 px-4 text-emerald-400">✅ REST API & Webhooks</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-medium">Custom Widget Branding</td>
                  <td className="py-3 px-4">BlazeByte Badge</td>
                  <td className="py-3 px-4 text-white">Custom Brand Colors</td>
                  <td className="py-3 px-4 text-[#2391FF] font-semibold">Full White-Label</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-white font-medium">Support SLA</td>
                  <td className="py-3 px-4">Standard</td>
                  <td className="py-3 px-4 text-white">Priority Email/WhatsApp</td>
                  <td className="py-3 px-4 text-[#2391FF] font-semibold">Dedicated Engineer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
