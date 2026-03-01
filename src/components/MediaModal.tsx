"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface MediaModalProps {
  media: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export function MediaModal({
  media,
  initialIndex = 0,
  isOpen,
  onClose,
  title,
}: MediaModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const totalMedia = media.length;

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevMedia();
      if (e.key === "ArrowRight") nextMedia();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex]);

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev + 1) % totalMedia);
  };

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev - 1 + totalMedia) % totalMedia);
  };

  const isVideo = (src: string) =>
    src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");

  if (!isOpen) return null;

  const currentMedia = media[currentIndex];
  const isCurrentVideo = isVideo(currentMedia);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-6xl flex flex-col gap-4">
        {/* Header with title and close button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {title && (
              <h3 className="text-lg font-medium text-sand">{title}</h3>
            )}
            {totalMedia > 1 && (
              <span className="text-sm text-sand/70">
                {currentIndex + 1} / {totalMedia}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-sand hover:text-sand/80 transition-colors"
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
        </div>

        {/* Media container */}
        <div
          className="relative w-full h-[70vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-full">
            {isCurrentVideo ? (
              <video
                src={currentMedia}
                controls
                className="w-full h-full object-contain"
                autoPlay
                loop
              >
                Seu navegador não suporta vídeos.
              </video>
            ) : (
              <Image
                src={currentMedia}
                alt={`${title || "Mídia"} - ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
                quality={100}
                unoptimized
              />
            )}
          </div>

          {/* Navigation arrows - only show if multiple media */}
          {totalMedia > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevMedia();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-sand hover:scale-110 transition-transform drop-shadow-lg"
                aria-label="Mídia anterior"
              >
                <svg
                  className="w-8 h-8"
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
                onClick={(e) => {
                  e.stopPropagation();
                  nextMedia();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-sand hover:scale-110 transition-transform drop-shadow-lg"
                aria-label="Próxima mídia"
              >
                <svg
                  className="w-8 h-8"
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
            </>
          )}
        </div>

        {/* Media indicators */}
        {totalMedia > 1 && (
          <div className="flex justify-center gap-2">
            {media.map((src, index) => {
              const isVid = isVideo(src);
              return (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all relative ${
                    index === currentIndex
                      ? "bg-sand w-8"
                      : "bg-sand/30 w-2 hover:bg-sand/50"
                  }`}
                  aria-label={`Ir para ${isVid ? "vídeo" : "imagem"} ${index + 1}`}
                  title={isVid ? "Vídeo" : "Imagem"}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
