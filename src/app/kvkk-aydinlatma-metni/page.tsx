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
    <LegalLayout title="KVKK Aydınlatma Metni" path="/kvkk-aydinlatma-metni">
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) kapsamında{" "}
        <strong>{site.brand}</strong> olarak veri sorumlusu sıfatıyla kişisel verilerinizin
        işlenmesine ilişkin aşağıdaki bilgileri sunuyoruz.
      </p>
      <h2>Veri sorumlusu</h2>
      <p>
        {site.brand} — {site.address}
        <br />
        E-posta: {site.email} · Telefon: {site.phoneDisplay}
      </p>
      <h2>İşlenen kişisel veriler</h2>
      <p>
        İletişim formu aracılığıyla: ad soyad, e-posta adresi, telefon numarası, mesaj
        içeriği, konu/ürün tercihi ve IP adresi (güvenlik amaçlı).
      </p>
      <h2>İşleme amaçları</h2>
      <ul>
        <li>Fiyat teklifi ve proje danışmanlığı sunmak</li>
        <li>Teknik destek taleplerini yanıtlamak</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        <li>Spam ve kötüye kullanımın önlenmesi</li>
      </ul>
      <h2>Hukuki sebep</h2>
      <p>
        KVKK m.5/2 (c) sözleşmenin kurulması veya ifası, (f) meşru menfaat ve açık rızanız
        (iletişim formu onay kutusu).
      </p>
      <h2>Saklama süresi</h2>
      <p>
        İletişim kayıtları talebin sonuçlandırılmasından itibaren en fazla 2 yıl saklanır;
        yasal zorunluluk halinde bu süre uzatılabilir.
      </p>
      <h2>Haklarınız</h2>
      <p>
        KVKK m.11 kapsamında verilerinize erişim, düzeltme, silme, işlemeyi kısıtlama ve
        itiraz haklarına sahipsiniz. Başvuru: {site.email}
      </p>
    </LegalLayout>
  );
}
