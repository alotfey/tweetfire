const router = require('express').Router();
const {
    getAllThought,
    createThought,
    getThoughtById
} = require('../../controllers/thought-controllers');


// /api/thoughts
router
.route('/')
.get(getAllThought)
.post(createThought);

// /api/thoughts/:id
router
.route('/:thoughtId')
.get(getThoughtById)



module.exports = router