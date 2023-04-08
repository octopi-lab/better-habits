const habitController = {};
const {User, Habit} = require('../models/Models');


habitController.newHabit = (req,res,next) => {
    const { identifier } = req.params.username;
    const {
        title,
        category,
        info,
        opt,
    } = req.body;

    try{
        const newHab = {title: title, description: {info: info, category:category, opt:opt, score: {}}}

        User.findOneAndUpdate({username: identifier}, { $push: { habits: newHab }}, {new: true}).exec()
        .then(data => {
            res.locals.newHabit = data.habits;
            next();
        })
    }
    catch (err){
        next(err);
    }
}