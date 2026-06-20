import React, { useState } from 'react';
import { Eye, X, ArrowLeft, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { GalleryImage, GymTheme } from '../types';
import { GALLERY_IMAGES } from '../data';

interface GalleryProps {
  config: GymTheme;
}

export default function Gallery({ config }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'All' | GalleryImage['tag']>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter images based on selected tag
  const filteredImages = GALLERY_IMAGES.filter((img) => {
    return activeFilter === 'All' || img.tag === activeFilter;
  });

  const handleOpenLightbox = (index: number) => {
    // We map index of filtered array to the index of original array to preserve scrolling
    // but scrolling within the filtered list is actually much more intuitive for users!
    setLightboxIndex(index);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-24 bg-neutral-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
            <span className="text-xs font-mono font-bold uppercase tracking-widest" style={{ color: config.accentHex }}>
              UNCOMPROMISING ATHLETIC SPACE
            </span>
            <span className="h-px w-6" style={{ backgroundColor: config.accentHex }}></span>
          </div>

          <h2 className="font-display text-4xl sm:text-5.5xl font-black tracking-tight uppercase">
            FACILITY VISUAL{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              WAR FRONT GALLERY
            </span>
          </h2>

          <p className="text-neutral-400 text-sm max-w-xl mx-auto">
            Take a sensory walkthrough of our high-contrast training grounds. Premium equipment, spacious workout blocks, and dedicated lifter squads.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {['All', 'facility', 'classes', 'workouts', 'community'].map((tag) => {
            const isSelected = activeFilter === tag;
            const displayTitle = tag === 'All' ? 'View All' : tag.toUpperCase();
            return (
              <button
                id={`btn-gal-filter-${tag}`}
                key={tag}
                onClick={() => setActiveFilter(tag as any)}
                className={`py-1.5 px-4 rounded text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold transition duration-200 border cursor-pointer ${
                  isSelected
                    ? 'text-black font-extrabold border-white'
                    : 'text-neutral-400 bg-neutral-900/60 border-neutral-950 hover:text-white hover:border-neutral-800'
                }`}
                style={{
                  backgroundColor: isSelected ? config.accentHex : 'transparent',
                  borderColor: isSelected ? config.accentHex : undefined
                }}
              >
                {displayTitle}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div
          id="gallery-masonry-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]"
        >
          {filteredImages.map((img, index) => {
            // Apply arbitrary heights/widths for visual energy masonry simulation
            let spanClasses = 'col-span-1 row-span-1';
            if (index === 0) {
              spanClasses = 'col-span-1 sm:col-span-2 row-span-2';
            } else if (index === 3) {
              spanClasses = 'col-span-1 row-span-2';
            } else if (index === 4) {
              spanClasses = 'col-span-1 sm:col-span-2 row-span-1';
            }

            return (
              <div
                id={`gallery-item-${img.id}`}
                key={img.id}
                onClick={() => handleOpenLightbox(index)}
                className={`group relative rounded-xl overflow-hidden border border-neutral-920 bg-neutral-900 cursor-pointer shadow-xl ${spanClasses}`}
              >
                <picture>
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover filter brightness-[0.7] grayscale group-hover:grayscale-0 group-hover:brightness-[0.95] group-hover:scale-102 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </picture>

                {/* Cinematic Hover Overlay Banner */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center gap-1 text-xs font-mono mb-1.5" style={{ color: config.accentHex }}>
                    <Eye className="w-3.5 h-3.5" />
                    <span>TAP TO ZOOM HIGH-RES</span>
                  </div>
                  <h4 className="font-display text-lg font-bold uppercase tracking-wide text-white leading-tight">
                    {img.caption}
                  </h4>
                  <span className="text-[9px] font-mono uppercase text-neutral-500 mt-1">TAGGED: {img.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar actions */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-neutral-400">
            <span className="text-xs font-mono">
              SLIDE {lightboxIndex + 1} OF {filteredImages.length} • {filteredImages[lightboxIndex].caption.toUpperCase()}
            </span>
            <button
              id="lightbox-close-btn"
              onClick={() => setLightboxIndex(null)}
              className="p-2 cursor-pointer bg-neutral-900 hover:bg-neutral-800 rounded-full border border-neutral-800 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Interactive Core Stage */}
          <div className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center">
            {/* Control Left */}
            <button
              id="lightbox-prev-btn"
              onClick={handlePrev}
              className="absolute left-2 sm:-left-16 z-10 p-3 rounded-full bg-neutral-900/90 border border-neutral-800 hover:text-white text-neutral-400 hover:scale-110 transition cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Main Picture Frame */}
            <div className="rounded-2xl overflow-hidden border border-neutral-800/80 max-h-[75vh] max-w-full shadow-2xl bg-neutral-950">
              <picture>
                <img
                  src={filteredImages[lightboxIndex].url}
                  alt={filteredImages[lightboxIndex].caption}
                  className="max-h-[75vh] max-w-full object-contain mx-auto"
                  onClick={(e) => e.stopPropagation()}
                  referrerPolicy="no-referrer"
                />
              </picture>
            </div>

            {/* Control Right */}
            <button
              id="lightbox-next-btn"
              onClick={handleNext}
              className="absolute right-2 sm:-right-16 z-10 p-3 rounded-full bg-neutral-900/90 border border-neutral-800 hover:text-white text-neutral-400 hover:scale-110 transition cursor-pointer"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Caption text underneath overlay */}
          <div className="text-center max-w-xl mt-6 space-y-1">
            <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">
              {filteredImages[lightboxIndex].caption}
            </h3>
            <span className="inline-block py-0.5 px-3 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono uppercase" style={{ color: config.accentHex }}>
              Category: {filteredImages[lightboxIndex].tag}
            </span>
          </div>

        </div>
      )}
    </section>
  );
}
