const db = require('../../data/dbConfig');

function getAll() {
    return db('projects')
}

function post(item) {
    return db('projects').insert(item)
    .then(result => {
        return db('projects'). where("project_id", result).first()
    })
}

module.exports = {
    getAll, post
  }