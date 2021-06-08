const express = require('express');
const router = express.Router();
const Message = require('../model/Message');

const asyncHandler = require('express-async-handler');

router.get('/messages', asyncHandler(async (req, res) => {
    const messages = await Message.find({})

    res.json(messages);
}))

router.post('/messages', async (req, res) => {



    const { content, user, comment } = req.body;

    try {

        const message = await Message.create({
            content, user, comment
        })

        message.save()
        res.send(message)

    } catch (err) {

        res.status(400)
        throw new Error('hata')
    }
})



module.exports = router;