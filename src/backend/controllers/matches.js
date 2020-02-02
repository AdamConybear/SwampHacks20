import Match from '../models/matchModel.js';

export const index = (req, res, next) => {
    Match.find().exec(function(err, matches) {
        return res.json(matches);
    });
};