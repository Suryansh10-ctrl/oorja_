import { useEffect } from 'react';
import { galleryItems } from '../../data/gallery/gallery.js';

export default function LightboxModal({ activeIndex, onClose, onSelectIndex }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (activeIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  if (activeIndex === null || activeIndex < 0 || activeIndex >= galleryItems.length) {
    return null;
  }

  const currentItem = galleryItems[activeIndex];

  function step(dir) {
    let next = activeIndex + dir;
    if (next < 0) next = galleryItems.length - 1;
    if (next >= galleryItems.length) next = 0;
    onSelectIndex(next);
  }

  return (
    <div
      id="lightbox"
      className="fixed inset-0 z-[95] flex items-center justify-center p-4 modal-bg"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-11 h-11 bg-ivory border-2 border-charcoal text-xl hover:bg-terracotta hover:text-ivory transition-colors z-10"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <button
        onClick={() => step(-1)}
        className="absolute left-3 md:left-8 w-11 h-11 bg-ivory border-2 border-charcoal text-lg hover:bg-mustard transition-colors z-10"
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        onClick={() => step(1)}
        className="absolute right-3 md:right-8 w-11 h-11 bg-ivory border-2 border-charcoal text-lg hover:bg-mustard transition-colors z-10"
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="max-w-4xl w-full bg-ivory border-[3px] border-charcoal hard-lg overflow-hidden modal-panel">
        <img
          id="lb-img"
          src={currentItem.src}
          className="w-full max-h-[70vh] object-cover"
          alt={currentItem.cap}
        />
        <div className="p-4 flex justify-between items-center border-t-[3px] border-charcoal bg-paper">
          <span id="lb-cap" className="font-grotesk font-bold text-sm">
            {currentItem.cap}
          </span>
          <span id="lb-count" className="font-grotesk text-xs font-bold tracking-widest text-smoke">
            {activeIndex + 1} / {galleryItems.length}
          </span>
        </div>
      </div>
    </div>
  );
}
