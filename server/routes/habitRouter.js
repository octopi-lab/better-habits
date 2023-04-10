const express = require('express');
const habitRouter = express.Router();
const habitController = require('../controllers/habitController.js')


// habitRouter.patch('/:username/habits/:name', habitController.record, (req, res) => {
//     res.status(200).json(res.locals.update)
// });

habitRouter.patch('/:username', habitController.newHabit, (req,res) =>{
    res.status(200).json(res.locals.updatedUser);
});


module.exports = habitRouter;