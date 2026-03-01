import { Container } from './Container';

interface ProjectToolsProps {
  tools: string[];
}

export function ProjectTools({ tools }: ProjectToolsProps) {
  if (tools.length === 0) return null;

  return (
    <section className="py-12 md:py-16">
      <Container>
        <p className="text-sm text-ink-muted">
          <span className="font-medium">Ferramentas utilizadas:</span>{' '}
          {tools.join(', ')}
        </p>
      </Container>
    </section>
  );
}
