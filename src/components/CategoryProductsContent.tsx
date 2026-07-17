"use client";

import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Container, SectionHeading } from "@/components/ui/Container";
import { ProductCard } from "@/components/ProductCard";
import { CTABanner } from "@/components/CTABanner";
import { FAQAccordion } from "@/components/FAQAccordion";
import { RelatedContent } from "@/components/RelatedContent";
import { getCategoryRelatedGroups } from "@/lib/internal-links";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { categories, type ProductCategory } from "@/lib/categories";
import { getProductsByCategory } from "@/lib/products";
import { useI18n } from "@/lib/i18n/context";

export function CategoryProductsContent({ slug }: { slug: ProductCategory }) {
  const { t } = useI18n();
  const cat = categories[slug];
  const items = getProductsByCategory(slug);
  const relatedGroups = getCategoryRelatedGroups(slug);
  const paragraphs = cat.seoContent.split("\n\n").filter(Boolean);

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
          <div className="mx-auto max-w-3xl space-y-4 text-center leading-relaxed text-ink-muted">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/iletisim">Fiyat Teklifi Al</ButtonLink>
            <ButtonLink href="/bayi" variant="outline">
              Distribütör / Bayi
            </ButtonLink>
            <Link
              href="/kullanim-alanlari/aydinlatma-kiralama"
              className="text-sm font-medium text-brand hover:underline"
            >
              Kiralama seçenekleri →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.05}>
                <ProductCard slug={product.slug} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-theme bg-surface-deep/40 py-14">
        <Container>
          <SectionHeading
            title="Satın alma mı, kiralama mı?"
            description={cat.buyVsRent}
          />
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading title="Sık sorulan sorular" />
          <div className="mx-auto mt-8 max-w-3xl">
            <FAQAccordion items={cat.faqs} />
          </div>
        </Container>
      </section>

      <RelatedContent groups={relatedGroups} />
      <CTABanner />
    </>
  );
}
