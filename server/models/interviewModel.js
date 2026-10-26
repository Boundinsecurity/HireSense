import mongoose from "mongoose";



const interviewSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    }
},{timestamps:true})