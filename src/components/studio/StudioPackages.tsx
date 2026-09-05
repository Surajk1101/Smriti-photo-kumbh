import React from 'react';
import { StudioPackage, ShopInfo } from '../../types/studio';
import { Check, Star, ArrowRight, Gift, Sparkles } from 'lucide-react';

interface StudioPackagesProps {
  packages: StudioPackage[];
  shopInfo: ShopInfo;
  onSelectPackage: (packageName: string) => void;
}

export const StudioPackages: React.FC<StudioPackagesProps> = ({
  packages,
  shopInfo,
  onSelectPackage,
}) => {
  return (
    <section id="packages" className="py-20 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Complete Experience Bundles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit']">
            Curated Shoot & Experience Packages
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Tailored to your needs. Every package includes dedicated coverage, professional color grading, digital transfer, and complimentary physical framed keepsakes.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 border-2 border-amber-500 shadow-2xl shadow-amber-500/10 md:-translate-y-2'
                  : 'bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-black tracking-wider uppercase shadow-md whitespace-nowrap ${
                    pkg.popular
                      ? 'bg-amber-400 text-neutral-950 ring-2 ring-amber-300/40'
                      : 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                  }`}
                >
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* Package Name & Tagline */}
                <div className="text-left mb-6">
                  <h3 className="text-xl font-bold text-white font-['Outfit']">{pkg.name}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{pkg.tagline}</p>
                </div>

                {/* Package Status & Inquiries */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-neutral-800">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                    Custom Quote on Request
                  </span>
                  <span className="text-xs text-neutral-400">All-Inclusive Bundle</span>
                </div>

                {/* Included Features */}
                <div className="space-y-3 mb-6">
                  <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                    Coverage & Shoots Included:
                  </div>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Physical Deliverables */}
                {pkg.deliverables.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-neutral-800/80 mb-8">
                    <div className="text-xs font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
                      <Gift className="w-3.5 h-3.5" />
                      <span>Free Tangible Gifts:</span>
                    </div>
                    {pkg.deliverables.map((del, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPackage(pkg.name)}
                className={`w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  pkg.popular
                    ? 'bg-amber-400 hover:bg-amber-300 text-neutral-950 shadow-lg shadow-amber-500/20'
                    : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
                }`}
              >
                <span>Inquire & Book Package</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          ))}
        </div>

        {/* Custom Booking Note */}
        <div className="mt-12 text-center text-xs text-neutral-400 max-w-xl mx-auto">
          Need a customized package for an entire family function, wedding, or multi-day celebration?{' '}
          <a
            href={`https://wa.me/${shopInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
              'Namaste! I would like to inquire about custom photography package details.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="text-amber-400 underline font-semibold hover:text-amber-300"
          >
            Chat directly with our studio head on WhatsApp
          </a>.
        </div>

      </div>
    </section>
  );
};
