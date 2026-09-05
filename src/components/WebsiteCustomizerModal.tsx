import React, { useState } from 'react';
import { X, Check, Sparkles, Palette, User, Briefcase, Plus, Trash2, Download, RefreshCw } from 'lucide-react';
import { ProfileData, Project, AccentColor } from '../types';
import { themeMap } from '../utils/theme';

interface WebsiteCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  setProfile: React.Dispatch<React.SetStateAction<ProfileData>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  onReset: () => void;
}

export const WebsiteCustomizerModal: React.FC<WebsiteCustomizerModalProps> = ({
  isOpen,
  onClose,
  profile,
  setProfile,
  projects,
  setProjects,
  onReset,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'theme' | 'projects'>('profile');
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [newProjectDesc, setNewProjectDesc] = useState('');
  const [newProjectCategory, setNewProjectCategory] = useState<'Full Stack' | 'Frontend' | 'Mobile & AI' | 'Tools'>('Frontend');
  const [newProjectTags, setNewProjectTags] = useState('React, Tailwind');
  const [newProjectUrl, setNewProjectUrl] = useState('#');

  if (!isOpen) return null;

  const currentTheme = themeMap[profile.accentColor] || themeMap.indigo;

  const accentOptions: { color: AccentColor; label: string; class: string }[] = [
    { color: 'indigo', label: 'Indigo', class: 'bg-indigo-600' },
    { color: 'blue', label: 'Sky Blue', class: 'bg-sky-600' },
    { color: 'emerald', label: 'Emerald', class: 'bg-emerald-600' },
    { color: 'violet', label: 'Violet', class: 'bg-purple-600' },
    { color: 'amber', label: 'Amber', class: 'bg-amber-600' },
    { color: 'rose', label: 'Rose', class: 'bg-rose-600' },
  ];

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectTitle.trim()) return;

    const newProj: Project = {
      id: `proj-${Date.now()}`,
      title: newProjectTitle.trim(),
      description: newProjectDesc.trim() || 'A modern web application built with clean architecture.',
      category: newProjectCategory,
      tags: newProjectTags.split(',').map((t) => t.trim()).filter(Boolean),
      liveUrl: newProjectUrl.trim() || '#',
      githubUrl: 'https://github.com',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    };

    setProjects([newProj, ...projects]);
    setNewProjectTitle('');
    setNewProjectDesc('');
    setNewProjectTags('React, Tailwind');
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const handleExportJSON = () => {
    const data = { profile, projects };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${profile.name.toLowerCase().replace(/\s+/g, '-')}-website.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/70">
          <div>
            <h3 className="text-lg font-bold text-neutral-900 font-['Outfit'] flex items-center gap-2">
              <span>Customize Your Website</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-medium">
                Live Changes
              </span>
            </h3>
            <p className="text-xs text-neutral-500">
              Update your details in real-time. Changes are instantly reflected on your live hosted page.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tabs */}
        <div className="flex border-b border-neutral-200 px-5 gap-4 bg-white text-xs font-semibold">
          <button
            onClick={() => setActiveTab('profile')}
            className={`py-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'profile'
                ? `border-neutral-900 text-neutral-900 font-bold`
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile & Bio</span>
          </button>

          <button
            onClick={() => setActiveTab('theme')}
            className={`py-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'theme'
                ? `border-neutral-900 text-neutral-900 font-bold`
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Accent Theme</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`py-3 border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'projects'
                ? `border-neutral-900 text-neutral-900 font-bold`
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Manage Projects ({projects.length})</span>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Professional Title / Role
                </label>
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => setProfile({ ...profile, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Tagline / Catchphrase
                </label>
                <input
                  type="text"
                  value={profile.tagline}
                  onChange={(e) => setProfile({ ...profile, tagline: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  About Bio
                </label>
                <textarea
                  rows={3}
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="chk-availability"
                  checked={profile.isAvailableForWork}
                  onChange={(e) => setProfile({ ...profile, isAvailableForWork: e.target.checked })}
                  className="w-4 h-4 rounded text-neutral-900 focus:ring-neutral-900"
                />
                <label htmlFor="chk-availability" className="text-xs font-medium text-neutral-800 cursor-pointer">
                  Show "Available for work & projects" status badge
                </label>
              </div>
            </div>
          )}

          {activeTab === 'theme' && (
            <div className="space-y-5">
              <div>
                <p className="text-xs text-neutral-600 mb-4">
                  Select an accent theme. All buttons, highlights, and status badges will adapt harmoniously across your website.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {accentOptions.map((opt) => (
                    <button
                      key={opt.color}
                      onClick={() => setProfile({ ...profile, accentColor: opt.color })}
                      className={`p-3 rounded-xl border flex items-center justify-between transition-all cursor-pointer ${
                        profile.accentColor === opt.color
                          ? 'border-neutral-900 bg-neutral-50 ring-2 ring-neutral-900/10'
                          : 'border-neutral-200 hover:border-neutral-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-4 h-4 rounded-full ${opt.class}`} />
                        <span className="font-semibold text-xs text-neutral-900">{opt.label}</span>
                      </div>
                      {profile.accentColor === opt.color && (
                        <Check className="w-4 h-4 text-neutral-900" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              {/* Add project form */}
              <form onSubmit={handleAddProject} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 space-y-3">
                <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-700">
                  Add New Project
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Project Title (e.g. HealthTracker App)"
                    value={newProjectTitle}
                    onChange={(e) => setNewProjectTitle(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-neutral-300 text-xs bg-white"
                  />
                  <select
                    value={newProjectCategory}
                    onChange={(e) => setNewProjectCategory(e.target.value as any)}
                    className="px-3 py-2 rounded-lg border border-neutral-300 text-xs bg-white"
                  >
                    <option value="Full Stack">Full Stack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Mobile & AI">Mobile & AI</option>
                    <option value="Tools">Tools</option>
                  </select>
                </div>

                <input
                  type="text"
                  placeholder="Tags separated by comma (e.g. React, TypeScript, Vite)"
                  value={newProjectTags}
                  onChange={(e) => setNewProjectTags(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs bg-white"
                />

                <textarea
                  rows={2}
                  placeholder="Short description of the project"
                  value={newProjectDesc}
                  onChange={(e) => setNewProjectDesc(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-300 text-xs bg-white resize-none"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Project</span>
                </button>
              </form>

              {/* Existing projects list */}
              <div className="space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-neutral-700">
                  Current Projects ({projects.length})
                </h4>
                {projects.map((p) => (
                  <div
                    key={p.id}
                    className="p-3 rounded-lg border border-neutral-200 flex items-center justify-between bg-white text-xs"
                  >
                    <div>
                      <p className="font-bold text-neutral-900">{p.title}</p>
                      <p className="text-neutral-500 text-[11px]">{p.category} · {p.tags.join(', ')}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteProject(p.id)}
                      className="text-rose-600 hover:text-rose-800 p-1.5 rounded hover:bg-rose-50 transition-colors"
                      title="Delete project"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportJSON}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-700 bg-white border border-neutral-200 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-neutral-950 hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Done Customizing
          </button>
        </div>

      </div>
    </div>
  );
};
