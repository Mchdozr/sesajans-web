"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { getLocalizedProduct } from "@/lib/i18n/products";
import type { ProductCategory } from "@/lib/categories";

export function ProductCard({ slug }: { slug: string }) {
  const { locale, t } = useI18n();
  const product = getLocalizedProduct(slug, locale);
  if (!product) return null;

  const category = t.categories[product.category as ProductCategory];

  return (
    <Link
      href={`/urunler/${product.slug}`}
      className="glow-border group flex h-full flex-col overflow-hidden rounded-2xl border border-theme bg-surface-elevated/80 transition-all hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-deep">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, 33vw"
        />
        {product.videos && product.videos.length > 0 && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-lg bg-brand px-2 py-1 text-xs font-semibold text-white shadow-lg">
            <Play className="h-3 w-3 fill-current" />
            {t.common.video}
          </span>
        )}
        {product.ipRating && (
          <span className="absolute left-3 top-3 rounded-lg bg-surface-deep/80 px-2 py-1 text-xs font-semibold text-ink backdrop-blur">
            {product.ipRating}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {category.label}
        </p>
        <h3 className="mt-1 font-display text-lg font-bold text-ink">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted line-clamp-2">
          {product.localizedExcerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
          {t.common.detail}{" "}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
