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
module.exports = {
    getAllUsers
}
