const db = require('../data/db-config');
const mappers = require("../mappers");


module.exports = {
    get,
    getTasks,
    insert
}


function get(id) {
    let query = db('projects');

    if (id) {
        return query
            .where('id', id)
            .first()
            .then(project => {
                if (project) {
                    return mappers.projectToBody(project)
                        .then()
                } else {
                    return null;
                }
            });
    } else {
        return query.then(projects => {
            return projects.map(project => mappers.projectToBody(project));
        });
    }
};

function getTasks(project_id) {
    return db('tasks as t')
    .where('project_id', project_id)
    .join('projects as p', 't.project_id', '=', 'p.id')
    .select('p.name as project_name', 'p.description as project_description', 't.description as task_description', 't.notes as task_notes')
    .then(tasks => {
        return tasks.map(task => mappers.taskToBody(task));
    })
};

function insert(project) {
    return db('projects')
        .insert(project)
        .then(([id]) => this.get(id));
};
