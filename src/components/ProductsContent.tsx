"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/products";
import type { ProductCategory } from "@/lib/categories";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { CTABanner } from "@/components/CTABanner";
import { RelatedContent } from "@/components/RelatedContent";
import { productsHubLinks } from "@/lib/internal-links";
import { useI18n } from "@/lib/i18n/context";

export function ProductsContent() {
  const searchParams = useSearchParams();
  const kategori = searchParams.get("kategori") as ProductCategory | null;
  const { t } = useI18n();

  const list = kategori && t.categories[kategori] ? products.filter((p) => p.category === kategori) : products;
  const categoryKeys = Object.keys(t.categories) as ProductCategory[];

  return (
    <>
      <section className="border-b border-theme py-6">
        <Container>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/urunler"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                !kategori
                  ? "bg-brand text-white"
                  : "border border-theme text-ink-muted hover:text-ink"
              }`}
            >
              {t.common.all}
            </Link>
            {categoryKeys.map((key) => (
              <Link
                key={key}
                href={`/urunler/kategori/${key}`}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  kategori === key
                    ? "bg-brand text-white"
                    : "border border-theme text-ink-muted hover:text-ink"
                }`}
              >
                {t.categories[key].label}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((product, i) => (
              <Reveal key={product.slug} delay={(i % 3) * 0.08}>
                <ProductCard slug={product.slug} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <RelatedContent groups={productsHubLinks} />
      <CTABanner />
    </>
  );
}
