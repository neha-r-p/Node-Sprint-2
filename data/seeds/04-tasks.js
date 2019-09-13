
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {project_id: 1, description: 'roll out of bed', completed: true, notes: 'do not land on face'},
        {project_id: 1, description: 'brush teeth', completed: true, notes: 'minty fresh'},
        {project_id: 2, description: 'take dads body measurements', completed: true, notes: ''},
        {project_id: 2, description: 'cut fabric', completed: true, notes: ''},
        {project_id: 2, description: 'sew fabric', completed: true, notes: ''},
        {project_id: 2, description: 'fit prototype to body', completed: false, notes: 'length, sleeves, wiggle room'},
        {project_id: 3, description: 'take moms body measurements', completed: true, notes: ''},
        {project_id: 3, description: 'cut sari fabric', completed: true, notes: ''},
        {project_id: 3, description: 'sew fabric into dress', completed: true, notes: ''},
      ]);
    });
};
