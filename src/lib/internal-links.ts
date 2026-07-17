import type { ProductCategory } from "./categories";
import { comparisons, getComparison } from "./comparisons";
import { getGlossaryTerm } from "./glossary";
import { cityLandings } from "./local-seo";
import { products } from "./products";
import { projects } from "./projects";
import { getUseCase, useCases } from "./use-cases";

const blogTitles: Record<string, string> = {
  "arena-stadyum-aydinlatma-rehberi": "Arena ve Stadyum Aydınlatma Rehberi",
  "blinder-strobe-rehberi": "Blinder ve Strobe Rehberi",
  "blinder-vs-strobe-farki": "Blinder vs Strobe Farkı",
  "dmx-aydinlatma-kurulumu": "DMX Aydınlatma Kurulumu",
  "dmx-universe-planlama-rehberi": "DMX Universe Planlama Rehberi",
  "festival-aydinlatma-butce-planlama": "Festival Aydınlatma Bütçe Planlama",
  "ip66-beam-rehberi": "IP66 Beam Rehberi",
  "ip66-dis-mekan-beam-secimi": "IP66 Dış Mekân Beam Seçimi",
  "istanbul-sahne-aydinlatma-rehberi": "İstanbul Sahne Aydınlatma Rehberi",
  "konser-aydinlatma-rehberi": "Konser Aydınlatma Rehberi",
  "kurumsal-lansman-aydinlatma-rehberi": "Kurumsal Lansman Aydınlatma Rehberi",
  "led-bar-sahne-rehberi": "LED Bar Sahne Rehberi",
  "moving-head-beam-rehberi": "Moving Head Beam Rehberi",
  "moving-head-bakim-rehberi": "Moving Head Bakım Rehberi",
  "moving-head-konser-kurulumu": "Moving Head Konser Kurulumu",
  "profesyonel-sahne-isigi-rehberi": "Profesyonel Sahne Işığı Rehberi",
  "sahne-aydinlatma-rehberi": "Sahne Aydınlatma Rehberi",
  "truss-planlama-sahne-isigi": "Truss Planlama Rehberi",
  "wash-moving-head-rehberi": "Wash Moving Head Rehberi",
};

export type ResolvedLink = { label: string; href: string };

export type RelatedLinkGroup = {
  title: string;
  links: ResolvedLink[];
};

type Refs = {
  blogs?: string[];
  products?: string[];
  useCases?: string[];
  projects?: string[];
  comparisons?: string[];
  glossary?: string[];
  cities?: string[];
  paths?: ResolvedLink[];
};

function resolveRefs(refs: Refs): RelatedLinkGroup[] {
  const groups: RelatedLinkGroup[] = [];

  if (refs.products?.length) {
    const links = refs.products
      .map((slug) => products.find((p) => p.slug === slug))
      .filter(Boolean)
      .map((p) => ({ label: p!.name, href: `/urunler/${p!.slug}` }));
    if (links.length) groups.push({ title: "Ürünler", links });
  }

  if (refs.useCases?.length) {
    const links = refs.useCases
      .map((slug) => getUseCase(slug))
      .filter(Boolean)
      .map((u) => ({ label: u!.title, href: `/kullanim-alanlari/${u!.slug}` }));
    if (links.length) groups.push({ title: "Kullanım alanları", links });
  }

  if (refs.blogs?.length) {
    const links = refs.blogs
      .filter((slug) => blogTitles[slug])
      .map((slug) => ({ label: blogTitles[slug], href: `/blog/${slug}` }));
    if (links.length) groups.push({ title: "Rehberler", links });
  }

  if (refs.projects?.length) {
    const links = refs.projects
      .map((slug) => projects.find((p) => p.slug === slug))
      .filter(Boolean)
      .map((p) => ({ label: p!.title, href: `/projeler/${p!.slug}` }));
    if (links.length) groups.push({ title: "Projeler", links });
  }

  if (refs.comparisons?.length) {
    const links = refs.comparisons
      .map((slug) => getComparison(slug))
      .filter(Boolean)
      .map((c) => ({ label: c!.title, href: c!.path }));
    if (links.length) groups.push({ title: "Karşılaştırmalar", links });
  }

  if (refs.glossary?.length) {
    const links = refs.glossary
      .map((slug) => getGlossaryTerm(slug))
      .filter(Boolean)
      .map((t) => ({ label: t!.title, href: `/sozluk/${t!.slug}` }));
    if (links.length) groups.push({ title: "Sözlük", links });
  }

  if (refs.cities?.length) {
    const links = refs.cities
      .map((slug) => cityLandings.find((c) => c.slug === slug))
      .filter(Boolean)
      .map((c) => ({ label: c!.title, href: c!.path }));
    if (links.length) groups.push({ title: "Bölgesel hizmet", links });
  }

  if (refs.paths?.length) {
    groups.push({ title: "Keşfet", links: refs.paths });
  }

  return groups;
}

