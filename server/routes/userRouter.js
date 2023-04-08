const express = require('express');
const userRouter = express.Router();

userRouter.post('/signup', userController.createUser, (req, res) => {
    res.status(200)
});

userRouter.post('/login', userController.verifyUser, (req,res) => {
    res.status(200)
});







module.exports = userRouter;