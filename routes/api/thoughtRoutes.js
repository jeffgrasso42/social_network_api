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

module.exports = router;
