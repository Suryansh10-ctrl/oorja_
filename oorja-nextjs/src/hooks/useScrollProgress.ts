'use client';

import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const totalScrollable = h.scrollHeight - h.clientHeight;
      const pct = totalScrollable > 0 ? (h.scrollTop / totalScrollable) * 100 : 0;
      setProgress(pct);
      setScrolled(h.scrollTop > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { progress, scrolled };
}
