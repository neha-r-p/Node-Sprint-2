const db = require("../db-config");

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  addTask,
  getTasks
};

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(resource => resource);
}

function getResources() {
  return db("resources");
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(project => project);
}

function getProjects() {
  return db("projects");
}

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(task => task);
}

function getTasks() {
  //should include project name and description
}
