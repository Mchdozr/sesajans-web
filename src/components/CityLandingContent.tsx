import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PageHeaderStatic } from "@/components/PageHeaderStatic";
import { ProductCard } from "@/components/ProductCard";
import { CTABanner } from "@/components/CTABanner";
import { RelatedContent } from "@/components/RelatedContent";
import { getCityRelatedGroups } from "@/lib/internal-links";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { FAQAccordion } from "@/components/FAQAccordion";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";
import type { CityLanding } from "@/lib/local-seo";

export function CityLandingContent({ data }: { data: CityLanding }) {
  const relatedGroups = getCityRelatedGroups(data.slug);

  return (
    <>
      <JsonLd data={faqJsonLd(data.faqs)} />
      <PageHeaderStatic
        eyebrow={data.city}
        title={data.title}
        description={data.intro}
        breadcrumb={[{ name: data.title, path: data.path }]}
      />

      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              {data.sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-display text-xl font-bold text-ink">{section.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-muted">{section.body}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-theme bg-surface-elevated/80 p-6">
              <h2 className="font-display text-lg font-bold text-ink">İletişim & Konum</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-muted">
                <li>
                  <strong className="text-ink">Merkez:</strong> {site.address}
                </li>
                <li>
                  <strong className="text-ink">Telefon:</strong>{" "}
                  <a href={`tel:${site.phone}`} className="text-brand hover:underline">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <strong className="text-ink">E-posta:</strong>{" "}
                  <a href={`mailto:${site.email}`} className="text-brand hover:underline">
                    {site.email}
                  </a>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <ButtonLink href="/iletisim">Teklif Al</ButtonLink>
                <ButtonLink href={site.addressUrl} variant="outline" target="_blank" rel="noopener noreferrer">
                  Haritada Aç
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-theme bg-surface-deep/40 py-16">
        <Container>
          <SectionHeading
            eyebrow="Popüler çözümler"
            title={`${data.city} etkinlikleri için ürünler`}
            description="Bölgede en çok tercih edilen modeller."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.productSlugs.map((slug) => (
              <ProductCard key={slug} slug={slug} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <Link href="/urunler" className="text-brand hover:underline">
              Tüm ürünler →
            </Link>
            <Link href="/kullanim-alanlari" className="text-brand hover:underline">
              Kullanım alanları →
            </Link>
            <Link href="/blog" className="text-brand hover:underline">
              Blog rehberleri →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title="Sık sorulan sorular" />
          <div className="mx-auto mt-8 max-w-3xl">
            <FAQAccordion items={data.faqs} />
          </div>
        </Container>
      </section>

      <RelatedContent groups={relatedGroups} />

      <CTABanner />
    </>
  );
}
