const mongoose = require('mongoose');

const storiesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: String
  }
});

module.exports = mongoose.model('Story', storiesSchema);