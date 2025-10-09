import type { Metadata } from 'next';

import HeroSection from '@/components/sections/HeroSection';
import UpcomingSection from '@/components/sections/UpcomingSection';
import NewsSection from '@/components/sections/NewsSection';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Epic Games Made For True Gamers! Join Tournament esports team.',
};

export default function HomePage() {
  return (
    <article>
      <HeroSection />
      <UpcomingSection />
      <NewsSection />
    </article>
  );
}
