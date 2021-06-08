const express = require('express');
const router = express.Router();
const Content = require('../model/Content');

const asyncHandler = require('express-async-handler');

router.get('/contents', asyncHandler(async (req, res) => {
    const contents = await Content.find({})

    res.json(contents);
}))

router.post('/contents', async (req, res) => {



    const { user, contentHeader, description } = req.body;

    try {

        const content = await Content.create({
            user, contentHeader, description
        })

        content.save()
        res.send(content)

    } catch (err) {

        res.status(400)
        throw new Error('hata')
    }
})



module.exports = router;