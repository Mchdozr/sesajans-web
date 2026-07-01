import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Çerez Politikası",
  path: "/cerez-politikasi",
});

export default function Page() {
  return (
    <LegalLayout title="Çerez Politikası" path="/cerez-politikasi">
      <p>
        <strong>SESAJANS</strong> (sesajans.com.tr) olarak, web sitemizin düzgün çalışması,
        kullanıcı deneyiminin iyileştirilmesi ve site trafiğinin analiz edilmesi amacıyla
        çerezler kullanmaktayız.
      </p>
      <h2>Kullanılan çerez türleri</h2>
      <ul>
        <li>
          <strong>Zorunlu çerezler:</strong> Tema tercihi (açık/koyu mod) ve dil seçimi gibi
          temel işlevler için kullanılır.
        </li>
        <li>
          <strong>Analitik çerezler:</strong> Google Analytics 4 ile ziyaretçi sayısı, sayfa
          görüntüleme ve form etkileşimlerini ölçer. Yalnızca çerez banner&apos;ından onay
          vermeniz halinde yüklenir.
        </li>
        <li>
          <strong>Performans çerezleri:</strong> Vercel Speed Insights ile sayfa performansını
          izlemek için kullanılabilir.
        </li>
      </ul>
      <h2>Çerez yönetimi</h2>
      <p>
        Site altındaki çerez bildiriminden tercihinizi belirleyebilirsiniz. Tarayıcı
        ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz; bu durumda bazı
        özellikler düzgün çalışmayabilir.
      </p>
      <p>
        Sorularınız için{" "}
        <a href="mailto:info@sesajans.com.tr" className="text-brand hover:underline">
          info@sesajans.com.tr
        </a>{" "}
        adresine yazabilirsiniz.
      </p>
    </LegalLayout>
  );
}
