import React from 'react';
import { ProfileData } from '../types';
import { themeMap } from '../utils/theme';
import { ShieldCheck, Zap, Sparkles, Award, Coffee, Code2 } from 'lucide-react';

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  const currentTheme = themeMap[profile.accentColor] || themeMap.indigo;

  return (
    <section id="about" className="py-20 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Portrait & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80"
                alt="Workspace"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                  Engineering Philosophy
                </span>
                <h4 className="text-lg font-bold font-['Outfit'] mt-1">
                  Speed, Simplicity & Zero Waste
                </h4>
                <p className="text-xs text-neutral-300 mt-1">
                  Software that solves problems without bloat or excessive cloud spend.
                </p>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80"
                >
                  <p className="text-2xl font-bold text-neutral-950 font-['Outfit']">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold text-neutral-800 mt-0.5">{stat.label}</p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">{stat.subtext}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio Story & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className={`text-xs font-bold tracking-wider uppercase ${currentTheme.primaryText}`}>
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-['Outfit'] tracking-tight mt-1 mb-4">
                Designing Modern Software that Simply Works
              </h2>
            </div>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              I am {profile.name}, a developer dedicated to creating intuitive, responsive web platforms. Whether building full-stack web applications from scratch, fine-tuning user interfaces for extreme accessibility, or configuring zero-cost cloud deployments, I focus on clean code and delightful user journeys.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200/60">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${currentTheme.secondaryBg} ${currentTheme.primaryText}`}>
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 font-['Outfit']">
                    Performance-Driven Architecture
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    Sub-second load times, lightweight bundle budgets, and strict adherence to modern Core Web Vitals standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200/60">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${currentTheme.secondaryBg} ${currentTheme.primaryText}`}>
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 font-['Outfit']">
                    Zero-Cost Infrastructure
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    Leveraging generous cloud free tiers (Google Cloud Run, Vercel, GitHub Pages) so personal projects and MVPs cost $0 to run forever.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200/60">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${currentTheme.secondaryBg} ${currentTheme.primaryText}`}>
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 font-['Outfit']">
                    Design System Craftsmanship
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                    Rejecting generic AI slop templates in favor of mathematically balanced typography, responsive scales, and accessible contrast.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white ${currentTheme.primaryBg} ${currentTheme.primaryHover} shadow-xs transition-all`}
              >
                <span>Get In Touch with Me</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
