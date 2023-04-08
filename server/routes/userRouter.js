const express = require('express');
const userRouter = express.Router(); 
const userController = require('../controllers/userController');

userRouter.post('/signup', userController.createUser, (req, res) => {
    res.status(200)
});

userRouter.post('/login', userController.verifyUser, (req,res) => {
    res.status(200)
});







module.exports = userRouter;