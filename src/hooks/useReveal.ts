'use client';

import { useEffect } from 'react';

export const useReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');

    const revealElementOnScroll = () => {
      revealElements.forEach(element => {
        const isElementInsideWindow =
          element.getBoundingClientRect().top < window.innerHeight / 1.1;

        if (isElementInsideWindow) {
          element.classList.add('revealed');
        }
      });
    };

    // Initial check
    revealElementOnScroll();

    window.addEventListener('scroll', revealElementOnScroll, { passive: true });
    window.addEventListener('load', revealElementOnScroll);

    return () => {
      window.removeEventListener('scroll', revealElementOnScroll);
      window.removeEventListener('load', revealElementOnScroll);
    };
  }, []);
};
