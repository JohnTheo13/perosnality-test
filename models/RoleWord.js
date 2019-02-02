const mongoose = require('mongoose');

const roleWordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  translationKey: String,
  role: {
    type: mongoose.Schema.ObjectId,
    ref: 'Role'
  },
  step: {
    type: mongoose.Schema.ObjectId,
    ref: 'Step'
  }
});

module.exports = mongoose.model('RoleWord', roleWordSchema);