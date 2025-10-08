'use client';

import { useCallback, type MouseEvent } from 'react';

const useButtonRipple = () => {
  const handleMouseMove = useCallback((event: MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    element.style.setProperty('--top', `${offsetY}px`);
    element.style.setProperty('--left', `${offsetX}px`);
  }, []);

  return { handleMouseMove };
};

export { useButtonRipple };
export default useButtonRipple;
