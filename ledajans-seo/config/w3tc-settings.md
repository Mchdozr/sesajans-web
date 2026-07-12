# W3 Total Cache — LEDAJANS Performans Ayarları

WordPress Admin → Performance → General Settings

## Page Cache
- [x] Page Cache: Enabled
- Page Cache Method: **Disk: Enhanced**
- Cache preload: Enabled (sitemap tabanlı)

## Minify
- [x] Minify: Enabled
- HTML minify: **Enabled**
- CSS minify: **Enabled**
- JS minify: **Enabled**
- JS minify method: **Combine only** (Elementor uyumluluğu için "combine + minify" dikkatli test edin)

## Lazy Load
- [x] Lazy Load: Enabled
- **Exclude from lazy load** (kritik):
  - `.ledajans-hero img`
  - `.ledajans-hero-title`
  - `img[src*="logo"]`
  - İlk viewport görselleri
- Lazy Load Gravatars: Disabled
- Lazy Load Embeds: Enabled

## Browser Cache
- [x] Browser Cache: Enabled
- Expires header: 30 days (static assets)

## CDN (opsiyonel)
- Cloudflare veya BunnyCDN aktifse "CDN" bölümünü etkinleştirin

## Elementor Ayarları
WordPress Admin → Elementor → Settings → Features:
- Improved Asset Loading: **Active**
- Lazy Load Background Images: **Inactive** (LCP için)
- Inline Font Icons: **Inactive**

## Asset CleanUp / Perfmatters (önerilen)
Ana sayfada kullanılmayan CSS/JS kaldır:
- WooCommerce assets (kullanılmıyorsa)
- Contact Form 7 (sadece iletişim sayfasında yükle)
- Dashicons (frontend'de gereksizse)

## Hedef Metrikler
| Metrik | Mevcut | Hedef |
|--------|--------|-------|
| HTML boyutu | ~401 KB | < 150 KB |
| LCP (mobil) | >4s | < 2.5s |
| INP | — | < 200ms |
| CLS | — | < 0.1 |

## Doğrulama
1. https://pagespeed.web.dev/ → ledajans.com
2. GSC → Core Web Vitals raporu
3. `curl -s https://ledajans.com/ | wc -c` → HTML boyutu kontrol
