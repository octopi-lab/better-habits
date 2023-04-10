const express = require('express');
const app = express(); 
const path = require('path'); 
const PORT = 3000;
const cors = require('cors') 


const dotenv = require('dotenv').config() //.env config try?

const userRouter = require('./routes/userRouter');
const habitRouter = require('./routes/habitRouter');
const scoreRouter = require('./routes/scoreRouter');

// parsing request for json // urlencoded // cors 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// only needed if we reach out to other websites 
app.use(cors());


// serve index.html
  app.use('/build', express.static(path.join(__dirname, '../build')));
  // serve index.html on the route '/'
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
  });

  // route handlers 

  //Login/sign up paths
  app.use('/user', userRouter)
  
  //managing habits paths
  app.use('/habit', habitRouter);

  //managing changes in habit scores
  app.use('/score', scoreRouter);


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