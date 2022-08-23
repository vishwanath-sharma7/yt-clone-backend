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
            dateCreated: req.body.dateCreated,
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

            { _id: req.body._id }

        )
        res.json('deleted')

    } catch (error) {
        console.log(error)

    }

}







module.exports = {
    getVideos,
    postVideo,
    deleteVideo
}