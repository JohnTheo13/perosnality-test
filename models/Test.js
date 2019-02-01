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
  },
  steps: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Step'
  }]
});

// function autoPopulate(next) {
//   this.populate({path: 'steps'});
//   next();
// }

// testSchema.pre('find', autoPopulate);
// testSchema.pre('findOne', autoPopulate);

module.exports = mongoose.model('Test', testSchema);