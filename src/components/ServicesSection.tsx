import React from 'react';
import { Layout, Cloud, Sparkles, Code2, ArrowRight, Check } from 'lucide-react';
import { ServiceItem, ProfileData } from '../types';
import { themeMap } from '../utils/theme';

interface ServicesSectionProps {
  services: ServiceItem[];
  profile: ProfileData;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, profile }) => {
  const currentTheme = themeMap[profile.accentColor] || themeMap.indigo;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-6 h-6" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      default:
        return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <span className={`text-xs font-bold tracking-wider uppercase ${currentTheme.primaryText}`}>
            Services & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-['Outfit'] tracking-tight">
            How I Can Help You Build & Launch
          </h2>
          <p className="text-neutral-600 text-base">
            From greenfield ideation to free production deployment, here is what I deliver for founders, creators, and teams.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-2xl bg-neutral-50 border border-neutral-200/90 hover:border-neutral-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${currentTheme.secondaryBg} ${currentTheme.primaryText}`}
                >
                  {getServiceIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-neutral-900 font-['Outfit'] mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2.5 pt-4 border-t border-neutral-200/70">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold ${currentTheme.primaryText} hover:underline`}
                >
                  <span>Inquire about this service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
