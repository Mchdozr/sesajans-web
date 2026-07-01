import { products } from "../products";
import type { Locale } from "./types";
import { productEn } from "./product-en";

export type LocalizedProduct = ReturnType<typeof getLocalizedProduct>;

export function getLocalizedProduct(slug: string, locale: Locale) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return undefined;

  if (locale === "tr") {
    return {
      ...product,
      localizedTagline: product.tagline,
      localizedExcerpt: product.excerpt,
      localizedIntro: product.intro,
      localizedHighlights: product.highlights,
      localizedSpecs: product.specs,
      localizedUseCases: product.useCases,
      localizedFaqs: product.faqs,
    };
  }

  const en = productEn[slug];
  return {
    ...product,
    localizedTagline: en?.tagline ?? product.tagline,
    localizedExcerpt: en?.excerpt ?? product.excerpt,
    localizedIntro: en?.intro ?? product.intro,
    localizedHighlights: en?.highlights ?? product.highlights,
    localizedSpecs: en?.specs ?? product.specs,
    localizedUseCases: en?.useCases ?? product.useCases,
    localizedFaqs: en?.faqs ?? product.faqs,
  };
}

export function getAllLocalizedProducts(locale: Locale) {
  return products.map((p) => getLocalizedProduct(p.slug, locale)!);
}
