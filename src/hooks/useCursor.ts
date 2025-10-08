'use client';

import { useEffect, useRef, useCallback, type RefObject } from 'react';

export const useCursor = (): RefObject<HTMLDivElement> => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!cursorRef.current) {
      return;
    }

    cursorRef.current.style.top = `${event.clientY}px`;
    cursorRef.current.style.left = `${event.clientX}px`;
  }, []);

  const handleMouseOver = useCallback((event: MouseEvent) => {
    if (!cursorRef.current) {
      return;
    }

    const target = event.target as HTMLElement;
    if (target.tagName === 'A' || target.tagName === 'BUTTON') {
      cursorRef.current.classList.add('hovered');
    }
  }, []);

  const handleMouseOut = useCallback((event: MouseEvent) => {
    if (!cursorRef.current) {
      return;
    }

    const target = event.target as HTMLElement;
    if (target.tagName === 'A' || target.tagName === 'BUTTON') {
      cursorRef.current.classList.remove('hovered');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  return cursorRef;
};
