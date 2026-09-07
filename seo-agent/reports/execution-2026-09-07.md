# SESAJANS SEO Execution Report — 2026-09-07

## Özet

Haftalık SEO döngüsü tamamlandı. Amaç: ürün satın alma niyetli kullanıcılar ve yapay zeka aramalarında (ChatGPT, Claude, Perplexity) SESAJANS'ın misyon odaklı görünürlüğünü artırmak.

| Metrik | Önceki | Sonraki |
|--------|--------|---------|
| Blog yazısı | 27 | 29 |
| İndekslenebilir sayfa | 166 | 168 |
| JSON-LD (ürün) | Offer | Offer + PriceSpecification |
| JSON-LD (site) | WebSite | WebSite + SearchAction |
| JSON-LD (ürünler) | — | ItemList |
| AI crawler | Genel allow | GPTBot, ClaudeBot, PerplexityBot vb. |

## Rakip Araştırması (2026-09-07)

- 6 rakip tarandı (Sanyi Lights, Ses Pazarı, Meteor Müzik, Pulsarpro, Mars Music, LEDAJANS)
- Rakip benchmark meta uzunluğu: ~95 karakter
- Rakip benchmark sitemap: ~48 URL
- SESAJANS sitemap: 168+ URL (rakiplerin üzerinde)

## Uygulanan Değişiklikler

### 1. Blog içerik (satın alma niyeti)

- `hareketli-kafa-sesajans-rehber` — 800+ kelime, ürün linkleri, SSS
- `robot-isik-fiyat-sesajans-rehber` — 800+ kelime, fiyat faktörleri, teklif süreci

### 2. Schema zenginleştirme

- `websiteJsonLd`: SearchAction (`/ara?q=`)
- `productJsonLd`: PriceSpecification (proje bazlı teklif)
- `articleJsonLd`: inLanguage, keywords
- `/urunler`: ItemList schema (11 ürün)

### 3. AI arama görünürlüğü

- `robots.ts`: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, cohere-ai
- `llms.txt`: misyon, satın alma sayfaları, ürünler, yeni bloglar

## KPI Takibi

- Search Console: tıklama, gösterim, dizine eklenen sayfa
- GA4: `contact_submit` event
- AI referral: llms.txt ve schema ile crawler erişimi

## Sonraki Hafta

- `beam-robot-isik-sesajans-rehber` blog taslağı
- `led-blinder-sesajans-rehber` blog taslağı
- Rakip blog URL yapısı inceleme (pending)
