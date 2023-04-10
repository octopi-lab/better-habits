const express = require('express');
const habitRouter = express.Router();
const habitController = require('../controllers/habitController.js')

habitRouter.patch('/:username', habitController.newHabit, (req,res) =>{
    res.status(200).json(res.locals.updatedUser);
});

habitRouter.patch('/:username/:habitName', habitController.record, (req, res) => {
    res.status(200).json(res.locals.update);
})


module.exports = habitRouter;