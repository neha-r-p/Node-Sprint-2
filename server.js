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
		res.status(500).json({ error: "Failed to retrieve projects" })
	})
})

server.post('/api/projects', (req, res) => {
    const newProject = req.body

    Projects.addProject(newProject)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        res.status(500).json({ error: "Failed to create new project" })
    })
})

module.exports = server