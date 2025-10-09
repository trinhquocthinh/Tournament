'use client';

import Image from 'next/image';
import './NewsSection.scss';
import Link from 'next/link';

export default function NewsSection() {
  return (
    <section className="section news" aria-label="our latest news" id="news">
      <div className="container">
        <p className="section-subtitle" data-reveal="bottom">
          What&apos;s On Our Mind
        </p>

        <h2 className="h2 section-title" data-reveal="bottom">
          News And <span className="span">Headlines</span>
        </h2>

        <p className="section-text" data-reveal="bottom">
          Our success in creating business solutions is due in large part to our
          talented and highly committed team.
        </p>

        <ul className="news-list">
          <li data-reveal="bottom">
            <div className="news-card">
              <figure
                className="card-banner img-holder"
                style={
                  { '--width': 600, '--height': 400 } as React.CSSProperties
                }
              >
                <Image
                  src="/assets/images/news-1.jpg"
                  width={600}
                  height={400}
                  loading="lazy"
                  alt="Innovative Business All Over The World."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <Link href="/article" className="card-tag">
                  Business
                </Link>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon
                      name="calendar-outline"
                      aria-hidden="true"
                    ></ion-icon>

                    <time className="card-meta-text" dateTime="2022-01-01">
                      Jan 01 2022
                    </time>
                  </li>

                  <li className="card-meta-item">
                    <ion-icon
                      name="person-outline"
                      aria-hidden="true"
                    ></ion-icon>

                    <p className="card-meta-text">Elliot Alderson</p>
                  </li>
                </ul>

                <h3 className="h3">
                  <Link href="/article" className="card-title">
                    Innovative Business All Over The World.
                  </Link>
                </h3>

                <p className="card-text">
                  Financial experts support or help you to to find out which way
                  you can raise your funds more...
                </p>

                <Link href="/article" className="link has-before">
                  Read More
                </Link>
              </div>
            </div>
          </li>

          <li data-reveal="bottom">
            <div className="news-card">
              <figure
                className="card-banner img-holder"
                style={
                  { '--width': 600, '--height': 400 } as React.CSSProperties
                }
              >
                <Image
                  src="/assets/images/news-2.jpg"
                  width={600}
                  height={400}
                  loading="lazy"
                  alt="How To Start Initiating An Startup In Few Days."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <Link href="/article" className="card-tag">
                  Startup
                </Link>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon
                      name="calendar-outline"
                      aria-hidden="true"
                    ></ion-icon>

                    <time className="card-meta-text" dateTime="2022-01-01">
                      Jan 01 2022
                    </time>
                  </li>

                  <li className="card-meta-item">
                    <ion-icon
                      name="person-outline"
                      aria-hidden="true"
                    ></ion-icon>

                    <p className="card-meta-text">Elliot Alderson</p>
                  </li>
                </ul>

                <h3 className="h3">
                  <Link href="/article" className="card-title">
                    How To Start Initiating An Startup In Few Days.
                  </Link>
                </h3>

                <p className="card-text">
                  Financial experts support or help you to to find out which way
                  you can raise your funds more...
                </p>

                <Link href="/article" className="link has-before">
                  Read More
                </Link>
              </div>
            </div>
          </li>

          <li data-reveal="bottom">
            <div className="news-card">
              <figure
                className="card-banner img-holder"
                style={
                  { '--width': 600, '--height': 400 } as React.CSSProperties
                }
              >
                <Image
                  src="/assets/images/news-3.jpg"
                  width={600}
                  height={400}
                  loading="lazy"
                  alt="Financial Experts Support Help You To Find Out."
                  className="img-cover"
                />
              </figure>

              <div className="card-content">
                <Link href="/article" className="card-tag">
                  Finance
                </Link>

                <ul className="card-meta-list">
                  <li className="card-meta-item">
                    <ion-icon
                      name="calendar-outline"
                      aria-hidden="true"
                    ></ion-icon>

                    <time className="card-meta-text" dateTime="2022-01-01">
                      Jan 01 2022
                    </time>
                  </li>

                  <li className="card-meta-item">
                    <ion-icon
                      name="person-outline"
                      aria-hidden="true"
                    ></ion-icon>

                    <p className="card-meta-text">Elliot Alderson</p>
                  </li>
                </ul>

                <h3 className="h3">
                  <Link href="/article" className="card-title">
                    Financial Experts Support Help You To Find Out.
                  </Link>
                </h3>

                <p className="card-text">
                  Financial experts support or help you to to find out which way
                  you can raise your funds more...
                </p>

                <Link href="/article" className="link has-before">
                  Read More
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
