const router = require('express').Router();
const {
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    addFriend
} = require('../../controllers/user-controller');


// /api/users
router
.route('/')
.get(getAllUser)
.post(createUser);

// /api/users/:userId
router
.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)

router
.route('/:userId/friends/:friendId')
.post(addFriend)

module.exports = router