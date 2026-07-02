import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GlossaryTermContent } from "@/components/GlossaryTermContent";
import { buildMetadata } from "@/lib/seo";
import { getGlossaryTerm, glossarySlugs } from "@/lib/glossary";

export function generateStaticParams() {
  return glossarySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) return {};
  return buildMetadata({
    title: term.seoTitle,
    description: term.seoDescription,
    path: `/sozluk/${slug}`,
    keywords: term.keywords,
  });
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) notFound();
  return <GlossaryTermContent term={term} />;
}
