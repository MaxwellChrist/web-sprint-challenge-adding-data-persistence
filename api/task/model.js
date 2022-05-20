const db = require('../../data/dbConfig');

function getAll() {
    return db('tasks as t')
    .select('t.*', 'p.project_name', 'p.project_description')
    .join('projects as p', 't.project_id', 'p.project_id')
}

module.exports = {
    getAll
}