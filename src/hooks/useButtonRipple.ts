'use client';

import { useCallback, type MouseEvent } from 'react';

export const useButtonRipple = () => {
  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;

      button.style.setProperty('--top', `${offsetY}px`);
      button.style.setProperty('--left', `${offsetX}px`);
    },
    []
  );

  return { handleMouseMove };
};
