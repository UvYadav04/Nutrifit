const mongoose = require('mongoose')
const schema = mongoose.Schema

const deasyschema = new schema({
    Name: "String",
    Symptoms: [],
    Homopathy: [],
    Allopathy: [],
    Abstinences: []
})

const deasy = new mongoose.model('deasy', deasyschema)
module.exports = deasy