"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "./Container";
import { MediaModal } from "./MediaModal";

interface ProjectImagesProps {
  images: string[];
  title: string;
}

export function ProjectImages({ images, title }: ProjectImagesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) return null;

  const isVideo = (src: string) =>
    src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");

  const handleMediaClick = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="space-y-6">
          {images.map((src, index) => {
            const isVid = isVideo(src);

            return (
              <div
                key={index}
                className="relative aspect-video w-full overflow-hidden rounded-lg bg-sand-dark cursor-pointer group"
                onClick={() => handleMediaClick(index)}
                aria-label={`${title} - ${isVid ? "Vídeo" : "Imagem"} ${index + 1}`}
              >
                {isVid ? (
                  <video
                    src={src}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                  >
                    Seu navegador não suporta vídeos.
                  </video>
                ) : (
                  <Image
                    src={src}
                    alt={`${title} - Imagem ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    unoptimized
                  />
                )}

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg
                      className="w-12 h-12 text-sand drop-shadow-lg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <MediaModal
        media={images}
        initialIndex={selectedIndex}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      />
    </section>
  );
}
