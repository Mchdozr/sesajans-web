import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Kullanım Koşulları",
  path: "/kullanim-kosullari",
});

export default function Page() {
  return (
    <LegalLayout title="Kullanım Koşulları" path="/kullanim-kosullari">
      <p>
        {site.url} web sitesini kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız.
      </p>
      <p>
        Sitedeki ürün bilgileri ve teknik özellikler bilgilendirme amaçlıdır; önceden
        haber verilmeksizin güncellenebilir.
      </p>
      <p>
        Fiyat teklifleri bağlayıcı değildir; kesin fiyat yazılı teklif ile belirlenir.
      </p>
    </LegalLayout>
  );
}
