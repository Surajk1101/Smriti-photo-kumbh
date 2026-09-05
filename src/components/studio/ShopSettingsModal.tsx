import React, { useState } from 'react';
import { ShopInfo } from '../../types/studio';
import { defaultShopInfo } from '../../data/studioData';
import { X, Save, RotateCcw, Youtube, Phone, MapPin, Check, Trash2, Users, Instagram } from 'lucide-react';
import { parseInstagram } from '../../utils/instagram';

interface ShopSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  shopInfo: ShopInfo;
  onSave: (updated: ShopInfo) => void;
}

export const ShopSettingsModal: React.FC<ShopSettingsModalProps> = ({
  isOpen,
  onClose,
  shopInfo,
  onSave,
}) => {
  const [formData, setFormData] = useState<ShopInfo>(shopInfo);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'leads'>('details');

  // Load inquiries from localStorage
  const getLeads = () => {
    try {
      return JSON.parse(localStorage.getItem('smriti_inquiries') || '[]');
    } catch {
      return [];
    }
  };

  const [leads, setLeads] = useState<any[]>(getLeads());

  if (!isOpen) return null;

  // Extract youtube video ID helper if full URL is pasted
  const handleYoutubeChange = (url: string) => {
    let videoId = '3J2LdMhqS5U';
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (match && match[1]) {
      videoId = match[1];
    } else if (url.trim().length === 11) {
      videoId = url.trim();
    }
    setFormData({
      ...formData,
      youtubeUrl: url,
      youtubeVideoId: videoId,
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    if (window.confirm('Reset all shop details to official Smriti Photo Kumbh defaults?')) {
      setFormData(defaultShopInfo);
      onSave(defaultShopInfo);
    }
  };

  const clearLeads = () => {
    if (window.confirm('Clear all customer booking inquiry leads?')) {
      localStorage.removeItem('smriti_inquiries');
      setLeads([]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in">
      <div className="bg-neutral-900 border border-neutral-800 text-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-neutral-800 flex items-center justify-between">
          <div className="space-y-0.5">
            <h3 className="text-lg font-bold font-['Outfit']">Shop Management & Studio Settings</h3>
            <p className="text-xs text-neutral-400">Update your phone numbers, YouTube video, and manage inquiries</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-neutral-800 px-6 bg-neutral-950/50">
          <button
            onClick={() => setActiveTab('details')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'details'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            Studio Details & YouTube Link
          </button>
          <button
            onClick={() => {
              setLeads(getLeads());
              setActiveTab('leads');
            }}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'leads'
                ? 'border-amber-400 text-amber-300'
                : 'border-transparent text-neutral-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Customer Booking Inquiries ({leads.length})</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-5 text-left text-xs">
          {activeTab === 'details' ? (
            <form onSubmit={handleSave} id="form-shop-settings" className="space-y-4">
              
              {/* Shop Names */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-neutral-300">Shop Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-amber-400 focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-neutral-300">Hindi Name</label>
                  <input
                    type="text"
                    value={formData.hindiName}
                    onChange={(e) => setFormData({ ...formData, hindiName: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-amber-400 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* YouTube Video URL */}
              <div className="space-y-1 p-3.5 rounded-2xl bg-neutral-950 border border-red-900/40">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-red-400 flex items-center gap-1.5">
                    <Youtube className="w-4 h-4" />
                    <span>YouTube Video URL or Video ID</span>
                  </label>
                  <span className="text-[10px] text-neutral-400">Current ID: {formData.youtubeVideoId}</span>
                </div>
                <input
                  type="text"
                  value={formData.youtubeUrl}
                  onChange={(e) => handleYoutubeChange(e.target.value)}
                  placeholder="https://youtu.be/3J2LdMhqS5U"
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-xs focus:border-red-500 focus:outline-hidden"
                />
                <p className="text-[10px] text-neutral-400">
                  Accepts your full link like <code className="text-amber-300">https://youtu.be/3J2LdMhqS5U?si=MmjqCgJ92BKhEGD1</code> or just the 11-char ID.
                </p>
              </div>

              {/* Instagram Handle & Profile Link */}
              <div className="space-y-1 p-3.5 rounded-2xl bg-neutral-950 border border-pink-900/40">
                <div className="flex items-center justify-between">
                  <label className="font-bold text-pink-400 flex items-center gap-1.5">
                    <Instagram className="w-4 h-4" />
                    <span>Instagram Profile Handle or URL</span>
                  </label>
                  <span className="text-[10px] text-neutral-400">
                    Display: <span className="text-pink-300 font-bold">{parseInstagram(formData.instagram).handle}</span>
                  </span>
                </div>
                <input
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                  placeholder="@samriddhi.photo or https://www.instagram.com/samriddhi.photo/"
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white text-xs focus:border-pink-500 focus:outline-hidden"
                />
                <p className="text-[10px] text-neutral-400">
                  Enter your handle like <code className="text-pink-300">@samriddhi.photo</code> or full URL like <code className="text-amber-300">https://www.instagram.com/samriddhi.photo/</code>.
                </p>
              </div>

              {/* Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-neutral-300">Phone Number</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-amber-400 focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-neutral-300">WhatsApp Number</label>
                  <input
                    type="text"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-amber-400 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Address & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-neutral-300">Address / Ghat Area</label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-amber-400 focus:outline-hidden"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-neutral-300">City & State</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-amber-400 focus:outline-hidden"
                  />
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-1">
                <label className="font-semibold text-neutral-300">Studio Hours</label>
                <input
                  type="text"
                  value={formData.hours}
                  onChange={(e) => setFormData({ ...formData, hours: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-amber-400 focus:outline-hidden"
                />
              </div>

              {/* Tagline */}
              <div className="space-y-1">
                <label className="font-semibold text-neutral-300">Tagline / Motto</label>
                <input
                  type="text"
                  value={formData.tagline}
                  onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs focus:border-amber-400 focus:outline-hidden"
                />
              </div>

            </form>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400 text-xs">Customer booking requests received from the website:</span>
                {leads.length > 0 && (
                  <button
                    onClick={clearLeads}
                    className="text-red-400 hover:text-red-300 text-[11px] flex items-center gap-1"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear All</span>
                  </button>
                )}
              </div>

              {leads.length === 0 ? (
                <div className="text-center py-10 text-neutral-500">
                  No inquiries recorded yet. When pilgrims or clients fill out the contact form, their details will appear here.
                </div>
              ) : (
                <div className="space-y-2">
                  {leads.map((lead: any) => (
                    <div key={lead.id} className="p-3.5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white text-sm">{lead.name}</span>
                        <span className="text-[10px] text-neutral-500">{lead.createdAt}</span>
                      </div>
                      <div className="text-amber-400 font-semibold text-xs">
                        {lead.service} {lead.date ? `• Date: ${lead.date}` : ''}
                      </div>
                      <div className="text-neutral-300 flex items-center gap-3">
                        <a href={`tel:${lead.phone}`} className="text-sky-400 underline font-medium">
                          📞 {lead.phone}
                        </a>
                        <a
                          href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-emerald-400 underline font-medium"
                        >
                          💬 WhatsApp
                        </a>
                      </div>
                      {lead.message && (
                        <p className="text-[11px] text-neutral-400 mt-1 italic">&ldquo;{lead.message}&rdquo;</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-950/80 flex items-center justify-between">
          <button
            onClick={handleReset}
            type="button"
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-200 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition-colors"
            >
              Cancel
            </button>

            {activeTab === 'details' && (
              <button
                onClick={handleSave}
                type="button"
                className="px-5 py-2 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 flex items-center gap-1.5 transition-all"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Changes</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
