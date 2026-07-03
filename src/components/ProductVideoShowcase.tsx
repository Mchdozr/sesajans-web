"use client";

import { useRef, useState } from "react";
import { Play, Film } from "lucide-react";
import { StageBeamBackground } from "@/components/StageBeamBackground";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/context";

type ProductVideoShowcaseProps = {
  videos: string[];
  productName: string;
  poster?: string;
};

export function ProductVideoShowcase({
  videos,
  productName,
  poster,
}: ProductVideoShowcaseProps) {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useI18n();

  if (!videos.length) return null;

  const activeSrc = videos[active];

  function selectVideo(index: number) {
    setActive(index);
    const el = videoRef.current;
    if (el) {
      el.pause();
      el.load();
    }
  }

  return (
    <section
      id="urun-videolari"
      className="scroll-mt-20 border-b border-theme bg-gradient-to-b from-brand/10 via-surface-deep to-surface"
    >
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              <Film className="h-3.5 w-3.5" />
              {t.productDetail.livePerformance}
            </span>
            <h2 className="mt-3 font-display text-2xl font-bold text-ink sm:text-3xl">
              {productName} — {t.productDetail.stageFootage}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-ink-muted sm:text-base">
              {t.productDetail.videoDesc}
            </p>
          </div>
          {videos.length > 1 && (
            <p className="text-sm font-medium text-brand">
              {active + 1} / {videos.length} {t.common.video.toLowerCase()}
            </p>
          )}
        </div>

        <div className="glow-border relative overflow-hidden rounded-3xl border border-brand/25 bg-black shadow-[0_0_80px_-20px_rgba(244,111,44,0.45)]">
          <StageBeamBackground variant="cinema" subtle />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-surface-deep/40 via-transparent to-transparent" />
          <video
            ref={videoRef}
            key={activeSrc}
            src={activeSrc}
            controls
            playsInline
            preload="metadata"
            poster={poster}
            className="relative z-[2] aspect-video w-full bg-transparent object-contain lg:max-h-[min(70vh,720px)]"
            aria-label={`${productName} ${t.productDetail.videoN} ${active + 1}`}
          />
        </div>

        {videos.length > 1 && (
          <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
            {videos.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => selectVideo(i)}
                className={cn(
                  "flex min-w-[140px] shrink-0 items-center gap-2 rounded-xl border px-4 py-3 text-left text-sm transition-all",
                  active === i
                    ? "border-brand bg-brand/20 text-ink"
                    : "border-theme bg-surface-elevated/60 text-ink-muted hover:border-brand/40 hover:text-ink",
                )}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                    active === i ? "bg-brand text-white" : "bg-surface-deep text-brand",
                  )}
                >
                  <Play className="h-4 w-4 fill-current" />
                </span>
                <span className="font-medium">
                  {t.productDetail.videoN} {i + 1}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
