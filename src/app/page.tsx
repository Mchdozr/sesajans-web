import { HomeContent } from "@/components/HomeContent";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { homeFaqs } from "@/lib/content";

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <HomeContent />
    </>
  );
}
