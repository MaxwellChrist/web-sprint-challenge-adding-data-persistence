const db = require('../../data/dbConfig');

const checkTasks = async (req, res, next) => {
    const results = await db('projects').select('projects.project_id').where('projects.project_id', req.body.project_id).first()
    if (results) {
        next();
    } else {
        res.status(400).json({ message: "Error: No project with provided project ID found" })
    }
}

module.exports = {
    checkTasks
}