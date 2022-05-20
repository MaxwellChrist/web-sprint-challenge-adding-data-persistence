const express = require('express')
const Projects = require('./model')
const { checkProjectName } = require('./middleware');
const router = express.Router()

router.get('/', (req, res) => {
    Projects.getAll()
    .then(result => {
        result.map(item => {
            item.project_completed = Boolean(item.project_completed)
        })
        res.json(result)
    })
})

router.post('/', checkProjectName, (req, res) => {
    Projects.post(req.body)
    .then(result => {
        result.project_completed = Boolean(result.project_completed)
        res.json(result)
    })
})

module.exports = router