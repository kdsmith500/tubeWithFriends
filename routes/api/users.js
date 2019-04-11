const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
// router.get('/profile', usersCtrl.profile)
// router.get('/users', usersCtrl.users);
// router.post('/profile', usersCtrl.editProfile)
// router.post('/users', usersCtrl.deleteUser)

/*----- Helper Functions -----*/


module.exports = router;