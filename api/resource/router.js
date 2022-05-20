const express = require('express')
const Resources = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Resources.getAll()
    .then(result => {
        res.json(result)
    })
})

module.exports = router