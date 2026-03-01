import { Project } from '@/types';
import { Container } from './Container';
import { Section, SectionTitle } from './Section';
import { ProjectCard } from './ProjectCard';

interface ProjectListProps {
  title: string;
  projects: Project[];
  id?: string;
}

export function ProjectList({ title, projects, id }: ProjectListProps) {
  if (projects.length === 0) return null;

  return (
    <Section id={id}>
      <Container>
        <SectionTitle>{title}</SectionTitle>
        <div className="space-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
