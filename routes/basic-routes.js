const express = require('express');
const router = express.Router();

// GET Request
router.get('/students',function(req,res){
    res.send({type: 'GET'});
});

// POST Request
router.post('/students', function(req, res){
    res.send({
        type: 'POST',
        name: req.body.name,
        roll: req.body.roll
    });
});

// PUT Request
router.put('/students/:id', function(req, res){
    res.send({type: 'PUT'});
});

// DELETE Request
router.delete('/students/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
