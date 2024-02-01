const express = require('express');

const app = express();
const port = 7865;

// Route the index page
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// Start the server
app.listen(port, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
