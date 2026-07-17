import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryProductsContent } from "@/components/CategoryProductsContent";
import { JsonLd } from "@/components/JsonLd";
import { categories, categorySlugs, type ProductCategory } from "@/lib/categories";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return categorySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = categories[slug as ProductCategory];
  if (!cat) return {};
  return buildMetadata({
    title: cat.seoTitle,
    description: cat.seoDescription,
    path: `/urunler/kategori/${slug}`,
    keywords: cat.keywords,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!categorySlugs.includes(slug as ProductCategory)) notFound();
  const cat = categories[slug as ProductCategory];
  return (
    <>
      <JsonLd data={faqJsonLd(cat.faqs)} />
      <CategoryProductsContent slug={slug as ProductCategory} />
    </>
  );
}
