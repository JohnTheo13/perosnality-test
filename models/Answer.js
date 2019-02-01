const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  data: Object,
  step: {
    type: mongoose.Schema.ObjectId,
    ref: 'Step'
  },
  testSession: {
    type: mongoose.Schema.ObjectId,
    ref: 'TestSession'
  }
});

module.exports = mongoose.model('Answer', answerSchema);