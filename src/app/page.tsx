import type { Metadata } from "next";
import { HomeContent } from "@/components/HomeContent";
import { HomeBlogPreview, HomeUseCasesPreview } from "@/components/HomeSections";
import { JsonLd } from "@/components/JsonLd";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { homeFaqs } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${site.brand} | ${site.titleTagline}`,
    description: site.description,
    path: "/",
    keywords: [
      "sahne aydınlatma",
      "sahne ışığı",
      "moving head",
      "robot ışık",
      "blinder",
      "strobe",
      "led bar",
      "konser aydınlatma",
      "moving head fiyat",
      "istanbul sahne aydınlatma",
      "sesajans",
    ],
  }),
  title: { absolute: `${site.brand} | ${site.titleTagline}` },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <HomeContent />
      <HomeUseCasesPreview />
      <HomeBlogPreview />
    </>
  );
}
