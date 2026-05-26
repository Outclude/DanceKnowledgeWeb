const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 2326;
const PASSWORD = '123321';
const tokens = new Set();

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

function checkAuth(req) {
  const auth = req.headers['authorization'];
  if (!auth || !auth.startsWith('Bearer ')) return false;
  return tokens.has(auth.slice(7));
}

const server = http.createServer((req, res) => {
  // Auth endpoint
  if (req.method === 'POST' && req.url === '/api/auth') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { password } = JSON.parse(body);
        if (password === PASSWORD) {
          const token = crypto.randomBytes(32).toString('hex');
          tokens.add(token);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: true, token }));
        } else {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: '密码错误' }));
        }
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // Token validation endpoint
  if (req.method === 'GET' && req.url === '/api/auth/check') {
    if (checkAuth(req)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } else {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: '未登录' }));
    }
    return;
  }

  // Protected moves API
  if (req.method === 'POST' && req.url.startsWith('/api/moves')) {
    if (!checkAuth(req)) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: '未授权' }));
      return;
    }

    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const movesPath = path.join(__dirname, 'public', 'moves.json');
        const movesData = JSON.parse(fs.readFileSync(movesPath, 'utf-8'));

        if (req.url === '/api/moves') {
          const { style, move } = payload;
          if (!movesData[style]) movesData[style] = [];
          movesData[style].push(move);
        } else if (req.url === '/api/moves/update') {
          const { style, index, move } = payload;
          movesData[style][index] = move;
        } else if (req.url === '/api/moves/delete') {
          const { style, index } = payload;
          movesData[style].splice(index, 1);
        } else if (req.url === '/api/moves/reorder') {
          const { style, from, to } = payload;
          const arr = movesData[style];
          const [item] = arr.splice(from, 1);
          arr.splice(to, 0, item);
        }

        fs.writeFileSync(movesPath, JSON.stringify(movesData, null, 2), 'utf-8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  // AI proxy endpoint
  if (req.method === 'POST' && req.url === '/api/ai-proxy') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const { url, headers: reqHeaders, body: reqBody } = JSON.parse(body);
        const parsed = new URL(url);
        const mod = parsed.protocol === 'https:' ? https : http;
        const proxyReq = mod.request(parsed, {
          method: 'POST',
          headers: { ...reqHeaders, 'Content-Type': 'application/json' }
        }, proxyRes => {
          let data = '';
          proxyRes.on('data', chunk => { data += chunk; });
          proxyRes.on('end', () => {
            res.writeHead(proxyRes.statusCode, { 'Content-Type': 'application/json' });
            res.end(data);
          });
        });
        proxyReq.on('error', (e) => {
          res.writeHead(502, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: '代理请求失败: ' + e.message }));
        });
        proxyReq.write(reqBody);
        proxyReq.end();
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: e.message }));
      }
    });
    return;
  }

  // Route: / -> visit.html, /admin -> index.html
  let filePath;
  if (req.url === '/') {
    filePath = path.join(__dirname, 'public', 'visit.html');
  } else if (req.url === '/admin') {
    filePath = path.join(__dirname, 'public', 'index.html');
  } else {
    filePath = path.join(__dirname, 'public', req.url);
  }

  // Prevent path traversal
  const resolved = path.resolve(filePath);
  const publicDir = path.resolve(__dirname, 'public');
  if (!resolved.startsWith(publicDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  let ext = path.extname(resolved);
  if (!ext) {
    filePath = resolved + '.html';
    ext = '.html';
  } else {
    filePath = resolved;
  }

  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    const headers = { 'Content-Type': contentType };
    if (ext === '.woff2' || ext === '.woff' || ext === '.ttf') {
      headers['Cache-Control'] = 'public, max-age=31536000, immutable';
    } else if (ext === '.html') {
      headers['Cache-Control'] = 'no-cache';
    } else if (ext === '.css' || ext === '.js') {
      headers['Cache-Control'] = 'no-cache';
    }
    res.writeHead(200, headers);
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`DanceWeb running at http://localhost:${PORT}`);
});
