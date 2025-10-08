import type { ReactNode, ButtonHTMLAttributes } from 'react';

// Navigation
export interface NavLink {
  href: string;
  label: string;
  isActive?: boolean;
}

// Tournament
export interface TeamMatch {
  teamName: string;
  score: number;
  isWinner?: boolean;
}

export interface Match {
  stage: string;
  map?: string;
  team1: TeamMatch;
  team2: TeamMatch;
  mvp?: string;
  connector?: string;
}

export interface TournamentData {
  name: string;
  rounds: {
    title: string;
    matches: Match[];
  }[];
}

// News
export interface NewsArticle {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime?: string;
}

// Forms
export interface JoinFormData {
  full_name: string;
  email: string;
  discord: string;
  role: string;
  message: string;
  consent: boolean;
}

export interface NewsletterFormData {
  email_address: string;
}

// Components
export interface LayoutProps {
  children: ReactNode;
}

export interface SectionProps {
  className?: string;
  children?: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  'data-btn'?: boolean;
}

// SEO
export interface SEOConfig {
  title: string;
  description: string;
  url: string;
  siteName: string;
  ogImage: string;
  twitterHandle?: string;
}

// Upcoming Match
export interface UpcomingMatch {
  id: string;
  leftTeam: {
    name: string;
    logo: string;
    group: string;
    match: string;
  };
  rightTeam: {
    name: string;
    logo: string;
    group: string;
    match: string;
  };
  time: string;
  date: string;
  socials: {
    youtube?: string;
    twitch?: string;
  };
}

// Join Benefits
export interface JoinBenefit {
  icon: string;
  text: string;
}
