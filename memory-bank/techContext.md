# Tech Context

## Stack
- Runtime: Node.js
- Framework: Express
- Frontend: Vanilla HTML/CSS (no framework)
- Template Engine: Yok (static HTML + JSON API)

## Key Dependencies
- express
- (isteğe bağlı) express-rate-limit (gelecek)

## Dev Setup
```
npm install
npm start
```
Server: http://localhost:3000

## IP Detection Logic
- `req.headers['x-forwarded-for']` (proxy/CDN arkasında)
- `req.socket.remoteAddress` (doğrudan bağlantı)
- IPv4-mapped IPv6 (`::ffff:`) prefix temizlenir
