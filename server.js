const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('./projects/projects-router');
const tasksRouter = require('./tasks/tasks-router');
const resourcesRouter = require('./resources/resources-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/tasks', tasksRouter);
server.use('/api/resources', resourcesRouter);


module.exports = server;