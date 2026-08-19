import User from "../models/userModel.js"
import express from "express"

export const getCurrentUser = async (req,res) => {
    try {
        const userId = req.userId
        const user = await User.findById(userId)
        if(!user){
            return res.status(404).json({message:"User Not Found"})
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message:`Failed to Fetch Current User ${error}`})
    }
}

