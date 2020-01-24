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

router.get('/:id', (req, res) => {
    Projects.get(req.params.id)
    .then(proj => {
        if(proj){
            res.json(proj)
        } else {
            res.status(404).json({ errorMessage: 'Project not found.'})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Problem fetching projects'})
    });
});

router.get('/:id/tasks', (req, res) => {
    Projects.getTasks(req.params.id)
    .then(tasks => {
        if(tasks){
            res.json(tasks)
        } else {
            res.json({ message: 'No tasks yet.'})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Problem fetching projects'})
    });
})

router.post('/', (req, res) => {
    let project = req.body
    Projects.insert(project)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Could not add project."})
    });
});

module.exports = router;