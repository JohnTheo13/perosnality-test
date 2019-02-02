const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  data: Object,
  testSession: {
    type: mongoose.Schema.ObjectId,
    ref: 'Answer'
  }
});

module.exports = mongoose.model('Answer', answerSchema);