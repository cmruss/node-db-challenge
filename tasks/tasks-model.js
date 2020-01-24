const db = require('../data/db-config');
const mappers = require("../mappers");

module.exports = {
    get,
    insert
}

function get(id) {
    let query = db('tasks as t');

    if (id) {
        return query
            .where("t.id", id)
            .first()
            .join('projects as p', 't.project_id', '=', 'p.id')
            .select('p.name as project_name', 'p.description as project_description', 't.description as task_description', 't.notes as task_notes')
            .then(task => {
                if (task) {
                    return mappers.taskToBody(task);
                } else {
                    return null;
                }
            });
    } else {
        return query
            .join('projects as p', 't.project_id', '=', 'p.id')
            .select('p.name as project_name', 'p.description as project_description', 't.description as task_description', 't.notes as task_notes')
            .then(tasks => {
            return tasks.map(task => mappers.taskToBody(task));
        });
    }
};

function insert(task) {
    return db("tasks")
        .insert(task)
        .then(([id]) => this.get(id));
}