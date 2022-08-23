const User = require('../models/user.models')

async function getUsers(req, res) {
    try {
        const users = await User.find().populate("videos")
        res.json(users)
    } catch (error) {
        console.log(error)
    }

}

async function postUser(req, res) {

    try {
        const user = await User.create({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            password: req.body.password,
            videos: req.body.videos
        }
        )
        res.json(user)

    } catch (error) {
        console.log(error)

    }
}

async function deleteUser(req, res) {

    try {
        await User.deleteOne({ name: req.body.name })

        res.json(`deleted user: ${req.body.name}.0`)
    } catch (error) {
        console.log(error)
    }
}






module.exports = {
    getUsers,
    postUser,
    deleteUser
}