const express = require('express');
const userRouter = express.Router(); 
const userController = require('../controllers/userController');

userRouter.post('/signup', userController.createUser,
    // userController.setSSIDCookie,
    // userController.startSession,
    (req, res) => {res.status(200).redirect('/about')});

userRouter.post('/login', userController.verifyUser, 
    // userController.setSSIDCookie,
    // userController.startSession,
    (req,res) => {
    res.status(200).redirect('/dashboard')
});

module.exports = userRouter;
