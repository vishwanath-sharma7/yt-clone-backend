const createError = require('../error')
const User = require('../models/user.models')
const Video = require('../models/video.models')


async function getVideo(req, res, next) {
    try {
        const video = await Video.findById(req.params.id)

        const user = await User.findById(video.userId)

        res.status(200).json([video, user])
    } catch (error) {
        next(error)
    }

}

async function postVideo(req, res, next) {
    const newVideo = new Video({ userId: req.user.id, ...req.body })
    try {
        const savedVideo = await newVideo.save()
        res.status(200).json(savedVideo)
    } catch (error) {
        next(error)

    }
}

async function deleteVideo(req, res, next) {
    const video = await Video.findById(req.params.id)
    if (!video) return next(createError(404, "Video not found"))

    if (req.user.id === video.userId) {
        await Video.findByIdAndDelete(req.params.id)

        res.status(200).json("Video has been Deleted")
    } else {
        return next(createError(403, "You can only delete your own video"))
    }

}

async function updateVideo(req, res, next) {
    try {
        const video = await Video.findById(req.params.id)
        if (!video) return next(createError(404, "Video not found"))

        if (req.user.id === video.userId) {
            const updatedVideo = await Video.findById(req.params.id)
            Object.assign(updatedVideo, req.body)
            updatedVideo.save()
            res.status(200).json(updatedVideo)
        } else {
            return next(createError(403, "You can only update your own video"))
        }
    }
    catch (error) {
        next(error)
    }
}


async function addView(req, res, next) {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: { views: 1 }
        })
        res.status(200).json("view has been increased")
    } catch (error) {
        next(error)
    }

}

async function random(req, res, next) {
    try {
        const videos = await Video.aggregate([{ $sample: { size: 40 } }])
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }

}

async function trending(req, res, next) {
    try {
        const videos = await Video.find().sort({ views: -1 })
        res.status(200).json(videos)
    } catch (error) {
        next(error)
    }
}

async function subscribe(req, res, next) {
    try {
        const user = await User.findById(req.user.id)
        const subscribedChannels = user.subscribedUsers;

        const list = await Promise.all(
            subscribedChannels.map(channelId => {
                return Video.find({ userId: channelId })
            })
        );
        res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt))
    } catch (error) {
        next(error)
    }
}




module.exports = {
    getVideo,
    postVideo,
    deleteVideo,
    updateVideo,
    addView,
    trending,
    subscribe,
    random
}