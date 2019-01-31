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
  roles: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Role'
  }],
  roleWords: [{
    type: mongoose.Schema.ObjectId,
    ref: 'RoleWords'
  }]
});

module.exports = mongoose.model('Step', stepSchema);