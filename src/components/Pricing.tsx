import React, { useState } from 'react';
import { Check, Flame, Trophy, Percent, HelpCircle } from 'lucide-react';
import { PricingPlan, GymTheme } from '../types';
import { PRICING_PLANS } from '../data';

interface PricingProps {
  config: GymTheme;
  onSelectPlan: (planName: string, billingPeriod: string, price: number) => void;
}

export default function Pricing({ config, onSelectPlan }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-[#0a0a0c] text-white relative">
      
      {/* Dynamic glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-neutral-950 rounded-full blur-[160px] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: config.accentHex }}>
              UNCOMPROMISING VALUE RATIO
            </span>
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
          </div>

          <h2 className="font-display text-4xl sm:text-5.5xl font-black tracking-tight uppercase">
            MEMBERSHIP COMPASS {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              PRICING PLANS
            </span>
          </h2>

          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Choose your physical commitment. No enrollment fees, lock-in barriers, or sneaky cancellation fees. Pure progressive value.
          </p>

          {/* Billing Cycle Toggle Switch */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-xs font-mono tracking-wider ${!isAnnual ? 'text-white font-bold' : 'text-neutral-500'}`}>
              MONTH-BY-MONTH
            </span>
            
            <button
              id="billing-toggle-switch"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 rounded-full bg-neutral-900 border border-neutral-800 transition cursor-pointer p-0.5 focus:outline-none"
            >
              <div
                className="w-55 h-55 rounded-full transition-all duration-300"
                style={{
                  width: '22px',
                  height: '22px',
                  backgroundColor: config.accentHex,
                  transform: isAnnual ? 'translateX(28px)' : 'translateX(2px)'
                }}
              />
            </button>

            <span className={`text-xs font-mono tracking-wider flex items-center gap-1.5 ${isAnnual ? 'text-white font-bold' : 'text-neutral-500'}`}>
              ANNUAL VALUE PLAN
              <span className="py-0.5 px-1.5 rounded-full bg-neutral-900 border border-neutral-850 text-[10px] text-green-500 font-extrabold flex items-center gap-0.5 font-sans">
                <Percent className="w-2.5 h-2.5" />
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div id="pricing-plans-grid" className="grid lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPricePerMonth : plan.monthlyPrice;
            const billingPeriodText = isAnnual ? '/ month (billed annually)' : '/ month (cancel anytime)';
            
            return (
              <div
                id={`price-plan-card-${plan.id}`}
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-neutral-900/60 border-2 shadow-2xl scale-103'
                    : 'bg-neutral-950/80 border border-neutral-900 hover:border-neutral-850'
                }`}
                style={{
                  borderColor: plan.isPopular ? config.accentHex : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: plan.isPopular ? `0 20px 40px -15px ${config.accentHex}10` : 'none'
                }}
              >
                
                {/* Popular Highlight Ribbon / Badge */}
                {plan.isPopular && (
                  <div
                    className="absolute top-4 right-4 py-1 px-3.5 rounded-full text-[9px] font-mono font-extrabold tracking-widest text-[#000000] uppercase flex items-center gap-1 select-none"
                    style={{ backgroundColor: config.accentHex }}
                  >
                    <Flame className="w-3.5 h-3.5" />
                    MOST HIGHLY RECOMMENDED
                  </div>
                )}

                <div>
                  {/* Category Plan Header */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase block">
                      {plan.tag}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black tracking-wide uppercase text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Pricing Calculations */}
                  <div className="mt-5 mb-4 py-4 border-y border-neutral-920">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-display text-5xl sm:text-6xl font-black tracking-tight text-white">
                        ${price}
                      </span>
                      <span className="text-xs font-mono text-neutral-455 tracking-wide">
                        {billingPeriodText}
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-[10px] font-mono text-green-500 uppercase mt-1">
                        Billed annually as ${price * 12}/year (Saves ${(plan.monthlyPrice - plan.annualPricePerMonth) * 12} total)
                      </p>
                    )}
                  </div>

                  {/* Summary bio description */}
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans min-h-[40px]">
                    {plan.description}
                  </p>

                  {/* Bullet features specifications */}
                  <div className="mt-6 space-y-3.5">
                    <span className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase block">INCLUDED BENEFITS</span>
                    <ul className="space-y-3" id={`benefits-list-${plan.id}`}>
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <span
                            className="w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: `${config.accentHex}15` }}
                          >
                            <Check className="w-3 h-3" style={{ color: config.accentHex }} />
                          </span>
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Claim CTA Trigger */}
                <div className="mt-8 pt-6 border-t border-neutral-900/40">
                  <button
                    id={`btn-plan-buy-${plan.id}`}
                    onClick={() => onSelectPlan(plan.name, isAnnual ? 'Annual Value' : 'Monthly Flexible', price)}
                    className="w-full py-4 rounded font-display font-black text-xs uppercase tracking-widest text-center cursor-pointer transition duration-300 hover:scale-101 shadow-lg"
                    style={{
                      backgroundColor: plan.isPopular ? config.accentHex : '#1e1b4b',
                      color: plan.isPopular ? '#000000' : '#ffffff',
                      border: plan.isPopular ? 'none' : '1px solid rgba(255,255,255,0.06)',
                      backgroundImage: !plan.isPopular ? 'linear-gradient(to bottom, #1c1917, #18181b)' : undefined
                    }}
                  >
                    Select {plan.name} Tier
                  </button>
                  <p className="text-center text-[10px] text-neutral-550 font-mono uppercase tracking-wider mt-2.5">
                    NO STRINGS PROTOCOLS • SECURE GATEWAYS
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
