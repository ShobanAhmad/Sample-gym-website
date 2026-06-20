import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, ArrowLeftRight, ArrowRight, Trophy, Info } from 'lucide-react';
import { Transformation, GymTheme } from '../types';
import { TRANSFORMATIONS } from '../data';

interface TransformationsProps {
  config: GymTheme;
}

export default function Transformations({ config }: TransformationsProps) {
  const [activeCategory, setActiveCategory] = useState<Transformation['category']>('weight-loss');
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 - 100
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);

  const categories: { id: Transformation['category']; name: string }[] = [
    { id: 'weight-loss', name: 'Visceral Fat Loss' },
    { id: 'muscle-gain', name: 'Skeletal Muscle Gain' },
    { id: 'recomp', name: 'Body Recomposition' },
    { id: 'performance', name: 'Athletic Performance' }
  ];

  // Retrieve current active transformation based on category state
  const activeTransform = TRANSFORMATIONS.find(t => t.category === activeCategory) || TRANSFORMATIONS[0];

  // Handle slide trigger mathematics
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    handleMove(e.clientX);
  };

  const handleTouchStart = () => {
    isDraggingRef.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleStopDragging = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleStopDragging);
    window.addEventListener('touchend', handleStopDragging);
    return () => {
      window.removeEventListener('mouseup', handleStopDragging);
      window.removeEventListener('touchend', handleStopDragging);
    };
  }, []);

  // Quick click update anywhere on container
  const handleContainerClick = (e: React.MouseEvent) => {
    if (isDraggingRef.current) return;
    handleMove(e.clientX);
  };

  return (
    <section id="results" className="py-24 bg-neutral-950 text-white relative overflow-hidden select-none">
      
      {/* Decorative backdrop gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-900 rounded-full blur-[120px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: config.accentHex }}>
              PROOF IN THE PERFORMANCE METRIC
            </span>
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
          </div>

          <h2 className="font-display text-4xl sm:text-5.5xl font-black tracking-tight uppercase">
            AESTHETIC & PHYSICAL{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              REAL TRANSFORMATIONS
            </span>
          </h2>

          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Drag the handle to compare results. No camera lighting adjustments, no fake angles — raw progressive compound results.
          </p>
        </div>

        {/* Filter Navigation Category Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-2xl mx-auto md:mb-14">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                id={`btn-trans-cat-${cat.id}`}
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSliderPosition(50); // reset slider to center on category change
                }}
                className={`py-2 px-4 rounded text-xs uppercase font-mono tracking-wider transition-all cursor-pointer font-bold duration-200 border ${
                  isSelected
                    ? 'text-black bg-white border-white scale-102 font-bold shadow-[0_5px_15px_rgba(255,255,255,0.08)]'
                    : 'text-neutral-400 bg-neutral-900/60 border-neutral-850 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Main interactive sliding layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Interactive Comparison Stage */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            <div
              id="slider-capture-stage"
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              onClick={handleContainerClick}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-ew-resize select-none touch-none shadow-2xl"
              style={{
                '--slider-pos': `${sliderPosition}%`
              } as React.CSSProperties}
            >
              {/* IMAGE A: Before (Left Clip Layer) */}
              <div className="absolute inset-0 clip-before pointer-events-none">
                <picture>
                  <img
                    src={activeTransform.beforeImg}
                    alt="Physical state Before"
                    className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <div className="absolute bottom-5 left-5 bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase py-1.5 px-3 rounded border border-neutral-800/80 text-neutral-300">
                  BEFORE (DAY 01)
                </div>
              </div>

              {/* IMAGE B: After (Right Clip Layer) */}
              <div className="absolute inset-0 clip-after pointer-events-none">
                <picture>
                  <img
                    src={activeTransform.afterImg}
                    alt="Physical state After"
                    className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.1]"
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <div className="absolute bottom-5 right-5 bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase py-1.5 px-3 rounded border border-neutral-800/80 text-neutral-350">
                  AFTER ({activeTransform.duration})
                </div>
              </div>

              {/* Slider Separator Line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] cursor-ew-resize filter pointer-events-none"
                style={{
                  left: `${sliderPosition}%`,
                  backgroundColor: config.accentHex,
                  boxShadow: `0 0 10px ${config.accentHex}, 0 0 20px ${config.accentHex}`
                }}
              >
                {/* Drag Handle Dial Button */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-black shadow-[0_0_15px_rgba(0,0,0,0.6)] flex items-center justify-center"
                  style={{ backgroundColor: config.accentHex }}
                >
                  <ArrowLeftRight className="w-5 h-5 text-black stroke-[3]" />
                </div>
              </div>
            </div>

            {/* Micro instructional prompt */}
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mt-3 flex items-center gap-1.5 justify-center">
              <ArrowLeftRight className="w-3.5 h-3.5" style={{ color: config.accentHex }} />
              DRAG OR TAP THE CONTAINER STAGE TO REVEAL TRANSFORMATION
            </span>
          </div>

          {/* Metrics Column & Coach Quote */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Transformation Highlighting Metrics */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase block">SUBJECT: {activeTransform.name} ({activeTransform.age} YRS OLD)</span>
              
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-neutral-900 border border-neutral-850">
                <Trophy className="w-4 h-4" style={{ color: config.accentHex }} />
                <span className="text-xs font-mono font-bold text-white tracking-wider">{activeTransform.stat} Achievement</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-wide uppercase text-white mt-3">
                BUILDING SYSTEMATIC RESULTS
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-2">
                {activeTransform.achievement} It was fueled entirely by consistent strength progressions, customized macro distributions, and strict mechanical guidance.
              </p>
            </div>

            {/* Metric Specs Details */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-900/60 font-mono">
              <div className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-900">
                <span className="text-[9px] uppercase text-neutral-500 tracking-wider">PROGRAM LENGTH</span>
                <p className="text-sm font-semibold text-white uppercase mt-0.5">{activeTransform.duration}</p>
              </div>
              <div className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-900">
                <span className="text-[9px] uppercase text-neutral-500 tracking-wider">SUCCESS ACCURACY</span>
                <p className="text-sm font-semibold text-white uppercase mt-0.5">100% COMPLIANCE</p>
              </div>
            </div>

            {/* Coach Insights */}
            <div className="p-4 bg-neutral-950/60 rounded-xl border border-neutral-905 flex gap-3.5">
              <div className="shrink-0">
                <Info className="w-5 h-5 shrink-0" style={{ color: config.accentHex }} />
              </div>
              <div>
                <span className="text-[9px] font-mono tracking-wider uppercase text-neutral-400">SALES Pitch INSIGHTS FOR OWNERS</span>
                <p className="text-[11px] text-neutral-400 leading-normal mt-1 leading-relaxed">
                  Before-and-after interactive slider widgets are the single-most responsive conversion generator on fitness landing pages. Prospects validate results instantly, boosting cold-opt in signatures tremendously.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
