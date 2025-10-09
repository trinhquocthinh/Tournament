'use client';

import { useTournamentContext } from '@/contexts/TournamentContext';

import './BracketHero.scss';

interface TournamentTab {
  id: string;
  label: string;
  game: string;
}

const tabs: TournamentTab[] = [
  { id: 'bracket-valorant-tab', label: 'Valorant Clash', game: 'valorant' },
  { id: 'bracket-apex-tab', label: 'Apex Legends Cup', game: 'apex' },
  { id: 'bracket-league-tab', label: 'League of Heroes', game: 'league' },
];

export default function BracketHero() {
  const { activeTab, switchTab } = useTournamentContext();

  return (
    <section className="bracket-hero has-before">
      <div className="container">
        <h1 className="h1 title">Unigine Masters Bracket Hub</h1>
        <p className="section-text">
          Dive into every bracket across Valorant Clash, Apex Legends Cup, and
          League of Heroes Gauntlet. Follow the tree, track map scores, and
          catch the squad advancing to the grand finals.
        </p>

        <div
          className="tournament-tabs"
          role="tablist"
          aria-label="Select tournament bracket"
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`tournament-tab ${activeTab === tab.game ? 'active' : ''}`}
              type="button"
              role="tab"
              id={tab.id}
              aria-selected={activeTab === tab.game}
              aria-controls={`bracket-${tab.game}`}
              data-game={tab.game}
              onClick={() => switchTab(tab.game)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
