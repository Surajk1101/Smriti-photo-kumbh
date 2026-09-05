import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Zap, ArrowRight, ExternalLink, Copy, Check } from 'lucide-react';
import { ProfileData } from '../types';
import { themeMap } from '../utils/theme';

interface FreeHostingBannerProps {
  profile: ProfileData;
  onOpenHostingGuide: () => void;
}

export const FreeHostingBanner: React.FC<FreeHostingBannerProps> = ({
  profile,
  onOpenHostingGuide,
}) => {
  const [copied, setCopied] = useState(false);
  const currentTheme = themeMap[profile.accentColor] || themeMap.indigo;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          {/* Main Answer & Clarification */}
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-semibold text-sm text-white font-['Outfit']">
                  Yes, free hosting is 100% possible!
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <CheckCircle2 className="w-3 h-3" /> Live & Running on Google Cloud
                </span>
              </div>
              <p className="text-xs text-neutral-300 mt-0.5">
                This exact website is hosted right now with $0/month server costs, automatic HTTPS encryption, and instant global access.
              </p>
            </div>
          </div>

          {/* Quick Metrics & Call to Action */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 lg:pt-0 border-t lg:border-t-0 border-neutral-800">
            <div className="hidden sm:flex items-center gap-3 text-xs text-neutral-400 pr-2">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Free SSL
              </span>
              <span>·</span>
              <span>Cloud Run Free Tier</span>
              <span>·</span>
              <span className="text-emerald-400 font-semibold">$0.00 Cost</span>
            </div>

            <button
              onClick={handleCopyLink}
              id="btn-banner-copy-url"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-200 bg-neutral-800 hover:bg-neutral-700 hover:text-white border border-neutral-700 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">URL Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Copy Public URL</span>
                </>
              )}
            </button>

            <button
              onClick={onOpenHostingGuide}
              id="btn-banner-guide"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white shadow-sm transition-all cursor-pointer ${currentTheme.primaryBg} ${currentTheme.primaryHover}`}
            >
              <span>See Free Hosting Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
