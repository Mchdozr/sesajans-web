import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "KVKK Aydınlatma Metni",
  path: "/kvkk-aydinlatma-metni",
});

export default function Page() {
  return (
    <LegalLayout title="KVKK Aydınlatma Metni">
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında {site.brand} olarak veri
        sorumlusu sıfatıyla aşağıdaki bilgileri sunuyoruz.
      </p>
      <p>
        <strong>İşlenen veriler:</strong> Ad soyad, e-posta, telefon,
        mesaj içeriği ve iletişim tercihleri.
      </p>
      <p>
        <strong>Amaç:</strong> Teklif hazırlama, müşteri ilişkileri ve
        teknik destek süreçleri.
      </p>
      <p>
        Haklarınız için {site.email} adresine başvurabilirsiniz.
      </p>
    </LegalLayout>
  );
}
