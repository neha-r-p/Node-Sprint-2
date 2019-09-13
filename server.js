const express = require("express");
const helmet = require("helmet");

const Projects = require("./data/db-helpers/project-model");

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/api/projects", (req, res) => {
  Projects.getProjects()
    .then(projects => {
    //   console.log("projects", projects);
      let projArr = projects.map(project => {
        return {
          ...project,
          completed: project.completed === 1 ? true : false
        };
      });
      res.status(200).json(projArr);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to retrieve projects" });
    });
});

server.get("/api/projects/:id", (req, res) => {
  const id = req.params.id;

  Projects.getProjectById(id)
    .then(project => {
      console.log({ ...project });
      let bool = { ...project, completed: project.completed === 1 ? true : false };
      res.status(200).json(bool);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "Project with specified id could not be retrieved" });
    });
});

server.post("/api/projects", (req, res) => {
  const newProject = req.body;

  Projects.addProject(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to create new project" });
    });
});

server.get("/api/resources", (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({ error: "Failed to retrieve resources" });
    });
});

server.post("/api/resources", (req, res) => {
  const newResource = req.body;

  Projects.addResource(newResource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      console.log("resource GET", err);
      res.status(500).json({ error: "Failed to create new resource" });
    });
});

server.get("/api/tasks", (req, res) => {
    console.log(req.params)
    Projects.getTasks()
    .then(tasks => {
        console.log("GET tasks",tasks);

        let taskArray = tasks.map(task => {
            return {...task, completed:task.completed === 1 ? true : false }
        })
        res.status(200).json(taskArray)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Failed to retrieve tasks" })
    })
})

server.post("/api/tasks", (req, res) => {
    const newTask = req.body;
  
    Projects.addTask(newTask)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        console.log("task POST", err);
        res.status(500).json({ error: "Failed to create new task" });
      });
  });

module.exports = server;
