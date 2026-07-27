import Image from "next/image";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PageHeaderStatic } from "@/components/PageHeaderStatic";
import { ProductCard } from "@/components/ProductCard";
import { CTABanner } from "@/components/CTABanner";
import { RelatedContent } from "@/components/RelatedContent";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ButtonLink } from "@/components/ui/Button";
import { categories, type ProductCategory } from "@/lib/categories";
import type { KeywordHub } from "@/lib/keyword-hubs";
import type { RelatedLinkGroup } from "@/lib/internal-links";

const blogTitles: Record<string, string> = {
  "arena-stadyum-aydinlatma-rehberi": "Arena ve Stadyum Aydınlatma Rehberi",
  "blinder-strobe-rehberi": "Blinder ve Strobe Rehberi",
  "blinder-vs-strobe-farki": "Blinder vs Strobe Farkı",
  "blinder-molfez-rehberi": "Blinder / Molfez Rehberi",
  "dmx-aydinlatma-kurulumu": "DMX Aydınlatma Kurulumu",
  "dmx-universe-planlama-rehberi": "DMX Universe Planlama Rehberi",
  "festival-aydinlatma-butce-planlama": "Festival Aydınlatma Bütçe Planlama",
  "ip66-beam-rehberi": "IP66 Beam Rehberi",
  "ip66-dis-mekan-beam-secimi": "IP66 Dış Mekân Beam Seçimi",
  "ip65-ip66-dis-mekan-fiyat": "IP65/IP66 Dış Mekân Maliyet Rehberi",
  "istanbul-sahne-aydinlatma-rehberi": "İstanbul Sahne Aydınlatma Rehberi",
  "konser-aydinlatma-rehberi": "Konser Aydınlatma Rehberi",
  "kurumsal-lansman-aydinlatma-rehberi": "Kurumsal Lansman Aydınlatma Rehberi",
  "led-bar-sahne-rehberi": "LED Bar Sahne Rehberi",
  "moving-head-beam-rehberi": "Moving Head Beam Rehberi",
  "moving-head-bakim-rehberi": "Moving Head Bakım Rehberi",
  "moving-head-konser-kurulumu": "Moving Head Konser Kurulumu",
  "moving-head-fiyat-rehberi": "Moving Head Fiyat Rehberi",
  "robot-isik-nasil-secilir": "Robot Işık Nasıl Seçilir",
  "beam-vs-wash-satinalma": "Beam vs Wash Satın Alma",
  "sahne-aydinlatma-butce-2026": "Sahne Aydınlatma Bütçe 2026",
  "dj-kulup-isik-sistemi": "DJ / Kulüp Işık Sistemi",
  "aydinlatma-kiralama-vs-satinalma": "Kiralama vs Satın Alma",
  "profesyonel-sahne-isigi-rehberi": "Profesyonel Sahne Işığı Rehberi",
  "sahne-aydinlatma-rehberi": "Sahne Aydınlatma Rehberi",
  "truss-planlama-sahne-isigi": "Truss Planlama Rehberi",
  "wash-moving-head-rehberi": "Wash Moving Head Rehberi",
};

export function KeywordHubContent({ data }: { data: KeywordHub }) {
  const relatedGroups: RelatedLinkGroup[] = [];

  if (data.relatedBlogSlugs.length) {
    relatedGroups.push({
      title: "Rehberler",
      links: data.relatedBlogSlugs
        .filter((slug) => blogTitles[slug])
        .map((slug) => ({ label: blogTitles[slug], href: `/blog/${slug}` })),
    });
  }

  if (data.relatedPaths.length) {
    relatedGroups.push({ title: "Keşfet", links: data.relatedPaths });
  }

  return (
    <>
      <JsonLd data={faqJsonLd(data.faqs)} />
      <PageHeaderStatic
        eyebrow={data.eyebrow}
        title={data.h1}
        description={data.intro}
        breadcrumb={[{ name: data.title, path: data.path }]}
      />

      <section className="border-b border-theme bg-surface-deep/30">
        <Container className="py-8 sm:py-10">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-theme sm:aspect-[2.4/1]">
            <Image
              src={data.heroImage}
              alt={data.heroImageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 1120px"
            />
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-5xl space-y-14">
            {data.sections.map((section, index) => (
              <div
                key={section.title}
                className={`grid items-center gap-8 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
                    {section.title}
                  </h2>
                  <p className="mt-3 leading-relaxed text-ink-muted">{section.body}</p>
                </div>
                {section.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-theme">
                    <Image
                      src={section.image}
                      alt={section.imageAlt ?? section.title}
                      fill
                      className="object-cover"
                      sizes="(max-width:1024px) 100vw, 520px"
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          {data.categorySlugs && data.categorySlugs.length > 0 && (
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {data.categorySlugs.map((slug) => {
                const cat = categories[slug as ProductCategory];
                if (!cat) return null;
                return (
                  <Link
                    key={slug}
                    href={`/urunler/kategori/${slug}`}
                    className="rounded-full border border-theme bg-surface-elevated px-4 py-2 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand"
                  >
                    {cat.label}
                  </Link>
                );
              })}
            </div>
          )}

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/iletisim">Ücretsiz Teklif Al</ButtonLink>
            <ButtonLink href="/robot-isik-fiyat" variant="outline">
              Fiyat bilgisi
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-y border-theme bg-surface-deep/40 py-16">
        <Container>
          <SectionHeading
            eyebrow="Önerilen ürünler"
            title={`${data.title} için SESAJANS çözümleri`}
            description="Projenize uygun modelleri inceleyin; güncel fiyat için teklif isteyin."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.productSlugs.map((slug) => (
              <ProductCard key={slug} slug={slug} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/urunler" className="text-sm font-semibold text-brand hover:underline">
              Tüm ürünler →
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

      {relatedGroups.length > 0 && <RelatedContent groups={relatedGroups} />}

      <CTABanner />
    </>
  );
}
