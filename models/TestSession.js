const mongoose = require('mongoose');

const testSessionSchema = new mongoose.Schema({
  state: {
    type: String,
    enum: ['not-started', 'started', 'finished'],
    default: 'not-started'
  },
  testId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Test'
  },
  userId: { // User or device ID
    type: String,
    unique: true,
    required: true
  }
},{
  toJSON: { virtuals: true },  // otherwise virtuals are not visible
  toObject: { virtuals: true }
});

testSessionSchema.virtual('answers', {
  ref: 'Answer', // what model to link?
  localField: '_id', // which field on the Test?
  foreignField: 'testSessionId' // which field on the Step?
});

module.exports = mongoose.model('TestSession', testSessionSchema);