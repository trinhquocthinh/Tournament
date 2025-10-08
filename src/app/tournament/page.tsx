import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tournament Bracket Hub',
  description:
    'Follow Tournament multi-title brackets with live standings, brackets, and match recaps.',
};

export default function TournamentPage() {
  return (
    <article>
      <section className="bracket-hero has-before">
        <div className="container">
          <h1 className="h1 title">Tournament Masters Bracket Hub</h1>
          <p className="section-text">
            Dive into every bracket across Valorant Clash, Apex Legends Cup, and
            League of Heroes Gauntlet.
          </p>
        </div>
      </section>
    </article>
  );
}
