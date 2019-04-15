const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
    signup,
    login,
    show,
    edit,
    index,
    remove
};

async function signup(req, res) {
    const user = new User(req.body);
    try {
        await user.save();
        const token = createJWT(user);
        res.json({ token });
    } catch (err) {
        // Probably a duplicate email
        res.status(400).json(err);
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) return res.status(401).json({err: 'bad credentials'});
        user.comparePassword(req.body.pw, (err, isMatch) => {
            if (isMatch) {
                const token = createJWT(user);
                res.json({token});
            } else {
                return res.status(401).json({err: 'bad credentials'});
            }
        });
    } catch (err) {
        return res.status(401).json(err);
    }
}

async function show(req, res) {
    const profile = await User.find( req.user );
    res.json(profile);
}

async function edit(req, res) {
    console.log(req.body)
    console.log('user: ', req.user)
    try {
        await User.findOneAndUpdate({ email: req.user.email }, req.body, { new: true })
            .then(user => {
                res.status(200)
                .json(user)
            })
        // Use the profile action to return the list
    } catch (err) {
        res.json({err});
    }
}

async function index(req, res) {
    const users = await User.find({});
    // .sort({ email: 1 });
    console.log(users);
    res.json(users);
}

async function remove(req, res) {
    try {
        await User.findOneAndRemove({ email: req.user.email });
    } catch (err) {
        res.json({err});
    }
}

/*----- Helper Functions -----*/

function createJWT(user) {
    return jwt.sign(
        {user}, //data payload
        SECRET,
        {expiresIn: '24h'}
    )
}