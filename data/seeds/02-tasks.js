
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      id: 1,
      project_id: 1,
      description: 'task description',
      notes: 'the task notes',
      completed: false 
    },
    {
      id: 2,
      project_id: 2,
      description: 'another task description',
      notes: 'the task notes',
      completed: false 
    },
    {
      id: 3,
      project_id: 3,
      description: 'yet another task description',
      notes: 'the task notes',
      completed: false 
    }
  ]);
};
