import { useState } from 'react';
import { galleryItems, GALLERY_CATS } from '../data/gallery/gallery.js';
import GalleryCard from '../components/gallery/GalleryCard.jsx';
import LightboxModal from '../components/gallery/LightboxModal.jsx';

export default function GalleryPage({ onShowToast }) {
  const [activeCat, setActiveCat] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

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
            {GALLERY_CATS.map((c) => (
              <button
                key={c.id}
                className={`filter-pill${activeCat === c.id ? ' active' : ''}`}
                onClick={() => setActiveCat(c.id)}
              >
                {c.label}
              </button>
            ))}
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
                  onClick={() => setLightboxIndex(originalIndex)}
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
              onClick={() => onShowToast('Opening Instagram… follow @oorja.fest', 'success')}
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
