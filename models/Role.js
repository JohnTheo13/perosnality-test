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
  roleId: {
    type: Number,
    required: true
  },
  icon: String,
  descriptionStrong: String,
  descriptionPit: String,
  stepId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Step'
  }
}, {
  toJSON: { virtuals: true },  // otherwise virtuals are not visible
  toObject: { virtuals: true }
});

roleSchema.virtual('words', {
  ref: 'RoleWord', // what model to link?
  localField: 'roleId', // which field on the Test?
  foreignField: 'roleId' // which field on the Step?
});

module.exports = mongoose.model('Role', roleSchema);