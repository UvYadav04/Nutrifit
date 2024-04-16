const mongoose = require('mongoose')
const schema = mongoose.Schema


const gymschema = new schema({
    Name: String,
    Level: String,
    Day: String,
    Reps: String,
    Sets: String,
    Target_Muscle: Array,
    gif: String,
    image: String
})


const workout = new mongoose.model("workout", gymschema)
module.exports = workout