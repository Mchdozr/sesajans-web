import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailContent } from "@/components/ProductDetailContent";
import { JsonLd } from "@/components/JsonLd";
import { products, getProduct } from "@/lib/products";
import { buildMetadata, faqJsonLd, productJsonLd } from "@/lib/seo";

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
    title: `${product.name} — Teknik Özellikler`,
    description: product.excerpt,
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
          faqJsonLd(product.faqs),
        ]}
      />
      <ProductDetailContent slug={slug} />
    </>
  );
}
