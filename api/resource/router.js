const express = require('express')
const Resources = require('./model')
const { checkResourceName } = require('./middleware')
const router = express.Router()

router.get('/', (req, res) => {
    Resources.getAll()
    .then(result => {
        res.json(result)
    })
})

router.post('/', checkResourceName, (req, res) => {
    Resources.post(req.body)
    .then(result => {
        res.json(result)
    })
})

module.exports = router