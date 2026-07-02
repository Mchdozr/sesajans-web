"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const STORAGE_KEY = "sesajans-cookie-consent";

export function CookieBanner() {
  const { t } = useI18n();
  const c = t.cookieBanner;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
    window.location.reload();
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={c.ariaLabel}
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-theme bg-surface-deep/95 p-4 shadow-2xl backdrop-blur-md sm:p-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink-muted">
          {c.message}{" "}
          <Link href="/cerez-politikasi" className="font-medium text-brand hover:underline">
            {c.policyLink}
          </Link>
          {c.messageSuffix}
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={reject}
            className="rounded-xl border border-theme px-4 py-2 text-sm font-medium text-ink-muted hover:text-ink"
          >
            {c.reject}
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-brand-dark"
          >
            {c.accept}
          </button>
        </div>
        <button
          type="button"
          onClick={reject}
          className="absolute right-3 top-3 text-ink-muted hover:text-ink sm:hidden"
          aria-label={c.close}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
