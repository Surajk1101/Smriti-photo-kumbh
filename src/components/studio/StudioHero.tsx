import React, { useState } from 'react';
import { Play, Camera, Phone, Star, ShieldCheck, Sparkles, Image as ImageIcon, ArrowDown, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { ShopInfo } from '../../types/studio';
import { parseInstagram } from '../../utils/instagram';

interface StudioHeroProps {
  shopInfo: ShopInfo;
  onBookClick: () => void;
  onExploreGallery: () => void;
}

export const StudioHero: React.FC<StudioHeroProps> = ({
  shopInfo,
  onBookClick,
  onExploreGallery,
}) => {
  const cleanPhone = shopInfo.phone.replace(/[^0-9+]/g, '');
  const insta = parseInstagram(shopInfo.instagram);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const showcasePhotos = [
    {
      src: '/images/wedding_jaimala_gaze.jpg',
      label: 'Sacred Varmala Gaze',
      title: 'Sacred Varmala & Romantic Wedding Gaze',
      desc: 'Emotional candid capture of the newlyweds exchanging radiant smiles and sacred garlands against an illuminated floral mandap.',
    },
    {
      src: '/images/wedding_varmala_closeup.jpg',
      label: 'Loving Varmala Smile',
      title: 'Sacred Varmala & Tender Candid Moments',
      desc: 'Intimate bride and groom portraits capturing tender smiles, royal zardozi attire, and vibrant flower wall stages.',
    },
    {
      src: '/images/wedding_stage_descent.jpg',
      label: 'Royal Stage Descent',
      title: 'Grand Wedding & Stage Cinematography',
      desc: 'Regal mandap coverage, high-speed shutter portraits, 4K cinema cameras, and timeless candid moments.',
    },
    {
      src: '/images/wedding_couple.jpg',
      label: 'Sacred Jaimala Union',
      title: 'Cinematic Wedding & Studio Portraiture',
      desc: 'Intimate varmala garland exchange, floral stage setups, traditional family milestones, and custom archival framing.',
    },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Background Graphic & Atmosphere with subtle dark gradient and overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1600&auto=format&fit=crop&q=80"
          alt="Kumbh Maha Aarti and Ghat Atmosphere"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-screen scale-105 filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/20 via-orange-950/10 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Spiritual & Studio Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{shopInfo.hindiName} • Official Photography & Videography Studio</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] font-['Outfit']">
                Capturing Sacred Moments,{' '}
                <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                  Preserving Eternal Memories
                </span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed">
                Welcome to <strong className="text-white font-semibold">{shopInfo.name}</strong>. From grand cinematic weddings and sacred ceremonies to royal studio portraits, 4K drone videography, and master handcrafted framing.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onBookClick}
                id="hero-btn-book-session"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-neutral-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 hover:from-amber-300 hover:to-orange-300 shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all cursor-pointer flex items-center gap-2"
              >
                <Camera className="w-4 h-4 text-neutral-950" />
                <span>Book a Photo Session</span>
              </button>

              <a
                href={shopInfo.youtubeUrl}
                id="hero-btn-watch-film"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white shrink-0 shadow-xs">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </div>
                <span>YouTube Film</span>
              </a>

              <a
                href={insta.url}
                id="hero-btn-instagram"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-pink-200 bg-gradient-to-r from-pink-950/40 via-rose-950/40 to-purple-950/40 hover:from-pink-900/60 hover:to-purple-900/60 border border-pink-500/30 backdrop-blur-md hover:scale-[1.02] transition-all flex items-center gap-2 group"
                title={`Follow ${insta.handle} on Instagram`}
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Instagram className="w-3 h-3" />
                </div>
                <span className="font-bold text-white">{insta.handle}</span>
              </a>

              <button
                onClick={onExploreGallery}
                id="hero-btn-view-gallery"
                className="px-4 py-3.5 rounded-xl font-medium text-xs sm:text-sm text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors flex items-center gap-2"
              >
                <ImageIcon className="w-4 h-4 text-amber-400" />
                <span>Gallery</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.9 / 5 Rating</span>
                <span>(500+ Reviews)</span>
              </div>

              <a
                href={insta.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-pink-300 hover:text-pink-200 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>{insta.handle} (Reels & Teasers)</span>
              </a>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Same-Day Photo Transfer</span>
              </div>

              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-amber-400" />
                <span>4K Drone & Cinema Cameras</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Featured Card & Direct Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-2 bg-gradient-to-b from-amber-500/20 via-orange-500/10 to-transparent border border-amber-500/30 shadow-2xl backdrop-blur-xl">
              <div className="relative rounded-2xl overflow-hidden bg-neutral-900 aspect-4/3 group">
                <img
                  key={showcasePhotos[activePhotoIdx].src}
                  src={showcasePhotos[activePhotoIdx].src}
                  alt={`Smriti Photo Kumbh - ${showcasePhotos[activePhotoIdx].title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-neutral-950/85 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 text-xs font-semibold text-amber-300 flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span>{showcasePhotos[activePhotoIdx].label}</span>
                </div>

                {/* Photo Switcher Navigation Controls */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 z-10">
                  <button
                    type="button"
                    onClick={() => setActivePhotoIdx((prev) => (prev === 0 ? showcasePhotos.length - 1 : prev - 1))}
                    aria-label="Previous photo"
                    className="w-8 h-8 rounded-full bg-neutral-950/80 hover:bg-amber-500 text-white hover:text-neutral-950 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-md"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePhotoIdx((prev) => (prev === showcasePhotos.length - 1 ? 0 : prev + 1))}
                    aria-label="Next photo"
                    className="w-8 h-8 rounded-full bg-neutral-950/80 hover:bg-amber-500 text-white hover:text-neutral-950 border border-white/20 flex items-center justify-center transition-colors backdrop-blur-md"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Thumbnail switcher tabs */}
                <div className="absolute bottom-28 left-4 flex gap-1.5 z-10">
                  {showcasePhotos.map((photo, idx) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold backdrop-blur-md transition-all ${
                        activePhotoIdx === idx
                          ? 'bg-amber-400 text-neutral-950 shadow-md font-bold'
                          : 'bg-black/60 text-neutral-300 hover:bg-black/80'
                      }`}
                    >
                      {photo.label}
                    </button>
                  ))}
                </div>

                {/* Card Bottom Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent text-left space-y-1.5">
                  <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                    {shopInfo.city} • Professional Studio
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug font-['Outfit']">
                    {showcasePhotos[activePhotoIdx].title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2">
                    {showcasePhotos[activePhotoIdx].desc}
                  </p>
                  
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-neutral-300">
                      Custom Packages & Fast Turnaround
                    </span>
                    <a
                      href={`tel:${cleanPhone}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 px-3 py-1.5 rounded-lg transition-colors shadow-md"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Studio</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Mini Feature Highlights Below Card */}
              <div className="grid grid-cols-3 gap-2 mt-2 pt-1 text-center">
                <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="text-base font-black text-amber-400">15+</div>
                  <div className="text-[10px] text-neutral-400 font-medium">Years Serving</div>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="text-base font-black text-orange-400">10k+</div>
                  <div className="text-[10px] text-neutral-400 font-medium">Happy Clients</div>
                </div>
                <div className="p-2.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="text-base font-black text-amber-300">4K</div>
                  <div className="text-[10px] text-neutral-400 font-medium">Cinematography</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="text-center pb-6">
        <a
          href="#youtube-showcase"
          className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-amber-400 transition-colors animate-bounce"
        >
          <span>See our YouTube Video & Work</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
