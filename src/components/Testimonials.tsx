import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Testimonial, GymTheme } from '../types';
import { TESTIMONIALS } from '../data';

interface TestimonialsProps {
  config: GymTheme;
}

export default function Testimonials({ config }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0c] text-white relative overflow-hidden">
      
      {/* Decorative backing circle */}
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full blur-[140px] opacity-5 pointer-events-none" style={{ backgroundColor: config.accentHex }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: config.accentHex }}>
              UNFILTERED MEMBER RAW INSIGHTS
            </span>
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
          </div>

          <h2 className="font-display text-4xl sm:text-5.5xl font-black tracking-tight uppercase">
            REVIEWS & CHAMPIONSHIP{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              TRUST MONIALS
            </span>
          </h2>

          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Read direct unedited reviews from those who load and progress every morning. Dedicated lifters who cleared their limitations.
          </p>
        </div>

        {/* Carousel Layout for Desktop & Mobile */}
        <div className="max-w-4xl mx-auto relative px-4" id="testimonials-carousel-box">
          
          {/* Main Card Frame */}
          <div className="relative rounded-2xl bg-neutral-950 border border-neutral-900 p-8 sm:p-12 shadow-2xl overflow-hidden min-h-[320px] flex flex-col justify-between">
            
            {/* Giant quote backdrop icon */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-neutral-900/60 pointer-events-none" />

            <div className="space-y-6">
              {/* Star Rating Strip */}
              <div className="flex gap-1" id="star-review-strip">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" style={{ color: config.accentHex }} />
                ))}
              </div>

              {/* Core Quote Box */}
              <p className="text-base sm:text-xl text-neutral-100 italic leading-relaxed font-serif">
                "{TESTIMONIALS[activeIndex].quote}"
              </p>
            </div>

            {/* Author Profile and Identity */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-neutral-900 mt-8">
              
              <div className="flex items-center gap-4">
                <picture>
                  <img
                    src={TESTIMONIALS[activeIndex].image}
                    alt={TESTIMONIALS[activeIndex].name}
                    className="w-12 h-12 rounded-full object-cover border border-neutral-800"
                    referrerPolicy="no-referrer"
                  />
                </picture>

                <div className="text-left font-sans">
                  <h4 className="font-display font-medium text-lg leading-tight text-white uppercase tracking-wide">
                    {TESTIMONIALS[activeIndex].name}
                  </h4>
                  <span className="text-[10px] font-mono tracking-widest text-[#22c55e] uppercase" style={{ color: config.accentHex }}>
                    {TESTIMONIALS[activeIndex].role}
                  </span>
                </div>
              </div>

              {/* Verification Stamp */}
              <div className="flex items-center gap-2 py-1.5 px-3 bg-neutral-900/80 border border-neutral-850 rounded-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400" />
                <span className="text-[10px] font-mono text-neutral-300 uppercase tracking-widest">VERIFIED ACTIVE LIFE MEMBER</span>
              </div>

            </div>

          </div>

          {/* Navigation Controls Overlay floating below card */}
          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              id="slider-review-prev-btn"
              onClick={handlePrev}
              className="p-3 bg-neutral-950 border border-neutral-900 hover:border-neutral-800 text-neutral-400 hover:text-white rounded-lg transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-neutral-500">
              0{activeIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              id="slider-review-next-btn"
              onClick={handleNext}
              className="p-3 bg-neutral-950 border border-neutral-900 hover:border-neutral-800 text-neutral-400 hover:text-white rounded-lg transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
