// DEPENDENCIES
const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.find().select('-__v');
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get one user by ID
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: ObjectId(req.params.userId) })
        .select('-__v')
        .populate('thoughts')
        .populate('friends');

      // return 404 if user is falsy
      !user ? res.status(404).json({ message: 'No user with that ID' }) : res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Update an existing user by ID
  async updateUser(req, res) {
    try {
      const updtadedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      // return 404 if user is falsy
      !updtadedUser ? res.status(404).json({ message: 'No user with that ID' }) : res.json(updtadedUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Delete a user by ID
  async deleteUser(req, res) {
    try {
      const deletedUser = await User.findOneAndDelete({ _id: req.params.userId });

      !deletedUser ? res.status(404).json({ message: 'No user with that ID' }) : res.json(deletedUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add friend
  async addFriend(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: req.params.friendId } },
        { new: true }
      );

      !updatedUser ? res.status(404).json({ message: 'No user with this id!' }) : res.json(updatedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
  },

  // Remove friend
  async removeFriend(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );

      !updatedUser ? res.status(404).json({ message: 'No user with this id!' }) : res.json(updatedUser);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
