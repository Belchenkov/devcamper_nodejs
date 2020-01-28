const express = require('express');
const router = express.Router();

const {
   getUsers,
   getUser,
   createUser,
   updateUser,
   deleteUser
} = require('../controllers/users');

const User = require('../models/User');

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router.use(protect);
router.use(authorize('admin'));

router
    .route('/')
    .get(advancedResults(User), getUser)
    .post(createUser);

module.exports = router;