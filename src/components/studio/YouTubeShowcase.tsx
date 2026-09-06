import React, { useState } from 'react';
import { Youtube, Play, ExternalLink, Share2, Check, Video, Sparkles, Award, Film, PlayCircle } from 'lucide-react';
import { ShopInfo, YouTubeVideoItem } from '../../types/studio';
import { studioYouTubeVideos } from '../../data/studioData';

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

  // Combine predefined videos with any custom shopInfo video
  const playlist: YouTubeVideoItem[] = React.useMemo(() => {
    const list = [...studioYouTubeVideos];
    // If shopInfo has a custom video not in the list, prepend it
    if (shopInfo.youtubeVideoId && !list.some((v) => v.videoId === shopInfo.youtubeVideoId)) {
      list.unshift({
        id: 'custom-shop-video',
        videoId: shopInfo.youtubeVideoId,
        title: `${shopInfo.name} — Official Cinema Video`,
        category: 'Official Production',
        duration: '4K Ultra HD',
        url: shopInfo.youtubeUrl,
        description: 'Official cinematography and video production by Smriti Photo Kumbh.',
        featured: true,
      });
    }
    return list;
  }, [shopInfo.youtubeVideoId, shopInfo.youtubeUrl, shopInfo.name]);

  // Default to the first video (which is the new requested wedding cinema video: tsjfpKFTP5g)
  const [activeVideoId, setActiveVideoId] = useState<string>(
    shopInfo.youtubeVideoId || playlist[0]?.videoId || 'tsjfpKFTP5g'
  );

  const activeVideo = playlist.find((v) => v.videoId === activeVideoId) || playlist[0];
  const currentVideoId = activeVideo?.videoId || 'tsjfpKFTP5g';
  const currentVideoUrl = activeVideo?.url || `https://youtu.be/${currentVideoId}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${currentVideoId}?autoplay=1&rel=0&modestbranding=1`;

  const handleSelectVideo = (vidId: string) => {
    setActiveVideoId(vidId);
    setIsPlaying(true);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentVideoUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const videoHighlights = [
    { title: '4K Ultra HD Cinema', desc: 'Crisp cinematic clarity with dual Sony FX full-frame cinema cameras.' },
    { title: 'Licensed Drone Vistas', desc: 'Majestic aerial perspectives of wedding venues, baraat processions & ghats.' },
    { title: 'Master Color Grading', desc: 'Rich, natural skin tones and radiant heritage colors tuned for cinematic splendor.' },
    { title: 'Wireless Studio Sound', desc: 'Crystal clear vows, mantras, and emotional family moments recorded in hi-res audio.' },
  ];

  return (
    <section id="youtube-showcase" className="py-20 bg-neutral-900 text-white relative overflow-hidden border-b border-neutral-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold tracking-wide uppercase">
            <Youtube className="w-4 h-4 fill-current" />
            <span>Official YouTube Channel Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Outfit']">
            Experience Our Cinematic Films &amp; Documentaries
          </h2>
          <p className="text-sm sm:text-base text-neutral-400">
            Watch official 4K video productions from royal wedding cinematography to sacred rituals captured by <strong className="text-neutral-200">{shopInfo.name}</strong>.
          </p>

          {/* Interactive Video Switcher Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2.5">
            {playlist.map((video) => {
              const isSelected = video.videoId === currentVideoId;
              return (
                <button
                  key={video.id}
                  onClick={() => handleSelectVideo(video.videoId)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-102 border border-red-400'
                      : 'bg-neutral-800/90 text-neutral-300 hover:text-white hover:bg-neutral-700 border border-neutral-700/80'
                  }`}
                >
                  <PlayCircle className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-red-400'}`} />
                  <span className="truncate max-w-[220px] sm:max-w-xs">{video.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-sm uppercase tracking-wider font-semibold ${
                    isSelected ? 'bg-red-800 text-red-100' : 'bg-neutral-700 text-neutral-300'
                  }`}>
                    {video.duration || '4K'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Cinema Stage */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-neutral-950 border-2 border-neutral-800 shadow-2xl shadow-red-950/20">
            
            {/* Top Bar of the Player */}
            <div className="bg-neutral-950 px-4 py-3 border-b border-neutral-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-3 h-3 rounded-full bg-red-500/80 shrink-0 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 shrink-0 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 shrink-0 inline-block" />
                <span className="ml-2 text-xs font-semibold text-neutral-200 truncate">
                  {activeVideo?.title || `${shopInfo.name} Film`}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 transition-colors"
                  title="Share video link"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Share</span>
                    </>
                  )}
                </button>

                <a
                  href={currentVideoUrl}
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
                  title={activeVideo?.title || "Smriti Photo Kumbh YouTube Video"}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                  {/* Video Thumbnail using high quality YouTube thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${currentVideoId}/maxresdefault.jpg`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${currentVideoId}/hqdefault.jpg`;
                    }}
                    alt={activeVideo?.title || "Smriti Photo Kumbh Video Thumbnail"}
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
                        Click to Play in 4K
                      </span>
                      <p className="text-sm font-semibold text-neutral-200">
                        {activeVideo?.title}
                      </p>
                    </div>
                  </div>

                  {/* Video duration & badge preview */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                    <div className="flex items-center gap-2 bg-neutral-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-neutral-800">
                      <Video className="w-3.5 h-3.5 text-amber-400" />
                      <span>{activeVideo?.category || 'Produced by Smriti Photo Kumbh Studio'}</span>
                    </div>
                    <div className="bg-red-600 text-white font-bold px-2.5 py-1 rounded text-[11px] tracking-wide">
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
                    {activeVideo?.title}
                  </h4>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    <Award className="w-3 h-3" />
                    <span>Verified Studio Film</span>
                  </span>
                </div>
                <p className="text-xs text-neutral-400 max-w-2xl">
                  {activeVideo?.description}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={currentVideoUrl}
                  target="_blank"
                  rel="noreferrer"
                  id="btn-subscribe-youtube"
                  className="px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-red-600 hover:bg-red-700 flex items-center gap-2 shadow-md transition-all shrink-0"
                >
                  <Youtube className="w-4 h-4 fill-current" />
                  <span>Watch on YouTube</span>
                </a>

                <button
                  onClick={onBookClick}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shrink-0 cursor-pointer"
                >
                  <span>Book Similar Shoot</span>
                </button>
              </div>
            </div>

          </div>

          {/* Playlist Gallery Cards */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-sm font-bold text-neutral-200">
                <Film className="w-4 h-4 text-amber-400" />
                <span>Featured Films &amp; Videos Playlist ({playlist.length})</span>
              </div>
              <span className="text-xs text-neutral-400">Click any video to play above</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {playlist.map((video) => {
                const isSelected = video.videoId === currentVideoId;
                return (
                  <div
                    key={video.id}
                    onClick={() => handleSelectVideo(video.videoId)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex gap-3.5 items-center group ${
                      isSelected
                        ? 'bg-neutral-800/90 border-red-500/80 shadow-lg shadow-red-950/40'
                        : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                    }`}
                  >
                    {/* Thumbnail preview */}
                    <div className="relative w-28 h-20 rounded-xl overflow-hidden shrink-0 bg-neutral-900">
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                          isSelected ? 'bg-red-600' : 'bg-neutral-900/80'
                        }`}>
                          <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[9px] font-bold text-white">
                        4K
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                          {video.category}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                            Now Playing
                          </span>
                        )}
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-amber-300 transition-colors">
                        {video.title}
                      </h5>
                      <p className="text-[11px] text-neutral-400 line-clamp-2 leading-tight">
                        {video.description}
                      </p>
                    </div>
                  </div>
                );
              })}
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
