export type AccentColor = 'blue' | 'emerald' | 'violet' | 'amber' | 'rose' | 'indigo';

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  avatarUrl: string;
  isAvailableForWork: boolean;
  accentColor: AccentColor;
  socials: SocialLinks;
  stats: StatItem[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile & AI' | 'Tools';
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    iconName?: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface HostingProvider {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  price: string;
  freeTierDetails: string;
  bandwidth: string;
  customDomain: boolean;
  sslIncluded: boolean;
  setupTime: string;
  steps: string[];
  recommendedFor: string;
  link: string;
  popular?: boolean;
}
