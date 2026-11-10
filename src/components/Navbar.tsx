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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08021b]/90 backdrop-blur-xl border-b border-[rgba(99,203,255,0.2)] py-2.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#08021bee] to-transparent backdrop-blur-md py-3.5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16 sm:h-20">
          {/* Brand Logo & Name as in index.html */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer transition-transform hover:scale-[1.02]"
          >
            <div className="w-[74px] h-[50px] flex items-center justify-center">
              <img
                src="/assets/blazebyte-logo.png"
                alt="BlazeByte Studio logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(99,203,255,0.6)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-['Barlow']">
                BlazeByte <span className="text-[#63cbff]">Studio</span>
              </span>
              <span className="text-[11px] font-medium tracking-wider text-[#9ea6bd] uppercase font-['Barlow']">
                SaaS & Systems
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Hover Line & Cyan Glow */}
          <div className="hidden md:flex items-center gap-8 lg:gap-11 font-['Barlow'] text-[17px]">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors py-1 cursor-pointer nav-hover-line ${
                    isActive
                      ? 'text-[#65ffe3] active font-semibold'
                      : 'text-[#e1e4eb] hover:text-[#65ffe3]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 font-['Barlow']">
            <button
              onClick={() => onOpenPortal('user')}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#c8ccda] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-[#63cbff]" />
              <span>Portal</span>
            </button>

            <button
              onClick={() => onOpenPortal('admin')}
              className="p-2 rounded-full text-xs font-medium text-[#c8ccda] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center cursor-pointer"
              title="Admin Dashboard"
            >
              <Shield className="w-3.5 h-3.5 text-[#63cbff]" />
            </button>

            {/* Pill CTA button from index.html */}
            <button
              onClick={() => handleNavClick('custom-plan')}
              className="pill primary text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#65ffe3]" />
              <span>Build Custom Plan</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#65ffe3] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08021b]/95 backdrop-blur-2xl border-b border-[rgba(99,203,255,0.25)] px-6 pt-4 pb-7 animate-in slide-in-from-top-2 duration-200 font-['Barlow']">
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
    </nav>
  );
};
