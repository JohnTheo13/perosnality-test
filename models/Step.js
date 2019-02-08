const mongoose = require('mongoose');

const stepSchema = new mongoose.Schema({
  sequenceNumber: Number,
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['checklist', 'orderlist']
  },
  testId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Test'
  }
});

module.exports = mongoose.model('Step', stepSchema);