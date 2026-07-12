# LEDAJANS SEO Uygulama Paketi

`ledajans.com` için "led ekran" anahtar kelimesi SEO geri kazanım planının deploy edilebilir uygulaması.

## Hızlı Kurulum (WordPress)

### 1. Eklentiyi Yükle

```bash
# Plesk/SSH ile WordPress root'a kopyala:
cp -r ledajans-seo/wp-plugin/ledajans-seo /var/www/vhosts/ledajans.com/httpdocs/wp-content/plugins/

# WordPress Admin → Eklentiler → "LEDAJANS SEO Fixes" → Etkinleştir
```

Eklenti otomatik olarak şunları yapar:
- Duplicate JSON-LD schema temizliği + birleşik FAQPage schema
- 301 redirect (fiyat blog duplicate'leri, thin content)
- Canonical override (fiyat blog → hub)
- Ana sayfa meta title/description güncelleme
- Server-side blog render (AJAX "Yükleniyor" düzeltmesi)
- Footer internal link hub
- Performans optimizasyonları

### 2. Redirect'leri Yedekle (Rank Math)

WordPress Admin → Rank Math → Redirections → Import:
`ledajans-seo/config/rank-math-redirects.csv`

Veya `.htaccess` bloğunu ekle:
`ledajans-seo/config/htaccess-redirects.txt`

### 3. İçerik Güncellemeleri (Elementor)

| Dosya | Nereye |
|-------|--------|
| `content/homepage-sections.html` | Ana sayfa — hero + H2 bölümleri |
| `content/hub-page-expansion.html` | `/led-ekran/` sayfası |
| `content/hakkimizda-eeat.html` | `/hakkimizda/` sayfası |
| `content/product-ic-mekan-expansion.html` | `/ic-mekan-led-ekran/` |
| `content/product-dis-mekan-expansion.html` | `/dis-mekan-led-ekran/` |
| `content/product-rental-expansion.html` | `/rental-ekran/` |
| `content/city-landings/*.html` | Yeni WordPress sayfaları oluştur |

### 4. Performans (W3TC)

`config/w3tc-settings.md` dosyasındaki ayarları uygula.

### 5. Görsel Alt Text

```bash
wp eval-file ledajans-seo/scripts/wp-apply-image-alts.php
```

ShortPixel/Imagify ile WebP dönüşümünü etkinleştir.

### 6. Google Business Profile

`config/google-business-profile.md` rehberini uygula.

### 7. İzleme

```bash
npm run ledajans:audit
npm run ledajans:kpi
```

Detay: `SEO-SETUP.md`

## Dizin Yapısı

```
ledajans-seo/
├── wp-plugin/ledajans-seo/     # WordPress eklentisi
├── data/                       # JSON veri (schema, redirect, şehir, alt text)
├── content/                    # Elementor HTML içerikleri
├── config/                     # W3TC, nginx, htaccess, GBP, Rank Math
├── scripts/                    # Audit, KPI, şehir üretici, WP-CLI
├── monitoring/                 # KPI log
├── SEO-SETUP.md
└── README.md
```

## Doğrulama Kontrol Listesi

- [ ] Eklenti aktif, ana sayfada tek JSON-LD @graph bloğu
- [ ] `/blog/led-ekran-fiyatlari-2026/` → 301 `/led-ekran/`
- [ ] Ana sayfa blog bölümü statik HTML (AJAX yok)
- [ ] Ana sayfa title: "LED Ekran | Satış, Kiralama ve Kurulum — LEDAJANS"
- [ ] 5 yeni şehir sayfası yayında
- [ ] GSC sitemap gönderildi
- [ ] PageSpeed LCP < 3s (hedef 2.5s)
