const express = require('express');
const Resources = require('./resources-model');
const router = express.Router();

//**  GET  **//
router.get('/', (req, res) => {
    Resources.get()
    .then(resources => {
        res.json(resources)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Problem fetching resources'})
    });
});

router.get('/:id', (req, res) => {
    Resources.get(req.params.id)
    .then(resource => {
        if (resource){
            res.json(resource)
        } else {
            res.status(404).json({ errorMessage: 'Resource not found.'})
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ errorMessage: 'Problem fetching resources'})
    });
});


//**  POST  **//
router.post('/', (req, res) => {
    let resource = req.body
    Resources.insert(resource)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Could not add resource."})
    });
});

module.exports = router;