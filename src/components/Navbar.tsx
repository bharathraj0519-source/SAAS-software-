import React, { useState, useEffect } from 'react';
import { Menu, X, User, Shield, Sparkles, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onOpenPortal: (mode: 'user' | 'admin') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onNavigate, onOpenPortal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
          ? 'bg-[var(--panel-bg)] backdrop-blur-xl border-b border-[var(--card-border)] py-2.5 shadow-lg'
          : 'bg-[var(--nav-bg-top)] backdrop-blur-md py-3.5'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between gap-4 h-16 sm:h-20"
        >
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left cursor-pointer transition-transform hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] rounded-xl p-1"
            aria-label="BlazeByte Studio - Back to Homepage"
          >
            <div className="w-[68px] h-[46px] flex items-center justify-center p-1 rounded-xl bg-white/[0.05] border border-[var(--card-border)] shadow-sm">
              <img
                src="/assets/blazebyte-logo.png"
                alt="BlazeByte Studio logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(99,203,255,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[var(--text)] flex items-center gap-1.5 font-['Barlow']">
                BlazeByte <span className="text-[var(--cyan)]">Studio</span>
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-[var(--muted)] uppercase font-['Barlow']">
                SaaS & Systems
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Hover Line & Accessible Focus */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10 font-['Barlow'] text-[17px] font-medium">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`transition-colors py-1 cursor-pointer nav-hover-line rounded-md px-1 focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] ${
                    isActive
                      ? 'text-[var(--cyan)] active font-bold'
                      : 'text-[var(--muted)] hover:text-[var(--text)]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right Action Buttons: Theme Toggle, Portal, Admin, CTA */}
          <div className="hidden lg:flex items-center gap-3 font-['Barlow']">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-[var(--muted)] hover:text-[var(--text)] bg-white/5 hover:bg-white/10 border border-[var(--card-border)] transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" aria-hidden="true" />
              )}
            </button>

            <button
              onClick={() => onOpenPortal('user')}
              className="px-3.5 py-2 rounded-full text-xs font-semibold text-[var(--muted)] hover:text-[var(--text)] bg-white/5 hover:bg-white/10 border border-[var(--card-border)] transition-all flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              aria-label="Open customer portal"
            >
              <User className="w-3.5 h-3.5 text-[var(--cyan)]" aria-hidden="true" />
              <span>Portal</span>
            </button>

            <button
              onClick={() => onOpenPortal('admin')}
              className="p-2.5 rounded-full text-xs font-medium text-[var(--muted)] hover:text-[var(--text)] bg-white/5 hover:bg-white/10 border border-[var(--card-border)] transition-all flex items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              aria-label="Open admin management console"
              title="Admin Dashboard"
            >
              <Shield className="w-3.5 h-3.5 text-[var(--cyan)]" aria-hidden="true" />
            </button>

            {/* Pill CTA button */}
            <button
              onClick={() => handleNavClick('custom-plan')}
              className="pill primary text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              aria-label="Build your custom plan"
            >
              <Sparkles className="w-4 h-4 text-[#65ffe3]" aria-hidden="true" />
              <span>Build Custom Plan</span>
            </button>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/5 border border-[var(--card-border)] text-[var(--muted)] hover:text-[var(--text)]"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-300" aria-hidden="true" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" aria-hidden="true" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-[var(--card-border)] text-[var(--text)] hover:text-[var(--cyan)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
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
          className="md:hidden bg-[var(--panel-bg)] backdrop-blur-2xl border-b border-[var(--card-border)] px-6 pt-4 pb-7 animate-in slide-in-from-top-2 duration-200 font-['Barlow'] shadow-xl"
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
                      ? 'bg-[var(--cyan)]/15 text-[var(--cyan)] border border-[var(--cyan)]/30'
                      : 'text-[var(--text)] hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[var(--cyan)] shadow-[0_0_8px_var(--cyan)]"></span>
                  )}
                </button>
              );
            })}

            <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-[var(--card-border)]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal('user');
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-[var(--card-border)] text-[var(--text)]"
                aria-label="Open customer portal"
              >
                <User className="w-3.5 h-3.5 text-[var(--cyan)]" aria-hidden="true" />
                Customer Portal
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPortal('admin');
                }}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-white/5 border border-[var(--card-border)] text-[var(--text)]"
                aria-label="Open admin management panel"
              >
                <Shield className="w-3.5 h-3.5 text-[var(--cyan)]" aria-hidden="true" />
                Admin Panel
              </button>
            </div>

            <button
              onClick={() => handleNavClick('custom-plan')}
              className="pill primary w-full mt-3 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#65ffe3]" aria-hidden="true" />
              Build Your Custom Plan
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
