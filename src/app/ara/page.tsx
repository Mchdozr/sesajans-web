import type { Metadata } from "next";
import { SearchContent } from "@/components/SearchContent";
import { buildSearchIndex } from "@/lib/search";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Site İçi Arama",
    description: "Ürün, blog, sözlük ve karşılaştırma içeriklerinde arama yapın.",
    path: "/ara",
  }),
  robots: { index: false, follow: true },
};

export default function AraPage() {
  const items = buildSearchIndex();
  return <SearchContent items={items} />;
}
