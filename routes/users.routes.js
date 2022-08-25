const express = require('express');

const {
    getUser, deleteUser, updateUser, subscribe, unsubscribe, like, dislike
} = require('../controllers/users.controller.js');
const verifyToken = require('../verifyToken.js');



const usersRouter = express.Router();

usersRouter.put('/:id', verifyToken, updateUser)

usersRouter.get('/', getUser)

usersRouter.delete('/:id', verifyToken, deleteUser)

usersRouter.put('/sub/:id', verifyToken, subscribe)

usersRouter.put('/unsub/:id', verifyToken, unsubscribe)

usersRouter.put('/like/:videoId', verifyToken, like)

usersRouter.put('/dislike/:videoId', verifyToken, dislike)







module.exports = usersRouter


