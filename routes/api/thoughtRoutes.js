const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  // GET - all thoughts
  .get(getThoughts)
  // POST - create a user
  .post(createThought);

// api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  // GET - get one thought by ID
  .get(getSingleThought)
  // PUT - update a thought by ID
  .put(updateThought)
  // DELETE - delete a thought by ID
  .delete(deleteThought);

module.exports = router;
