import Match from '../models/matchModel.js';

export const index = (req, res, next) => {
    let toAdd = new Match({
        matchID: req.body.matchID,
        user1: req.body.user1,
        user2: req.body.user2,
        messages: [],
    });
    toAdd.save(function(err) {
        if(err) throw err;
    });
    res.end('Match added.');
};