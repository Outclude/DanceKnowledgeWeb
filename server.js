const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 2326;

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

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url.startsWith('/api/moves')) {
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

  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  let ext = path.extname(filePath);

  if (!ext) {
    filePath += '/index.html';
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
