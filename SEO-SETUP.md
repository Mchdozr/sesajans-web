# SESAJANS — SEO ve Arama Motoru Kurulumu

Site canlı: **https://sesajans.com.tr**

Bu adımlar kod dışında, panel üzerinden yapılır. Kod tarafı (hub’lar, blog, meta, sitemap) deploy sonrası hazırdır.

---

## Panel checklist (hibrit SEO)

### A) Google Search Console

1. [search.google.com/search-console](https://search.google.com/search-console) → özellik: `sesajans.com.tr`
2. Doğrulama: HTML etiketi → Vercel env `GOOGLE_SITE_VERIFICATION` → redeploy → Doğrula
3. **Site Haritaları** → `https://sesajans.com.tr/sitemap.xml`
4. **URL Denetimi** ile şu yeni URL’leri indeks iste:
   - `/robot-isik`
   - `/robot-isik-fiyat`
   - `/sahne-isigi`
   - `/molfez`
   - `/dj-aydinlatma`
   - `/blog/moving-head-fiyat-rehberi`
   - `/blog/robot-isik-nasil-secilir`
   - `/blog/beam-vs-wash-satinalma`
   - `/blog/blinder-molfez-rehberi`
   - `/blog/ip65-ip66-dis-mekan-fiyat`
   - `/blog/sahne-aydinlatma-butce-2026`
   - `/blog/dj-kulup-isik-sistemi`
   - `/blog/aydinlatma-kiralama-vs-satinalma`
5. Haftalık: **Performans → Sorgular** → fırsat kelimeleri `web/src/lib/seo-keywords.ts` envanterine ekle

### B) Bing Webmaster Tools

1. [bing.com/webmasters](https://www.bing.com/webmasters)
2. GSC’den içe aktar veya manuel
3. Sitemap: `https://sesajans.com.tr/sitemap.xml`

### C) Google Analytics 4

1. [analytics.google.com](https://analytics.google.com) → ölçüm kimliği → Vercel `NEXT_PUBLIC_GA_ID`
2. Redeploy → çerez **Kabul Et** sonrası aktif
3. Mevcut event: `contact_submit` (form gönderimi)
4. Önerilen event: `quote_cta_click` — “Teklif Al” / fiyat CTA tıklamaları (GA4 → Yönetici → Events; veya Tag Manager)

### D) Google Business Profile

1. [business.google.com](https://business.google.com)
2. İşletme: **SESAJANS**
3. Kategori: Aydınlatma ekipmanı tedarikçisi / Etkinlik teknolojisi
4. Adres: Şişli (site.ts ile aynı)
5. Web: `https://sesajans.com.tr`
6. Kısa ürün açıklamaları: robot ışık, blinder/molfez, LED bar
7. Fotoğraf + çalışma saatleri güncelle

### E) Vercel Speed Insights

Proje paneli → Speed Insights → Enable

### F) Sosyal

Instagram, LinkedIn, YouTube bio → `https://sesajans.com.tr` (+ isteğe bağlı `/robot-isik`)

### G) Resend (iletişim formu)

1. [resend.com](https://resend.com) → API key + domain DNS
2. Vercel env: `RESEND_API_KEY`, `RESEND_FROM`, `CONTACT_EMAIL`

---

## İzleme KPI’ları (90 gün)

| Metrik | Araç | Hedef sinyal |
|--------|------|----------------|
| `robot ışık`, `moving head fiyat`, `molfez` gösterim | GSC | Artış |
| Yeni URL indeks | GSC | 13+ sayfa |
| `contact_submit` | GA4 | Teklif formu artışı |
| Core Web Vitals | Speed Insights | Bozulmama |

---

## İçerik takvimi

- Ayda ≥2 blog: `web/content/blog/*.mdx` → push → Vercel deploy
- Seed kelimeler: `web/seo-agent/config.json` + `web/src/lib/seo-keywords.ts`
- Haftalık otomasyon (opsiyonel): `cd web && npm run seo:run`
