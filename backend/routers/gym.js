const express = require('express')
const router = express.Router()
const workout = require('../models/gym')


router.post('/getdata', async (req, res) => {
    const { day, level } = req.body
    // console.log(req.body)

    const workouts = await workout.find({ Day: day, Level: level })
    // console.log(workouts)
    res.json({ success: true, data: workouts })
})

module.exports = router