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
      description:String,
      category:String,
      options: [String]
    },
    scores:{}
  });
  const Habit = mongoose.model('habit', habitSchema);

  const userSchema = new Schema({
    username: String,
    password: String,
    habits : []
  });
  const User = mongoose.model('user', userSchema)

  const sessionSchema = new Schema({
    cookieId: { type: String, required: true, unique: true },
    createdAt: { type: Date, expires: 300, default: Date.now }
  });

module.exports = {Habit, User, Session};