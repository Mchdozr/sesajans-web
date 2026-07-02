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
  const verification = process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined;

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": url,
        "x-default": url,
      },
    },
    verification,
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

const logoUrl = `${site.url}/brand/logo-light-horizontal.png`;

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brand,
  url: site.url,
  logo: logoUrl,
  image: logoUrl,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.foundedYear),
  sameAs: [site.social.instagram, site.social.linkedin, site.social.youtube],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressLine,
    addressLocality: site.addressDistrict,
    addressRegion: site.addressCity,
    postalCode: site.postalCode,
    addressCountry: "TR",
  },
};

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.brand,
  url: site.url,
  image: logoUrl,
  logo: logoUrl,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  foundingDate: String(site.foundedYear),
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.addressLine,
    addressLocality: site.addressDistrict,
    addressRegion: site.addressCity,
    postalCode: site.postalCode,
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.0602,
    longitude: 28.9877,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [site.social.instagram, site.social.linkedin, site.social.youtube],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.brand,
  url: site.url,
  inLanguage: "tr-TR",
  publisher: { "@type": "Organization", name: site.brand },
};

export function breadcrumbJsonLd(items: ReadonlyArray<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

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
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${site.url}${product.image}`,
    brand: { "@type": "Brand", name: site.brand },
    category: product.category,
    url: `${site.url}/urunler/${product.slug}`,
  };
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  date: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { "@type": "Organization", name: site.brand },
    publisher: {
      "@type": "Organization",
      name: site.brand,
      logo: { "@type": "ImageObject", url: `${site.url}/brand/logo-light-horizontal.png` },
    },
    image: article.image ? `${site.url}${article.image}` : `${site.url}/opengraph-image`,
    mainEntityOfPage: `${site.url}/blog/${article.slug}`,
  };
}
