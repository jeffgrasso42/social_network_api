// DEPENDENCIES
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    User.find()
      .select('-__v')
      .then(users => {
        res.json(users);
      })
      .catch(err => res.status(500).json(err));
  },

  // Get one user by ID
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('thoughts')
      .then(user => (!user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user)))
      .catch(err => res.status(500).json(err));
  },

  // Create a user
  createUser(req, res) {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.status(500).json(err));
  },

  // Update an existing user by ID
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .then(user => {
        if (!user) {
          return res.status(404).json({ message: 'No user with this id!' });
        }
        res.json(user);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // Delete a user by ID
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId }).then(user => {
      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }
      res.json({ message: 'User deleted!' });
    });
  },
};
