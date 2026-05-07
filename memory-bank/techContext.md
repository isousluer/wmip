# Tech Context

## Stack
- Runtime: Node.js v24.15.0
- Deploy: Vercel (serverless functions)
- Frontend: Vanilla HTML/CSS (no framework)

## Key Files
- `api/ip.js` → Vercel serverless function, sadece IP döndürür
- `src/index.html` → minimal arayüz, dark/light mode, kopyala butonu
- `vercel.json` → `/` → `src/index.html` rewrite
- `src/server.js` → lokal geliştirme için Express server (opsiyonel)

## IP Detection Logic
- `req.headers['x-forwarded-for']` (Vercel proxy header)
- `req.socket.remoteAddress` (fallback)

## Dev Setup
```
npm install
npm start
```
Server: http://localhost:3000
