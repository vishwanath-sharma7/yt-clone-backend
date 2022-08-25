const express = require('express');
const { getVideo, postVideo, deleteVideo, updateVideo, trending, random, subscribe, addView } = require('../controllers/videos.controller')
const verifyToken = require('../verifyToken.js');
const videosRouter = express.Router()






videosRouter.get('/find/:id', getVideo)

videosRouter.post('/', verifyToken, postVideo)

videosRouter.delete('/:id', verifyToken, deleteVideo)

videosRouter.put('/:id', verifyToken, updateVideo)

videosRouter.post('/:id', verifyToken, addView)

videosRouter.get('/trending', trending)

videosRouter.get('/random', random)

videosRouter.get('/sub', verifyToken, subscribe)


module.exports = videosRouter