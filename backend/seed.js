const mongoose = require('mongoose')

const gym = require('./models/gym')

mongoose.connect("mongodb+srv://uvyadav04:uvyadav123@cluster1.ae0pw2e.mongodb.net/Nutrifit", { useUnifiedTopology: true })
    .then(async () => {
    })
    .catch((e) => {
        console.log("error : ", e)
    })

const update = async () => {
    await gym.updateMany({ Level: "Intedmediate_Level" }, { Level: "Intermediate_Level" })
}

update()