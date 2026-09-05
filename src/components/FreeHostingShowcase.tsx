import React, { useState } from 'react';
import { Cloud, Check, Copy, ExternalLink, HelpCircle, ArrowRight, ShieldCheck, Zap, Server, Globe, Cpu, CheckCircle2 } from 'lucide-react';
import { HostingProvider, ProfileData } from '../types';
import { freeHostingProviders } from '../data/initialData';
import { themeMap } from '../utils/theme';

interface FreeHostingShowcaseProps {
  profile: ProfileData;
}

export const FreeHostingShowcase: React.FC<FreeHostingShowcaseProps> = ({ profile }) => {
  const [selectedProvider, setSelectedProvider] = useState<HostingProvider>(freeHostingProviders[0]);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const currentTheme = themeMap[profile.accentColor] || themeMap.indigo;

  const handleCopyText = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedStep(index);
      setTimeout(() => setCopiedStep(null), 2000);
    });
  };

  return (
    <section id="free-hosting" className="py-20 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <Zap className="w-3.5 h-3.5" />
            <span>Comprehensive Free Hosting Breakdown</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-['Outfit']">
            Is Free Hosting Possible?{' '}
            <span className="text-emerald-400">Yes, 100% Free Forever.</span>
          </h2>

          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
            In modern cloud computing, you never need to pay for personal website hosting. Major cloud platforms offer generous, permanent free tiers with SSL certificates, global CDNs, and custom domain connections.
          </p>
        </div>

        {/* 3 Core Truths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-white font-['Outfit']">1. Generous Free Tiers</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Google Cloud gives you 2 million free requests per month, and Vercel/Netlify offer 100 GB of free bandwidth—more than enough for 99% of personal websites.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-white font-['Outfit']">2. Free HTTPS & Security</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Every modern free host automatically provisions and renews SSL certificates (Let's Encrypt / Google Trust Services) without charging a penny.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/80 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-white font-['Outfit']">3. Connect Any Domain</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              You can connect your own custom domain (e.g. <code>yourname.com</code>) to any of these platforms for free, or use their free subdomains.
            </p>
          </div>
        </div>

        {/* Interactive Provider Selector & Guide */}
        <div className="bg-neutral-800/90 rounded-2xl border border-neutral-700/90 overflow-hidden shadow-xl">
          {/* Tabs header */}
          <div className="border-b border-neutral-700 px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Cloud className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-sm text-white font-['Outfit']">
                Compare Top 5 Zero-Cost Free Hosting Providers
              </span>
            </div>
            <span className="text-xs text-neutral-400">
              Select a provider to see its step-by-step setup:
            </span>
          </div>

          {/* Provider Pills */}
          <div className="p-4 sm:p-6 bg-neutral-900/60 border-b border-neutral-700 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {freeHostingProviders.map((provider) => {
              const isSelected = selectedProvider.id === provider.id;
              return (
                <button
                  key={provider.id}
                  onClick={() => setSelectedProvider(provider)}
                  id={`tab-provider-${provider.id}`}
                  className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-neutral-800 border-emerald-500/80 shadow-md ring-1 ring-emerald-500/40'
                      : 'bg-neutral-800/40 border-neutral-700/60 hover:bg-neutral-800/80 text-neutral-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-white font-['Outfit'] truncate">
                      {provider.name.split('(')[0]}
                    </span>
                    {provider.popular && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    )}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-semibold block">
                    {provider.price}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected Provider Details */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Specs */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
                  {selectedProvider.badge}
                </div>
                <h3 className="text-2xl font-bold text-white font-['Outfit']">
                  {selectedProvider.name}
                </h3>
                <p className="text-sm text-neutral-300 mt-1">
                  {selectedProvider.tagline}
                </p>
              </div>

              {/* Specs Table */}
              <div className="space-y-2.5 bg-neutral-900/80 p-4 rounded-xl border border-neutral-700/80 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Hosting Cost:</span>
                  <span className="font-bold text-emerald-400">{selectedProvider.price}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Free Bandwidth:</span>
                  <span className="font-semibold text-white">{selectedProvider.bandwidth}</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Free SSL Certificate:</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Included
                  </span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-neutral-800">
                  <span className="text-neutral-400">Custom Domain (.com):</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Supported Free
                  </span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-neutral-400">Setup Time:</span>
                  <span className="font-semibold text-white">{selectedProvider.setupTime}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-700/60 text-xs space-y-1">
                <span className="font-semibold text-neutral-300 block">Best For:</span>
                <p className="text-neutral-400">{selectedProvider.recommendedFor}</p>
              </div>

              <a
                href={selectedProvider.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Visit {selectedProvider.name.split('(')[0]} Official Free Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right: Step-by-Step Instructions */}
            <div className="lg:col-span-7 bg-neutral-900/90 rounded-xl p-6 border border-neutral-700/80 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-base text-white font-['Outfit'] flex items-center gap-2">
                  <span>How to deploy this site on {selectedProvider.name.split('(')[0]}</span>
                </h4>
                <span className="text-xs text-neutral-400">Easy 3-step setup</span>
              </div>

              <div className="space-y-3">
                {selectedProvider.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-neutral-800/80 border border-neutral-700 flex items-start gap-3.5 group hover:border-neutral-600 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-mono selection:bg-emerald-500 selection:text-neutral-950">
                        {step}
                      </p>
                    </div>
                    <button
                      onClick={() => handleCopyText(step, idx)}
                      className="text-neutral-400 hover:text-white p-1 rounded transition-colors shrink-0"
                      title="Copy instruction"
                    >
                      {copiedStep === idx ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Quick tip box */}
              <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-xs text-emerald-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Tip for beginners:</strong> Because this site was created in AI Studio, you already have a live hosted URL right now! You can use it as your permanent portfolio or share it with anyone.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
