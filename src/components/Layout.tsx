'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useReveal } from '@/hooks/useReveal';
import type { LayoutProps } from '@/types';

import BackToTop from './BackToTop';
import CustomCursor from './CustomCursor';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: LayoutProps) {
  useReveal();
  const isLaptopOrAbove = useMediaQuery('(min-width: 1024px)');

  return (
    <>
      <Header />
      <main id="top">{children}</main>
      <Footer />
      <BackToTop />
      {isLaptopOrAbove && <CustomCursor />}
    </>
  );
}
