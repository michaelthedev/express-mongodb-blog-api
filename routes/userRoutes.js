const { Router } = require('express');
const router = Router()

const {getAllUsers, getSingleUser} = require('../controllers/userContollers');

router.get('/', getAllUsers)
router.get("/:userId", getSingleUser);

module.exports = router;