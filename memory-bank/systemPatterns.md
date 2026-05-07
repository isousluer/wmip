# System Patterns

## Architecture
```
Client → Vercel Serverless (api/ip.js) → x-forwarded-for → { ip }
Client → src/index.html → fetch('/api/ip') → IP gösterimi
```

## Routes
- `GET /` → `src/index.html` (vercel.json rewrite ile)
- `GET /api/ip` → `{ ip }`

## IP Resolution Order
1. `x-forwarded-for` header (ilk IP)
2. `req.socket.remoteAddress` (fallback)

## Tasarım Kararları
- Minimal: büyük IP yazısı, kopyala butonu, tema toggle
- Dark/light: `prefers-color-scheme` + manuel toggle + localStorage
- Kopyala: `navigator.clipboard.writeText` + geçici feedback

## Deploy
- Platform: Vercel
- `api/` klasörü otomatik serverless function olarak tanınır
- `vercel.json` ile `/` → `src/index.html` yönlendirmesi yapılıyor