const blogRelations: Record<string, Refs> = {
  "arena-stadyum-aydinlatma-rehberi": {
    useCases: ["stadyum-arena", "konser-festival"],
    products: ["beam-king-ip", "blinder-800-ip"],
    comparisons: ["beam-king-ip-vs-tornado-ip"],
    projects: ["istanbul-acikhava-konser-2024"],
    glossary: ["art-net-nedir"],
  },
  "blinder-strobe-rehberi": {
    products: ["blinder-400-ip", "blinder-800-ip", "strike-pro-ip"],
    useCases: ["konser-festival", "mimari-aydinlatma"],
    comparisons: ["blinder-400-ip-vs-800-ip"],
    glossary: ["blinder-strobe-nedir"],
    blogs: ["blinder-vs-strobe-farki"],
  },
  "blinder-vs-strobe-farki": {
    products: ["blinder-800-ip", "strike-pro-ip"],
    blogs: ["blinder-strobe-rehberi"],
    comparisons: ["blinder-400-ip-vs-800-ip"],
    glossary: ["blinder-strobe-nedir"],
  },
  "dmx-aydinlatma-kurulumu": {
    glossary: ["dmx512-nedir", "art-net-nedir"],
    blogs: ["dmx-universe-planlama-rehberi"],
    useCases: ["tv-studyo", "konser-festival"],
  },
  "dmx-universe-planlama-rehberi": {
    glossary: ["dmx512-nedir", "art-net-nedir"],
    blogs: ["dmx-aydinlatma-kurulumu", "truss-planlama-sahne-isigi"],
    useCases: ["stadyum-arena"],
  },
  "festival-aydinlatma-butce-planlama": {
    useCases: ["konser-festival", "aydinlatma-kiralama"],
    projects: ["antalya-festival-sahne-2023"],
    blogs: ["konser-aydinlatma-rehberi", "ip66-dis-mekan-beam-secimi"],
  },
  "ip66-beam-rehberi": {
    products: ["beam-king-ip"],
    comparisons: ["beam-king-380-vs-ip"],
    glossary: ["ip-koruma-sinifi-nedir"],
    useCases: ["konser-festival", "mimari-aydinlatma"],
    blogs: ["ip66-dis-mekan-beam-secimi"],
  },
  "ip66-dis-mekan-beam-secimi": {
    products: ["beam-king-ip", "blinder-800-ip"],
    comparisons: ["beam-king-380-vs-ip"],
    useCases: ["konser-festival", "stadyum-arena"],
    projects: ["istanbul-acikhava-konser-2024"],
  },
  "istanbul-sahne-aydinlatma-rehberi": {
    cities: ["istanbul-sahne-aydinlatma"],
    useCases: ["konser-festival", "dugun-etkinlik"],
    blogs: ["konser-aydinlatma-rehberi", "sahne-aydinlatma-rehberi"],
    projects: ["istanbul-acikhava-konser-2024", "istanbul-kurumsal-lansman-2025"],
  },
  "konser-aydinlatma-rehberi": {
    useCases: ["konser-festival", "stadyum-arena"],
    products: ["beam-king-ip", "wash-3715"],
    blogs: ["moving-head-konser-kurulumu", "festival-aydinlatma-butce-planlama"],
    comparisons: ["beam-king-ip-vs-tornado-ip"],
  },
  "kurumsal-lansman-aydinlatma-rehberi": {
    useCases: ["fuar-lansman"],
    products: ["diamond-line-1240-eco", "wash-3715", "blinder-400-ip"],
    projects: ["istanbul-kurumsal-lansman-2025", "izmir-fuar-standi-2024"],
    blogs: ["led-bar-sahne-rehberi"],
  },
  "led-bar-sahne-rehberi": {
    products: ["diamond-line-1240-eco", "led-beam-wash-150"],
    useCases: ["fuar-lansman", "dugun-etkinlik"],
    projects: ["izmir-fuar-standi-2024"],
    blogs: ["kurumsal-lansman-aydinlatma-rehberi"],
  },
  "moving-head-beam-rehberi": {
    glossary: ["moving-head-nedir"],
    products: ["beam-king-380", "beam-king-ip"],
    comparisons: ["beam-king-380-vs-ip", "beam-king-ip-vs-tornado-ip"],
    useCases: ["gece-kulubu", "konser-festival"],
  },
  "moving-head-bakim-rehberi": {
    blogs: ["moving-head-beam-rehberi", "wash-moving-head-rehberi"],
    useCases: ["aydinlatma-kiralama"],
    glossary: ["moving-head-nedir"],
  },
  "moving-head-konser-kurulumu": {
    useCases: ["konser-festival"],
    blogs: ["truss-planlama-sahne-isigi", "dmx-aydinlatma-kurulumu"],
    projects: ["istanbul-acikhava-konser-2024"],
    products: ["beam-king-ip", "blinder-800-ip"],
  },
  "profesyonel-sahne-isigi-rehberi": {
    blogs: ["sahne-aydinlatma-rehberi", "wash-moving-head-rehberi"],
    useCases: ["tiyatro-salon", "tv-studyo"],
    glossary: ["moving-head-nedir"],
    paths: [{ label: "Aydınlatma sözlüğü", href: "/sozluk" }],
  },
  "sahne-aydinlatma-rehberi": {
    blogs: ["profesyonel-sahne-isigi-rehberi", "dmx-aydinlatma-kurulumu"],
    useCases: ["konser-festival", "dugun-etkinlik", "tiyatro-salon"],
    paths: [
      { label: "Ürün karşılaştırmaları", href: "/karsilastirma" },
      { label: "Tüm kullanım alanları", href: "/kullanim-alanlari" },
    ],
  },
  "truss-planlama-sahne-isigi": {
    blogs: ["moving-head-konser-kurulumu", "arena-stadyum-aydinlatma-rehberi"],
    useCases: ["stadyum-arena", "konser-festival"],
    projects: ["antalya-festival-sahne-2023"],
  },
  "wash-moving-head-rehberi": {
    products: ["wash-3715", "led-beam-wash-150"],
    comparisons: ["wash-3715-vs-led-beam-wash-150"],
    useCases: ["tiyatro-salon", "tv-studyo"],
    glossary: ["moving-head-nedir"],
    projects: ["bursa-tiyatro-salonu-2024"],
  },
};

