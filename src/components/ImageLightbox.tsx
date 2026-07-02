"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageLightboxProps = {
  images: string[];
  index: number | null;
  alt: string;
  closeLabel: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function ImageLightbox({
  images,
  index,
  alt,
  closeLabel,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const reduceMotion = useReducedMotion();
  const open = index !== null && Boolean(images[index ?? 0]?.trim());
  const current = index ?? 0;
  const activeSrc = open ? images[current] : null;
  const hasNav = images.length > 1;

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && current > 0) onIndexChange(current - 1);
      if (e.key === "ArrowRight" && current < images.length - 1) onIndexChange(current + 1);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, current, images.length, onClose, onIndexChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            aria-label={closeLabel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 flex w-full max-w-5xl flex-col items-center"
            initial={{ scale: reduceMotion ? 1 : 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: reduceMotion ? 1 : 0.92, opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", damping: 30, stiffness: 340 }
            }
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -top-2 right-0 z-20 rounded-full bg-surface/90 p-2 text-ink shadow-lg transition-colors hover:bg-surface-elevated sm:-right-2 sm:-top-12"
              aria-label={closeLabel}
            >
              <X className="h-5 w-5" />
            </button>

            {hasNav && (
              <>
                <button
                  type="button"
                  disabled={current === 0}
                  onClick={() => onIndexChange(current - 1)}
                  className={cn(
                    "absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-surface/90 p-2 text-ink shadow-lg transition-colors hover:bg-surface-elevated disabled:pointer-events-none disabled:opacity-30 sm:-left-14",
                  )}
                  aria-label="Önceki görsel"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  disabled={current === images.length - 1}
                  onClick={() => onIndexChange(current + 1)}
                  className={cn(
                    "absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full bg-surface/90 p-2 text-ink shadow-lg transition-colors hover:bg-surface-elevated disabled:pointer-events-none disabled:opacity-30 sm:-right-14",
                  )}
                  aria-label="Sonraki görsel"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <div className="relative max-h-[85vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl">
              {activeSrc ? (
                <Image
                  key={activeSrc}
                  src={activeSrc}
                  alt={`${alt} ${current + 1}`}
                  width={1400}
                  height={1050}
                  className="mx-auto max-h-[85vh] w-auto object-contain"
                  unoptimized
                  priority
                />
              ) : null}
            </div>

            {hasNav && (
              <p className="mt-3 text-sm font-medium text-white/80">
                {current + 1} / {images.length}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
