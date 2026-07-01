import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const variants = {
  primary:
    "bg-brand text-white hover:bg-brand-dark shadow-[0_8px_30px_-6px_rgba(244,111,44,0.5)]",
  outline:
    "border border-theme text-ink hover:border-brand/60 hover:bg-brand/10",
  ghost: "text-ink hover:bg-surface-elevated",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-surface";

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}
