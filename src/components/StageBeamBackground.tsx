"use client";

import { useMemo, type CSSProperties } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type BeamSpec = {
  angle: number;
  width: number;
  delay: number;
  duration: number;
  layer: "primary" | "secondary";
};

const PRIMARY_BEAMS: BeamSpec[] = [
  { angle: -52, width: 88, delay: 0, duration: 4.2, layer: "primary" },
  { angle: -40, width: 72, delay: 0.35, duration: 3.8, layer: "primary" },
  { angle: -28, width: 64, delay: 0.7, duration: 4.5, layer: "primary" },
  { angle: -16, width: 56, delay: 0.15, duration: 3.6, layer: "primary" },
  { angle: -6, width: 48, delay: 0.5, duration: 4.1, layer: "primary" },
  { angle: 6, width: 48, delay: 0.25, duration: 3.9, layer: "primary" },
  { angle: 16, width: 56, delay: 0.6, duration: 4.3, layer: "primary" },
  { angle: 28, width: 64, delay: 0.1, duration: 3.7, layer: "primary" },
  { angle: 40, width: 72, delay: 0.45, duration: 4.4, layer: "primary" },
  { angle: 52, width: 88, delay: 0.8, duration: 4, layer: "primary" },
];

const SECONDARY_BEAMS: BeamSpec[] = [
  { angle: -34, width: 104, delay: 0.2, duration: 5.5, layer: "secondary" },
  { angle: -12, width: 80, delay: 0.55, duration: 5.1, layer: "secondary" },
  { angle: 0, width: 96, delay: 0.9, duration: 5.8, layer: "secondary" },
  { angle: 12, width: 80, delay: 0.3, duration: 5.2, layer: "secondary" },
  { angle: 34, width: 104, delay: 0.65, duration: 5.6, layer: "secondary" },
];

const PRISM_BOKEH = [
  { id: 0, left: "8%", top: "42%", size: 5, delay: 0 },
  { id: 1, left: "22%", top: "28%", size: 3, delay: 2.1 },
  { id: 2, left: "38%", top: "18%", size: 4, delay: 0.8 },
  { id: 3, left: "55%", top: "24%", size: 6, delay: 3.2 },
  { id: 4, left: "68%", top: "15%", size: 3, delay: 1.4 },
  { id: 5, left: "82%", top: "32%", size: 5, delay: 2.8 },
  { id: 6, left: "92%", top: "22%", size: 4, delay: 0.5 },
  { id: 7, left: "45%", top: "38%", size: 3, delay: 4 },
] as const;

type StageBeamBackgroundProps = {
  className?: string;
  variant?: "adaptive" | "cinema";
  subtle?: boolean;
};

function BeamRig({
  beams,
  reduceMotion,
  subtle,
  className,
}: {
  beams: BeamSpec[];
  reduceMotion: boolean | null;
  subtle?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("stage-beam-rig", !reduceMotion && "stage-beam-rig--animate", className)}>
      {beams.map((beam) => (
        <span
          key={`${beam.layer}-${beam.angle}`}
          className={cn(
            "stage-beam-ray",
            beam.layer === "secondary" && "stage-beam-ray--soft",
            subtle && "stage-beam-ray--subtle",
            !reduceMotion && "stage-beam-ray--animate",
          )}
          style={
            {
              "--beam-angle": `${beam.angle}deg`,
              "--beam-width": `${beam.width}px`,
              "--beam-delay": `${beam.delay}s`,
              "--beam-duration": `${beam.duration}s`,
            } as CSSProperties
          }
        >
          <span className="stage-beam-ray__glow" />
          <span className="stage-beam-ray__core" />
        </span>
      ))}
    </div>
  );
}

