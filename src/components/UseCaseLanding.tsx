import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PageHeaderStatic } from "@/components/PageHeaderStatic";
import { ProductCard } from "@/components/ProductCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import type { UseCase } from "@/lib/use-cases";
import { categories } from "@/lib/categories";

export function UseCaseLanding({ useCase }: { useCase: UseCase }) {
  const cat = categories[useCase.categorySlug];

  return (
    <>
      <JsonLd data={faqJsonLd(useCase.faqs)} />
      <PageHeaderStatic
        eyebrow={useCase.eyebrow}
        title={useCase.title}
        description={useCase.intro}
        breadcrumb={[
          { name: "Kullanım Alanları", path: "/kullanim-alanlari" },
          { name: useCase.title, path: `/kullanim-alanlari/${useCase.slug}` },
        ]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-ink-muted">
            <p>{useCase.body}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {useCase.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-xl border border-theme bg-surface-elevated/60 px-4 py-3 text-sm text-ink"
                >
                  ✓ {h}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-y border-theme bg-surface-deep/40 py-16">
        <Container>
          <SectionHeading
            eyebrow="Önerilen ürünler"
            title={`${useCase.eyebrow} için ürünler`}
            description={`${cat.label} kategorisinden seçilmiş profesyonel çözümler.`}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCase.recommendedProductSlugs.map((slug) => (
              <ProductCard key={slug} slug={slug} />
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link
              href={`/urunler/kategori/${useCase.categorySlug}`}
              className="text-sm font-semibold text-brand hover:underline"
            >
              Tüm {cat.label} ürünlerini incele →
            </Link>
          </p>
        </Container>
      </section>

      {useCase.relatedBlogSlugs.length > 0 && (
        <section className="py-16">
          <Container>
            <SectionHeading eyebrow="Rehberler" title="İlgili blog yazıları" />
            <ul className="mt-8 space-y-3">
              {useCase.relatedBlogSlugs.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/blog/${slug}`}
                    className="text-brand hover:underline"
                  >
                    /blog/{slug}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      <section className="border-t border-theme bg-surface-deep/40 py-16">
        <Container>
          <SectionHeading eyebrow="SSS" title="Sık sorulan sorular" />
          <div className="mx-auto mt-8 max-w-3xl">
            <FAQAccordion items={useCase.faqs} />
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
