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
    testSession = await TestSession.findOne({ userId });
    if (!testSession) {
      const newTestSession = new TestSession({ testId, userId });
      await newTestSession.save();
      // const testPromise = Test.findOne({ _id: testId })
      // const [session, test] = await Promise.all([sessionSavePromise, testPromise])
      return newTestSession;
    }
    return testSession;
  }
}