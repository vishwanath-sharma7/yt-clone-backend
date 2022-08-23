const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 13,
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    videos: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Video"
    },

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