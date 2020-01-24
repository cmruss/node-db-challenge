
exports.up = function(knex) {
  return knex.schema

    //**  PROJECTS  **//
    .createTable('projects', tbl => {

        tbl.increments();

        tbl.string('name', 128)
        .notNullable()
        .index();

        tbl.string('description', 255)
        .notNullable();

        tbl.boolean('completed')
        .defaultTo(false)
        .notNullable();
    })

    //**  TASKS  **//
    .createTable('tasks', tbl => {

        tbl.increments();

        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl.string('description', 255)
        .notNullable();

        tbl.string('notes', 255)
        .notNullable();

        tbl.boolean('completed')
        .defaultTo(false)
        .notNullable();
    })

    //**  RESOURCES  **//
    .createTable('resources', tbl => {

        tbl.increments();

        tbl.string('name', 128)
        .unique()
        .notNullable();

        tbl.string('description', 255)
        .notNullable();
    });

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};
