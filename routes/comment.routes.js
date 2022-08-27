const express = require('express')
const { addComment, deleteComment, getComments } = require('../controllers/comment.controller')
const commentRouter = express.Router()
const verifyToken = require('../verifyToken')


commentRouter.post('/', verifyToken, addComment)

commentRouter.delete('/', verifyToken, deleteComment)

commentRouter.get('/:videoId', verifyToken, getComments)

module.exports = commentRouter