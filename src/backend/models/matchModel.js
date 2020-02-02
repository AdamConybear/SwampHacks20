import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema ({
    matchID: {type: String, required: true},
    user1: {type: String, required: true},
    user2: {type: String, required: true},
    messages: [{
        text: {type: String},
        time: {type: Date},
        sender: {type: String},
    }],
});

export default mongoose.model('matches', matchSchema);