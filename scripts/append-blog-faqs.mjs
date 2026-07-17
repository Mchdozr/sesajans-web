import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "content/blog");
const faqBlock = `

## Sık sorulan sorular

**S: Bu konuda SESAJANS nasıl yardımcı olur?**
C: Ürün seçimi, stok, kurulum ve ücretsiz fiyat teklifi için [iletişim](/iletisim) formunu veya [/bayi](/bayi) sayfasını kullanın.

**S: Satın alma mı kiralama mı tercih edilmeli?**
C: Tek etkinlik için kiralama, kalıcı mekân için satış genelde daha uygundur. [Kiralama](/kullanim-alanlari/aydinlatma-kiralama) seçeneklerini inceleyebilirsiniz.

**S: Teklif için hangi bilgi gerekir?**
C: Mekân tipi, tarih ve yaklaşık ürün ihtiyacı yeterlidir; teknik keşif sonrası net liste çıkarılır.
`;

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"))) {
  const full = path.join(dir, file);
  let raw = fs.readFileSync(full, "utf8");
  if (raw.includes("**S:")) continue;
  raw = raw.trimEnd() + faqBlock;
  fs.writeFileSync(full, raw);
  console.log("faq:", file);
}
