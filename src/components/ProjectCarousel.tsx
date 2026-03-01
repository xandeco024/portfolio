'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types';
import { Section, SectionTitle } from './Section';
import { MediaModal } from './MediaModal';

interface ProjectCarouselProps {
  title: string;
  projects: Project[];
  id?: string;
}

export function ProjectCarousel({ title, projects, id }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (projects.length === 0) return null;

  const project = projects[currentIndex];
  const hasImage = project.images.length > 0;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-sand-dark py-20 md:py-24">
      <Section id={id} className="py-0!">
        <div className="px-4 md:px-8 lg:px-16 max-w-400 mx-auto">
          <SectionTitle>{title}</SectionTitle>

        <div className="flex items-center gap-4">
          {projects.length > 1 && (
            <button
              type="button"
              onClick={goToPrevious}
              className="hidden lg:flex shrink-0 p-3 text-ink-muted hover:text-ink transition-colors"
              aria-label="Projeto anterior"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1 min-h-96">
              <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                {project.subtitle}
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-ink md:text-3xl lg:text-4xl">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg line-clamp-3">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.slice(0, 6).map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 text-xs font-medium text-ink-muted bg-sand rounded-full"
                  >
                    {tool}
                  </span>
                ))}
                {project.tools.length > 6 && (
                  <span className="px-3 py-1 text-xs font-medium text-ink-muted">
                    +{project.tools.length - 6}
                  </span>
                )}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={`/projetos/${project.slug}`}
                  className="inline-flex items-center gap-2 text-ink hover:text-ink-soft transition-colors"
                >
                  <span>Ver detalhes</span>
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    <span>Visitar</span>
                  </a>
                )}

                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ink-muted hover:text-ink transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}
              </div>

              {projects.length > 1 && (
                <p className="mt-8 text-sm text-ink-muted">
                  {currentIndex + 1} / {projects.length}
                </p>
              )}
            </div>

            {hasImage && (
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div 
                  className="relative aspect-4/3 w-full overflow-hidden rounded-2xl cursor-pointer group"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-12 h-12 text-ink drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {projects.length > 1 && (
            <button
              type="button"
              onClick={goToNext}
              className="hidden lg:flex shrink-0 p-3 text-ink-muted hover:text-ink transition-colors"
              aria-label="Proximo projeto"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}
        </div>

        {projects.length > 1 && (
          <div className="flex lg:hidden justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={goToPrevious}
              className="p-2 text-ink-muted hover:text-ink transition-colors"
              aria-label="Projeto anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <span className="text-sm text-ink-muted self-center">
              {currentIndex + 1} / {projects.length}
            </span>
            <button
              type="button"
              onClick={goToNext}
              className="p-2 text-ink-muted hover:text-ink transition-colors"
              aria-label="Proximo projeto"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </Section>
    
    <MediaModal
      media={project.images}
      initialIndex={0}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={project.title}
    />
    </div>
  );
}
