const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,

    },
    subscribers: {
        type: Number,
        default: 0
    },
    subscribedUsers: {
        type: [String]
    },
    videos: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Video"
    },
}, {
    timestamps: true

})

const User = mongoose.model("User", userSchema)

module.exports = User


// const vishwanath = new User({
//     name: "Vishwanath",
//     email: "vishwanathsharma1729@gmail.com",
//     password: 'badmuthafuka'
// }


// )

// console.log(vishwanath.name + vishwanath.email + vishwanath.password)