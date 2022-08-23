const express = require('express');

const {
    getUsers, postUser, deleteUser
} = require('../controllers/users.controller.js')



const usersRouter = express.Router();

usersRouter.post('/', postUser)

usersRouter.get('/', getUsers)

usersRouter.delete('/', deleteUser)




module.exports = usersRouter


