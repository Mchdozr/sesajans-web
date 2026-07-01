import type { Metadata } from "next";
import { ContactContent } from "@/components/ContactContent";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "İletişim | Teklif ve Danışmanlık",
  description: "Profesyonel aydınlatma projeleriniz için bize ulaşın.",
  path: "/iletisim",
});

export default function IletisimPage() {
  return <ContactContent />;
}
