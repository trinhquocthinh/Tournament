import type { Metadata } from 'next';

import HeroSection from '@/components/sections/HeroSection';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Epic Games Made For True Gamers! Join Tournament esports team.',
};

export default function HomePage() {
  return (
    <article>
      <HeroSection />
      {/* Other sections will be added */}
    </article>
  );
}
