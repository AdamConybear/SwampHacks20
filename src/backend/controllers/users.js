import User from '../models/userModel.js';

export const index = (req, res, next) => {
    User.find().exec(function(err, users) {
        return res.json(users);
    })
};