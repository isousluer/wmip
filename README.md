# 🌐 IP Adresim

Siteye girdiğinde IP adresini temiz ve sade bir şekilde gösteren web uygulaması.

## Özellikler

- IP adresini anında gösterir
- Tek tıkla panoya kopyalar
- Dark / Light mode (sistem temasını takip eder, manuel değiştirilebilir)
- Mobil uyumlu

## Teknolojiler

- **Frontend:** Vanilla HTML/CSS
- **Backend:** Vercel Serverless Functions
- **Deploy:** Vercel

## Kurulum

```bash
npm install
npm start
```

Uygulama `http://localhost:3000` adresinde çalışır.

## Deploy

Vercel'e bağlı GitHub reposuna push etmek yeterli. Vercel otomatik deploy eder.

`api/ip.js` dosyası Vercel tarafından otomatik olarak serverless function olarak tanınır.
