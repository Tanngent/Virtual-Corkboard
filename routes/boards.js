const express = require('express');
const router = express.Router()
const Board = require("../models/board")


// All Boards
router.get('/', async (req, res) =>{
    try{
        const boards = await Board.find();
        res.json(boards);
    }catch(err){
        //console.log(err);
        res.json({message: err})
    }
});

// New Board
router.post('/',async (req,res)=>{
    const board = new Board({
        name: req.body.name,
        notes: req.body.notes,
        strings: req.body.strings,
        stickers: req.body.stickers
    })
    //console.log(req.body);
    try{
        const saveBoard = await board.save();
        res.json(saveBoard);
    }catch(err){
        //console.log(err);
        res.json({message: err})
    }
});

// Specific Board
router.get('/:id',async (req,res)=>{
    try{
        const board = await Board.findById(req.params.id)
        res.json(board);
    }catch(err){
        //console.log(err);
        res.json({message: err})
    }
})

// Update Board
router.patch('/:id',async (req,res)=>{
    try{
        const board = await Board.updateOne({_id: req.params.id},
            {
                $set: {
                    name: req.body.name,
                    notes: req.body.notes,
                    strings: req.body.strings,
                    stickers: req.body.stickers
                }
            })
        res.json(board);
    }catch(err){
        //console.log(err);
        res.json({message: err})
    }
})

// Remove Board
router.delete('/:id',async (req,res)=>{
    try{
        console.log(req.params.id)
        const board = await Board.deleteOne({_id: req.params.id})
        res.json(board);
    }catch(err){
        //console.log(err);
        res.json({message: err})
    }
})

module.exports = router;