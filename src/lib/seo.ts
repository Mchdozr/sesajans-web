import type { Metadata } from "next";
import { site } from "./site";

type SeoInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description = site.description,
  path = "/",
  image = "/products/beam-king-ip/image-01.webp",
  keywords = [],
}: SeoInput): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.brand,
      locale: "tr_TR",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brand,
  url: site.url,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "TR",
    addressLocality: "İstanbul",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.brand,
  url: site.url,
  inLanguage: "tr-TR",
};

export function faqJsonLd(faqs: ReadonlyArray<{ readonly q: string; readonly a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function productJsonLd(product: {
  name: string;
  description: string;
  image: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${site.url}${product.image}`,
    brand: { "@type": "Brand", name: site.brand },
    url: `${site.url}/urunler/${product.slug}`,
  };
}
