export type Currency = 'USD' | 'MXN';

export interface SponsorTier {
  id: string;
  name: string;
  badge: string;
  priceUSD: number;
  priceMaxUSD?: number;
  priceLabelUSD: string;
  priceMXN: number;
  priceMaxMXN?: number;
  priceLabelMXN: string;
  color: 'amber' | 'slate' | 'yellow' | 'cyan';
  accentColor: string;
  googleBorderColor: string;
  isPopular?: boolean;
  tagline: string;
  description: string;
  highlightBenefit: string;
  vipTickets: string;
  stagePresence: string;
  boothSize: string;
  optInData: boolean;
  optInDetails?: string;
  features: string[];
  slotsLimit?: string;
}

export interface AddOnExperience {
  id: string;
  name: string;
  subtitle: string;
  priceUSD: number;
  priceMXN: number;
  iconName: string;
  color: string;
  category: 'community' | 'experience' | 'branding';
  description: string;
  deliverables: string[];
  slotsLimit?: string;
  badge?: string;
}

export interface ComparisonCategory {
  title: string;
  items: {
    feature: string;
    tooltip?: string;
    bronze: string | boolean;
    silver: string | boolean;
    gold: string | boolean;
    platinum: string | boolean;
  }[];
}

export interface SlideInfo {
  id: number;
  title: string;
  subtitle: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
