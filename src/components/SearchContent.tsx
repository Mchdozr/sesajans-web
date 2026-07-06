"use client";

import { useMemo, useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { useI18n } from "@/lib/i18n/context";
import type { SearchItem, SearchGroup } from "@/lib/search";

/** Türkçe karakterleri sadeleştirip küçük harfe indirger; toleranslı eşleşme sağlar. */
function normalize(value: string): string {
  return value
    .toLocaleLowerCase("tr")
    .replaceAll("ı", "i")
    .replaceAll("ş", "s")
    .replaceAll("ğ", "g")
    .replaceAll("ü", "u")
    .replaceAll("ö", "o")
    .replaceAll("ç", "c");
}

function matches(item: SearchItem, tokens: string[]): boolean {
  const target = normalize(`${item.title} ${item.description} ${item.haystack}`);
  return tokens.every((token) => target.includes(token));
}

const groupOrder: SearchGroup[] = [
  "product",
  "comparison",
  "useCase",
  "blog",
  "glossary",
  "project",
  "city",
  "page",
];

function SearchInner({ items }: { items: SearchItem[] }) {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const trimmed = query.trim();
  const results = useMemo(() => {
    if (trimmed.length < 2) return [];
    const tokens = normalize(trimmed).split(/\s+/).filter(Boolean);
    return items
      .filter((item) => matches(item, tokens))
      .sort((a, b) => groupOrder.indexOf(a.group) - groupOrder.indexOf(b.group));
  }, [items, trimmed]);

  return (
    <>
      <PageHeader
        eyebrow={t.search.eyebrow}
        title={t.search.title}
        description={t.search.description}
        breadcrumb={[{ name: t.search.title, path: "/ara" }]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ink-muted" />
              <input
                type="search"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.search.placeholder}
                aria-label={t.search.label}
                className="w-full rounded-2xl border border-theme bg-surface-elevated/60 py-4 pl-12 pr-4 text-base text-ink placeholder:text-ink-muted focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
              />
            </label>

            <div className="mt-8">
              {trimmed.length < 2 ? (
                <p className="text-center text-sm text-ink-muted">{t.search.minChars}</p>
              ) : results.length === 0 ? (
                <p className="text-center text-sm text-ink-muted">{t.search.noResults}</p>
              ) : (
                <>
                  <p className="mb-4 text-sm text-ink-muted">
                    {results.length} {t.search.resultsFor}
                  </p>
                  <ul className="space-y-3">
                    {results.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="group flex items-start gap-4 rounded-2xl border border-theme bg-surface-elevated/50 p-4 transition-all hover:border-brand/40 hover:bg-brand/5"
                        >
                          <span className="mt-0.5 shrink-0 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand">
                            {t.search.groups[item.group]}
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block font-semibold text-ink group-hover:text-brand">
                              {item.title}
                            </span>
                            <span className="mt-0.5 block text-sm leading-relaxed text-ink-muted">
                              {item.description}
                            </span>
                          </span>
                          <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export function SearchContent({ items }: { items: SearchItem[] }) {
  return (
    <Suspense fallback={null}>
      <SearchInner items={items} />
    </Suspense>
  );
}
