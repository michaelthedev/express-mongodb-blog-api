const { Router } = require('express');
const router = Router()
const { getAllUsers, signUp ,logIn} = require('../controllers/userContollers');


router.get('/',getAllUsers)
router.post('/signup',signUp)
router.post('/login',logIn)

module.exports = router;