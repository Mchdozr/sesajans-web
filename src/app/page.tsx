import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { homeFaqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Profesyonel Sahne Aydınlatma",
  description: site.description,
  path: "/",
  keywords: [
    "sahne aydınlatma",
    "moving head",
    "blinder",
    "strobe",
    "led bar",
    "konser aydınlatma",
    "sesajans",
  ],
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <HomeContent />
    </>
  );
}
