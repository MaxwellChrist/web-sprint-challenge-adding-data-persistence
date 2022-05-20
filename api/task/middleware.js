const db = require('../../data/dbConfig');

const checkTaskInfoComplete = (req, res, next) => {
    const td = req.body.task_description
    const pi = req.body.project_id
    if (td == null || td.trim() === ""  || typeof pi != "number" || pi == null) {
        res.status(400).json({ message: "Error: No task description and/or project ID provided" })
    } else {
        next()
    }
}

const checkProjectId = async (req, res, next) => {
    const results = await db('projects').select('projects.project_id').where('projects.project_id', req.body.project_id).first()
    if (results) {
        next();
    } else {
        res.status(400).json({ message: "Error: No project with provided project ID found" })
    }
}

module.exports = {
    checkProjectId, checkTaskInfoComplete
}