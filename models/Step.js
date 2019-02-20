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
  testId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Test'
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

stepSchema.virtual('words', {
  ref: 'RoleWord', // what model to link?
  localField: '_id', // which field on the Test?
  foreignField: 'stepId' // which field on the Step?
});

module.exports = mongoose.model('Step', stepSchema);