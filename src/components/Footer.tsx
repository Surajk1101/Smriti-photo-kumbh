import React from 'react';
import { ArrowUp, Cloud, ShieldCheck, Heart } from 'lucide-react';
import { ProfileData } from '../types';
import { themeMap } from '../utils/theme';

interface FooterProps {
  profile: ProfileData;
  onOpenHostingGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenHostingGuide }) => {
  const currentTheme = themeMap[profile.accentColor] || themeMap.indigo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-neutral-200 text-neutral-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Hosting status */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span
              className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm ${currentTheme.primaryBg}`}
            >
              {profile.name.charAt(0) || 'S'}
            </span>
            <div>
              <p className="font-bold text-neutral-900 font-['Outfit'] text-sm">
                {profile.name} · Personal Website
              </p>
              <p className="text-neutral-500 text-xs">
                Hosted 100% free on Google Cloud Platform
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-neutral-600">
            <a href="#about" className="hover:text-neutral-900 transition-colors">About</a>
            <a href="#projects" className="hover:text-neutral-900 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-neutral-900 transition-colors">Skills</a>
            <a href="#services" className="hover:text-neutral-900 transition-colors">Services</a>
            <button
              onClick={onOpenHostingGuide}
              className="hover:text-neutral-900 transition-colors cursor-pointer text-emerald-700 font-semibold"
            >
              Free Hosting Guide
            </button>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            id="btn-scroll-to-top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-100 text-neutral-700 transition-colors cursor-pointer text-xs font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Built with React, TypeScript, and Tailwind CSS</span>
            <span>·</span>
            <span className="text-emerald-600 font-semibold">Verified $0/mo Free Hosting</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
