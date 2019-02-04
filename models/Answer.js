const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  data: Object,
  testSessionId: {
    type: mongoose.Schema.ObjectId,
    ref: 'TestSession'
  },
  stepId: {
    type: mongoose.Schema.ObjectId,
    ref: 'step'
  }
});

module.exports = mongoose.model('Answer', answerSchema);