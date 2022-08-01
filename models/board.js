const mongoose = require('mongoose')

const BoardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    notes: [{
        style: String,
        text: String,
        x: Number,
        y: Number
    }],
    strings: [{
        style: String,
        x1: Number,
        y1: Number,
        x2: Number,
        y2: Number,
    }],
    stickers:[{
        style: String,
        x: Number,
        y: Number
    }]
})

module.exports = mongoose.model('Board',BoardSchema)