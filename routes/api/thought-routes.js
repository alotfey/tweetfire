const router = require("express").Router();
const {
  getAllThought,
  createThought,
  getThoughtById,
  updateThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controllers");

// /api/thoughts
router
.route("/")
.get(getAllThought)
.post(createThought)

router.route("/:userId").post(createThought);

// /api/thoughts/:id
router
.route("/:thoughtId")
.get(getThoughtById)
.put(updateThought)
.delete(removeThought)


router
.route('/:userId/:thoughtId')

router
.route('/:thoughtId/reactions')
.post(addReaction)

router
.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction)

module.exports = router;
