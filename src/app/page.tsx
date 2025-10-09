import type { Metadata } from 'next';

import HeroSection from '@/components/sections/HeroSection';
import JoinSection from '@/components/sections/JoinSection';
import NewsSection from '@/components/sections/NewsSection';
import UpcomingSection from '@/components/sections/UpcomingSection';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Epic Games Made For True Gamers! Join Tournament esports team.',
};

export default function HomePage() {
  return (
    <article>
      <HeroSection />
      <JoinSection />
      <UpcomingSection />
      <NewsSection />
    </article>
  );
}
