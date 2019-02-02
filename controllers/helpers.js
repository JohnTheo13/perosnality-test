const mongoose = require('mongoose');
const Test = mongoose.model('Test');
const TestSession = mongoose.model('TestSession');
const Answer = mongoose.model('Answer');

exports.generateTest = async (testId, testSessionId = undefined) => {
  let newTestSession;
  let answers;
  if (testSessionId) {
    // answers = await Answer.find({ testSession: testSessionId });
  } else {
    newTestSession = new TestSession({ test: testId });
    const sessionSavePromise = newTestSession.save();
    const testPromise = Test.findOne({ _id: testId })
    const [session, test] = await Promise.all([sessionSavePromise, testPromise])
    return test;
  }
}