const express = require('express')

const { getVideos, postVideo, deleteVideo } = require('../controllers/videos.controller')

const videosRouter = express.Router()

videosRouter.get('/', getVideos)

videosRouter.post('/', postVideo)

videosRouter.delete('/', deleteVideo)

module.exports = videosRouter