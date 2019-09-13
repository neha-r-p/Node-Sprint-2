const db = require("../db-config");

module.exports = {
  addResource,
  getResources,
  addProject,
  getProjects,
  getProjectById,
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

function getProjectById(id) {
    return db('projects')
            .where({ id })
            .first();
};

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(task => task);
}

function getTasks(id) {
  //should include project name and description
  return db("projects")
    .join("tasks", "projects.id", "tasks.project_id")
    .where({ project_id: id })
    .select(
      "tasks.id",
      "project.name",
      "project.description",
      "project.completed",
      "task.description",
      "task.completed"
    )
    .then(tasks => tasks);
}
