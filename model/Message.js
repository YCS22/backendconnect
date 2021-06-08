const mongoose = require('mongoose');


const messageSchema = mongoose.Schema(
    {

        content: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Content'
        }
        ,
        user: {

            type: String,
            required: true,

        },

        comment: {
            type: String,
            required: true
        },


    },



    {
        timestamps: true
    })




module.exports = mongoose.model('Message', messageSchema)