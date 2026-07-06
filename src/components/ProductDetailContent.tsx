"use client";

import { useState } from "react";
import { Check, ArrowRight, Download, Film } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Container, SectionHeading } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/Reveal";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { RelatedContent } from "@/components/RelatedContent";
import { getProductRelatedGroups } from "@/lib/internal-links";
import { ProductCard } from "@/components/ProductCard";
import { ProductVideoShowcase } from "@/components/ProductVideoShowcase";
import { ImageLightbox } from "@/components/ImageLightbox";
import { GalleryImage } from "@/components/GalleryImage";
import { products, getGalleryAlt } from "@/lib/products";
import { useI18n } from "@/lib/i18n/context";
import { getLocalizedProduct } from "@/lib/i18n/products";
import type { ProductCategory } from "@/lib/categories";

export function ProductDetailContent({ slug }: { slug: string }) {
  const { locale, t } = useI18n();
  const product = getLocalizedProduct(slug, locale);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!product) return null;

  const others = products.filter((p) => p.slug !== slug).slice(0, 3);
  const relatedGroups = getProductRelatedGroups(slug);
  const hasVideos = Boolean(product.videos?.length);
  const category = t.categories[product.category as ProductCategory];
  const galleryImages =
    product.gallery.length > 0 ? product.gallery : [product.image];
  const zoomLabel = `${product.name} — ${t.common.zoomImage}`;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      <ImageLightbox
        images={galleryImages}
        index={lightboxIndex}
        alt={product.name}
        closeLabel={t.common.close}
        onClose={closeLightbox}
        onIndexChange={setLightboxIndex}
      />
      <PageHeader
        eyebrow={category.label}
        title={product.name}
        description={product.localizedTagline}
        breadcrumb={[
          { name: t.nav.products, path: "/urunler" },
          { name: product.name, path: `/urunler/${product.slug}` },
        ]}
      />

      {hasVideos && (
        <ProductVideoShowcase
          videos={product.videos!}
          productName={product.name}
          poster={product.image}
        />
      )}

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <Reveal>
              {!hasVideos && (
                <GalleryImage
                  src={product.image}
                  alt={product.imageAlt}
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="aspect-[4/3] w-full rounded-3xl"
                  zoomLabel={zoomLabel}
                  onZoom={() => openLightbox(0)}
                />
              )}
              {hasVideos && product.gallery.length > 0 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {product.gallery.map((img, i) => (
                    <GalleryImage
                      key={img}
                      src={img}
                      alt={getGalleryAlt(product, i)}
                      sizes="200px"
                      className="aspect-square rounded-xl"
                      zoomLabel={zoomLabel}
                      onZoom={() => openLightbox(i)}
                    />
                  ))}
                </div>
              )}
              {!hasVideos && product.gallery.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-2">
                  {product.gallery.slice(0, 4).map((img, i) => (
                    <GalleryImage
                      key={img}
                      src={img}
                      alt={getGalleryAlt(product, i)}
                      sizes="120px"
                      className="aspect-square rounded-lg"
                      zoomLabel={zoomLabel}
                      onZoom={() => openLightbox(i)}
                    />
                  ))}
                </div>
              )}
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-display text-2xl font-bold text-ink">{t.productDetail.whatIs}</h2>
              <p className="mt-3 leading-relaxed text-ink-muted">{product.localizedIntro}</p>
              <ul className="mt-6 space-y-3">
                {product.localizedHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-ink-muted">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                {hasVideos && (
                  <a
                    href="#urun-videolari"
                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark"
                  >
                    <Film className="h-4 w-4" /> {t.common.watchVideo}
                  </a>
                )}
                <ButtonLink
                  href={`/iletisim?urun=${product.slug}`}
                  variant={hasVideos ? "outline" : "primary"}
                >
                  {t.quote} <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                {product.pdf && (
                  <a
                    href={product.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-xl border border-theme px-6 text-sm font-semibold text-ink hover:border-brand/60"
                  >
                    <Download className="h-4 w-4" /> {t.common.downloadCatalog}
                  </a>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-theme bg-surface-deep/40 py-16">
        <Container>
          <SectionHeading title={t.productDetail.specs} />
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-theme">
            <table className="w-full text-sm">
              <tbody>
                {product.localizedSpecs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i % 2 === 0 ? "bg-surface-elevated/60" : "bg-surface-elevated/30"}
                  >
                    <td className="px-5 py-3 font-medium text-ink-muted">{spec.label}</td>
                    <td className="px-5 py-3 text-ink">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {product.gallery.length > 4 && (
        <section className="py-16">
          <Container>
            <SectionHeading title={t.productDetail.gallery} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.gallery.map((img, i) => (
                <GalleryImage
                  key={img}
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  sizes="400px"
                  className="aspect-[4/3] rounded-2xl"
                  zoomLabel={zoomLabel}
                  onZoom={() => openLightbox(i)}
                />
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="border-t border-theme py-16">
        <Container>
          <SectionHeading title={t.productDetail.useCases} />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {product.localizedUseCases.map((uc) => (
              <span
                key={uc}
                className="rounded-full border border-brand/30 bg-brand/10 px-4 py-2 text-sm font-medium text-brand"
              >
                {uc}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-theme bg-surface-deep/40 py-16">
        <Container>
          <SectionHeading title={t.productDetail.faqs} />
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQAccordion items={product.localizedFaqs} />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title={t.productDetail.related} />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {others.map((p) => (
              <ProductCard key={p.slug} slug={p.slug} />
            ))}
          </div>
        </Container>
      </section>

      <RelatedContent groups={relatedGroups} />

      <CTABanner />
    </>
  );
}
