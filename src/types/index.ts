export type Currency = 'RWF' | 'USD';

export interface CaseStudy {
  id: string;
  title: string;
  category: 'Enterprise' | 'AI & Cloud' | 'FinTech' | 'GovTech' | 'Healthcare' | 'Mobile' | 'ERP & CRM';
  industry: string;
  clientType: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  impactMetrics: { label: string; value: string; detail: string }[];
  featured: boolean;
  accentColor: string;
  mockupType: 'dashboard' | 'mobile' | 'portal' | 'analytics' | 'tracking';
  stats: {
    duration: string;
    teamSize: string;
    usersServed: string;
    roi: string;
  };
  keyFeatures: string[];
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  keyDeliverables: string[];
  recommendedTech: string[];
  targetAudience: string;
  category: 'Core' | 'Specialized' | 'Strategic';
}

export interface PricingTier {
  id: string;
  title: string;
  subtitle: string;
  priceRWF: number;
  priceUSD: number;
  isCustomQuote?: boolean;
  popular?: boolean;
  features: string[];
  deliverables: string[];
  timeline: string;
  targetClients: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'AI & Automation' | 'Software Architecture' | 'Cybersecurity' | 'Digital Transformation' | 'Cloud Computing';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  excerpt: string;
  content: string;
  tags: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Security & IP' | 'Process & Timeline' | 'Pricing & SLAs' | 'Technology';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  industry: string;
  avatar: string;
  content: string;
  metric: string;
  metricLabel: string;
  rating: number;
}

export interface IndustrySolution {
  id: string;
  title: string;
  icon: string;
  description: string;
  useCases: string[];
  keyBenefit: string;
}

export interface TechStackCategory {
  name: string;
  items: {
    name: string;
    icon: string;
    description: string;
    level: 'Expert' | 'Enterprise Verified';
  }[];
}
