# System Patterns

## Architecture
```
Client → Express Server → IP Detection → HTML Response
                       ↘ /api/ip → JSON Response
```

## Routes
- `GET /` → HTML sayfası (IP gömülü)
- `GET /api/ip` → `{ "ip": "x.x.x.x" }` (gelecek entegrasyonlar için)

## IP Resolution Order
1. `x-forwarded-for` header (ilk IP, virgülle ayrılmış listede)
2. `req.socket.remoteAddress`
3. IPv4-mapped IPv6 prefix temizle
