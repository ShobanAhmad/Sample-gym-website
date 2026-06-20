import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { Program, GymTheme } from '../types';
import { PROGRAMS } from '../data';

interface ProgramsProps {
  config: GymTheme;
}

export default function Programs({ config }: ProgramsProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-black" />;
    }
    return <LucideIcons.Dumbbell className="w-6 h-6 text-black" />;
  };

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="programs" className="py-24 bg-[#0a0a0c] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: config.accentHex }}>
              DESIGNED FOR ULTIMATE METRIC RETURN
            </span>
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
          </div>

          <h2 className="font-display text-4xl sm:text-5.5xl font-black tracking-tight uppercase">
            CHAMPIONSHIP METRICS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              TRAINING MODULES
            </span>
          </h2>

          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Choose your physical catalyst. Our progressive syllabus scales to accommodate your current biometric status while enforcing persistent mechanical skill.
          </p>
        </div>

        {/* Dynamic Card Grid */}
        <div id="programs-card-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((program) => {
            const isExpanded = expandedId === program.id;
            return (
              <div
                id={`program-card-${program.id}`}
                key={program.id}
                className={`relative rounded-xl border border-neutral-900 bg-neutral-950/80 p-6 hover:border-neutral-800 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl ${
                  isExpanded ? 'ring-1' : ''
                }`}
                style={{
                  ringColor: config.accentHex,
                  boxShadow: isExpanded ? `0 10px 30px -10px ${config.accentHex}15` : 'none'
                }}
              >
                <div>
                  {/* Top line containing Category Icon & Stats */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="p-2.5 rounded-lg transition-colors"
                      style={{ backgroundColor: config.accentHex }}
                    >
                      {getIconComponent(program.icon)}
                    </div>
                    <span className="text-[10px] font-mono py-1 px-2.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-400 tracking-wider">
                      {program.calories}
                    </span>
                  </div>

                  {/* Title and Short Results Summary */}
                  <h3 className="font-display text-xl font-bold tracking-wide text-white uppercase">
                    {program.name}
                  </h3>

                  <p className="text-xs text-neutral-400 mt-2.5 leading-relaxed font-sans min-h-[50px]">
                    {program.description}
                  </p>

                  {/* Expandable Biometric info panel */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-56 opacity-100 mt-4 pt-4 border-t border-neutral-900' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-2.5 text-xs">
                      <div>
                        <span className="text-neutral-500 font-mono text-[9px] uppercase tracking-wider block">EXPECTED OUTCOME</span>
                        <p className="text-neutral-200 mt-0.5">{program.results}</p>
                      </div>
                      <div>
                        <span className="text-neutral-500 font-mono text-[9px] uppercase tracking-wider block font-sans">SUITABILITY RANGE</span>
                        <p className="text-neutral-300 mt-0.5">{program.suitability}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Learn More Toggle CTA */}
                <div className="mt-6 pt-4 border-t border-neutral-900/60 flex items-center justify-between">
                  <button
                    id={`btn-prog-toggle-${program.id}`}
                    onClick={() => toggleExpand(program.id)}
                    className="text-xs uppercase font-mono tracking-wider font-semibold hover:underline cursor-pointer flex items-center gap-1.5 transition-colors"
                    style={{ color: isExpanded ? '#ffffff' : config.accentHex }}
                  >
                    <span>{isExpanded ? 'Collapse Details △' : 'Reveal Insights ▽'}</span>
                  </button>
                  <span className="text-[10px] font-mono text-neutral-600">MOD-VAL // 0{program.id.split('-')[1]}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom sales annotation */}
        <div className="mt-12 text-center bg-neutral-950 p-5 rounded-xl border border-neutral-900/60 max-w-xl mx-auto text-xs text-neutral-500">
          📍 <strong className="text-neutral-300">Sales Pro Tip:</strong> Rebranders can change the modules in `src/data.ts` to instantly demo any specialization, for instance: MMA/Cage Fight, Olympic Barbell, or Core Reformer Pilates.
        </div>
      </div>
    </section>
  );
}
