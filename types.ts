export type LayoutType = 'standard' | 'split' | 'immersive' | 'gallery' | 'editorial' | 'contact' | 'faq' | 'manifesto' | 'alliance' | 'process';

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

export interface SubPageContent {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: { title: string; desc: string; category?: string }[];
  details: string;
  imageGrid: string[];
  layout: LayoutType; // Controls the visual structure
}