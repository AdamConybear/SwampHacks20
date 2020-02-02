import Match from '../models/matchModel.js';

export async function index(req, res, next) {
    let updatedMsgs = [];
    await Match.findOne({ matchID: req.body.matchID },async function(err, doc) {
        doc.messages.forEach((element) => {
            updatedMsgs.push(element);
        });
        let newMessage = {
            text: req.body.text,
            time: req.body.time,
            sender: req.body.sender,
        }
        updatedMsgs.push(newMessage);
        Match.findOneAndUpdate({ matchID: req.body.matchID },
        { messages: updatedMsgs },
        {new: true, useFindAndModify: false}, (err, doc) => {
            console.log(doc);
        });
    });
    res.end('Message added.');
};