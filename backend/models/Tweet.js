import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    userName: {
        type: mongoose.Types.ObjectId,
        required : true
    },

    tweet: {
        type : String,
        required : true
    },

    time: {
        type : String,
        required : true
    }
})

const tweetModel = mongoose.model('Tweet', tweetSchema);

export default tweetModel;
