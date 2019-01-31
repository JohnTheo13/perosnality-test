const mongoose = require('mongoose');
const { Schema } = mongoose;

const testSchema = new Schema({
  name: {
    type: String,
    required: 'You need to provide a name for your test'
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: 'You need to provide your description'
  },
  steps: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Step'
  }]
});

module.exports = mongoose.model('Test', testSchema);