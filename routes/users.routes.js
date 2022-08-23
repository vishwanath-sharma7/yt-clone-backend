const express = require('express');

const {
    getUsers, postUser, deleteUser, updateUser
} = require('../controllers/users.controller.js')



const usersRouter = express.Router();

usersRouter.post('/', postUser)

usersRouter.get('/', getUsers)

usersRouter.delete('/:id', deleteUser)

usersRouter.patch('/:id', updateUser)





module.exports = usersRouter


