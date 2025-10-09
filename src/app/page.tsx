import type { Metadata } from 'next';

import HeroSection from '@/components/sections/home/HeroSection';
import JoinSection from '@/components/sections/home/JoinSection';
import NewsSection from '@/components/sections/home/NewsSection';
import UpcomingSection from '@/components/sections/home/UpcomingSection';

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
