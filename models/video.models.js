const mongoose = require('mongoose')

const { Schema } = mongoose;

const videoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        immutable: true,
        default: () => Date.now()

    }
})

const Video = mongoose.model('Video', videoSchema)

module.exports = Video