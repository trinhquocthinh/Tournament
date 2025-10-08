'use client';

import { useScroll } from '@/hooks/useScroll';
import './BackToTop.scss';

export default function BackToTop() {
  const { isScrolled } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#top"
      className={`back-top-btn ${isScrolled ? 'active' : ''}`}
      aria-label="back to top"
      data-back-top-btn
      onClick={e => {
        e.preventDefault();
        scrollToTop();
      }}
    >
      <ion-icon name="arrow-up-outline" aria-hidden="true"></ion-icon>
    </a>
  );
}
