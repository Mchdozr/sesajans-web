"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, projectCategoryFilters } from "@/lib/projects";
import type { ProductCategory } from "@/lib/categories";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/context";

export function ProjectGallery() {
  const [filter, setFilter] = useState<ProductCategory | "all">("all");
  const { t } = useI18n();

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => setFilter("all")}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            filter === "all"
              ? "bg-brand text-white"
              : "border border-theme text-ink-muted hover:text-ink",
          )}
        >
          {t.common.all}
        </button>
        {projectCategoryFilters.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              filter === cat
                ? "bg-brand text-white"
                : "border border-theme text-ink-muted hover:text-ink",
            )}
          >
            {t.categories[cat].label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => {
          const categoryLabel = t.categories[project.category].label;

          return (
            <article
              key={project.slug}
              className="glow-border group overflow-hidden rounded-2xl border border-theme bg-surface-elevated/80"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} — ${project.venue}, ${project.city}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                <span className="absolute left-2 top-2 rounded bg-surface-deep/80 px-2 py-1 text-[10px] font-semibold text-brand">
                  {project.year}
                </span>
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold text-brand">{categoryLabel}</p>
                <h3 className="mt-1 font-display font-bold text-ink">
                  <Link href={`/projeler/${project.slug}`} className="hover:text-brand">
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-1 text-xs text-ink-muted">
                  {project.venue} · {project.city}
                </p>
                <p className="mt-2 text-sm text-ink-muted line-clamp-3">{project.summary}</p>
                <Link
                  href={`/projeler/${project.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-brand hover:underline"
                >
                  {t.common.detail} →
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
