import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, ChevronRight, Phone } from 'lucide-react';
import { GymTheme } from '../types';

interface HeaderProps {
  config: GymTheme;
  onOpenTrial: () => void;
}

export default function Header({ config, onOpenTrial }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Results', href: '#results' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      id="main-app-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 border-b border-neutral-800 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md'
          : 'bg-gradient-to-b from-black via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <a
            id="header-nav-logo"
            href="#top"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div
              className="p-1 rounded transition-colors"
              style={{ backgroundColor: config.accentHex }}
            >
              <Flame className="w-5 h-5 text-black font-extrabold" />
            </div>
            <span className="font-display text-2xl font-black tracking-wider text-white select-none transition-all duration-300">
              {config.name}
            </span>
          </a>

          {/* Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                id={`navlink-${link.name.toLowerCase()}`}
                key={link.name}
                href={link.href}
                className="text-sm font-semibold tracking-wide text-neutral-300 hover:text-white hover:underline decoration-2 underline-offset-4 transition duration-200"
                style={{
                  textDecorationColor: config.accentHex,
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions & Responsive Hamburg */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              id="header-phone-anchor"
              href={`tel:${config.primaryPhone}`}
              className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5" style={{ color: config.accentHex }} />
              {config.primaryPhone}
            </a>
            <button
              id="header-trial-primary-cta"
              onClick={onOpenTrial}
              className="px-5 py-2 font-display uppercase font-bold text-xs tracking-wider rounded border cursor-pointer hover:scale-102 hover:shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-200"
              style={{
                backgroundColor: config.accentHex,
                color: '#000000',
                border: 'none',
              }}
            >
              Start Free Trial
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <button
              id="header-trial-secondary-cta-mobile"
              onClick={onOpenTrial}
              className="sm:hidden px-3.5 py-1.5 text-[10px] font-display uppercase font-extrabold tracking-wider rounded cursor-pointer"
              style={{
                backgroundColor: config.accentHex,
                color: '#000000',
              }}
            >
              Free Trial
            </button>
            <button
              id="hamburger-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-40 pointer hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <div
        id="header-mobile-drawer"
        className={`lg:hidden transition-all duration-300 ease-in-out border-b border-neutral-800 ${
          isOpen ? 'max-h-screen opacity-100 py-4 bg-neutral-950/95 backdrop-blur-xl' : 'max-h-0 opacity-0 overflow-hidden py-0'
        }`}
      >
        <div className="px-4 space-y-2.5">
          {navLinks.map((link) => (
            <a
              id={`navlink-mob-${link.name.toLowerCase()}`}
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-neutral-300 hover:bg-neutral-900 hover:text-white transition text-sm font-semibold uppercase tracking-wider"
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 opacity-50" style={{ color: config.accentHex }} />
            </a>
          ))}
          <div className="pt-4 pb-2 border-t border-neutral-900 flex flex-col gap-3">
            <a
              id="mobile-phone-anchor"
              href={`tel:${config.primaryPhone}`}
              className="flex items-center gap-2 px-3 text-sm font-mono text-neutral-400"
            >
              <Phone className="w-4 h-4" style={{ color: config.accentHex }} />
              {config.primaryPhone}
            </a>
            <button
              id="mobile-header-trial-cta"
              onClick={() => {
                setIsOpen(false);
                onOpenTrial();
              }}
              className="w-full py-3 font-display uppercase font-bold text-sm tracking-wider rounded-lg text-center cursor-pointer"
              style={{
                backgroundColor: config.accentHex,
                color: '#000000',
              }}
            >
              Start Free Trial Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
