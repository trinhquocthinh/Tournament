'use client';

import { useTournamentContext } from '@/contexts/TournamentContext';
import { tournamentBrackets } from '@/data/brackets';

import BracketGrid from './BracketGrid';

import './BracketGrid.scss';

export default function BracketPanels() {
  const { activeTab } = useTournamentContext();

  return (
    <div className="bracket-panels">
      {tournamentBrackets.map(bracket => (
        <BracketGrid
          key={bracket.game}
          game={bracket.game}
          isActive={activeTab === bracket.game}
          rounds={bracket.rounds}
        />
      ))}
    </div>
  );
}
