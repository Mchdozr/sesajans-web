import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { UseCaseLanding } from "@/components/UseCaseLanding";
import { getUseCase, useCaseSlugs } from "@/lib/use-cases";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return useCaseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) return {};
  return buildMetadata({
    title: useCase.seoTitle,
    description: useCase.seoDescription,
    path: `/kullanim-alanlari/${slug}`,
    keywords: useCase.keywords,
  });
}

export default async function UseCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();
  return <UseCaseLanding useCase={useCase} />;
}
