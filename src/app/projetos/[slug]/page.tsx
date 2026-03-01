import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  ProjectHeader,
  ProjectImages,
  ProjectContent,
  ProjectTools,
  Footer,
} from '@/components';
import { getProjectBySlug, projects } from '@/data/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Projeto nao encontrado | Xand',
    };
  }

  return {
    title: `${project.title} | Xand`,
    description: project.description,
    openGraph: {
      title: `${project.title} | Xand`,
      description: project.description,
      type: 'article',
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectHeader title={project.title} subtitle={project.subtitle} />
      <ProjectImages images={project.images} title={project.title} />
      <ProjectContent
        problem={project.problem}
        construction={project.construction}
        decisions={project.decisions}
        result={project.result}
      />
      <ProjectTools tools={project.tools} />
      <Footer />
    </main>
  );
}
