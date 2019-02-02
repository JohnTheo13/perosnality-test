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
  test: {
    type: mongoose.Schema.ObjectId,
    ref: 'Test'
  }
});

// function autoPopulate(next) {
//   this.populate('roles');
//   next();
// }

// stepSchema.pre('find', autoPopulate);
// stepSchema.pre('findOne', autoPopulate);

module.exports = mongoose.model('Step', stepSchema);