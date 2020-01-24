const db = require('../data/db-config');
const mappers = require("../mappers");

module.exports = {
    get,
    insert
}

function get(id) {
    let query = db('tasks');

    if (id) {
        return query
            .where("id", id)
            .first()
            .then(task => {
                if (task) {
                    return mappers.taskToBody(task);
                } else {
                    return null;
                }
            });
    } else {
        return query.then(tasks => {
            return tasks.map(task => mappers.taskToBody(task));
        });
    }
};

function insert(task) {
    return db("tasks")
        .insert(task)
        .then(([id]) => this.get(id));
}