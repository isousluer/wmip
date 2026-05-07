# System Patterns

## Architecture
```
Client → Vercel Serverless (api/ip.js)
           → x-forwarded-for ile IP al
           → ip-api.com'a backend'den istek at
           → { ip, protocol, city, country, isp } döndür
Client → src/index.html → fetch('/api/ip') → kart UI'a yansıt
```

## Routes
- `GET /` → `src/index.html` (vercel.json rewrite ile)
- `GET /api/ip` → `{ ip, protocol, city, country, isp }`

## IP Resolution Order
1. `x-forwarded-for` header (ilk IP)
2. `req.socket.remoteAddress` (fallback)

## Tasarım Kararları
- Kart (B) tasarımı
- Dark/light: `prefers-color-scheme` + manuel toggle + localStorage
- Skeleton loading: veriler gelene kadar CSS animasyonu
- Kopyala: `navigator.clipboard.writeText` + geçici feedback

## Deploy
- Platform: Vercel
- `api/` klasörü otomatik serverless function olarak tanınır
- `vercel.json` ile `/` → `src/index.html` yönlendirmesi yapılıyor
