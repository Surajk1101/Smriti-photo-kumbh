import React from 'react';
import { Layers, CheckCircle, Code, Cloud, Terminal, Cpu } from 'lucide-react';
import { SkillCategory, ProfileData } from '../types';
import { themeMap } from '../utils/theme';

interface SkillsSectionProps {
  skills: SkillCategory[];
  profile: ProfileData;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, profile }) => {
  const currentTheme = themeMap[profile.accentColor] || themeMap.indigo;

  const getCategoryIcon = (title: string) => {
    if (title.toLowerCase().includes('frontend')) return <Code className="w-5 h-5" />;
    if (title.toLowerCase().includes('backend')) return <Cpu className="w-5 h-5" />;
    if (title.toLowerCase().includes('hosting') || title.toLowerCase().includes('cloud'))
      return <Cloud className="w-5 h-5" />;
    return <Terminal className="w-5 h-5" />;
  };

  return (
    <section id="skills" className="py-20 bg-neutral-50/70 border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <span className={`text-xs font-bold tracking-wider uppercase ${currentTheme.primaryText}`}>
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-['Outfit'] tracking-tight">
            Skills & Infrastructure Stack
          </h2>
          <p className="text-neutral-600 text-base">
            Modern tools and architectures used to ship responsive, reliable software with zero ongoing hosting bills.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl border border-neutral-200/90 p-6 shadow-xs flex flex-col justify-between hover:border-neutral-300 transition-colors"
            >
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${currentTheme.secondaryBg} ${currentTheme.primaryText}`}
                  >
                    {getCategoryIcon(category.title)}
                  </div>
                  <h3 className="font-bold text-base text-neutral-900 font-['Outfit']">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between text-xs py-1.5 border-b border-neutral-100 last:border-0"
                    >
                      <span className="font-medium text-neutral-800">{skill.name}</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-100 text-neutral-600">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 text-[11px] text-neutral-500 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Production tested</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
