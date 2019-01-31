const mongoose = require('mongoose');
const Test = mongoose.model('Test');

exports.getTests = async (ctx, next) => {
  const tests = await Test.find();
  ctx.body = tests
}