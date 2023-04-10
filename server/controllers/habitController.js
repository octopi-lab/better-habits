const {User} = require('../models/Models');
const habitController = {};

habitController.newHabit = async (req,res,next) => {
    console.log('made it into habit creation')
    const {
        name,
        level1,
        level2,
        level3,
        level4,
        alternatives1,
        alternatives2,
        alternatives3,
        message,
        type
    } = req.body;
    
    const newHab = {level1, level2, level3, level4, alternatives1, alternatives2, alternatives3, message, type, totalScore:0, dailyScore:0, score:{}} 
    let update = await User.findOneAndUpdate({username: req.params.username}, {$set: {habits: {[name]: newHab}}}, {new: true});
                                // User.findOneAndUpdate({username: req.params.username}, {habits:{$set: {[name]: newHab}}}, {new: true});
    console.log(update);
    res.locals.updatedUser = update;
    next();
}

module.exports = habitController;



// habitController.record = async (req, res, next) => {
//     const { username, name } = req.params;
//     const { score } = req.body; 
//     let update = await User.findOneAndUpdate({username: username}); //$inc increments by a certain value
//     update.username.total += score;
//     update.username.daily += score;
//     update.habits[name].totalScore += score;
//     update.habits[name].dailyScore += score;
//     update.habits[name].score[new Date()] = score;
//     res.locals.update = update;
//     next();
// }


/*
HABIT OBJECT MOCKUP

habit = {
	name: "RUNNING EVERY DAY",
	1: 'run 0.5 miles', 
	2: 'run 1 mile',
	3: 'run 2 miles',
	4: 'run 3 miles',
	alternatives1: 'go for a walk',
	alternatives2: 'go for a bike ride',
	alternatives3: 'go for a swim',
	description: 'I want to run every day because I want to be healthy',
	type: 'Health'
}



*/