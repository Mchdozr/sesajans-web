# sesajans.com.tr — Plesk Panel Deploy Rehberi

Next.js sitesini **Plesk Node.js** üzerinde çalıştırma adımları. Domain Natro’da, hosting Plesk’li bir sunucuda olabilir.

---

## Gereksinimler

- Plesk Obsidian (Linux) + **Node.js** eklentisi
- **Node.js 20+** (Plesk’te domain için seçilebilir)
- SSH veya Plesk **Git** / **Dosya Yöneticisi** erişimi
- Alan adı: `sesajans.com.tr` → bu sunucuya yönlendirilmiş

---

## Yöntem 1 — Sunucuda build (önerilen)

### 1) Dosyaları sunucuya yükle

`web` klasörünün tamamını domain köküne atın, örneğin:

```
/var/www/vhosts/sesajans.com.tr/httpdocs/
```

Plesk **Git** kullanıyorsanız repoyu buraya çekin; kök dizin `web` içeriği olmalı (`package.json` doğrudan `httpdocs` altında).

### 2) SSH ile build

```bash
cd /var/www/vhosts/sesajans.com.tr/httpdocs
npm ci
npm run build:plesk
```

Bu komut standalone build alır ve `public` + static dosyalarını `.next/standalone/` içine kopyalar.

### 3) Plesk Node.js ayarları

**Websites & Domains** → `sesajans.com.tr` → **Node.js**

| Ayar | Değer |
|------|--------|
| Node.js | Açık |
| Node.js sürümü | 20.x |
| Application root | `httpdocs` |
| Document root | `httpdocs` |
| Application mode | production |
| Application startup file | `.next/standalone/server.js` |
| Custom environment variables | aşağıdaki tablo |

**Ortam değişkenleri:**

| Anahtar | Değer |
|---------|--------|
| `NODE_ENV` | `production` |
| `NEXT_PUBLIC_SITE_URL` | `https://sesajans.com.tr` |
| `CONTACT_EMAIL` | `info@sesajans.com.tr` |

> `NEXT_PUBLIC_SITE_URL` build sırasında da gerekir; sunucuda build aldıysanız `npm run build:plesk` öncesi export edin veya `.env` dosyası kullanın.

### 4) Uygulamayı başlat

Plesk Node.js sayfasında **Restart App** / **NPM install** (gerekirse) → **Enable Node.js**.

Plesk, Apache/Nginx üzerinden Node uygulamasına proxy yapar; SSL için **SSL/TLS Certificates** → Let’s Encrypt.

---

## Yöntem 2 — Bilgisayarda build, FTP ile yükleme

Windows’ta:

```powershell
cd web
$env:NEXT_PUBLIC_SITE_URL="https://sesajans.com.tr"
npm ci
npm run build:plesk
```

`npm run build:plesk` sonrası tüm `web` klasörü sunucuda kalır; Plesk startup: `.next/standalone/server.js`

Plesk’te:

- Application root: `httpdocs`
- Startup file: `.next/standalone/server.js`
- Node.js 20+, production mode

---

## Domain DNS (Natro)

Natro panel → `sesajans.com.tr` DNS:

| Tip | Host | Değer |
|-----|------|--------|
| **A** | `@` | Plesk sunucu IP |
| **A** | `www` | Aynı IP |

`www` yönlendirmesi kodda tanımlı (`www` → `sesajans.com.tr`).

---

## Güncelleme (yeni sürüm)

```bash
cd httpdocs
git pull   # veya yeni dosyaları yükle
npm ci
npm run build:plesk
# Plesk → Node.js → Restart App
```

---

## Kontrol listesi

- [ ] `npm run build:plesk` hatasız bitti
- [ ] `.next/standalone/server.js` mevcut
- [ ] Plesk’te Node.js etkin, doğru startup file
- [ ] SSL (Let’s Encrypt) aktif
- [ ] `site.ts` içindeki telefon / adres gerçek bilgiler
- [ ] `info@sesajans.com.tr` e-posta kutusu (Plesk Mail veya Natro mail)

---

## Sorun giderme

| Belirti | Çözüm |
|---------|--------|
| 502 / site açılmıyor | Node.js loglarına bakın; `server.js` yolu ve PORT doğru mu |
| Görseller yok | `public` ve `.next/static` kopyalandı mı — `npm run build:plesk` tekrar |
| Yanlış URL / SEO | Build öncesi `NEXT_PUBLIC_SITE_URL=https://sesajans.com.tr` |
| Eski site görünüyor | Startup file `.next/standalone/server.js` ve Node restart |
| Node sürüm hatası | Plesk’te Node 20+ seçin |

---

## İletişim formu

`/api/contact` sunucuda çalışır. E-posta gönderimi için `.env` veya Plesk ortam değişkenlerine `RESEND_API_KEY` / SMTP eklenmeli (şu an sadece log).
