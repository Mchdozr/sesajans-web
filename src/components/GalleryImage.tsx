"use client";

import Image from "next/image";
import { ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

type GalleryImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  zoomLabel: string;
  onZoom: () => void;
};

export function GalleryImage({
  src,
  alt,
  sizes,
  className,
  zoomLabel,
  onZoom,
}: GalleryImageProps) {
  return (
    <button
      type="button"
      onClick={onZoom}
      aria-label={zoomLabel}
      className={cn(
        "group relative cursor-zoom-in overflow-hidden border border-theme focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none"
        sizes={sizes}
      />
      <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15 motion-reduce:transition-none" />
      <span className="pointer-events-none absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-lg bg-black/50 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 motion-reduce:opacity-100">
        <ZoomIn className="h-4 w-4" />
      </span>
    </button>
  );
}
