const router = require('express').Router();
const {
    getAllUser,
    createUser,
    getUserById
} = require('../../controllers/user-controller');


// /api/users
router
.route('/')
.get(getAllUser)
.post(createUser);

// /api/users/:userId
router
.route('/:userId')
.get(getUserById);


module.exports = router