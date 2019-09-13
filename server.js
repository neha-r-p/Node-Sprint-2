const express = require('express');
const helmet = require('helmet');

const Projects = require('./data/db-helpers/project-model')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/projects', (req, res) => {
	Projects.getProjects()
	.then(projects => {
		res.status(200).json(projects)
	})
	.catch(err => {
		res.json(err)
	})
})

module.exports = server