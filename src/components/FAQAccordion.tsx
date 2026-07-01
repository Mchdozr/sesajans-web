"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQAccordion({
  items,
}: {
  items: ReadonlyArray<{ readonly q: string; readonly a: string }>;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={item.q}
          className="overflow-hidden rounded-2xl border border-theme bg-surface-elevated/60"
        >
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-ink">{item.q}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-brand transition-transform",
                open === i && "rotate-180",
              )}
            />
          </button>
          {open === i && (
            <div className="border-t border-theme px-5 py-4 text-sm leading-relaxed text-ink-muted">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
