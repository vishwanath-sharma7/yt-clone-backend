const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const cors = require("cors");
const userRouter = require('./routes/users.routes.js');
const videosRouter = require('./routes/videos.routes.js');
const authRouter = require('./routes/auth.routes.js');
const cookieParser = require("cookie-parser")



const app = express()


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })



app.use(cors())

app.use(cookieParser())

app.use(express.json());

app.use(express.static("public"));

app.use('/users', userRouter)

app.use('/videos', videosRouter)

app.use('/auth', authRouter)


app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "something went wrong";
    return res.status(status).json({
        success: false,
        status: status,
        message: message
    })

})








app.listen(5000, () => {
    console.log("Server has started!")
})