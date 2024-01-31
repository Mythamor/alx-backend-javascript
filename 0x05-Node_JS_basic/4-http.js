#!/usr/bin/node

const app = require('node:http');
const port = 1245;

const server = app.createServer((req, res) => {
  res.end('Hello Holberton School!\n');
});

server.listen(port);

module.exports = app;
