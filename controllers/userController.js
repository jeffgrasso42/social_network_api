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
  // Get one user
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
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.status(500).json(err));
  },
};
