"use client";

import { useI18n } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/utils";

export function LocaleToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();

  const options: { value: Locale; label: string }[] = [
    { value: "tr", label: "TR" },
    { value: "en", label: "EN" },
  ];

  return (
    <div
      className={cn(
        "flex items-center rounded-lg border border-theme p-0.5",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => setLocale(opt.value)}
          className={cn(
            "min-w-[2.25rem] rounded-md px-2 py-1.5 text-xs font-bold transition-colors",
            locale === opt.value
              ? "bg-brand text-white"
              : "text-ink-muted hover:text-ink",
          )}
          aria-pressed={locale === opt.value}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
