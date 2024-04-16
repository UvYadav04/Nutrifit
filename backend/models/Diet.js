const mongoose = require('mongoose')
const schema = mongoose.Schema


const dietschema = new schema({
    Name: String,
    Mineral: String,
    Consumption: String,
    Allergic: Array,
    Overdose: Object,
    RDA: Object
})


const diet = new mongoose.model("diet", dietschema)
module.exports = diet