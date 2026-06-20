import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, ShieldAlert, Sparkles, Navigation } from 'lucide-react';
import { GymTheme } from '../types';

interface ContactProps {
  config: GymTheme;
}

export default function Contact({ config }: ContactProps) {
  const [mapZoomed, setMapZoomed] = useState(false);

  return (
    <section id="contact" className="py-24 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: config.accentHex }}>
              ESTABLISH CORE COORDINATES
            </span>
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
          </div>

          <h2 className="font-display text-4xl sm:text-5.5xl font-black tracking-tight uppercase">
            VISIT THE TEMPLE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              LOCATION & HOURS
            </span>
          </h2>

          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Find us in the heart of the creative warehouse sector. High-end athletic facilities featuring fully validated parking and easy lane entry.
          </p>
        </div>

        {/* Informational grid & map */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch" id="contact-panel-elements">
          
          {/* Details & Action Toggles Left */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <h3 className="font-display text-2xl sm:text-3.5xl font-black uppercase tracking-wide leading-none text-white">
                IRON PULSE HEADQUARTERS
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                We possess secure bike racks, pristine lockers, vanity stations, filter water fountains, and completely validated 2-hour parking in the basement lot behind the barbell platforms.
              </p>
            </div>

            {/* Informational Cards stack */}
            <div className="space-y-4">
              
              {/* Address card */}
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-850 flex gap-4">
                <div
                  className="p-2.5 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center"
                  style={{ backgroundColor: `${config.accentHex}12` }}
                >
                  <MapPin className="w-5 h-5" style={{ color: config.accentHex }} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">FACILITY COORDINATES</span>
                  <p className="text-sm font-semibold text-neutral-100 mt-0.5 leading-relaxed">
                    {config.address}
                  </p>
                </div>
              </div>

              {/* Hours card */}
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-850 flex gap-4">
                <div
                  className="p-2.5 rounded-lg shrink-0 h-10 w-10 flex items-center justify-center"
                  style={{ backgroundColor: `${config.accentHex}12` }}
                >
                  <Clock className="w-5 h-5" style={{ color: config.accentHex }} />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">TIMETABLE GATES OPEN</span>
                  <div className="text-xs font-semibold text-neutral-100 space-y-0.5">
                    <p>{config.hoursWeekday}</p>
                    <p>{config.hoursWeekend}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Action buttons Call & WhatsApp */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-900">
              
              <a
                id="contact-call-btn"
                href={`tel:${config.primaryPhone}`}
                className="py-3.5 rounded bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-xs font-mono font-bold tracking-widest text-[#f3f4f6] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-neutral-400" />
                CALL STUDIO
              </a>

              <a
                id="contact-whatsapp-btn"
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 rounded hover:scale-101 border border-transparent text-xs font-mono font-bold tracking-widest text-black transition-all flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: config.accentHex }}
              >
                <MessageSquare className="w-4 h-4" />
                WHATSAPP
              </a>

            </div>

          </div>

          {/* Interactive Google Map Mock RHS */}
          <div className="lg:col-span-7 flex flex-col justify-center min-h-[350px]">
            
            <div
              id="google-maps-mock-container"
              className="relative w-full h-full min-h-[380px] rounded-3xl border border-neutral-850 overflow-hidden bg-neutral-900 shadow-2xl flex flex-col justify-between"
            >
              {/* Outer map background container */}
              <div className="absolute inset-0 z-0">
                
                {/* SVG-based modern high-vibe tactical grid background */}
                <svg
                  className="w-full h-full opacity-30 select-none pointer-events-none transition-transform duration-500"
                  style={{
                    transform: mapZoomed ? 'scale(1.25)' : 'scale(1.0)',
                    backgroundColor: '#0c0c0e'
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                >
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  
                  {/* Grid Lines */}
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Representative Street Pathways */}
                  <path d="M 0,150 L 800,210 M 150,0 M 450,0 L 410,600 M 0,380 L 800,320" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 0,150 L 800,210 M 150,0 M 450,0 L 410,600 M 0,380 L 800,320" stroke="#121212" strokeWidth="4" strokeLinecap="round" />

                  {/* Highlighted green zone around the gym */}
                  <circle
                    cx="380"
                    cy="220"
                    r="60"
                    fill={`${config.accentHex}10`}
                    stroke={`${config.accentHex}20`}
                    strokeWidth="1"
                  />
                  <circle
                    cx="380"
                    cy="220"
                    r="8"
                    fill={config.accentHex}
                    className="animate-pulse"
                  />
                  <circle
                    cx="380"
                    cy="220"
                    r="3"
                    fill="#000000"
                  />
                </svg>

                {/* Grid Overlay Cinematic Shadows */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/60 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none" />
              </div>

              {/* Floating Maps Actions Top Overlay */}
              <div className="relative z-10 p-5 flex items-center justify-between pointer-events-none">
                
                <div className="flex items-center gap-2.5 bg-neutral-950/95 border border-neutral-800 rounded-xl py-2 px-3.5 backdrop-blur-sm shadow-xl">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: config.accentHex }}></div>
                  <div className="text-left font-mono leading-none">
                    <span className="text-[10px] text-neutral-400 block uppercase">LAT LOG TRACKING</span>
                    <span className="text-xs font-bold text-white tracking-wide">34.0522° N, 118.2437° W</span>
                  </div>
                </div>

                <div className="pointer-events-auto">
                  <button
                    id="maps-direction-trigger"
                    onClick={() => setMapZoomed(!mapZoomed)}
                    className="p-2.5 bg-neutral-950 hover:bg-neutral-850 rounded-xl border border-neutral-800 hover:text-white text-neutral-400 font-mono text-xs flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5" style={{ color: config.accentHex }} />
                    <span>{mapZoomed ? 'Zoom Out' : 'Zoom In'}</span>
                  </button>
                </div>

              </div>

              {/* Bottom directions label Overlay */}
              <div className="relative z-10 p-6 m-3 rounded-2xl bg-neutral-950/95 border border-neutral-800 max-w-sm backdrop-blur">
                <span className="text-[9px] font-mono tracking-widest text-[#22c55e] uppercase flex items-center gap-1.5 font-bold mb-1.5" style={{ color: config.accentHex }}>
                  <Sparkles className="w-3 h-3" />
                  STATION LOCATION PREVIEW
                </span>
                <p className="text-sm font-semibold uppercase text-white tracking-wide">
                  {config.name} HQ Arena
                </p>
                <p className="text-xs text-neutral-400 mt-1 leading-normal">
                  Exit compound freeway block 4 and filter 200m south past the warehouse track. Spot the high-voltage energy sign!
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
