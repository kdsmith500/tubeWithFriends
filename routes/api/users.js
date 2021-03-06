const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

/*---------- Protected Routes ----------*/
router.use(require('../../config/auth'));
router.get('/show', checkAuth, usersCtrl.show);
router.get('/index', checkAdmin, usersCtrl.index);
router.put('/profile/edit', checkAuth, usersCtrl.edit);
router.delete('/profile/delete', checkAuth, usersCtrl.remove);
router.delete('/index/delete', checkAdmin, usersCtrl.removeUser);


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