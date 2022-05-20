const db = require('../../data/dbConfig');

function getAll() {
    return db('resources')
}

function post(item) {
    return db('resources').insert(item)
    .then(result => {
        return db('resources'). where("resource_id", result).first()
    })
}

module.exports = {
    getAll, post
}