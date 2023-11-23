import express from "express";
import userModel from "../models/User.js";

const router = express.Router();

router.post('/register', async (req, res) => {
    const {userName, email, password, age} = req.body;

    const newUser = new userModel({userName, email, password, age});

    if(!newUser){
        return res.status(400).json({err : "Couldn't register"});
    }

    const savedUser = await newUser.save();
    return res.status(200).json(savedUser.toJSON());
    
})

router.post('/login', async (req, res) => {
    const {userName,password} = req.body;

    const user = await userModel.findOne({userName: userName})

    if(!user){
        return res.status(404).json({err : "user not found"});
    }

    if(user.password === password){
        const userToBeReturned = {...user._doc}
        delete userToBeReturned.password;
        return res.status(200).json(userToBeReturned);
    }
})

export default router;