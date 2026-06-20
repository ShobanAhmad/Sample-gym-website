import { Program, Trainer, Transformation, ClassScheduleItem, PricingPlan, Testimonial, GalleryImage } from './types';

export const DEFAULT_THEME_CONFIG = {
  name: 'IRON PULSE',
  tagline: 'TRANSFORM YOUR BODY. ELEVATE YOUR STATE.',
  subtagline: 'Elite coaching, top-tier strength gear, and a high-performance community built to unlock your absolute maximum genetic potential.',
  accentColor: 'lime' as const,
  accentHex: '#C6FF00', // lime
  primaryPhone: '+1 (555) 789-4321',
  whatsappNumber: '15557894321',
  email: 'join@ironpulsefitness.com',
  address: '402 Ironclad Ave, Warehouse District, Metropolis 90210',
  hoursWeekday: 'Mon - Fri: 5:00 AM - 11:00 PM',
  hoursWeekend: 'Sat - Sun: 6:00 AM - 9:00 PM',
};

export const COLOR_PRESETS = [
  { id: 'lime', name: 'Electric Lime', hex: '#C6FF00', shadowClass: 'shadow-[0_0_15px_rgba(198,255,0,0.25)]', text: 'text-[#C6FF00]', bg: 'bg-[#C6FF00]' },
  { id: 'orange', name: 'Energy Orange', hex: '#FF5A1F', shadowClass: 'shadow-[0_0_15px_rgba(255,90,31,0.25)]', text: 'text-[#FF5A1F]', bg: 'bg-[#FF5A1F]' },
  { id: 'red', name: 'Crimson Fury', hex: '#EF4444', shadowClass: 'shadow-[0_0_15px_rgba(239,68,68,0.25)]', text: 'text-[#EF4444]', bg: 'bg-[#EF4444]' },
  { id: 'cyan', name: 'Cyber Cyan', hex: '#00F0FF', shadowClass: 'shadow-[0_0_15px_rgba(0,240,255,0.25)]', text: 'text-[#00F0FF]', bg: 'bg-[#00F0FF]' }
];

