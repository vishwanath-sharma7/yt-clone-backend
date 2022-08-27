const mongoose = require('mongoose')

const { Schema } = mongoose;

const commentSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    videoId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})

const Video = mongoose.model('Comment', commentSchema)

module.exports = Video