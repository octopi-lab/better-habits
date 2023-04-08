const {User, Habit, Session} = require('../models/Models');
const userController = {};
const bcrypt = require('bcryptjs');


userController.createUser = async(req,res,next) => {
    
    let { username, password } = req.body;
    console.log('made it into the controller for create user')
    try{
      console.log('checking username')
        User.findOne({ user: username }).exec()
          .then(data => {
            if (data){
                console.log('username exists already')
                window.location.reload();
            }
            else{
              console.log('making password')
                bcrypt.hash(password, 10, (err, hash) => {
                    User.create({ username: username, password: hash })
                    .then (data => {
                      console.log('User ID: ', data['_id'])
                       res.locals.newUser = data;
                        console.log('res',res.locals.newUser)
                        return next()
                    })
                })
            }
          })
    }
    catch(err){
        next(err)
    }
}

userController.verifyUser = (req,res,next) =>{

  const { username, password } = req.body;
  
  try{
    bcrypt.hash(password, 10, (err, hash) => {
      User.findOne({username: username, password: hash})
        .then((data) => {
          if (data !== null) {
            return next();
          } else {
            res.locals.returnUser = data;
            return res.redirect('/login');
          }
        })
        .catch((err) => {
          return next({err: 'Error during login process'});
        })
    })
  }
  catch(err){
      next(err);
  }
}

userController.setSSIDCookie = (req, res, next) => {
  console.log('made it into the controller for setSSID')
  const un = req.body.username;
  const pw = req.body.password;

  User.findOne({username: un})
    .then((docs) => {
      if(bcrypt.compare(pw, docs.password)) {
        res.cookie('ssid', docs._id, { httpOnly: true })
      }
      return next();
    })
    .catch((err) => {
      return next({err: 'Error in setting user SSID'})
    })
}

userController.isLoggedIn = (req, res, next) => {
  if (req.cookies.ssid) {
    return next();
  } else {
    res.redirect('/signup');
  }
}

userController.startSession = (req, res, next) => {
  console.log('made it into the controller for StartSession')
  const un = req.body.username;
  const pw = req.body.password;

  User.findOne({username: un})
    .then((data) => {
      if (docs !== null && bcrypt.compare(pw, docs.password)) Session.create({cookieId: data._id});
      return next();
    })
    .catch((err) => {
      return next({err: 'Error in session ID creation'})
    })
}

module.exports = userController;