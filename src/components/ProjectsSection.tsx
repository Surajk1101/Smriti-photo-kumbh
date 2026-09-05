import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, FolderGit2, Plus } from 'lucide-react';
import { Project, ProfileData } from '../types';
import { themeMap } from '../utils/theme';

interface ProjectsSectionProps {
  projects: Project[];
  profile: ProfileData;
  onOpenCustomizer: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  profile,
  onOpenCustomizer,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const currentTheme = themeMap[profile.accentColor] || themeMap.indigo;

  const categories = ['All', 'Full Stack', 'Frontend', 'Tools'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className={`text-xs font-bold tracking-wider uppercase ${currentTheme.primaryText}`}>
              Featured Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-['Outfit'] tracking-tight">
              Selected Digital Products & Applications
            </h2>
            <p className="text-neutral-600 text-base">
              Production web applications engineered with clean code, modern TypeScript, and hosted with $0 infrastructure overhead.
            </p>
          </div>

          {/* Category Filter Pills & Add Button */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`filter-project-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? `${currentTheme.primaryBg} text-white shadow-xs`
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}

            <button
              onClick={onOpenCustomizer}
              id="btn-add-project-open"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 cursor-pointer"
              title="Add or edit projects in website customizer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add / Edit</span>
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-neutral-50 rounded-2xl border border-neutral-200/90 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-xs text-neutral-800 shadow-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-neutral-950 font-['Outfit']">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-neutral-200/70 text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-neutral-200/60 mt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1 text-xs font-bold transition-colors ${currentTheme.primaryText} hover:underline`}
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
