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
        await User.deleteOne({ _id: req.params.id })

        res.json(`deleted user: ${req.body.name}.0`)
    } catch (error) {
        console.log(error)
    }
}

async function updateUser(req, res) {

    try {
        const user = await User.findById(req.params.id)
        Object.assign(user, req.body)
        user.save()
        res.json(user)


    } catch (error) {
        console.log(error)
    }
}





module.exports = {
    getUsers,
    postUser,
    deleteUser,
    updateUser
}