import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailContent } from "@/components/ProductDetailContent";
import { JsonLd } from "@/components/JsonLd";
import { products, getProduct } from "@/lib/products";
import { buildMetadata, faqJsonLd, productJsonLd, productVideoJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} Fiyat Teklifi & Teknik Özellikler`,
    description: `${product.name}: ${product.tagline}. Stoktan satış ve kurulum desteği. Ücretsiz fiyat teklifi için SESAJANS'a ulaşın — Türkiye sahne aydınlatma distribütörü.`,
    path: `/urunler/${product.slug}`,
    image: product.image,
    keywords: product.keywords,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <JsonLd
        data={[
          productJsonLd({
            name: product.name,
            description: product.excerpt,
            image: product.image,
            slug: product.slug,
            category: product.category,
          }),
          ...(product.videos?.length
            ? productVideoJsonLd({
                name: product.name,
                description: product.excerpt,
                image: product.image,
                slug: product.slug,
                videos: product.videos,
              })
            : []),
          faqJsonLd(product.faqs),
        ]}
      />
      <ProductDetailContent slug={slug} />
    </>
  );
}
