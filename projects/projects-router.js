const express = require('express');
const Projects = require('./projects-model');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.get()
    .then(proj => {
        res.json(proj)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Problem fetching projects'})
    });
});

router.get('/:id/tasks', (req, res) => {
    Projects.getTasks(req.params.id)
    .then(task => {
        res.json(task)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Problem fetching projects'})
    });
})

module.exports = router;