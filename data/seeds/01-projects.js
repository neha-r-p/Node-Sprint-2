
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Wake Up', description: 'wake tf up', completed: true},
        {name: 'Shirt', description: 'sew shirt for dad', completed: false},
        {name: 'Dress', description: 'sew dress for mom', completed: true},
      ]);
    });
};
