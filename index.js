const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const cors = require("cors");
const userRouter = require('./routes/users.routes.js');
const videosRouter = require('./routes/videos.routes.js');

const app = express()


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })



app.use(cors())

app.use(express.json());

app.use(express.static("public"));

app.use('/users', userRouter)

app.use('/videos', videosRouter)








app.listen(5000, () => {
    console.log("Server has started!")
})