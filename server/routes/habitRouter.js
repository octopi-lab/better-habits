const express = require('express');
const habitRouter = express.Router();
const habitController = require('../controllers/habitController.js')

//SCORE INCREMENTOR
habitRouter.patch('/:username/:name', habitController.score, (req, res) => {
    res.status(200).json(res.locals.update)
});

// GET USER INFO
habitRouter.get('/:username/getUserInfo', habitController.getUserInfo, (req,res) => {
    res.status(200).json(res.locals.userInfo);
})


//ADD NEW HABIT
habitRouter.patch('/:username', habitController.newHabit, (req,res) =>{
    res.status(200).json(res.locals.updatedUser);
});


module.exports = habitRouter;