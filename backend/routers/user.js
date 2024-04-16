const express = require('express')
const router = express.Router()
const user = require('../models/user')

const verify = require('../routers/verification')

router.post('/userdata', verify, async (req, res) => {
    try {
        // *****cookie*********
        // console.log(`cookie : `, req.cookies)
        const username = req.body.username
        const t = await user.findOne({ Username: username })
        if (t) {
            res.json({ success: true, password: t.Password, user: t })
        }
        else if (!t) {
            res.json({ success: false, message: "invalid credentials" })
        }
    }
    catch (e) {
        res.json({ success: false })
    }
})

module.exports = router