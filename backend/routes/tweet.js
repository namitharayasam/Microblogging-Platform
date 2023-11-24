import express from 'express';
import tweetModel from '../models/Tweet.js';
import userModel from '../models/User.js';

const router = express.Router();

router.post('/get/allTweets', async (req, res) => {
    const {userId} = req.body;

    const user = await userModel.findOne({_id : userId});

    if(!user){
        return res.status(404).json({err : 'Not Found'});
    }

    const Tweets = await tweetModel.find({userName : user._id});

    return res.status(200).json(Tweets);
})

router.post('/createTweet', async (req, res) => {
    const {userId, tweet, time} = req.body;

    const user = await userModel.findOne({_id : userId});

    if(!user){
        return res.status(404).json({err : 'Not Found'});
    }

    if(tweet === null){
        return res.status(400).json({err: "Tweet cant be empty"});
    }

    const tweets = new tweetModel({userName: user._id, tweet: tweet, time: time});

    const savedTweet = await tweets.save()

    return res.status(200).json(savedTweet.toJSON());
})


router.post('/get/userName', async (req, res) => {
    const {userId} = req.body;

    const user = await userModel.findOne({_id : userId});

    if(!user){
        return res.status(404).json({err: "User Not found"});
    }

    return res.status(200).json({userName : user.userName});
})

export default router