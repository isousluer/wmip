const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

function getIP(req) {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(',')[0].trim() : req.socket.remoteAddress;
  const clean = ip.replace(/^::ffff:/, '');
  return clean === '::1' ? '127.0.0.1' : clean;
}

app.get('/api/ip', (req, res) => {
  res.json({ ip: getIP(req) });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
