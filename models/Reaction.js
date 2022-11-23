const { Schema } = require('mongoose');
const date = require('../utils/date.js');

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: new ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    max: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: timestamp => date(timestamp),
  },
});

module.exports = reactionSchema;
