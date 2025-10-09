export interface MatchTeam {
  name: string;
  score: number;
  isWinner?: boolean;
}

export interface Match {
  stage: string;
  team1: MatchTeam;
  team2: MatchTeam;
  connector?: 'down-right' | 'up-right' | 'right';
  meta?: string;
  isChampion?: boolean;
}

export interface BracketRound {
  title: string;
  round: 'quarter' | 'semi' | 'final';
  matches: Match[];
}

export interface TournamentBracket {
  game: string;
  rounds: BracketRound[];
}

export const tournamentBrackets: TournamentBracket[] = [
  {
    game: 'valorant',
    rounds: [
      {
        title: 'Quarterfinals',
        round: 'quarter',
        matches: [
          {
            stage: 'QF1 · Split',
            team1: { name: 'Purple Death Cadets', score: 13, isWinner: true },
            team2: { name: 'Midnight Orbit', score: 9 },
            connector: 'down-right',
          },
          {
            stage: 'QF2 · Ascent',
            team1: { name: 'Trigger Brain Squad', score: 13, isWinner: true },
            team2: { name: 'Cyber Sirens', score: 10 },
            connector: 'up-right',
          },
          {
            stage: 'QF3 · Lotus',
            team1: { name: 'The Black Hat Hackers', score: 14, isWinner: true },
            team2: { name: 'Phantom Bloom', score: 12 },
            connector: 'down-right',
          },
          {
            stage: 'QF4 · Bind',
            team1: { name: 'Your Worst Nightmare', score: 13, isWinner: true },
            team2: { name: 'Vandal Vultures', score: 8 },
            connector: 'up-right',
          },
        ],
      },
      {
        title: 'Semifinals',
        round: 'semi',
        matches: [
          {
            stage: 'SF1 · Pearl',
            team1: { name: 'Purple Death Cadets', score: 2, isWinner: true },
            team2: { name: 'Trigger Brain Squad', score: 1 },
            connector: 'right',
          },
          {
            stage: 'SF2 · Haven',
            team1: { name: 'The Black Hat Hackers', score: 2, isWinner: true },
            team2: { name: 'Your Worst Nightmare', score: 0 },
            connector: 'right',
          },
        ],
      },
      {
        title: 'Grand Final',
        round: 'final',
        matches: [
          {
            stage: 'Best Of 5 · Fracture',
            team1: { name: 'Purple Death Cadets', score: 3, isWinner: true },
            team2: { name: 'The Black Hat Hackers', score: 1 },
            meta: 'MVP: Nova · 248 ADR',
            isChampion: true,
          },
        ],
      },
    ],
  },
  {
    game: 'apex',
    rounds: [
      {
        title: 'Group Finals',
        round: 'quarter',
        matches: [
          {
            stage: "GF1 · World's Edge",
            team1: { name: 'Witches And Quizards', score: 27, isWinner: true },
            team2: { name: 'Thermal Rifters', score: 21 },
            connector: 'down-right',
          },
          {
            stage: 'GF2 · Olympus',
            team1: { name: 'Resting Bitch Faces', score: 29, isWinner: true },
            team2: { name: 'Nebula Frenzy', score: 18 },
            connector: 'up-right',
          },
          {
            stage: 'GF3 · Storm Point',
            team1: { name: 'Trigger Brain Squad', score: 31, isWinner: true },
            team2: { name: 'Phase Runners', score: 26 },
            connector: 'down-right',
          },
          {
            stage: 'GF4 · Broken Moon',
            team1: { name: 'The Black Hat Hackers', score: 30, isWinner: true },
            team2: { name: 'Spectre Shift', score: 23 },
            connector: 'up-right',
          },
        ],
      },
      {
        title: 'Championship Lobby',
        round: 'semi',
        matches: [
          {
            stage: 'Final Lobby A',
            team1: { name: 'Witches And Quizards', score: 74, isWinner: true },
            team2: { name: 'Resting Bitch Faces', score: 68 },
            connector: 'right',
          },
          {
            stage: 'Final Lobby B',
            team1: { name: 'Trigger Brain Squad', score: 81, isWinner: true },
            team2: { name: 'The Black Hat Hackers', score: 69 },
            connector: 'right',
          },
        ],
      },
      {
        title: 'Match Point Finals',
        round: 'final',
        matches: [
          {
            stage: 'Final Circle',
            team1: { name: 'Trigger Brain Squad', score: 102, isWinner: true },
            team2: { name: 'Witches And Quizards', score: 94 },
            meta: 'Match Point secured in Game 6',
            isChampion: true,
          },
        ],
      },
    ],
  },
  {
    game: 'league',
    rounds: [
      {
        title: 'Quarterfinals',
        round: 'quarter',
        matches: [
          {
            stage: "QF1 · Summoner's Rift",
            team1: { name: 'Your Worst Nightmare', score: 3, isWinner: true },
            team2: { name: 'Crystal Crown', score: 1 },
            connector: 'down-right',
          },
          {
            stage: "QF2 · Summoner's Rift",
            team1: { name: 'Purple Death Cadets', score: 3, isWinner: true },
            team2: { name: 'Iron Lotus', score: 2 },
            connector: 'up-right',
          },
          {
            stage: "QF3 · Summoner's Rift",
            team1: { name: 'Resting Bitch Faces', score: 3, isWinner: true },
            team2: { name: 'Elder Drake', score: 0 },
            connector: 'down-right',
          },
          {
            stage: "QF4 · Summoner's Rift",
            team1: { name: 'The Black Hat Hackers', score: 3, isWinner: true },
            team2: { name: 'Nexus Blitz', score: 2 },
            connector: 'up-right',
          },
        ],
      },
      {
        title: 'Semifinals',
        round: 'semi',
        matches: [
          {
            stage: 'SF1 · Patch 14.3',
            team1: { name: 'Your Worst Nightmare', score: 3, isWinner: true },
            team2: { name: 'Purple Death Cadets', score: 1 },
            connector: 'right',
          },
          {
            stage: 'SF2 · Patch 14.3',
            team1: { name: 'Resting Bitch Faces', score: 3, isWinner: true },
            team2: { name: 'The Black Hat Hackers', score: 2 },
            connector: 'right',
          },
        ],
      },
      {
        title: 'Grand Final',
        round: 'final',
        matches: [
          {
            stage: 'Best Of 5 · Rift',
            team1: { name: 'Your Worst Nightmare', score: 3, isWinner: true },
            team2: { name: 'Resting Bitch Faces', score: 2 },
            meta: 'MVP: Ivy · 86% KP',
            isChampion: true,
          },
        ],
      },
    ],
  },
];
