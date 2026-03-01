import Link from 'next/link';
import { Container } from '@/components';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center">
      <Container>
        <h1 className="text-3xl font-medium tracking-tight text-ink md:text-4xl">
          Pagina nao encontrada
        </h1>
        <p className="mt-4 text-lg text-ink-soft">
          O que voce procura nao esta aqui.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-ink transition-colors hover:text-ink-soft"
        >
          Voltar ao inicio
        </Link>
      </Container>
    </main>
  );
}
