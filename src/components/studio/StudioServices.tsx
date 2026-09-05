import React from 'react';
import { StudioService, ShopInfo } from '../../types/studio';
import { Waves, HeartHandshake, Camera, Plane, Frame, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface StudioServicesProps {
  services: StudioService[];
  shopInfo: ShopInfo;
  onSelectService: (serviceTitle: string) => void;
}

export const StudioServices: React.FC<StudioServicesProps> = ({
  services,
  shopInfo,
  onSelectService,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Waves':
        return <Waves className="w-6 h-6 text-amber-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-orange-600" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-sky-600" />;
      case 'Frame':
        return <Frame className="w-6 h-6 text-amber-700" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-600" />;
      default:
        return <Camera className="w-6 h-6 text-amber-600" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <span>Our Professional Craft</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-['Outfit']">
            Studio Services & Photography Solutions
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            From devotional ritual photography by the sacred waters to royal wedding cinematography and custom archival frames, we cater to all your memory preservation needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl p-7 bg-white border transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
                service.popular
                  ? 'border-amber-400 shadow-md shadow-amber-500/10'
                  : 'border-neutral-200 shadow-xs'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full text-[11px] font-extrabold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs">
                  STUDIO FAVORITE
                </div>
              )}

              <div>
                {/* Icon Header */}
                <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center mb-5">
                  {getIcon(service.icon)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-1 font-['Outfit']">
                  {service.title}
                </h3>
                {service.hindiTitle && (
                  <div className="text-xs font-semibold text-amber-800 mb-3">
                    {service.hindiTitle}
                  </div>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-100 mb-6">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-500">
                  Customizable Package
                </span>

                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-neutral-900 bg-amber-100 hover:bg-amber-200 border border-amber-300/60 transition-colors cursor-pointer"
                >
                  <span>Book / Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
