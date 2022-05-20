const db = require('../../data/dbConfig');

function getAll() {
    return db('tasks as t')
    .select('t.*', 'p.project_name', 'p.project_description')
    .join('projects as p', 't.project_id', 'p.project_id')
}

function post(item) {
    return db('tasks').insert(item)
    .then(result => {
        return db('tasks').where("task_id", result).first()
    })
}

module.exports = {
    getAll, post
}