const productRelations: Record<string, Refs> = {
  "beam-king-380": {
    useCases: ["gece-kulubu", "fuar-lansman"],
    comparisons: ["beam-king-380-vs-ip"],
    blogs: ["moving-head-beam-rehberi", "moving-head-konser-kurulumu"],
    projects: ["ankara-kulup-kurulum-2023", "istanbul-kurumsal-lansman-2025"],
  },
  "beam-king-ip": {
    useCases: ["konser-festival", "stadyum-arena", "mimari-aydinlatma"],
    comparisons: ["beam-king-380-vs-ip", "beam-king-ip-vs-tornado-ip"],
    blogs: ["ip66-beam-rehberi", "ip66-dis-mekan-beam-secimi"],
    projects: ["istanbul-acikhava-konser-2024", "antalya-festival-sahne-2023"],
    cities: ["istanbul-sahne-aydinlatma"],
  },
  "blinder-400-ip": {
    useCases: ["fuar-lansman", "mimari-aydinlatma"],
    comparisons: ["blinder-400-ip-vs-800-ip"],
    blogs: ["blinder-strobe-rehberi", "kurumsal-lansman-aydinlatma-rehberi"],
    projects: ["izmir-fuar-standi-2024", "istanbul-kurumsal-lansman-2025"],
  },
  "blinder-800-ip": {
    useCases: ["konser-festival", "stadyum-arena"],
    comparisons: ["blinder-400-ip-vs-800-ip"],
    blogs: ["blinder-strobe-rehberi", "arena-stadyum-aydinlatma-rehberi"],
    projects: ["istanbul-acikhava-konser-2024"],
  },
  "diamond-line-1240-eco": {
    useCases: ["fuar-lansman", "dugun-etkinlik"],
    blogs: ["led-bar-sahne-rehberi", "kurumsal-lansman-aydinlatma-rehberi"],
    projects: ["izmir-fuar-standi-2024", "izmir-dugun-salonu-2024"],
    cities: ["izmir-sahne-aydinlatma"],
  },
  "led-beam-wash-150": {
    useCases: ["gece-kulubu", "dugun-etkinlik"],
    comparisons: ["wash-3715-vs-led-beam-wash-150"],
    blogs: ["wash-moving-head-rehberi"],
    projects: ["ankara-kulup-kurulum-2023", "izmir-dugun-salonu-2024"],
  },
  "strike-pro-ip": {
    useCases: ["konser-festival", "stadyum-arena"],
    blogs: ["blinder-strobe-rehberi", "blinder-vs-strobe-farki"],
    projects: ["istanbul-acikhava-konser-2024"],
    glossary: ["blinder-strobe-nedir"],
  },
  "tornado-ip": {
    useCases: ["gece-kulubu", "konser-festival"],
    comparisons: ["beam-king-ip-vs-tornado-ip"],
    projects: ["antalya-festival-sahne-2023"],
  },
  "wash-3715": {
    useCases: ["tiyatro-salon", "tv-studyo", "dugun-etkinlik"],
    comparisons: ["wash-3715-vs-led-beam-wash-150"],
    blogs: ["wash-moving-head-rehberi", "profesyonel-sahne-isigi-rehberi"],
    projects: ["bursa-tiyatro-salonu-2024", "izmir-dugun-salonu-2024"],
  },
};

