---
name: sesajans-seo-agent
description: >-
  SESAJANS için rakip sahne aydınlatma firmalarını araştırır, Google SEO planı
  üretir ve güvenli kod değişikliklerini otomatik uygular. Kullanıcı SEO ajanı,
  rakip analizi, organik trafik, otomatik blog veya seo:run dediğinde kullan.
---

# SESAJANS SEO Ajanı

Sürekli rakip araştırması → SEO planı → koda uygulama döngüsü.

## Hızlı başlat

```bash
cd web
npm run seo:run
```

Çıktılar: `seo-agent/reports/latest-plan.md`, `seo-agent/queue/pending.json`

## Tam döngü (her çalıştırmada)

1. **Araştır** — `npm run seo:research`
   - `seo-agent/config.json` içindeki rakipleri tarar
   - Title, meta, H1, sitemap, blog/ürün URL yapısı, schema sinyalleri
2. **Planla** — `npm run seo:plan`
   - Gap analizi → öncelikli görev listesi
3. **Uygula (otomatik)** — `npm run seo:apply`
   - `auto: true` blog taslakları oluşturur (run başına max 2)
   - Build doğrular
4. **Uygula (manuel — sen)** — `pending.json` içinde `auto: false` görevler:
   - Meta/schema/UX iyileştirmeleri
   - Ürün sayfası içerik genişletme
   - İç link ağı
5. **Doğrula** — `npm run build`
6. **Yayınla** — `git push` (Vercel otomatik deploy)

## Rakip listesi güncelle

[`seo-agent/config.json`](../../seo-agent/config.json) → `competitors` dizisine gerçek rakip URL'leri ekle:

```json
{ "name": "Rakip Adı", "url": "https://rakip.com" }
```

## Otomatik uygulama sınırları

| Otomatik | Manuel |
|----------|--------|
| Blog MDX taslağı (`content/blog/`) | Schema değişiklikleri |
| | Ürün metni / fiyat |
| | Tasarım / nav |

`config.json` → `autoApply.maxBlogStubsPerRun` ile blog hızını ayarla.

## Cursor Agent talimatları

Plan sonrası **mutlaka**:

1. `latest-plan.md` oku
2. `priority: high` + `auto: false` görevleri kodda uygula
3. Oluşturulan blog taslaklarını Türkçe, 800+ kelime, ürün linkleriyle zenginleştir
4. `sitemap.ts` güncel mi kontrol et
5. Build geçir, commit + push

## Haftalık otomasyon

Cursor **Automations** ile haftalık `npm run seo:run` + plan uygulama zamanlanabilir.
Rehber: [`seo-agent/README.md`](../../seo-agent/README.md)

## KPI

Search Console: tıklama, gösterim, dizine eklenen sayfa.
GA4: `contact_submit` event.
