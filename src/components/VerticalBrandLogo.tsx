"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useHydrated } from "@/hooks/useHydrated";

const LOGO_LIGHT = "/brand/logo-vertical-light.png";
const LOGO_DARK = "/brand/logo-vertical-dark.png";
const DISPLAY_CLASS = "size-48 shrink-0 object-contain sm:size-56";

export function VerticalBrandLogo({ className }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const hydrated = useHydrated();
  const isDark = hydrated && resolvedTheme === "dark";
  const src = isDark ? LOGO_DARK : LOGO_LIGHT;

  if (!hydrated) {
    return <span className={cn(DISPLAY_CLASS, className)} aria-hidden="true" />;
  }

  return (
    <Image
      src={src}
      alt="SES AJANS"
      width={500}
      height={500}
      className={cn(DISPLAY_CLASS, className)}
      unoptimized
    />
  );
}
