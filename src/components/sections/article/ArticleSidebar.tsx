'use client';

import Link from 'next/link';

import { useButtonRipple } from '@/hooks/useButtonRipple';
import './ArticleSidebar.scss';

interface RelatedArticle {
  title: string;
  date: string;
  url: string;
}

const relatedArticles: RelatedArticle[] = [
  {
    title: 'How The Apex Legends Cup Was Won',
    date: '2025-09-22',
    url: '/article',
  },
  {
    title: 'League of Heroes: Meta Checkpoint',
    date: '2025-09-04',
    url: '/article',
  },
  {
    title: 'Building The Perfect Scrim Routine',
    date: '2025-08-18',
    url: '/article',
  },
];

export default function ArticleSidebar() {
  const { handleMouseMove } = useButtonRipple();

  return (
    <aside className="article-sidebar" aria-label="Related reads">
      <div className="sidebar-card">
        <h2 className="h3">Latest Drops</h2>
        <ul>
          {relatedArticles.map(article => (
            <li key={article.title}>
              <Link href={article.url}>{article.title}</Link>
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-card">
        <h2 className="h3">Need A Team?</h2>
        <p>
          We&apos;re drafting creators, analysts, and coaches. Submit your reel
          and let&apos;s build the next highlight.
        </p>
        <Link
          href="/#join"
          className="btn"
          data-btn
          onMouseMove={handleMouseMove}
        >
          Join The Squad
        </Link>
      </div>
    </aside>
  );
}
