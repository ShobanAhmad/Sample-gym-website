import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Trophy, Users, ShieldCheck, Flame } from 'lucide-react';
import { GymTheme } from '../types';

interface HeroProps {
  config: GymTheme;
  onOpenTrial: () => void;
}

export default function Hero({ config, onOpenTrial }: HeroProps) {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 pt-20"
    >
      {/* Background Graphic Zoom Container */}
      <div className="absolute inset-0 z-0">
        <picture>
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1600"
            alt="Elite Trainer and barbell workout"
            className="w-full h-full object-cover scale-105 filter brightness-35 contrast-110 saturate-[0.8]"
            referrerPolicy="no-referrer"
          />
        </picture>
        {/* Cinematic dark gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-black/80" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-neutral-950/40 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-neutral-950/40 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center lg:text-left flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Header Messaging */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            
            {/* High-vibe promotional pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1 bg-neutral-900/90 border border-neutral-800 rounded-full text-xs font-semibold tracking-wider text-neutral-300 uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: config.accentHex }}></span>
              <span>24/7 Access • Elite Coaching Clinic</span>
            </motion.div>

            {/* Giant Title Power Statement */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-white uppercase"
            >
              Transform{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-400">
                Your Body.
              </span>{' '}
              <br className="hidden sm:inline" />
              Elevate{' '}
              <span
                className="transition-colors duration-400"
                style={{ color: config.accentHex }}
              >
                Your State.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              {config.subtagline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                id="hero-start-trial-cta"
                onClick={onOpenTrial}
                className="w-full sm:w-auto px-8 py-4 font-display font-black text-black text-sm uppercase tracking-widest rounded transition-all duration-300 cursor-pointer hover:scale-103 opacity-95 hover:opacity-100 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                style={{ backgroundColor: config.accentHex }}
              >
                Start Free Trial
                <ArrowUpRight className="w-4 h-4 text-black stroke-[3]" />
              </button>

              <a
                id="hero-view-programs-cta"
                href="#programs"
                className="w-full sm:w-auto px-8 py-4 border border-neutral-700 hover:border-neutral-500 rounded bg-black/40 hover:bg-neutral-900/60 font-display font-bold text-xs uppercase tracking-widest text-neutral-200 hover:text-white transition duration-200 text-center cursor-pointer"
              >
                View Programs
              </a>
            </motion.div>
          </div>

          {/* Sizing box on RHS for layout offset or dynamic premium visual widget */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-center justify-center relative">
            {/* Transparent float badge for production value metrics */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-80 h-80 rounded-2xl border border-neutral-800/80 bg-neutral-900/30 backdrop-blur-md p-6 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div
                  className="p-3 bg-neutral-900 rounded-lg"
                  style={{ border: `1px solid ${config.accentHex}40` }}
                >
                  <Trophy className="w-6 h-6" style={{ color: config.accentHex }} />
                </div>
                <span className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
                  ACTIVE RATIO
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-neutral-400 tracking-wider">
                  TRAIN LIKE A CHAMPION
                </span>
                <h4 className="font-display text-4xl font-extrabold text-white mt-1">
                  100% RESULTS
                </h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  Every class features progress tracking, personalized posture adaptations, and real performance feedback.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold">
                <span className="text-neutral-500 font-mono">FACILITY GRADE</span>
                <span className="text-white tracking-widest font-mono">A++ ELITE</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic bottom cred stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 sm:mt-24 pt-8 border-t border-neutral-900/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          <div id="statbox-members">
            <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
              <Users className="w-3.5 h-3.5" style={{ color: config.accentHex }} />
              <span className="text-[10px] font-mono uppercase tracking-widest">Active Members</span>
            </div>
            <p className="font-display text-2xl sm:text-3.5xl font-extrabold text-white">
              750+ <span className="text-xs font-mono font-medium text-neutral-500">TRAINED</span>
            </p>
          </div>

          <div id="statbox-trainers">
            <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
              <Flame className="w-3.5 h-3.5" style={{ color: config.accentHex }} />
              <span className="text-[10px] font-mono uppercase tracking-widest">Expert Coaches</span>
            </div>
            <p className="font-display text-2xl sm:text-3.5xl font-extrabold text-white">
              15+ <span className="text-xs font-mono font-medium text-neutral-500">CERTIFIED</span>
            </p>
          </div>

          <div id="statbox-hours">
            <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" style={{ color: config.accentHex }} />
              <span className="text-[10px] font-mono uppercase tracking-widest">Weekly Timetable</span>
            </div>
            <p className="font-display text-2xl sm:text-3.5xl font-extrabold text-white">
              35+ <span className="text-xs font-mono font-medium text-neutral-500 font-sans">CLASSES</span>
            </p>
          </div>

          <div id="statbox-satisfaction">
            <div className="flex items-center gap-1.5 text-neutral-500 mb-1">
              <Trophy className="w-3.5 h-3.5" style={{ color: config.accentHex }} />
              <span className="text-[10px] font-mono uppercase tracking-widest">Member Satisfaction</span>
            </div>
            <p className="font-display text-2xl sm:text-3.5xl font-extrabold text-white">
              99.2% <span className="text-xs font-mono font-medium text-neutral-500 font-sans">SUCCESS RATE</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative light line at background */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </section>
  );
}
