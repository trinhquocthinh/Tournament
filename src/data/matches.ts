import type { UpcomingGame } from '@/types';

export const upcomingGames: UpcomingGame[] = [
  {
    id: 'valorant',
    label: 'Valorant',
    description: 'Masters Reykjavík Qualifiers',
    matches: [
      {
        id: 'valorant-match-1',
        leftTeam: {
          name: 'Purple Death Cadets',
          logo: '/assets/images/team-logo-1.png',
          group: 'Group 04',
          match: 'Match 06th',
        },
        rightTeam: {
          name: 'Trigger Brain Squad',
          logo: '/assets/images/team-logo-2.png',
          group: 'Group 04',
          match: 'Match 06th',
        },
        time: '10:00',
        date: '2024-05-25',
        dateLabel: '25TH May 2024',
        socials: {
          youtube: 'https://youtube.com',
          twitch: 'https://twitch.tv',
        },
      },
      {
        id: 'valorant-match-2',
        leftTeam: {
          name: 'The Black Hat Hackers',
          logo: '/assets/images/team-logo-3.png',
          group: 'Group 01',
          match: 'Match 08th',
        },
        rightTeam: {
          name: 'Your Worst Nightmare',
          logo: '/assets/images/team-logo-4.png',
          group: 'Group 01',
          match: 'Match 08th',
        },
        time: '14:30',
        date: '2024-05-26',
        dateLabel: '26TH May 2024',
        socials: {
          youtube: 'https://youtube.com',
          twitch: 'https://twitch.tv',
        },
      },
    ],
  },
  {
    id: 'counter-strike',
    label: 'CS:GO',
    description: 'Road to Major Stage',
    matches: [
      {
        id: 'csgo-match-1',
        leftTeam: {
          name: 'Witches And Quizards',
          logo: '/assets/images/team-logo-5.png',
          group: 'Group 02',
          match: 'Match 03rd',
        },
        rightTeam: {
          name: 'Resting Bitch Faces',
          logo: '/assets/images/team-logo-6.png',
          group: 'Group 02',
          match: 'Match 03rd',
        },
        time: '16:00',
        date: '2024-05-30',
        dateLabel: '30TH May 2024',
        socials: {
          youtube: 'https://youtube.com',
          twitch: 'https://twitch.tv',
        },
      },
      {
        id: 'csgo-match-2',
        leftTeam: {
          name: 'Trigger Brain Squad',
          logo: '/assets/images/team-logo-2.png',
          group: 'Group 03',
          match: 'Match 05th',
        },
        rightTeam: {
          name: 'Purple Death Cadets',
          logo: '/assets/images/team-logo-1.png',
          group: 'Group 03',
          match: 'Match 05th',
        },
        time: '18:40',
        date: '2024-06-02',
        dateLabel: '02ND Jun 2024',
        socials: {
          youtube: 'https://youtube.com',
          twitch: 'https://twitch.tv',
        },
      },
    ],
  },
  {
    id: 'overwatch',
    label: 'Overwatch 2',
    description: 'Champions Circuit Playoffs',
    matches: [
      {
        id: 'overwatch-match-1',
        leftTeam: {
          name: 'Your Worst Nightmare',
          logo: '/assets/images/team-logo-4.png',
          group: 'Group 07',
          match: 'Match 04th',
        },
        rightTeam: {
          name: 'Witches And Quizards',
          logo: '/assets/images/team-logo-5.png',
          group: 'Group 07',
          match: 'Match 04th',
        },
        time: '09:15',
        date: '2024-06-10',
        dateLabel: '10TH Jun 2024',
        socials: {
          youtube: 'https://youtube.com',
          twitch: 'https://twitch.tv',
        },
      },
      {
        id: 'overwatch-match-2',
        leftTeam: {
          name: 'Resting Bitch Faces',
          logo: '/assets/images/team-logo-6.png',
          group: 'Group 09',
          match: 'Match 01st',
        },
        rightTeam: {
          name: 'The Black Hat Hackers',
          logo: '/assets/images/team-logo-3.png',
          group: 'Group 09',
          match: 'Match 01st',
        },
        time: '11:45',
        date: '2024-06-12',
        dateLabel: '12TH Jun 2024',
        socials: {
          youtube: 'https://youtube.com',
          twitch: 'https://twitch.tv',
        },
      },
    ],
  },
];
