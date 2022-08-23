const express = require('express')

const { getVideos, postVideo, deleteVideo, updateVideo } = require('../controllers/videos.controller')

const videosRouter = express.Router()

videosRouter.get('/', getVideos)

videosRouter.post('/', postVideo)

videosRouter.delete('/:id', deleteVideo)

videosRouter.patch('/:id', updateVideo)

module.exports = videosRouter