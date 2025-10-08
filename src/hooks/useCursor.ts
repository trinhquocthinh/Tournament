'use client';

import { useEffect } from 'react';

export const useCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('[data-cursor]') as HTMLElement;
    if (!cursor) {
      return;
    }

    const cursorMove = (event: MouseEvent) => {
      cursor.style.top = `${event.clientY}px`;
      cursor.style.left = `${event.clientX}px`;
    };

    const addHoverEffect = () => {
      cursor.classList.add('hovered');
    };

    const removeHoverEffect = () => {
      cursor.classList.remove('hovered');
    };

    // Add event listeners
    window.addEventListener('mousemove', cursorMove);

    const hoverElements = [
      ...Array.from(document.querySelectorAll('a')),
      ...Array.from(document.querySelectorAll('button')),
    ];

    hoverElements.forEach(element => {
      element.addEventListener('mouseover', addHoverEffect);
      element.addEventListener('mouseout', removeHoverEffect);
    });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', cursorMove);
      hoverElements.forEach(element => {
        element.removeEventListener('mouseover', addHoverEffect);
        element.removeEventListener('mouseout', removeHoverEffect);
      });
    };
  }, []);
};
