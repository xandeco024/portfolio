import { SecondaryProject } from "@/types";
import { Container } from "./Container";
import { Section, SectionTitle } from "./Section";
import { SecondaryProjectCard } from "./SecondaryProjectCard";

interface SecondaryProjectGridProps {
  title: string;
  projects: SecondaryProject[];
  id?: string;
}

export function SecondaryProjectGrid({
  title,
  projects,
  id,
}: SecondaryProjectGridProps) {
  if (projects.length === 0) return null;

  return (
    <Section id={id}>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project) => (
            <SecondaryProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
