# SESAJANS SEO Planı — 2026-10-19

## Özet
- Site: https://sesajans.com.tr
- Ürün: 11 | Blog: 33
- Rakip benchmark meta uzunluğu: ~81 karakter
- Rakip benchmark sitemap: ~362 URL

## Görevler

### [HIGH] İndekslenebilir sayfa sayısını artır
- **Tür:** manual | **Otomatik:** hayır
- **Neden:** Rakip sitemap ortalaması ~362 URL; iç link ve landing sayfaları ekle.

### [MEDIUM] Ürün ve makale schema zenginleştir
- **Tür:** manual | **Otomatik:** hayır
- **Neden:** Rakip ortalama JSON-LD yoğunluğu yüksek (max 5).

### [LOW] Long-tail blog: dj ışık
- **Tür:** blog_stub | **Otomatik:** evet
- **Neden:** Anahtar kelime için özel içerik yok.
- **Konular:**
  - `dj-isik-sesajans-rehber` — Dj ışık — SESAJANS rehberi

### [LOW] Long-tail blog: dj aydınlatma
- **Tür:** blog_stub | **Otomatik:** evet
- **Neden:** Anahtar kelime için özel içerik yok.
- **Konular:**
  - `dj-aydinlatma-sesajans-rehber` — Dj aydınlatma — SESAJANS rehberi

### [LOW] Long-tail blog: kulüp aydınlatma
- **Tür:** blog_stub | **Otomatik:** evet
- **Neden:** Anahtar kelime için özel içerik yok.
- **Konular:**
  - `kulup-aydinlatma-sesajans-rehber` — Kulüp aydınlatma — SESAJANS rehberi

### [LOW] Long-tail blog: istanbul robot ışık
- **Tür:** blog_stub | **Otomatik:** evet
- **Neden:** Anahtar kelime için özel içerik yok.
- **Konular:**
  - `istanbul-robot-isik-sesajans-rehber` — Istanbul robot ışık — SESAJANS rehberi

### [LOW] Rakip blog URL yapısını incele
- **Tür:** manual | **Otomatik:** hayır
- **Neden:** Örnek rakip blog yolları: /blog/haber/sanyilights, /bdet/haber/6/sahne-aydinlatmasi-nedir-canli-deneyimleri-sekillendiren-sistemlere-derinlemesine-bir-bakis, /bdet/haber/5/dj-aydinlatmasina-baslangic-kilavuzu-yeni-performans-sanatcilari-isikla-atmosferi-nasil-sekillendiriyor

## Cursor Agent sonraki adım
1. `npm run seo:apply` ile otomatik görevleri uygula
2. `manual` görevleri kodda uygula
3. `npm run build` doğrula
4. `git push` → Vercel deploy