import React from 'react';
import { ArrowDown, Cloud, ShieldCheck, Terminal, Sparkles, Send, ExternalLink, Edit3, CheckCircle2 } from 'lucide-react';
import { ProfileData } from '../types';
import { themeMap } from '../utils/theme';

interface HeroSectionProps {
  profile: ProfileData;
  onOpenCustomizer: () => void;
  onOpenHostingGuide: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onOpenCustomizer,
  onOpenHostingGuide,
}) => {
  const currentTheme = themeMap[profile.accentColor] || themeMap.indigo;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-neutral-200/80 bg-gradient-to-b from-white via-neutral-50/50 to-neutral-100/30">
      {/* Subtle geometric background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white border border-neutral-200 text-neutral-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-500 -ml-4" />
              <span>{profile.isAvailableForWork ? 'Available for work & projects' : 'Currently focusing on projects'}</span>
              <span className="text-neutral-300">|</span>
              <span className="text-neutral-500">{profile.location}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 font-['Outfit'] leading-[1.1]">
                Hi, I'm{' '}
                <span className={`${currentTheme.primaryText} relative inline-block`}>
                  {profile.name}
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-current opacity-10 -z-10 rounded-full" />
                </span>
                .
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-neutral-700 font-['Outfit']">
                {profile.title}
              </p>
            </div>

            {/* Sub-text / Tagline */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl leading-relaxed">
              {profile.tagline} {profile.bio}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                id="btn-hero-projects"
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white shadow-sm transition-all hover:shadow-md cursor-pointer ${currentTheme.primaryBg} ${currentTheme.primaryHover}`}
              >
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenHostingGuide}
                id="btn-hero-free-hosting"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-neutral-800 bg-white hover:bg-neutral-50 border border-neutral-200/90 shadow-xs transition-colors cursor-pointer"
              >
                <Cloud className="w-4 h-4 text-emerald-600" />
                <span>How Free Hosting Works</span>
              </button>

              <button
                onClick={onOpenCustomizer}
                id="btn-hero-edit-site"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <Edit3 className="w-4 h-4" />
                <span>Customize Content</span>
              </button>
            </div>

            {/* Verified Credentials Pills */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-neutral-500 border-t border-neutral-200/60 w-full">
              <span className="flex items-center gap-1.5 font-medium text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                100% Free Cloud Infrastructure
              </span>
              <span className="flex items-center gap-1.5 font-medium text-neutral-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Zero Monthly Hosting Invoices
              </span>
              <span className="flex items-center gap-1.5 font-medium text-neutral-700">
                <Terminal className="w-4 h-4 text-neutral-600" />
                Production TypeScript & React
              </span>
            </div>
          </div>

          {/* Right Column: Live Hosting Infrastructure Card & Avatar */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 relative">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      className="w-12 h-12 rounded-xl object-cover border border-neutral-200 shadow-xs"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 text-sm font-['Outfit']">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-neutral-500">Live Website Telemetry</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  ONLINE
                </span>
              </div>

              {/* Hosting Telemetry Specs */}
              <div className="py-4 space-y-3">
                <div className="flex items-center justify-between text-xs py-1.5 px-3 bg-neutral-50 rounded-lg border border-neutral-100">
                  <span className="text-neutral-500 font-medium">Hosting Engine</span>
                  <span className="font-semibold text-neutral-900 flex items-center gap-1">
                    Google Cloud Run (Free)
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5 px-3 bg-neutral-50 rounded-lg border border-neutral-100">
                  <span className="text-neutral-500 font-medium">Monthly Hosting Bill</span>
                  <span className="font-bold text-emerald-600">$0.00 / month</span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5 px-3 bg-neutral-50 rounded-lg border border-neutral-100">
                  <span className="text-neutral-500 font-medium">SSL Security</span>
                  <span className="font-semibold text-neutral-800 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Free HTTPS
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs py-1.5 px-3 bg-neutral-50 rounded-lg border border-neutral-100">
                  <span className="text-neutral-500 font-medium">Monthly Free Allowance</span>
                  <span className="font-semibold text-neutral-800">2,000,000 requests</span>
                </div>
              </div>

              {/* Action Callout inside telemetry box */}
              <div className="pt-2">
                <div className="p-3 rounded-xl bg-neutral-900 text-white text-xs space-y-1.5">
                  <div className="flex items-center justify-between font-semibold text-neutral-200">
                    <span>⚡ Hosting Status: Verified Active</span>
                    <span className="text-emerald-400">99.9%</span>
                  </div>
                  <p className="text-neutral-400 text-[11px] leading-relaxed">
                    This website is live on a globally distributed container. You can share this URL with anyone right now!
                  </p>
                </div>
              </div>

              {/* Quick stats counter */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-neutral-100 mt-4">
                {profile.stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="text-center p-2 rounded-lg bg-neutral-50/80">
                    <p className="text-lg font-bold text-neutral-900 font-['Outfit']">{stat.value}</p>
                    <p className="text-[11px] text-neutral-500 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
