'use client';

import { useCursor } from '@/hooks/useCursor';
import './CustomCursor.scss';

export default function CustomCursor() {
  const cursorRef = useCursor();

  return <div ref={cursorRef} className="cursor" data-cursor></div>;
}
