const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const boardRoute = require('./routes/boards')

const app = express();

app.use(bodyParser.json())
app.use('/boards',boardRoute)

// Routes
app.get('/', (req, res) =>{
    res.send('We are on home');
});

// DB
mongoose.connect('mongodb://admin:pass@localhost:27017/admin', {useNewUrlParser: true});

// Server
app.listen(3000);