const projectRelations: Record<string, Refs> = {
  "istanbul-acikhava-konser-2024": {
    useCases: ["konser-festival", "stadyum-arena"],
    blogs: ["konser-aydinlatma-rehberi", "arena-stadyum-aydinlatma-rehberi"],
    cities: ["istanbul-sahne-aydinlatma"],
    comparisons: ["beam-king-380-vs-ip"],
  },
  "antalya-festival-sahne-2023": {
    useCases: ["konser-festival"],
    blogs: ["festival-aydinlatma-butce-planlama", "truss-planlama-sahne-isigi"],
    comparisons: ["beam-king-ip-vs-tornado-ip"],
  },
  "izmir-fuar-standi-2024": {
    useCases: ["fuar-lansman"],
    blogs: ["kurumsal-lansman-aydinlatma-rehberi", "led-bar-sahne-rehberi"],
    cities: ["izmir-sahne-aydinlatma"],
  },
  "ankara-kulup-kurulum-2023": {
    useCases: ["gece-kulubu"],
    blogs: ["moving-head-beam-rehberi"],
    cities: ["ankara-sahne-aydinlatma"],
    comparisons: ["beam-king-380-vs-ip"],
  },
  "bursa-tiyatro-salonu-2024": {
    useCases: ["tiyatro-salon"],
    blogs: ["wash-moving-head-rehberi", "profesyonel-sahne-isigi-rehberi"],
    comparisons: ["wash-3715-vs-led-beam-wash-150"],
  },
  "izmir-dugun-salonu-2024": {
    useCases: ["dugun-etkinlik"],
    blogs: ["sahne-aydinlatma-rehberi"],
    cities: ["izmir-sahne-aydinlatma"],
  },
  "istanbul-kurumsal-lansman-2025": {
    useCases: ["fuar-lansman"],
    blogs: ["kurumsal-lansman-aydinlatma-rehberi"],
    cities: ["istanbul-sahne-aydinlatma"],
    comparisons: ["blinder-400-ip-vs-800-ip"],
  },
};

