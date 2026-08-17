# SESAJANS AI Arama & Satın Alma Görünürlük Planı — 2026-08-17

## Özet

Bu rapor, ürün satın almak isteyen kullanıcılar ve yapay zeka aramalarında (ChatGPT, Perplexity, Google AI Overview, Claude) şirket misyonuna yönelik sorgularda SESAJANS'ın öne çıkması için hazırlanmıştır.

**Site:** https://sesajans.com.tr  
**Tarih:** 2026-08-17  
**Blog:** 29 yazı | **Ürün:** 11 | **İndekslenebilir URL:** 167+

---

## 1. Rakip Araştırması (2026-08-17)

| Rakip | Sitemap URL | Blog | FAQ Schema | JSON-LD |
|-------|-------------|------|------------|---------|
| Sanyi Lights | ~45 | ✓ | ✗ | 3 |
| Ses Pazarı | ~62 | ✓ | ✗ | 2 |
| Meteor Müzik | ~38 | ✓ | ✗ | 4 |
| Pulsarpro | ~52 | ✓ | ✓ | 5 |
| Mars Music | ~48 | ✓ | ✗ | 3 |
| LEDAJANS | ~35 | ✓ | ✗ | 2 |

**SESAJANS avantajı:** Rakiplerin çoğunda AI discovery (llms.txt) yok. FAQ schema ve zengin JSON-LD ile fark yaratılabilir.

---

## 2. Hedef Kitle Segmentleri

### A. Satın Alma Niyeti (Commercial Intent)
- "moving head satın al"
- "robot ışık fiyat"
- "sahne aydınlatma teklif"
- "beam moving head fiyat"
- "profesyonel sahne ışığı satın al"

### B. AI Arama / Misyon Sorguları (Informational + Brand)
- "SESAJANS nedir"
- "profesyonel sahne aydınlatma firması Türkiye"
- "sahne ışığı satan firma İstanbul"
- "moving head distribütör Türkiye"
- "sahne aydınlatma kurulum hizmeti"

---

## 3. Uygulanan Optimizasyonlar

### 3.1 AI Discovery (llms.txt)
- [x] `/llms.txt` endpoint — marka, misyon, ürün listesi, satın alma süreci
- [x] robots.txt — AI crawler'lara (GPTBot, ClaudeBot, PerplexityBot vb.) izin

### 3.2 Schema Zenginleştirme
- [x] WebSite + SearchAction (site içi arama)
- [x] Store schema (satın alma sinyali)
- [x] AboutPage + Organization mission schema (hakkımızda)
- [x] Product Offer → `/satin-al` yönlendirmesi + businessFunction: Sell

### 3.3 Satın Alma Landing
- [x] `/satin-al` — satın alma süreci, FAQ, tüm ürün portföyü
- [x] Footer nav'a "Satın Al" linki
- [x] Sitemap'e eklendi (priority 0.9)

### 3.4 FAQ Genişletme
- [x] Anasayfa + SSS: "Nasıl satın alınır?" ve "Misyon nedir?" soruları
- [x] TR + EN i18n güncellemesi

### 3.5 İçerik
- [x] `hareketli-kafa-sesajans-rehber` — 800+ kelime, ürün linkleri
- [x] `robot-isik-fiyat-sesajans-rehber` — 800+ kelime, fiyat faktörleri

---

## 4. KPI ve İzleme

| Metrik | Kaynak | Hedef (90 gün) |
|--------|--------|----------------|
| Organik tıklama | Search Console | +15% |
| "satin al" / "fiyat" sorgu gösterimi | Search Console | +25% |
| contact_submit event | GA4 | +10% |
| AI referral trafiği | GA4 (utm/referrer) | İzlemeye başla |
| Dizine eklenen sayfa | Search Console | 170+ |

---

## 5. Sonraki Adımlar (Manuel)

1. Google Search Console'da `/satin-al` ve `/llms.txt` URL denetimi
2. Google Business Profile güncelleme (hizmet: sahne aydınlatma satışı)
3. Ürün PDF kataloglarını yayınla (`PUBLISHED_PDF_SLUGS`)
4. Haftalık blog üretimi devam (`npm run seo:run`)
5. AI arama sonuçlarını aylık manuel kontrol (ChatGPT, Perplexity)

---

## 6. Test Kontrol Listesi

- [x] `npm run build` başarılı
- [x] `/llms.txt` erişilebilir
- [x] `/satin-al` sayfası render
- [x] JSON-LD valid (Organization, Store, WebSite, FAQPage, Product)
- [x] Sitemap güncel
- [x] robots.txt AI bot izinleri
