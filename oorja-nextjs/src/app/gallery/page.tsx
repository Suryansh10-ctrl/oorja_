'use client';

import { useState } from 'react';
import { galleryItems, GALLERY_CATS } from '../../data/gallery/gallery';
import GalleryCard from '../../components/gallery/GalleryCard';
import LightboxModal from '../../components/gallery/LightboxModal';
import { useFest } from '../../context/FestContext';

export default function GalleryPage() {
  const [activeCat, setActiveCat] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { showToast } = useFest();

  const filteredItems = galleryItems.filter(
    (item) => activeCat === 'all' || item.cat === activeCat
  );

  return (
    <>
      <section className="bg-mustard pt-14 pb-10 border-b-[3px] border-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 halftone"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="font-grotesk font-bold text-xs tracking-[.3em]">
            OORJA ’23 • ’24 • ’25 — THE ARCHIVES
          </div>
          <h1 className="font-display text-6xl md:text-8xl mt-2">
            GALLERY<span className="text-terracotta">.</span>
          </h1>
          <p className="max-w-2xl mt-3 md:text-lg font-medium text-charcoal/70">
            Crowds, colours, confetti and questionable dance moves. Click any photo to relive it.
          </p>

          <div className="flex gap-2 mt-6 overflow-x-auto pb-2" id="galFilters">
            {GALLERY_CATS.map((c) => {
              const catId = typeof c === 'string' ? c : (c as { id: string }).id;
              const catLabel = typeof c === 'string' ? (c === 'all' ? 'All Photos' : c) : (c as { label: string }).label;
              const isActive = activeCat === catId;
              return (
                <button
                  key={catId}
                  className={`filter-pill ${
                    isActive
                      ? 'active !bg-charcoal !text-ivory'
                      : '!bg-paper !text-charcoal hover:!bg-cream'
                  }`}
                  onClick={() => setActiveCat(catId)}
                >
                  {catLabel}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-12 paper-grain">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div id="galleryGrid" className="masonry">
            {filteredItems.map((item) => {
              const originalIndex = galleryItems.findIndex((g) => g.id === item.id);
              return (
                <GalleryCard
                  key={item.id}
                  item={item}
                  index={originalIndex >= 0 ? originalIndex : 0}
                  onOpenLightbox={() => setLightboxIndex(originalIndex >= 0 ? originalIndex : 0)}
                />
              );
            })}
          </div>

          <div className="text-center mt-10 bg-paper border-[3px] border-charcoal hard p-8">
            <h3 className="font-display text-3xl">SHOT SOMETHING ICONIC AT OORJA?</h3>
            <p className="text-smoke mt-2">
              Tag <strong className="text-charcoal">@oorja.fest</strong> on Instagram with{' '}
              <strong className="text-charcoal">#MyOorjaMoment</strong> — best shots get featured + win merch.
            </p>
            <button
              onClick={() => showToast('Opening Instagram… follow @oorja.fest', 'success')}
              className="btn btn-terra px-6 py-3 text-xs mt-5"
            >
              <i className="fa-brands fa-instagram"></i> @oorja.fest
            </button>
          </div>
        </div>
      </section>

      <LightboxModal
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
}
