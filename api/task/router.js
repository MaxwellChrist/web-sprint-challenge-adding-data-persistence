const express = require('express')
const Tasks = require('./model')
const { checkProjectId, checkTaskInfoComplete } = require('./middleware')
const router = express.Router()

router.get('/', (req, res) => {
    Tasks.getAll()
    .then(result => {
        result.map(item => {
            item.task_completed = Boolean(item.task_completed)
        })
        res.json(result)
    })
})

router.post('/', checkTaskInfoComplete, checkProjectId, (req, res) => {
    Tasks.post(req.body)
    .then(result => {
        result.task_completed = Boolean(result.task_completed)
        res.json(result)
    })
})

module.exports = router