export const PROGRAMS: Program[] = [
  {
    id: 'prog-1',
    icon: 'Dumbbell',
    name: 'Strength & Conditioning',
    description: 'Master primary compound movements with structured barbell progression. Designed for clean athletic posture, dense muscle fibers, and relentless functional loading.',
    results: 'Increases raw muscle thickness, bone density, and standard mechanical lift capacity.',
    calories: '550 - 700 kcal',
    suitability: 'All Levels (Beginner friendly loading tracks)'
  },
  {
    id: 'prog-2',
    icon: 'Flame',
    name: 'HIIT / Shockwave Conditioning',
    description: 'Deconstruct body fat stores through high-intensity tactical rounds. Utilize heavy kettlebells, assault bikes, rowing ergometers, and high-precision heart monitoring.',
    results: 'Boosts Vo2 Max, unleashes the EPOC afterburn process for 36 hours post-training.',
    calories: '750 - 950 kcal',
    suitability: 'Intermediate to Advanced'
  },
  {
    id: 'prog-3',
    icon: 'Zap',
    name: 'CrossFit & Olympic Lifting',
    description: 'Develop explosive hip drive and standard dynamic extensions. High coaching safety focus covering cleans, jerks, snatches, and gymnastics progression sequences.',
    results: 'Unlocks ultimate triple extension capacity, rapid reflex adaptation, and functional mobility.',
    calories: '600 - 800 kcal',
    suitability: 'Intermediate (Coached adaptation required)'
  },
  {
    id: 'prog-4',
    icon: 'Target',
    name: 'One-on-One Elite Coaching',
    description: 'Tailored biometrical assessments paired with direct progression scaling. Custom meal protocols, targeted movement therapy, and immediate real-time feedback loops.',
    results: 'Accelerated aesthetic transformations and high-impact orthopedic preservation plans.',
    calories: 'Customizable',
    suitability: 'Specifically focused for high-priority fast goals'
  },
  {
    id: 'prog-5',
    icon: 'Users',
    name: 'Functional Team Workouts',
    description: 'Dynamic group circuits emphasizing tactical team challenges, power sled pushes, atlas stone lifts, and rhythmic military-style cardio sequences.',
    results: 'Fosters unparalleled team camaraderie while crushing metabolic adaptation plateaus.',
    calories: '500 - 700 kcal',
    suitability: 'All Levels friendly'
  },
  {
    id: 'prog-6',
    icon: 'Activity',
    name: 'Aesthetic body transformation',
    description: 'Bespoke volume training focusing on structural hypertrophy, target muscle isolate stimulation, body fat reduction, and absolute visual muscle symmetry.',
    results: 'Highly targeted hyper-focused fat loss and optimal muscle density development.',
    calories: '500 - 650 kcal',
    suitability: 'Beginner to Advanced'
  }
];

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 'trans-1',
    category: 'weight-loss',
    name: 'Marcus K.',
    age: 34,
    stat: '-24kg Fat Loss',
    achievement: 'Reduced visceral body fat percentage from 29% to 11.5% in 6 months.',
    beforeImg: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=700',
    afterImg: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&q=80&w=700',
    duration: '6 Months'
  },
  {
    id: 'trans-2',
    category: 'muscle-gain',
    name: 'David R.',
    age: 28,
    stat: '+9.5kg Lean Muscle',
    achievement: 'Increased skeletal muscle mass, boosted overhead press form, and completed 3 bench plate targets.',
    beforeImg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=700',
    afterImg: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=700',
    duration: '5 Months'
  },
  {
    id: 'trans-3',
    category: 'recomp',
    name: 'Sarah T.',
    age: 31,
    stat: 'Visibly Toned & -9% Fat',
    achievement: 'Dramatically sculpted abdominal wall, resolved long-term posture imbalances, and doubled pull-up capacity.',
    beforeImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=700',
    afterImg: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=700',
    duration: '4 Months'
  },
  {
    id: 'trans-4',
    category: 'performance',
    name: 'Coach Elena & Athlete Sean',
    age: 26,
    stat: 'Max Bench: +40kg & Vo2: +15pt',
    achievement: 'Optimized cardiovascular oxygen output, fortified joints against stress loads, and secured podium finish.',
    beforeImg: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=700',
    afterImg: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=700',
    duration: '3 Months'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'trainer-1',
    name: 'Viktor "The Iron" Vance',
    title: 'Head Strength Coach & Founder',
    specialty: 'Powerlifting, Strength Bio-Mechanics, Kinetic Restoration',
    bio: 'Former competitive strongman with 14+ years coaching professional athletes, military recruits, and corporate executives in raw kinetic development.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600',
    certifications: ['CSCS (Certified Strength Specialist)', 'CrossFit L2 Coach', 'USA Powerlifting Coach'],
    socials: {
      instagram: 'viktor.iron.strength',
      linkedin: 'viktor-vance-iron'
    }
  },
  {
    id: 'trainer-2',
    name: 'Elena Rostova',
    title: 'Director of HIIT & Body Recomposition',
    specialty: 'Metabolic Optimization, Aerobic Thresholds, Sport Nutrition',
    bio: 'Specialist in rapid body recomposition, designing scientifically optimized high-intensity sequences that unlock accelerated adipose burn.',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=600',
    certifications: ['NASM-PES (Performance Enhancement)', 'Precision Nutrition L1', 'ACE Personal Trainer'],
    socials: {
      instagram: 'elena.ro_fit',
      twitter: 'elena_hiit_pro'
    }
  },
  {
    id: 'trainer-3',
    name: 'Jaxson Reed',
    title: 'CrossFit L3 & Mobility Specialist',
    specialty: 'Olympic Weightlifting, Gymnastics, Dynamic Calisthenics',
    bio: 'Passionate about athletic versatility. Jaxson helps master gravity and weight plates through elite-level mobility protocols.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600',
    certifications: ['CrossFit Coach L3', 'USAW L1 Weightlifting', 'FMS (Functional Movement Screen)'],
    socials: {
      instagram: 'jaxson_crossfit',
      linkedin: 'jaxson-reed-fit'
    }
  }
];