function DarkBeamScene({ subtle, reduceMotion }: { subtle: boolean; reduceMotion: boolean | null }) {
  const beams = useMemo(() => [...PRIMARY_BEAMS, ...SECONDARY_BEAMS], []);

  return (
    <div className="stage-beam-scene__dark absolute inset-0">
      <div className="stage-beam-scene__sky" />
      <div className="stage-beam-scene__horizon" />
      <BeamRig beams={beams} reduceMotion={reduceMotion} subtle={subtle} />
      <BeamRig
        beams={SECONDARY_BEAMS}
        reduceMotion={reduceMotion}
        subtle
        className="stage-beam-rig--far opacity-60"
      />
      <div className="stage-beam-scene__haze stage-beam-scene__haze--left" />
      <div className="stage-beam-scene__haze stage-beam-scene__haze--right" />
      <div className="stage-beam-scene__source" />
      <div className="stage-beam-scene__floor-glow" />
    </div>
  );
}

/** Açık tema: soyut prism horizon — spektrum + cyclorama + bokeh */
function LightPrismScene({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <div className="light-prism-scene absolute inset-0">
      <div className="light-prism-scene__canvas" />

      <div
        className={cn(
          "light-prism-scene__spectrum",
          !reduceMotion && "light-prism-scene__spectrum--animate",
        )}
      />

      <div
        className={cn(
          "light-prism-scene__cyclo light-prism-scene__cyclo--left",
          !reduceMotion && "light-prism-scene__cyclo--animate",
        )}
      />
      <div
        className={cn(
          "light-prism-scene__cyclo light-prism-scene__cyclo--center",
          !reduceMotion && "light-prism-scene__cyclo--animate",
        )}
        style={{ animationDelay: "2s" }}
      />
      <div
        className={cn(
          "light-prism-scene__cyclo light-prism-scene__cyclo--right",
          !reduceMotion && "light-prism-scene__cyclo--animate",
        )}
        style={{ animationDelay: "4s" }}
      />

      <svg
        className="light-prism-scene__rays"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden
      >
        <defs>
          <linearGradient id="prism-ray-warm" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(244,111,44,0)" />
            <stop offset="40%" stopColor="rgba(244,111,44,0.12)" />
            <stop offset="100%" stopColor="rgba(244,111,44,0)" />
          </linearGradient>
          <linearGradient id="prism-ray-cool" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(120,160,220,0)" />
            <stop offset="45%" stopColor="rgba(120,160,220,0.08)" />
            <stop offset="100%" stopColor="rgba(120,160,220,0)" />
          </linearGradient>
        </defs>
        <path
          className={cn("light-prism-scene__ray", !reduceMotion && "light-prism-scene__ray--animate")}
          d="M 280 0 Q 400 200 520 380"
          fill="url(#prism-ray-cool)"
        />
        <path
          className={cn("light-prism-scene__ray", !reduceMotion && "light-prism-scene__ray--animate")}
          style={{ animationDelay: "3s" }}
          d="M 620 0 Q 720 180 720 380"
          fill="url(#prism-ray-warm)"
        />
        <path
          className={cn("light-prism-scene__ray", !reduceMotion && "light-prism-scene__ray--animate")}
          style={{ animationDelay: "1.5s" }}
          d="M 1160 0 Q 1040 200 920 380"
          fill="url(#prism-ray-cool)"
        />
      </svg>

      <div className="light-prism-scene__horizon" />
      <div
        className={cn(
          "light-prism-scene__reflection",
          !reduceMotion && "light-prism-scene__reflection--animate",
        )}
      />

      {PRISM_BOKEH.map((dot) => (
        <span
          key={dot.id}
          className={cn(
            "light-prism-scene__bokeh",
            !reduceMotion && "light-prism-scene__bokeh--animate",
          )}
          style={
            {
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              "--bokeh-delay": `${dot.delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function StageBeamBackground({
  className,
  variant = "adaptive",
  subtle = false,
}: StageBeamBackgroundProps) {
  const reduceMotion = useReducedMotion();
  const isAdaptive = variant === "adaptive";

  return (
    <div
      className={cn(
        "stage-beam-scene pointer-events-none absolute inset-0 overflow-hidden",
        isAdaptive ? "stage-beam-scene--adaptive" : "stage-beam-scene--cinema",
        subtle && "stage-beam-scene--subtle",
        className,
      )}
      aria-hidden
    >
      <DarkBeamScene subtle={subtle} reduceMotion={reduceMotion} />
      {isAdaptive ? <LightPrismScene reduceMotion={reduceMotion} /> : null}
    </div>
  );
}
