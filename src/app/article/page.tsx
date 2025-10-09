import type { Metadata } from 'next';

import ArticleBody from '@/components/sections/article/ArticleBody';
import ArticleHero from '@/components/sections/article/ArticleHero';
import ArticleSidebar from '@/components/sections/article/ArticleSidebar';

export const metadata: Metadata = {
  title: 'Inside The Valorant Clash Playbook',
  description:
    'Deep dive into the Valorant Clash strategy and mindset behind Unigine latest run.',
};

export default function ArticlePage() {
  return (
    <article>
      <ArticleHero
        title="Inside The Valorant Clash Playbook"
        date="2025-10-07"
        author="Elliot Alderson"
        readTime="7 min read"
        tags={['Strategy', 'Valorant', 'Tournament']}
      />

      <section className="article-details" aria-labelledby="article-start">
        <div className="container article-layout">
          <ArticleBody />
          <ArticleSidebar />
        </div>
      </section>
    </article>
  );
}
