
export type LayoutType = 'standard' | 'split' | 'immersive' | 'gallery' | 'editorial' | 'contact' | 'faq' | 'manifesto' | 'alliance' | 'process' | 'success-story' | 'acceleration' | 'creation';

export interface NavChild {
  label: string;
  desc: string;
  slug?: string; // Added for routing
  image?: string; // Added for Visual Menu (Type B)
}

export interface NavItem {
  id: string;
  label: string;
  subLabel: string;
  href: string;
  children: NavChild[];
}

export interface BentoItem {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  colSpan: number; // 1, 2, or 3
  rowSpan?: number;
  image?: string;
  category?: string;
  hasArrow?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  image?: string; // Added for visual process steps
}

export interface SubPageContent {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: { title: string; desc: string; category?: string }[];
  details: string;
  imageGrid: string[];
  layout: LayoutType; // Controls the visual structure
  detailedProcess?: ProcessStep[]; // New field for page-specific process
  translationKey?: string; // e.g., "system:manifesto"
}

export interface ProjectLead {
  id: string;
  name: string;
  email: string;
  company: string;
  budget: string;
  service: string;
  message: string;
  status: 'pending' | 'reviewed' | 'completed';
  date: string;
}
