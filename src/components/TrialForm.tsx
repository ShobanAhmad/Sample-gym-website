import React, { useState } from 'react';
import { Mail, Phone, User, Compass, HelpCircle, CalendarRange, CheckCircle, ShieldCheck, Flame, Cpu } from 'lucide-react';
import { GymTheme } from '../types';

interface TrialFormProps {
  config: GymTheme;
  prefilledCoach: string; // prefilled if clicked on trainers section
  prefilledMessage: string; // prefilled if clicked booking item
  onClose?: () => void;
}

export default function TrialForm({ config, prefilledCoach, prefilledMessage, onClose }: TrialFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Weight Loss',
    schedule: 'Morning (5:00 AM - 11:59 AM)',
    coach: prefilledCoach || 'Any Available Coach',
    customMessage: prefilledMessage || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full athletic name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'An email is required to dispatch welcome protocol packets.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format pattern.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'A contact phone is mandatory to sync with coaches.';
    } else if (!/^[+]?[0-9\s-]{6,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please key in a valid numeric phone layout.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate submission success and dispatch dynamic booking registration code
      const generatedCode = `IP-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingCode(generatedCode);
      setIsSubmitted(true);
    }
  };

  // Sync state if prop changes (for trainer bookings or timetable quick books)
  React.useEffect(() => {
    if (prefilledCoach) {
      setFormData((prev) => ({ ...prev, coach: prefilledCoach }));
    }
  }, [prefilledCoach]);

  React.useEffect(() => {
    if (prefilledMessage) {
      setFormData((prev) => ({ ...prev, customMessage: prefilledMessage }));
    }
  }, [prefilledMessage]);

  return (
    <section id="trial-form-zone" className="py-24 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          
          {/* Main Container border frame */}
          <div className="relative rounded-3xl bg-neutral-900/60 border border-neutral-850 p-8 sm:p-12 shadow-3xl overflow-hidden backdrop-blur-md">
            
            {/* Background vector aesthetics */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-neutral-905 rounded-full blur-[100px] opacity-10 pointer-events-none" />

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} id="trial-booking-form" className="space-y-6">
                
                {/* Form Title */}
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center gap-1.5 py-1 px-3 bg-neutral-950 border border-neutral-800 rounded-full">
                    <Flame className="w-3.5 h-3.5" style={{ color: config.accentHex }} />
                    <span className="text-[10px] font-mono font-medium text-neutral-300 uppercase tracking-widest">Aesthetic Opt-In Funnel</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4.5xl font-black uppercase tracking-tight text-white mt-1">
                    CLAIM YOUR FREE TRIAL PASS
                  </h3>
                  <p className="text-xs text-neutral-400 max-w-lg mx-auto leading-relaxed">
                    Zero payment details needed. Fill in your physiological metrics below to auto-dispatch your 3-day active access pass.
                  </p>
                </div>

                {/* Input Fields Columns Grid */}
                <div className="grid sm:grid-cols-2 gap-6 pt-6">
                  
                  {/* Name field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="form-input-name" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block ml-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-500" />
                      <input
                        id="form-input-name"
                        type="text"
                        placeholder="Marcus Aurelius"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full bg-neutral-950 border rounded-lg pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white transition ${
                          errors.name ? 'border-red-500' : 'border-neutral-800 hover:border-neutral-700'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-[10px] text-red-500 font-mono mt-1">{errors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="form-input-email" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block ml-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-500" />
                      <input
                        id="form-input-email"
                        type="email"
                        placeholder="marcus@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full bg-neutral-950 border rounded-lg pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white transition ${
                          errors.email ? 'border-red-500' : 'border-neutral-800 hover:border-neutral-700'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-[10px] text-red-500 font-mono mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="form-input-phone" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block ml-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-500" />
                      <input
                        id="form-input-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-neutral-950 border rounded-lg pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white transition ${
                          errors.phone ? 'border-red-500' : 'border-neutral-800 hover:border-neutral-700'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[10px] text-red-500 font-mono mt-1">{errors.phone}</p>}
                  </div>

                  {/* Goal Dropdown field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="form-select-goal" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block ml-1">
                      Primary Fitness Goal
                    </label>
                    <div className="relative">
                      <Compass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-500" />
                      <select
                        id="form-select-goal"
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-lg pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white transition appearance-none cursor-pointer"
                      >
                        <option value="Weight Loss">Weight Loss & Recomposition</option>
                        <option value="Muscle Gain">Muscle Gain & Powerlifting Slabs</option>
                        <option value="General Fitness">General Fitness Conditioning</option>
                        <option value="Sport-Specific">Sport-Specific Strength/MMA Prep</option>
                      </select>
                    </div>
                  </div>

                  {/* Schedule preference Dropdown */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="form-select-schedule" className="text-[10px] font-mono uppercase tracking-widest text-[#9ca3af] block ml-1">
                      Preferred Booking Hours
                    </label>
                    <div className="relative">
                      <CalendarRange className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-500" />
                      <select
                        id="form-select-schedule"
                        value={formData.schedule}
                        onChange={(e) => setFormData({ ...formData, schedule: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-lg pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white transition appearance-none cursor-pointer"
                      >
                        <option value="Morning (5:00 AM - 11:59 AM)">Morning (5:00 AM - Noon)</option>
                        <option value="Evening (12:00 PM - 11:00 PM)">Evening (Noon - 11:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Coach Prefilled Selector field */}
                  <div className="space-y-1.5 text-left">
                    <label htmlFor="form-select-coach" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block ml-1">
                      Target Training Coach
                    </label>
                    <div className="relative">
                      <HelpCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-500" />
                      <select
                        id="form-select-coach"
                        value={formData.coach}
                        onChange={(e) => setFormData({ ...formData, coach: e.target.value })}
                        className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-lg pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-white transition appearance-none cursor-pointer"
                      >
                        <option value="Any Available Coach">Let Studio Assign Best Match</option>
                        <option value="Viktor Vance">Viktor "The Iron" Vance</option>
                        <option value="Elena Rostova">Elena Rostova</option>
                        <option value="Jaxson Reed">Jaxson Reed</option>
                      </select>
                    </div>
                  </div>

                </div>

                {/* Additional Textarea Message */}
                <div className="space-y-1.5 text-left">
                  <label htmlFor="form-input-message" className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block ml-1">
                    Special Posture Constraints / Messages (Optional)
                  </label>
                  <textarea
                    id="form-input-message"
                    rows={2}
                    value={formData.customMessage}
                    onChange={(e) => setFormData({ ...formData, customMessage: e.target.value })}
                    placeholder="E.g., Prev shoulder dislocations, recovery targets..."
                    className="w-full bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-l rounded-r p-3.5 text-xs text-white focus:outline-none focus:ring-1 focus:ring-white transition"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <button
                    id="btn-trial-submit"
                    type="submit"
                    className="w-full py-4 text-xs font-display uppercase font-black tracking-widest rounded transition-all duration-300 cursor-pointer hover:scale-101 flex items-center justify-center gap-2 text-black shadow-lg"
                    style={{ backgroundColor: config.accentHex }}
                  >
                    Claim Your Free Trial Pass
                  </button>
                  <p className="text-center text-[9px] font-mono text-neutral-550 uppercase tracking-widest mt-2.5">
                    BY SUBMITTING, YOU AGREE TO CLINICAL FITNESS PROTOCOLS • NO CONTRACT BINDINGS
                  </p>
                </div>

              </form>
            ) : (
              /* PROGRESS EXCELLENT SUCCESS STATE */
              <div id="trial-sub-success-screen" className="text-center py-8 space-y-6">
                
                {/* Glowing Success Icon */}
                <div
                  className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-green-500/10 border border-green-500/40 relative shadow-[0_0_20px_rgba(34,197,94,0.15)]"
                >
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest text-green-500 uppercase block font-bold">
                    Opt-In Captured Successfully
                  </span>
                  
                  <h3 className="font-display text-3xl sm:text-4xl font-black uppercase text-white tracking-wide">
                    CLAIM SIGNATURE SECURED!
                  </h3>

                  <p className="text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
                    Welcome to the core cohort, <strong className="text-white uppercase">{formData.name}</strong>! We have dispatched your digital credentials and athletic orientation protocol documents to the email gateway below.
                  </p>
                </div>

                {/* Booking receipt details box */}
                <div className="max-w-md mx-auto p-5 rounded-2xl bg-neutral-950 border border-neutral-850 text-left font-mono space-y-3">
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-neutral-900">
                    <span className="text-neutral-500 uppercase">ACCESS REGISTRATION CODE</span>
                    <span className="text-white font-extrabold tracking-widest" style={{ color: config.accentHex }}>
                      {bookingCode}
                    </span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Selected Goal:</span>
                      <span className="text-neutral-300 font-bold">{formData.goal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Target Coach:</span>
                      <span className="text-neutral-300 font-bold">{formData.coach}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Time Interval:</span>
                      <span className="text-neutral-300 font-bold text-right max-w-[180px] truncate">{formData.schedule}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Dispatch Gateway:</span>
                      <span className="text-neutral-300 font-bold truncate max-w-[180px]">{formData.email}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5 pt-4">
                  <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                    🔊 Head coach <strong className="text-neutral-200">{formData.coach === 'Any Available Coach' ? 'Viktor Vance' : formData.coach}</strong> will call your phone (<strong className="text-neutral-200">{formData.phone}</strong>) within 15 minutes to lock in your barbell fitting session.
                  </p>

                  <button
                    id="btn-trial-dismiss-success"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        goal: 'Weight Loss',
                        schedule: 'Morning (5:00 AM - 11:59 AM)',
                        coach: 'Any Available Coach',
                        customMessage: '',
                      });
                      if (onClose) onClose();
                    }}
                    className="py-2.5 px-6 rounded border border-neutral-800 bg-neutral-900 hover:bg-neutral-850 text-xs font-mono tracking-widest hover:text-white transition cursor-pointer"
                  >
                    Close & Return to Browsing
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
