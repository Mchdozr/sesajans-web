import type { Metadata } from "next";
import { UseCasesContent } from "@/components/UseCasesContent";
import { PageHeaderStatic } from "@/components/PageHeaderStatic";
import { buildMetadata } from "@/lib/seo";
import { dictionary as tr } from "@/lib/i18n/dictionaries/tr";

export const metadata: Metadata = buildMetadata({
  title: "Kullanım Alanları",
  description: "Konser, festival, kulüp, TV stüdyosu ve mimari aydınlatma çözümleri.",
  path: "/kullanim-alanlari",
});

export default function KullanimAlanlariPage() {
  const p = tr.useCasesPage;
  return (
    <>
      <PageHeaderStatic
        eyebrow={p.eyebrow}
        title={p.title}
        description={p.description}
        breadcrumb={[{ name: tr.nav.useCases, path: "/kullanim-alanlari" }]}
        homeLabel={tr.common.home}
      />
      <UseCasesContent />
    </>
  );
}
