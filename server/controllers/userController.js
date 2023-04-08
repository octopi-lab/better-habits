const User = require('../models/Models');
const userController = {};
const bcrypt = require('bcryptjs');


userController.createUser = (req,res,next) => {
    
    let { username, password } = req.body;
    
    try{
        User.findOne({ user: username }).exec()
          .then(data => {
            if (data){
                alert('username exists already')
                window.location.reload();
            }
            else{
                bcrypt.hash(password, 10, (err, hash) => {
                    User.create({ username, hash })
                    .then (data => {
                      console.log('User ID: ', data['_id'])
                      next()
                    })
                    .catch(err => next(err));
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

module.exports = userController;