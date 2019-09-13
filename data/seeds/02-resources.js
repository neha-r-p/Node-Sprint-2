
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {name: "Mom yelling", description: "Mother"},
        {name: "Cold water", description: "Splish Splash"},
        {name: "Sewing for Dummies", description: "Book"},
        {name: "Adult Sewing Class", description: "Class by Megan Selby"},
      ]);
    });
};