export const SCHEDULES: ClassScheduleItem[] = [
  // Monday
  { id: 'sch-1', className: 'Strength Barbell Elite', time: '06:00 AM', trainer: 'Viktor Vance', room: 'Platforms Track A', day: 'Monday', category: 'Strength', capacity: 16, slotsTaken: 11 },
  { id: 'sch-2', className: 'Shockwave Cardio Circuit', time: '08:30 AM', trainer: 'Elena Rostova', room: 'HIIT Turf Zone', day: 'Monday', category: 'HIIT', capacity: 20, slotsTaken: 18 },
  { id: 'sch-3', className: 'CrossFit WOD Catalyst', time: '12:00 PM', trainer: 'Jaxson Reed', room: 'Main CrossFit Box', day: 'Monday', category: 'CrossFit', capacity: 15, slotsTaken: 15 },
  { id: 'sch-4', className: 'Power Hypertrophy Track', time: '05:30 PM', trainer: 'Viktor Vance', room: 'Strength Arena', day: 'Monday', category: 'Strength', capacity: 18, slotsTaken: 12 },
  { id: 'sch-5', className: 'Gladiator Striking & Conditioning', time: '07:00 PM', trainer: 'Jaxson Reed', room: 'Striking Cage', day: 'Monday', category: 'Boxing', capacity: 16, slotsTaken: 14 },

  // Tuesday
  { id: 'sch-6', className: 'Metabolic Inferno', time: '07:00 AM', trainer: 'Elena Rostova', room: 'HIIT Turf Zone', day: 'Tuesday', category: 'HIIT', capacity: 20, slotsTaken: 14 },
  { id: 'sch-7', className: 'Olympic Clean & Snatch Platform', time: '09:00 AM', trainer: 'Jaxson Reed', room: 'Platforms Track A', day: 'Tuesday', category: 'CrossFit', capacity: 12, slotsTaken: 9 },
  { id: 'sch-8', className: 'Iron Core & Posture Mobility', time: '10:30 AM', trainer: 'Elena Rostova', room: 'Yoga Studio', day: 'Tuesday', category: 'Yoga', capacity: 25, slotsTaken: 11 },
  { id: 'sch-9', className: 'Strength Barbell Elite', time: '06:00 PM', trainer: 'Viktor Vance', room: 'Strength Arena', day: 'Tuesday', category: 'Strength', capacity: 16, slotsTaken: 16 },

  // Wednesday
  { id: 'sch-10', className: 'CrossFit WOD Catalyst', time: '06:00 AM', trainer: 'Jaxson Reed', room: 'Main CrossFit Box', day: 'Wednesday', category: 'CrossFit', capacity: 15, slotsTaken: 14 },
  { id: 'sch-11', className: 'Power Hypertrophy Track', time: '12:00 PM', trainer: 'Viktor Vance', room: 'Strength Arena', day: 'Wednesday', category: 'Strength', capacity: 18, slotsTaken: 11 },
  { id: 'sch-12', className: 'Shockwave Cardio Circuit', time: '05:30 PM', trainer: 'Elena Rostova', room: 'HIIT Turf Zone', day: 'Wednesday', category: 'HIIT', capacity: 20, slotsTaken: 20 },
  { id: 'sch-13', className: 'Calisthenics & Recovery Yoga', time: '07:00 PM', trainer: 'Elena Rostova', room: 'Yoga Studio', day: 'Wednesday', category: 'Yoga', capacity: 25, slotsTaken: 22 },

  // Thursday
  { id: 'sch-14', className: 'Strength Barbell Elite', time: '08:30 AM', trainer: 'Viktor Vance', room: 'Platforms Track A', day: 'Thursday', category: 'Strength', capacity: 16, slotsTaken: 10 },
  { id: 'sch-15', className: 'Gladiator Striking & Conditioning', time: '12:00 PM', trainer: 'Jaxson Reed', room: 'Striking Cage', day: 'Thursday', category: 'Boxing', capacity: 16, slotsTaken: 11 },
  { id: 'sch-16', className: 'Metabolic Inferno', time: '06:00 PM', trainer: 'Elena Rostova', room: 'HIIT Turf Zone', day: 'Thursday', category: 'HIIT', capacity: 20, slotsTaken: 17 },

  // Friday
  { id: 'sch-17', className: 'Strength Barbell Elite', time: '06:00 AM', trainer: 'Viktor Vance', room: 'Platforms Track A', day: 'Friday', category: 'Strength', capacity: 16, slotsTaken: 15 },
  { id: 'sch-18', className: 'CrossFit WOD Catalyst', time: '09:00 AM', trainer: 'Jaxson Reed', room: 'Main CrossFit Box', day: 'Friday', category: 'CrossFit', capacity: 15, slotsTaken: 12 },
  { id: 'sch-19', className: 'Power Hypertrophy Track', time: '05:30 PM', trainer: 'Viktor Vance', room: 'Strength Arena', day: 'Friday', category: 'Strength', capacity: 18, slotsTaken: 16 },

  // Saturday
  { id: 'sch-20', className: 'Saturday Iron Grind (Community Open)', time: '08:00 AM', trainer: 'All Coaches Join', room: 'Entire Gym Arena', day: 'Saturday', category: 'Group', capacity: 40, slotsTaken: 36 },
  { id: 'sch-21', className: 'Olympic Clean & Snatch Platform', time: '10:30 AM', trainer: 'Jaxson Reed', room: 'Platforms Track A', day: 'Saturday', category: 'CrossFit', capacity: 12, slotsTaken: 12 },

  // Sunday
  { id: 'sch-22', className: 'Full Body Sculpt Team Circuit', time: '09:00 AM', trainer: 'Elena Rostova', room: 'HIIT Turf Zone', day: 'Sunday', category: 'Group', capacity: 30, slotsTaken: 25 },
  { id: 'sch-23', className: 'Active Postural Spine Yoga', time: '11:00 AM', trainer: 'Elena Rostova', room: 'Yoga Studio', day: 'Sunday', category: 'Yoga', capacity: 20, slotsTaken: 14 }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'price-1',
    name: 'Active Basic',
    monthlyPrice: 59,
    annualPricePerMonth: 49,
    description: 'Perfect for standard self-guided training with heavy gym-floor leverage.',
    tag: 'ESSENTIAL IRON',
    features: [
      'Unlimited 24/7 access to compound racks & weight platforms',
      'High-end specialized solid-steel mechanical barbell equipment',
      'Full facility access: premium heavy locks, change rooms, clean showers',
      '2 initial biometric assessment orientation runs with our coaches',
      'Access to private member motivation channels & resource database'
    ],
    isPopular: false
  },
  {
    id: 'price-2',
    name: 'Performance Pro',
    monthlyPrice: 119,
    annualPricePerMonth: 95,
    description: 'Our standard high-achiever option containing optimized coaching & timetable schedules.',
    tag: 'MOST POWERFUL TRANSFORMATION ROI',
    features: [
      'Includes ALL Active Basic entry permissions in full',
      'Unlimited group team classes (Group HIIT, Barbell, Olympic tracks)',
      '1 specialized monthly coaching posture assessment check-in',
      'Customized baseline body composition meal plans updated monthly',
      '10% off custom supplement orders & brand merchandise',
      '1 guest pass per month to bring an athletic training partner'
    ],
    isPopular: true
  },
  {
    id: 'price-3',
    name: 'Championship Elite',
    monthlyPrice: 249,
    annualPricePerMonth: 199,
    description: 'The ultimate bespoke performance program featuring direct, immediate physical accountability.',
    tag: 'BESPOKE ATHLETE EXPERIENCE',
    features: [
      'Includes ALL Pro Tier entry permissions in full',
      '2 weekly private One-on-One personal coach sessions (1 hr each)',
      'Highly custom biomechanical recovery program (Mobility, Kinetic tracking)',
      'Real-time immediate food logs oversight & WhatsApp coach check-ins',
      'Pre-workout, Amino, and Shake bar access (1 custom beverage per day)',
      'Unlimited guest passes & priority platform booking schedules'
    ],
    isPopular: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Christian Blake',
    role: 'CrossFit Enthusiast & Executive',
    quote: 'The coaching calibre here is leagues ahead. At previous box setups, I felt like another body on a chart. Here, Viktor took one look at my shoulder biomechanics and restructured my snatch routine. I am lifting heavier than ever, pain-free.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'test-2',
    name: 'Regina Montgomery',
    role: 'Mother of two & Marketing Analyst',
    quote: 'With Elena’s HIIT Shockwave layouts and precise macro coaching, I dropped 14kg of stubborn baby weight while rebuilding lean posture strength. The zero-fluff energy of the gym fuels me every early morning.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=300'
  },
  {
    id: 'test-3',
    name: 'Dr. Arthur Vance',
    role: 'Orthopedic Surgeon & Masters Lifter',
    quote: 'As a surgeon, I understand skeletal structure. The coaches here genuinely understand kinetic health. Their focus on structural preparation and progressive loading ensures longevity. Incredible facility.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=300'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 'gal-1', url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800', caption: 'State-of-the-art solid steel power cages & elite plate platforms', tag: 'facility' },
  { id: 'gal-2', url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800', caption: 'High-intensity morning team conditioning circuit on turf', tag: 'classes' },
  { id: 'gal-3', url: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800', caption: 'Olympic snatch training with precision kinetic coaching', tag: 'workouts' },
  { id: 'gal-4', url: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800', caption: 'Premium dumbbells and targeted isolate machinery rows', tag: 'facility' },
  { id: 'gal-5', url: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=800', caption: 'Celebrating personal records after an grueling Saturday grind', tag: 'community' },
  { id: 'gal-6', url: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800', caption: 'Focused tactical mobility and dynamic post-training warmdowns', tag: 'classes' }
];

export const WHY_CHOOSE_US_CARDS = [
  {
    icon: 'Shield',
    title: 'Elite Certified Trainers',
    description: 'No weekend-course coaches. Our certified guides possess CSCS degrees or CrossFit L3 badges and deep kinetic background.'
  },
  {
    icon: 'Crown',
    title: 'Top-Tier Competition Gear',
    description: 'Train with Eleiko barbells, competition bumper plates, premium power cages, rogue assault rigs, and customized sprint turf.'
  },
  {
    icon: 'Calendar',
    title: 'Flexible Elite Timetables',
    description: 'Offering 35+ hyper-focused classes per week ranging from early 5:00 AM pre-office power lifts to late-night conditioning.'
  },
  {
    icon: 'Sparkles',
    title: 'Meticulously Maintained Space',
    description: 'Deep sanitary clean-downs are carried out multiple times daily. Spotless locker rooms, air filtration, and spacious showers.'
  },
  {
    icon: 'HeartHandshake',
    title: 'Results-Obsessed Community',
    description: 'Surround yourself with disciplined high-achievers. No distractions, no ego, just supportive motivation to heavy loading.'
  },
  {
    icon: 'TrendingUp',
    title: 'Precision Biometrical Scans',
    description: 'Using high-frequency InBody metrics to track skeletal muscle, fluid rates, and exact progress charts over your fitness cycle.'
  }
];
