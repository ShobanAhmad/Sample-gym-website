import React, { useState } from 'react';
import { Settings, Check, Sparkles, RefreshCw, Smartphone, Monitor, ShieldCheck, Cpu } from 'lucide-react';
import { GymTheme } from '../types';
import { COLOR_PRESETS } from '../data';

interface RebrandCustomizerProps {
  config: GymTheme;
  onChange: (updated: GymTheme) => void;
  onReset: () => void;
}

export default function RebrandCustomizer({ config, onChange, onReset }: RebrandCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'branding' | 'presets'>('branding');

  const updateField = (key: keyof GymTheme, value: any) => {
    onChange({
      ...config,
      [key]: value
    });
  };

  const handlePresetSelect = (type: 'barbell' | 'boutique' | 'crossfit' | 'boxing') => {
    switch (type) {
      case 'barbell':
        onChange({
          ...config,
          name: 'IRON FORGE CO.',
          accentColor: 'red',
          accentHex: '#EF4444',
          tagline: 'LIFT HEAVY. LIFT OFTEN. NO EXCEPTIONS.',
          subtagline: 'Hardcore strength temple. Standard-issue Olympic platforms, heavy steel plates, and zero distractions. Designed for raw power development.',
          address: '402 Anvil Lane, Industrial District, Metropolis 90210'
        });
        break;
      case 'boutique':
        onChange({
          ...config,
          name: 'AURA WELLNESS',
          accentColor: 'cyan',
          accentHex: '#00F0FF',
          tagline: 'REDEFINE HYPERTROPHY. REDECOVER BALANCE.',
          subtagline: 'A premium, high-contrast sensory experience. State-of-the-art cardiovascular apparatus, bespoke elite coaching, and restorative post-workout thermal care.',
          address: '808 Lotus Blvd, Suite 100, Westside Hills 90211'
        });
        break;
      case 'crossfit':
        onChange({
          ...config,
          name: 'PULSE MATRIX',
          accentColor: 'lime',
          accentHex: '#C6FF00',
          tagline: 'PREPARE FOR METABOLIC SURGE.',
          subtagline: 'An uncompromising tactical athletic community. High-volume conditioning, competition rigs, olympic speed lifting, and data-backed workout tracking.',
          address: '22 Turbo Way, Warehouse sector 4, Metropolis 90210'
        });
        break;
      case 'boxing':
        onChange({
          ...config,
          name: 'VULCAN BOXING',
          accentColor: 'orange',
          accentHex: '#FF5A1F',
          tagline: 'FIGHT THE FEAR. MASTER THE RING.',
          subtagline: 'Heavy bags, pro-standard rings, and authentic fighter conditioning. Build high-speed reflexes, iron core endurance, and sharp striking power.',
          address: '150 Ring Side Rd, Midtown Combat Zone 90215'
        });
        break;
    }
  };

  return (
    <>
      {/* Floating Demo Trigger Badge */}
      <button
        id="demo-pitch-control-btn"
        onClick={() => setIsOpen(true)}
        className="fixed top-24 right-0 z-50 flex items-center gap-2 px-4 py-3 bg-neutral-900 border-l border-y border-neutral-700 rounded-l-xl text-neutral-200 hover:text-white group cursor-pointer transition-all duration-300 shadow-2xl overflow-hidden"
        style={{ borderLeftColor: config.accentHex }}
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: config.accentHex }}></span>
          <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: config.accentHex }}></span>
        </span>
        <Settings className="w-5 h-5 animate-spin-slow text-neutral-300 group-hover:rotate-45 transition-transform" />
        <div className="flex flex-col items-start leading-none text-left">
          <span className="text-[10px] text-neutral-400 font-mono uppercase tracking-widest">Interactive Client</span>
          <span className="text-xs font-bold text-white tracking-wide">Sales Pitch Dashboard</span>
        </div>
      </button>

      {/* Control Drawer Container */}
      <div
        id="rebrand-drawer-backdrop"
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          id="rebrand-drawer-panel"
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-neutral-950 border-l border-neutral-800 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 border-b border-neutral-800 flex items-center justify-between bg-neutral-960">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5" style={{ color: config.accentHex }} />
              <div>
                <h3 className="font-display text-lg font-bold tracking-wider text-white uppercase">Pitch Rebrand Suite</h3>
                <p className="text-[10px] font-mono text-neutral-400">DEMO PRESENTATION CONTROLS</p>
              </div>
            </div>
            <button
              id="close-drawer-btn"
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-white text-sm bg-neutral-900 border border-neutral-800 rounded-md py-1 px-2 cursor-pointer"
            >
              Close ✕
            </button>
          </div>

          {/* Quick Sales Tip Banner */}
          <div className="p-4 bg-neutral-900/50 border-b border-neutral-800/60 m-3 rounded-lg text-xs flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 shrink-0 mt-0.5" style={{ color: config.accentHex }} />
            <p className="text-neutral-300 leading-relaxed text-[11px]">
              <strong className="text-white">Sales Pitch Hack:</strong> Put your prospect’s gym name below or pick a preset. Instantly show them their future premium web catalog with no setup barrier.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex px-4 border-b border-neutral-800">
            <button
              id="tab-branding-btn"
              onClick={() => setActiveTab('branding')}
              className={`flex-1 py-2 text-xs font-semibold tracking-wider uppercase border-b-2 transition-colors cursor-pointer ${
                activeTab === 'branding'
                  ? 'border-white text-white'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Custom Branding
            </button>
            <button
              id="tab-presets-btn"
              onClick={() => setActiveTab('presets')}
              className={`flex-1 py-2 text-xs font-semibold tracking-wider uppercase border-b-2 transition-colors cursor-pointer ${
                activeTab === 'presets'
                  ? 'border-white text-white'
                  : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`}
            >
              Niche Presets
            </button>
          </div>

          {/* Drawer Body Scroll */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {activeTab === 'branding' ? (
              <div className="space-y-5">
                {/* 1. Brand Name */}
                <div className="space-y-1.5">
                  <label htmlFor="input-prop-name" className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Gym/Studio Name</label>
                  <input
                    id="input-prop-name"
                    type="text"
                    value={config.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="Enter prospect gym name"
                    className="w-full bg-neutral-900 border border-neutral-850 rounded px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white transition"
                  />
                </div>

                {/* 2. Brand Colors Slider */}
                <div className="space-y-2">
                  <span className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Accent Theme Accent Color</span>
                  <div className="grid grid-cols-2 gap-2" id="accent-preset-selectors">
                    {COLOR_PRESETS.map((color) => {
                      const isSelected = config.accentColor === color.id;
                      return (
                        <button
                          id={`color-sel-${color.id}`}
                          key={color.id}
                          onClick={() => {
                            updateField('accentColor', color.id);
                            updateField('accentHex', color.hex);
                          }}
                          className={`flex items-center gap-2 p-2.5 rounded border text-left cursor-pointer transition ${
                            isSelected
                              ? 'bg-neutral-900 border-neutral-600 text-white'
                              : 'bg-neutral-950 border-neutral-900 text-neutral-400 hover:border-neutral-800'
                          }`}
                        >
                          <span className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center" style={{ backgroundColor: color.hex }}>
                            {isSelected && <Check className="w-2.5 h-2.5 text-black font-extrabold" />}
                          </span>
                          <span className="text-xs font-semibold">{color.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Custom taglines */}
                <div className="space-y-1.5">
                  <label htmlFor="input-prop-tagline" className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Hero Power Title</label>
                  <textarea
                    id="input-prop-tagline"
                    rows={2}
                    value={config.tagline}
                    onChange={(e) => updateField('tagline', e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-850 rounded px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-white transition resize-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="input-prop-subtag" className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Hero Sub-text pitch</label>
                  <textarea
                    id="input-prop-subtag"
                    rows={3}
                    value={config.subtagline}
                    onChange={(e) => updateField('subtagline', e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-850 rounded px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-white transition resize-none"
                  />
                </div>

                {/* 4. Practical Details */}
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label htmlFor="input-prop-phone" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Phone</label>
                    <input
                      id="input-prop-phone"
                      type="text"
                      value={config.primaryPhone}
                      onChange={(e) => updateField('primaryPhone', e.target.value)}
                      className="w-full text-xs bg-neutral-900 border border-neutral-850 rounded px-3 py-1.5 text-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="input-prop-email" className="block text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Email Address</label>
                    <input
                      id="input-prop-email"
                      type="text"
                      value={config.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full text-xs bg-neutral-900 border border-neutral-850 rounded px-3 py-1.5 text-white"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <span className="block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Quick Niche Configurations</span>
                <p className="text-[11px] text-neutral-400 leading-relaxed leading-normal">
                  Toggle different design configurations instantly to display how the app layout dynamically caters to varying athletic business formats.
                </p>

                <div className="space-y-2.5 pt-2" id="niche-preset-grid">
                  <button
                    id="btn-preset-barbell"
                    onClick={() => handlePresetSelect('barbell')}
                    className="w-full flex items-center justify-between p-3 rounded bg-neutral-900 border border-neutral-800 hover:border-red-500 hover:bg-neutral-850 text-left transition cursor-pointer group"
                  >
                    <div>
                      <span className="text-white font-semibold text-xs uppercase tracking-wide group-hover:text-red-500 transition">⚙️ Hardcore Barbell Temple</span>
                      <p className="text-[10px] text-neutral-400 mt-0.5">Heavy lift focus, high contrast bold red palette style.</p>
                    </div>
                  </button>

                  <button
                    id="btn-preset-boutique"
                    onClick={() => handlePresetSelect('boutique')}
                    className="w-full flex items-center justify-between p-3 rounded bg-neutral-900 border border-neutral-800 hover:border-cyan-400 hover:bg-neutral-850 text-left transition cursor-pointer group"
                  >
                    <div>
                      <span className="text-white font-semibold text-xs uppercase tracking-wide group-hover:text-cyan-400 transition">✨ Premium Wellness & Pilates</span>
                      <p className="text-[10px] text-neutral-400 mt-0.5">Restorative focus, elegant cyber cyan theme palette.</p>
                    </div>
                  </button>

                  <button
                    id="btn-preset-crossfit"
                    onClick={() => handlePresetSelect('crossfit')}
                    className="w-full flex items-center justify-between p-3 rounded bg-neutral-900 border border-neutral-800 hover:border-lime-400 hover:bg-neutral-850 text-left transition cursor-pointer group"
                  >
                    <div>
                      <span className="text-white font-semibold text-xs uppercase tracking-wide group-hover:text-lime-400 transition">⚡ High Performance CrossFit Box</span>
                      <p className="text-[10px] text-neutral-400 mt-0.5">Electric Lime energy. Heavy-duty, high VO2-track conditioning.</p>
                    </div>
                  </button>

                  <button
                    id="btn-preset-boxing"
                    onClick={() => handlePresetSelect('boxing')}
                    className="w-full flex items-center justify-between p-3 rounded bg-neutral-900 border border-neutral-800 hover:border-orange-500 hover:bg-neutral-850 text-left transition cursor-pointer group"
                  >
                    <div>
                      <span className="text-white font-semibold text-xs uppercase tracking-wide group-hover:text-orange-500 transition">🥊 Striking & Combat Boxing Club</span>
                      <p className="text-[10px] text-neutral-400 mt-0.5">Ringside intense atmosphere, vibrant energy orange accents.</p>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer actions */}
          <div className="p-5 border-t border-neutral-800 space-y-3 bg-neutral-960">
            <button
              id="rebrand-reset-btn"
              onClick={() => {
                onReset();
                setIsOpen(false);
              }}
              className="w-full bg-neutral-900 hover:bg-neutral-800 outline-none border border-neutral-850 text-white rounded text-xs py-2 font-mono flex items-center justify-center gap-2 cursor-pointer transition"
            >
              <RefreshCw className="w-3 h-3" />
              Reset Demo to Core Defaults
            </button>
            <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-neutral-500 uppercase tracking-widest text-center mt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
              <span>DASHBOARD LIVE STABLE VERSION</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
