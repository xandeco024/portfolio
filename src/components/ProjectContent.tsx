import { Container } from './Container';

interface ProjectSectionProps {
  title: string;
  content: string;
}

function ProjectSection({ title, content }: ProjectSectionProps) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-medium uppercase tracking-widest text-ink-muted">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-ink-soft md:text-lg md:leading-relaxed">
        {content}
      </p>
    </div>
  );
}

interface ProjectContentProps {
  problem: string;
  construction: string;
  decisions: string;
  result: string;
}

export function ProjectContent({
  problem,
  construction,
  decisions,
  result,
}: ProjectContentProps) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="max-w-2xl space-y-12">
          <ProjectSection title="Problema" content={problem} />
          <ProjectSection title="Construcao" content={construction} />
          <ProjectSection title="Decisoes importantes" content={decisions} />
          <ProjectSection title="Resultado" content={result} />
        </div>
      </Container>
    </section>
  );
}
