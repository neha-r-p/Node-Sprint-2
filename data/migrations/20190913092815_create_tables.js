exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments();

      tbl.string("name").notNullable();
      tbl.string("description", 500);
      tbl.boolean("completed").defaultTo(false);
    })
    .createTable("resources", tbl => {
      tbl.increments();

      tbl
        .string("name")
        .notNullable()
        .unique();
      tbl.string("description", 500);
    })
    .createTable("project_resources", tbl => {
      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.primary(["project_id", "resource_id"]);
    })
    .createTable("tasks", tbl => {
      tbl.increments();
      tbl.string("description", 500).notNullable();
      tbl.string("notes", 1000);
      tbl.boolean("completed").defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {};
