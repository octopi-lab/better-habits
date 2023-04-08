const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://ericlewisdunn:elephant1@cluster0.xowczqe.mongodb.net/?retryWrites=true&w=majority'//sd;''

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
  const habitSchema = new Schema({
    title: String,
    description:{
      category:String,
      alt: [String]
    },
    date:{}
  });
  const Habit = mongoose.model('habit', habitSchema);

  const userSchema = new Schema({
    username: String,
    password: String,
    habits : [habitSchema]
  });
  const User = mongoose.model('user', userSchema)


module.exports = {Habit, User};