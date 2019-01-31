const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  translationKey: {
    type: String,
    lowercase: true
  },
  icon: String,
  descriptionStrong: String,
  descriptionPit: String,
  roleWords: [{
    type: mongoose.Schema.ObjectId,
    ref: 'RoleWords'
  }]
});

module.exports = mongoose.model('Role', roleSchema);