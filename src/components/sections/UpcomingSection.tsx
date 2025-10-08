'use client';

import Image from 'next/image';
import Link from 'next/link';

import './UpcomingSection.scss';

export default function UpcomingSection() {
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

        <ol className="upcoming-list">
          <li className="upcoming-item">
            <div className="upcoming-card left has-before" data-reveal="left">
              <Image
                src="/assets/images/team-logo-1.png"
                width={86}
                height={81}
                loading="lazy"
                alt="Purple Death Cadets"
                className="card-banner"
              />

              <h3 className="h3 card-title">Purple Death Cadets</h3>

              <div className="card-meta">Group 04 | Match 06th</div>
            </div>

            <div className="upcoming-time" data-reveal="bottom">
              <time className="time" dateTime="10:00">
                10:00
              </time>

              <time className="date" dateTime="2024-05-25">
                25TH May 2024
              </time>

              <div className="social-wrapper">
                <Link href="https://youtube.com" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </Link>

                <Link href="https://twitch.tv" className="social-link">
                  <ion-icon name="logo-twitch"></ion-icon>
                </Link>
              </div>
            </div>

            <div className="upcoming-card right has-before" data-reveal="right">
              <Image
                src="/assets/images/team-logo-2.png"
                width={86}
                height={81}
                loading="lazy"
                alt="Trigger Brain Squad"
                className="card-banner"
              />

              <h3 className="h3 card-title">Trigger Brain Squad</h3>

              <div className="card-meta">Group 04 | Match 06th</div>
            </div>
          </li>

          <li className="upcoming-item">
            <div className="upcoming-card left has-before" data-reveal="left">
              <Image
                src="/assets/images/team-logo-3.png"
                width={86}
                height={81}
                loading="lazy"
                alt="The Black Hat Hackers"
                className="card-banner"
              />

              <h3 className="h3 card-title">The Black Hat Hackers</h3>

              <div className="card-meta">Group 05 | Match 02nd</div>
            </div>

            <div className="upcoming-time" data-reveal="bottom">
              <time className="time" dateTime="12:30">
                12:30
              </time>

              <time className="date" dateTime="2024-01-10">
                10TH Jan 2024
              </time>

              <div className="social-wrapper">
                <Link href="https://youtube.com" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </Link>

                <Link href="https://twitch.tv" className="social-link">
                  <ion-icon name="logo-twitch"></ion-icon>
                </Link>
              </div>
            </div>

            <div className="upcoming-card right has-before" data-reveal="right">
              <Image
                src="/assets/images/team-logo-4.png"
                width={86}
                height={81}
                loading="lazy"
                alt="Your Worst Nightmare"
                className="card-banner"
              />

              <h3 className="h3 card-title">Your Worst Nightmare</h3>

              <div className="card-meta">Group 05 | Match 02nd</div>
            </div>
          </li>

          <li className="upcoming-item">
            <div className="upcoming-card left has-before" data-reveal="left">
              <Image
                src="/assets/images/team-logo-5.png"
                width={86}
                height={81}
                loading="lazy"
                alt="Witches And Quizards"
                className="card-banner"
              />

              <h3 className="h3 card-title">Witches And Quizards</h3>

              <div className="card-meta">Group 02 | Match 03rd</div>
            </div>

            <div className="upcoming-time" data-reveal="bottom">
              <time className="time" dateTime="04:20">
                04:20
              </time>

              <time className="date" dateTime="2024-12-15">
                15th Dec 2024
              </time>

              <div className="social-wrapper">
                <Link href="https://youtube.com" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </Link>

                <Link href="https://twitch.tv" className="social-link">
                  <ion-icon name="logo-twitch"></ion-icon>
                </Link>
              </div>
            </div>

            <div className="upcoming-card right has-before" data-reveal="right">
              <Image
                src="/assets/images/team-logo-6.png"
                width={86}
                height={81}
                loading="lazy"
                alt="Resting Bitch Faces"
                className="card-banner"
              />

              <h3 className="h3 card-title">Resting Bitch Faces</h3>

              <div className="card-meta">Group 02 | Match 03rd</div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
