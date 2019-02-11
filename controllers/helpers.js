const mongoose = require('mongoose');
const Test = mongoose.model('Test');
const TestSession = mongoose.model('TestSession');
const Answer = mongoose.model('Answer');

exports.generateTest = async (testId, userId, testSessionId = undefined) => {
  let newTestSession;
  let answers;
  if (testSessionId) {
    // answers = await Answer.find({ testSession: testSessionId });
  } else {
    const testSession = await TestSession.findOne({ userId }).populate('test');
    if (!testSession) {
      const newTestSession = new TestSession({ test: testId, userId });
      const testSession = await newTestSession.populate('test').save();
      return testSession
    }
    return testSession;
  }
}