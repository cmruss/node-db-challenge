const db = require('../data/db-config');

module.exports = {
    get,
    insert
};

//** GET **//
function get() {
    return db('resources')
};


//** POST **//
function insert(resource) {
    return db('resources')
        .insert(resource)
        .then(this.get())
};