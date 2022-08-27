const Video = require("../models/video.models")
const Comment = require("../models/comment.models")
const createError = require("../error")

async function addComment(req, res, next) {
    const newComment = new Comment({ ...req.body, userId: req.user.id })

    try {
        const savedComment = await newComment.save()
        res.status(200).send(savedComment)
    } catch (error) {
        next(error)
    }
}

async function deleteComment(req, res, next) {


    try {
        const comment = await Comment.findById(req.params.id)
        const video = await Video.findById(req.params.id)
        if (req.user.id === comment.userId || req.user.id === video.userId) {
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json("The comment has been deleted.")
        } else {
            return next(createError(403, "You can only delete your own comment"))
        }


    } catch (error) {
        next(error)

    }



}

async function getComments(req, res, next) {
    try {
        const comments = await Comment.find({ videoId: req.params.videoId })
        res.status(200).json(comments)

    } catch (error) {

    }
}

module.exports = { getComments, deleteComment, addComment }