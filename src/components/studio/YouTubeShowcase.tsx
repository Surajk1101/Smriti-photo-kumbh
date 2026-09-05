import React, { useState } from 'react';
import { Youtube, Play, ExternalLink, Share2, Check, Video, Camera, Sparkles, Award } from 'lucide-react';
import { ShopInfo } from '../../types/studio';

interface YouTubeShowcaseProps {
  shopInfo: ShopInfo;
  onBookClick: () => void;
}

export const YouTubeShowcase: React.FC<YouTubeShowcaseProps> = ({
  shopInfo,
  onBookClick,
}) => {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract or fallback to the provided YouTube video ID
  const videoId = shopInfo.youtubeVideoId || '3J2LdMhqS5U';
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shopInfo.youtubeUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const videoHighlights = [
    { title: '4K Ultra HD Resolution', desc: 'Crisp cinematic clarity capturing every water droplet, diya flame, and smile.' },
    { title: 'Licensed Drone Perspectives', desc: 'Aerial vistas of the sacred Sangam meeting of the Ganga, Yamuna & Saraswati.' },
    { title: 'Color-Graded Mastery', desc: 'Warm cinematic tones that honor the spiritual majesty and radiant colors of India.' },
    { title: 'Studio Sound Recording', desc: 'Crystal clear Vedic chants, temple bells, and emotional couple vows captured wirelessly.' },
  ];

  return (
    <section id="youtube-showcase" className="py-20 bg-neutral-900 text-white relative overflow-hidden border-b border-neutral-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold tracking-wide uppercase">
            <Youtube className="w-4 h-4 fill-current" />
            <span>Featured YouTube Channel Video</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit']">
            Experience Our Cinematic Work on YouTube
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Watch our official video production capturing the divine aura of Kumbh, sacred rituals, and heartfelt family celebrations by <strong className="text-neutral-200">{shopInfo.name}</strong>.
          </p>
        </div>

        {/* Video Cinema Stage */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-neutral-950 border-2 border-neutral-800 shadow-2xl shadow-red-950/20">
            
            {/* Top Bar of the Player */}
            <div className="bg-neutral-950 px-4 py-3 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-xs font-semibold text-neutral-300 truncate max-w-xs sm:max-w-md">
                  {shopInfo.name} — Kumbh Sacred Rituals & Cinema Film
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-colors"
                  title="Share video link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Share</span>
                    </>
                  )}
                </button>

                <a
                  href={shopInfo.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open YouTube</span>
                </a>
              </div>
            </div>

            {/* Video Player Container (16:9 Aspect Ratio) */}
            <div className="relative w-full aspect-video bg-neutral-950 flex items-center justify-center">
              {isPlaying ? (
                <iframe
                  src={embedUrl}
                  title="Smriti Photo Kumbh YouTube Video"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                  {/* Video Thumbnail using high quality YouTube thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    onError={(e) => {
                      // Fallback to hqdefault if maxres isn't available
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                    }}
                    alt="Smriti Photo Kumbh Video Thumbnail"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                  />

                  {/* Dark overlay with film grain styling */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                  {/* Centered Large Play Button */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-2xl shadow-red-600/50 group-hover:scale-110 transition-all duration-300 cursor-pointer">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                    </div>
                    <div className="text-center px-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-neutral-900/90 text-amber-400 text-xs font-bold border border-amber-500/30 mb-1">
                        Click to Play Film
                      </span>
                      <p className="text-sm font-medium text-neutral-200">
                        Official video from our YouTube channel
                      </p>
                    </div>
                  </div>

                  {/* Video duration & badge preview */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                    <div className="flex items-center gap-2 bg-neutral-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800">
                      <Video className="w-3.5 h-3.5 text-amber-400" />
                      <span>Produced by Smriti Photo Kumbh Studio</span>
                    </div>
                    <div className="bg-red-600 text-white font-bold px-2.5 py-1 rounded text-[11px]">
                      4K UHD
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Video Footer Details */}
            <div className="p-6 bg-neutral-950/90 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-bold text-white">
                    Smriti Photo Kumbh Official Channel
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    <Award className="w-3 h-3" />
                    <span>Verified Studio</span>
                  </span>
                </div>
                <p className="text-xs text-neutral-400">
                  Subscribe to our channel to watch all ritual documentaries, Ganga Aarti highlights, and client stories.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={shopInfo.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="btn-subscribe-youtube"
                  className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-red-600 hover:bg-red-700 flex items-center gap-2 shadow-md transition-all shrink-0"
                >
                  <Youtube className="w-4 h-4 fill-current" />
                  <span>Subscribe on YouTube</span>
                </a>

                <button
                  onClick={onBookClick}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shrink-0"
                >
                  <span>Book Similar Video</span>
                </button>
              </div>
            </div>

          </div>

          {/* Technical and Cinematic Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {videoHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-neutral-950/60 border border-neutral-800 hover:border-amber-500/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h5 className="text-sm font-bold text-neutral-200 mb-1">{item.title}</h5>
                <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
