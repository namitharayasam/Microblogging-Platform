import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js"
import cors from "cors"
import tweetRoutes from "./routes/tweet.js"
const app = express();

mongoose.connect("mongodb+srv://namithaarayasam:nambam@cluster0.a06kk60.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("mongodb connect success")
})

app.use(cors());

const port = 8000;

app.use(express.json());

app.use('/auth',authRoutes)
app.use('/tweets', tweetRoutes)

app.listen(port, (req,res) => {
    console.log("Listening on port " + port);
})