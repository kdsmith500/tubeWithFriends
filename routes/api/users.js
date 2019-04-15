const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
// router.post('/', checkAuth, usersCtrl.show);
router.put('/profile/edit', checkAuth, usersCtrl.edit);
router.delete('/profile/delete', checkAuth, usersCtrl.remove);
router.get('/index', checkAdmin, usersCtrl.index);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

function checkAdmin(req, res, next) {
    if (req.user.admin) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;