import React from 'react';
import { Award, Instagram, Linkedin, Twitter, MessageSquare, ShieldCheck } from 'lucide-react';
import { Trainer, GymTheme } from '../types';
import { TRAINERS } from '../data';

interface TrainersProps {
  config: GymTheme;
  onSelectTrainer: (trainerName: string) => void;
}

export default function Trainers({ config, onSelectTrainer }: TrainersProps) {
  return (
    <section id="trainers" className="py-24 bg-[#0a0a0c] text-white relative">
      
      {/* Decorative blurred dot */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none" style={{ backgroundColor: config.accentHex }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: config.accentHex }}>
              THE FACULTY OF ATHLETIC EXCELLENCE
            </span>
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
          </div>

          <h2 className="font-display text-4xl sm:text-5.5xl font-black tracking-tight uppercase">
            MEET THE ELITE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              KINETIC COACHES
            </span>
          </h2>

          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Our guides don't standby. They possess formal physiological degrees, compete at national levels, and prioritize long-term orthopedic safety.
          </p>
        </div>

        {/* Trainers Grid */}
        <div id="trainers-cards-grid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS.map((trainer) => (
            <div
              id={`trainer-card-${trainer.id}`}
              key={trainer.id}
              className="group bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between hover:border-neutral-800 transition duration-300"
            >
              {/* Image Frame with crop-zoom overlay */}
              <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900">
                <picture>
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-103 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                {/* Social icons on hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  {trainer.socials.instagram && (
                    <a
                      id={`trainer-${trainer.id}-ig`}
                      href={`https://instagram.com/${trainer.socials.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-neutral-900/90 hover:bg-white text-white hover:text-black flex items-center justify-center border border-neutral-800 backdrop-blur transition"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}
                  {trainer.socials.twitter && (
                    <a
                      id={`trainer-${trainer.id}-tw`}
                      href={`https://twitter.com/${trainer.socials.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-neutral-900/90 hover:bg-white text-white hover:text-black flex items-center justify-center border border-neutral-800 backdrop-blur transition"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                  {trainer.socials.linkedin && (
                    <a
                      id={`trainer-${trainer.id}-li`}
                      href={`https://linkedin.com/in/${trainer.socials.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-neutral-900/90 hover:bg-white text-white hover:text-black flex items-center justify-center border border-neutral-800 backdrop-blur transition"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Trainer specialty badge overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-mono tracking-widest text-[#000000] py-1 px-3.5 rounded font-black uppercase inline-block" style={{ backgroundColor: config.accentHex }}>
                    {trainer.title}
                  </span>
                </div>
              </div>

              {/* Trainer copy detail fields */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <h3 className="font-display text-2xl font-black tracking-wide text-white uppercase">
                    {trainer.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-neutral-400 font-mono">
                    SPECIALTY: {trainer.specialty}
                  </p>

                  <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                    {trainer.bio}
                  </p>
                </div>

                {/* Credentials / Badges list */}
                <div className="pt-4 border-t border-neutral-900 space-y-2.5">
                  <span className="text-[9px] font-mono tracking-wider text-neutral-500 uppercase block">CREDENTIAL VERIFICATION</span>
                  <div className="flex flex-wrap gap-1.5" id="trainer-badges-list">
                    {trainer.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-[9px] font-mono py-1 px-2 rounded bg-neutral-900 text-neutral-300 flex items-center gap-1 border border-neutral-850"
                      >
                        <Award className="w-2.5 h-2.5 shrink-0" style={{ color: config.accentHex }} />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Primary scheduling trigger button */}
                <div className="pt-4">
                  <button
                    id={`btn-trainer-select-${trainer.id}`}
                    onClick={() => onSelectTrainer(trainer.name)}
                    className="w-full py-3 bg-neutral-900 hover:bg-neutral-850 border border-neutral-850 rounded text-xs font-mono font-bold tracking-widest text-neutral-200 hover:text-white transition cursor-pointer flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" style={{ color: config.accentHex }} />
                    BOOK CONSULTATION WITH {trainer.name.split(' ')[0].toUpperCase()}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
