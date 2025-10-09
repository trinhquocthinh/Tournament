'use client';

import Link from 'next/link';

import './ArticleHero.scss';

interface ArticleHeroProps {
  title: string;
  date: string;
  author: string;
  readTime?: string;
  tags?: string[];
}

export default function ArticleHero({
  title,
  date,
  author,
  readTime = '7 min read',
  tags = ['Strategy', 'Valorant', 'Tournament'],
}: ArticleHeroProps) {
  return (
    <section className="article-hero has-before">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/#news">News</Link>
            </li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>

        <h1 className="h1 title">{title}</h1>

        <div className="article-meta">
          <div className="article-meta-item">
            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
            <time dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>
          <div className="article-meta-item">
            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
            <span>{author}</span>
          </div>
          <div className="article-meta-item">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
            <span>{readTime}</span>
          </div>
        </div>

        <ul className="article-tags">
          {tags.map(tag => (
            <li key={tag}>
              <Link href={`#${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                {tag}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
