// Простое Node.js-приложение, которое отвечает на запросы
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello I am Node.js!\n');
});

server.listen(3000, () => {
  console.log('Node.js app is running on port 3000');
});