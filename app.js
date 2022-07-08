const express = require('express');

const app = express();

// Routes
app.get('/', (req, res) =>{
    res.send('We are on home');
});

// Server
app.listen(3000);