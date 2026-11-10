import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, User, Shield, ArrowUpRight } from 'lucide-react';

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
      setScrolled(window.scrollY > 20);
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
          ? 'bg-[#181e29]/90 backdrop-blur-xl border-b border-[#2391FF]/20 shadow-2xl py-3'
          : 'bg-[#202734]/70 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left transition-transform hover:scale-[1.02]"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#2391FF]/20 to-[#202734] border border-[#2391FF]/40 flex items-center justify-center p-1.5 overflow-hidden shadow-lg shadow-[#2391FF]/10">
              <img
                src="/assets/blazebyte-logo.png"
                alt="BlazeByte Studio Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(35,145,255,0.6)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-['Barlow']">
                BlazeByte <span className="text-[#2391FF]">Studio</span>
              </span>
              <span className="text-[11px] font-medium tracking-wider text-[#B7B09E] uppercase">
                SaaS & Systems
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium tracking-wide transition-colors py-1 cursor-pointer nav-hover-line ${
                    isActive
                      ? 'text-[#2391FF] active font-semibold'
                      : 'text-[#B7B09E] hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenPortal('user')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-[#B7B09E] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-1.5"
            >
              <User className="w-3.5 h-3.5 text-[#2391FF]" />
              <span>Portal</span>
            </button>

            <button
              onClick={() => onOpenPortal('admin')}
              className="p-1.5 rounded-lg text-xs font-medium text-[#B7B09E] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center"
              title="Admin Dashboard"
            >
              <Shield className="w-3.5 h-3.5 text-[#B7B09E] hover:text-[#2391FF]" />
            </button>

            <button
              onClick={() => handleNavClick('custom-plan')}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2391FF] to-[#0070e0] hover:from-[#3ea0ff] hover:to-[#2391FF] transition-all shadow-lg shadow-[#2391FF]/25 hover:shadow-[#2391FF]/40 flex items-center gap-2 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-white/90 group-hover:rotate-12 transition-transform" />
              <span>Build Custom Plan</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#2391FF] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#181e29]/95 backdrop-blur-2xl border-b border-[#2391FF]/20 px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#2391FF]/15 text-[#2391FF] border border-[#2391FF]/30 font-semibold'
                      : 'text-[#B7B09E] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#2391FF] shadow-[0_0_6px_#2391FF]"></span>}
                </button>
              );
            })}

            <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal('user');
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-[#B7B09E]"
              >
                <User className="w-3.5 h-3.5 text-[#2391FF]" />
                Customer Portal
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal('admin');
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-[#B7B09E]"
              >
                <Shield className="w-3.5 h-3.5 text-[#B7B09E]" />
                Admin Panel
              </button>
            </div>

            <button
              onClick={() => handleNavClick('custom-plan')}
              className="w-full mt-2 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#2391FF] to-[#0070e0] flex items-center justify-center gap-2 shadow-lg shadow-[#2391FF]/25"
            >
              <Sparkles className="w-4 h-4" />
              Build Your Custom Plan
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
