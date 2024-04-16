const mongoose = require('mongoose')
const data = require('./Dietdata/diet')
const diet = require('./models/Diet')

mongoose.connect("mongodb://127.0.0.1:27017/nutrifit")
    .then(() => {
        console.log("connected to mongo")
    })
    .catch((e) => {
        console.log("error : ", e)
    })

// console.log(data.Monday.Workout[0])
let temp = data.Vitamins

temp.map(async (item) => {
    const w = new diet({
        Name: item.Name,
        Mineral: "Vitamins",
        Consumption: item.Consumption,
        Allergic: item.Allergic_Avoid,
        Overdose: item.Overdose,
        RDA: item.RDA
    })

    await w.save()
})

console.log('data saved successfully')