const useCaseExtras: Record<string, Refs> = {
  "konser-festival": {
    comparisons: ["beam-king-380-vs-ip", "beam-king-ip-vs-tornado-ip"],
    projects: ["istanbul-acikhava-konser-2024", "antalya-festival-sahne-2023"],
    cities: ["istanbul-sahne-aydinlatma"],
    glossary: ["ip-koruma-sinifi-nedir"],
  },
  "gece-kulubu": {
    comparisons: ["wash-3715-vs-led-beam-wash-150"],
    projects: ["ankara-kulup-kurulum-2023"],
    glossary: ["moving-head-nedir"],
  },
  "dugun-etkinlik": {
    projects: ["izmir-dugun-salonu-2024"],
    cities: ["izmir-sahne-aydinlatma"],
    blogs: ["sahne-aydinlatma-rehberi"],
  },
  "tv-studyo": {
    glossary: ["moving-head-nedir"],
    blogs: ["profesyonel-sahne-isigi-rehberi", "dmx-aydinlatma-kurulumu"],
  },
  "fuar-lansman": {
    projects: ["istanbul-kurumsal-lansman-2025", "izmir-fuar-standi-2024"],
    comparisons: ["blinder-400-ip-vs-800-ip"],
    blogs: ["kurumsal-lansman-aydinlatma-rehberi"],
  },
  "tiyatro-salon": {
    projects: ["bursa-tiyatro-salonu-2024"],
    comparisons: ["wash-3715-vs-led-beam-wash-150"],
  },
  "mimari-aydinlatma": {
    blogs: ["ip66-beam-rehberi"],
    glossary: ["ip-koruma-sinifi-nedir"],
  },
  "stadyum-arena": {
    blogs: ["arena-stadyum-aydinlatma-rehberi"],
    projects: ["istanbul-acikhava-konser-2024"],
    comparisons: ["beam-king-ip-vs-tornado-ip", "blinder-400-ip-vs-800-ip"],
  },
  "aydinlatma-kiralama": {
    blogs: ["festival-aydinlatma-butce-planlama", "moving-head-bakim-rehberi"],
    paths: [{ label: "Tüm projeler", href: "/projeler" }],
  },
};

const categoryRelations: Record<ProductCategory, Refs> = {
  "moving-head-beam": {
    useCases: ["konser-festival", "gece-kulubu"],
    comparisons: ["beam-king-380-vs-ip", "beam-king-ip-vs-tornado-ip"],
    blogs: ["moving-head-beam-rehberi", "ip66-beam-rehberi"],
    glossary: ["moving-head-nedir"],
  },
  "moving-head-wash": {
    useCases: ["tiyatro-salon", "tv-studyo"],
    comparisons: ["wash-3715-vs-led-beam-wash-150"],
    blogs: ["wash-moving-head-rehberi"],
  },
  "blinder-strobe": {
    useCases: ["konser-festival", "stadyum-arena"],
    comparisons: ["blinder-400-ip-vs-800-ip"],
    blogs: ["blinder-strobe-rehberi", "blinder-vs-strobe-farki"],
    glossary: ["blinder-strobe-nedir"],
  },
  "led-bar": {
    useCases: ["fuar-lansman", "dugun-etkinlik"],
    blogs: ["led-bar-sahne-rehberi"],
    projects: ["izmir-fuar-standi-2024"],
  },
};

