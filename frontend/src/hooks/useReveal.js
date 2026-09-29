import { useEffect, useRef } from 'react';

/**
 * Sets up an IntersectionObserver on all .reveal* elements
 * and .counter elements within the active page container.
 * Runs once on mount and unobserves elements as they animate.
 */
export function useReveal(containerRef) {
  const obsRef = useRef(null);
  const cObsRef = useRef(null);

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
    const counters = container.querySelectorAll('.counter');
    const intervals = [];

    const cObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const el = e.target;
            if (el.dataset.animated === 'true') return;
            el.dataset.animated = 'true';
            cObs.unobserve(el);

            const target = +el.dataset.target;
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
        // Already animated, ensure target number is displayed
        const target = +c.dataset.target;
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
