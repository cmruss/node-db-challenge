const db = require('../data/db-config');

module.exports = {
    get,
    insert
};

//** GET **//
function get(id) {
    let query = db('resources')

    if (id) {
        return query
            .where('id', id)
            .first()
    } else {
        return query
    }
};


//** POST **//
function insert(resource) {
    return db('resources')
        .insert(resource)
        .then(this.get())
};