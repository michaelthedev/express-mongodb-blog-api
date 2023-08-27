/**
 * Auth Controller
 *
 * For logins and signups
 */

const User = require('../models/userModel');

/**
 * User Login
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const login = async(req,res)=>{
    const { email, password } = req.body
    try {
        await User.comparePassword(email, password)
        return res.status(200)
            .json({
                message:'You are now logged In!'
            })
    } catch (error) {
        return res.status(404)
            .json({
                message:error.message
            })
    }
}

