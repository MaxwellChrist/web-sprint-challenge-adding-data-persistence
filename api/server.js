// build your server here and require it from index.js
const express = require('express');

const projectsRouter = require('./project/router.js');
const resourceRouter = require('./resource/router.js');
const taskRouter = require('./task/router.js');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.use('*', (req, res) => {
    res.json({ message: "Server up and running!" })
})

module.exports = server;