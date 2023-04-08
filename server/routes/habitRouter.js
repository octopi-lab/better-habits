const express = require('express');
const habitRouter = express.Router();

habitRouter.get('/habit', habitController.getHabits, (req,res) =>{
    res.status(200);
});

habitRouter.post('/habit', habitController.newHabit, (req,res) =>{
    res.status(200);
});

habitRouter.patch('/habit', habitController.changeHabitValue, (req,res) =>{
    res.status(200);
});

module.exports = habitRouter;