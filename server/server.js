const express = require('express');
const app = express(); 
const path = require('path'); 
const PORT = 3000;
const cors = require('cors') 


const userRouter = require('./routes/userRouter')

// parsing request for json // urlencoded // cors 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// only needed if we reach out to other websites 
app.use(cors());


// serve index.html
<<<<<<< HEAD
=======
// statically serve everything in the build folder on the route '/build'
>>>>>>> dev
  // app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  });

  // route handlers 

  //Login/sign up paths
<<<<<<< HEAD
  app.use('/user', userRouter)
  
=======
  app.post('/signup', userRouter);

  app.post('/login', userRouter);
>>>>>>> dev

  //managing habits paths


  //managing changes in habit characteristics
  app.use('/update', charRouter);
  // catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Hmmmmm I think you entered the wrong url...'));

// Global Default Error Handler 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


// start server 
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});


module.exports = app;