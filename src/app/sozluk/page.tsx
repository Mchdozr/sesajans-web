import type { Metadata } from "next";
import { GlossaryIndexContent } from "@/components/GlossaryTermContent";
import { buildMetadata } from "@/lib/seo";
import { glossaryTerms } from "@/lib/glossary";

export const metadata: Metadata = buildMetadata({
  title: "Aydınlatma Sözlüğü",
  description:
    "DMX512, moving head, IP koruma ve sahne aydınlatma terimlerinin açıklamaları.",
  path: "/sozluk",
  keywords: ["dmx nedir", "moving head nedir", "ip66 nedir", "sahne aydınlatma sözlüğü"],
});

export default function GlossaryIndexPage() {
  return (
    <GlossaryIndexContent
      terms={glossaryTerms.map((t) => ({
        slug: t.slug,
        title: t.title,
        definition: t.definition,
      }))}
    />
  );
}
