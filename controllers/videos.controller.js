const Video = require('../models/video.models')


async function getVideos(req, res) {
    try {
        const videos = await Video.find()

        res.json(videos)
    } catch (error) {
        console.log(error)

    }

}

async function postVideo(req, res) {
    try {
        const video = await Video.create({
            title: req.body.title,
            description: req.body.description,
            url: req.body.url,
        }
        )
        res.json(video)

    } catch (error) {
        console.log(error)

    }
}

async function deleteVideo(req, res) {
    try {
        await Video.deleteOne(

            { _id: req.params.id }

        )
        res.json('deleted')

    } catch (error) {
        console.log(error)

    }

}

async function updateVideo(req, res) {
    try {
        const video = await Video.findById(req.params.id)
        Object.assign(video, req.body)
        video.save()
        res.json(video)
    } catch (error) {
        console.log(error.message)
    }
}







module.exports = {
    getVideos,
    postVideo,
    deleteVideo,
    updateVideo
}