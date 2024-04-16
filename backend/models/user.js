const mongoose = require('mongoose')
const schema = mongoose.Schema

const userschema = new schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: schema.Types.Mixed,
        required: true
    },
    image: {
        type: String
    }
})

const user = mongoose.model('user', userschema);
module.exports = user