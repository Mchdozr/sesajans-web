# LEDAJANS — SEO Kurulum ve İzleme

Site: **https://ledajans.com**

## 1) Google Search Console

1. [search.google.com/search-console](https://search.google.com/search-console) → Özellik ekle
2. Alan adı: `ledajans.com`
3. Doğrulama: DNS TXT veya HTML dosyası
4. Site Haritaları → `https://ledajans.com/sitemap_index.xml` ekle
5. İzleme sorguları:
   - led ekran
   - led ekran fiyatları
   - led ekran kiralama
   - iç mekan led ekran
   - dış mekan led ekran

## 2) Bing Webmaster Tools

1. [bing.com/webmasters](https://www.bing.com/webmasters)
2. GSC'den içe aktar veya manuel ekle
3. Sitemap: `https://ledajans.com/sitemap_index.xml`

## 3) Google Analytics 4

1. Yeni özellik: LEDAJANS
2. Ölçüm kimliği → WordPress (Site Kit veya GTM)
3. Event'ler: `contact_submit`, `phone_click`, `quote_request`

## 4) Core Web Vitals İzleme

- PageSpeed Insights: haftalık `ledajans.com` kontrol
- GSC → Deneyim → Core Web Vitals
- Hedef: LCP < 2.5s, INP < 200ms, CLS < 0.1

## 5) Haftalık Rutin

| Gün | Görev |
|-----|-------|
| Pazartesi | GSC — "led ekran" pozisyon ve CTR |
| Çarşamba | 1 içerik güncelleme veya blog |
| Cuma | PageSpeed + `npm run ledajans:audit` |
| Ay sonu | Rakip SERP + backlink raporu |

## 6) KPI Hedefleri

| Metrik | Mevcut | 30 gün | 90 gün |
|--------|--------|--------|--------|
| "led ekran" sırası | 5 | 3 | 1 |
| CTR | ölç | +20% | +40% |
| Organik tıklama | ölç | +30% | +80% |
| LCP (mobil) | >4s | <3s | <2.5s |

## 7) Otomatik İzleme

```bash
npm run ledajans:audit    # Canlı site SEO audit
npm run ledajans:kpi      # KPI log güncelle
```

Log dosyası: `ledajans-seo/monitoring/kpi-log.json`
