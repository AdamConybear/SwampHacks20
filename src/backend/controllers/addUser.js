import User from '../models/userModel.js';

export const index = (req, res, next) => {
    let toAdd = new User({
        username: req.body.username,
        needHelp: req.body.needHelp,
        gender: req.body.gender,
        above18: req.body.above18,
        problem: req.body.problem,
    });
    toAdd.save(function(err) {
        if(err) throw err;
    });
    res.end(toAdd);
};