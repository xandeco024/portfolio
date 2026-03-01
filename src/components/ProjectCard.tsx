import Link from 'next/link';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative">
      <Link href={`/projetos/${project.slug}`} className="block py-6 -my-6">
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1">
            <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
              {project.subtitle}
            </p>
            <h3 className="mt-2 text-xl font-medium text-ink md:text-2xl">
              {project.title}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-ink-soft">
              {project.description}
            </p>
          </div>
          <span className="mt-6 flex items-center gap-2 text-sm text-ink-muted transition-colors group-hover:text-ink">
            <span className="hidden sm:inline">Ver</span>
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-ink-muted/20 transition-colors group-hover:bg-ink-muted/40" />
      </Link>
    </article>
  );
}
