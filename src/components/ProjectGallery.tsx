"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, projectCategoryFilters } from "@/lib/projects";
import type { ProductCategory } from "@/lib/categories";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/context";
import { getLocalizedProduct } from "@/lib/i18n/products";

export function ProjectGallery() {
  const [filter, setFilter] = useState<ProductCategory | "all">("all");
  const { locale, t } = useI18n();

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
          const product = getLocalizedProduct(project.productSlug, locale);
          if (!product) return null;
          const variantLabel =
            project.variant === "stage" ? t.projectsPage.stageApp : t.projectsPage.effectView;
          const title = `${product.name} — ${variantLabel}`;
          const categoryLabel = t.categories[project.category].label;

          return (
            <Link
              key={project.slug}
              href={`/urunler/${project.productSlug}`}
              className="glow-border group overflow-hidden rounded-2xl border border-theme bg-surface-elevated/80"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
                {project.placeholder && (
                  <span className="absolute right-2 top-2 rounded bg-surface-deep/80 px-2 py-1 text-[10px] text-ink-muted">
                    {t.common.productImage}
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold text-brand">{categoryLabel}</p>
                <h3 className="mt-1 font-display font-bold text-ink">{title}</h3>
                <p className="mt-1 text-sm text-ink-muted line-clamp-2">
                  {product.name} {categoryLabel.toLowerCase()} {t.projectsPage.refDesc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
