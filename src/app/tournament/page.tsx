import type { Metadata } from 'next';

import BracketHero from '@/components/sections/BracketHero';
import BracketPanels from '@/components/sections/BracketPanels';
import BracketRecap from '@/components/sections/BracketRecap';
import { TournamentProvider } from '@/contexts/TournamentContext';

export const metadata: Metadata = {
  title: 'Tournament Bracket Hub',
  description:
    'Follow Tournament multi-title brackets with live standings, brackets, and match recaps.',
};

export default function TournamentPage() {
  return (
    <TournamentProvider>
      <article>
        <BracketHero />

        <section className="bracket-section" aria-label="Bracket overview">
          <div className="container">
            <BracketPanels />
            <BracketRecap />
          </div>
        </section>
      </article>
    </TournamentProvider>
  );
}
