const db = require('../../data/dbConfig');

const checkResourceName = async (req, res, next) => {
    const checker = await db('resources').select('resource_name').where('resource_name', req.body.resource_name)
    if (checker.length > 0) {
        res.status(400).json({ message: "Error: resource name already exists" })
    } else {
        next()
    }
}

module.exports = {
    checkResourceName
}