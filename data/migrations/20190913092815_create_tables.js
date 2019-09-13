exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
      tbl.increments();

      tbl.string('name').notNullable();
      tbl.string('description')
      tbl.boolean('completed').defaultTo(false);
  })
};

exports.down = function(knex) {
  
};
