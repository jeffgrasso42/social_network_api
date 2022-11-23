const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router
  .route('/')
  // GET - all users
  .get(getUsers)
  // POST - create a user
  .post(createUser);

// /api/users/"userId"
router
  .route('/:userId')
  // GET - get one user by ID
  .get(getSingleUser)
  // PUT - update a user by ID
  .put(updateUser)
  // DELETE - delete a user by ID
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  // PUT - add a friendId to the users friend array
  .put(addFriend)
  // DELETE - remove a friendId from the user's friend array
  .delete(removeFriend);

module.exports = router;
