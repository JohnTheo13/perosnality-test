const mongoose = require('mongoose');

const backSchema = new mongoose.Schema({
  otherId: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Back', backSchema);