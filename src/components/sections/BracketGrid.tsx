'use client';

import './BracketGrid.scss';

interface MatchTeam {
  name: string;
  score: number;
  isWinner?: boolean;
}

interface Match {
  stage: string;
  team1: MatchTeam;
  team2: MatchTeam;
  connector?: 'down-right' | 'up-right' | 'right';
  meta?: string;
  isChampion?: boolean;
}

interface BracketRound {
  title: string;
  round: 'quarter' | 'semi' | 'final';
  matches: Match[];
}

interface BracketGridProps {
  game: string;
  isActive: boolean;
  rounds: BracketRound[];
}

export default function BracketGrid({
  game,
  isActive,
  rounds,
}: BracketGridProps) {
  return (
    <div
      className={`bracket-grid ${isActive ? 'active' : ''}`}
      id={`bracket-${game}`}
      role="tabpanel"
      aria-labelledby={`bracket-${game}-tab`}
      data-game-panel={game}
      hidden={!isActive}
    >
      {rounds.map((round, roundIndex) => (
        <div
          key={`${game}-${round.round}-${roundIndex}`}
          className="bracket-round"
          data-round={round.round}
        >
          <p className="round-title">{round.title}</p>

          {round.matches.map((match, matchIndex) => (
            <div
              key={`${game}-${round.round}-match-${matchIndex}`}
              className={`match-card ${match.isChampion ? 'champion' : ''}`}
              data-connector={match.connector}
            >
              <p className="match-stage">{match.stage}</p>
              <div
                className={`match-team ${match.team1.isWinner ? 'win' : ''}`}
              >
                <span className="team-name">{match.team1.name}</span>
                <span className="team-score">{match.team1.score}</span>
              </div>
              <div
                className={`match-team ${match.team2.isWinner ? 'win' : ''}`}
              >
                <span className="team-name">{match.team2.name}</span>
                <span className="team-score">{match.team2.score}</span>
              </div>
              {match.meta && <div className="match-meta">{match.meta}</div>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
