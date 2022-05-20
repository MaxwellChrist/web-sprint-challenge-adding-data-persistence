const checkProjectName = (req, res, next) => {
    const pa = req.body.project_name
    if (typeof pa !== 'string' || pa === "") {
        res.status(400).json({ message: "Error: no project name provided" })
        return
    }
    next()
}

module.exports = {
    checkProjectName
}