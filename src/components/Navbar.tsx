import React, { useState } from 'react';
import { Sparkles, Globe, Edit3, Share2, Check, Menu, X, ArrowUpRight } from 'lucide-react';
import { ProfileData } from '../types';
import { themeMap } from '../utils/theme';

interface NavbarProps {
  profile: ProfileData;
  onOpenCustomizer: () => void;
  onOpenHostingGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenCustomizer,
  onOpenHostingGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const currentTheme = themeMap[profile.accentColor] || themeMap.indigo;

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Free Hosting Guide', href: '#free-hosting' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Name */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-2.5 font-bold text-neutral-900 tracking-tight group"
          >
            <span
              className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-semibold text-base shadow-sm ${currentTheme.primaryBg} group-hover:scale-105 transition-transform`}
            >
              {profile.name.charAt(0) || 'S'}
            </span>
            <div className="flex flex-col">
              <span className="text-base font-bold leading-none text-neutral-900 font-['Outfit']">
                {profile.name}
              </span>
              <span className="text-xs text-neutral-500 font-normal mt-0.5">
                {profile.title.split('&')[0]}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-950 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Free Hosting Status Badge */}
            <button
              onClick={onOpenHostingGuide}
              id="btn-hosting-status"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80 hover:bg-emerald-100 transition-colors cursor-pointer"
              title="Click to see how this site is hosted for free"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Free Hosting: Active</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </button>

            {/* Copy Live Link */}
            <button
              onClick={handleCopyLink}
              id="btn-share-link"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-neutral-500" />
                  <span>Share Site</span>
                </>
              )}
            </button>

            {/* Customize Site Button */}
            <button
              onClick={onOpenCustomizer}
              id="btn-customize-site"
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white shadow-sm transition-all hover:shadow cursor-pointer ${currentTheme.primaryBg} ${currentTheme.primaryHover}`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Edit Site</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCustomizer}
              className={`p-1.5 rounded-lg text-white ${currentTheme.primaryBg}`}
              aria-label="Edit Website"
            >
              <Edit3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="btn-mobile-menu-toggle"
              className="p-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-neutral-200 bg-white px-4 pt-3 pb-5 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHostingGuide();
              }}
              className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Free Hosting: Active on Cloud Run</span>
              </div>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleCopyLink}
              className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-lg text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-4 h-4 text-neutral-600" />
                  <span>Copy Website Live URL</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
