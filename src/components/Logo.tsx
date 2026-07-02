"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useHydrated } from "@/hooks/useHydrated";

const LOGO_LIGHT = "/brand/logo-light-horizontal.png";
const LOGO_DARK = "/brand/logo-dark-horizontal.png";

const HORIZONTAL_LOGO = { width: 500, height: 108, className: "h-10 w-auto min-w-[120px] max-w-[160px]" };
const LIGHT_LOGO = HORIZONTAL_LOGO;
const DARK_LOGO = HORIZONTAL_LOGO;

export function Logo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const hydrated = useHydrated();
  const isDark = hydrated && resolvedTheme === "dark";
  const { src, width, height, sizeClass } = isDark
    ? { src: LOGO_DARK, ...DARK_LOGO, sizeClass: DARK_LOGO.className }
    : { src: LOGO_LIGHT, ...LIGHT_LOGO, sizeClass: LIGHT_LOGO.className };

  if (!hydrated) {
    return (
      <span
        className={cn("inline-block h-10 w-[140px] shrink-0", className)}
        aria-hidden="true"
      />
    );
  }

  return (
    <Image
      src={src}
      alt="SESAJANS"
      width={width}
      height={height}
      className={cn(sizeClass, "shrink-0 object-contain object-left", className)}
      priority
      unoptimized
    />
  );
}
