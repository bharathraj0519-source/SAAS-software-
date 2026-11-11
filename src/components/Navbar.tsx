import React, { useState, useEffect } from 'react';
import { Menu, X, User, Shield, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onOpenPortal: (mode: 'user' | 'admin') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate, onOpenPortal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'chatbot', label: 'AI Chatbot' },
    { id: 'webdev', label: 'Web Development' },
    { id: 'seo', label: 'SEO Services' },
    { id: 'custom-plan', label: 'Custom Plan' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#eee5e9]/95 backdrop-blur-xl border-b border-[#7c7c7c]/20 shadow-sm'
          : 'bg-[#eee5e9]/90 backdrop-blur-md'
      }`}
    >
      {/* Top Demo Environment Notice Banner */}
      <aside
        role="region"
        aria-label="Interactive demonstration notice"
        className="w-full bg-[#000000] text-white py-1.5 px-4 text-xs font-['Barlow'] tracking-wide border-b border-[#cf5c36]/40 flex items-center justify-between shadow-xs"
      >
        <div className="max-w-[1440px] mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#cf5c36] text-white tracking-widest uppercase">
              DEMO MODE
            </span>
            <span className="font-semibold text-[#eee5e9]">
              BlazeByte Studio Commercial SaaS &amp; Systems Platform Showcase
            </span>
            <span className="hidden md:inline text-[#7c7c7c]">•</span>
            <span className="hidden md:inline text-stone-300">
              Interactive simulation of AI Chatbots, Multi-Device Web Demos, SEO Audits &amp; Custom Pricing
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-[#efc88b] font-medium hidden lg:inline">
              Official Reference: <a href="https://www.blazebyte.shop" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">blazebyte.shop</a>
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-stone-200 border border-white/20 font-bold">
              Live Prototype
            </span>
          </div>
        </div>
      </aside>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between gap-4 h-16 sm:h-20"
        >
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#cf5c36] rounded-xl p-1"
            aria-label="BlazeByte Studio - Back to Homepage"
          >
            <div className="w-[64px] h-[44px] flex items-center justify-center p-1 rounded-xl bg-white border border-[#7c7c7c]/25 shadow-sm">
              <img
                src="/assets/blazebyte-logo.png"
                alt="BlazeByte Studio logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#000000] flex items-center gap-1.5 font-['Barlow']">
                BlazeByte <span className="text-[#cf5c36]">Studio</span>
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-[#7c7c7c] uppercase font-['Barlow']">
                Enterprise SaaS & Systems
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Hover Line & Accessible Focus */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9 font-['Barlow'] text-[16px] font-semibold">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`transition-colors py-1 cursor-pointer nav-hover-line rounded-md px-1 focus-visible:ring-2 focus-visible:ring-[#cf5c36] ${
                    isActive
                      ? 'text-[#cf5c36] active font-bold'
                      : 'text-[#7c7c7c] hover:text-[#000000]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons: Portal, Admin, CTA */}
          <div className="hidden lg:flex items-center gap-3 font-['Barlow']">
            <button
              onClick={() => onOpenPortal('user')}
              className="px-4 py-2 rounded-full text-xs font-semibold text-[#000000] hover:text-[#cf5c36] bg-white hover:bg-white/80 border border-[#7c7c7c]/25 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-[#cf5c36]"
              aria-label="Open customer portal"
            >
              <User className="w-3.5 h-3.5 text-[#cf5c36]" aria-hidden="true" />
              <span>Portal</span>
            </button>

            <button
              onClick={() => onOpenPortal('admin')}
              className="p-2.5 rounded-full text-xs font-medium text-[#7c7c7c] hover:text-[#000000] bg-white hover:bg-white/80 border border-[#7c7c7c]/25 transition-all flex items-center justify-center cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-[#cf5c36]"
              aria-label="Open admin management console"
              title="Admin Dashboard"
            >
              <Shield className="w-3.5 h-3.5 text-[#a66c59]" aria-hidden="true" />
            </button>

            {/* Pill CTA button */}
            <button
              onClick={() => handleNavClick('custom-plan')}
              className="pill primary text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[#cf5c36]"
              aria-label="Build your custom plan"
            >
              <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
              <span>Build Custom Plan</span>
            </button>
          </div>

          {/* Mobile Right Controls: Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-[#7c7c7c]/25 text-[#000000] hover:text-[#cf5c36] transition-colors focus-visible:ring-2 focus-visible:ring-[#cf5c36] shadow-sm"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-white border-b border-[#7c7c7c]/20 px-6 pt-4 pb-7 animate-in slide-in-from-top-2 duration-200 font-['Barlow'] shadow-xl"
        >
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#cf5c36]/10 text-[#cf5c36] border border-[#cf5c36]/30'
                      : 'text-[#000000] hover:bg-[#eee5e9]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#cf5c36]"></span>
                  )}
                </button>
              );
            })}

            <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#eee5e9]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal('user');
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-[#eee5e9] border border-[#7c7c7c]/20 text-[#000000]"
                aria-label="Open customer portal"
              >
                <User className="w-3.5 h-3.5 text-[#cf5c36]" aria-hidden="true" />
                Customer Portal
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal('admin');
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-[#eee5e9] border border-[#7c7c7c]/20 text-[#000000]"
                aria-label="Open admin management panel"
              >
                <Shield className="w-3.5 h-3.5 text-[#a66c59]" aria-hidden="true" />
                Admin Panel
              </button>
            </div>

            <button
              onClick={() => handleNavClick('custom-plan')}
              className="pill primary w-full mt-3 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
              Build Your Custom Plan
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
