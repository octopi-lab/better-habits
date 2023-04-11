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
    let update = await User.findOneAndUpdate({username: req.params.username}, {$set: {[`habits.${name}`]: newHab}}, {new: true});    
    console.log(update);
    res.locals.updatedUser = update;
    return next();
}

habitController.score = async (req, res, next) => {
    const { username, name } = req.params;
    const { score } = req.body;
    const date = new Date().toISOString().slice(0,10);
    // console.log(score);
    // console.log(name);
    let update = await User.findOneAndUpdate({username: username}, {$inc: {
        total: score,
        daily: score,
        [`habits.${name}.totalScore`]: score,
        [`habits.${name}.dailyScore`]: score,
        [`habits.${name}.score.${date}`]: score
    }});
    // console.log(update);
    res.locals.update = update;
    return next();
}

habitController.getUserInfo = async (req, res, next) => {
    const {username} = req.params;
    console.log('MY USERNAME', username)
    const userInfo = await User.findOne({username:username});
    res.locals.userInfo = userInfo;
    // console.log('WHO AM I', userInfo)
    return next();
}
module.exports = habitController;