const express = require('express');
const habitRouter = express.Router();
const habitController = require('../controllers/habitController.js')

habitRouter.patch('/:username', habitController.newHabit, (req,res) =>{
    res.status(200).json(res.locals.newHabit);
});

// habitRouter.delete('/:username', habitController.deleteHabit, (req, res) => {
//     res.status(200);
// });


module.exports = habitRouter;