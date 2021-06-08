const express = require('express');
const router = express.Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler');


const generateToken = (id) => {
    return jwt.sign({ id }, 'SECRET KEY', {
        expiresIn: '30d'
    })
}


router.post('/user/login', asyncHandler(async (req, res) => {
    const { username, password } = req.body

    const user = await User.findOne({ username })


    if (user && (await user.matchPassword(password))) {
        res.json({

            _id: user._id,

            username: user.username,

            token: generateToken(user._id)

        })



    } else {
        res.status(401)
        throw new Error('Invalid username or password')
    }
}))


router.post('/user/signup', asyncHandler(async (req, res) => {
    const { name, username, email, password } = req.body

    const userExist = await User.findOne({ email })


    if (userExist) {
        res.status(400)
        throw new Error('User Already Exists')
    }


    const user = await User.create({
        name,
        username,
        email,
        password
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)

        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')

    }
}))

module.exports = router