"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { useHydrated } from "@/hooks/useHydrated";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const { t } = useI18n();
  const hydrated = useHydrated();

  if (!hydrated) {
    return (
      <button
        type="button"
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg border border-theme text-muted",
          className,
        )}
        aria-label={t.theme.dark}
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg border border-theme text-ink-muted transition-colors hover:border-brand/50 hover:text-brand",
        className,
      )}
      aria-label={isDark ? t.theme.light : t.theme.dark}
      title={isDark ? t.theme.light : t.theme.dark}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