const comparisonRelations: Record<string, Refs> = {
  "beam-king-380-vs-ip": {
    blogs: ["ip66-beam-rehberi", "ip66-dis-mekan-beam-secimi"],
    useCases: ["konser-festival", "gece-kulubu"],
    glossary: ["ip-koruma-sinifi-nedir"],
  },
  "wash-3715-vs-led-beam-wash-150": {
    useCases: ["tiyatro-salon", "gece-kulubu"],
    blogs: ["wash-moving-head-rehberi"],
    projects: ["bursa-tiyatro-salonu-2024", "ankara-kulup-kurulum-2023"],
  },
  "blinder-400-ip-vs-800-ip": {
    useCases: ["fuar-lansman", "stadyum-arena"],
    blogs: ["blinder-strobe-rehberi"],
    projects: ["istanbul-kurumsal-lansman-2025"],
  },
  "beam-king-ip-vs-tornado-ip": {
    useCases: ["konser-festival"],
    blogs: ["moving-head-beam-rehberi", "konser-aydinlatma-rehberi"],
    projects: ["antalya-festival-sahne-2023"],
  },
};

const cityExtras: Record<string, Refs> = {
  "istanbul-sahne-aydinlatma": {
    useCases: ["konser-festival", "fuar-lansman"],
    projects: ["istanbul-acikhava-konser-2024", "istanbul-kurumsal-lansman-2025"],
    blogs: ["istanbul-sahne-aydinlatma-rehberi", "konser-aydinlatma-rehberi"],
    paths: [{ label: "Ürün karşılaştırmaları", href: "/karsilastirma" }],
  },
  "ankara-sahne-aydinlatma": {
    useCases: ["gece-kulubu", "tiyatro-salon"],
    projects: ["ankara-kulup-kurulum-2023"],
    blogs: ["moving-head-beam-rehberi"],
  },
  "izmir-sahne-aydinlatma": {
    useCases: ["dugun-etkinlik", "fuar-lansman"],
    projects: ["izmir-fuar-standi-2024", "izmir-dugun-salonu-2024"],
    blogs: ["led-bar-sahne-rehberi", "konser-aydinlatma-rehberi"],
  },
};

export const seoHubLinks: RelatedLinkGroup[] = [
  {
    title: "Rehber merkezleri",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Sözlük", href: "/sozluk" },
      { label: "Karşılaştırmalar", href: "/karsilastirma" },
      { label: "Kullanım alanları", href: "/kullanim-alanlari" },
    ],
  },
  {
    title: "Ürünler & hizmetler",
    links: [
      { label: "Tüm ürünler", href: "/urunler" },
      { label: "Projeler", href: "/projeler" },
      { label: "Hakkımızda", href: "/hakkimizda" },
      { label: "İletişim / Teklif", href: "/iletisim" },
    ],
  },
  {
    title: "Bölgesel",
    links: cityLandings.map((c) => ({ label: c.title, href: c.path })),
  },
];

export const aboutPageLinks: RelatedLinkGroup[] = [
  {
    title: "Hizmetlerimiz",
    links: [
      { label: "Ürünler", href: "/urunler" },
      { label: "Projeler", href: "/projeler" },
      { label: "Kullanım alanları", href: "/kullanim-alanlari" },
      { label: "İstanbul sahne aydınlatma", href: "/istanbul-sahne-aydinlatma" },
    ],
  },
  {
    title: "Rehberler",
    links: [
      { label: "Sahne aydınlatma rehberi", href: "/blog/sahne-aydinlatma-rehberi" },
      { label: "DMX kurulum rehberi", href: "/blog/dmx-aydinlatma-kurulumu" },
      { label: "Aydınlatma sözlüğü", href: "/sozluk" },
    ],
  },
];

