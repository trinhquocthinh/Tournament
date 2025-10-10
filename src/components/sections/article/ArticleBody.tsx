'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useButtonRipple } from '@/hooks/useButtonRipple';

import './ArticleBody.scss';

interface ArticleBodyProps {
  content?: React.ReactNode;
}

export default function ArticleBody({ content }: ArticleBodyProps) {
  const { handleMouseMove } = useButtonRipple();

  return (
    <article className="article-body" id="article-start">
      <figure
        className="article-banner img-holder"
        style={{ '--width': 1200, '--height': 675 } as React.CSSProperties}
      >
        <Image
          src="assets/images/news-1.jpg"
          width={1200}
          height={675}
          alt="Valorant team celebrating victory"
          className="img-cover"
        />
      </figure>

      {content || (
        <>
          <p>
            In the opening rounds of the Valorant Clash, Unigine&apos;s roster
            unveiled a new tempo-focused playbook. The squad combined aggressive
            map control with data-driven executions, forcing opponents into
            impossible reads. Today we break down the decision trees, comms
            structure, and clutch utility coordination that secured the 2-0
            sweep.
          </p>

          <blockquote>
            &ldquo;Our goal was simple,&rdquo; explains in-game leader Nova.
            &ldquo;Set the pace early, make them react to us, and never give up
            the info advantage.&rdquo;
          </blockquote>

          <h2>Early Round Conditioning</h2>
          <p>
            The staff iterated on scrim footage to identify the first 30 seconds
            as the most volatile window. By layering recon darts with fast
            rotates, the team forced defenders to burn utility before site
            commitments. That energy carried throughout the series, with Unigine
            averaging two opening picks per round.
          </p>

          <h2>Utility Micro &amp; Comms Grid</h2>
          <p>
            Every execute in the playbook is tagged with a micro-timer: a shared
            language that keeps smoke fades, flashes, and post-plant utility
            on-script. Analysts track each call in real time, feeding
            adjustments into the next Tac Pause. It&apos;s a workflow inspired
            by racing pit walls and adapted for esports.
          </p>

          <figure className="article-inline">
            <Image
              src="assets/images/news-2.jpg"
              width={600}
              height={400}
              alt="Pro player strategizing at a gaming setup"
            />
            <figcaption>
              Analysts sync utilities through a shared timeline to keep executes
              razor-sharp.
            </figcaption>
          </figure>

          <h2>Where We Level Up Next</h2>
          <p>
            The Valorant Clash bracket only intensifies from here. Expect more
            double-controller looks, sharper lurk pressure, and surprise map
            picks as Unigine eyes the grand final. Want the live breakdowns? Tap
            into the tournament hub below for bracket updates and VOD drops.
          </p>

          <div className="article-cta">
            <Link
              href="/tournament"
              className="btn"
              data-btn
              onMouseMove={handleMouseMove}
            >
              View Tournament Hub
            </Link>
          </div>
        </>
      )}
    </article>
  );
}
