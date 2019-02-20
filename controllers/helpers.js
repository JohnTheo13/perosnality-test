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
    const testSession = await TestSession
      .findOneAndUpdate(
        { userId, test: testId },
        { userId, test: testId },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      )
      .populate({
        path: 'test',
        populate: { path: 'steps', populate: { path: 'words' } },
      })
      .populate('answers')
      .populate('step');
    console.log(testSession.test.steps)
    return { testSession };
  }
}