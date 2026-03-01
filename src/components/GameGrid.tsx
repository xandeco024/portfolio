import { Game } from '@/types';
import { Container } from './Container';
import { Section, SectionTitle } from './Section';
import { GameCard } from './GameCard';

interface GameGridProps {
  title: string;
  games: Game[];
  id?: string;
}

export function GameGrid({ title, games, id }: GameGridProps) {
  if (games.length === 0) return null;

  return (
    <Section id={id}>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://xandeco.itch.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-ink hover:text-ink-soft transition-colors"
          >
            <span>Ver todos os jogos</span>
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </Container>
    </Section>
  );
}
