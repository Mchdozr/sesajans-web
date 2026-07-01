# sesajans.com.tr — Natro Canlıya Alma Rehberi

Next.js sitesi **Node.js** gerektirir (iletişim formu API dahil). Natro’dan aldığınız domain için iki yol:

| Yöntem | Öneri | Natro’da ne kullanılır |
|--------|--------|-------------------------|
| **A) Vercel + Natro DNS** | ✅ En kolay | Sadece DNS yönetimi |
| **B) Natro VPS** | İleri seviye | VPS + Nginx |

Natro **paylaşımlı hosting** (cPanel, sadece PHP) Next.js için uygun değildir.

---

## A) Vercel + Natro DNS (Önerilen)

### 1. Kodu GitHub’a yükleyin

```bash
cd web
git init
git add .
git commit -m "SESAJANS kurumsal site"
# GitHub’da repo oluşturup push edin
```

### 2. Vercel’e deploy

1. [vercel.com](https://vercel.com) → GitHub ile giriş
2. **Add New Project** → `web` klasörünü (veya repo kökünü) seçin
3. **Root Directory:** `web` (repo kökünde ise)
4. **Environment Variables:**

| Değişken | Değer |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://sesajans.com.tr` |
| `CONTACT_EMAIL` | `info@sesajans.com.tr` |

5. **Deploy** → `*.vercel.app` adresinde site açılır

### 3. Vercel’de domain ekleme

Vercel proje → **Settings → Domains**:

- `sesajans.com.tr`
- `www.sesajans.com.tr`

Vercel size DNS kayıtlarını gösterir (genelde):

| Tip | Host | Değer |
|-----|------|--------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

*(Vercel panelindeki güncel değerleri kullanın.)*

### 4. Natro DNS ayarları

1. [natro.com](https://www.natro.com) → Müşteri paneli
2. **Domain Yönetimi** → `sesajans.com.tr`
3. **DNS / Nameserver** veya **Zone Editor**
4. Varsayılan Natro park sayfası kayıtlarını silin
5. Vercel’in verdiği **A** ve **CNAME** kayıtlarını ekleyin
6. Kayıt: 5–30 dk (bazen 24 saate kadar)

### 5. SSL

Vercel otomatik **Let’s Encrypt** sertifikası verir. Natro tarafında ekstra SSL almanıza gerek yok.

### 6. E-posta (Natro)

Site Vercel’de olsa bile e-postayı Natro’da tutabilirsiniz:

- Natro → **E-posta** → `info@sesajans.com.tr` kutusu oluşturun
- MX kayıtları Natro’da kalsın (Vercel A/CNAME ile çakışmaz)

---

## B) Natro VPS (Node.js sunucu)

Natro **VPS / Cloud** paketiniz varsa:

### Sunucuda

```bash
# Node 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs nginx

cd /var/www/sesajans/web
npm ci
DEPLOY_STANDALONE=true NEXT_PUBLIC_SITE_URL=https://sesajans.com.tr npm run build

# static dosyaları standalone içine kopyala
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

npm i -g pm2
pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

### Nginx örneği (`/etc/nginx/sites-available/sesajans`)

```nginx
server {
    listen 80;
    server_name sesajans.com.tr www.sesajans.com.tr;
    return 301 https://sesajans.com.tr$request_uri;
}

server {
    listen 443 ssl http2;
    server_name sesajans.com.tr;

    ssl_certificate     /etc/letsencrypt/live/sesajans.com.tr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/sesajans.com.tr/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo certbot --nginx -d sesajans.com.tr -d www.sesajans.com.tr
```

### Natro DNS (VPS IP)

| Tip | Host | Değer |
|-----|------|--------|
| **A** | `@` | VPS IP adresiniz |
| **A** | `www` | VPS IP adresiniz |

---

## Canlıya almadan önce kontrol listesi

- [ ] `src/lib/site.ts` — telefon, adres, sosyal medya linkleri gerçek bilgilerle güncellendi mi?
- [ ] `NEXT_PUBLIC_SITE_URL=https://sesajans.com.tr` production ortamında ayarlı mı?
- [ ] Natro’da `info@sesajans.com.tr` e-posta kutusu açıldı mı?
- [ ] İletişim formu e-posta entegrasyonu (Resend/SMTP) — şu an sadece log
- [ ] `npm run build` hatasız geçiyor mu?

## Yerel production testi

```bash
cd web
cp .env.example .env.local
npm run build
npm start
```

---

## Sorun giderme

| Sorun | Çözüm |
|-------|--------|
| Domain açılmıyor | DNS propagasyonu bekleyin; [dnschecker.org](https://dnschecker.org) ile A kaydını kontrol edin |
| www çalışmıyor | Natro’da `www` CNAME veya A kaydı ekleyin |
| Karışık içerik / eski site | Natro’da eski yönlendirme / park sayfası kayıtlarını kaldırın |
| Form gönderilmiyor | Vercel Functions loglarına bakın; API route `/api/contact` |
