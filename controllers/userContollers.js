const User = require('../models/userModel')

const getAllUsers = async(req,res)=>{
    try {
        let users = await User.find()
    if(!users){
        return res.status(404).json({message: 'No users found'})
    }
    return res.status(200).json({users})
    } catch (error) {
        console.log(error.message);
    }
}
const signUp = async(req,res)=>{
    const {name, email, password} =req.body
    try {
        let existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message:'User already exists. Login instead'})
        }
        let newUser = await User.create({name, email, password, blog: []})
        return res.status(201).json({newUser})
    } catch (error) {
        console.log(error.message);
    }
}
const logIn = async(req,res)=>{
    const { email, password} =req.body
    try {
         await User.comparePassword(email, password)
         return res.status(200).json({message:'You are now logged In!'})
    } catch (error) {
        return res.status(404).json({message:error.message})
    }
}
module.exports = {
    getAllUsers,
    signUp,
    logIn
}
