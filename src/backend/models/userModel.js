import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
    username: {type: String, required: true, unique: true},
    needHelp: {type: String},
    gender: {type: String},
    above18: {type: Boolean},
    problem: {type: String},
});

export default mongoose.model('users', userSchema);