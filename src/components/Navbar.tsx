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
          ? 'bg-[#070219]/90 backdrop-blur-xl border-b border-[rgba(99,203,255,0.2)] py-2.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#070219dd] via-[#070219aa] to-transparent py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 sm:h-20">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <div className="w-14 h-11 flex items-center justify-center p-1 rounded-xl bg-white/[0.04] border border-[rgba(99,203,255,0.3)] shadow-[0_0_12px_rgba(99,203,255,0.3)]">
              <img
                src="/assets/blazebyte-logo.png"
                alt="BlazeByte Studio logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_#63cbff]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-['Barlow']">
                BlazeByte <span className="text-[#63cbff]">Studio</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-[#9ea6bd] uppercase font-['Barlow']">
                SAAS & SYSTEMS
              </span>
            </div>
          </button>

          {/* Centered Floating Capsule Nav (Inspired by Soda glass nav capsule) */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full border border-[rgba(99,203,255,0.22)] bg-[rgba(14,8,40,0.68)] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.25)] font-['Barlow']">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#2391FF] text-white shadow-[0_0_16px_rgba(35,145,255,0.6)]'
                      : 'text-[#d6d9e4] hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 font-['Barlow']">
            <button
              onClick={() => onOpenPortal('user')}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#c8ccda] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-[#63cbff]" />
              <span>Portal</span>
            </button>

            <button
              onClick={() => onOpenPortal('admin')}
              className="p-2 rounded-full text-xs font-semibold text-[#c8ccda] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center cursor-pointer"
              title="Admin Dashboard"
            >
              <Shield className="w-3.5 h-3.5 text-[#63cbff]" />
            </button>

            {/* Glowing Pill CTA Button */}
            <button
              onClick={() => handleNavClick('custom-plan')}
              className="pill primary text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#65ffe3]" />
              <span>Build Custom Plan</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#65ffe3] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070219]/95 backdrop-blur-2xl border-b border-[rgba(99,203,255,0.25)] px-6 pt-4 pb-7 animate-in slide-in-from-top-2 duration-200 font-['Barlow']">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[rgba(99,203,255,0.15)] text-[#65ffe3] border border-[rgba(99,203,255,0.3)] font-semibold'
                      : 'text-[#d6d9e4] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#65ffe3] shadow-[0_0_8px_#65ffe3]"></span>}
                </button>
              );
            })}

            <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal('user');
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-[#d6d9e4]"
              >
                <User className="w-3.5 h-3.5 text-[#63cbff]" />
                Customer Portal
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal('admin');
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-[#d6d9e4]"
              >
                <Shield className="w-3.5 h-3.5 text-[#65ffe3]" />
                Admin Panel
              </button>
            </div>

            <button
              onClick={() => handleNavClick('custom-plan')}
              className="pill primary w-full mt-3 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#65ffe3]" />
              Build Your Custom Plan
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
