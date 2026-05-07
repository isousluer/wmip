export default async function handler(req, res) {
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(',')[0].trim() : req.socket.remoteAddress;

  try {
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,city,isp,query`);
    const data = await response.json();

    res.json({
      ip: data.query || ip,
      country: data.country || null,
      city: data.city || null,
      isp: data.isp || null,
      protocol: ip.includes(':') ? 'IPv6' : 'IPv4',
    });
  } catch {
    res.json({ ip, country: null, city: null, isp: null, protocol: ip.includes(':') ? 'IPv6' : 'IPv4' });
  }
}
