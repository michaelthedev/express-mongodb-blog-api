const User = require('../models/userModel')

/**
 * Get all users
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const getAllUsers = async(req, res)=>{
    try {
        let users = await User.find()
        if (!users) {
            return res.status(404)
                .json({message: 'No users found'})
        }

        return res.status(200)
            .json({users})
    } catch (error) {
        console.log(error.message);
    }
}

/**
 * Get single user by email
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const getSingleUser = async(req, res)=>{
    try {
        // todo: Create user id property in database schema
        const userId = req.params.userId;
        let users = await User.findOne({email: userId})
        if (!users) {
            return res.status(404)
                .json({message: 'User was not found'})
        }
        return res.status(200)
            .json({users})
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {
    getAllUsers,
    getSingleUser
}
