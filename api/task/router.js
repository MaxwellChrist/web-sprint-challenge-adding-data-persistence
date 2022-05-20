const express = require('express')
const Tasks = require('./model')
const { checkTasks } = require('./middleware')
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

module.exports = router