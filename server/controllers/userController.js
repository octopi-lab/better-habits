const {User, Session} = require('../models/Models');
const userController = {};
const bcrypt = require('bcryptjs');


userController.createUser = async (req,res,next) => {
    
    let { username, password } = req.body;
    console.log('made it into the controller for create user')
    try{
      console.log('checking username')
        User.findOne({ username: username }).exec()
          .then(data => {
            if (data){
                console.log('username exists already')
                // window.location.reload();
                // alert("Username already exists!!");
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


// previously near-working condition
userController.verifyUser = (req,res,next) =>{

  const { username, password } = req.body;
  console.log('inside verifyUser')
   User.findOne({username: username})
        .then((data) => {
          console.log('data: ', data)
          console.log("data.pass ",data.password)
          return bcrypt.compare(password, data.password)})
        .then((pwStatus) => {
          console.log('pwstatus: ', pwStatus);
          if (pwStatus) {
            console.log('login successful')
            return next();
          } else {
            console.log('user not found')
            return res.redirect('/login');
          }
        }).catch((error) => {
          console.log('err: ', error)
        })
      }



userController.setSSIDCookie = (req, res, next) => {
  console.log('made it into the controller for setSSID')
  const un = req.body.username;
  const pw = req.body.password;

  User.findOne({username: un})
    .then((data) => {
      if(bcrypt.compare(pw, data.password)) {
        res.cookie('ssid', data._id, { httpOnly: true })
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
      if (data !== null && bcrypt.compare(pw, data.password)) Session.create({cookieId: data._id});
      return next();
    })
    .catch((err) => {
      return next({err: 'Error in session ID creation'})
    })
}

module.exports = userController;