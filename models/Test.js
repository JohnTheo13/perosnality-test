const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
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
  }
}, {
  toJSON: { virtuals: true },  // otherwise virtuals are not visible
  toObject: { virtuals: true }
});

// find steps where the test _id property === test Step  property
testSchema.virtual('steps', {
  ref: 'Step', // what model to link?
  localField: '_id', // which field on the Test?
  foreignField: 'test' // which field on the Step?
});

module.exports = mongoose.model('Test', testSchema);