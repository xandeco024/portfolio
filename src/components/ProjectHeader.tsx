import Link from 'next/link';
import { Container } from './Container';

interface ProjectHeaderProps {
  title: string;
  subtitle: string;
}

export function ProjectHeader({ title, subtitle }: ProjectHeaderProps) {
  return (
    <header className="pb-12 pt-24 md:pb-16 md:pt-32">
      <Container>
        <Link
          href="/"
          className="mb-12 inline-block text-sm text-ink-muted transition-colors hover:text-ink"
        >
          Voltar
        </Link>
        <h1 className="text-3xl font-medium tracking-tight text-ink md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-lg text-ink-soft">
          {subtitle}
        </p>
      </Container>
    </header>
  );
}
