
exports.seed = function(knex) {
  return knex('projects').insert([
    {
      id: 1, 
      name: 'first project',
      description: 'the project description',
      completed: false,
    },
    {
      id: 2, 
      name: 'second project',
      description: 'the project description',
      completed: false,
    },
    {
      id: 3, 
      name: 'third project',
      description: 'the project description',
      completed: false,
    }
  ]);
};
