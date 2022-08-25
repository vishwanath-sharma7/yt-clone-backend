const express = require('express');

const { signup, signin } = require("../controllers/auth.controller.js")

const authRouter = express.Router();

//CREATE A USER
authRouter.post('/signup', signup)

//SIGN IN
authRouter.post('/signin', signin)

//GOOGLE AUTH
// authRouter.post('/google',)


module.exports = authRouter;