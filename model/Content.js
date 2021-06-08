const mongoose = require('mongoose');


const contentSchema = mongoose.Schema(
    {

        user: {

            type: String,
            required: true,

        },
        contentHeader: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },


    },



    {
        timestamps: true
    })




module.exports = mongoose.model('Content', contentSchema)