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
  image = "/opengraph-image",
  keywords = [],
}: SeoInput): Metadata {
  const url = `${site.url}${path}`;
  const ogImage = image?.trim() ? image : "/opengraph-image";
  const verification = process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined;

  return {
    title,
    description,
    applicationName: site.brand,
    keywords: keywords.length ? keywords : undefined,
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": url,
        "x-default": url,
      },
      types: {
        "application/rss+xml": `${site.url}/feed.xml`,
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
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

const brandLogoSquare = "/brand/favicon-512.png";
const brandLogoSquareUrl = `${site.url}${brandLogoSquare}`;

const brandLogoImageObject = {
  "@type": "ImageObject" as const,
  url: brandLogoSquareUrl,
  width: 500,
  height: 500,
};

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brand,
  alternateName: site.name,
  url: site.url,
  logo: brandLogoImageObject,
  image: brandLogoSquareUrl,
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
  alternateName: site.name,
  url: site.url,
  image: brandLogoSquareUrl,
  logo: brandLogoImageObject,
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
  openingHoursSpecification: site.openingHours.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...slot.days],
    opens: slot.opens,
    closes: slot.closes,
  })),
  sameAs: [site.social.instagram, site.social.linkedin, site.social.youtube],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.brand,
  alternateName: site.name,
  url: site.url,
  inLanguage: "tr-TR",
  publisher: {
    "@type": "Organization",
    name: site.brand,
    logo: brandLogoImageObject,
  },
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
    sku: product.slug,
    mpn: product.slug,
    brand: { "@type": "Brand", name: site.brand },
    manufacturer: { "@type": "Organization", name: site.brand },
    category: product.category,
    url: `${site.url}/urunler/${product.slug}`,
    offers: {
      "@type": "Offer",
      url: `${site.url}/iletisim`,
      priceCurrency: "TRY",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: site.brand },
    },
  };
}

export function productVideoJsonLd(product: {
  name: string;
  description: string;
  image: string;
  slug: string;
  videos: string[];
}) {
  return product.videos.map((video, i) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: product.videos.length > 1 ? `${product.name} — video ${i + 1}` : product.name,
    description: product.description,
    contentUrl: `${site.url}${video}`,
    embedUrl: `${site.url}/urunler/${product.slug}`,
    thumbnailUrl: `${site.url}${product.image}`,
  }));
}

export function articleJsonLd(article: {
  title: string;
  description: string;
  slug: string;
  date: string;
  dateModified?: string;
  image?: string;
  wordCount?: number;
  articleSection?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    ...(article.dateModified ? { dateModified: article.dateModified } : {}),
    ...(article.wordCount ? { wordCount: article.wordCount } : {}),
    ...(article.articleSection ? { articleSection: article.articleSection } : {}),
    author: { "@type": "Organization", name: site.brand },
    publisher: {
      "@type": "Organization",
      name: site.brand,
      logo: brandLogoImageObject,
    },
    image: article.image ? `${site.url}${article.image}` : `${site.url}/opengraph-image`,
    mainEntityOfPage: `${site.url}/blog/${article.slug}`,
  };
}

export function definedTermJsonLd(term: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.name,
    description: term.description,
    url: `${site.url}/sozluk/${term.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Aydınlatma Sözlüğü",
      url: `${site.url}/sozluk`,
    },
  };
}

export function projectJsonLd(project: {
  title: string;
  description: string;
  slug: string;
  image: string;
  location: string;
  dateCreated?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    image: `${site.url}${project.image}`,
    url: `${site.url}/projeler/${project.slug}`,
    locationCreated: project.location,
    creator: { "@type": "Organization", name: site.brand },
    ...(project.dateCreated ? { dateCreated: project.dateCreated } : {}),
  };
}

export function comparisonJsonLd(comparison: {
  title: string;
  description: string;
  path: string;
  productNames: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: comparison.title,
    description: comparison.description,
    url: `${site.url}${comparison.path}`,
    about: comparison.productNames.map((name) => ({
      "@type": "Product",
      name,
    })),
  };
}
