# SESAJANS SEO Planı — 2026-07-01

## Özet
- Site: https://sesajans.com.tr
- Ürün: 11 | Blog: 7
- Rakip benchmark meta uzunluğu: ~132 karakter
- Rakip benchmark sitemap: ~153 URL

## Görevler

### [HIGH] Blog içerik hacmini artır
- **Tür:** blog_stub | **Otomatik:** evet
- **Neden:** Sitede 7 blog yazısı var; rakipler blog/rehber URL yapısı kullanıyor.
- **Konular:**
  - `moving-head-beam-rehberi` — Moving head beam rehberi
  - `sahne-aydinlatma-rehberi` — Sahne aydınlatma rehberi
  - `ip66-beam-rehberi` — Ip66 beam rehberi
  - `blinder-strobe-rehberi` — Blinder strobe rehberi
  - `konser-aydinlatma-rehberi` — Konser aydınlatma rehberi

### [HIGH] İndekslenebilir sayfa sayısını artır
- **Tür:** manual | **Otomatik:** hayır
- **Neden:** Rakip sitemap ortalaması ~153 URL; iç link ve landing sayfaları ekle.

### [LOW] Long-tail blog: ip66 beam
- **Tür:** blog_stub | **Otomatik:** evet
- **Neden:** Anahtar kelime için özel içerik yok.
- **Konular:**
  - `ip66-beam-sesajans-rehber` — Ip66 beam — SESAJANS rehberi

### [LOW] Long-tail blog: blinder strobe
- **Tür:** blog_stub | **Otomatik:** evet
- **Neden:** Anahtar kelime için özel içerik yok.
- **Konular:**
  - `blinder-strobe-sesajans-rehber` — Blinder strobe — SESAJANS rehberi

### [LOW] Long-tail blog: konser aydınlatma
- **Tür:** blog_stub | **Otomatik:** evet
- **Neden:** Anahtar kelime için özel içerik yok.
- **Konular:**
  - `konser-aydinlatma-sesajans-rehber` — Konser aydınlatma — SESAJANS rehberi

### [LOW] Long-tail blog: led bar sahne
- **Tür:** blog_stub | **Otomatik:** evet
- **Neden:** Anahtar kelime için özel içerik yok.
- **Konular:**
  - `led-bar-sahne-sesajans-rehber` — Led bar sahne — SESAJANS rehberi

### [LOW] Long-tail blog: wash moving head
- **Tür:** blog_stub | **Otomatik:** evet
- **Neden:** Anahtar kelime için özel içerik yok.
- **Konular:**
  - `wash-moving-head-sesajans-rehber` — Wash moving head — SESAJANS rehberi

### [LOW] Long-tail blog: profesyonel sahne ışığı
- **Tür:** blog_stub | **Otomatik:** evet
- **Neden:** Anahtar kelime için özel içerik yok.
- **Konular:**
  - `profesyonel-sahne-isigi-sesajans-rehber` — Profesyonel sahne ışığı — SESAJANS rehberi

### [LOW] Rakip blog URL yapısını incele
- **Tür:** manual | **Otomatik:** hayır
- **Neden:** Örnek rakip blog yolları: /blog/

## Cursor Agent sonraki adım
1. `npm run seo:apply` ile otomatik görevleri uygula
2. `manual` görevleri kodda uygula
3. `npm run build` doğrula
4. `git push` → Vercel deploy