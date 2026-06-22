/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  category: 'marketing' | 'webdev' | 'branding' | 'content' | 'seo';
  brief: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
  features: string[];
  subServices: {
    name: string;
    description: string;
  }[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'all' | 'branding' | 'webdev' | 'marketing' | 'content' | 'seo';
  categoryLabel: string;
  client: string;
  year: string;
  summary: string;
  description: string;
  imageUrl: string;
  stats?: {
    label: string;
    value: string;
  };
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  imageUrl: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
    instagram?: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatarUrl: string;
}

export interface CompanyStat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  iconName: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}