export const projectsHubLinks: RelatedLinkGroup[] = [
  {
    title: "Kullanım alanları",
    links: [
      { label: "Konser & Festival", href: "/kullanim-alanlari/konser-festival" },
      { label: "Fuar & Lansman", href: "/kullanim-alanlari/fuar-lansman" },
      { label: "Stadyum & Arena", href: "/kullanim-alanlari/stadyum-arena" },
    ],
  },
  {
    title: "Rehberler",
    links: [
      { label: "Konser aydınlatma rehberi", href: "/blog/konser-aydinlatma-rehberi" },
      { label: "Kurumsal lansman rehberi", href: "/blog/kurumsal-lansman-aydinlatma-rehberi" },
      { label: "Ürün karşılaştırmaları", href: "/karsilastirma" },
    ],
  },
];

export const productsHubLinks: RelatedLinkGroup[] = [
  {
    title: "Kategoriler",
    links: [
      { label: "Moving Head Beam", href: "/urunler/kategori/moving-head-beam" },
      { label: "Moving Head Wash", href: "/urunler/kategori/moving-head-wash" },
      { label: "Blinder & Strobe", href: "/urunler/kategori/blinder-strobe" },
      { label: "LED Bar", href: "/urunler/kategori/led-bar" },
    ],
  },
  {
    title: "Karar destek",
    links: [
      { label: "Beam King 380 vs IP", href: "/karsilastirma/beam-king-380-vs-ip" },
      { label: "Wash 3715 vs Beam Wash 150", href: "/karsilastirma/wash-3715-vs-led-beam-wash-150" },
      { label: "Moving head nedir?", href: "/sozluk/moving-head-nedir" },
    ],
  },
];

export function getBlogRelatedGroups(slug: string): RelatedLinkGroup[] {
  return resolveRefs(blogRelations[slug] ?? {});
}

export function getProductRelatedGroups(slug: string): RelatedLinkGroup[] {
  const ucLinks = useCases
    .filter((u) => u.recommendedProductSlugs.includes(slug))
    .slice(0, 2)
    .map((u) => u.slug);
  const base = productRelations[slug] ?? {};
  const merged: Refs = {
    ...base,
    useCases: [...new Set([...(base.useCases ?? []), ...ucLinks])].slice(0, 3),
  };
  return resolveRefs(merged);
}

export function getProjectRelatedGroups(slug: string): RelatedLinkGroup[] {
  return resolveRefs(projectRelations[slug] ?? {});
}

export function getUseCaseRelatedGroups(slug: string): RelatedLinkGroup[] {
  return resolveRefs(useCaseExtras[slug] ?? {});
}

export function getCategoryRelatedGroups(slug: ProductCategory): RelatedLinkGroup[] {
  const ucFromCat = useCases.filter((u) => u.categorySlug === slug).slice(0, 2).map((u) => u.slug);
  const base = categoryRelations[slug] ?? {};
  return resolveRefs({
    ...base,
    useCases: [...new Set([...(base.useCases ?? []), ...ucFromCat])],
  });
}

export function getComparisonRelatedGroups(slug: string): RelatedLinkGroup[] {
  const c = getComparison(slug);
  const base = comparisonRelations[slug] ?? {};
  return resolveRefs({
    ...base,
    products: c ? [c.productASlug, c.productBSlug] : base.products,
  });
}

export function getCityRelatedGroups(citySlug: string): RelatedLinkGroup[] {
  const city = cityLandings.find((c) => c.slug === citySlug);
  const base = cityExtras[citySlug] ?? {};
  return resolveRefs({
    ...base,
    products: city?.productSlugs,
  });
}

export function getOtherComparisons(currentSlug: string): ResolvedLink[] {
  return comparisons
    .filter((c) => c.slug !== currentSlug)
    .slice(0, 3)
    .map((c) => ({ label: c.title, href: c.path }));
}
