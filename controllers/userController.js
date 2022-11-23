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
};
