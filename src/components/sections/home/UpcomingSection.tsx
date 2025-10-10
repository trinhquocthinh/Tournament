'use client';

import Image from 'next/image';
import Link from 'next/link';

import { upcomingGames } from '@/data/matches';
import useButtonRipple from '@/hooks/useButtonRipple';
import { useTournamentTabs } from '@/hooks/useTournamentTabs';
import './UpcomingSection.scss';

export default function UpcomingSection() {
  const { handleMouseMove } = useButtonRipple();
  const fallbackId = upcomingGames[0]?.id ?? 'default';
  const { activeTab, switchTab } = useTournamentTabs(fallbackId);
  const activeGame =
    upcomingGames.find(game => game.id === activeTab) ?? upcomingGames[0];

  if (!activeGame) {
    return null;
  }

  return (
    <section
      className="section upcoming"
      aria-labelledby="upcoming-label"
      id="tournament"
    >
      <div className="container">
        <p
          className="section-subtitle"
          id="upcoming-label"
          data-reveal="bottom"
        >
          Upcoming Matches
        </p>

        <h2 className="h2 section-title" data-reveal="bottom">
          Battles Extreme <br /> Masters{' '}
          <span className="span">Tournament</span>
        </h2>

        <p className="section-text" data-reveal="bottom">
          Our success in creating business solutions is due in large part to our
          talented and highly committed team.
        </p>

        <div
          className="upcoming-tabs"
          role="tablist"
          aria-label="Upcoming games"
          data-reveal="bottom"
        >
          {upcomingGames.map(game => {
            const isActive = game.id === activeGame.id;

            return (
              <button
                key={game.id}
                id={`upcoming-tab-${game.id}`}
                type="button"
                className={`upcoming-tab${isActive ? ' is-active' : ''}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`upcoming-panel-${game.id}`}
                onClick={() => switchTab(game.id)}
              >
                <span className="upcoming-tab__label">{game.label}</span>
                {game.description && (
                  <span className="upcoming-tab__sub">{game.description}</span>
                )}
              </button>
            );
          })}
        </div>

        <ol
          className="upcoming-list"
          id={`upcoming-panel-${activeGame.id}`}
          role="tabpanel"
          aria-labelledby={`upcoming-tab-${activeGame.id}`}
        >
          {activeGame.matches.map((match, index) => {
            const youtubeHref = match.socials.youtube ?? '#';
            const twitchHref = match.socials.twitch ?? '#';
            const displayDate =
              match.dateLabel ??
              (() => {
                const date = new Date(match.date);

                if (Number.isNaN(date.getTime())) {
                  return match.date;
                }

                return new Intl.DateTimeFormat('en-US', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                }).format(date);
              })();

            return (
              <li
                key={match.id}
                className="upcoming-item"
                data-active={index === 0 ? 'primary' : undefined}
              >
                <div
                  className="upcoming-card left has-before"
                  data-reveal="left"
                >
                  <Image
                    src={match.leftTeam.logo}
                    width={200}
                    height={195}
                    loading="lazy"
                    quality={100}
                    alt={match.leftTeam.name}
                    className="card-banner"
                  />

                  <h3 className="h3 card-title">{match.leftTeam.name}</h3>

                  <div className="card-meta">
                    {match.leftTeam.group} | {match.leftTeam.match}
                  </div>
                </div>

                <div className="upcoming-time" data-reveal="bottom">
                  <time className="time" dateTime={match.time}>
                    {match.time}
                  </time>

                  <time className="date" dateTime={match.date}>
                    {displayDate}
                  </time>

                  <div className="social-wrapper">
                    <Link
                      href={youtubeHref}
                      className="social-link"
                      aria-label="Watch on YouTube"
                    >
                      <ion-icon name="logo-youtube"></ion-icon>
                    </Link>

                    <Link
                      href={twitchHref}
                      className="social-link"
                      aria-label="Watch on Twitch"
                    >
                      <ion-icon name="logo-twitch"></ion-icon>
                    </Link>
                  </div>
                </div>

                <div
                  className="upcoming-card right has-before"
                  data-reveal="right"
                >
                  <Image
                    src={match.rightTeam.logo}
                    width={200}
                    height={195}
                    loading="lazy"
                    quality={100}
                    alt={match.rightTeam.name}
                    className="card-banner"
                  />

                  <h3 className="h3 card-title">{match.rightTeam.name}</h3>

                  <div className="card-meta">
                    {match.rightTeam.group} | {match.rightTeam.match}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="upcoming-footer" data-reveal="bottom">
          <Link
            href="/tournament"
            className="btn btn-primary see-results"
            data-btn
            onMouseMove={handleMouseMove}
          >
            See full results
          </Link>
        </div>
      </div>
    </section>
  );
}
