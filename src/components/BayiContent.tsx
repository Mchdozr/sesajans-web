"use client";

import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Container, SectionHeading } from "@/components/ui/Container";
import { ProductCard } from "@/components/ProductCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { ButtonLink } from "@/components/ui/Button";
import { products } from "@/lib/products";
import { cityLandings } from "@/lib/local-seo";
import { site } from "@/lib/site";
import { bayiFaqs } from "@/lib/bayi";

export function BayiContent() {
  return (
    <>
      <PageHeader
        eyebrow="Distribütör"
        title="Sahne Aydınlatma Distribütörü & Bayi"
        description="Moving head, blinder, strobe ve LED bar ürünlerinde Türkiye satışı, stok ve kurulum. Ücretsiz fiyat teklifi alın."
        breadcrumb={[{ name: "Bayi / Distribütör", path: "/bayi" }]}
      />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto max-w-3xl space-y-4 text-center leading-relaxed text-ink-muted">
            <p>
              {site.brand}, {site.addressDistrict}/{site.addressCity} merkezli profesyonel
              sahne aydınlatma distribütörüdür. Beam, wash, blinder-strobe ve LED bar
              portföyünde stoktan satış, kiralama ve anahtar teslim kurulum sunarız.
            </p>
            <p>
              Fiyatlar proje kapsamına göre belirlenir; sitede liste fiyatı yayınlanmaz.
              İhtiyacınıza göre ücretsiz fiyat teklifi ve teknik keşif için bize ulaşın.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="/iletisim">Fiyat Teklifi Al</ButtonLink>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-theme px-6 text-sm font-semibold text-ink hover:border-brand/60 hover:bg-brand/10"
            >
              WhatsApp
            </a>
          </div>
        </Container>
      </section>

      <section className="border-t border-theme bg-surface-deep/40 py-14">
        <Container>
          <SectionHeading
            title="Ürün portföyü"
            description="Teklif formunda ürün seçerek doğrudan model bazlı fiyat talebi oluşturabilirsiniz."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} slug={p.slug} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <SectionHeading
            title="Hizmet verilen şehirler"
            description="Yerel aramalarda görünürlük ve hızlı lojistik için şehir sayfalarımız."
          />
          <ul className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cityLandings.map((c) => (
              <li key={c.slug}>
                <Link
                  href={c.path}
                  className="block rounded-xl border border-theme px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand"
                >
                  {c.city} Sahne Aydınlatma
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-theme bg-surface-deep/40 py-14">
        <Container>
          <SectionHeading title="Sık sorulan sorular" />
          <div className="mx-auto mt-8 max-w-3xl">
            <FAQAccordion items={bayiFaqs} />
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
