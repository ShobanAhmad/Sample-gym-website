export interface GymTheme {
  name: string;
  tagline: string;
  subtagline: string;
  accentColor: 'lime' | 'orange' | 'red' | 'cyan';
  accentHex: string;
  primaryPhone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  hoursWeekday: string;
  hoursWeekend: string;
}

export interface Program {
  id: string;
  icon: string;
  name: string;
  description: string;
  results: string;
  calories: string;
  suitability: string;
}

export interface Trainer {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  image: string;
  certifications: string[];
  socials: {
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Transformation {
  id: string;
  category: 'weight-loss' | 'muscle-gain' | 'recomp' | 'performance';
  name: string;
  age: number;
  stat: string;
  achievement: string;
  beforeImg: string;
  afterImg: string;
  duration: string;
}

export interface ClassScheduleItem {
  id: string;
  className: string;
  time: string; // e.g., "06:00 AM"
  trainer: string;
  room: string;
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  category: 'Strength' | 'HIIT' | 'CrossFit' | 'Yoga' | 'Boxing' | 'Group';
  capacity: number;
  slotsTaken: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPricePerMonth: number;
  description: string;
  features: string[];
  isPopular: boolean;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
  transformationId?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  tag: 'facility' | 'classes' | 'workouts' | 'community';
}
