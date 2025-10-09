'use client';

import { useEffect } from 'react';

export const useReveal = () => {
  useEffect(() => {
    const revealElementOnScroll = () => {
      // Re-query elements each time to catch dynamically added elements
      const revealElements = document.querySelectorAll('[data-reveal]');

      revealElements.forEach(element => {
        const isElementInsideWindow =
          element.getBoundingClientRect().top < window.innerHeight / 1.1;

        if (isElementInsideWindow && !element.classList.contains('revealed')) {
          element.classList.add('revealed');
        }
      });
    };

    // Initial check
    revealElementOnScroll();

    // Use MutationObserver to detect DOM changes and reveal new elements
    const observer = new MutationObserver(() => {
      revealElementOnScroll();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    window.addEventListener('scroll', revealElementOnScroll, { passive: true });
    window.addEventListener('load', revealElementOnScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', revealElementOnScroll);
      window.removeEventListener('load', revealElementOnScroll);
    };
  }, []);
};
