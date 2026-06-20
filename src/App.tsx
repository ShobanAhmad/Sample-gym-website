import React, { useState } from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';

import { GymTheme } from './types';
import { DEFAULT_THEME_CONFIG, WHY_CHOOSE_US_CARDS } from './data';

// Import Modular Components
import RebrandCustomizer from './components/RebrandCustomizer';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Transformations from './components/Transformations';
import Trainers from './components/Trainers';
import Schedule from './components/Schedule';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import TrialForm from './components/TrialForm';
import Contact from './components/Contact';
import StickyControls from './components/StickyControls';

export default function App() {
  const [gymConfig, setGymConfig] = useState<GymTheme>(DEFAULT_THEME_CONFIG);
  const [prefilledTrainer, setPrefilledTrainer] = useState<string>('');
  const [prefilledMessage, setPrefilledMessage] = useState<string>('');

  // Scroll to trial form segment and pre-populate message/trainer
  const handleOpenTrial = (message: string = '') => {
    setPrefilledTrainer('');
    setPrefilledMessage(message);
    
    // Smooth scroll offset to booking zone
    const target = document.getElementById('trial-form-zone');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectTrainer = (trainerName: string) => {
    setPrefilledTrainer(trainerName);
    setPrefilledMessage(`Hi! I'd love to schedule a custom physiological movement screen assessment and 1-on-1 trial with Coach ${trainerName.split(' ')[0]}.`);
    
    const target = document.getElementById('trial-form-zone');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectPlan = (planName: string, billingPeriod: string, price: number) => {
    setPrefilledTrainer('Any Available Coach');
    setPrefilledMessage(`Hi! I want to claim my 3-day access pass and discuss signing up for the ${planName} Plan (${billingPeriod} @ $${price}/mo).`);
    
    const target = document.getElementById('trial-form-zone');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleResetConfig = () => {
    setGymConfig(DEFAULT_THEME_CONFIG);
  };

  // Helper to map icon names to Lucide icons
  const renderChooseIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6" style={{ color: gymConfig.accentHex }} />;
    }
    return <LucideIcons.Sparkles className="w-6 h-6" style={{ color: gymConfig.accentHex }} />;
  };

  return (
    <div className="bg-[#0c0c0e] text-neutral-100 min-h-screen relative selection:bg-neutral-800 selection:text-white">
      
      {/* Sales Pitch Global Rebrander Widget */}
      <RebrandCustomizer
        config={gymConfig}
        onChange={setGymConfig}
        onReset={handleResetConfig}
      />

      {/* Header element overlay */}
      <Header
        config={gymConfig}
        onOpenTrial={() => handleOpenTrial('Hi! I would like to redeem my 3-day full-access pass and book an orientation.')}
      />

      {/* Hero viewport segment */}
      <Hero
        config={gymConfig}
        onOpenTrial={() => handleOpenTrial('Hi! I would love to claim my free 3-day orientation pass!')}
      />

      {/* Brand story / About section */}
      <About config={gymConfig} />

      {/* Core Why Choose Us Section */}
      <section id="why-us" className="py-24 bg-[#0a0a0c] text-white relative border-t border-b border-neutral-900/65">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-6" style={{ backgroundColor: gymConfig.accentHex }}></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: gymConfig.accentHex }}>
                THE VALUE OVERVIEW PROPOSITION
              </span>
              <span className="h-px w-6" style={{ backgroundColor: gymConfig.accentHex }}></span>
            </div>

            <h2 className="font-display text-4xl sm:text-5.5xl font-black tracking-tight uppercase leading-none">
              WHY ATHLETES CHOOSE US
            </h2>

            <p className="text-neutral-400 text-sm max-w-lg mx-auto leading-relaxed">
              We eliminate fluff obstacles to offer a high-purity, results-focused physical lab. From the platform design to the certified guidance, everything serves your mechanical lifting thresholds.
            </p>
          </div>

          {/* Cards Grid list */}
          <div id="why-us-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US_CARDS.map((card, idx) => (
              <div
                id={`why-card-${idx}`}
                key={idx}
                className="p-6 bg-neutral-950 border border-neutral-900 rounded-xl hover:border-neutral-850 hover:bg-neutral-900/10 transition-all duration-300 space-y-4 flex flex-col justify-start text-left shadow-2xl"
              >
                <div
                  className="p-3 w-12 h-12 rounded-lg flex items-center justify-center shrink-0 border border-neutral-800"
                  style={{ backgroundColor: `${gymConfig.accentHex}08` }}
                >
                  {renderChooseIcon(card.icon)}
                </div>
                
                <div className="space-y-1.5">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                    {card.title}
                  </h3>
                  <p className="text-xs text-neutral-450 leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Programs List */}
      <Programs config={gymConfig} />

      {/* Comparative Transformations Drag Handle Slider */}
      <Transformations config={gymConfig} />

      {/* Meet the Trainers Segment */}
      <Trainers
        config={gymConfig}
        onSelectTrainer={handleSelectTrainer}
      />

      {/* Interactive Class Schedules database */}
      <Schedule
        config={gymConfig}
        onOpenTrial={handleOpenTrial}
      />

      {/* Multi-tiered Pricing Section with Monthly/Annual toggles */}
      <Pricing
        config={gymConfig}
        onSelectPlan={handleSelectPlan}
      />

      {/* Asymmetric Lightbox Gallery */}
      <Gallery config={gymConfig} />

      {/* Testimonials Quote Slider Carousel */}
      <Testimonials config={gymConfig} />

      {/* Free Trial Opt-In Funnel Segment with Client Validation */}
      <TrialForm
        config={gymConfig}
        prefilledCoach={prefilledTrainer}
        prefilledMessage={prefilledMessage}
      />

      {/* Location Details & Mock Google Map Coordinates */}
      <Contact config={gymConfig} />

      {/* Site Footer - Brand Credits Portfolio Notice */}
      <footer className="bg-black border-t border-neutral-900 py-16 text-neutral-400 text-sm overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-neutral-900">
            
            {/* Column A: branding */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <div
                  className="p-1.5 rounded"
                  style={{ backgroundColor: gymConfig.accentHex }}
                >
                  <LucideIcons.Flame className="w-4.5 h-4.5 text-black font-black" />
                </div>
                <span className="font-display text-xl font-bold text-white tracking-widest uppercase">
                  {gymConfig.name}
                </span>
              </div>
              
              <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
                Elite strength biomechanics center, performance recovery, and community loading. Designed for raw, uncompromised physiological ROI.
              </p>

              {/* Demo pitch watermark note */}
              <div
                className="inline-flex items-center gap-2 py-1 px-3.5 rounded border border-neutral-800 text-[10px] font-mono uppercase bg-neutral-950/80 tracking-wide select-none cursor-default"
                style={{ borderColor: `${gymConfig.accentHex}20` }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: gymConfig.accentHex }} />
                <span>Sales Demonstration Active Portfolio Mode</span>
              </div>
            </div>

            {/* Column B: quick targets navigation */}
            <div className="md:col-span-3 text-left space-y-3">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 font-bold">NAVIGATION MATRIX</h4>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
                <a href="#about" className="hover:text-white transition">Story</a>
                <a href="#programs" className="hover:text-white transition">Programs</a>
                <a href="#results" className="hover:text-white transition">Before/After</a>
                <a href="#trainers" className="hover:text-white transition">Coaching</a>
                <a href="#schedule" className="hover:text-white transition">Timetable</a>
                <a href="#pricing" className="hover:text-white transition">Plans</a>
                <a href="#gallery" className="hover:text-white transition">Spaces</a>
                <a href="#contact" className="hover:text-white transition">Contact</a>
              </div>
            </div>

            {/* Column C: contact parameters */}
            <div className="md:col-span-4 text-left space-y-3">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 font-bold">REBRAND INFORMATION PROTOCOL</h4>
              <p className="text-xs text-neutral-400 leading-normal leading-relaxed">
                Need this demo branded for your own fitness business client? Click the <strong className="text-white">Sales Pitch Dashboard</strong> badge in the right-hand margin to configure custom colors, logos, names, and templates in real time.
              </p>
            </div>

          </div>

          {/* Copyright details */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p className="font-mono text-[10px] text-neutral-550 text-center md:text-left">
              &copy; {new Date().getFullYear()} {gymConfig.name.toUpperCase()} INC. ALL RIGHTS RESERVED. 
              <br className="sm:hidden" />
              {' '} // GRAPHICS INTENDED ONLY FOR DEMO PORTFOLIO LANDING.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-neutral-500 font-mono text-[10px]">
              <a href="#top" className="hover:text-neutral-300">PRIVACY POLICY</a>
              <span>•</span>
              <a href="#top" className="hover:text-neutral-300">TERMS OF DISCIPLINE</a>
              <span>•</span>
              <a href="#top" className="hover:text-neutral-300" style={{ color: gymConfig.accentHex }}>SECURE SYSTEM: OK</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Sticky Mobile/Desktop Persistent WhatsApp and booking CTAs */}
      <StickyControls
        config={gymConfig}
        onOpenTrial={() => handleOpenTrial('Hi! I would like to redeem my 3-day orientation pass right now.')}
      />

    </div>
  );
}
