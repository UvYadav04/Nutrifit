
const express = require('express')
const router = express.Router()
const user = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const key = "dinesh yadav"
const { getJson } = require('serpapi')
const deasy = require('../models/deasy')
require('dotenv').config()
const { createClient } = require('pexels')
const client = createClient(process.env.Access_key);

// All requests made with the client will be authenticated



router.post('/getimages', async (req, res) => {
    try {
        const name = req.body.name
        const response = await fetch(`https://pixabay.com/api/?key=43206025-f2d5ff78cb18fce06c7cbc662&q=${name}&image_type=photo&pretty=true`)
        const json = await response.json()
        console.log(json.hits[0])
        res.json({ success: true, results: json })
    }
    catch (e) {
        console.log(`error : `, e)
        res.json({ success: false })
    }
})

router.post('/search', async (req, res) => {
    let input = req.body.d.toLowerCase()
    const des = await deasy.find({
        $or: [{ Name: { $regex: `${input}`, $options: "i" } }, { Symptoms: { $in: [input] } }]
    })
    res.json({ data: des })
})

module.exports = router