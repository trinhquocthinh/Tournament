'use client';

import { useCursor } from '@/hooks/useCursor';
import './CustomCursor.scss';

export default function CustomCursor() {
  useCursor();

  return <div className="cursor" data-cursor></div>;
}
