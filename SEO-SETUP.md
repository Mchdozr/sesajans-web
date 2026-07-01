# SESAJANS — SEO ve Arama Motoru Kurulumu

Site canlı: **https://sesajans.com.tr**

Bu adımlar kod dışında, panel üzerinden yapılır.

---

## 1) Google Search Console

1. [search.google.com/search-console](https://search.google.com/search-console) → **Özellik ekle**
2. **Alan adı** → `sesajans.com.tr`
3. Doğrulama yöntemi: **HTML etiketi**
4. Meta etiket değerini kopyala → Vercel **Environment Variables**:
   - `GOOGLE_SITE_VERIFICATION` = meta content değeri
5. Redeploy sonrası **Doğrula**
6. **Site Haritaları** → `https://sesajans.com.tr/sitemap.xml` ekle

---

## 2) Bing Webmaster Tools

1. [bing.com/webmasters](https://www.bing.com/webmasters)
2. Google Search Console'dan içe aktar veya manuel ekle
3. Sitemap: `https://sesajans.com.tr/sitemap.xml`

---

## 3) Google Analytics 4

1. [analytics.google.com](https://analytics.google.com) → yeni özellik
2. Ölçüm kimliği (`G-XXXXXXXX`) → Vercel env: `NEXT_PUBLIC_GA_ID`
3. Redeploy → sitede çerez banner'ından **Kabul Et** sonrası aktif olur

---

## 4) Vercel Speed Insights

Vercel proje paneli → **Speed Insights** → Enable (kod tarafı `@vercel/speed-insights` eklendi)

---

## 5) Google Business Profile

1. [business.google.com](https://business.google.com)
2. İşletme: **SESAJANS**
3. Kategori: Aydınlatma ekipmanı tedarikçisi / Etkinlik teknolojisi
4. Adres: `site.ts` içindeki İstanbul adresi
5. Web sitesi: `https://sesajans.com.tr`
6. Telefon ve çalışma saatleri güncelle

---

## 6) Resend (İletişim Formu E-posta)

1. [resend.com](https://resend.com) → API key
2. Domain doğrula: `sesajans.com.tr` (DNS TXT kaydı)
3. Vercel env:
   - `RESEND_API_KEY`
   - `RESEND_FROM=SESAJANS <noreply@sesajans.com.tr>`
   - `CONTACT_EMAIL=info@sesajans.com.tr`

API key yoksa form konsola log yazar (geliştirme modu).

---

## 7) Sosyal profiller

Instagram, LinkedIn, YouTube bio alanlarına `https://sesajans.com.tr` ekle.

---

## İzleme KPI'ları

| Metrik | Araç |
|--------|------|
| Tıklama / gösterim | Search Console |
| Core Web Vitals | Vercel Speed Insights |
| Form gönderimi | GA4 event `contact_submit` |
| Sayfa hızı | Vercel Analytics |

---

## İçerik takvimi

Ayda 2 blog yazısı: `content/blog/yeni-yazi.mdx` → `git push` → otomatik deploy.
