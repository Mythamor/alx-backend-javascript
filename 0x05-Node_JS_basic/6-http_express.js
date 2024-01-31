// IMport express module
const express = require('express');

// Create the express application
const app = express();
const port = 1245;

// Define a route for the endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {});

// Export the express application
module.exports = app;
