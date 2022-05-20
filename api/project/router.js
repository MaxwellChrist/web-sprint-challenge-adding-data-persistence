// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')
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

module.exports = router