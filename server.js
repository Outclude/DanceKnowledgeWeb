const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 2326;
const PASSWORD = '1056788162';
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
        const movesPath = path.join(__dirname, 'moves.json');
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

  // Route: / -> visit.html, /admin -> index.html
  let filePath;
  if (req.url === '/') {
    filePath = path.join(__dirname, 'visit.html');
  } else if (req.url === '/admin') {
    filePath = path.join(__dirname, 'index.html');
  } else {
    filePath = path.join(__dirname, req.url);
  }

  let ext = path.extname(filePath);
  if (!ext) {
    filePath += '.html';
    ext = '.html';
  }

  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`DanceWeb running at http://localhost:${PORT}`);
});
