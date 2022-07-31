const mongoose = require('mongoose')

const BoardSchema = mongoose.Schema({
    name: String,
    notes: [{
        type: String,
        text: String,
        x: Number,
        y: Number
    }],
    strings: [{
        type: String,
        x1: Number,
        y1: Number,
        x2: Number,
        y2: Number,
    }],
    stickers:[{
        type: String,
        x: Number,
        y: Number
    }]
})

module.exports = mongoose.model('Board',BoardSchema)