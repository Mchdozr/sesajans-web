import Link from "next/link";
import Image from "next/image";
import { Container, SectionHeading } from "@/components/ui/Container";
import { PageHeaderStatic } from "@/components/PageHeaderStatic";
import { ProductCard } from "@/components/ProductCard";
import { CTABanner } from "@/components/CTABanner";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { istanbulLanding } from "@/lib/local-seo";
import { FAQAccordion } from "@/components/FAQAccordion";
import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/Button";

export function IstanbulLandingContent() {
  const data = istanbulLanding;

  return (
    <>
      <JsonLd data={faqJsonLd(data.faqs)} />
      <PageHeaderStatic
        eyebrow="İstanbul"
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
                  <strong className="text-ink">Adres:</strong> {site.address}
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
            title="İstanbul etkinlikleri için ürünler"
            description="Konser, düğün ve kurumsal etkinliklerde en çok tercih edilen modeller."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard slug="beam-king-ip" />
            <ProductCard slug="wash-3715" />
            <ProductCard slug="blinder-800-ip" />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-semibold">
            <Link href="/kullanim-alanlari/konser-festival" className="text-brand hover:underline">
              Konser aydınlatması →
            </Link>
            <Link href="/kullanim-alanlari/dugun-etkinlik" className="text-brand hover:underline">
              Düğün aydınlatması →
            </Link>
            <Link href="/projeler" className="text-brand hover:underline">
              Referans projeler →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading eyebrow="SSS" title="İstanbul sahne aydınlatma SSS" />
          <div className="mx-auto mt-8 max-w-3xl">
            <FAQAccordion items={data.faqs} />
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
