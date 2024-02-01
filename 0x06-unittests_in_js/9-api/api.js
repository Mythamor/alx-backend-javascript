const express = require('express');
const app = express();

// Welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

// Payment methods for cart
app.get('/cart/:id', (req, res) => {
    const cartId = req.params.id;
    if (isNaN(cartId)) {
        res.status(400).send('Invalid cart ID. Must be a number.');
    } else {
        res.send(`Payment methods for cart ${cartId}`);
    }
});

// Log message
app.listen(7865, () => {
    console.log('API available on localhost port 7865');
});

module.exports = app;
