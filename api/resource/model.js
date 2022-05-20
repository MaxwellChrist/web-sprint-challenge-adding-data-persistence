const db = require('../../data/dbConfig');

function getAll() {
    return db('resources')
}

module.exports = {
    getAll
  }