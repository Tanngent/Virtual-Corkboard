const express = require('express');
const router = express.Router()
const Post = require("../models/board")

router.get('/', (req, res) =>{
    res.send('We are on boards');
});

router.post('/',(req,res)=>{
    console.log(req.body);
});

module.exports = router;