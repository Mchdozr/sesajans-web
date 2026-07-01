"use client";

import { PageHeader } from "@/components/PageHeader";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/ProductCard";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/Reveal";
import { categories, type ProductCategory } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";
import { useI18n } from "@/lib/i18n/context";

export function CategoryProductsContent({ slug }: { slug: ProductCategory }) {
  const { t } = useI18n();
  const cat = categories[slug];
  const items = getProductsByCategory(slug);

  return (
    <>
      <PageHeader
        eyebrow={t.nav.products}
        title={cat.seoTitle}
        description={cat.seoDescription}
        breadcrumb={[
          { name: t.nav.products, path: "/urunler" },
          { name: cat.label, path: `/urunler/kategori/${slug}` },
        ]}
      />
      <section className="py-12 sm:py-16">
        <Container>
          <p className="mx-auto max-w-3xl text-center leading-relaxed text-ink-muted">
            {cat.seoContent}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.05}>
                <ProductCard slug={product.slug} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
      <CTABanner />
    </>
  );
}
