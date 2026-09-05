import { AccentColor } from '../types';

export interface ThemeClasses {
  primaryBg: string;
  primaryText: string;
  primaryHover: string;
  secondaryBg: string;
  accentBorder: string;
  badgeBg: string;
  badgeText: string;
  glowEffect: string;
}

export const themeMap: Record<AccentColor, ThemeClasses> = {
  indigo: {
    primaryBg: 'bg-indigo-600',
    primaryText: 'text-indigo-600',
    primaryHover: 'hover:bg-indigo-700',
    secondaryBg: 'bg-indigo-50',
    accentBorder: 'border-indigo-200',
    badgeBg: 'bg-indigo-100',
    badgeText: 'text-indigo-800',
    glowEffect: 'shadow-indigo-500/10',
  },
  blue: {
    primaryBg: 'bg-sky-600',
    primaryText: 'text-sky-600',
    primaryHover: 'hover:bg-sky-700',
    secondaryBg: 'bg-sky-50',
    accentBorder: 'border-sky-200',
    badgeBg: 'bg-sky-100',
    badgeText: 'text-sky-800',
    glowEffect: 'shadow-sky-500/10',
  },
  emerald: {
    primaryBg: 'bg-emerald-600',
    primaryText: 'text-emerald-600',
    primaryHover: 'hover:bg-emerald-700',
    secondaryBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-200',
    badgeBg: 'bg-emerald-100',
    badgeText: 'text-emerald-800',
    glowEffect: 'shadow-emerald-500/10',
  },
  violet: {
    primaryBg: 'bg-purple-600',
    primaryText: 'text-purple-600',
    primaryHover: 'hover:bg-purple-700',
    secondaryBg: 'bg-purple-50',
    accentBorder: 'border-purple-200',
    badgeBg: 'bg-purple-100',
    badgeText: 'text-purple-800',
    glowEffect: 'shadow-purple-500/10',
  },
  amber: {
    primaryBg: 'bg-amber-600',
    primaryText: 'text-amber-600',
    primaryHover: 'hover:bg-amber-700',
    secondaryBg: 'bg-amber-50',
    accentBorder: 'border-amber-200',
    badgeBg: 'bg-amber-100',
    badgeText: 'text-amber-900',
    glowEffect: 'shadow-amber-500/10',
  },
  rose: {
    primaryBg: 'bg-rose-600',
    primaryText: 'text-rose-600',
    primaryHover: 'hover:bg-rose-700',
    secondaryBg: 'bg-rose-50',
    accentBorder: 'border-rose-200',
    badgeBg: 'bg-rose-100',
    badgeText: 'text-rose-800',
    glowEffect: 'shadow-rose-500/10',
  },
};
