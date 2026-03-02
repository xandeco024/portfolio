"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { SecondaryProject } from "@/types";

interface ProjectViewModalProps {
  project: SecondaryProject;
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectViewModal({
  project,
  initialIndex = 0,
  isOpen,
  onClose,
}: ProjectViewModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const totalImages = project.images.length;

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: "color-mix(in srgb, var(--color-sand) 95%, transparent)" }}
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 flex items-center justify-center text-ink hover:text-ink-soft transition-colors"
        aria-label="Fechar modal"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div
        className="w-full max-w-6xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Text content - left side */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            {/* Status badge */}
            {project.status === "em-progresso" && (
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-ink text-sand rounded-full">
                Em progresso
              </span>
            )}

            <h2 className="text-3xl md:text-4xl font-semibold text-ink">
              {project.title}
            </h2>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-ink-soft">
              {project.description}
            </p>

            {project.tools && project.tools.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
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

            {totalImages > 1 && (
              <p className="mt-6 text-sm text-ink-muted">
                {currentIndex + 1} / {totalImages}
              </p>
            )}
          </div>

          {/* Image gallery - right side */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-sand-dark group">
              <Image
                src={project.images[currentIndex]}
                alt={`${project.title} - ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={100}
                unoptimized
              />

              {/* Navigation arrows */}
              {totalImages > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                    aria-label="Imagem anterior"
                  >
                    <svg
                      className="w-6 h-6 drop-shadow-lg"
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
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-ink opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                    aria-label="Proxima imagem"
                  >
                    <svg
                      className="w-6 h-6 drop-shadow-lg"
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
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentIndex
                            ? "bg-ink w-4"
                            : "bg-ink/30 w-1.5 hover:bg-ink/50"
                        }`}
                        aria-label={`Ir para imagem ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
