import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inside The Valorant Clash Playbook',
  description:
    'Deep dive into the Valorant Clash strategy and mindset behind Tournament latest run.',
};

export default function ArticlePage() {
  return (
    <article>
      <section className="article-hero has-before">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <a href="/#news">News</a>
              </li>
              <li aria-current="page">Valorant Clash Playbook</li>
            </ol>
          </nav>

          <h1 className="h1 title">Inside The Valorant Clash Playbook</h1>
        </div>
      </section>
    </article>
  );
}
