const mongoose = require('mongoose');

const testSessionSchema = new mongoose.Schema({
  state: {
    type: String,
    enum: ['not-started', 'started', 'finished']
  },
  test: {
    type: mongoose.Schema.ObjectId,
    ref: 'Test'
  },
  step: {
    type: mongoose.Schema.ObjectId,
    ref: 'Step'
  }
});

module.exports = mongoose.model('TestSession', testSessionSchema);