'use client';

import { useEffect, useRef, RefObject } from 'react';

/**
 * Sets up an IntersectionObserver on all .reveal* elements
 * and .counter elements within the active page container.
 * Runs once on mount and unobserves elements as they animate.
 */
export function useReveal(containerRef?: RefObject<HTMLElement | null>) {
  const obsRef = useRef<IntersectionObserver | null>(null);
  const cObsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const container = containerRef?.current || document;

    const els = container.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );

    if (obsRef.current) obsRef.current.disconnect();
    if (cObsRef.current) cObsRef.current.disconnect();

    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => {
      if (!el.classList.contains('visible')) {
        revealObs.observe(el);
      }
    });
    obsRef.current = revealObs;

    // Counter animation
    const counters = container.querySelectorAll<HTMLElement>('.counter');
    const intervals: NodeJS.Timeout[] = [];

    const cObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            if (el.dataset.animated === 'true') return;
            el.dataset.animated = 'true';
            cObs.unobserve(el);

            const target = +(el.dataset.target || 0);
            let cur = 0;
            const step = Math.max(1, Math.ceil(target / 50));
            const timer = setInterval(() => {
              cur += step;
              if (cur >= target) {
                cur = target;
                clearInterval(timer);
              }
              el.textContent = cur.toLocaleString('en-IN');
            }, 25);
            intervals.push(timer);
          }
        });
      },
      { threshold: 0.2 }
    );

    counters.forEach((c) => {
      if (c.dataset.animated !== 'true') {
        cObs.observe(c);
      } else {
        const target = +(c.dataset.target || 0);
        if (target) c.textContent = target.toLocaleString('en-IN');
      }
    });
    cObsRef.current = cObs;

    return () => {
      revealObs.disconnect();
      cObs.disconnect();
      intervals.forEach((t) => clearInterval(t));
    };
  }, [containerRef]);
}
