#!/usr/bin/node

const http = require('http');
const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader(200, {'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
});

app.listen(port);

module.exports = app;
