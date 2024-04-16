const express = require('express')
const router = express.Router()
const diet = require('../models/Diet')

router.post('/getdata', async (req, res) => {
    try {
        const { mineral } = req.body
        const data = await diet.find({ Mineral: mineral })
        // console.log(req.body)

        var images = []

        let promises = data.map(async (item) => {
            return (fetch(`https://pixabay.com/api/?key=43206025-f2d5ff78cb18fce06c7cbc662&q=${item.Name}&image_type=photo&pretty=true`).then(async (result) => {
                const json = await result.json()
                const hits = json.hits

                images.push(hits[0].largeImageURL)

            }).catch(e => {
                console.log(`error in image : `, e)
            }))

        })

        Promise.all(promises).then(() => {
            res.json({ success: true, data: data, images: images })
        }).catch((e) => {
            console.log(`error : `, e)
        })

    }
    catch (e) {
        res.json({ success: false })
    }
})


module.exports = router