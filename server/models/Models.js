const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

const MONGO_URI = `mongodb+srv://ericlewisdunn:elephant1@cluster0.xowczqe.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'userHabit' // NAME DB 
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));
  
  const Schema = mongoose.Schema;

  const userSchema = new Schema({
    username: String,
    password: String,
    total: {type: Number, default: 0}, //logic for adding points to total and daily before storing in habits array
    daily: {type: Number, default: 0}, //add logic for reset daily to 0 every day
    habits : {type: {}, default: {test:{1:'Ihatelife<3'}}}
  });
  const User = mongoose.model('user', userSchema)

  const sessionSchema = new Schema({
    cookieId: { type: String, required: true, unique: true },
    createdAt: { type: Date, expires: 300, default: Date.now }
  });
  const Session = mongoose.model('session', sessionSchema)

module.exports = { User, Session };