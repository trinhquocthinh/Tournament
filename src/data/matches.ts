import type { UpcomingMatch } from '@/types';

export const upcomingMatches: UpcomingMatch[] = [
  {
    id: '1',
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
    socials: {
      youtube: '#',
      twitch: '#',
    },
  },
  {
    id: '2',
    leftTeam: {
      name: 'The Black Hat Hackers',
      logo: '/assets/images/team-logo-3.png',
      group: 'Group 05',
      match: 'Match 02nd',
    },
    rightTeam: {
      name: 'Your Worst Nightmare',
      logo: '/assets/images/team-logo-4.png',
      group: 'Group 05',
      match: 'Match 02nd',
    },
    time: '12:30',
    date: '2024-01-10',
    socials: {
      youtube: '#',
      twitch: '#',
    },
  },
  {
    id: '3',
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
    time: '04:20',
    date: '2024-12-15',
    socials: {
      youtube: '#',
      twitch: '#',
    },
  },
];
