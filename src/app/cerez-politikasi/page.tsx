import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Çerez Politikası",
  path: "/cerez-politikasi",
});

export default function Page() {
  return (
    <LegalLayout title="Çerez Politikası">
      <p>
        Web sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek için
        çerezler kullanabilir.
      </p>
      <p>
        Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz; ancak bazı özellikler
        düzgün çalışmayabilir.
      </p>
    </LegalLayout>
  );
}
