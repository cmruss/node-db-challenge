const express = require('express');
const Tasks = require('./tasks-model');
const router = express.Router();

//**  GET  **//
router.get('/', (req, res) => {
    Tasks.get()
    .then(task => {
        res.json(task)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Problem fetching tasks'})
    });
});

router.get('/:id', (req, res) => {
    Tasks.get(req.params.id)
    .then(task => {
        if(task){
            res.json(task)
        } else {
            res.status(404).json({ errorMessage: 'Task not found.'})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Problem fetching tasks'})
    });
});


//**  POST  **//
router.post('/', (req, res) => {
    let task = req.body
    Tasks.insert(task)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Could not add task."})
    });
});

module.exports = router;