import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Trophy, CheckCircle2 } from 'lucide-react';
import { GymTheme } from '../types';

interface AboutProps {
  config: GymTheme;
}

export default function About({ config }: AboutProps) {
  const highlights = [
    {
      title: "Results-Driven Philosophy",
      desc: "We don't sell memberships; we sell physical outcomes. Every barbell lifted is recorded to ensure sequential adaptation progression."
    },
    {
      title: "Scientific Loading Structures",
      desc: "Our programming respects human bio-mechanics, utilizing linear periodization and kinetic adaptation to build joints while shedding body fat."
    },
    {
      title: "Unrivaled Athletic Atmosphere",
      desc: "Step into an ego-free sanctuary of focused high-achievers. Our community pushes you to complete that final plate target every single session."
    }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Large visual image stacking */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
                  alt="Premium barbell racks design"
                  className="w-full h-[450px] object-cover group-hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              
              {/* Dynamic Overlay Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-neutral-900/90 border border-neutral-800 backdrop-blur-sm">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">THE CODE OF CONDUCT</span>
                <p className="mt-1 text-sm font-semibold text-neutral-200">
                  "No distractions. Deep focus, intense kinetic effort, and structural recovery are mandatory."
                </p>
              </div>
            </div>

            {/* Behind-card styled accent geometry */}
            <div
              className="absolute -top-4 -left-4 w-72 h-72 rounded-3xl opacity-10 blur-3xl pointer-events-none transition-colors duration-300"
              style={{ backgroundColor: config.accentHex }}
            />
          </div>

          {/* Right Column - Brand Story */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header Badge */}
            <div className="flex items-center gap-2">
              <span className="h-px w-8" style={{ backgroundColor: config.accentHex }}></span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: config.accentHex }}>
                ABOUT OUR TEAM MISSION
              </span>
            </div>

            {/* Punchy display heading */}
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight uppercase leading-none">
              WE ARE NOT A GYM. <br />
              WE ARE A{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400">
                TRANSFORMATION LAB.
              </span>
            </h2>

            {/* Descriptive story */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Founded under the principle of mechanical truth, <strong className="text-white">{config.name}</strong> was created to bypass generic "cardio-cruise" gym mentalities. We provide elite barbell coaching, metabolic conditioning protocols, and tailored nutrition blueprints under one premium roof.
            </p>

            {/* Checklist of highlights */}
            <div className="space-y-4 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex gap-3.5">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-5 h-5" style={{ color: config.accentHex }} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm tracking-wide text-white uppercase">
                      {item.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Pitch Callout */}
            <div
              className="p-4 rounded-lg bg-neutral-900 border-l-4 mt-6"
              style={{ borderLeftColor: config.accentHex }}
            >
              <p className="text-xs text-neutral-300 italic">
                "Prospective clients look for structures that guarantee their safety and metrics. Showcasing elite training frameworks raises membership commitment rates."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
