const express = require('express');
const userRouter = express.Router();
const userController = '../controllers/userController';

userRouter.post('/signup', userController.createUser,
    userController.setSSIDCookie,
    userController.startSession,
    (req, res) => {
    res.status(200).json(res.locals.newUser);
});

userRouter.post('/login', userController.verifyUser, 
    userController.setSSIDCookie,
    userController.startSession,
    (req,res) => {
    res.status(200).json(res.locals.returnUser)
});

module.exports = userRouter;