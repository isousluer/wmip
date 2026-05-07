# Tech Context

## Stack
- Runtime: Node.js v24.15.0
- Deploy: Vercel (serverless functions)
- Frontend: Vanilla HTML/CSS (no framework)

## Key Files
- `api/ip.js` → Vercel serverless function; IP, konum, ISP, protokol döndürür
- `src/index.html` → kart tasarımlı arayüz, dark/light mode, skeleton loading
- `vercel.json` → `/` → `src/index.html` rewrite
- `src/server.js` → lokal geliştirme için Express server (opsiyonel)

## IP Detection Logic
- `req.headers['x-forwarded-for']` (Vercel proxy header)
- `req.socket.remoteAddress` (fallback)
- Konum/ISP: `http://ip-api.com/json/{ip}` — backend'den çağrılır, kullanıcıya görünmez

## Dev Setup
```
npm install
npm start
```
Server: http://localhost:3000
