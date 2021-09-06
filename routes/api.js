const express = require('express');
const router = express.Router();

const Student = require('../models/student');

// Get all students details from the db
router.get('/students',function(req,res,next){
    Student.find({}).then(function(students){
        res.send(students);
    }).catch(next);
});

// Add a new student to db
router.post('/students',function(req,res,next){
    Student.create(req.body).then(function(student){
        res.send(student);
    }).catch(next);
});

// Update a student data in the db
router.put('/students/:id',function(req,res,next){
    Student.findOneAndUpdate({_id: req.params.id},req.body).then(function(student){
        Student.findOne({_id: req.params.id}).then(function(student){
            res.send(student);
        });
    });
});

// Delete a student in the db
router.delete('/students/:id',function(req,res,next){
    Student.findOneAndDelete({_id: req.params.id}).then(function(student){
        res.send(student);
    });
});

module.exports = router;
