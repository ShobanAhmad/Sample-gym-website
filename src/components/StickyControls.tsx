import React, { useState, useEffect } from 'react';
import { MessageCircle, Flame, ArrowUp } from 'lucide-react';
import { GymTheme } from '../types';

interface StickyControlsProps {
  config: GymTheme;
  onOpenTrial: () => void;
}

export default function StickyControls({ config, onOpenTrial }: StickyControlsProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Floating Buttons Stage */}
      <div
        id="persistent-floaters-tray"
        className={`fixed bottom-6 right-6 z-40 flex flex-col sm:flex-row items-center gap-3 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        }`}
      >
        {/* WhatsApp Overlay */}
        <a
          id="float-whatsapp-anchor"
          href={`https://wa.me/${config.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white hover:scale-106 shadow-2xl flex items-center justify-center transition cursor-pointer"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white stroke-none" />
        </a>

        {/* Start Free Trial Floating Pill */}
        <button
          id="float-claim-pill-btn"
          onClick={onOpenTrial}
          className="h-12 sm:h-14 px-5 sm:px-6 rounded-full font-display uppercase font-black text-xs sm:text-xs tracking-widest text-[#000000] shadow-[0_15px_30px_rgba(0,0,0,0.6)] flex items-center gap-2 transition cursor-pointer hover:scale-103"
          style={{ backgroundColor: config.accentHex }}
        >
          <Flame className="w-4 h-4 text-black animate-pulse" />
          <span>Start Free Trial</span>
        </button>

        {/* Quick Scroll-To-Top button */}
        <button
          id="float-scroll-top-btn"
          onClick={scrollToTop}
          className="hidden sm:flex w-12 h-12 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white items-center justify-center border border-neutral-800 transition cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
