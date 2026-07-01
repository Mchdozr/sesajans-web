import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Gizlilik Politikası",
  path: "/gizlilik-politikasi",
});

export default function Page() {
  return (
    <LegalLayout title="Gizlilik Politikası" path="/gizlilik-politikasi">
      <p>
        {site.brand} olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu politika,
        web sitemiz ve iletişim formları aracılığıyla toplanan verilerin nasıl işlendiğini
        açıklar.
      </p>
      <p>
        İletişim formu aracılığıyla paylaştığınız ad, e-posta, telefon ve mesaj içeriği yalnızca
        talebinize yanıt vermek ve teklif hazırlamak amacıyla kullanılır.
      </p>
      <p>
        Verileriniz üçüncü taraflarla paylaşılmaz; yasal zorunluluklar hariç tutulmaz.
      </p>
    </LegalLayout>
  );
}
