const User = require('../models/user.models')
const createError = require("../error")


async function getUser(req, res, next) {
    try {
        const user = await User.findById(req.params.id).populate("videos")
        res.json(user)
    } catch (error) {
        next(error)
    }

}

async function deleteUser(req, res, next) {

    if (req.params.id === req.user.id) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
        } catch (error) {
            next(error)
        }

    } else {
        return next(createError(403, "You can only delete your own account"))
    }
}



async function updateUser(req, res, next) {

    if (req.params.id === req.user.id) {

        try {
            const updatedUser = await User.findById(req.params.id)
            Object.assign(updatedUser, req.body)
            updatedUser.save()
            res.json(updatedUser)

        } catch (error) {
            next(error)
        }

    } else {
        return next(createError(403, "You can only update your own account"))
    }
}

async function subscribe(req, res, next) {

    try {
        await User.findByIdAndUpdate(req.user.id, {
            $push: { subscribedUsers: req.params.id }
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: 1 }
        })
        res.status(200).json("Subscribed")

    } catch (error) {
        next(error)
    }


}
async function unsubscribe(req, res, next) {
    try {
        await User.findById(req.user.id, {
            $pull: { subscribedUsers: req.params.id }
        })
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: -1 }
        })
        res.status(200).json("Unsubscribed")

    } catch (error) {
        next(error)
    }

}
async function like(req, res, next) {
    try {

    } catch (error) {
        next(error)
    }

}
async function dislike(req, res, next) {
    try {

    } catch (error) {
        next(error)
    }

}




module.exports = {
    getUser,
    deleteUser,
    updateUser,
    subscribe,
    unsubscribe,
    like,
    dislike
}