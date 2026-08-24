# SESAJANS SEO Yürütme Raporu — 2026-08-24

## Özet

Haftalık SEO döngüsü tamamlandı. Hedef: **ürün satın alma intent** ve **yapay zeka aramalarında misyon odaklı görünürlük**.

| Metrik | Değer |
|--------|-------|
| Site | https://sesajans.com.tr |
| Ürün sayfası | 9 |
| Blog yazısı | 29 (+2 yeni) |
| Sitemap URL | 168+ |
| Rakip benchmark sitemap | ~48 URL |
| Rakip JSON-LD (max) | 5 tip |

## Rakip araştırma bulguları

- **Sanyi Lights:** Blog/rehber URL yapısı aktif; JSON-LD yok
- **Ses Pazarı:** Perakende fiyat odaklı; 131 internal link
- **Meteor Müzik, Pulsarpro, Mars Music:** Beam/wash kategori yapısı
- **LEDAJANS:** LED aydınlatma rakip

**SESAJANS avantajı:** JSON-LD (Organization, LocalBusiness, Product+Offer, FAQ, BlogPosting, ItemList, SearchAction), llms.txt, AI crawler allowlist, 29 blog + şehir landing + karşılaştırma + sözlük.

## Uygulanan değişiklikler

### 1. Ticari içerik (satın alma intent)

- `hareketli-kafa-sesajans-rehber.mdx` — 800+ kelime, ürün linkleri, satın alma kriterleri
- `robot-isik-fiyat-sesajans-rehber.mdx` — 800+ kelime, fiyat faktörleri, teklif süreci
- Ürün sayfa meta: "Satın Al | Fiyat Teklifi"
- Ürünler sayfa meta: satın alma + fiyat teklifi odaklı

### 2. Schema zenginleştirme

- Organization: `knowsAbout`, `slogan`
- WebSite: `SearchAction` (/ara?q=)
- Product: `additionalProperty` (specs + IP), `businessFunction` Sell, `priceSpecification`
- Ürünler sayfası: `ItemList` JSON-LD

### 3. Yapay zeka arama optimizasyonu

- `public/llms.txt` — misyon, satın alma URL'leri, tüm ürünler, yeni bloglar
- `robots.ts` — GPTBot, ClaudeBot, PerplexityBot, Google-Extended vb. allow

## Kalan görevler (sonraki döngü)

- [LOW] Long-tail blog: beam robot ışık, led blinder, dj ışık, kulüp aydınlatma (8 konu)
- [LOW] Rakip blog URL yapısı inceleme (manuel)

## KPI takibi

- Google Search Console: tıklama, gösterim, dizine eklenen sayfa
- GA4: `contact_submit` event
- AI arama: Perplexity/ChatGPT'te "sesajans robot ışık fiyat" test

## Doğrulama

- `npm run build` — başarılı (166+ statik sayfa)
- Yeni blog URL'leri sitemap'te
