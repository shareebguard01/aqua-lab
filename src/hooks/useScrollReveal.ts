import { useEffect } from 'react';

/**
 * Adds the `is-visible` class to every `.reveal` element when it scrolls
 * into view (once). Clears will-change after the transition for scroll perf.
 */
export function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => {
        el.classList.add('is-visible', 'reveal-settled');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add('is-visible');
            observer.unobserve(el);

            const settleMs = 700 + (delay ? Number(delay) : 0);
            window.setTimeout(() => {
              el.classList.add('reveal-settled');
            }, settleMs);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );

    els.forEach((el) => observer.observe(el));

    // Mobile scroll-driven card activation when cards pass through the viewport center
    const cardEls = Array.from(document.querySelectorAll<HTMLElement>('.card-interactive'));
    const mobileCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('mobile-active');
          } else {
            el.classList.remove('mobile-active');
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    cardEls.forEach((el) => mobileCardObserver.observe(el));

    return () => {
      observer.disconnect();
      mobileCardObserver.disconnect();
    };
  }, []);
}
