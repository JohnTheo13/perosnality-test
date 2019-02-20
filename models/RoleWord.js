const mongoose = require('mongoose');

const roleWordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  wordId: {
    type: Number,
    unique: true
  },
  translationKey: String,
  roleId: {
    type: Number,
    required: true
  },
  stepId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Step'
  }
});

module.exports = mongoose.model('RoleWord', roleWordSchema);