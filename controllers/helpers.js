const mongoose = require('mongoose');
const Test = mongoose.model('Test');
const TestSession = mongoose.model('TestSession');
const Answer = mongoose.model('Answer');

exports.generateTest = async (testId, userId, testSessionId) => {
  let testSession;

  if (testSessionId) {
    await Answer.deleteMany({ testSessionId });
    testSession = await TestSession
      .findByIdAndUpdate(
        testSessionId,
        { state: 'not-started', step: null },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      )
      .populate({
        path: 'test',
        populate: { path: 'steps', populate: { path: 'words' } },
      })
      .populate('answers')
      .populate('step');
  } else {
    testSession = await TestSession
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
  }
console.log(testSession)
  return { testSession };
}