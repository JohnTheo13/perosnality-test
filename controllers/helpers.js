const mongoose = require('mongoose');
const Test = mongoose.model('Test');
const TestSession = mongoose.model('TestSession');
const Answer = mongoose.model('Answer');

exports.generateTest = async (testId, testSessionId = undefined) => {
  let testSession;
  let answers;
  if (testSessionId) {
    answers = await Answer.find({ testSession: testSessionId });
  } else {
    // testSession = new TestSession({ test: testId });
    // await testSession.save();
  }

  const test = await Test.findOne({ _id: testId })

  console.log(test)
  return test;
}