# LEDAJANS SEO — Deploy Checklist

## Ön Koşullar
- [ ] WordPress admin erişimi
- [ ] FTP/SSH erişimi (Plesk)
- [ ] Rank Math SEO aktif
- [ ] W3 Total Cache aktif

## Adım 1: Eklenti (15 dk)
1. `wp-plugin/ledajans-seo/` → `wp-content/plugins/ledajans-seo/`
2. Eklentiyi etkinleştir
3. Ana sayfayı kontrol et — tek schema bloğu

## Adım 2: Redirect (10 dk)
1. Rank Math → Import `config/rank-math-redirects.csv`
2. VEYA `.htaccess` → `config/htaccess-redirects.txt` ekle
3. Test: `curl -sI https://ledajans.com/blog/led-ekran-4/` → 301

## Adım 3: İçerik (2–4 saat)
1. Ana sayfa hero → `content/homepage-sections.html`
2. Hub → `content/hub-page-expansion.html`
3. Ürün sayfaları → `content/product-*.html`
4. Hakkımızda → `content/hakkimizda-eeat.html`
5. 5 şehir sayfası oluştur → `content/city-landings/*.html`

## Adım 4: Performans (1 saat)
1. W3TC ayarları → `config/w3tc-settings.md`
2. Elementor → Improved Asset Loading
3. ShortPixel WebP aktif

## Adım 5: Görseller (30 dk)
```bash
wp eval-file ledajans-seo/scripts/wp-apply-image-alts.php
```

## Adım 6: GBP + GSC (30 dk)
1. `config/google-business-profile.md`
2. `SEO-SETUP.md` — GSC sitemap

## Adım 7: Doğrulama
```bash
npm run ledajans:audit
```

Beklenen:
- Ana sayfa < 200 KB HTML (hedef 150 KB)
- Redirect 301 çalışıyor
- FAQ schema mevcut
- Blog AJAX yok
