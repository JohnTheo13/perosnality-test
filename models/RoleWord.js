const mongoose = require('mongoose');

const roleWordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  translationKey: String
});

module.exports = mongoose.model('RoleWord', roleWordSchema);