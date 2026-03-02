"use client";

import { useState } from "react";
import Image from "next/image";
import { SecondaryProject } from "@/types";
import { ProjectViewModal } from "./ProjectViewModal";

interface SecondaryProjectCardProps {
  project: SecondaryProject;
}

export function SecondaryProjectCard({ project }: SecondaryProjectCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const totalImages = project.images.length;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="group">
      <div
        className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-sand-dark mb-3 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={project.images[currentIndex]}
          alt={`${project.title} - Imagem ${currentIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />

        {/* Status badge */}
        {project.status === "em-progresso" && (
          <div className="absolute top-3 right-3 px-3 py-1 bg-ink text-sand text-xs font-medium rounded-full">
            Em progresso
          </div>
        )}

        {/* Navigation arrows - only show if multiple images */}
        {totalImages > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-sand opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 drop-shadow-lg"
              aria-label="Imagem anterior"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-sand opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 drop-shadow-lg"
              aria-label="Proxima imagem"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-sand w-3"
                      : "bg-sand/50 hover:bg-sand/75"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <h3 className="text-lg font-medium text-ink">{project.title}</h3>

      {project.tools && project.tools.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                project.category === "agroforest"
                  ? "text-green bg-green/10"
                  : project.category === "woodwork"
                    ? "text-purple bg-purple/10"
                    : "text-ink-muted bg-sand-dark"
              }`}
            >
              {tool}
            </span>
          ))}
        </div>
      )}

      <ProjectViewModal
        project={project}
        initialIndex={currentIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
