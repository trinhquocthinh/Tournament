'use client';

import Link from 'next/link';

import { useButtonRipple } from '@/hooks/useButtonRipple';

import './BracketRecap.scss';

interface ScheduleItem {
  event: string;
  date: string;
  time: string;
  platform: string;
}

interface BracketRecapProps {
  schedule?: ScheduleItem[];
  updateText?: string;
  articleLink?: string;
}

const defaultSchedule: ScheduleItem[] = [
  {
    event: 'Valorant Clash Grand Final',
    date: 'May 25',
    time: '18:00 UTC',
    platform: 'on Twitch & YouTube',
  },
  {
    event: 'Apex Legends Cup Finals',
    date: 'Jul 18',
    time: '20:00 UTC',
    platform: 'with co-streamers',
  },
  {
    event: 'League of Heroes Gauntlet',
    date: 'Aug 18',
    time: '16:00 UTC',
    platform: 'best-of-five',
  },
];

export default function BracketRecap({
  schedule = defaultSchedule,
  updateText = 'Follow our analysts for live stat dumps, pick-ban breakdowns, and map veto reactions plus exclusive behind the scenes stories from bootcamp.',
  articleLink = '/article',
}: BracketRecapProps) {
  const { handleMouseMove } = useButtonRipple();

  return (
    <section className="bracket-recap" aria-label="Event recaps">
      <div className="recap-card">
        <h2 className="h3">Broadcast Schedule</h2>
        <ul>
          {schedule.map((item, index) => (
            <li key={index}>
              <span>{item.event}:</span> {item.date} · {item.time}{' '}
              {item.platform}
            </li>
          ))}
        </ul>
      </div>
      <div className="recap-card">
        <h2 className="h3">Latest Updates</h2>
        <p>{updateText}</p>
        <Link
          href={articleLink}
          className="btn"
          data-btn
          onMouseMove={handleMouseMove}
        >
          Read The Latest Blog
        </Link>
      </div>
    </section>
  );
}
