'use client';

import { useReveal } from '@/hooks/useReveal';
import type { LayoutProps } from '@/types';

import BackToTop from './BackToTop';
import CustomCursor from './CustomCursor';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: LayoutProps) {
  useReveal();

  return (
    <>
      <Header />
      <main id="top">{children}</main>
      <Footer />
      <BackToTop />
      <CustomCursor />
    </>
  );
}
