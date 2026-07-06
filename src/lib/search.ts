import { products } from "@/lib/products";
import { getAllBlogPosts } from "@/lib/blog";
import { glossaryTerms } from "@/lib/glossary";
import { comparisons } from "@/lib/comparisons";
import { useCases } from "@/lib/use-cases";
import { cityLandings } from "@/lib/local-seo";
import { projects } from "@/lib/projects";

export type SearchGroup =
  | "product"
  | "blog"
  | "glossary"
  | "comparison"
  | "useCase"
  | "city"
  | "project"
  | "page";

export type SearchItem = {
  title: string;
  description: string;
  href: string;
  group: SearchGroup;
  /** Ek eşleşme metni (keywords vb.) — UI'da gösterilmez. */
  haystack: string;
};

/** Statik arama dizini; build sırasında server tarafında üretilir. */
export function buildSearchIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const p of products) {
    items.push({
      title: p.name,
      description: p.excerpt,
      href: `/urunler/${p.slug}`,
      group: "product",
      haystack: [p.tagline, p.keywords.join(" "), p.category].join(" "),
    });
  }

  for (const post of getAllBlogPosts()) {
    items.push({
      title: post.title,
      description: post.description,
      href: `/blog/${post.slug}`,
      group: "blog",
      haystack: [post.category, post.keywords.join(" ")].join(" "),
    });
  }

  for (const term of glossaryTerms) {
    items.push({
      title: term.title,
      description: term.definition,
      href: `/sozluk/${term.slug}`,
      group: "glossary",
      haystack: term.keywords.join(" "),
    });
  }

  for (const c of comparisons) {
    items.push({
      title: c.title,
      description: c.description,
      href: c.path,
      group: "comparison",
      haystack: c.keywords.join(" "),
    });
  }

  for (const uc of useCases) {
    items.push({
      title: uc.title,
      description: uc.seoDescription,
      href: `/kullanim-alanlari/${uc.slug}`,
      group: "useCase",
      haystack: uc.keywords.join(" "),
    });
  }

  for (const city of cityLandings) {
    items.push({
      title: city.title,
      description: city.seoDescription,
      href: city.path,
      group: "city",
      haystack: [city.city, city.keywords.join(" ")].join(" "),
    });
  }

  for (const project of projects) {
    items.push({
      title: project.title,
      description: project.summary,
      href: `/projeler/${project.slug}`,
      group: "project",
      haystack: [project.venue, project.city, String(project.year)].join(" "),
    });
  }

  items.push(
    {
      title: "İletişim & Teklif",
      description: "Projeleriniz için teklif ve danışmanlık talebi oluşturun.",
      href: "/iletisim",
      group: "page",
      haystack: "iletişim teklif contact quote form",
    },
    {
      title: "Hakkımızda",
      description: "SESAJANS'ın hikayesi, deneyimi ve hizmet yaklaşımı.",
      href: "/hakkimizda",
      group: "page",
      haystack: "hakkımızda about şirket firma",
    },
    {
      title: "Sık Sorulan Sorular",
      description: "Satış, kurulum, garanti ve teknik destek hakkında SSS.",
      href: "/sss",
      group: "page",
      haystack: "sss faq soru garanti kargo",
    },
  );

  return items;
}
