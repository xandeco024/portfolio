"use client";

import { useState } from "react";
import Image from "next/image";
import { Game } from "@/types";
import { ImageModal } from "./ImageModal";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="group">
      <div
        className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-sand-dark mb-4 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={game.image}
          alt={game.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          unoptimized
        />
      </div>

      <h3 className="text-xl font-medium text-ink mb-2">{game.title}</h3>

      <p className="text-sm text-ink-muted mb-3 line-clamp-2">
        {game.description}
      </p>

      <p className="text-xs text-ink-soft mb-3 italic">{game.highlight}</p>

      <div className="flex flex-wrap gap-2">
        {game.tools.map((tool) => (
          <span
            key={tool}
            className="px-2 py-1 text-xs font-medium text-ink-muted bg-sand-dark rounded-full"
          >
            {tool}
          </span>
        ))}
      </div>

      {game.link && (
        <div className="mt-4">
          <a
            href={game.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-ink-soft hover:text-ink transition-colors"
          >
            <span>Jogar no itch.io</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      )}

      <ImageModal
        images={[game.image]}
        initialIndex={0}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={game.title}
      />
    </div>
  );
}
